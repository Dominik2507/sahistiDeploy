//editing functions
export const setSquare=(sq, setActiveSquare, square)=>{
    if(sq===square) {
        document.getElementById("sparePieces").hidden=true;
        setActiveSquare(undefined)
        return
    }
    document.getElementById("sparePieces").hidden=false;
    setActiveSquare(sq)
  }


//playing fuinctions
