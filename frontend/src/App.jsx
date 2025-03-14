import Landingpage from './landingpage'
import Navbar from './navbar'
import Footer from './footer'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Report from './report'; // Adjust the path as needed
import { ClerkProvider,useUser } from '@clerk/clerk-react';

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
      </Routes>
      <Footer />

    </Router>
    </>
  )
}

export default App
