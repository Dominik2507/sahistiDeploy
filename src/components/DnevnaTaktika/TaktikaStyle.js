import styled from "styled-components";

export const ChessboardContainer = styled.div`
    display: flex;
    justify-content: center;
    margin: 10px;
    position: relative;
`;

export const ButtonContainer = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    position: absolute;
    left: 71%;
    top: 10%;
    
`;

export const ButtonContainer2 = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    position: absolute;
    left: 10%;
    top: 35%;
    
`;
export const ButtonContainer3 = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    position: absolute;
    left: 71%;
    top: 0%;
    
`;
export const Timer = styled.div`
  width: 100%;
  color: #e85a4f;
  margin: 5px;
  font-size: 1.7em;
  text-align: center;
`;
export const PiecesContainer = styled.ul`

  list-style-type: none;
  display: grid;
  grid-template-columns: auto auto;
  gap: 5px;
`;
export const PieceDiv = styled.li`
  list-style-type: none;
  width: 66px;
  border: 2px solid #8E8D8A;
  height: 66px;
  button{
    background: none;
	color: inherit;
	border: none;
	padding: 0;
	font: inherit;
	cursor: pointer;
	outline: inherit;
  }
  :hover{
    cursor: pointer;
  }

`;
export const EditBoardButton = styled.button`
  width: fit-content;
  border: 4px solid #e98074;
  height: 50px;
  margin: 8px;
  padding: 5px;
  background-color: #efe7db;
  color: #e85a4f;
  font-weight: 600;
  font-size: 1em;
  :hover{background-color: #d8c3a5; cursor: pointer;}

`;

export const ShowFormButton = styled.button`
  width: fit-content;
  border: 4px solid #e98074;
  height: 50px;
  margin: 8px;
  padding: 5px;
  background-color: #efe7db;
  color: #e85a4f;
  font-weight: 600;
  font-size: 1em;
  :hover{background-color: #d8c3a5; cursor: pointer;}
  :disabled{background-color: #d8c3a5;
    cursor: not-allowed;
  }

`;

export const ResultText = styled.div`
  width: 80%;
  border-left: 3px solid #E98074;
  background-color: #ebe1d2;
  ${props =>  props.highlight ? `text-align: center; font-size: 1.3em;` : ""}
  padding: 10px 20px 20px 20px;
`;
