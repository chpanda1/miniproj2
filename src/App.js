
import NavBar from './components/NavBar';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import Jobs from './pages/Jobs';
import Services from './pages/Services'
import Home from './pages/Home'
import Login from './pages/Login'
import AdminPage from './pages/AdminPage';


function App() {
  return (
      <Router>
        <NavBar />
        <Routes>
           <Route path="/" element={<Home />}></Route>  
           <Route path="/Services" element={<Services />}></Route> 
           <Route path="/Jobs" element={<Jobs />}></Route> 
           <Route path="/AboutUs" element={<AboutUs />}></Route> 
           <Route path="/ContactUs" element={<ContactUs />}></Route>
           <Route path="/AdminPage" element={<AdminPage />}></Route>  
           <Route path="/Login" element={<Login />}></Route> 
           <Route path="*" element={<div>Page Not Found!!</div>}></Route> 
        </Routes>
      </Router>
  );
}



export default App;
