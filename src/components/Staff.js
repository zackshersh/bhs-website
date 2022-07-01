import React from 'react';

import staff from "../staff.json"
import StaffCard from './StaffCard';

const staffCards = staff.map((provider,i) => <StaffCard key={i} provider={provider} />)

function Staff(props) {
    return (
        <div className='Staff'>
            <h2>Staff</h2>
            <div className="Staff-Card-Cont">
                {staffCards}
            </div>
        </div>
    );
}

export default Staff;