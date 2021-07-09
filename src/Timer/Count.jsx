import React, { useState } from "react";
import "./Count.css";
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';


const Count=()=>{
  const[curr,Increase]=useState(0);
  const Increm=()=>{
      Increase(curr+1);
  }
 
  const Decrem=()=>{
      if(curr>0){
    Increase(curr-1);
      }
      else{
           alert("It can not Go Lower Than 0")
      }
  }

 return(<>
    <div className="Card">
   <div  className="Counter"> <h1 className="h1">{curr} </h1></div>
    
    <div className="btn">
    <Tooltip title="Add">
    <Button className="btn1" onClick={Increm}><AddIcon/></Button>
    </Tooltip>
    <Tooltip title="Delete">
    <Button className="btn2" onClick={Decrem}><RemoveIcon/></Button>
    </Tooltip>
    </div>
    
    </div>
    </>
    );
}
export default Count;