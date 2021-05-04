
import React,{useEffect,useState} from 'react';
import Axios from 'axios';

import {FacebookShareButton,FacebookIcon ,WhatsappShareButton,WhatsappIcon} from 'react-share';
function Viewpage(){

  const [name,setName]=useState('')
  const [description,setDescription]=useState('')
  const[pic,setPic]=useState('');
  const[link,setLink]=useState('');
  const [year,setYear]=useState('');
  const [language,setLanguage]=useState('');
  const [category,setCategory]=useState('');

  var id=window.location.pathname.replace("/download/:","");
  function getSpecificContent(){
      var id=window.location.pathname.replace("/download/:","");
      Axios.get(`https://cigi.games/api/download/:${id}`).then((res)=>{
          const data=res.data.result[0];
          setName(data.name);
          setDescription(data.description);
          setPic(data.pic);
          setLink(data.link);
          setLanguage(data.language);
          setCategory(date.category);
          setYear(data.year);
      })
      var date= new Date(year)

      setYear(date.getFullYear());
  }
  useEffect(()=>{
      getSpecificContent();
  
  });
    return(
    <div className="container my-5">
        <div className="row justify-content-center">
  <div className="col-lg-4 col-md-6 col-12">
    <img src={pic} alt="content-pic" />
  </div>
  <div className="col-lg-8 col-md-6 col-12 mt-4">
    <h3 className="page-heading">{name}</h3>
    <h6 className="page-heading">Year: {year}</h6>
    <h6 className="page-heading">Category: {category}</h6>
     <h6 className="page-heading">Language: {language}</h6>
     <p>{description}</p>
 
     <a href={link} className="btn btn-outline-danger btn-block" target="_blank" rel="noreferrer"><i className="fa fa-download" aria-hidden="true" ></i>&nbsp; DOWNLOAD</a>
     <div className="share-div mt-3 mb-3">
                <h5>Share To :</h5>
                <WhatsappShareButton
                   url={`http://localhost:3000/download/:${id}`}>
                   <WhatsappIcon  round={true} size={35}/>
              </WhatsappShareButton>
                <FacebookShareButton className="sharelink"
                  url={`http://localhost:3000/download/:${id}`}>
                  <FacebookIcon round={true} size={35}/>
                </FacebookShareButton>
              </div>
  </div>
  </div>
         </div>
    )
}
export default Viewpage;