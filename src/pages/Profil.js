import Cookies from "js-cookie";
import React from "react";
import ProfilComponent from "../components/ProfilComponent/ProfilComponent";
import { logout } from "../utils/FetchFunction";
const Profil = ({user, setUser}) => {


  let LogOut=()=>{
    logout().then(
      ()=>{
        setUser(undefined);
        Cookies.remove("user");
        document.getElementById('logOut').click();
    })

  }
  return (
    <ProfilComponent LogOut={LogOut} user={user}></ProfilComponent>
  );

};

export default Profil;
