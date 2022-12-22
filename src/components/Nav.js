import React from 'react';
import "../nav.css"

function Nav(props) {

    function handleButton(e){
        let inner = e.target.innerHTML;
        let split = inner.split(" ");
        let joined = split.join("-");
        console.log(joined)
        let scrollTarget = document.querySelector(`.${joined}-Scroll`);
        console.log(scrollTarget)

        scrollTarget.scrollIntoView({behavior: 'smooth'})
    }


    return (
        <nav>
            <div>
                <button onMouseDown={handleButton}>Home</button>
                <button onMouseDown={handleButton}>Services</button>
                <button onMouseDown={handleButton}>Staff</button>
                <button onMouseDown={handleButton}>Fees and Insurance</button>
                <button onMouseDown={handleButton}>New Clients</button>
                <button onMouseDown={handleButton}>Contact</button>
            </div>
        </nav>
    );
}

export default Nav;