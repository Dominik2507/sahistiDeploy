import { useState, useEffect } from 'react';
import {Chessboard} from 'react-chessboard'

import Puzzles from "../../assets/data/puzzles.json"
import { ButtonContainer, ButtonContainer2, ChessboardContainer, ResultText, ShowFormButton, Timer } from './TaktikaStyle';
import GreskaForm from "./Forms/GreskaForm.js"
import OcjenaForm from './Forms/OcjenaForm';
import { dodajOdgovor, getOdgovorClana, getTodayTaktika } from '../../utils/FetchFunction';
import styled from 'styled-components';



const RijesiTaktiku=({user})=> {
  const [position, setPosition] = useState({})
  const [puzzle, setPuzzle] = useState({});
  const [moveNumber,setMoveNumber]=useState(0);
  const [timer, setTimer] = useState(0);
  const [active, setActive] = useState(false);
  const [show, setVisible] = useState("");
  const [solved, setSolved] = useState(false)
  const [bodovi, setBodovi] = useState(0);
  const [solution, setSolution]=useState([])
  const [ocjenjeno, setOcjenjeno]= useState(false)

  let boardOrientation=puzzle?.perspective || "white"

  let memberSolutionArray=[];

  useEffect(()=>{
    
    getTodayTaktika().then((result)=>{
     
      if(result===null || result===undefined){
        setPuzzle(null)
        return;
      }
      //console.log(result)
      setPuzzle(result)
      
      let puzzleTemp=JSON.parse(result.ispravnoRjesenje)
      console.log("puzzle", puzzleTemp)
      setPosition(puzzleTemp.position)
      setSolution(puzzleTemp.solution)
      
    })

    if(user.userId==null) return;
    getOdgovorClana().then((result)=>{
      if(result.clan!==null){
        setSolved(true);
        setBodovi(result.bodovi)
      }
    })
  }, [])

  useEffect(() => {
    if(active) setTimeout(()=>{if(active) setTimer(timer+1)}, 1000)
  }, [timer, active])
    


  let movePiece= (source, target, piece)=>{
    
    if((solution[moveNumber].from+solution[moveNumber].piece+solution[moveNumber].to===source+piece+target)) {
      let newPosition= {...position};
      newPosition[source]="";
      newPosition[target]=piece;
      console.log(newPosition)
      memberSolutionArray.push({"piece": piece, "from": source, "to": target})
      setPosition(newPosition)
      
      console.log("move " + piece +" from: " + source + ' to: ' + target);
      if(moveNumber===(solution.length-1)) {
        setActive(false)
        ocijeni(true)
        if(!solved) {
          setSolved(true);
        }
        return;
      }

      
      newPosition[solution[moveNumber+1].from]="";
      newPosition[solution[moveNumber+1].to]=solution[moveNumber+1].piece;
      memberSolutionArray.push({"piece": solution[moveNumber+1].piece, "from": solution[moveNumber+1].from, "to": solution[moveNumber+1].to})
      //console.log(newPosition)
      setPosition(newPosition)
      //console.log("move " + solution[moveNumber+1].piece +" from: " + solution[moveNumber+1].from + ' to: ' + solution[moveNumber+1].to);
      setMoveNumber(moveNumber+2);
      
      return true;
    }


    //console.log("move " + piece +" from: " + source + ' to: ' + target);
    //console.log("exprected: ", solution[moveNumber].from+solution[moveNumber].piece+solution[moveNumber].to)
   
    setActive(false);
    ocijeni(false)
    if(!solved) {
      setSolved(true);
    }
    
    return false;
  }

    function pokreniPuzzle(){
      let chessboard= document.getElementById("chessboard");
      let chessboardCover=  document.getElementById("boardCover");
      chessboard.style.visibility="visible";
      chessboardCover.style.display="none";
      setActive(true);
    }
    function replay(){
      console.log("replay", puzzle)
      setPosition(JSON.parse(puzzle.ispravnoRjesenje).position); 
      setMoveNumber(0); 
      setTimer(0); 
      pokreniPuzzle()
      
    }

    function ocijeni(correctSolution){
      let chessboard= document.getElementById("chessboard");
      let chessboardCover=  document.getElementById("boardCover");

      let bodovi= 10 * (puzzle.tezina);
      if(correctSolution) bodovi /= Math.floor((timer/(10*puzzle.tezina)) +1);
      else {bodovi = - 50 / puzzle.tezina}
      if(!solved) setBodovi(bodovi);
      chessboard.style.visibility="hidden";

      chessboardCover.style.display="flex";
      
      //submitResults();
      if(!solved && user.userId!==null){ 
        let obj={
          "bodovi": bodovi,
          "ocjena": 0,
          "rjesenje": JSON.stringify(memberSolutionArray) 
        }

        dodajOdgovor(obj);
      }

      
      
      for(let child of chessboardCover.children){
        
       
        if(child.className.split(" ").includes("text")){ 
          let text= correctSolution ? `Čestitamo uspješno ste riješili dnevnu taktiku`: `Krivo ste riješili zadatak`;
          text += solved ? ". Naknadno riješavanje ne donosi bodove." : "";
          child.innerHTML= text;
        }
        if(child.className.split(" ").includes("after")) child.hidden=false;
        else{
          child.hidden=true;
        }
      }
    }
  
  return (
    puzzle===null || Object.keys(position).length==0 ? <NemaDnevne> Danas nema dnevne taktike</NemaDnevne> : 
    <>
        <Timer>
            {puzzle?.opis}
        </Timer>
        <Timer>
            {Math.floor(timer/60,0) < 10 ? "0" + Math.floor(timer/60,0):Math.floor(timer/60,0)}
            :
            {timer%60 < 10 ? "0" + timer%60 : timer%60}
        </Timer>

      <ChessboardContainer >
      
       <div id='chessboard'>
            

            <Chessboard 
                position={position} 
                boardOrientation={boardOrientation} 
                
                isDraggablePiece={Object.keys(position).length==0 ? false :  ({piece, square})=>{
                  
                  return piece.indexOf(boardOrientation?.charAt(0))==0;
                  }}
                onPieceDrop={(source, target, piece)=> movePiece(source, target, piece)}
            />
            
            <div id='boardCover'>
                <ShowFormButton className='before' onClick={()=>pokreniPuzzle()}>Pokreni rješavanje</ShowFormButton>       
                <ResultText className='after text' hidden={true} highlight={true}> </ResultText>
                <ResultText className='after' hidden={true} >Vrijeme rješavanja: {timer} sec</ResultText> 
                <ResultText className='after' hidden={true} >Težina zadatka: {puzzle.tezina} / 5 {puzzle.avgOcjena > 0  && "(tezina prema clanovima: " + puzzle.avgOcjena + "/5)"}</ResultText> 
                <ResultText className='after' hidden={true} >Bodovi: {bodovi}</ResultText> 
                <ShowFormButton 
                  className='after' 
                  hidden={true} 
                  onClick={replay}>
                      Ponovi Zadatak
                </ShowFormButton>      
                
            </div>
        </div>
        
        <ButtonContainer>
            <div hidden={user.role===null}>
                <ShowFormButton hidden={!solved} onClick={()=>{setVisible("greska"); setActive(false)}}>Prijavi grešku!</ShowFormButton>
                <ShowFormButton hidden={!solved} onClick={()=>{setVisible("ocjena"); setActive(false)}}>Ocijeni taktiku!</ShowFormButton>
                <GreskaForm hide={show!=="greska"} setShow={setVisible}></GreskaForm>
                <OcjenaForm hide={show!=="ocjena" && !ocjenjeno} setOcjenjeno={setOcjenjeno} setShow={setVisible}></OcjenaForm>
                <div id='resultText'></div>
            </div>
        </ButtonContainer>


      </ChessboardContainer>
      
      
    </>
  );
}

export default RijesiTaktiku;


const NemaDnevne=styled.div`
  color: #e85a4f;
  text-align: center;
  font-size: 2rem;
  padding: 100px;
`