import React, { useEffect, useState } from "react";
import Column from "./Column";
import axios from "axios";
import * as ReactDOM from 'react-dom';
import { display } from "@mui/system";
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import Btn from "./Btn";
import { selectClasses } from "@mui/material";
import Searchbar from "./Searchbar";
import { ClassNames } from "@emotion/react";
import "./Ui.css"


const Ui =()=>{

const [UIdata,setdata]= useState([])
const [displaydata,setdisplaydata]=useState({})
const [Buton,setbuton] = useState([])
const [number,setnumber] = useState(0)
const [currentdata,setcurrentdata]=useState([])
const [currentno,setcurrentno]=useState("1")
// const [searchdata,setsearchdata]=useState([])


useEffect(()=>{
    loaddata()
    
    
    },[])
    
    
useEffect(()=>{
    
    display()
    // pagedata(1)
    },[UIdata])

 useEffect(()=>{
 changecurrentdata()
 },[displaydata])   


const loaddata = async()=>{
  try {
      const res = await axios.get("https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json")
      console.log(res)
      res.data.forEach(x=>x.checked=false)
      res.data.forEach(x=>x.edit=false)
      setnumber(Math.ceil((res.data.length)/10))
      setdata(res.data)
    //   setsearchdata(res.data)
      
  } catch (err) {
      console.log(err)
  }
}

const changecurrentdata = ()=>{
    // if(currentno=="1"){
    //    pagedata(1)
    // }
    pagedata(currentno)
    
    // if(currentno==="1" && displaydata[1]){
    //     setcurrentdata(displaydata[1])
    //     console.log("yes")
    // }else{
    //     console.log("no")
    // }
}

const deleteall=()=>{
    let arr = [...UIdata]
   const newarr =  arr.filter((x)=>x.checked===false)
   console.log(newarr)
   setnumber(Math.ceil(newarr.length/10))
   
   setdata(newarr)
//    setsearchdata(newarr)
   

}
const singledelete = (x) =>{
    let arr = [...UIdata]
    const newarr =  arr.filter((y)=>x!==y.id)
    console.log(newarr)
    setnumber(Math.ceil(newarr.length/10))
    
    setdata(newarr)
    // setsearchdata(newarr)
}

// const collectall=(e)=>{
//   const arr = [...id]
//   arr.push(e)
//   setid(arr)
// }

const selectall =(bool)=>{
//  let newid = [...id]
//  let chosenarr=[]
 let newarr = [...UIdata]
 newarr.forEach((x)=>{
     if(currentdata.includes(x)){
         if(!bool){
            x.checked=true
         }else{
            x.checked=false
         }
     }
 })
 setdata(newarr)
//  setsearchdata(newarr)
//  currentdata.forEach((x)=>chosenarr.push(x.id))
//  newid=newid.concat(chosenarr)
//  console.log(newid)
//  setid(newid)
}

const pagedata=(e)=>{
    console.log("jhgh")
    console.log(e)
    if(Object.keys(displaydata).length>0){
    setcurrentdata(displaydata[e])
}
    setcurrentno(e)
}

const cheackedbar = (e)=>{
    let arr = [...UIdata]
    arr.forEach((x)=>{
      if(x.id===e){
        x.checked=!x.checked
      }
    })
    setdata(arr)
    // setsearchdata(arr)
}

const editable=(e)=>{
let arr = [...UIdata]
arr.forEach(x=>{
    if(x.id===e){
        x.edit=true
    }
})
setdata(arr)
// setsearchdata(arr)
}

const submit=(e)=>{
    let arr = [...UIdata]
    arr.forEach(x=>{
        if(x.id===e){
         x.edit=false
        }
    })
    setdata(arr)
    // setsearchdata(arr)
}

const changename=(value,e)=>{
    let arr = [...UIdata]
    arr.forEach(x=>{
        if(x.id===e){
            x.name=value
        }
    })
    setdata(arr)  
    // setsearchdata(arr)
}
const changeemail=(value,e)=>{
    let arr = [...UIdata]
    arr.forEach(x=>{
        if(x.id===e){
            x.email=value
        }
    })
    setdata(arr) 
    // setsearchdata(arr) 
}
const changerole=(value,e)=>{
    let arr = [...UIdata]
    arr.forEach(x=>{
        if(x.id===e){

            x.role=value
        }
    })
    setdata(arr)  
    // setsearchdata(arr)
}

const search = (e)=>{
// console.log(searchdata)
// console.log(UIdata)
//  setnumber(Math.ceil(searchdata.length/10))
//  setdata(searchdata)
//  if(UIdata===searchdata){
let arr = [...UIdata]

  
console.log("hkh")
let newarr = arr.filter((x) => {
    if((x.name).includes(e)||((x.email).includes(e))||((x.role).includes(e))){
      return x
    }
})
setnumber(Math.ceil((newarr.length)/10))
setdata(newarr)
// setsearchdata(newarr)
//  }
}

const display=()=>{
console.log("s")
    
    let obj = {};
    let num =1
    let j=0
    // if(displaydata.length>0 && Object.keys(UIdata).length===0 ){
    //     setdisplaydata(obj)
    // }
    for(let i=1;i<=number-1;i++){
        
        let arr = []
    for(let i=j;i<j+10;i++){
        arr.push(UIdata[i])
        
    }
    obj[num]=arr
    num++
    j+=10

    
}
let larr = []
for(let i=(number-1)*10;i<UIdata.length;i++){
 larr.push(UIdata[i])
}
let narr = []
for(let i=1;i<=number;i++){
    narr.push(i)
}
setbuton(narr)
obj[num]=larr
if(number>0){
setdisplaydata(obj)
}else{
    setdisplaydata({})
    setcurrentdata([])
}

}




console.log(UIdata)
// console.log(searchdata)
console.log(displaydata)
console.log(currentdata)
console.log(number)
// console.log(id)

return (
        < >
        {UIdata.length?<Searchbar  searchfn={search} />:<></>}
        <Box sx={{minwidth:"100%",padding:"5% 5% 5% 15%"}}>
       {currentdata.length?(<Column cdata={currentdata} fun2={singledelete} fun3={selectall} fun5={cheackedbar} fun4={editable} fun6={changename} fun7={changeemail} fun8={changerole} fun9={submit} cn={currentno} />):<>Sorry!! no data available :(</>}
        </Box>
        <Box className="bottons">
          {UIdata.length?<Button className="deleteselected" onClick={()=>deleteall()} >Delete Selected</Button>:<></>}
          {currentno>1?<Button  onClick={()=>pagedata(1)}>FIRSTPAGE</Button>:<></>} 
          {currentno>1?<Button onClick={()=>pagedata(currentno-1)}>PREVPAGE</Button>:<></>} 
          
           <>{Buton.length? (<>{Buton.map((x)=>(<Button className={currentno==x?"selected":"notselected"} value={x}
           onClick={(e)=>pagedata(e.target.value)} sx={{margin:"0.1rem"}}> {x} </Button>))}</>):<></>}</>
          
          {currentno<number?<Button onClick={()=>pagedata(parseInt(currentno)+1)}>NEXTPAGE</Button>:<></>} 
          {currentno<number?<Button onClick={()=>pagedata(number)}>LASTPAGE</Button>:<></>} 
          
        </Box>
        </>


      )
}

export default Ui