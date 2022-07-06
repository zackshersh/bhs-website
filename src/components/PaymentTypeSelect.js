import React from 'react';

function PaymentTypeSelect({state, setter}) {

    const handleCheckbox = (e) => {
        setter(e.target.getAttribute("val"));
    }


    return (
        <div className='Payment-Type'>
            <div>
                <input val={"insurance"} onChange={handleCheckbox} checked={state == "insurance"} type="checkbox"></input>
                <label>Insurance</label>
            </div>
            <div>
                <input  val={"credit card"} onChange={handleCheckbox} checked={state == "credit card"} type="checkbox"></input>
                <label>Credit Card</label>
            </div>
        </div>
    );
}

export default PaymentTypeSelect;