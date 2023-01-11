import Cookies from "js-cookie";
import React, { useEffect } from "react";

import { InputButton, 
    InputButtonContainer, InputLabel, 
    InputContainer, InputBox, InputBoxOpis} from "./GreskaStyle";
import { useState } from "react";
import { logIn, ocijeniTaktiku } from "../../../utils/FetchFunction";
import { Link } from "react-router-dom";

const OcjenaForm= (props) => {
    let ocjene=["vrlo lagano", "lagano", "srednje teško", "teško", "jako teško"]
    
    const [form, handleForm] = useState({ocjena: 1})

    let options=[]
    for(let ocjena in ocjene){
        options.push(
            <option key={ocjena} value={parseInt(ocjena)+1}> {ocjene[ocjena]} </option>
        )
    }
    let handleInputChange = (e)=>{
        const target = e.target;
        const value = target.value;
        const name = target.name;
        handleForm({...form,[name]:value})
    }
  
    let HandleSubmit= (e)=> {
        e.preventDefault();
        ocijeniTaktiku(form.ocjena).then(
            props.setOcjenjeno(true)
        )
        document.getElementById("resultText").innerText="Uspješno ocjenjena taktika"
        props.setShow("")
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
                    <InputLabel for="ocjena">Ocjena: </InputLabel>
                    <InputBox required name="ocjena" value={form.ocjena} id="ocjena" onChange={(e)=>handleInputChange(e)} placeholder="odaberite Ocjenu za pregled">
                        {options}
                    </InputBox>
                </InputContainer>

                <InputButtonContainer>
                    <InputButton type="submit" value="Ocjeni"></InputButton>
                </InputButtonContainer>
            
            </form>

        </div>
        <a href="/" id="formlink" hidden/>
        </>

    );
};
export default OcjenaForm;
