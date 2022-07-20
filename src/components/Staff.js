import React from 'react';

import staff from "../staff.json"
import StaffCard from './StaffCard';

const staffCards = staff.map((provider,i) => <StaffCard key={i} id={i} provider={provider} />)

function Staff(props) {
    return (
        <div className='Staff'>
            <span className='Scroll-Target Staff-Scroll'></span>
            <h2>Staff</h2>
            <div className="Staff-Card-Cont">
                {staffCards}
            </div>
        </div>
    );
}

export default Staff;