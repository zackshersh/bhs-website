import React from 'react';

function NewClient(props) {
    return (
        <div className='New-Client'>
            <h2>New Clients</h2>
            <h5>New clients can call our office at <a href="tel:9194190524">919-419-0524</a> to schedule an initial appointment with any one of our providers.</h5>
            <section>
                <p>Before your first appointment we ask that you fill out our intake packet and email it to <a>email@bhspa.net</a></p>
                <button>The packet can be downloaded here.</button>
            </section>
        </div>
    );
}

export default NewClient;