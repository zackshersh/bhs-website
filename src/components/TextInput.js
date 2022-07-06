import React from 'react';

function TextInput({title, state, setter, required, small}) {

    const handler = (e) => {
        setter(e.target.value);
    }

    const style = {
        width: small ? "50%" : "100%"
    }

    return (
        <div style={style} className='Text-Input'>
            <p>{title}{required ? <span> *</span>:""}</p>
            <input value={state} onChange={handler}></input>
        </div>
    );
}

export default TextInput;