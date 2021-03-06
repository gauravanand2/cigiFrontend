import React,{useEffect,useState}  from 'react';
import Axios from 'axios';
import {Link} from "react-router-dom";

function WebSeries(){
   const [newData,setNewdata]=useState([]);
    
   const getNewData=()=>{
       
   Axios.get("https://cigi.games/api/web-series")
   .then((res)=>{
       const alldata=res.data.result;
       setNewdata(Object.values(alldata));
     
     
   })
   }
 
   useEffect(()=>{
       getNewData();
   
   },[]);
    return(
        <div className="container">
        <h4 className="pb-3 page-heading">Web Series</h4>

        <div className=" row">
        {
          newData.map((item ,index)=>(
            <div className="col-lg-3 col-md-4 col-sm-6 col-12">
            <div className="card mb-4 movie-card">
            <img src={item.pic} alt="Free Download MOVIE , SONGS , WEB SERIES"  className="content-img"/>
            <div className="card-body">
                              <h5 className="card-title nav-text">{item.name}</h5>
                              <p className="card-text regular-text">{item.description}</p>
                              <Link to={`/download/:${item.id}`} className="btn btn-danger dwnld" ><i className="fa fa-download"></i> Download</Link>
                              </div>
            </div>
        
        </div>
       
            ))
      }

      


</div>
     </div>
    );
}
export default WebSeries;