import Cookies from "js-cookie";

  export async function logIn(form) {
    return await fetch(
      "https://sahisti-server.herokuapp.com/prijava/", {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(form),
        credentials: 'include'
      }
    )
      .then((response) => {
        if(response.status === 200) {
          return response.json();
        } else {
          console.log("NEUSPJESNA prijava")
          document.getElementById("errorMsg").hidden=false;
          document.getElementById("errorMsg").innerHTML="Unijeli ste krivo korisnicko ime ili lozinku!";
        }
      })
      .catch((err) => console.log("err logIn"));
    
  }

  export async function registration(form) {
    return await fetch(
      "https://sahisti-server.herokuapp.com/registracija", {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(form)
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
      "https://sahisti-server.herokuapp.com/trening/getAll")
      .then((response) => {
        return response.json()
      })
      .catch((err) => console.log("err getTreninzi"));
    
  }

  export async function getTurniri() {
    return await fetch(
      "https://sahisti-server.herokuapp.com/turnir/getAll")
      .then((response) => {
        return response.json()
      })
      .catch((err) => console.log("err getTurniri"));
    
  }

  export async function getObavijesti() {
    return await fetch(
      "https://sahisti-server.herokuapp.com/zanimljivost/getAll")
      .then((response) => {
        return response.json()
      })
      .catch((err) => console.log("err getObavijesti"));
    
  }
  
  export async function getProfil() {
    return await fetch(
      "https://sahisti-server.herokuapp.com/profil", {
        credentials: 'include'
      })
      .then((response) => {
        if(response.status === 200) {
          console.log("Uspjesan dohvat profila!");
          return response.json();
        } else if(response.status === 404) {
          console.log("session istekao!");
          
          if(Cookies.get('user') !== undefined) {
            Cookies.remove('user');
          }
          
          alert("Your session expired. Please login again.");
          window.location.href = "https://sahisti-server.herokuapp.com/";
          
        }
      })
      .catch((err) => console.log("err getProfil"))

  }

  export async function logout() {
    return await fetch(
      "https://sahisti-server.herokuapp.com/odjava", {
        credentials: 'include'
      })
      .then((response) => {
        if(response.status === 200) {
          console.log("Uspjesan logout!");
        }
      })
      .catch((err) => console.log("err logout"));

  }
