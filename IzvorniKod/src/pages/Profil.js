import React from "react";
import ProfilComponent from "../components/ProfilComponent/ProfilComponent";
const Profil = (props) => {

  
  let LogOut=()=>{
    localStorage.removeItem('user');
    props.setUser(undefined);
    document.getElementById('logOut').click();
  }
  return (
    <ProfilComponent LogOut={LogOut} user={props.user}></ProfilComponent>
  );
  
};

export default Profil;
