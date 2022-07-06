import React from 'react';

function Spacer({height}) {

    const style = {
        height: 0
    }

    switch(height){
        case 0:
            style.height = "0px"
            break;
        case 1:
            style.height = "12px"
            break;
        case 2:
            style.height = "24px"
            break;
        case 3:
            style.height = "48px"
            break;
        
    }

    return (
        <div style={style} className='Spacer'></div>
    );
}

export default Spacer;