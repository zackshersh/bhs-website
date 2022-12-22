import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import FormPage from './FormPage';

function NewClient(props) {

    const [formDisplay, setFormDisplay] = useState(false);

    const handleFormLink = () => {
        setFormDisplay(true);
    }

    return (
        <div className='New-Client'>
            <span className='Scroll-Target New-Clients-Scroll'></span>
            <h2>New Clients</h2>
            <h5>Please complete <Link to={"/potential-client-form"}>this form</Link> if you are interested in finding out more.</h5>
            {/* <h5>New clients can call our office at <a href="tel:9194190524">919-419-0524</a> to schedule an initial appointment with any one of our providers.</h5> */}
            <h5 style={{marginTop:8}}>Intake forms can be found <Link to={"/MoreFormsPage"}>here</Link>.</h5>
            {/* <section>
                <div>
                    <p>Before your first appointment we ask that you fill out our intake packet and email it to <a>email@bhspa.net</a></p>
                    <button>The packet can be downloaded here.</button>
                </div>
                <div className='more-forms'>
                    <p><Link to={"/more-forms"}>Additional forms can be found here.</Link></p>
                </div>
            </section> */}
        </div>
    );
}

export default NewClient;