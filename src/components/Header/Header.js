import React from "react";
import { Link } from "react-router-dom";

import {HeaderContainer,
    Naslov,
    NavButton
} from "./HeaderStyle";
const Header = (props) => {

   if(props.role===null) return(
    <HeaderContainer>
        <Naslov><Link to="/">ŠK Zabranjeno pushanje</Link></Naslov>
        <Link to="prijava"><NavButton> Prijavi se</NavButton></Link>
    </HeaderContainer>
   );

   //prijavljen je

    return (
        <HeaderContainer>
            <Naslov><Link to="/">ŠK Zabranjeno pushanje</Link></Naslov>
            <Link to="/profil"><NavButton> Profil</NavButton></Link>
        </HeaderContainer>
    );
};

export default Header;
