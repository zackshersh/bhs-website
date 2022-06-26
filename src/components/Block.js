import React from 'react';

function Block({children, title, background}) {

    const classString = `
        Block 
        ${title ? "Title-Block" : ""} 
        ${background}-Block`

    return (
        <div className={classString}>
            <div className='Width-Container'>
                {children}
            </div>
        </div>
    );
}

export default Block;