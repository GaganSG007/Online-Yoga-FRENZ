
import { Link } from 'react-router-dom';
import logo from '../../../image/home-yoga-introduce-image.png';
import 'bootstrap/dist/css/bootstrap.css';
import {Nav, Navbar} from 'react-bootstrap';
import './Navbar.css';

const Navbars = () => {
  return (
    <Navbar collapseOnSelect expand="lg">
    <Navbar.Brand href="#home"><img src={logo} style={{ height: '80px', marginTop: '20px', marginLeft: '20px' }} alt="" /></Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav toggle" />
    <Navbar.Collapse id="responsive-navbar-nav toggle">
        <Nav className="ml-auto right list">
            <Nav.Link href="/" className='tc'>Home</Nav.Link>
            <Nav.Link href="#portfolio" className='tc'>Our Portfolio</Nav.Link>
            <Nav.Link href="/login" className='tc'>DashBoard</Nav.Link>
            <Nav.Link href="/contactus" className='tc'>Contact US</Nav.Link>
            <Link to="/login"><button className="login">Login</button></Link>
        </Nav>
    </Navbar.Collapse>
</Navbar>
  );
};

export default Navbars;