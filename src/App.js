import Treninzi from "./pages/Treninzi";
import DodajTrening from "./pages/DodajTrening";
import { auth, getAllClanNoOrder, getProfil } from "./utils/FetchFunction"
import React from "react";
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import "./App.css";
import { useState, useEffect } from "react";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home";
import Prijava from "./pages/Prijava";
import Profil from "./pages/Profil";
import Registracija from "./pages/Registracija";
import Turniri from "./pages/Turniri";
import DodajTurnir from "./pages/DodajTurnir";
import DnevnaTaktika from "./pages/DnevnaTaktika";
import DodajObavijest from "./pages/DodajObavijest";
import RangLista from "./pages/RangLista";
import Members from "./pages/Members";
import Transakcije from "./pages/Transakcije";

let resolveUser=()=>{
  let result = auth().then((user)=> {
    return {role: user.role, userId: user.userId}
    //return (user.userId !== null && user.role !== null) ?  {uloga: user.role, osobaID: user.userId} : {uloga: null, osobaID: null}
  })
  //console.log(result)
  return result;
};

function App() {
  const [user, setUser]=useState({role: "", userId: ""});
  const navigate=useNavigate()
  useEffect(
    ()=>{
      resolveUser().then((trenutniKorisnik) => {
        setUser(trenutniKorisnik);
      })
    },[]
  )
  if(user.role==="clan"){
    getAllClanNoOrder().then(
      (item)=>
      {
        let clan=item.filter((i)=>i.osobaId==user.userId)[0]
        if(clan.suspendiran==1 && !window.location.href.includes("/transakcije")){
          navigate(`/transakcije/${user.userId}`)
        }
      }
    )
    
  }
  return (
    <div className="App" id="app">
      <Header role={user.role}></Header>
      <Main>
        {//user.active==1 && <Navigate to={"/blokiran"}/>
        }
        <Routes>

          <Route exact path="/"
            element={
              <Home role={user.role}/>
            }
          />

          <Route exact path="/prijava"
            element={ (user.role!==null) ?
              <Navigate to="/"/> : <Prijava setUser={setUser}/>
            }
          />

          <Route exact path="/rangLista"
            element={ <RangLista user={user}/>
            }
          />

          <Route exact path="/registracija"
            element={ (user.role!==null) ?
              <Navigate to="/profil"/> : <Registracija setUser={setUser}/>
            }
          />

          <Route exact path="/profil"
            element={ (user.role===null) ?
              <Navigate to="/prijava"/> : <Profil user={user} setUser={setUser}/>
            }
          />

          <Route exact path="/treninzi"
            element={ (user.role === null) ?
                <Navigate to="/prijava"/> : <Treninzi role={user.role} />
            }
          />

          <Route exact path="/dnevnaTaktika"
            element={ <DnevnaTaktika user={user}/> }
          />

          <Route exact path="/turniri"
            element={ (user.role === null) ?
                <Navigate to="/prijava"/> : <Turniri role={user.role} />
            }
          />

          <Route exact path="/turniri/dodajTurnir" //turniri/dodajTurnir
            element={ (user.role === null || user.role === "clan") ?
                <Navigate to="/prijava" /> : <DodajTurnir user = {user} />
            }
          />
          <Route exact path="/treninzi/dodajTrening" //treninzi/dodajTrening
            element={ (user.role === null || user.role === "clan") ?
                <Navigate to="/prijava" /> : <DodajTrening user = {user} />
            }
          />

          <Route exact path="/dodajObavijest" 
            element = { (user.role === null || user.role === "clan") ? 
              <Navigate to="/prijava" /> : <DodajObavijest user = {user} />
            }
          />

          <Route exact path="/members" 
            element = { <Members user = {user} /> }
          />

          <Route exact path="/transakcije/:id" 
            element = { <Transakcije user = {user} setUser={setUser}/> }
          />
          
        </Routes>
      </Main>
      <Footer></Footer>
    </div>
  );
}

export default App;
