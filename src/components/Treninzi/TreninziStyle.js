import styled from "styled-components";


export const Section2 = styled.div`
  width: 90%;
  margin-left: 5%;
  margin-right: 1%;
  display: inline-block;
  border-left: 3px solid #E98074;
  background-color: #ebe1d2;
  
  padding: 10px 20px 20px 20px;
`;

export const Section = styled.div`
  width: 44%;
  margin-left: 5%;
  margin-right: 1%;
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

export const TreningFlexContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    justify-content: space-around;
    align-content: start;
    gap: 10px;
    padding-top: 10px;
`;

export const TreningContainer = styled.div`
  color: #E85A4F;
  width: 100%;
  padding: 10px 10px 10px 10px;
  margin-bottom: 5px;
  border-left: 1px solid #E98074;
  background-color: #efe7db;
`;

export const NaslovTreninga = styled.h3`
    width: 100%;
`;


export const OpisTreninga = styled.div`
    width: 100%;
`;

export const ButtonLink = styled.div`
    color: #E85A4F;
    :visited{
       color: #E85A4F;
    };
`;
