import Landingpage from './landingpage'
import Navbar from './navbar'
import Footer from './footer'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Report from './report'; // Adjust the path as needed

function App() {

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
