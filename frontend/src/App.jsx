import Landingpage from './landingpage'
import Navbar from './navbar'
import Footer from './footer'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Report from './report'; // Adjust the path as needed
import Reward from './reward'; // Adjust the path as needed
import Marketplace from './marketplace';
import { ClerkProvider,useUser } from '@clerk/clerk-react';
import AdminLogin from './adminLogin';
import AdminDashboard from './adminDashboard';
import "./index.css";  
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


function App() {
  const {user} = useUser();

  if(user) {
    console.log('user ID: ',user.id);
  }
  return (
    <> 
    <Router>
    <Navbar />

      <Routes>
        <Route path="/" element={<Landingpage />} />
        <Route path="/report" element={<Report />} />
        <Route path="/reward" element={<Reward />} />
        <Route path="/marketplace" element={<Marketplace />} />
        <Route path="/admin" element={<AdminLogin />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
      </Routes>
      <Footer />
    <ToastContainer />
    </Router>
    </>
  )
}

export default App
