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
        <Link to="/dnevnaTaktika"><NavButton id="dnevnaTaktikaHeader"> Dnevna Taktika</NavButton></Link>
        <Link to="/rangLista"><NavButton id="rangListaHeader"> Rang Lista</NavButton></Link>
        <Link to="/prijava"><NavButton id="prijavaHeader"> Prijavi se</NavButton></Link>
    </HeaderContainer>
   );

   //prijavljen je

    return (
        <HeaderContainer>
            <Naslov><Link to="/">ŠK Zabranjeno pushanje</Link></Naslov>
            <Link to="/dnevnaTaktika"><NavButton id="dnevnaTaktikaHeader"> Dnevna Taktika</NavButton></Link>
            <Link to="/rangLista"><NavButton id="rangListaHeader"> Rang Lista</NavButton></Link>
            <Link to="/turniri"><NavButton id="turniriHeader"> Turniri</NavButton></Link>
            <Link to="/treninzi"><NavButton id="treninziHeader"> Treninzi</NavButton></Link>
            <Link to="/profil"><NavButton id="profilHeader"> Profil</NavButton></Link>
        </HeaderContainer>
    );
};

export default Header;
