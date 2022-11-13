import React from "react";

import {HeaderContainer,
    Naslov,
    NavButton
} from "./HeaderStyle";
const Header = (props) => {

   if(props.role===null) return(
    <HeaderContainer>
        <Naslov><a href="/">ŠK Zabranjeno pushanje</a></Naslov>
        <NavButton href="/prijava"> Prijavi se</NavButton>
    </HeaderContainer>
   );

   //prijavljen je

    return (
        <HeaderContainer>
            <Naslov><a href="/">ŠK Zabranjeno pushanje</a></Naslov>
            <NavButton href="/profil"> Profil</NavButton>
        </HeaderContainer>
    );
};

export default Header;
