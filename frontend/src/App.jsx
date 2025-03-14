import Landingpaeg from './landingpaeg'
import Navbar from './navbar'
import Footer from './footer'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Report from './report'; // Adjust the path as needed
<<<<<<< HEAD
import Reward from './reward'; // Adjust the path as needed
import Marketplace from './marketplace';
=======
import { ClerkProvider,useUser } from '@clerk/clerk-react';
>>>>>>> 7a22e3853501920c03cb31871ecc0eeb9c7ff690

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
        <Route path="/" element={<Landingpaeg />} />
        <Route path="/report" element={<Report />} />
        <Route path="/reward" element={<Reward />} />
        <Route path="/marketplace" element={<Marketplace />} />
      </Routes>
      <Footer />

    </Router>
    </>
  )
}

export default App
