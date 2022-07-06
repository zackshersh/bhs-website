import React from 'react';

function FormGroup({children, title}) {
    return (
        <div className='Form-Group'>
            { title ? <h5>{title}</h5> : null}
            {children}
        </div>
    );
}

export default FormGroup;