import styled from "styled-components";


export const Section = styled.div`
  width: 90%;
  margin-left: 5%;
  margin-top: 20px;
  margin-bottom: 20px;
  padding: 10px 20px 40px 20px;
  border-left: 3px solid #E98074;
  background-color: #ebe1d2;
`;

export const SectionNaslov = styled.h1`
    display: inline-block;
    width: fit-content:
    margin-left: 20px;
    margin-bottom: 20px;
    color: #E85A4F;
    border-bottom: 2px solid #E98074;
`;

export const ObavijestFlexContainer = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
    flex-wrap: wrap;
    gap: 50px;
`;

export const ObavijestContainer = styled.div`
  width: 350px;
  min-height: 300px; 
  border-top: 3px solid #E98074;
  border-left: 3px solid #E98074;
  border-bottom: 1px solid #E98074;
  border-right: 1px solid #E98074;
  padding: 10px 20px 10px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #efe7db;
`;

export const NaslovObavijesti = styled.h2`
    width: fit-content;
    text-align: center;
    color: #E85A4F;
    border-bottom: 2px solid #E98074;
    margin-bottom: 10px;
    font-size: 1.7em;
`;


export const OpisObavijesti = styled.div`
    align-self: flex-start;
    font-size: 1.3em;
    //color: #8E8D8A;
`;

export const ButtonFlexContainer = styled.div`
  
    display: flex;
    justify-content: flex-end; 
    button{
    width: 100px;
    height: 50px;
    margin-left:10px;
    }
`;

export const Button = styled.button`
    display: inline-block;
    width: 150px !important;
    border: 4px solid #e98074;
    height: 50px;
    margin: 10px;
    background-color: #efe7db;
    color: #E85A4F;
    font-weight: 600;
    font-size: 1.1em;
    :hover{background-color: #d8c3a5;}
`;

export const AutorObavijesti = styled.div` 
    align-self: flex-end;
    font-size: 1em;
    color: #8E8D8A;
`;

export const DatumObavijesti = styled.div` 
    align-self: flex-end;
    font-size: 1em;
    color: #8E8D8A;

`;
export const ButtonMali= styled.button`
    width: fit-content;
    padding: 5px;
    border: 4px solid #e98074;
    margin: 20px;
    display:inline-block;
    background-color: #efe7db;
    color: #e85a4f;
    font-weight: 600;
    font-size: 1em;
    :hover{
        background-color: #d8c3a5;
    }
`;