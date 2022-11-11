import React from "react";
import { ButtonFlexContainer, ButtonNaslov, Section, InfoContainer } from "./ProfilStyle";
import ClanProfil from "./ClanProfil"
import AdminProfil from "./AdminProfil"
import TrenerProfil from "./TrenerProfil"

const ProfilComponent= (props) => {
   
    return (
        <Section>
            
            
            {props.user.uloga==="admin" ? <AdminProfil user={props.user}></AdminProfil>: <></>}
           
           {props.user.uloga==="trener" ? <TrenerProfil user={props.user}></TrenerProfil>: <></>}
           
           {props.user.uloga==="clan" ? <ClanProfil user={props.user}></ClanProfil>: <></>}

            <ButtonFlexContainer>
            <button onClick={props.LogOut}> Odjavi se</button>
            <a href="/" hidden id="logOut"></a>
            </ButtonFlexContainer>
      
        </Section>
    );
};
export default ProfilComponent;