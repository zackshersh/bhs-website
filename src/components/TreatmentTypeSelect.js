import React, { useState, useEffect } from 'react';

function TreatmentTypeSelect({state, setter, validating}) {

    const handleCheckbox = (e) => {
        setter(e.target.getAttribute("val"));
    }

    const [valid, setValid] = useState(true);
    
    function checkValidity(){
        console.log("Validating payment type")
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



    return (
        <div className='Treatment-Type'>
            <div>
                <input val={"evaluation"} onChange={handleCheckbox} checked={state == "evaluation"} type="checkbox"></input>
                <label style={valid?{}:labelStyles}>Evaluation</label>
            </div>
            <div>
                <input val={"treatment"} onChange={handleCheckbox} checked={state == "treatment"} type="checkbox"></input>
                <label style={valid?{}:labelStyles}>Treatment</label>
            </div>
            {valid ? "" : <p style={validMarkerStyles}>Please Choose an Option</p>}
        </div>
    );
}

export default TreatmentTypeSelect;