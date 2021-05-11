import { Route, Switch } from "react-router";
import {Container} from "react-bootstrap";
import Nav from "./components/Nav"
import Home from "./pages/Home";
import Employes from "./pages/Employes";
import EmployeDetail from "./pages/EmployeDetail"
import Login from "./pages/Login";
import PrivateRoute from './components/PrivateRoute'
function App() {
  return (
    <>
     <Nav/>
    <Container fluid>
   
        <Switch>
          <Route path="/abc/:id" exact  component = {Home}/>
          <PrivateRoute path="/" exact type="guest" component = {Home}/>
          <PrivateRoute path="/employes" type="private"  component = {Employes}/>
          <PrivateRoute path="/employe/:id" exact type="private"  component = {EmployeDetail}/>
          <PrivateRoute path="/login" type="guest"   component = {Login}/>          
        </Switch>
    </Container>
    </>
  );
}

export default App;
