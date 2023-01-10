import Cookies from "js-cookie";
import React, { useEffect } from "react";

import { InputButton, 
    InputButtonContainer, InputLabel, 
    InputContainer, InputBox, InputBoxOpis, Input, InputNumber} from "./GreskaStyle";
import { useState } from "react";
import { dodajOdgovor, dodajTaktiku, getAnyTaktika } from "../../../utils/FetchFunction";
import { Link, useNavigate } from "react-router-dom";

const SolutionForm= (props) => {
    
    const [form, handleForm] = useState(props.form)
    const navigate=useNavigate();
    
    let handleInputChange = (e)=>{
        const target = e.target;
        const value = target.value;
        const name = target.name;
        handleForm({...form,[name]:value})
    }
  
    let HandleSubmit= (e)=> {
        e.preventDefault();
        console.log(form)
        let confirm=true;
        getAnyTaktika(form.datum).then((result)=>{
            if(result){
               if(window.confirm("Na dani datum je već postavljena taktika. Želite li zamijeniti postavljenu taktiku?")!=true) {confirm=false; return}
               dodajTaktiku(form).then(
                ()=>{
                    navigate("/")
                });
                return;
            }
            dodajTaktiku(form).then(
                ()=>{
                    navigate("/")
                }
            )
        })

          

    }

    const today = new Date();
    
    return (
        <>
        <div>
            <form action="/" onSubmit={(e)=>{
                                e.preventDefault();
                                HandleSubmit(e);
                                }
                                }>
                <InputContainer>
                    <InputLabel for="datum">Datum: </InputLabel>
                    <InputNumber required type="date" name="datum" value={form.datum} min={today.toISOString().split('T')[0]} id="date" onChange={(e)=>handleInputChange(e)}>
                
                    </InputNumber>
                    
                </InputContainer>
                
                <InputContainer>
                    <InputLabel for="tezina">Tezina: </InputLabel>
                    <InputNumber required type="number" name="tezina" value={form.level} id="tezina" min="1" max="5" onChange={(e)=>handleInputChange(e)} placeholder="tezina">
                
                    </InputNumber>
                    
                </InputContainer>

                <InputContainer>
                    <InputLabel for="opis">Opis: </InputLabel>
                    <InputNumber required  name="opis" value={form.opis} id="opis" onChange={(e)=>handleInputChange(e)} placeholder="Kratki opis/naslov taktike">
                
                    </InputNumber>
                    
                </InputContainer>

                <input hidden required name="solution" value={form.solution} id="solution"></input>
            
                {/*
                <InputContainer>
                    <InputLabel for="description">Opis zadatka: </InputLabel>
                    <InputBoxOpis required type="text" value={form.description} name="description" id="description" 
                    rows={10} cols= {30}
                    onChange={(e)=>handleInputChange(e)} placeholder="Opišite zadanu taktiku"></InputBoxOpis>
                </InputContainer>
                            */}
                <InputButtonContainer>
                    <InputButton type="submit" value="Spremi"></InputButton>
                </InputButtonContainer>
            
            </form>

        </div>
        <a href="/" id="formlink" hidden/>
        </>

    );
};
export default SolutionForm;
