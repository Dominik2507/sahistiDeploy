import React from "react";
import { InputButton, InputButtonContainer, InputLabel, FormSection, InputContainer, InputBox, InputBoxOpis} from "./DodajObavijestStyle";
import { useState } from "react";
import { dodajObavijest } from "../../utils/FetchFunction";

const DodajObavijestComponent= (props) => {

    const today = new Date();
    //console.log(props.user.userId)
    const [form, handleForm] = useState(
        {
            opis:"",
            naslov:"",
            osoba:""
        }
    )

    let handleInputChange = (e)=>{
        const target = e.target;
        const value = target.value;
        const name = target.name;
        handleForm({...form,[name]:value})
    }

    let HandleSubmit= ()=>{
        form.datum = today.getFullYear()+"-"+today.getMonth()+"-"+today.getDate();
        form.osoba = props.user.userId;
        console.log(form)
        dodajObavijest(form)
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
                    <InputLabel for="naslov">Naslov: </InputLabel>
                    <InputBox required name="naslov" value={form.naslov} id="naslov" onChange={(e)=>handleInputChange(e)} placeholder="Naslov"></InputBox>
                </InputContainer>
                <InputContainer>
                    <InputLabel for="opis">Opis: </InputLabel>
                    <InputBoxOpis required name="opis" type="opis" value={form.opis} id="opis" rows={15} cols={50} onChange={(e)=>handleInputChange(e)} placeholder="Tekst obavijesti"></InputBoxOpis>
                </InputContainer> 
                <>
                    <InputLabel for="osoba"></InputLabel>
                    <InputBox required value={props.user.userId} name="osoba" id="osoba" placeholder="osoba" type="hidden"></InputBox>
                </>
                <InputButtonContainer>
                    <InputButton type="reset" onClick={()=>handleForm({
                        datum:"",
                        opis:"",
                        naslov:"",
                        osoba:""
                    })}></InputButton>
                    <InputButton type="submit" value="Dodaj obavijest"></InputButton>
                </InputButtonContainer>
            </form>

        </FormSection>
        <a href="/" id="formlink" hidden/>
        </>

    );
};
export default DodajObavijestComponent;
