import React from 'react';

function FeesInsurance() {
    return (
        <div className='Fees-Insurance'>
            <span className='Scroll-Target Fees-and-Insurance-Scroll'></span>
            <h2>Fees and Insurance</h2>
            <div>
                <h4>Psychotherapy Fees</h4>
                <p>We charge $200.00 for the first psychotherapy session. This first session is devoted to understanding what the client is seeking help for as well as gathering additional clinical and social information. Additionally, the first session allows the psychotherapist to answer some of the client's questions, such as what to expect from treatment. These first sessions are often a bit longer than regular psychotherapy sessions.</p>
                <ul>
                    <li>We charge <b>$150.00</b> for 50 to 60 minute psychotherapy sessions.</li>
                    <li>We charge <b>$100.00</b> for 30 minute psychotherapy sessions.</li>
                    <li>We charge <b>$200.00</b> for longer psychotherapy sessions (lasting 75 minutes or more).</li>
                </ul>
                <p>We accept most major insurance plans (although not all of our psychotherapists accept the same insurance plans). Prior to your first session, we will gather your insurance information, verify your benefits, and determine your out-of-pocket costs. We are happy to submit insurance claims for psychotherapy sessions. Please remember: clients are ultimately responsible for all charges.</p>
            </div>
            <div>
                <h4>Evaluation Fees</h4>
                <p>We charge $200.00 per hour for all time spent on evaluations, including reviewing records, interviews, and writing reports. Some psychological tests have separate scoring fees as well, which must be paid by the client.</p>
                <p>We do not submit insurance claims for most evaluations. (However, we will submit insurance claims for attention-deficit/hyperactivity disorder assessments). For more evaluations, we will ask for a deposit prior to beginning services. The details can be discussed with the staff member providing the evaluation. After the evaluation is completed, we are happy to provide you with a statement of charges, which you can submit to your insurance company for reimbursement.</p>
            </div>
        </div>
    );
}

export default FeesInsurance;