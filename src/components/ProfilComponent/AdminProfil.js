import React, { useEffect, useState } from "react";
import { ButtonFlexContainer, ButtonNaslov, Section, InfoContainer } from "./ProfilStyle";
import Admini from "../../assets/data/admini.json"
import { getProfil, odjava } from "../../utils/FetchFunction";
const getUserData= (userID, role)=> {
    for(let admin of Admini.admini){
        if(userID.toString()===admin.osobaID.toString()) return admin;
    }
}

const AdminProfil= (props) => {
    //let userData=getUserData(props.user.userId, props.user.role);
    const [userData, setUserData]= useState({ime:"", prezime:""})
    useEffect(()=>{
        //console.log(props.user)
        getProfil().then((result)=>{
            console.log(result);
            setUserData(result)
        })
    },[])
    return (
       
        <InfoContainer>
            <div>Korisnik: {userData.ime + " " + userData.prezime}</div>
            <div>Uloga: Admin</div>
        </InfoContainer>
    
    );
};
export default AdminProfil;