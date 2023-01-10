import React, { useReducer, useEffect } from "react";
import { InputButton, InputButtonContainer, InputLabel, FormSection, InputContainer, InputBox, SelectBox} from "./DodajTreningStyle";
import { useState } from "react";
import { dodajTrening, getAllTreneri } from "../../utils/FetchFunction";
import Treneri from "../../assets/data/treneri.json"
import { useNavigate } from "react-router-dom";
//import { getTreneri } from "../../utils/FetchFunction";

const DodajTreningComponent= (props) => {
    //console.log(props.user.role)
    
    const [form, handleForm] = useState(
        {
            trener:"",
            datumTreninga:"",
            mjesto:"",
            vrijemeTreninga:"",
            trajanje:""
        }
    )
    const [treneri,setTreneri]= useState([]);

    const navigate=useNavigate();

    useEffect(()=>{
        getAllTreneri().then(
            (item)=>{
                setTreneri(item);
            }
        )
    }, []);

    let options=[]
    for(let Trener of treneri){
        options.push(
            <option key={Trener.osobaId} value={Trener.osobaId}> {Trener.titula + " " + Trener.ime + " " + Trener.prezime} </option>
        )
    }
    //console.log(options)

    

    let handleInputChange = (e)=>{
        const target = e.target;
        const value = target.value;
        const name = target.name;
        handleForm({...form,[name]:value})
    }

    let HandleSubmit= ()=>{
        //console.log(props.user.userId)
        if(form.trener == "") {
            form.trener = ((props.user.role === "admin") ?  treneri.at(0).osobaId : props.user.userId);
        }
        console.log(form)
        dodajTrening(form).then(
            (response)=>{
                navigate("/treninzi")
            }
        )
    }

    const today = new Date();
    console.log(today)
    return (
        <>
        <FormSection>
            <form lang="hr" action="/" onSubmit={(e)=>{
                                e.preventDefault();
                                HandleSubmit(e);
                                }
                                }>
                {
                (props.user.role === "admin") ?
                (<InputContainer>
                    <InputLabel for="trener">Trener: </InputLabel>
                    <SelectBox required name="trener" value={form.trener.osobaId} id="trener" onChange={(e)=>handleInputChange(e)} placeholder="trener">
                        {options}
                    </SelectBox>
                </InputContainer>):
                (<>
                <InputLabel for="trener"></InputLabel>
                    <InputBox required name="trener" value={props.user.userId} id="trener"  placeholder="trener" type="hidden"></InputBox>
                </>)
                }
                <InputContainer>
                    <InputLabel for="datumTreninga">Datum treninga: </InputLabel>
                    <InputBox name="datumTreninga" required value={form.datumTreninga} min={today.toISOString().split('T')[0]} id="datumTreninga" onChange={(e)=>handleInputChange(e)} type="date"></InputBox>
                </InputContainer>
                <InputContainer>
                    <InputLabel for="mjesto">Mjesto treninga: </InputLabel>
                    <InputBox required name="mjesto" type="mjesto" value={form.mjesto} id="mjesto" onChange={(e)=>handleInputChange(e)} placeholder="mjesto"></InputBox>
                </InputContainer>
                <InputContainer>
                    <InputLabel for="vrijemeTreninga">Vrijeme treninga: </InputLabel>
                    <InputBox required name="vrijemeTreninga" value={form.vrijemeTreninga} id="vrijemeTreninga" onChange={(e)=>handleInputChange(e)} placeholder="vrijemeTrening"></InputBox>
                </InputContainer>
                <InputContainer>
                    <InputLabel for="trajanje">Trajanje: </InputLabel>
                    <InputBox required type={"number"} value={form.trajanje} name="trajanje" min={0} id="trajanje" onChange={(e)=>handleInputChange(e)} placeholder="trajanje"></InputBox>
                </InputContainer>
                <InputButtonContainer>
                    <InputButton type="reset" onClick={()=>handleForm({
                        trener:"",
                        datumTrening:"",
                        mjesto:"",
                        vrijemeTrening:"",
                        trajanje:""
                    })}></InputButton>
                    <InputButton type="submit" value="Dodaj trening"></InputButton>
                </InputButtonContainer>
            </form>

        </FormSection>
        <a href="/treninzi" id="formlink" hidden/>
        </>

    );
};
export default DodajTreningComponent;
