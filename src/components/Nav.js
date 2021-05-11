import React from 'react'
import {Navbar,Nav} from "react-bootstrap"
import {useSelector,useDispatch} from 'react-redux'
import {useHistory} from "react-router-dom"
import {logout} from "../actions/login"
export default function NavComponent() {
  const getAuth = useSelector((state) => state.login.isLogin);
  const dispatch = useDispatch()
  const history = useHistory();
  const logoutUser = () =>{
    dispatch(logout())
    history.push("/login")
  }
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" style={{padding:'3%'}}>
    <Navbar.Brand href="/">
     Employee Management
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav>
      <Nav.Link href="/">Home</Nav.Link>
      <Nav.Link href="/employes">Employes</Nav.Link>
      {getAuth ?  <Nav.Link onClick={logoutUser}>Logout</Nav.Link> : <Nav.Link href="/login">Login</Nav.Link>}
    </Nav>
    </Navbar.Collapse>
  </Navbar>
  
  )
}
