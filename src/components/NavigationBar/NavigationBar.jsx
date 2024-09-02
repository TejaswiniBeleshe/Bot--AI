import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import styles from "./NavigationBar.module.css";
import AILogo from "../../assets/logo.png"
import { FiEdit } from "react-icons/fi";
import { NavLink,Link } from 'react-router-dom';
import { aiContent } from '../../App';
import { useContext } from 'react';

const  NavigationBar = ()=>{
  const {setAllList} = useContext(aiContent);
    const handleNewChat = ()=>{
      setAllList([]);
    }
    return(   
     <div className={styles.navDiv} >
      {['lg'].map((expand) => (
        <Navbar key={expand} expand={expand} className="mb-3">
          <Container fluid>
            {/* <Navbar.Brand href="#">Navbar Offcanvas</Navbar.Brand> */}
            <Navbar.Toggle className='w-auto' aria-controls={`offcanvasNavbar-expand-${expand}`}/>
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="start"
            >
              <Offcanvas.Header closeButton> 
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`} className='w-100 d-flex justify-content-between align-items-center' >

                   <span className={styles.logoDiv}><img src={AILogo} width="40px" height="40px"/></span>
                   <NavLink to="/" className={styles.txtD} onClick={handleNewChat}><h5>New Chat</h5></NavLink>
                   <span><FiEdit size={30}/></span>
              
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <div className='d-flex flex-column w-100 pe-3'>
                <Nav className={` ${styles.navContent} d-none d-lg-flex justify-content-between align-items-center`}>
                   <span className={styles.logoDiv}><img src={AILogo} width="40px" height="40px"/></span>
                   <NavLink to="/" className={styles.txtD} onClick={handleNewChat}><h5 >New Chat</h5></NavLink>
                   <span><FiEdit size={30}/></span>
                </Nav>
                <button className={`${styles.navBtn}`}><NavLink to="/prev" className={styles.txtD}>Past Conversations</NavLink></button>
                </div>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
   </div>
    )
}

export default NavigationBar;