import React from "react";
import TurniriComponent from "../components/Turniri/TurniriComponent"

const Turniri = (props) => {
    return (
        <TurniriComponent role={props.role}></TurniriComponent>
    );
}

export default Turniri;