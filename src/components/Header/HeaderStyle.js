import styled from "styled-components";

export const HeaderContainer = styled.div`
  width: 100%;
  min-height: 10vh; 
  background-color: #D8C3A5;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 50px 0 50px;
  a{
    text-decoration: none;
  }
`;
export const Naslov = styled.b`
  font-size: 2.5em;
  min-width: 300px;
  text-align: center;
  text-decoration: none;
  a{
    text-decoration: none;
    color: #E85A4F;
  }
`;
export const NavButton = styled.div`
  font-size: 2em;
  
  color: #E85A4F;
  
  text-aligns: center;
  padding: 5px 10px 5px 10px;
  :hover{
    
    border-bottom: 2px solid #E98074;
  }
`;