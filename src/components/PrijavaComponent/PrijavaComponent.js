import Cookies from "js-cookie";
import React, { useEffect } from "react";
import Users from "../../assets/data/users.json"
import { ButtonFlexContainer, ButtonNaslov, Section, InputButton, InputButtonContainer, InputLabel, FormSection, InputContainer, InputBox} from "./PrijavaStyle";
import { useState } from "react";
import { logIn } from "../../utils/FetchFunction";

import { Link } from "react-router-dom";

const PrijavaComponent= (props) => {
    
    const [form, handleForm] = useState({username:"", password:""})

    let handleInputChange = (e)=>{
        const target = e.target;
        const value = target.value;
        const name = target.name;
        handleForm({...form,[name]:value})
    }
   useEffect(()=>{ document.getElementById("errorMsg").hidden=true;}, [])
    let HandleSubmit= ()=> {
        logIn(form).then(
            (result)=>{
                
                let json=result;
                if(json===undefined) return;
                Cookies.set("user",JSON.stringify(json))
                document.getElementById("errorMsg").hidden=true;
                let a = document.getElementById('formlink')
                a.click()
        
        })
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
                <InputButtonContainer>Nemaš profil? <Link to="/registracija">Registriraj se!</Link></InputButtonContainer>
            
            </form>

        </FormSection>
        <a href="/" id="formlink" hidden/>
        </>

    );
};
export default PrijavaComponent;
