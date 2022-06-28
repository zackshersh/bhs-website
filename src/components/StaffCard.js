import React from 'react';


function StaffCard({provider}) {
    return (
        <div className='Staff-Card'>
            <img src={provider.image} />
            <h5>{provider.name}</h5>
            <p>{provider.title}</p>
        </div>
    );
}

export default StaffCard;