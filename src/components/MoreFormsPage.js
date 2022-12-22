import React from 'react';

import "../moreforms.css"

function MoreFormsPage(props) {
    return (
        <div className='Form-Page More-Forms-Page'>
            <main>
                <header>
                    <h3>Forms</h3>
                </header>
                <div className='Form-Group'>
                    <h5>Intake Forms</h5>
                    <ul>
                        <li><a>Psychotherapy intake packet</a></li>
                        <li><a>Psychosexual evaluation packet</a></li>
                        <li><a>Psychological evaluation packet</a></li>
                        <li><a>Sexual behavior treatment program intake</a></li>
                    </ul>
                </div>
                <div className='Form-Group'>
                    <h5>Other Forms</h5>
                    <ul>
                        <li><a>Release of information form</a></li>
                        <li><a>Referral form</a></li>
                    </ul>
                </div>
            </main>
        </div>
    );
}

export default MoreFormsPage;