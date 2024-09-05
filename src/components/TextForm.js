import React, {useState} from 'react'

export default function TextForm(props) {
  const[text, setText] = useState('');
  const handleUpClick = ()=>{
    //console.log("UpperCase was Clicked" + text);
    let newtext = text.toUpperCase();
    setText(newtext)
 }
 const handleLoClick = ()=>{
  //console.log("UpperCase was Clicked" + text);
  let newtext = text.toLowerCase();
  setText(newtext)
}
  const handleOnChange = (event)=>{
    //console.log("On Change");
    setText(event.target.value)
  }
  const handleClearClick = ()=>{
    let newtext = '';
    setText(newtext)  
  }
  return (
    <>
    <div className="container">
      <h1>{props.heading}</h1>
      <div className="mb-3">
      <textarea className="form-control" value = {text} onChange = {handleOnChange}  id="mybox" rows="8"></textarea>
    </div>
    <button className="btn btn btn-primary"  onClick={handleUpClick} > Convert to Uppercase </button>
    <button className="btn btn btn-primary mx-3"  onClick={handleLoClick} > Convert to Lowercase </button>
    <button className="btn btn btn-primary" onClick={handleClearClick}> Clear Text </button>
    </div> 
    <div className="container my-4">
       <h3>Your Text Summary</h3>
       <p>{text.split(" ").length} words and {text.length} characters</p>
       <p>{0.008 * text.split(" ").length} Minutes read</p>
       <h4>Preview</h4>
       <p>{text}</p>
    </div>
    </>
  )
}
