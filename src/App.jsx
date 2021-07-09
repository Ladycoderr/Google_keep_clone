import React, { useState } from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Header from "./Header";
import Footer from "./Footer";
import CreateNote from "./CreateNote.jsx";
import Note from "./Note";
import "./index.css"

const App=()=>{
    const [addItem,setItem] = useState([]);


    
   const addNote=(note)=>{
    setItem((prevData)=>{
        return[...prevData,note];
    });
    console.log(note);
    };




  const onDelete=(id)=>{
      setItem((oldData)=>
          oldData.filter((currdata,index)=>{
              return index !==id;
          })
      )

  };

    return(
<>
<Header/>
<Footer/>
<CreateNote passNote={addNote}/>

{
    addItem.map((val,index)=>{
     return <Note
         key={index}
         id={index}
         title={val.title}
         content={val.content}
         deleteItem={onDelete}
     />
    })
}

</>);
}
export default App;