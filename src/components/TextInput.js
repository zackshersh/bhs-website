import React from 'react';

function TextInput({title, state, setter, required, small, type}) {

    const handler = (e) => {
        setter(e.target.value);
    }

    const style = {
        width: small ? "50%" : "100%"
    }

    return (
        <div style={style} className='Text-Input'>
            <p>{title}{required ? <span> *</span>:""}</p>
            <input type={type ? type : null} value={state} onChange={handler}></input>
        </div>
    );
}

export default TextInput;