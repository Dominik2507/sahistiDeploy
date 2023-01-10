import React from "react";
import { MainComponent } from "./MainStyle";

const Main = (props) => {
  return <MainComponent>{props.children}</MainComponent>;
};

export default Main;