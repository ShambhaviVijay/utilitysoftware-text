
import React, { useState } from 'react'  //importing react and useState


export default function Formcontrol(props) {   //props keyword is an imp argument to use props..

        const handelClear = () => {
                let newText3 = " ";
                setText(newText3);
        }
        const handleUpClick = () => {
                console.log("Uppercase was clicked" + text);
                let newText = text.toUpperCase();
                setText(newText)
        }

        const handelOnchange = (event) => {
                console.log("changed");
                setText(event.target.value);

        }
        const handelLowerclick = () => {
                let newText2 = text.toLowerCase();
                setText(newText2);
                props.showAlert("converted to lowercase");   // alert passing to formcontrol objects
        }

        const [text, setText] = useState();

        return (
                <>
                        <div >
                                <div className="container" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>

                                        <h3>enter your text here..</h3>
                                        <textarea className='form-Control' value={text} style={{ backgroundColor: props.mode === 'dark' ? 'black' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }} onChange={handelOnchange} id='myBox' cols="100" rows="10"></textarea>

                                </div>
                                <button className="btn btn-primary mx-2 " onClick={handleUpClick}>UPPER CASE</button>
                                <button className="btn btn-primary mx-2" onClick={handelLowerclick}>LOWER CASE</button>
                                <button className="btn btn-primary mx-2" onClick={handelClear}>CLEAR-TEXT</button>

                        </div>
                        <div className="container my-3" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                                <h4>Preview..</h4>
                                <p>{text}</p>



                        </div>
                </>
        )
}
