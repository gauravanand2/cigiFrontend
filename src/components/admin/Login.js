import React,{useState,useContext} from 'react';
import {withRouter} from 'react-router-dom';
import Axios from 'axios';
import LoginContext from "./LoginContext";
function Login(props){
  const {setAuth}=useContext(LoginContext);
  const [userName,setUserName]=useState('');
  const [password,setPassword]=useState('');
  const submitLogin=()=>{
 
    if(userName==="" || password===""){
      alert("Please Enter Your Username And Password");
    }
    else{
      Axios.post("http://cigi.games/admin/login-form",{
        user:userName,
        password:password
      }).then((response)=>{
        if(response.data.result===true){
          setAuth(true);
          props.history.push('/admin/dashboard');
        }
        else{
          alert("Please Check Your Username and Password!!!!");
        }
      })
      
    }
  }
    return(
        <section className="container pt-5 pb-5">
        <div className="row justify-content-center">
       
            <form className="form-container">
            <div className="form-group">
              <h4 className="text-center font-weight-bold"> Login </h4>
              <label htmlFor="InputEmail1">Email Address</label>
               <input type="email" className="form-control" onChange={(e)=>setUserName(e.target.value)} id="InputEmail1" placeholder="Enter Email" />
            </div>
            <div className="form-group">
              <label htmlFor="InputPassword1">Password</label>
              <input type="password" name="password" className="form-control" onChange={(e)=>setPassword(e.target.value)} placeholder="Password"  />
            </div>
            <button type="button" onClick={submitLogin} className="btn btn-block login">Submit</button>
            </form>
        
        </div>
      </section>
    )
}

export default withRouter(Login);