import Landingpaeg from './landingpaeg'
import Navbar from './navbar'
import Footer from './footer'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Report from './report'; // Adjust the path as needed
import Reward from './reward'; // Adjust the path as needed
import Marketplace from './marketplace';

function App() {

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
