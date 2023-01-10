import { useState, useEffect } from 'react';

import RijesiTaktiku from '../components/DnevnaTaktika/RijesiTaktiku';
import StvoriTaktiku from '../components/DnevnaTaktika/StvoriTaktiku';


const DnevnaTaktika=({user})=> {
  const [editMode, setMode] = useState(false)
  console.log(user)
  return (
    <>
    {(user.role!==null && user.role!=="clan") ? 
    <StvoriTaktiku user={user}></StvoriTaktiku>
    :
    <RijesiTaktiku user={user}></RijesiTaktiku>}
    </>
  );
}

export default DnevnaTaktika;
