import React,{useState,useEffect} from 'react';
import Axios from 'axios';
import {withRouter} from 'react-router-dom';


function SpecificUpdate(props){
    const [name,setName]=useState('');
    const [type,setType]=useState('');
    const [language,setLanguage]=useState('');
    const [link,setLink]=useState('');
    const [description,setDescription]=useState('');
    const [year,setYear]=useState('')

    const getSpecificData=()=>{
        var id=window.location.pathname.replace("/admin/modify/:","");
        Axios.get(`https://cigi.games/admin/modify/:${id}`).then((res)=>{
            const result=res.data.result[0];
            setName(result.name);
            setType(result.type);
            setLink(result.link);
            setDescription(result.description);
            setYear(result.year);
            setLanguage(result.language);
            const category=result.category.split(',');
            
            const AllCategory=document.querySelectorAll('input[type=checkbox]');
            for(var si in category){
                
                for(var data of AllCategory){
                    if(category[si]===data.value){
                        document.getElementById(data.value).checked=true;
                    }
                  }
            }

        })

    }


  useEffect(()=>{
    getSpecificData();

},[]);


  function UpdatePro(event){
    event.preventDefault();
    var category=[];
      
      const markedCategory=document.querySelectorAll('input[type=checkbox]:checked');
      for(var data of markedCategory){
        category.push(data.value);
      }
    if(name===''|| type===''||link===''||description===''||category.length===0){
        alert("Please Enter All Required Fields");
      }
      else{
        const formData= new FormData();
        formData.append('name',name);
          formData.append('link',link);
          formData.append('type',type);
          formData.append('description',description);
          formData.append('category',category);
        var id=window.location.pathname.replace("/admin/modify/:","");
        Axios.post(`https://cigi.games/admin/modify/${id}`,formData
            
              
          ).then ((result)=> {alert("your data is updated");
                props.history.push('/admin/modify');
            }
          
          );    
      }
}

return(
    <section className="container my-5">
  <div className="row justify-content-center">
<form id="my-form" className="add-container"  action="post">

          <label htmlFor="name" className="form-label add page-heading">Name *</label>
          <input type="text" id="name" value={name} className="form-control" onChange={(e)=>setName(e.target.value)} required/>

          <label htmlFor="year" className="form-label add page-heading">Year *</label>
          <input type="text" id="year" value={year} className="form-control" onChange={(e)=>setYear(e.target.value)} required/>

          <label htmlFor="link" className="form-label add page-heading ">Movie Link *</label>
          <input type="text" id="link" value={link} className="form-control" onChange={(e)=>setLink(e.target.value)} required/>


          <label htmlFor="description" className="form-label add page-heading ">Description</label>
          <textarea className="form-control" id="description" value={description} onChange={(e)=>setDescription(e.target.value)} required/>
          
          <label htmlFor="category" className="form-label add page-heading">Type *</label>
            <div className="form-check">
              <input className="form-check-input" type="radio" name="select-type" checked={type==='movie'}  id="selectMovie" value="movie" onChange={(e)=> setType(e.target.value)} required />
              <label className="form-check-label" htmlFor="selectMovie">
                Movie
              </label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="radio" name="select-type" checked={type==='song'}  id="selectSong" value="song" onChange={(e)=> setType(e.target.value)} required />
              <label className="form-check-label" htmlFor="selectSong">
               Song
              </label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="radio" name="select-type" checked={type==='web series'}  id="selectWeb" value="web series" onChange={(e)=> setType(e.target.value)} required />
              <label className="form-check-label" htmlFor="selectWeb">
              Web Series
              </label>
            </div>

            <label htmlFor="category" className="form-label add page-heading">Language *</label>
                <div className="form-check">
                  <input className="form-check-input" type="radio" name="select-language" checked={language==='english'}  id="selectEnglish" value="english" onChange={(e)=> setLanguage(e.target.value)} required />
                  <label className="form-check-label" htmlFor="selectEnglish">
                    English
                  </label>
                </div>
                <div className="form-check">
                  <input className="form-check-input" type="radio" name="select-language" checked={language==='hindi'}  id="selectHindi" value="hindi" onChange={(e)=> setLanguage(e.target.value)} required />
                  <label className="form-check-label" htmlFor="selectHindi">
                  Hindi
                  </label>
                </div>
                <div className="form-check">
                  <input className="form-check-input" type="radio" name="select-language" checked={language==='punjabi'}  id="selectPunjabi" value="punjabi" onChange={(e)=> setLanguage(e.target.value)} required />
                  <label className="form-check-label" htmlFor="selectPunjabi">
                  Punjabi
                  </label>
                </div>

          <label htmlFor="category" className="form-label add page-heading">Category *</label>
          <div className="form-check">
            <input className="form-check-input" type="checkbox" name="select-category" id="Adventure" value="Adventure" />
            <label className="form-check-label" htmlFor="Adventure">
            Adventure
            </label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="checkbox" name="select-category" id="Documentory" value="Documentory" />
            <label className="form-check-label" htmlFor="Documentory">
            Documentory
            </label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="checkbox" name="select-category" id="Biopic" value="Biopic" />
            <label className="form-check-label" htmlFor="Biopic">
            Biopic
            </label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="checkbox" name="select-category" id="Action" value="Action" />
            <label className="form-check-label" htmlFor="Action">
            Action
            </label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="checkbox" name="select-category" id="Drama" value="Drama" />
            <label className="form-check-label" htmlFor="Drama">
            Drama
            </label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="checkbox" name="select-category" id="Romantic" value="Romantic" required />
            <label className="form-check-label" htmlFor="Romantic">
            Romantic
            </label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="checkbox" name="select-category" id="Horror" value="Horror"  />
            <label className="form-check-label" htmlFor="Horror">
            Horror
            </label>
          </div>

          <button type="submit" className="btn btn-danger add-btn mt-4" onClick={UpdatePro}>UPDATE</button>

          <button type="Reset" className="btn btn-light add-btn mt-4">RESET</button>
</form>
  </div>
</section>
);
}
export default withRouter(SpecificUpdate);