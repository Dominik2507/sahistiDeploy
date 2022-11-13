  export async function logIn(form) {
    return await fetch(
      "http://localhost:8080/prijava/", {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(form)
      }
    )
      .then((response) => {
        
        if(response.status == 200) {
          
          return response.json()
        } else {
          console.log("NEUSPJESNA prijava")
          document.getElementById("errorMsg").hidden=false;
          document.getElementById("errorMsg").innerHTML="Unijeli ste krivo korisnicko ime ili lozinku!";
        }
        
      })
      .catch((err) => console.log("err"));
    
  }

  //napisati funkciju logOut() kad vidimo kako se ona zove iz ProfilComponent.js

  export async function registration(form) {
    return await fetch(
      "http://localhost:8080/registracija", {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(form)
      }
    )
      .then((response) => {
                
        if(response.status == 200) {
 
          console.log("Uspjesna registracija")
          
          let a = document.getElementById('formlink')
          a.click()
          return
        } else {
          console.log("NEUSPJESNA registracija")
          alert("Email ili korisnicko ime je vec u upotrebi!");
        }
        
      })
      .catch((err) => console.log("err"));
    
  }

  export async function getTreninzi() {
    return await fetch(
      "http://localhost:8080/trening/getAll")
      .then((response) => {
        return response.json()
      })
      .catch((err) => console.log("err"));
    
  }

  export async function getTurniri() {
    return await fetch(
      "http://localhost:8080/turnir/getAll")
      .then((response) => {
        return response.json()
      })
      .catch((err) => console.log("err"));
    
  }

  export async function getObavijesti() {
    return await fetch(
      "http://localhost:8080/zanimljivost/getAll")
      .then((response) => {
        return response.json()
      })
      .catch((err) => console.log("err"));
    
  }
  