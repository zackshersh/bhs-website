import React from 'react';

function Services(props) {
    return (
        <div className='Services'>
            <span className='Scroll-Target Services-Scroll'></span>
            <div className='Header'>
                <h2>Services</h2>
                <p>We offer psychotherapy to address a wide range of emotional, behavioral, and interpersonal issues.</p>
            </div>
            <section>
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

            </section>
        </div>
    );
}

export default Services;