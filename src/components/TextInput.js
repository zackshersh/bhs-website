import React, { useEffect, useState } from 'react';

function TextInput({title, state, setter, required, small, type, textArea, validating, condition}) {

    const handler = (e) => {
        setter(e.target.value);
    }

    const [valid, setValid] = useState(true);


    function checkValidity(){

        if(state == "" && required && validating){
            console.log(`${title} is unfilled`)
            setValid(false);
        } else {
            setValid(true);
        }
    }


    useEffect(() => {
        checkValidity()
    })

    const style = {
        width: small ? "50%" : "100%",
    }

    const inputStyle = {
        outline: valid ? "none" : "2px solid red"
    }

    const placeholderText = valid ? "" : "This field is required"

    return (
        <div style={style} className='Text-Input'>
            <p>{title}{required ? <span> *</span>:""}</p>
            {textArea ? 
                <textarea placeholder={placeholderText} style={inputStyle} type={type ? type : null} value={state} onChange={handler}></textarea> :
                <input placeholder={placeholderText} style={inputStyle} type={type ? type : null} value={state} onChange={handler}></input>

            }
        </div>
    );
}

export default TextInput;