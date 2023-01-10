import React from "react";
import { InputButton, InputButtonContainer, InputLabel, FormSection, InputContainer, InputBox} from "./DodajTurnirStyle";
import { useState } from "react";
import { dodajTurnir } from "../../utils/FetchFunction";
import { useNavigate } from "react-router-dom";


const DodajTurnirComponent= (props) => {

    const [form, handleForm] = useState(
        {
            naziv:"",
            datumTurnira:"",
            mjesto:"",
            vrijemeTurnir:"",
            kapacitet:""
        }
    )

    const navigate=useNavigate();

    let handleInputChange = (e)=>{
        const target = e.target;
        const value = target.value;
        const name = target.name;
        handleForm({...form,[name]:value})
    }

    let HandleSubmit= ()=>{
        console.log(form)
        dodajTurnir(form).then(
            (response)=>{
                navigate("/turniri")
            }
        )
    }

    const today = new Date();
    return (
        <>
        <FormSection>
            <form lang="hr" action="/" onSubmit={(e)=>{
                                e.preventDefault();
                                HandleSubmit(e);
                                }
                                }>
                <InputContainer>
                    <InputLabel for="naziv">Naziv: </InputLabel>
                    <InputBox required name="naziv" value={form.naziv} id="naziv" onChange={(e)=>handleInputChange(e)} placeholder="naziv"></InputBox>
                </InputContainer>
                <InputContainer>
                    <InputLabel for="datumTurnira">Datum turnira: </InputLabel>
                    <InputBox name="datumTurnira" required value={form.datumTurnira} min={today.toISOString().split('T')[0]} id="datumTurnira" onChange={(e)=>handleInputChange(e)} placeholder="datumTurnira" type="date"></InputBox>
                </InputContainer>
                <InputContainer>
                    <InputLabel for="mjesto">Mjesto turnira: </InputLabel>
                    <InputBox required name="mjesto" type="mjesto" value={form.mjesto} id="mjesto" onChange={(e)=>handleInputChange(e)} placeholder="mjesto"></InputBox>
                </InputContainer>
                <InputContainer>
                    <InputLabel for="vrijemeTurnir">Vrijeme turnira: </InputLabel>
                    <InputBox required name="vrijemeTurnir" value={form.vrijemeTurnir} id="vrijemeTurnir" onChange={(e)=>handleInputChange(e)} placeholder="vrijemeTurnir"></InputBox>
                </InputContainer>
                <InputContainer>
                    <InputLabel for="kapacitet">Kapacitet: </InputLabel>
                    <InputBox required type={"number"} value={form.kapacitet} name="kapacitet" id="kapacitet" onChange={(e)=>handleInputChange(e)} placeholder="kapacitet"></InputBox>
                </InputContainer>
                <InputButtonContainer>
                    <InputButton type="reset" onClick={()=>handleForm({
                        naziv:"",
                        datumTurnira:"",
                        mjesto:"",
                        vrijemeTurnir:"",
                        kapacitet:""
                    })}></InputButton>
                    <InputButton type="submit" value="Dodaj turnir"></InputButton>
                </InputButtonContainer>
            </form>

        </FormSection>
        <a href="/turniri" id="formlink" hidden/>
        </>

    );
};
export default DodajTurnirComponent;
