import { useState, useEffect } from 'react';
import {Chessboard} from 'react-chessboard'
import {setSquare} from '../../utils/chessFunctions'
import OcjenaForm from './Forms/OcjenaForm';

import { ButtonContainer, ButtonContainer2, ButtonContainer3, ChessboardContainer, EditBoardButton, 
  PieceDiv, PieceDivRemove, PiecesContainer,
  } from './TaktikaStyle';


import wP from "../../assets/img/wP.jpg"
import wQ from "../../assets/img/wQ.jpg"
import wK from "../../assets/img/wK.jpg"
import wR from "../../assets/img/wR.jpg"
import wB from "../../assets/img/wB.jpg"
import wN from "../../assets/img/wN.jpg"
import bP from "../../assets/img/bP.jpg"
import bQ from "../../assets/img/bQ.jpg"
import bK from "../../assets/img/bK.jpg"
import bR from "../../assets/img/bR.jpg"
import bB from "../../assets/img/bB.jpg"
import bN from "../../assets/img/bN.jpg"
import SolutionForm from './Forms/SolutionForm';

const fullBoard={a1: "wR",a2: "wP",a7: "bP",a8: "bR",b1: "wN",b2: "wP",b7: "bP",b8: "bN",
               c1: "wB",c2: "wP",c7: "bP",c8: "bB",d1: "wQ",d2: "wP",d7: "bP",d8: "bQ",
               e1: "wK",e2: "wP",e7: "bP",e8: "bK",f1: "wB",f2: "wP",f7: "bP",f8: "bB",
               g1: "wN",g2: "wP",g7: "bP",g8: "bN",h1: "wR",h2: "wP",h7: "bP",h8: "bR"}
const pieces=["wK", "wQ", "wB", "wN", "wR", "wP","bK", "bQ", "bB", "bN", "bR", "bP"]
const piecesImg=[wK, wQ, wB, wN, wR, wP,bK, bQ, bB, bN, bR, bP]

const StvoriTaktiku=(props)=> {

  const [position, setPosition] = useState(fullBoard);
  const [solution, setSolution] = useState([]);
  const [square, setActiveSquare] = useState(undefined);
  const [boardOrientation, setOrientation] = useState("white");
  const [creationPhase, setPhase]= useState("position");
  const [nextToPlay, setNext]= useState('w');
  const [finalPosition, setFinalPosition]= useState({});

  var form={"tezina": 0,// "description": "", 
        "solution": 
        JSON.stringify(
          {position: finalPosition,
          solution: solution,
          perspective: boardOrientation 
        })}
  

 


  let highlightedSquareStyle={}
  highlightedSquareStyle[square]={border: "5px solid red", boxSizing: "border-box"}

  let piecesList=[];
  for(let piece in pieces){
    piecesList.push(
        <PieceDiv key={piece}><button onClick={()=>{addPiece(pieces[piece])}}>
            <img src={piecesImg[piece]} width="100%"  height="100%"></img>
        </button></PieceDiv>
    )
  }

  let moves=[]
    for(let move in solution){
        let moveObj=solution[move]
        moves.push(<div> {parseInt(move)+1}. {moveObj.piece}: {moveObj.from +  " -> " } {moveObj.to}</div>)
    }





  const addPiece=(piece)=>{
    let newPosition= {...position};
      newPosition[square]=piece
     
      setPosition(newPosition)
    document.getElementById("sparePieces").hidden=true;
    setActiveSquare({})
  }
  
  let movePiece= (source, target, piece, play=false)=>{ 
      if(creationPhase==="solution" && !play){
        if(piece.charAt(0) != nextToPlay) return false;
        setNext(nextToPlay=='w' ? 'b' : 'w');
        let array=solution;
        array.push({"piece": piece, "from": source, "to":target })
        setSolution(array);
      }

      let newPosition= {...position};
      newPosition[source]="";
      newPosition[target]=piece;
      
      setPosition(newPosition)
  
      return true;
  }

  let savePosition= ()=>{ 
    let pos={};
    for(let key in position){
      if(position[key]!=="") pos[key]=position[key]
    }
    setFinalPosition(pos);
    document.getElementById("sparePieces").hidden=true;
    setActiveSquare({})
    setNext(boardOrientation.charAt(0));
    setPhase("solution");
  }

  let saveSolution= ()=>{ 
    if(solution.length===0){
      alert("Ne možete postaviti prazno rješenje!");
      return;
    }
    if(solution.length%2==0){
      let temp=[...solution]
      temp.pop()
      setSolution(temp);
    }
    setPhase("details");
  }


  function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  
  async function playSolution1() {
    let newPosition={...finalPosition}
    setPosition(newPosition);
    
    //let move=solution[0]
   // movePiece(move.from,move.to,move.piece)

    for(let move of solution){
      await sleep(5000).then(()=>{movePiece(move.from,move.to,move.piece);});
      console.log(move)
    }   
  }
  
  
  let playSolution= (move=-1)=>{ 
    if(move===-1) setPosition(finalPosition);
    else movePiece(solution[move].from,solution[move].to,solution[move].piece, true);

    setTimeout(()=> {
      
      if(move<solution.length-1) playSolution(move+1)
    }, 1000) 
  }

  return (
  
    <>
      <ChessboardContainer>
        <div>
            <div style={{width:"100%", textAlign:"center", paddingBottom: "10px"}} hidden={creationPhase!=="position"}>
              Desnim klikom označite polje na koje želite dodati/obrisati figuru.
            </div>
            <Chessboard
                position={position}
                boardOrientation={boardOrientation}
                onPieceDrop={(source, target, piece)=> movePiece(source, target, piece)}
                onSquareRightClick={(sq) => {if(creationPhase==="position")setSquare(sq, setActiveSquare, square)}}
                customSquareStyles={highlightedSquareStyle}
            />
            
            
        </div>
        <div hidden={creationPhase!=="position"}>
          <ButtonContainer2 >
              <EditBoardButton onClick={()=>setOrientation(boardOrientation==="white"? "black":"white")}>Okreni ploču</EditBoardButton>
              <EditBoardButton onClick={()=>setPosition({})}>Makni sve figure</EditBoardButton>
              <EditBoardButton onClick={()=>setPosition(fullBoard)}>Početna pozicija</EditBoardButton>
              <EditBoardButton onClick={savePosition}>Spremi poziciju</EditBoardButton>
          </ButtonContainer2>
        </div>
        <div hidden={creationPhase!=="solution"}>
          <ButtonContainer2>
              <EditBoardButton onClick={()=>{setSolution([]);console.log(finalPosition); setPosition(finalPosition); setPhase("position")}}>Vrati se na uređivanje ploče</EditBoardButton>
              <EditBoardButton onClick={saveSolution}>Spremi rješenje</EditBoardButton>
          </ButtonContainer2>
        </div>
        <div hidden={creationPhase!=="details"}>
          <ButtonContainer2>
              {true ? "" : <EditBoardButton onClick={()=>playSolution()}>Play</EditBoardButton>}
              <EditBoardButton onClick={()=>{setSolution([]);console.log(finalPosition); setPosition(finalPosition); setPhase("position")}}>Vrati se na uređivanje ploče</EditBoardButton>
              <EditBoardButton onClick={()=>{setSolution([]);console.log(finalPosition); setPosition(finalPosition);setNext(boardOrientation.charAt(0)); setPhase("solution")}}>Postavi drugo rješenje</EditBoardButton>
          </ButtonContainer2>
        </div>

        <ButtonContainer>
            {creationPhase==="details" ? <SolutionForm form={form}></SolutionForm> : <></>}
                
            
        </ButtonContainer>
       

        <ButtonContainer3>
            <div hidden={true} id='sparePieces' >
                <div style={{paddingBottom: "5px"}}>Dodaj figuru:</div>
                <PiecesContainer >
                    {piecesList}
                </PiecesContainer>
                <EditBoardButton onClick={()=>{addPiece("")}}> Makni figuru </EditBoardButton>
            </div>
            
            <div hidden={creationPhase!=="solution"}>
              <h3> Rješenje</h3>
              <div> {moves}</div>
            </div>
            
        </ButtonContainer3>
        
        
      </ChessboardContainer>
      
    </>
  );
}

export default StvoriTaktiku;
