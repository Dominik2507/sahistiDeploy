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
