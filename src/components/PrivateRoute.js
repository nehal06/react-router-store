import { Route, Redirect } from 'react-router-dom';
import {useSelector} from "react-redux"


function PrivateRoute({ component: Component,type, ...rest }){
  const getAuth = useSelector((state) => state.login.isLogin);
  if(type === "private" && !getAuth) return <Redirect to={{pathname: "/login"}}/>;
  return <Route render = {props => <Component {...props} {...rest}/>} />
  }
 export default PrivateRoute;
