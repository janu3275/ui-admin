import React from "react";
import { TextField } from "@mui/material";

const Searchbar = ({searchfn}) =>{
    return (
        <TextField sx={{width:"40%",marginTop:"5rem"}} size="small" label="Search by name, email or role" onChange={(e)=>searchfn(e.target.value)} variant="outlined" />
    )
}

export default Searchbar;