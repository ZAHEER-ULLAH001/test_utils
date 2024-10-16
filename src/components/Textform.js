import React, { useState } from 'react'


// const [text, setText] = useState('Enter the text here');
export default function Textform(props) {
  
  
  
  const handleUpClick = () =>{
    console.log("UpperCase was Click " + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to UpperCase","success");

  }



  const handleloclearClick= () =>{
    console.log(" Clear text was Click " + text);
    let newText = "";
    setText(newText);
    props.showAlert("text has been clear","success");

  }



  const handleUpClickON = (event) =>{
    console.log("LowerCase was Click " + text);
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lowerCase","success");

  
  }

  



  
  const handleOnChange = (event) =>{
    console.log("On Change")
    setText(event.target.value)
  }




  
  const handleCopy = () =>{
    console.log("I am Copyed");
    let text = document.getElementById("my-text");
text.select();
  navigator.clipboard.writeText(text.value);
  props.showAlert("Your text has been copyed","success");

  }
  



  

  const [text, setText] = useState('');
 //text = "new text"     //worng way to change the state
 //setText = ("new text")     //Correct way to change the state

 
 return (
   
   <>
   <div className="container" style={{color: props.mode==='dark'?'grey':'white'}}>
        <h1 style={{color: 'blue'}}>{props.heading}</h1>
<div className="mb-3">
  <textarea className="form-control" value={text} onChange = {handleOnChange} style={{backgroundColor: props.mode==='dark'?'grey':'white',
   color : props.mode==='dark'?'white':'dark'}}   id="my-text" rows="8"></textarea>


</div>

<button className="btn btn-outline-success mx-3" onClick = { handleUpClick } >Convert to UpperCase</button>
<button className="btn btn-outline-danger mx-3" onClick = { handleUpClickON } >Convert to LowerCase</button>
<button className="btn btn-outline-warning mx-3" onClick = { handleCopy} >Copy Text</button>
<button className="btn btn-outline-primary mx-3" onClick = { handleloclearClick } >Clear Text</button>

    </div>
    <div className="container my-2" style={{color : props.mode==='white'?'dark':'white'}}>
    
      <h1 style={{color: 'blue'}}>Your Text Summary</h1>
     
      <p style={{color: 'blue'}}>{text.split(" ").length} word and {text.length} character</p> 
     
       {/*
      <p style={{color: 'blue'}}>{text===""? 0 : wordCount(text)} words and {text.length} characters</p> correct the of zero word = 1 space
      */}
      <p style={{color: 'blue'}}>{0.008 * text.split(" ").length}Time to read text.</p> 
    

    <h2 style={{color: 'blue'}}>Preview</h2>
    <p style={{color: 'blue'}}>{text.length>0?text:"Enter the text in the text box above  to preview it here :- "}</p>
    
    </div>
</>  
)
}












// handelonchange
// handleOnChange