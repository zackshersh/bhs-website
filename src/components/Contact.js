import React from 'react';
import image from "../assets/images/bhs-front.png"

function Contact(props) {
    return (
        <div className='Contact'>
            <span className='Scroll-Target Contact-Scroll'></span>
            <div className='Image-Cont'></div>
            <div className='Spacer'></div>
            <div className='Content'>
                <div>
                    <p>Our office is located at</p>
                    <a href="https://goo.gl/maps/eUfV2QCkFT8hP1Wj8">5318 Highgate Drive, Suite 131, Durham, NC 27713</a>
                </div>
                <div>
                    <p>Phone: <a href="tel:9194190524">919-419-0524</a></p>
                    <p>Email: <a href="mailto:email@bhspa.net">email@bhspa.net</a></p>
                    <p>Fax: <a>919-419-9651</a></p>
                </div>
            </div>
        </div>
    );
}

export default Contact;