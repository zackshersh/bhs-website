import React, { useState } from 'react';

import "../form.css"
import FormGroup from './FormGroup';
import InputCont from './InputCont';
import PaymentTypeSelect from './PaymentTypeSelect';
import ____Spacer_____ from './Spacer';
import TextInput from './TextInput';
import TreatmentTypeSelect from './TreatmentTypeSelect';

function FormPage({display}) {

    const [firstName, setFirstName] = useState("");
    const [middleName, setMiddleName] = useState("");
    const [lastName, setLastName] = useState("");

    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");

    const [paymentType, setPaymentType] = useState("");

    const [carrier, setCarrier] = useState("");
    const [memberNumber, setMemberNumber] = useState("");
    const [groupNumber, setGroupNumber] = useState("");
    const [primaryInsured, setPrimaryInsured] = useState("");
    const [piDOB, setPiDOB] = useState("");


    const [service, setService] = useState("");
    const [reason, setReason] = useState("");



    function generatePayOptions(){
        switch(paymentType){
            case "insurance":
                return (
                    <div>
                        <InputCont>
                            <TextInput title={"Carrier"} state={carrier} setter={setCarrier} required={true}/>
                        </InputCont>
                        <InputCont>
                            <TextInput title={"Member Number"} state={memberNumber} setter={setMemberNumber} />
                            <TextInput title={"Group Number"} state={groupNumber} setter={setGroupNumber} />
                        </InputCont>
                        <InputCont>
                            <TextInput title={"Primary Insured"} state={primaryInsured} setter={setPrimaryInsured} />
                            <TextInput title={"Date of Birth"} state={piDOB} setter={setPiDOB} />
                        </InputCont>
                    </div>
                )
            default:
                return (
                    <span></span>
                )
        }
    }


    return (
        <div className='Form-Page'>
            <form>
                <header>
                    <h3>Potential Clients</h3>
                </header>
                <main>
                    <FormGroup title={"Basic Info"}>
                        <InputCont>
                            <TextInput title={"First Name"} state={firstName} setter={setFirstName} required={true}/>
                            <TextInput title={"Middle Name"} state={middleName} setter={setMiddleName} required={false} small={true}/>
                            <TextInput title={"Last Name"} state={lastName} setter={setLastName} required={true}/>
                        </InputCont>
                        <InputCont>
                            <TextInput type={"email"} title={"E-Mail"} state={email} setter={setEmail} required={true}/>
                            <TextInput title={"Phone"} state={phone} setter={setPhone} required={true}/>
                        </InputCont>
                    </FormGroup>

                    <____Spacer_____ height={2} />

                    <FormGroup title={"Payment"}> 
                        <InputCont>
                            <PaymentTypeSelect state={paymentType} setter={setPaymentType} />
                        </InputCont> 
                        {generatePayOptions()}
                    </FormGroup>

                    <____Spacer_____ height={2} />

                    <FormGroup title={"Treatment"}>
                        <InputCont>
                            <TreatmentTypeSelect state={service} setter={setService} />
                        </InputCont>
                        <InputCont>
                            <TextInput title={"Please enter the reason you are seeking care."} state={reason} setter={setReason} required={true} textArea={true} />
                        </InputCont>
                    </FormGroup>
                    <div style={{display: "flex", justifyContent: "center"}}>
                        <button className='Form-Submit'>Submit</button>
                    </div>
                </main>

            </form>
        </div>
    );
}

export default FormPage;