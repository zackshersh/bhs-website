import React, { useEffect, useState } from 'react';

function PaymentTypeSelect({state, setter, validating, setOtherPayment}) {

    const [valid, setValid] = useState(true);

    const handleCheckbox = (e) => {
        setter(e.target.getAttribute("val"));
    }

    function checkValidity(){
        if(state == "" && validating){
            setValid(false);
        } else {
            setValid(true);
        }
    }

    useEffect(() => {
        checkValidity()
    })

    const validMarkerStyles = {
        color: "white",
        backgroundColor: "red",
        fontSize: 12,
        padding: "4px 8px",
        borderRadius: 12
    }

    const labelStyles = {
        textDecoration: "underline",
        textDecorationColor: "red",
        textUnderlineOffset: "4px"
    }

    const contStyles = {
        // outline: valid ? "" : "2px solid red",
        // margin: "-4px",
        // padding: "12px",
        // borderRadius: "12px"
    }


    return (
        <div style={contStyles} className='Payment-Type'>
            <div>
                <input val={"insurance"} onChange={handleCheckbox} checked={state == "insurance"} type="checkbox"></input>
                <label style={valid?{}:labelStyles}>Insurance</label>
            </div>
            <div>
                <input val={"self pay"} onChange={handleCheckbox} checked={state == "self pay"} type="checkbox"></input>
                <label style={valid?{}:labelStyles}>Self Pay</label>
            </div>
            <div>
                <input val={"other"} onChange={handleCheckbox} checked={state == "other"} type="checkbox"></input>
                <label style={valid?{}:labelStyles}>Other</label>
                <input onChange={(e) => {setOtherPayment(e.target.value)}} className='other-pay-field' style={{display: state == "other" ? "block" : "none"}} placeholder='Please Specify'></input>
            </div>
            {/* <div>
                <input  val={"credit card"} onChange={handleCheckbox} checked={state == "credit card"} type="checkbox"></input>
                <label style={valid?{}:labelStyles}>Credit Card</label>
            </div>
            <div>
                <input  val={"cash"} onChange={handleCheckbox} checked={state == "cash"} type="checkbox"></input>
                <label style={valid?{}:labelStyles}>Cash</label>
            </div>
            <div>
                <input  val={"check"} onChange={handleCheckbox} checked={state == "check"} type="checkbox"></input>
                <label style={valid?{}:labelStyles}>Check</label>
            </div> */}
            <div className='valid-marker'>
                {valid ? "" : <p style={validMarkerStyles}>Please Choose an Option</p>}
            </div>
        </div>
    );
}

export default PaymentTypeSelect;