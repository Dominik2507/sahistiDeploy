//components
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
        <Link to="/dnevnaTaktika"><NavButton> Dnevna Taktika</NavButton></Link>
        <Link to="/rangLista"><NavButton> Rang Lista</NavButton></Link>
        <Link to="/prijava"><NavButton> Prijavi se</NavButton></Link>
    </HeaderContainer>
   );

   //prijavljen je

    return (
        <HeaderContainer>
            <Naslov><Link to="/">ŠK Zabranjeno pushanje</Link></Naslov>
            <Link to="/dnevnaTaktika"><NavButton> Dnevna Taktika</NavButton></Link>
            <Link to="/rangLista"><NavButton> Rang Lista</NavButton></Link>
            <Link to="/turniri"><NavButton> Turniri</NavButton></Link>
            <Link to="/treninzi"><NavButton> Treninzi</NavButton></Link>
            <Link to="/profil"><NavButton> Profil</NavButton></Link>
        </HeaderContainer>
    );
};

export default Header;
