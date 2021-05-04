
import React,{useState,useEffect} from 'react';
import {Link} from 'react-router-dom';
import Axios from 'axios';
 function SearchPage(){
     
    const [newData,setNewdata]=useState([]);
    var search=window.location.pathname.replace("/search-page/:","");
    var replaced= search.replace("%20"," ");
    const getNewData=()=>{
        
        var search=window.location.pathname.replace("/search-page/:",""); 
    Axios.get(`https://cigi.games/search-page/:${search}`)
    .then((res)=>{
        const alldata=res.data.result;
      
        setNewdata(Object.values(alldata));
      
      
    })
    }
    var displayContent="",displaySorry="";
    if(newData.length===0){
        displayContent="d-none";
    }
    else{
        displaySorry="d-none";
        displayContent="row";
    }
  
    useEffect(()=>{
        getNewData();
    
    },[]);
    return(
        <div className="container">
        <h4 className="pb-3 page-heading">Result's for : {replaced.toUpperCase()}</h4>
        <p className={displaySorry}>Sorry no result found!!!</p>
        <div className={displayContent}>
        {
          newData.map((item ,index)=>(
            <div className="col-lg-3 col-md-4 col-6 ">
            <div className="card mb-4 movie-card">
            <img src={item.pic} alt="content"  className="content-img"/>
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

 export default SearchPage;