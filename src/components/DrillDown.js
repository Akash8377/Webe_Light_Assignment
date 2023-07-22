import React, {useState } from 'react'
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
export default function DrillDown(props) {
    const [select,setSelect]=useState('')
     
    const handleSelect=(e)=>{
      console.log(`id ${e.target.id}`);
        setSelect(e.target.id);
    }
   
    

  return (
    <div>
         <Select >
                <MenuItem className="menu" id='Commits'
                 onClick={()=>{handleSelect()}} value={select}>Commits</MenuItem>
                <MenuItem className="menu" id='Addition' 
                onClick={handleSelect} value={select}>Additions</MenuItem>
                <MenuItem className="menu" id='Deletion' 
                onClick={handleSelect} value={select}>Deletions</MenuItem>
         </Select>
        

         
    </div>
  )
}
