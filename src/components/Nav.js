import React from 'react';
import "../nav.css"

function Nav(props) {

    function handleButton(e){
        let inner = e.target.innerHTML;
        let split = inner.split(" ");
        let joined = split.join("-")
        let scrollTarget = document.querySelector(`.${joined}-Scroll`);
        scrollTarget.scrollIntoView({behavior: 'smooth'})
    }


    return (
        <nav>
            <div>
                <button onMouseDown={handleButton}>Home</button>
                <button onMouseDown={handleButton}>Services</button>
                <button onMouseDown={handleButton}>Staff</button>
                <button onMouseDown={handleButton}>New Clients</button>
                <button onMouseDown={handleButton}>Contact</button>
            </div>
        </nav>
    );
}

export default Nav;