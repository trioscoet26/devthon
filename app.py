from flask import Flask, request, jsonify
from flask_cors import CORS
import logging
from ultralytics import YOLO 
import cv2 
import threading 
import numpy as np, tempfile
# Initialize Flask App
app = Flask(__name__)
CORS(app)  # Enable CORS for frontend communication

# load model 
model = YOLO("best.pt") 

# Configure Logging
logging.basicConfig(level=logging.INFO)

def run_camera():
    cap = cv2.VideoCapture(0)  # Use 0 for webcam, or provide a video file path

    while cap.isOpened():
        ret, frame = cap.read()
        if not ret:
            break

        # Run inference
        results = model(frame)

        # Show results
        for r in results:
            im_array = r.plot()  # Draw results on image
            cv2.imshow("YOLO Garbage Detection", im_array)

        if cv2.waitKey(1) & 0xFF == ord('q'):
            break

    cap.release()
    cv2.destroyAllWindows()

@app.route("/open_camera", methods=["GET"])
def open_camera():
    try:
        thread = threading.Thread(target=run_camera)  # Run camera in a separate thread
        thread.start()
        return jsonify({"message": "Camera started successfully!"})
    except Exception as e:
        return jsonify({"error": str(e)}), 500
    
def process_image(image_data):
    npimg = np.frombuffer(image_data, np.uint8)  # Convert to numpy array
    img = cv2.imdecode(npimg, cv2.IMREAD_COLOR)  # Decode image

    results = model(img)  # Run YOLO inference
    for r in results:
        im_array = r.plot()  # Draw detections
        cv2.imshow("YOLO Garbage Detection", im_array)
        cv2.waitKey(0)
        cv2.destroyAllWindows()

@app.route("/open_image", methods=["POST"])
def open_image():
    try:
        if "file" not in request.files:
            return jsonify({"error": "No file uploaded"}), 400

        file = request.files["file"]
        image_data = file.read()  # Read file bytes

        thread = threading.Thread(target=process_image, args=(image_data,))
        thread.start()

        return jsonify({"message": "Processing image in real-time"}), 200
    except Exception as e:
        return jsonify({"error": str(e)}), 500

def process_video(video_file): 
    # Write video to a temporary file
    with tempfile.NamedTemporaryFile(delete=True, suffix=".mp4") as temp_video:
        temp_video.write(video_file)  # Save uploaded video to temp file
        temp_video.flush()  # Ensure all data is written

        cap = cv2.VideoCapture(temp_video.name)  # Use temp file path
        window_name = "YOLO Garbage Detection"

        # Set the window size
        target_width, target_height = 600, 400  # Adjust as needed
        cv2.namedWindow(window_name, cv2.WINDOW_NORMAL)
        cv2.resizeWindow(window_name, target_width, target_height)

        # Get screen resolution and calculate the center position
        screen_width = 1920  # Change if needed
        screen_height = 1080
        x_pos = (screen_width - target_width) // 2
        y_pos = (screen_height - target_height) // 2

        cv2.moveWindow(window_name, x_pos, y_pos)  # Move window to center

        while cap.isOpened():
            ret, frame = cap.read()
            if not ret:
                break  # Stop if video ends

            results = model(frame)  # Run YOLO inference
            for r in results:
                im_array = r.plot()  # Draw detections
                cv2.imshow(window_name, im_array)

            if cv2.waitKey(1) & 0xFF == ord("q"):  # Press 'q' to exit early
                break

        cap.release()
        cv2.destroyAllWindows()

@app.route("/open_video", methods=["POST"])
def open_video():
    try:
        if "file" not in request.files:
            return jsonify({"error": "No file uploaded"}), 400

        file = request.files["file"]
        video_data = file.read()  # Read file bytes

        thread = threading.Thread(target=process_video, args=(video_data,))
        thread.start()

        return jsonify({"message": "Processing video in real-time"}), 200
    except Exception as e:
        return jsonify({"error": str(e)}), 500

# Run the Flask App
if __name__ == "__main__":
    app.run(debug=True, host="0.0.0.0", port=3000)
