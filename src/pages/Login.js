import { Form, Button, Container, Row, Col, Jumbotron } from "react-bootstrap"
import { useState,useEffect } from "react"
import { Redirect } from 'react-router-dom';
import {login} from "../actions/login"
import {useDispatch,useSelector} from "react-redux";
export default function Login({history}) {
  const initError = {
    username: "",
    password: ""
  }
  const dispatch = useDispatch()
  const loginState = useSelector(state => state.login)
  const [erorr, setErorr] = useState(initError);
  const [username,setUsername] = useState("");
  const [password,setPassword] = useState("");
  
  const onInputChange =(evt) =>{
    let type = evt.currentTarget.name;
    let val = evt.currentTarget.value;
    if(type === "username"){
      setUsername(val)
    } 
    else{
      setPassword(val)
    }
  }
  
  const onSubmit = ()=>{
   
    if(!username){
      setErorr((prevError) =>({...prevError,username : "Username is required"}))
    }
    else{
      setErorr((prevError) =>({...prevError,username : ""}))
    }
    if(!password){
      setErorr((prevError)=>({...prevError,password : "Password is required"}) )
    }
    else{
      setErorr((prevError) =>({...prevError,password : ""}))
    }
    if(erorr.username || erorr.password){
      return
    }
   
    dispatch(login({username,password}));
    
  }
  useEffect(() => {
    if(loginState.isLogin){
      history.push('/');
    }    
  }, [loginState]);
  useEffect(() => {
    console.log(erorr);
  }, [erorr]);

  return (
    <Container>
      <Row>
   
          <Col md={{ span: 4, offset: 4 }}>
            <br />

            <Form className="">
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Username</Form.Label>
                <Form.Control type="text" name="username" value={username} onChange={onInputChange} placeholder="Enter Username" />
                <Form.Text className="text-muted">
                  {erorr.username}
                </Form.Text>
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" name="password" value={password} onChange={onInputChange} placeholder="Password" />
                <Form.Text className="text-muted">
                  {erorr.password}
                </Form.Text>
              </Form.Group>
              <br />
              <Button variant="dark" onClick={onSubmit} type="button">Login</Button>
            </Form>
            <br/>
            {(loginState.loginFailed && loginState.loginFailed.message) && <p style={{color:"red"}}>{loginState.loginFailed.message}</p>}
          </Col>
         
      </Row>
    </Container>
  )
}
