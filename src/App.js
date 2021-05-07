
import './App.css';
import React,{useState} from 'react';
import  {Route,Switch} from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import Login from './components/admin/Login';
import HomeMiddle from './components/HomeMiddle';
import Movies from './components/Movies';
import Song from './components/Song';
import WebSeries from './components/WebSeries';
import Viewpage from './components/Viewpage';
import LoginContext from './components/admin/LoginContext';
import Dashboard from './components/admin/Dashboard';
import {ProtectedRoute} from "./ProtectedRoute";
import AddMovie from './components/admin/Add';
import Delete from './components/admin/Delete';
import Modify from './components/admin/Modify';
import SpecificUpdate from './components/admin/SpecificUpdate';
import SearchPage from './components/SearchPage';
import AboutUs from './components/AboutUs';



function App() {
  const [auth,setAuth]=useState(false);
  return (
    <div className="App">
      <Header />
    
      <Switch>
        <Route exact path="/" component={HomeMiddle} />
        <Route exact path="/movies" component={Movies} />
        <Route exact path="/songs" component={Song} />
        <Route exact path="/web-series" component={WebSeries} />
        <Route exact path="/download/:id" component={Viewpage} />
        <Route exact path="/search-page/:search" component={SearchPage} />
        <Route exact path="/about-us" component={AboutUs} />
        <LoginContext.Provider value={{auth,setAuth}}>
        <Route exact path="/admin/login-form" component={Login} />
        <ProtectedRoute exact path="/admin/dashboard" component={Dashboard} />
        <ProtectedRoute exact path="/admin/add" component={AddMovie} />
        <ProtectedRoute exact path="/admin/delete" component={Delete} />
        <ProtectedRoute exact={true} path="/admin/modify" component={Modify} />
        <ProtectedRoute exact={true} path="/admin/modify/:id" component={SpecificUpdate} />
        </LoginContext.Provider>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
