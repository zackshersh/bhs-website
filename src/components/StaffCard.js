import React from 'react';

import { staffPhotos } from '../assets/staffPhotos';

import {Link} from 'react-router-dom';


function StaffCard({provider, id}) {

    return (
        <Link to={`/staff/${id}`}>
            <div className='Staff-Card'>
                <img src={staffPhotos[provider.fname]} />
                <h5>{provider.name}</h5>
                <p>{provider.title}</p>
            </div>
        </Link>
    );
}

export default StaffCard;