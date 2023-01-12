import React, { useEffect, useState } from "react";
import { ButtonFlexContainer, ButtonNaslov, Section, InfoContainer } from "./ProfilStyle";
import Admini from "../../assets/data/admini.json"
import { getProfil, odjava } from "../../utils/FetchFunction";
import AdminTreningProfilComponent from "./AdminProfilComponents/AdminTreningProfilComponent";
import AdminTurnirProfilComponent from "./AdminProfilComponents/AdminTurnirProfilComponent";
import "./AdminProfilComponents/adminStyles.css"
import { Link } from "react-router-dom";
import ObavijestProfilComponent from "./AdminProfilComponents/ObavijestProfilComponent";


const AdminProfil= ({user}) => {
    //let userData=getUserData(user.user.userId, user.user.role);
    const [userData, setUserData]= useState({ime:"", prezime:""})
    useEffect(()=>{
        //console.log(user.user)
        getProfil().then((result)=>{
            console.log(result);
            setUserData(result)
        })
    },[])
    return (
       <>
            <InfoContainer>
                <div>Korisnik: {userData.ime + " " + userData.prezime}</div>
                <div id="ulogaType">Uloga: Admin</div>
                
            </InfoContainer>
            <div><Link to="/members">Vidi sve korisnike</Link></div>
            <div class="trenerProfilContainer">
                <AdminTreningProfilComponent user={user}></AdminTreningProfilComponent>
                <AdminTurnirProfilComponent user={user}></AdminTurnirProfilComponent>
                
            </div>
            <ObavijestProfilComponent user={user}/>
        </>
    );
};
export default AdminProfil;