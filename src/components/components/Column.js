import React, { useEffect, useState } from "react";
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';

import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';






const Column =({cdata,fun2,fun3,fun5,fun4,fun6,fun7,fun8,fun9})=>{
    const [check,setcheck]=useState(false)
    // const [edit,setedit] = useState(true)
    // const [cdnames,setcnames]=useState([])
    const changecheck = ()=>{
        if(check===true){
            console.log("buyaa")
            setcheck(!check)
              } 
    }
//     const createcnames=()=>{ 
//     console.log(cdata)
//     const cnames = cdata.map((x) => {
//         return x.name
//     });
//     setcnames(cnames)

//     console.log(cnames)
// }
    useEffect(()=>{
       changecheck()
    },[cdata])
    // useEffect(()=>{
    //  createcnames()
    // },[cdata])

    // useEffect(()=>{
    //   fun3(check)
    // },[check])
    


    return (

          <Box>
          <Stack  spacing={2} direction="row">
           <Checkbox checked={check} onChange={(e)=>{setcheck(e.target.checked)
               
                   fun3(check)
                      
                   
           }} ></Checkbox>
           <TextField
           
           value="Name"
           variant="standard"
           />
           <TextField
           variant="standard"
           value="Email"/>
           <TextField
           variant="standard"
           value="Role"/>
           <TextField
           variant="standard"
           value="Actions"/>

          </Stack>
          {cdata?(<>{cdata.map((x)=>(
              <Stack spacing={2} direction="row" key={x.id}>
              <Checkbox
              
              value={x.id}
              checked={x.checked}
              onChange={(e)=>fun5(e.target.value)}

              inputProps={{ 'aria-label': 'controlled' }}

              />
              <TextField
              
              
              
              name={x.id}
              disabled={!x.edit}
              variant="standard"
              value={x.name}
              onChange={(e)=>fun6(e.target.value,e.target.name)}    
              />
              <TextField
              name={x.id}
              disabled={!x.edit}
              variant="standard"
              value={x.email}
              onChange={(e)=>fun7(e.target.value,e.target.name)}        
              />
              <TextField
              name={x.id}
              disabled={!x.edit}
              variant="standard"
              value={x.role}
              onChange={(e)=>fun8(e.target.value,e.target.name)}        
              />

              
              <Stack direction="row">
               <Button value={x.id} onClick={(e)=>fun4(e.target.value)}>Edit</Button>
               <Button value={x.id} onClick={(e)=>fun2(e.target.value)} >Delete</Button>
               <Button value={x.id} onClick={(e)=>fun9(e.target.value)}>Submit</Button>
              </Stack>
                
              </Stack>))}</>):<>No Records left</>}
          </Box>
    )
}

export default Column;