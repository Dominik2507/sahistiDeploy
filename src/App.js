import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import { useState, useEffect } from "react";

import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";


import Home from "./pages/Home";
import Prijava from "./pages/Prijava";
import Profil from "./pages/Profil";
import Registracija from "./pages/Registracija"


let resolveUser=()=>{return JSON.parse(localStorage.getItem("user")) || {uloga: null, osobaID: null}};


function App() {
  const [user, setUser]=useState({uloga: null, osobaID: null});
  
  useEffect(
    ()=>{
      let trenutniKorisnik=resolveUser();
      setUser(trenutniKorisnik);
    },[]
  )
  return (
    <div className="App" id="app">
      <Header role={user.uloga}></Header>
      <Main>
        <Routes>

          <Route exact path="/"
            element={
              <Home role={user.uloga}/>
            }
          />

          <Route exact path="/prijava"
            element={ (user.uloga!==null) ? 
              <Navigate to="/profil"/> : <Prijava setUser={setUser}/>
            }
          />

          <Route exact path="/registracija"
            element={ (user.uloga!==null) ? 
              <Navigate to="/profil"/> : <Registracija setUser={setUser}/>
            }
          />

          <Route exact path="/profil"
            element={ (user.uloga===null) ? 
              <Navigate to="/prijava"/> : <Profil user={user} setUser={setUser}/>
            }
          />

          

        </Routes>
      </Main>
      <Footer></Footer>
    </div>
  );
}

export default App;
