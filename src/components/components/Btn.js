import React from "react"

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';

const Btn =({value})=>{
    return (
        <Box>
          <Button>FIRSTPAGE</Button> 
          <Button>PREVPAGE</Button> 
           <Button> {value} </Button>
          <Button>NEXTPAGE</Button>
          <Button>LASTPAGE</Button>   
        </Box>
        
    )
}

export default Btn;