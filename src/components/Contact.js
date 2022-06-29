import React from 'react';
import image from "../assets/images/bhs-front.png"

function Contact(props) {
    return (
        <div className='Contact'>
            <div className='Image-Cont'></div>
            <div className='Spacer'></div>
            <div className='Content'>
                <div>
                    <p>Our office is located at</p>
                    <a href="https://goo.gl/maps/eUfV2QCkFT8hP1Wj8">5318 Highgate Drive, Suite 131</a>
                </div>
                <div>
                    <p>You can call us at</p>
                    <a href="tel:9194190524">919-419-0524</a>
                    <p>or email us at</p>
                    <a href="mailto:email@bhspa.net">email@bhspa.net</a>
                </div>
            </div>
        </div>
    );
}

export default Contact;