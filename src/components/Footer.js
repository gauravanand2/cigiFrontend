import React from 'react';
import {Link} from 'react-router-dom';

function Footer(){
    return(
        <footer className="page-footer font-small blue">
        <div className="footer-back container web-footer">
        
                 <div className="footer-copyright text-left py-5 row">
                    <div className="col-4">
                       
                       <ul className="nav-text">
                          <li className="mb-2 "><Link to="/">Home</Link></li>
                          <li className="mb-2"><Link to="/about-us">ABOUT US</Link></li>
                          
                       </ul>
                      
                    </div>
                    <div className="col-4">
                       <h3 className="mb-4 nav-text">Follow Links :</h3>
                     <a href="https://instagram.com/cigi_23?igshid=hxkxrouixcuk"> <i className="fa fa-instagram" ></i></a>
                     <a href="https://www.facebook.com/profile.php?id=100067702443517"> <i className="fa fa-facebook-official" ></i></a>
                    </div>
                    <div className="col-4">
                    <ul className="nav-text">
                          <li className="mb-2"><Link to="/movies">Movies</Link></li>
                          <li className="mb-2"><Link to="/web-series">Web Series</Link></li>
                          <li><Link to="/songs">songs</Link></li>
                       </ul>
                     
                      
                     
                    </div>
                 </div>
                 <p className="copyright mb-0 pb-4 ">Copyright @ CiGi</p>
        </div>
        <div className="container mobile-footer">
       <div className="d-flex justify-content-center p-4 ">
       <h3 className="mb-4 nav-text">Follow Links :</h3>
                     <Link to="https://www.instagram.com/"> <i className="fa fa-instagram" ></i></Link>
                     <Link to="https://www.facebook.com/"> <i className="fa fa-facebook-official" ></i></Link>
       </div>
                     <p className="copyright mb-0 pb-4">Copyright @ CiGi</p> 
        </div>
              </footer>
    );
}
export default Footer;