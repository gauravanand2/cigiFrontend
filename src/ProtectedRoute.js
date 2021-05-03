import React, {useContext} from 'react';
import {Route,Redirect} from 'react-router-dom';

import LoginContext from './components/admin/LoginContext';

export const ProtectedRoute=({component:Component,...rest})=>{
   const {auth}=useContext(LoginContext);
  console.log(auth);
    return(
        <Route 
        {...rest} 
        
        render={props => {
           if(auth){
            return <Component {...props}/>
           }
           else{
              return <Redirect to={
                {
                   pathname:"/admin/login-form",
                   state:{
                       from:props.location
                   }
                }
               } />
           }
        }}         
     />
    );
};