import React from "react";
import { ButtonFlexContainer, ButtonNaslov, Section, InfoContainer, Button } from "./ProfilStyle";
import ClanProfil from "./ClanProfil"
import AdminProfil from "./AdminProfil"
import TrenerProfil from "./TrenerProfil"
import { getProfil } from "../../utils/FetchFunction";


const ProfilComponent= (props) => {
    
    return (
        <Section>
            
            <ButtonNaslov>PROFIL:</ButtonNaslov>

            {props.user.role==="admin" ? <AdminProfil user={props.user}></AdminProfil>: <></>}
           
           {props.user.role==="trener" ? <TrenerProfil user={props.user}></TrenerProfil>: <></>}
           
           {props.user.role==="clan" ? <ClanProfil user={props.user}></ClanProfil>: <></>}

            <ButtonFlexContainer>
            <Button onClick={props.LogOut}> Odjavi se</Button>
            <a href="/" hidden id="logOut"></a>
            </ButtonFlexContainer>
      
        </Section>
    );
};
export default ProfilComponent;