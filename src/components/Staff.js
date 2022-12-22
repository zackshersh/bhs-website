import React from 'react';

import staff from "../staff.json"
import StaffCard from './StaffCard';

const staffCards = staff.map((provider,i) => {
    if(i <= 2){
        return <StaffCard key={i} id={i} provider={provider} />
    }
})

function Staff(props) {
    return (
        <div className='Staff'>
            <span className='Scroll-Target Staff-Scroll'></span>
            <h2>Staff</h2>
            <div style={{padding:"12px"}}></div>
            <h3 style={{marginBottom:"12px"}}>Clinicials</h3>
            <div className="Staff-Card-Cont">
                {staffCards}
            </div>
            <div style={{padding:"12px"}}></div>
            <h3 style={{marginBottom:"12px"}}>Administrative Staff</h3>
            <div className='Staff-Card-Cont'>
                <StaffCard id={3} provider={staff[3]} />
            </div>
            <div style={{padding:"24px"}}></div>
            <h3 style={{marginBottom:"12px"}}>Former Clinicians</h3>
            <div className='Former-Clinician'>
                <div style={{padding:"8px"}}></div>
                <h4>Donna Boni, MSW, LCSW, LCAS</h4>
                <p>Donna can be contacted at donna@donnaboni.com or 919-338-3959. Her website is www.donnaboni.com</p>
            </div>
            <div className='Former-Clinician'>
                <div style={{padding:"8px"}}></div>
                <h4>Kathy Dobbs, LCSW</h4>
                <p>Kathy has relocated to Missouri. You may contact her at kdobbslcsw@gmail.com</p>
            </div>

        </div>
    );
}

export default Staff;