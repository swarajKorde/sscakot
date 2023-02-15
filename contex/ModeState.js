import React,{useState} from "react";  
import ModeContext from "./ModeContext";

const ModeState = (props)=>{
    const [Mode, setMode] = useState('light')
    const [btntxt, setbtntxt] = useState('Dark Mode')
    const [user,setuser]=useState({value:null})
  
    const Change_Mode=()=>{
            if (btntxt ==='Dark Mode'){
                setMode("dark")
                setbtntxt('Light Mode')
            }else{
                setMode('light')
                setbtntxt('Dark Mode')
            }
    }
    
    return(
        <ModeContext.Provider value={{Mode,Change_Mode,btntxt,user,setuser}}>
            {props.children}
        </ModeContext.Provider>
    )
}
export default ModeState;