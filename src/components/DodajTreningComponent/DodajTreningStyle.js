import styled from "styled-components";


export const Section = styled.section`

    width: 80%;
    margin-top: 10px;
    margin-left: 10%;

`;
export const ButtonFlexContainer = styled.div`

    display: flex;
    justify-content: center;
    button{
    width: 100px;
    height: 50px;
    margin-left:10px;
    }
`;
export const ButtonNaslov= styled.h1`
    width: 100%;
    padding: 10px 10px 10px 10px;
    text-align: center;
`;
export const InputButton= styled.input`
    width: fit-content;
    padding: 10px;
    border: 4px solid #e98074;
    margin: 10px;
    background-color: #efe7db;
    color: #e85a4f;
    font-weight: 600;
    font-size: 1.3em;
    :hover{
        background-color: #d8c3a5;
    }
`;
export const InputLabel= styled.label`
    display: inline-block;
    width: 100px;
    margin-left: 10px;
    margin-right: 10px;
    text-align: end;
    font-weight: 600;
    font-size: 1.3em;
`;
export const FormSection = styled.div`
    width: 90%;
    margin-left: 5%;
    margin-top: 7.5%;
    margin-bottom: 20px;
    padding: 10px 20px 10px 20px;
    border-left: 3px solid #E98074;
    background-color: #ebe1d2;
    padding: 50px;
    display: flex;
    justify-content: center;
    form{
      width: fit-content;
    }
`;
export const InputContainer = styled.div`
    display: flex;
    align-items: center;
    color: #e85a4f;
    padding: 10px 10px 10px 0px;
    margin-bottom: 5px;
    border-left: 1px solid #E98074;
    background-color: #efe7db;
    
    label {
        padding: 5px;
    }
`;
export const InputBox = styled.input`
    width: 55%;
    background-color: #eae7dc;
    border: 2px solid #e98074;
    border-radius: 10px;
    padding: 5px;
    outline: none;
    :focus{
      background-color: #ebe1d2;
      border: 3px solid #e85a4f;
    }
    transition: all ease .1s;
`;
export const InputButtonContainer = styled.div`
  width: 100%;
  color: #e85a4f;
  padding: 10px 10px 10px 10px;
  margin-bottom: 5px;
  display: flex;
  justify-content: center;
  //background-color: #efe7db;
  a{
    color: inherit;
    padding-left: 5px;
    :hover{
        color: red;
    }
  }
`;
export const InputOption = styled.option`
    
    background-color: #eae7dc;
    border: 2px solid #e98074;
    border-radius: 10px;
    padding: 5px;
    outline: none;
    :focus{
      background-color: #ebe1d2;
      border: 3px solid #e85a4f;
    }
    transition: all ease .1s;
`;

export const SelectBox = styled.select`
    
    background-color: #eae7dc;
    border: 2px solid #e98074;
    border-radius: 10px;
    padding: 5px;
    outline: none;
    :focus{
      background-color: #ebe1d2;
      border: 3px solid #e85a4f;
    }
    transition: all ease .1s;
`;
