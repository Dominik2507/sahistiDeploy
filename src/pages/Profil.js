import Cookies from "js-cookie";
import React from "react";
import ProfilComponent from "../components/ProfilComponent/ProfilComponent";
import { odjava } from "../utils/FetchFunction";
const Profil = (props) => {

  
  let LogOut=()=>{
    odjava();
    localStorage.removeItem('user');
    props.setUser(undefined);
    Cookies.remove("user")
    document.getElementById('logOut').click();
  }
  return (
    <ProfilComponent LogOut={LogOut} user={props.user}></ProfilComponent>
  );
  
};

export default Profil;
