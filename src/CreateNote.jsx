import React,{useState} from "react";
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
const CreateNote=(props)=>{
    
   

    const [note,setnote] = useState({
        title:"",
        content:"",
    });

    const InputEvent=(event)=>{
        const {name,value}=event.target;
        setnote((prevData)=>{
            return{ 
                ...prevData,
                [name]:value,
            };
        });
    
    }
    const addEvent=()=>{
           props.passNote(note);
           setnote({
            title:"",
            content:""
           });
    };


    const[expand,setExpand]=useState(false);

    const expandIt=()=>{
        setExpand(true);
    }
     const Shrink=()=>{
         setExpand(false);
     }

return(<>
    <div className="main_note">
    <form>
    {
        expand?
    
        <input type="text"  name="title" value={note.title} onChange={InputEvent} placeholder="Title" autoComplete="off"/>
    :null   
    }
        <textarea onClick={expandIt} onDoubleClick={Shrink} rows="" column="" name="content" value={note.content} onChange={InputEvent} placeholder="Write a note..."/>
       {
           expand?
           <Button onClick={addEvent}>
            <AddIcon className="plus_sign"/>
        </Button>:null
       }
    </form>

    </div>
</>);
}
export default CreateNote;