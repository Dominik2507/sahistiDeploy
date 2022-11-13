import React from "react";
import ObavijestiHome from "../components/Obavijesti/ObavijestiHome"
import TreninziHome from "../components/Treninzi/TreninziHome";
import TurniriHome

from "../components/Turniri/TurniriHome";
const Home = (props) => {

  if(props.role===null) return (
    <>
      <ObavijestiHome></ObavijestiHome>
    </>
  );

  return (
    <>
      <ObavijestiHome></ObavijestiHome>
      <TreninziHome></TreninziHome>
      <TurniriHome></TurniriHome>
    </>
  );
  
};

export default Home;
