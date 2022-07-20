import React from 'react';

function Services(props) {
    return (
        <div className='Services'>
            <span className='Scroll-Target Services-Scroll'></span>
            <div className='Header'>
                <h2>Services</h2>
                <p>We offer psychotherapy to address a wide range of emotional, behavioral, and interpersonal issues.</p>
            </div>
            {/* <section>
                <ol className='Services-List'>
                    <li>Anxiety Disorders
                        <p>Including posttraumatic stress disorder, generalized anxiety disorder, and obsessive-compulsive disorder</p>
                    </li>
                    <li>Attention-Deficit Hyperactivity Disorder</li>
                    <li>Mood Disorders
                        <p>Including major depressive disorder and bipolar disorder</p>
                    </li>
                    <li>Sexual Behavior Problems
                        <p>Including sexual offending, compulsive or addictive sexual behavior, and unwanted sexual interests </p>
                    </li>
                    <li>Relationship Issues</li>
                    <li>Grief and Loss</li>
                    <li>Life Transitions</li>
                </ol>
            </section> */}
            <section>

                {/* <table>
                    <tbody>
                        <th>
                            <td>Disorder</td>
                            <td>Evaluation Offered</td>
                            <td>Treatment Offered</td>
                        </th>
                    </tbody>
                </table> */}
                <table className='Services-Table'>
                    <thead>
                        <tr>
                            <td>Disorder</td>
                            <td>Evaluation Offered</td>
                            <td>Treatment Offered</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Attention Deficit</td>
                            <td>Yes</td>
                            <td>Yes</td>
                        </tr>
                        <tr>
                            <td>Attention Deficit</td>
                            <td>Yes</td>
                            <td>Yes</td>
                        </tr>
                        <tr>
                            <td>Attention Deficit</td>
                            <td>Yes</td>
                            <td>Yes</td>
                        </tr>
                    </tbody>
                </table>

            </section>
        </div>
    );
}

export default Services;