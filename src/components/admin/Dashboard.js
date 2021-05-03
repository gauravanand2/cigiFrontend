import React,{useContext} from 'react';
import{Link} from 'react-router-dom';
import add from "../../images/add.svg";
import trash from "../../images/trash.svg";
import modify from "../../images/edit.svg";
import LoginContext from './LoginContext';
import LogoutImg from '../../images/log-out.svg';
function Dashboard(){
    const {setAuth}=useContext(LoginContext);
    return(
        <div className="container py-5">
              <div className="log-out d-flex justify-content-center mb-5">
             <button type="submit" className="btn-danger btn" onClick={()=>setAuth(false)}>Logout <img src={LogoutImg} alt="logout" /> </button>
                 </div>
    <div className="dashboard">
    <div className="row">
  <div className="col-lg-4 col-md-4 col-6 dash-column">
    <Link to ="/admin/add">
    <div className="card text-center p-3 p-lg-5 p-md-5">
      <div className="card-body">
        <img src={add} alt="add product icon" />
        <h5 className="card-title pt-4">ADD</h5>
        <hr />

      </div>
    </div>
  </Link>
  </div>
  <div className="col-lg-4 col-md-4 col-6 dash-column">
    <Link to ="/admin/delete">
    <div className="card text-center p-3 p-lg-5 p-md-5">

      <div className="card-body">
        <img src={trash} alt="delete product icon" />
        <h5 className="card-title pt-4">DELETE</h5>
        <hr />

      </div>
    </div>
  </Link>
  </div>
  <div className="col-lg-4 col-md-4 col-6 dash-column adjust">
    <Link to ="/admin/modify">
    <div className="card text-center p-3 p-lg-5 p-md-5">
      <div className="card-body">
        <img src={modify} alt="MODIFY product icon" />
        <h5 className="card-title pt-4">MODIFY</h5>
        <hr />

      </div>

    </div>
  </Link>
  </div>
</div>
  </div>
  </div>
    );
}

export default Dashboard;