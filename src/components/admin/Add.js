import React,{useState} from 'react';
import Axios from 'axios';
import {withRouter} from 'react-router-dom';


function AddMovie(){

    const [name,setName]=useState('');
    const [type,setType]=useState('');
    const [language,setLanguage]=useState('');
    const [link,setLink]=useState('');
    const [pic,setPic]=useState(null);
    const [description,setDescription]=useState('');
    const [year,setYear]=useState('');
    const [cast,setCast]=useState('') 
    const addMo=(event)=>{
      event.preventDefault();
      var category=[];
      
      const markedCategory=document.querySelectorAll('input[type=checkbox]:checked');
      for(var data of markedCategory){
        category.push(data.value);
      }
      if(name===''|| type===''||link===''||description===''||category.length===0||pic===null){
        alert("Please Enter All Required Fields");
      }
      
        
        else{
          const formData= new FormData();
          formData.append('name',name);
          formData.append('link',link);
          formData.append('type',type);
          formData.append('description',description);
          formData.append('category',category);
          formData.append('pic',pic);
          formData.append('year',year);
          formData.append('language',language);
          formData.append('cast',cast);
          Axios.post('https://cigi.games/api/admin/add',formData,{
            headers:{
              'Content-Type':'multipart/form-data'
            }
              
          }).then ((result)=> {alert("your data is inserted");
          setName("");
          setType('');
          setPic('Choose File');
          setDescription('');
          setLink('');
          setYear('');
          setLanguage('');
          setCast('');
              
              document.getElementById("picfile").value=null;
             for(var data of markedCategory){
                data.checked=false;
            
              }
              category=[]
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

              <label htmlFor="cast" className="form-label add page-heading ">Cast *</label>
               <input type="text" id="cast" value={cast} className="form-control" onChange={(e)=>setCast(e.target.value)} required />

              <label htmlFor="pic" className="add page-heading">Banner</label>
              <input type="file" className="form-control" name="select-file" id="picfile" accept="image/*"  onChange={(e)=>setPic(e.target.files[0])} />

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

                <label htmlFor="language" className="form-label add page-heading">Language *</label>
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
            <input className="form-check-input" type="checkbox" name="select-category" id="Action" value="Action" />
            <label className="form-check-label" htmlFor="Action">
            Action
            </label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="checkbox" name="select-category" id="Animated" value="Animated" />
            <label className="form-check-label" htmlFor="Animated">
            Animated
            </label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="checkbox" name="select-category" id="Fantasy" value="Fantasy" />
            <label className="form-check-label" htmlFor="Fantasy">
            Fantasy
            </label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="checkbox" name="select-category" id="Crime" value="Crime" />
            <label className="form-check-label" htmlFor="Crime">
            Crime
            </label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="checkbox" name="select-category" id="Thriller" value="Thriller" />
            <label className="form-check-label" htmlFor="Thriller">
            Thriller
            </label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="checkbox" name="select-category" id="Family" value="Family" />
            <label className="form-check-label" htmlFor="Family">
            Family
            </label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="checkbox" name="select-category" id="Emotional" value="Emotional" />
            <label className="form-check-label" htmlFor="Emotional">
            Emotional
            </label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="checkbox" name="select-category" id="History" value="History" />
            <label className="form-check-label" htmlFor="History">
            History
            </label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="checkbox" name="select-category" id="Sci-Fi" value="Sci-Fi" />
            <label className="form-check-label" htmlFor="Sci-Fi">
            Sci-Fi
            </label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="checkbox" name="select-category" id="Mystery" value="Mystery" />
            <label className="form-check-label" htmlFor="Mystery">
            Mystery
            </label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="checkbox" name="select-category" id="18" value="18+" />
            <label className="form-check-label" htmlFor="18">
            18+
            </label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="checkbox" name="select-category" id="Comedy" value="Comedy" />
            <label className="form-check-label" htmlFor="Comedy">
            Comedy
            </label>
          </div>
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
                <input className="form-check-input" type="checkbox" name="select-category" id="Drama" value="Drama" />
                <label className="form-check-label" htmlFor="Drama">
                Drama
                </label>
              </div>
              <div className="form-check">
                <input className="form-check-input" type="checkbox" name="select-category" id="Romance" value="Romance" required />
                <label className="form-check-label" htmlFor="Romance">
                Romance
                </label>
              </div>
              <div className="form-check">
                <input className="form-check-input" type="checkbox" name="select-category" id="Horror" value="Horror"  />
                <label className="form-check-label" htmlFor="Horror">
                Horror
                </label>
              </div>
    
              <button type="submit" className="btn btn-danger add-btn mt-4" onClick={addMo}>ADD</button>

              <button type="Reset" className="btn btn-light add-btn mt-4">RESET</button>
    </form>
      </div>
</section>
    );
}

export default withRouter(AddMovie);