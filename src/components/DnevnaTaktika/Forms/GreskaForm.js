import Cookies from "js-cookie";
import React, { useEffect } from "react";

import { InputButton, 
    InputButtonContainer, InputLabel, 
    InputContainer, InputBox, InputBoxOpis} from "./GreskaStyle";
import { useState } from "react";
import { getAllTreneri, logIn, prijaviGresku } from "../../../utils/FetchFunction";


const GreskaForm= (props) => {
    
    const [form, handleForm] = useState({trener: 0 , opis:""})
    const [treneri, setTreneri] = useState([])
    let options=[]
    for(let Trener of treneri){
        options.push(
            <option key={Trener.osobaId} value={Trener.osobaId}> {Trener.titula + " " + Trener.ime + " " + Trener.prezime} </option>
        )
    }
   
   useEffect(()=>{ 
        getAllTreneri().then((result)=>{
            setTreneri(result)
            let temp={...form}
            temp.trener=result[0].osobaId
            handleForm(temp)
        })
    }, [])

    let HandleSubmit= (e)=> {
        e.preventDefault();
        prijaviGresku(form)
        document.getElementById("resultText").innerText="Uspješno poslana greška"
        props.setShow("")
    }
    let handleInputChange = (e)=>{
        const target = e.target;
        const value = target.value;
        const name = target.name;
        handleForm({...form,[name]:value})
    }

    return (
        <>
        <div hidden={props.hide}>
            <form action="/" onSubmit={(e)=>{
                                e.preventDefault();
                                HandleSubmit(e);
                                }
                                }>
                <InputContainer>
                    <InputLabel for="trener">Trener: </InputLabel>
                    <InputBox required name="trener" value={form.trener} id="trener" onChange={(e)=>handleInputChange(e)} placeholder="odaberite trenera za pregled">
                        <option key={0} value={0} disabled> Odaberi trenera </option>
                        {options}
                    </InputBox>
                </InputContainer>
                <InputContainer>
                    <InputLabel for="opis">Opis greške: </InputLabel>
                    <InputBoxOpis required type="text" value={form.opis} name="opis" id="opis" 
                    rows={10} cols= {35}
                    onChange={(e)=>handleInputChange(e)} placeholder="opišite grešku u taktici"></InputBoxOpis>
                </InputContainer>
                <InputButtonContainer>
                    <div id="errorMsg" hidden>Greška</div>
                </InputButtonContainer>
                <InputButtonContainer>
                    <InputButton type="reset" onClick={()=>handleForm({trener:"", opis:""})}></InputButton>
                    <InputButton type="submit" value="Prijavi"></InputButton>
                </InputButtonContainer>
            
            </form>

        </div>
        <a href="/" id="formlink" hidden/>
        </>

    );
};
export default GreskaForm;
