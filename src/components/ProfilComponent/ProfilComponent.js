import React from "react";
import { ButtonFlexContainer, ButtonNaslov, Section, InfoContainer, Button } from "./ProfilStyle";
import ClanProfil from "./ClanProfil"
import AdminProfil from "./AdminProfil"
import TrenerProfil from "./TrenerProfil"
import { getProfil } from "../../utils/FetchFunction";

const ProfilComponent= ({user, LogOut}) => {
    
    return (
        <Section>

            <ButtonNaslov>PROFIL:</ButtonNaslov>

            {user.role==="admin" ? <AdminProfil user={user}></AdminProfil>: <></>}

           {user.role==="trener" ? <TrenerProfil user={user}></TrenerProfil>: <></>}

           {user.role==="clan" ? <ClanProfil user={user}></ClanProfil>: <></>}

            <ButtonFlexContainer>
            <Button onClick={LogOut}> Odjavi se</Button>
            <a href="/" hidden id="logOut"></a>
            </ButtonFlexContainer>

        </Section>
    );
};
export default ProfilComponent;