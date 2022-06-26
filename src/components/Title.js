import React from 'react';
import "../title.css"
import Nav from './Nav';

function Title(props) {
    return (
        <div className='Title'>
            <h3>Welcome To</h3>
            <h1>Behavioral <br/> Health <br/> Solutions</h1>
            <p>Behavioral Health Solutions is a team of experienced professionals who provide caring and effective psychotherapy to adolescents and adults</p>
            <div className='Nav-Container'>
                <Nav></Nav>
            </div>
        </div>
    );
}

export default Title;