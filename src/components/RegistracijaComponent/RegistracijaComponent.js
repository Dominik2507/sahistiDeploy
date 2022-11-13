import React from "react";
import Users from "../../assets/data/users.json"
import { ButtonFlexContainer, ButtonNaslov, Section, InputButton, InputButtonContainer, InputLabel, FormSection, InputContainer, InputBox, InputOption} from "./RegistracijaStyle";
import { useState } from "react";
import { registration } from "../../utils/FetchFunction";

const RegistracijaComponent= (props) => {
    
    const [form, handleForm] = useState(
        {
            username:"", 
            password:"",
            firstname:"",
            lastname:"",
            email:"",
            role:"Član"
        }
    )

    

    let handleInputChange = (e)=>{
        const target = e.target;
        const value = target.value;
        const name = target.name;
        handleForm({...form,[name]:value})
    }

    let HandleSubmit= ()=>{
        console.log(form)
        registration(form)
        /*
        let users = Users.users
        for(let user of users){
            if(form.username === user.korisnickoIme ){
                alert("Vec se koristi username " + user.korisnickoIme)
            }
            if(form.email === user.email){
                alert("Vec se koristi email" + user.email)
            }

        }
        alert("Registriran korisnik: " + JSON.stringify(form))*/
    }

    return (
        <>  
        <FormSection>
            <form lang="hr" action="/" onSubmit={(e)=>{
                                e.preventDefault();
                                HandleSubmit(e);
                                }
                                }>
                <InputContainer>
                    <InputLabel for="firstname">Ime: </InputLabel>
                    <InputBox required name="firstname" value={form.firstname} id="firstname" onChange={(e)=>handleInputChange(e)} placeholder="ime"></InputBox>
                </InputContainer>
                <InputContainer>
                    <InputLabel for="lastname">Prezime: </InputLabel>
                    <InputBox required name="lastname" value={form.lastname} id="lastname" onChange={(e)=>handleInputChange(e)} placeholder="prezime"></InputBox>
                </InputContainer>
                <InputContainer>
                    <InputLabel for="email">Email: </InputLabel>
                    <InputBox required name="email" type="email" value={form.email} id="email" onChange={(e)=>handleInputChange(e)} placeholder="email"></InputBox>
                </InputContainer>
                <InputContainer>
                    <InputLabel for="username">Username: </InputLabel>
                    <InputBox required name="username" value={form.username} id="username" onChange={(e)=>handleInputChange(e)} placeholder="korisnicko ime"></InputBox>
                </InputContainer>
                <InputContainer>
                    <InputLabel for="password">Lozinka:</InputLabel>
                    <InputBox autocomplete="disabled" required value={form.password} name="password" id="password" onChange={(e)=>handleInputChange(e)} placeholder="lozinka"></InputBox>
                </InputContainer>
                <InputContainer onChange={(e)=>handleInputChange(e)}>
                    <InputLabel for="role">Uloga: </InputLabel>
                    <input type="radio" id="role1" name="role" value="Admin" checked={form.role==="Admin"}/>
                    <label for="role1">Admin</label>
                    <input type="radio" id="role2" name="role" value="Trener" checked={form.role==="Trener"}/>
                    <label for="role2">Trener</label>
                    <input type="radio" id="role3" name="role" value="Član" checked={form.role==="Član"}/>
                    <label for="role3">Član</label>
                </InputContainer>
                <InputButtonContainer>
                    <InputButton type="reset" onClick={()=>handleForm({username:"", password:""})}></InputButton>
                    <InputButton type="submit" value="Registriraj se"></InputButton>
                </InputButtonContainer>
                <InputButtonContainer>Imaš profil? <a href="/prijava">Prijavi se!</a></InputButtonContainer>
            </form>

        </FormSection>
        <a href="/" id="formlink" hidden/>
        </>

    );
};
export default RegistracijaComponent;
