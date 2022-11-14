import React from "react";
import { ButtonFlexContainer, ButtonNaslov, Section, InfoContainer } from "./ProfilStyle";
import ClanProfil from "./ClanProfil"
import AdminProfil from "./AdminProfil"
import TrenerProfil from "./TrenerProfil"
import { getProfil } from "../../utils/FetchFunction";


const ProfilComponent= (props) => {
    getProfil(props.user.userId, props.user.role);
    return (
        <Section>
            
            
            {props.user.role==="admin" ? <AdminProfil user={props.user}></AdminProfil>: <></>}
           
           {props.user.role==="trener" ? <TrenerProfil user={props.user}></TrenerProfil>: <></>}
           
           {props.user.role==="clan" ? <ClanProfil user={props.user}></ClanProfil>: <></>}

            <ButtonFlexContainer>
            <button onClick={props.LogOut}> Odjavi se</button>
            <a href="/" hidden id="logOut"></a>
            </ButtonFlexContainer>
      
        </Section>
    );
};
export default ProfilComponent;