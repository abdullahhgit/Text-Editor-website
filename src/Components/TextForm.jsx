import React, {useState} from 'react'

function TextForm(props) {
    const [text,setText] = useState("");

    const toUpper = () => {
        setText(text.toUpperCase());
        props.showAlert("Text is converted to Uppercase", "success");
    }

    const toLower = () => {
        setText(text.toLowerCase());
        props.showAlert("Text is converted to Lowercase", "success");
    }

    const textChange = (event) => {
        setText(event.target.value);
    }

    const toReverse = () => {
        setText(text.split("").reverse().join(""));
        props.showAlert("Text is Reversed", "success");
    }

    const toClear = () => {
        let newText = "";
        setText(newText);
        props.showAlert("Text is cleared", "success");
    }

    const toCopy = () => {
        var text = document.getElementById("text-area");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Text is copied to clipboard", "success");
    }

  return (
    <>
    <div className="continer">
        <div className={`my-3 text-${props.mode === 'dark' ? 'white' : 'dark'}`}>
            <h1>{props.heading}</h1>
        </div>
        <div className="mb-3">
            <textarea className={`form-control bg-${props.mode === 'dark' ? 'secondary' : 'light'} text-${props.mode === 'dark' ? 'light' : 'secondary'}`} id="text-area" rows="7" value={text} onChange={textChange}></textarea>
        </div>
        <button className="btn btn-primary mx-2 my-2" onClick={toUpper}>Convert to uppercase</button>
        <button className="btn btn-warning mx-2 my-2" onClick={toLower}>Convert to lowercase</button>
        <button className="btn btn-success mx-2 my-2" onClick={toReverse}>Convert to reverse</button>
        <button className="btn btn-danger mx-2 my-2" onClick={toClear}>Clear Text</button>
        <button className="btn btn-danger mx-2 my-2" onClick={toCopy}>Copy Text</button>
    </div>
    <div className={`container my-3 text-${props.mode === 'dark' ? 'white' : 'dark'}`}>
        <h2>Text Summary</h2>
        <p>{text.split(" ").length} words {text.length} letters</p>
        <p>Time to read text is about = {0.01 * text.split(" ").length} minutes</p>
        <h2>Text Preview</h2>
        <p>{text ? text : "Type some text to preview it here."}</p>
    </div>
    </>
  )
}

export default TextForm
