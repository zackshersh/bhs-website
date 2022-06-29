import React from 'react';

function Block({children, title, background, pos_relative}) {

    const classString = `Block${title ? " Title-Block" : ""} ${background}-Block`
    let posRelative = {}
    if(pos_relative){
        posRelative.position = "relative"
    }


    return (
        <div style={posRelative} className={classString}>
            <div className='Width-Container'>
                {children}
            </div>
        </div>
    );
}

export default Block;