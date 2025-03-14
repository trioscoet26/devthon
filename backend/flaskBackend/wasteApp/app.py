from flask import Flask, jsonify, request
from flask_cors import CORS
import cv2
import pymongo
from geopy.geocoders import Nominatim
from ultralytics import YOLO

app = Flask(_name_)
CORS(app)  # Allow frontend requests

# Load YOLOv8 model
model = YOLO("best.pt")  # Replace with your trained model

# Connect to MongoDB
client = pymongo.MongoClient("mongodb://localhost:27017/")  # Use MongoDB Atlas if needed
db = client["SmartWaste"]
collection = db["GarbageLocations"]

# Function to get GPS coordinates
def get_location():
    geolocator = Nominatim(user_agent="geoapiExercises")
    location = geolocator.geocode("Your City, Your Country")  # Replace with actual location
    return {"latitude": location.latitude, "longitude": location.longitude} if location else None

@app.route('/open_camera', methods=['GET'])
def open_camera():
    cap = cv2.VideoCapture(0)  # Open webcam
    
    while cap.isOpened():
        ret, frame = cap.read()
        if not ret:
            break

        # Run YOLO detection
        results = model(frame)

        # If an object is detected, get and store location
        if len(results) > 0:
            coords = get_location()
            if coords:
                collection.insert_one(coords)  # Store in MongoDB
                print(f"Stored in MongoDB: {coords}")

        # Display results
        for r in results:
            im_array = r.plot()
            cv2.imshow("Garbage Detection", im_array)

        if cv2.waitKey(1) & 0xFF == ord('q'):  # Press 'q' to close camera
            break

    cap.release()
    cv2.destroyAllWindows()
    return jsonify({"message": "Camera closed"})

if _name_ == '_main_':
    app.run(debug=True)