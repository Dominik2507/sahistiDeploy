import React from "react";
import Users from "../../assets/data/users.json"
import { ButtonFlexContainer, ButtonNaslov, Section, InputButton, InputButtonContainer, InputLabel, FormSection, InputContainer, InputBox} from "./PrijavaStyle";
import { useState } from "react";



const PrijavaComponent= (props) => {
    
    const [form, handleForm] = useState({username:"", password:""})
    

    let handleInputChange = (e)=>{
        const target = e.target;
        const value = target.value;
        const name = target.name;
        handleForm({...form,[name]:value})
    }

    let HandleSubmit= ()=>{
        console.log(form)
        let users = Users.users
        for(let user of users){
            if(form.username === user.korisnickoIme || form.username === user.email){
                if(form.password === user.lozinka){
                    let a = document.getElementById('formlink')
                    localStorage.setItem("user", JSON.stringify(user))
                    a.click()
                    return
                }
                document.getElementById("errorMsg").hidden=false;
                document.getElementById("errorMsg").innerHTML="Unijeli ste krivu lozinku!";
                
                return
            }

        }
        document.getElementById("errorMsg").hidden=false;
        document.getElementById("errorMsg").innerHTML="Ne postoji korisnik!";
    }

    return (
        <>  
        <FormSection>
            <form action="/" onSubmit={(e)=>{
                                e.preventDefault();
                                HandleSubmit(e);
                                }
                                }>
                <InputContainer>
                    <InputLabel for="username">Username: </InputLabel>
                    <InputBox required name="username" value={form.username} id="username" onChange={(e)=>handleInputChange(e)} placeholder="korisnicko ime"></InputBox>
                </InputContainer>
                <InputContainer>
                    <InputLabel for="password">Lozinka: &nbsp;&nbsp;&nbsp;&nbsp;</InputLabel>
                    <InputBox required type="password" value={form.password} name="password" id="password" onChange={(e)=>handleInputChange(e)} placeholder="lozinka"></InputBox>
                </InputContainer>
                <InputButtonContainer>
                    <div id="errorMsg" hidden>Greška</div>
                </InputButtonContainer>
                <InputButtonContainer>
                    <InputButton type="reset" onClick={()=>handleForm({username:"", password:""})}></InputButton>
                    <InputButton type="submit" value="Prijava"></InputButton>
                </InputButtonContainer>
                <InputButtonContainer>Nemaš profil? <a href="/registracija">Registriraj se!</a></InputButtonContainer>
            </form>

        </FormSection>
        <a href="/" id="formlink" hidden/>
        </>

    );
};
export default PrijavaComponent;