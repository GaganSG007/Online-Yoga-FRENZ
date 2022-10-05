
import './App.css';
import Home from './component/Home/Home/Home';
import Login from './component/Login/Login';
import AdminLogin from './component/Login/adminlogin';
import UserDashBoard from './component/Dashboard/UserDashBoard/UserDashBoard';
import Courses from './component/Dashboard/Courses/Courses';
import BookingOrders from './component/Dashboard/BookingOrders/BookingOrders';
import AdminControl from './component/Dashboard/AdminControl/AdminControl';
import ContactUs from './component/Home/contact/contact';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function contact() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/AdminLogin" element={<AdminLogin/>}/>
          <Route path="/adminControl" element={<AdminControl/>}/>
          <Route path="/dashboard/course" element={<Courses/>}/>
          <Route path="/dashboard/books" element={<BookingOrders/>}/>
          <Route path="/userdashboard" element={<UserDashBoard/>}/>
          <Route path="/contactus" element={<ContactUs/>}/>
        </Routes>
    </Router>
  );
}

export default contact;
