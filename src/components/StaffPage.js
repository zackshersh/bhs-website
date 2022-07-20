import React, {useEffect, useState} from 'react';

import "../staffPage.css"

import staffData from "../staff.json"

import {Link, useParams} from 'react-router-dom';

function StaffPage() {

    const {staffID} = useParams();
    
    const [name, setName] = useState("");
    const [title, setTitle] = useState("");
    const [image, setImage] = useState("");
    const [bio, setBio] = useState("");
    const [email, setEmail] = useState("");

    
    function setData(){
        let data = staffData[staffID];
        setName(data.name);
        setTitle(data.title);
        setImage(data.image);
        setBio(data.bio);
        setEmail(data.email);
        console.log(bio)
    }

    function generateBio(){
        // let bio = ['I am a licensed psychologist.  I work with adults …ir difficulties and appreciating their strengths.', 'I received my doctorate in clinical psychology fro…or the Management and Treatment of Sex Offenders.'];
        if(!bio){
            return (<p></p>)
        } else {
            const bioSections = bio.map((section,i) => 
                <p key={i}>{section}</p>
            )
            return (<div>{bioSections}</div>)

        }
    }

    useEffect(() => {
        setData()
    })

    return (
        <div className='Staff-Page-Cont'>
            <div className='Staff-Page'>
            <span className='Staff-Page-Exit'><Link to={"/"}>{"←"}</Link></span>
                <div className='Header'>
                    <img src={image}></img>
                    <div>
                        <h2>{name}</h2>
                        <h3>{title}</h3>
                    </div>
                </div>
                <main>
                    {generateBio()}
                </main>

                <footer>
                    <button>Contact {name.split(" ")[0]}</button>
                    <p>To schedule an appointment with {name.split(" ")[0]} you may call our office at <a href="tel:919-419-0524">919-419-0524</a> or fill out <Link to={"/potential-client-form"}>this form</Link></p>
                </footer>
            </div>
        </div>
    );
}

export default StaffPage;