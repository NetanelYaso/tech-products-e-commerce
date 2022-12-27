import "./Header.css";
import React from "react";
import { Navbar, Nav, Container, NavDropdown, Image } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import { logout } from "../../../actions/user-actions";


function Header() {
  const dispatch = useDispatch();

  const userLogin = useSelector(state => state.userLogin)
  const { userInfo } = userLogin

  const logoutHandler = () => {
    dispatch(logout)
  }


  return (
      <Navbar className="navbar" variant='dark' expand="lg" collapseOnSelect>
        <Container>
          <Navbar.Brand href='/'><Image width={50} src="images/logo.png" /></Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <div>
            <Navbar.Collapse id="navbarScroll">
              <Nav className="ml-auto">
                <Nav.Link href='/cart'><i className="fas fa-shopping-cart"></i> Cart</Nav.Link>
                {userInfo ? (
                  <NavDropdown title={userInfo?.name} id="username">
                    <Link to="/profile">
                      {/* <NavDropdown.Item href=""> */}
                      Profile
                      {/* </NavDropdown.Item> */}
                      <NavDropdown.Item onClick={logoutHandler}>
                        Logout
                      </NavDropdown.Item>
                    </Link>
                  </NavDropdown>
                ) : <Nav.Link href='/login'><i className="fas fa-user"></i> Sign In</Nav.Link>
                }
              </Nav>
            </Navbar.Collapse>
          </div>
        </Container>
      </Navbar >
  );
};

export default Header;
