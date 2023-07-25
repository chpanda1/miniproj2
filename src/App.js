
import NavBar from './components/NavBar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import Jobs from './pages/Jobs';
import Services from './pages/Services';
import Home from './pages/Home';

function App() {
  return (
    <div>
      <Router>
        <NavBar />
        <Routes>
           <Route path="/" element={<Home />}></Route>  
           <Route path="/Services" element={<Services />}></Route> 
           <Route path="/Jobs" element={<Jobs />}></Route> 
           <Route path="/AboutUs" element={<AboutUs />}></Route> 
    
           <Route path="/ContactUs" element={<ContactUs />}></Route> 
    
        </Routes>
    
    </Router>

    </div>
  );
}

export default App;
