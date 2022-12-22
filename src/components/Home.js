import React from 'react';

import Block from './Block';

import Title from './Title';
import Nav from './Nav';
import Services from './Services';
import Staff from './Staff';
import NewClient from './NewClient';
import Contact from './Contact';
import FeesInsurance from './FeesInsurance';

function Home(props) {
    return (
        <div className='Home'>
            <span className='Scroll-Target Home-Scroll'></span>
            <Block title={true} background={"Dark"}>
                <Title />
            </Block>
            <Nav></Nav>
            <Block background={"Light"}>
                <Services />
            </Block>
            <Block background={"Dark"}>
                <Staff />
            </Block>
            <Block background={"Light"}>
                <FeesInsurance />
            </Block>
            <Block background={"Dark"}>
                <NewClient />
            </Block>
            <Block pos_relative={true} background={"Light"}>
                <Contact />
            </Block>
        </div>
    );
}

export default Home;