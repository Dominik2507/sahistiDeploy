import Cookies from "js-cookie";
import React from "react";
import ProfilComponent from "../components/ProfilComponent/ProfilComponent";
import { logout } from "../utils/FetchFunction";
const Profil = (props) => {

  
  let LogOut=()=>{
    logout().then(
      ()=>{
        props.setUser(undefined);
        Cookies.remove("user");
        document.getElementById('logOut').click();
    })
    
  }
  return (
    <ProfilComponent LogOut={LogOut} user={props.user}></ProfilComponent>
  );
  
};

export default Profil;
