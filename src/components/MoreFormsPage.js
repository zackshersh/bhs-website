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
                        <li><a href='./forms/BHS Intake Packet for Therapy Clients.docx'>Psychotherapy intake packet</a></li>
                        <li><a href='./forms/BHS Intake Packet for Psychosexual Evaluation Clients.docx'>Psychosexual evaluation intake packet</a></li>
                        <li><a href="./forms/BHS Intake Packet for Psychological Evaluation Clients.docx">Psychological evaluation intake  packet</a></li>
                    </ul>
                </div>
                <div className='Form-Group'>
                    <h5>Other Forms</h5>
                    <ul>
                        <li><a href="./forms/BHS Authorization to Release Information.docx">Release of information form</a></li>
                        <li><a href="./forms/BHS Referral Form.docx">Referral form</a></li>
                    </ul>
                </div>
            </main>
        </div>
    );
}

export default MoreFormsPage;