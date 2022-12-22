import React, { useState } from 'react';

import "../form.css"
import FormGroup from './FormGroup';
import InputCont from './InputCont';
import PaymentTypeSelect from './PaymentTypeSelect';
import ____Spacer_____ from './Spacer';
import TextInput from './TextInput';
import TreatmentTypeSelect from './TreatmentTypeSelect';

import { submitFormData } from '../formSubmit';

function FormPage({display}) {

    const [firstName, setFirstName] = useState("");
    const [middleName, setMiddleName] = useState("");
    const [lastName, setLastName] = useState("");

    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");

    const [paymentType, setPaymentType] = useState("");

    const [otherPayment, setOtherPayment] = useState("");

    const [carrier, setCarrier] = useState("");
    const [memberNumber, setMemberNumber] = useState("");
    const [groupNumber, setGroupNumber] = useState("");
    const [primaryInsured, setPrimaryInsured] = useState("");
    const [piDOB, setPiDOB] = useState("");


    const [service, setService] = useState("");
    const [reason, setReason] = useState("");

    const [validating, setValidating] = useState(false);

    const [submitState, setSubmitState] = useState("idle");
        // STATES:
            // "idle", "waiting", "success", "error"

    function validateSubmit(){
        setValidating(true);
        return new Promise(resolve => {
            if(firstName == "" || lastName == "" || email == "" || phone == ""){
                resolve(false);
            }
            if(paymentType == ""){
                resolve(false);
            }
            if(service == "" || reason == ""){
                resolve(false);
            }



            resolve(true);
        })
    }

    async function handleSubmit(e){

        e.preventDefault();

        const valid = await validateSubmit();

        if(!valid){
            console.log('NOT VALID')
            return
        }

        const data = {
            firstName: firstName,
            middleName: middleName,
            lastName: lastName,
            email: email,
            phone: phone,
            paymentType: paymentType,
            otherPayment: otherPayment,
            insuranceInfo: paymentType == "insurance" ? {
                carrier: carrier,
                memberNumber: memberNumber,
                groupNumber: groupNumber,
                primaryInsured: primaryInsured,
                piDOB: piDOB
            } : null,
            service: service,
            reason: reason

        };

        let res = await submitFormData(data);
        if(res.status == 200){
            setSubmitState("success")
        }
        if(res.status >= 400){
            setSubmitState("error")
        }
        console.log(res)
    }


    function generatePayOptions(){
        switch(paymentType){
            case "insurance":
                return (
                    <div>
                        <InputCont>
                            <TextInput title={"Carrier"} state={carrier} setter={setCarrier} required={true} validating={validating} />
                        </InputCont>
                        <InputCont>
                            <TextInput title={"Member Number"} state={memberNumber} setter={setMemberNumber}  validating={validating}/>
                            <TextInput title={"Group Number"} state={groupNumber} setter={setGroupNumber}  validating={validating}/>
                        </InputCont>
                        <InputCont>
                            <TextInput title={"Primary Insured"} state={primaryInsured} setter={setPrimaryInsured}  validating={validating}/>
                            <TextInput title={"Date of Birth"} state={piDOB} setter={setPiDOB}  validating={validating}/>
                        </InputCont>
                    </div>
                )
            default:
                return (
                    <span></span>
                )
        }
    }

    function generateSubmitArea(){
        switch(submitState){
            case "idle":
                return <button className='Form-Submit'>Submit</button>;
            case "waiting":
                return <span></span>;
            case "success":
                return <p className='Submit-Message Success-Message'>Your information has been successfully submitted, our office will be in contact.</p>;
            case "error":
                return <p className='Submit-Message Error-Message'>An error occured. Please try again later or call our office at <a>919-419-0524</a></p>
                
        }

    }


    return (
        <div className='Form-Page'>
            <form onSubmit={handleSubmit}>
                <header>
                    <h3>Potential Clients</h3>
                </header>
                <main>
                    <FormGroup title={"Contact Information"}>
                        <InputCont>
                            <TextInput title={"First Name"} state={firstName} setter={setFirstName} required={true}  validating={validating}/>
                            <TextInput title={"Middle Name"} state={middleName} setter={setMiddleName} required={false} small={true}  validating={validating}/>
                            <TextInput title={"Last Name"} state={lastName} setter={setLastName} required={true}  validating={validating}/>
                        </InputCont>
                        <InputCont>
                            <TextInput type={"email"} title={"E-Mail"} state={email} setter={setEmail} required={true}  validating={validating}/>
                            <TextInput title={"Phone"} state={phone} setter={setPhone} required={true}  validating={validating}/>
                        </InputCont>
                    </FormGroup>

                    <____Spacer_____ height={2} />

                    <FormGroup title={"Payment"}> 
                        <InputCont>
                            <PaymentTypeSelect state={paymentType} setter={setPaymentType} validating={validating} setOtherPayment={setOtherPayment}/>
                        </InputCont> 
                        {generatePayOptions()}
                    </FormGroup>

                    <____Spacer_____ height={2} />

                    <FormGroup title={"What type of services are you seeking?"}>
                        <InputCont>
                            <TreatmentTypeSelect state={service} setter={setService} validating={validating}/>
                        </InputCont>
                        <InputCont>
                            <TextInput title={"Please enter the reason you are seeking care."} state={reason} setter={setReason} required={true} textArea={true}  validating={validating}/>
                        </InputCont>
                    </FormGroup>
                    <div style={{display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", margin: "24px 0px 48px 0px"}}>
                        {generateSubmitArea()}
                    </div>
                </main>

            </form>
        </div>
    );
}

export default FormPage;