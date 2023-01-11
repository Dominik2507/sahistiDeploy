 const SERVER_URL = "https://sahisti-server.herokuapp.com";
 const CLIENT_URL = "https://sahisti-server.herokuapp.com";
//const SERVER_URL = "http://localhost:8080";
//const CLIENT_URL = "http://localhost:3000";

export async function logIn(form) {
  return await fetch(
    SERVER_URL+"/prijava/", {
      method: 'POST',
      headers: {'Content-Type': 'application/json',
                'Authorization': 'Basic '+window.btoa(form.username+':'+form.password)
              },
      body: JSON.stringify(form),
      credentials: 'include',
    }
  )
    .then((response) => {
      if(response.status === 200) {
        return response.json();
      } else if(response.status === 401){
        console.log("neuspjesna prijava")
        document.getElementById("errorMsg").hidden=false;
        document.getElementById("errorMsg").innerHTML="Unijeli ste krivo korisnicko ime ili lozinku!";
      } else{
        console.log("nedozvoljena prijava")
        document.getElementById("errorMsg").hidden=false;
        document.getElementById("errorMsg").innerHTML="Vaš račun je blokiran!";
      }
    })
    .catch((err) => console.log("err logIn"));
  
}

export async function registration(form) {
  return await fetch(
    SERVER_URL+"/registracija", {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(form),
      credentials: 'include'
    }
  )
    .then((response) => {
              
      if(response.status === 200) {

        console.log("Uspjesna registracija")
        
        let a = document.getElementById('formlink')
        a.click()
        return
      } else {
        console.log("NEUSPJESNA registracija")
        alert("Email ili korisnicko ime je vec u upotrebi!");
      }
      
    })
    .catch((err) => console.log("err registration"));
  
}

export async function getTreninzi() {
  return await fetch(
    SERVER_URL+"/trening/getAll", {
      headers: {'Content-Type': 'application/json'},
      credentials: 'include'
    })
    .then((response) => {
      if(response.status === 200) {
        return response.json()
      }
    })
    .catch((err) => console.log("err getTreninzi"));
  
}

export async function getTurniri() {
  return await fetch(
    SERVER_URL+"/turnir/getAll", {
      headers: {'Content-Type': 'application/json'},
      credentials: 'include'
    })
    .then((response) => {
      if(response.status === 200) {
        return response.json()
      }
    })
    .catch((err) => console.log("err getTurniri"));
  
}

export async function getObavijesti() {
  return await fetch(
    SERVER_URL+"/zanimljivost/getAll", {
      headers: {'Content-Type': 'application/json'},
      credentials: 'include'
    
    })
    .then((response) => {
      if(response.status === 200) {
        return response.json()
      }
    })
    .catch((err) => console.log("err getObavijesti"));
  
}

export async function getProfil() {
  return await fetch(
    SERVER_URL+"/profil", {
      headers: {'Content-Type': 'application/json'},
      credentials: 'include'
    })
    .then((response) => {
      if(response.status === 200) {
        console.log("Uspjesan dohvat profila!");
        return response.json();
      } else {
        console.log("istekao session");
      }
    })
    .catch((err) => console.log("err getProfil"))

}

export async function logout() {
  return await fetch(
    SERVER_URL+"/odjava", {
      headers: {'Content-Type': 'application/json',
                'Authorization': ''},
      credentials: 'include'
    })
    .then((response) => {
      if(response.status === 200) {
        return(response.json())
        console.log("Uspjesan logout!");
      } 
    })
    .catch((err) => console.log("err logout"));

}

export async function auth() {
  return await fetch(
    SERVER_URL+"/auth", {
      headers: {'Content-Type': 'application/json'},
      credentials: 'include'
    })
    .then((response) => {
      if(response.status === 200) {
        //console.log(response.text());
        //console.log(response.json());
        return response.json()
      }
    })
    .catch((err) => console.log("err auth"));

}

export async function dodajTurnir(form) {
  return await fetch(
    SERVER_URL+"/turnir/addNew", {
      method: 'PUT',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(form),
      credentials: 'include'
    }
  )
    .then((response) => {
      //console.log(response)
      if(response.status === 200) {
        return response.json();
      } else {
        alert("Greska pri spremanju turnira");
        console.log("Greska")
      }
    })
    .catch((err) => console.log("err dodajTurnir"));
}

export async function dodajTrening(form) {
  return await fetch(
    SERVER_URL+"/trening/addNew", {
      method: 'PUT',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(form),
      credentials: 'include'
    }
  )
    .then((response) => {
      if(response.status === 200) {
        return response.json()
      } else {
        alert("Greska pri spremanju turnira");
        console.log("Greska")
      }
    })
    .catch((err) => console.log("err dodajTurnir"));
}

export async function prijavaNaTurnir(turnirId) {
  return await fetch(
    SERVER_URL+"/prijavTu/"+turnirId, {
      method: 'GET',
      credentials: 'include'
    }
  )
    .then((response) => {
      if(response.status === 200) {
        return;
      } else if (response.status === 400){
        alert("Turnir već prijavljen");
      } else {
        alert("Greska pri prijavi na turnir");
        console.log("Greska");
      }
    })
    .catch((err) => console.log("err dodajTurnir"));
}

export async function prijavaNaTrening(treningId) {
  return await fetch(
    SERVER_URL+"/prijavTr/"+treningId, {
      method: 'GET',
      credentials: 'include'
    }
  )
    .then((response) => {
      if(response.status === 200) {
        return;
      }else if (response.status === 400){
        alert("Trening već prijavljen");
      } else {
        alert("Greska pri prijavi na trening");
        console.log("Greska");
      }
    })
    .catch((err) => console.log("err prijavaNaTrening"));
}

export async function getPrijaveTu() {
  return await fetch(
    SERVER_URL+"/turnir/signedUp", {
      headers: {'Content-Type': 'application/json'},
      credentials: 'include'
    })
    .then((response) => {
      if(response.status === 200) {
        return response.json()
      }
    })
    .catch((err) => console.log("err getPrijaveTu"));
}

export async function getPrijaveTr() {
  return await fetch(
    SERVER_URL+"/trening/signedUp", {
      headers: {'Content-Type': 'application/json'},
      credentials: 'include'
    })
    .then((response) => {
      if(response.status === 200) {
        return response.json()
      }
    })
    .catch((err) => console.log("err getPrijaveTr"));
}

export async function getStvoreniTu() {
  return await fetch(
    SERVER_URL+"/turnir/created", {
      headers: {'Content-Type': 'application/json'},
      credentials: 'include'
    })
    .then((response) => {
      if(response.status === 200) {
        return response.json()
      }
    })
    .catch((err) => console.log("err getTreninzi"));
}

export async function getStvoreniTr() {
  return await fetch(
    SERVER_URL+"/trening/created", {
      headers: {'Content-Type': 'application/json'},
      credentials: 'include'
    })
    .then((response) => {
      if(response.status === 200) {
        return response.json()
      }
    })
    .catch((err) => console.log("err getTreninzi"));
}

export async function aktivirajTu(turnirId) {
  return await fetch(
    SERVER_URL+"/turnir/activate/"+turnirId, {
      method: 'PUT',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(turnirId),
      credentials: 'include'
    }
  )
    .then((response) => {
      if(response.status === 200) {
        return response.json();
      } else {
        alert("Greska pri spremanju turnira");
        console.log("Greska")
      }
    })
    .catch((err) => console.log("err dodajTurnir"));
}

export async function deaktivirajTu(turnirId) {
  return await fetch(
    SERVER_URL+"/turnir/deactivate/"+turnirId, {
      method: 'PUT',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(turnirId),
      credentials: 'include'
    }
  )
    .then((response) => {
      if(response.status === 200) {
        return response.json();
      } else {
        alert("Greska pri spremanju turnira");
        console.log("Greska")
      }
    })
    .catch((err) => console.log("err dodajTurnir"));
}

export async function aktivirajTr(treningId) {
  return await fetch(
    SERVER_URL+"/trening/activate/"+treningId, {
      method: 'PUT',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(treningId),
      credentials: 'include'
    }
  )
    .then((response) => {
      if(response.status === 200) {
        return response.json();
      } else {
        alert("Greska pri aktiviranju treninga");
        console.log("Greska")
      }
    })
    .catch((err) => console.log("err aktivirajTr"));
}

export async function deaktivirajTr(treningId) {
  return await fetch(
    SERVER_URL+"/trening/deactivate/"+treningId, {
      method: 'PUT',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(treningId),
      credentials: 'include'
    }
  )
    .then((response) => {
      if(response.status === 200) {
        return response.json();
      } else {
        alert("Greska pri deaktiviranju treninga");
        console.log("Greska")
      }
    })
    .catch((err) => console.log("err deaktivirajTu"));
}

export async function getAllTreneri() {
  return await fetch(
    SERVER_URL+"/trener/getAll", {
      method: 'GET',
      credentials: 'include'
    }
  )
    .then((response) => {
      if(response.status === 200) {
        return response.json();
      } else {
        console.log("Greska")
      }
    })
    .catch((err) => console.log("err getAllTreneri"));
}

export async function dodajObavijest(form) {
  return await fetch(
    SERVER_URL+"/zanimljivost/addNew", {
      method: 'PUT',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(form),
      credentials: 'include'
    }
  )
    .then((response) => {
      if(response.status === 200) {
        let a = document.getElementById('formlink');
        a.click();
      } else {
        alert("Greska pri spremanju obavijesti");
        console.log("Greska")
      }
    })
    .catch((err) => console.log("err dodajObavijest"));
}

export async function aktivirajObavijest(obavijestId) {
  return await fetch(
    SERVER_URL+"/zanimljivost/activate/"+obavijestId, {
      method: 'PUT',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(obavijestId),
      credentials: 'include'
    }
  )
    .then((response) => {
      if(response.status === 200) {
        return response.json();
      } else {
        alert("Greska pri aktiviranju obavijesti");
        console.log("Greska")
      }
    })
    .catch((err) => console.log("err aktivirajObavijest"));
}

export async function deaktivirajObavijest(obavijestId) {
  return await fetch(
    SERVER_URL+"/zanimljivost/deactivate/"+obavijestId, {
      method: 'PUT',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(obavijestId),
      credentials: 'include'
    }
  )
    .then((response) => {
      if(response.status === 200) {
        return response.json();
      } else {
        alert("Greska pri deaktiviranju obavijesti");
        console.log("Greska")
      }
    })
    .catch((err) => console.log("err deaktivirajObavijest"));
}

/*
sprema novu taktiku
prima json
{
  datum: date,
  tezina: int
  solution: string json objekta
}
*/
export async function dodajTaktiku(form) {
  return await fetch(
    SERVER_URL+"/taktika/addNew", {
      method: 'PUT',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(form),
      credentials: 'include'
    }
  )
    .then((response) => {
      if(response.status === 200) {
        //let a = document.getElementById('formlink');
        //a.click();
        console.log("Dodana taktika") // ovo promijenit ovisno sta se zeli postic kod uspjeha dodavanja taktike
      } else {
        alert("Greska pri spremanju taktike");
        console.log("Greska")
      }
    })
    .catch((err) => console.log("err dodajTaktiku"));
}

/*
vraca danasnju taktiku ili null
{
  taktikaId: int
  datumTaktika: date
  tezina: int
  ispravnoRjesenje: string json objekta
  aktivna: 0/1
  avgOcjena: double
  Korisnik: objekt korisnika koji je stvorio taktiku
}
*/
export async function getTodayTaktika() {
  return await fetch(
    SERVER_URL+"/taktika/today", {
      method: 'GET',
      credentials: 'include'
    }
  )
    .then((response) => {
      if(response.status === 200) {
        return response.json();
      } else {
        alert("Greska pri dohvatu danasnje taktike");
        console.log("Greska")
      }
    })
    .catch((err) => console.log("err getTodayTaktika"));
}

/*
sprema ocjenu u odgovara i automatski azurira avgOcjenu taktike
prima argument grade
*/
export async function ocijeniTaktiku(grade) {
  return await fetch(
    SERVER_URL+"/odgovara/grade/"+grade, {
      method: 'PUT',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(grade),
      credentials: 'include'
    }
  )
    .then((response) => {
      if(response.status === 200) {
        //let a = document.getElementById('formlink');
        //a.click();
        return response.json()
        console.log("Taktika ocijenjena") // ovo promijenit ovisno sta se zeli postic kod uspjeha ocijenjivanja taktike
      } else {
        return response.json();
        console.log("Greska")
      }
    })
    .catch((err) => console.log("err ocijeniTaktiku"));
}

/*
sprema u prijavljujeErr
prima json:
{
  tener: trenerId
  opis: string
}
*/
export async function prijaviGresku(form) { 
  return await fetch(
    SERVER_URL+"/prijavErr/addNew", {
      method: 'PUT',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(form),
      credentials: 'include'
    }
  )
    .then((response) => {
      if(response.status === 200) {
        //let a = document.getElementById('formlink');
        //a.click();
        console.log("Dodana prijava greske") // ovo promijenit ovisno sta se zeli postic kod uspjeha dodavanja prijavae greske
      } else {
        alert("Greska pri prijavi greske");
        console.log("Greska")
      }
    })
    .catch((err) => console.log("err prijaviGresku"));
}

/*
vraca odgovor clana za danasnju taktiku ili null
{
  clan: json objekt clana,
  taktika: json objekt taktike,
  ocjena: int,
  rjesenje: string json objekt,
  bodovi: int
}
*/
export async function getOdgovorClana() {
  return await fetch(
    SERVER_URL+"/odgovara/today", {
      method: 'GET',
      credentials: 'include'
    }
  )
    .then((response) => {
      if(response.status === 200) {
        return response.json();
      } else {
        alert("Greska pri dohvatu odgovora");
        console.log("Greska")
      }
    })
    .catch((err) => console.log("err getOdgovaraZaclana"));
}


export async function suspendClan(id) {
  return await fetch(
    SERVER_URL+"/clan/suspend/" + id, {
      method: 'PUT',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(id),
      credentials: 'include'
    }
  )
    .then((response) => {
      if(response.status === 200) {
        return response.json();
      } else {
        alert("Greska pri suspendiranju clana");
        console.log("Greska")
      }
    })
    .catch((err) => console.log("err suspendClan"));
}

export async function unsuspendClan(id) {
  return await fetch(
    SERVER_URL+"/clan/unsuspend/" + id, {
      method: 'PUT',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(id),
      credentials: 'include'
    }
  )
    .then((response) => {
      if(response.status === 200) {
        return response.json();
      } else {
        alert("Greska pri unsuspendiranju clana");
        console.log("Greska")
      }
    })
    .catch((err) => console.log("err unsuspendClan"));
}

export async function blockKorisnik(id) {
  return await fetch(
    SERVER_URL+"/korisnik/block/" + id, {
      method: 'PUT',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(id),
      credentials: 'include'
    }
  )
    .then((response) => {
      if(response.status === 200) {
        return response.json();
      } else {
        alert("Greska pri blockiranju korisnika");
        console.log("Greska")
      }
    })
    .catch((err) => console.log("err blockKorisnik"));
}

export async function unblockKorisnik(id) {
  return await fetch(
    SERVER_URL+"/korisnik/unblock/" + id, {
      method: 'PUT',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(id),
      credentials: 'include'
    }
  )
    .then((response) => {
      if(response.status === 200) {
        return response.json();
      } else {
        alert("Greska pri unblockiranju korisnika");
        console.log("Greska")
      }
    })
    .catch((err) => console.log("err unblockKorisnik"));
}

/*
  vraca listu svih korisnika OSIM admina
  {
    "osobaId": id osobe,
    "korisnickoIme": korisnicko ime,
    "uloga": uloga ,
    "blokiran": 0 ili 1
  }
*/
export async function getAllKorisnikWOAdmin() {
  return await fetch(
    SERVER_URL+"/korisnik/getAll/list", {
      method: 'GET',
      credentials: 'include'
    }
  )
    .then((response) => {
      if(response.status === 200) {
        return response.json();
      } else {
        alert("Greska pri dohvatu liste svih korisnika osim admina");
        console.log("Greska")
      }
    })
    .catch((err) => console.log("err getAllKorisnikWOAdmin"));
}

/*
  vraca listu svih clanova bez ikakvog poretka
  {
    "osobaId": id osobe,
    "ime": ime,
    "prezime": prezime,
    "clanOd": datum od kada je clan,
    "bodovi": ukupni bodovi,
    "suspendiran": 0 ili 1
  }
*/
export async function getAllClanNoOrder() {
  return await fetch(
    SERVER_URL+"/clan/getAll", {
      method: 'GET',
      credentials: 'include'
    }
  )
    .then((response) => {
      if(response.status === 200) {
        return response.json();
      } else {
        alert("Greska pri dohvatu liste clanova");
        console.log("Greska")
      }
    })
    .catch((err) => console.log("err getAllClanNoOrder"));
}

/*
  vraca list svih clanova poredanu po bodovima (od najvise do najmanje)
  {
    "osobaId": id osobe,
    "ime": ime,
    "prezime": prezime,
    "clanOd": datum od kada je clan,
    "bodovi": ukupni bodovi,
    "suspendiran": 0 ili 1
  }
*/
export async function getAllClanOrderByPoints() {
  return await fetch(
    SERVER_URL+"/clan/getAll/leaderboard", {
      method: 'GET',
      credentials: 'include'
    }
  )
    .then((response) => {
      if(response.status === 200) {
        return response.json();
      } else {
        alert("Greska pri dohvatu liste clanova sortirane po bodovima");
        console.log("Greska")
      }
    })
    .catch((err) => console.log("err getAllClanOrderByPoints"));
}

/*
  salje se objekt oblika:
  {
    "bodovi": broj bodova,
    "ocjena": ocjena(ako nije odabrana, neka se posalje 0),
    "rjesenje": clanovo rjesenje taktike
  }

  nije slozeno da se azuriraju bodovi clanu, zasad se samo sprema objekt
  "Odgovara" u bazu
*/
export async function dodajOdgovor(form) {
  return await fetch(
    SERVER_URL+"/odgovara/add", {
      method: 'PUT',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(form),
      credentials: 'include'
    }
  )
    .then((response) => {
      if(response.status === 200) {
        console.log("Dodan odgovor") 
      } else {
        alert("Greska pri spremanju odgovora");
        console.log("Greska")
      }
    })
    .catch((err) => console.log("err dodajOdgovor"));
}
export async function platiClanarinu(form) {
  return await fetch(
    SERVER_URL+"/MjesecnaClan/plati", {
      method: 'PUT',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(form),
      credentials: 'include'
    }
  )
    .then((response) => {
      if(response.status === 200) {
        return response.json();
      } else {
        alert("Već si platio za odabran mjesec!");
        console.log("Greska")
      }
    })
    .catch((err) => console.log("err platiClanarinu"));
}
export async function getClanarinaByClanId(id) {
  return await fetch(
    SERVER_URL+"/MjesecnaClan/getByClanId/" + id, {
      method: 'GET',
      headers: {'Content-Type': 'application/json'},
      credentials: 'include'
    }
  )
    .then((response) => {
      if(response.status === 200) {
        return response.json();
      } else {
        alert("Greška pri fetchanju plaćenih mjesečnih članarina");
        console.log("Greska")
      }
    })
  }

  export async function odjaviTu(id) {
    return await fetch(
      SERVER_URL+"/prijavTu/delete/" + id, {
        method: 'DELETE',
        headers: {'Content-Type': 'application/json'},
        credentials: 'include'
      }
    )
      .then((response) => {
        console.log("Uspjesno odjavljen turnir");
      })
      .catch((err) => console.log("err odjaviTu"));
    }

export async function odjaviTr(id) {
  return await fetch(
    SERVER_URL+"/prijavTr/delete/" + id, {
      method: 'DELETE',
      headers: {'Content-Type': 'application/json'},
      credentials: 'include'
      }
  )
  .then((response) => {
    console.log("Uspjesno odjavljen trening");
  })
  .catch((err) => console.log("err odjaviTr"));
}

export async function dohvatiPrijavErr() {
  return await fetch(
    SERVER_URL+"/prijavErr/getAll", {
      method: 'GET',
      headers: {'Content-Type': 'application/json'},
      credentials: 'include'
      }
  )
  .then((response) => {
    console.log("Uspjesno dohvaceni errori");
    return response.json();
  })
  .catch((err) => console.log("err dohvatiPrijavErr"));
}

//format yyyy-mm-dd
export async function getAnyTaktika(date) {
  return await fetch(
    SERVER_URL+"/taktika/getOne/"+date, {
      method: 'GET',
      credentials: 'include'
    }
  )
    .then((response) => {
      if(response.status === 200) {
        return response.json();
      } else {
        return null;
      }
    })
    .catch((err) => console.log("err getAnyTaktika"));
}

export async function getAllOdgovoriClan() {
  return await fetch(
    SERVER_URL+"/odgovara/getForClan", {
      method: 'GET',
      credentials: 'include'
    }
  )
    .then((response) => {
      if(response.status === 200) {
        return response.json();
      } else {
        alert("Greska pri dohvatu odgovora clana");
        console.log("Greska")
      }
    })
    .catch((err) => console.log("err getAllOdgovoriClan"));
}

export async function prihvatiPrijavErr(id, date) {
  return await fetch(
    SERVER_URL+"/prijavErr/accept/"+id+"/"+date, {
      method: 'DELETE',
      credentials: 'include'
    }
  )
    .then((response) => {
      console.log("Uspjesno prihvacen prijavErr")
    })
    .catch((err) => console.log("err prihvatiPrijavErr"));
}

export async function odbijPrijavErr(id, date) {
  return await fetch(
    SERVER_URL+"/prijavErr/decline/"+id+"/"+date, {
      method: 'DELETE',
      credentials: 'include'
    }
  )
    .then((response) => {
      console.log("Uspjesno odbijen prijavErr")
    })
    .catch((err) => console.log("err odbijPrijavErr"));
}