import styled from "styled-components";


export const Section = styled.section`
  
  width: 80%;
  margin-top: 10px;
  margin-left: 10%;
  display: inline-block;
  border-left: 3px solid #E98074;
  background-color: #ebe1d2;
  
  padding: 10px 20px 20px 20px;
  
`;

export const SectionNaslov = styled.h1`
  display: inline-block;
  width: fit-content:
  margin-left: 20px;
  margin-bottom: 10px;
  color: #E85A4F;
  border-bottom: 2px solid #E98074;
`;

export const TurnirFlexContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    justify-content: space-around;
    align-content: start;
    gap: 10px;

    padding-top: 10px;
`;

export const TurnirContainer = styled.div`
  color: #E85A4F;
  width: 100%;
  padding: 10px 10px 10px 10px;
  margin-bottom: 5px;
  border-left: 1px solid #E98074;
  background-color: #efe7db;
`;

export const NaslovTurnira = styled.h3`
    width: 100%;
`;

export const MjestoTurnira = styled.div`
    width: 100%;
`;

export const VrijemeTurnira = styled.div`
    width: 100%;
`;

export const DatumTurnira = styled.div`
    width: 100%;
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
    font-size: 1.3em;
    :hover{background-color: #d8c3a5;}
`;


