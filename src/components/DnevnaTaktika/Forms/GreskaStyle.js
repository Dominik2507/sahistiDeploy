import styled from "styled-components";


export const InputNumber = styled.input`
    
    text-align: center;
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

export const InputButton= styled.input`
    min-width: 70px;
    padding: 5px;
    border: 4px solid #e98074;
    height: 50px;
    margin: 5px;
    background-color: #efe7db;
    color: #e85a4f;
    font-weight: 600;
    font-size: 1em;
    :hover{background-color: #d8c3a5;}
`;
export const InputLabel= styled.label`
    
    height: fit-content;
    margin: 10px;
    font-weight: 600;
    font-size: 1.3em;
    align-self: center;
`;

export const InputContainer = styled.div`
    width: 100%;
    color: #e85a4f;
    padding: 5px;
    border-left: 1px solid #E98074;
    background-color: #efe7db;
    display: flex; 
    justify-content: start;
    align-items: center;
`;
export const InputBox = styled.select`
    width: 55%;
    height: 40px;
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
export const InputBoxOpis = styled.textarea`
    
    background-color: #eae7dc;
    border: 2px solid #e98074;
    border-radius: 10px;
    padding: 5px;
    outline: none;
    :focus{
      background-color: #ebe1d2;
      border: 3px solid #e85a4f;
    }
    
`;
export const InputButtonContainer = styled.div`
  width: 100%;
  color: #e85a4f;
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

