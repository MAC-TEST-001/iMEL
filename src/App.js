import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import axios from 'axios'
import routes from "./routes";
import withTracker from "./withTracker";
import Error from '../src/views/Errors';
import {useDispatch, useSelector} from 'react-redux';

import "bootstrap/dist/css/bootstrap.min.css";
import "./shards-dashboard/styles/shards-dashboards.1.1.0.min.css";


async function getuser(dispatch){
  dispatch({type:'User',value:'hsachdev'})
  var res =  await axios.get('http://10.122.188.2:9000',{
    withCredentials: true })
     // if(res.data.token !==undefined)
     if(true){
        // localStorage.setItem('authToken',res.data.token);
        // alert(res.data.username);
        
        
       
        }
      
  
}



export default () =>{
  
  const dispatch =useDispatch();
  getuser(dispatch);
  let user =useSelector((state)=>state.user);
  if(user===null){
    return (<Error></Error>);
  }
  return (
  
  <Router basename={process.env.REACT_APP_BASENAME || ""}>
    
    <div>
      {routes.map((route, index) => {
        return (
          <Route
            key={index}
            path={route.path}
            exact={route.exact}
            component={withTracker(props => {
              return (
                <route.layout {...props}>
                  <route.component {...props} />
                </route.layout>
              );
            })}
          />
        );
      })}
    </div>
  </Router>
)
    };
