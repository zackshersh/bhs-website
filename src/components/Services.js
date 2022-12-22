import React from 'react';

import {Link} from "react-router-dom"

function Services(props) {
    return (
        <div className='Services'>
            <span className='Scroll-Target Services-Scroll'></span>
            <div className='Header'>
                <h2>Services</h2>
                {/* <p>We offer psychotherapy to address a wide range of emotional, behavioral, and interpersonal issues.</p> */}
            </div>
            {/* <section>
                <table className='Services-Table'>
                    <thead>
                        <tr>
                            <td className='C-1'>Disorder</td>
                            <td>Evaluation Offered</td>
                            <td>Treatment Offered</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Anxiety Disorders<i>Including posttraumatic stress disorder, generalized anxiety disorder, and obsessive-compulsive disorder</i></td>
                            <td>✔</td>
                            <td>✔</td>
                        </tr>
                        <tr>
                            <td>Attention-Deficit Hyperactivity Disorder</td>
                            <td>✔</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>Mood Disorders <i>Including major depressive disorder and bipolar disorder</i></td>
                            <td>✔</td>
                            <td>✔</td>
                        </tr>
                        <tr>
                            <td>Sexual Behavior Problems <i>Including sexual offending, compulsive or addictive sexual behavior, and unwanted sexual interests </i></td>
                            <td>✔</td>
                            <td>✔</td>
                        </tr>
                        <tr>
                            <td>Relationship Issues</td>
                            <td></td>
                            <td>✔</td>
                        </tr>
                        <tr>
                            <td>Grief and Loss</td>
                            <td></td>
                            <td>✔</td>
                        </tr>
                        <tr>
                            <td>Life Transitions</td>
                            <td></td>
                            <td>✔</td>
                        </tr>

                    </tbody>
                </table>
            </section> */}
            <main>
                <h4>We offer psychotherapy to address a wide range of emotional, behavioral, and interpersonal issues, such as:</h4>
                <ul className='Services-List'>
                    <li>Anxiety disorders <br></br><i>Including posttraumatic stress disorder, generalized anxiety disorder, and obsessive-compulsive disorder.</i></li>
                    <li>Mood disorders <br /> <i>Including major depressive disorder and bipolar disorder.</i></li>
                    <li>Relationship issues</li> 
                    <li>Grief and loss</li>
                    <li>Life transitions</li>
                </ul>

                <h4>We provide psychological evaluations, including:</h4>
                <ul className='Services-List'>
                    <li>Intellectual assessment</li>
                    <li>Adaptive functioning assessment</li>
                    <li>Diagnostic and personality assessment</li>
                    <li>Attention-deficit/hyperactivity assessment</li>
                </ul>

            </main>
            <hr />
            <aside>
                <h4>Problematic Sexual Behaviors</h4>
                <p>Behavioral Health Solutions also provides specialized services related to problematic sexual behaviors and sexual interests, including issues related to sexual offending. Find out more <Link to={"/problematic-sexual-behaviors"}>here</Link>.</p>

            </aside>
        </div>
    );
}

export default Services;