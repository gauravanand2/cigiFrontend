import React,{useState} from 'react';
import {Link,withRouter} from 'react-router-dom';
import Axios from 'axios';
function Header(props){
  const [userSearch,setUserSearch]=useState('');
  const [userEmail,setUserEmail]=useState('');
  function Search(){
    if(userSearch===""){
      alert("Please Enter Query to Search");
    }
    else{
      props.history.push(`/search-page/:${userSearch}`);
      window.location.reload(false);
    }
  }
  function addSubscriber(){
    if(userEmail===""){
      alert("Please Enter Your Username And Password");
    }
    else{
      Axios.post("https://cigi.games/api/add-subscriber",{
        email:userEmail
      }).then((resposne)=>{
          alert("Subscribed!!!!!!!!!");
          setUserEmail("");
      })
    }
    Axios.post("https://cigi.games/api/add-subscriber",{email:userEmail})
  }
    return(
        <div className="ab-container">
     
         <div className="page-header">
            <h1 className="web-heading">CLICK it GET it</h1>
            
<div className="container">

      <nav className="navbar navbar-expand-lg navbar-light ">

         <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
         <span className="navbar-toggler-icon"></span>
         </button>
         <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto nav-text">
               <li className="nav-item">
                  <Link className="nav-link" to="/"><b>Home</b></Link>
               </li>
               <li className="nav-item">
                  <Link className="nav-link" to="/movies"><b>Movies</b></Link>
               </li>
               <li className="nav-item">
                  <Link className="nav-link" to="/songs"><b>Song</b></Link>
               </li>
               <li className="nav-item">
                  <Link className="nav-link" to="/web-series"><b>Web Series</b></Link>
               </li>

  </ul>
</div>

  <button type="button" className="btn btn-danger nav-text" data-toggle="modal" data-target="#exampleModalCenter">
  SUBSCRIBE
  </button>


  <div className="modal fade" id="exampleModalCenter" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
    <div className="modal-dialog modal-dialog-centered" role="document">
      <div className="modal-content">
        <div className="modal-header">
          
          <h5 className="modal-title nav-text" id="exampleModalLongTitle"><b> SUBSCRIBE</b></h5>
          <button type="button" className="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div className="modal-body">


          <form>
            <div className="form-group">
              <label htmlFor="exampleInputEmail1">Email address</label>
              <input type="email" className="form-control" id="exampleInputEmail1" value={userEmail} onChange={(e)=>{setUserEmail(e.target.value)}} placeholder="Enter email" />
             
            </div>
          </form>
        </div>
        <div className="modal-footer">
          <button type="button" className="btn btn-secondary" data-dismiss="modal"><b>Close</b></button>
          <button type="button" className="btn btn-primary" onClick={addSubscriber}><b>SUBMIT</b></button>
        </div>
      </div>
    </div>
  </div>

</nav>



      <div className="input-group mb-3 home-search mx-auto mt-3">
         <input type="text" className="form-control" placeholder="Search" value={userSearch} onChange={(e)=>setUserSearch(e.target.value)} />
         <button type='button' className="btn btn-outline-secondary" onClick={Search} >SEARCH</button>
      </div>
      </div>


   </div>
</div>
    );
}

export default withRouter(Header);