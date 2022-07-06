import React from 'react';

function TreatmentTypeSelect({state, setter}) {

    const handleCheckbox = (e) => {
        setter(e.target.getAttribute("val"));
    }


    return (
        <div className='Treatment-Type'>
            <div>
                <input val={"evaluation"} onChange={handleCheckbox} checked={state == "evaluation"} type="checkbox"></input>
                <label>Evaluation</label>
            </div>
            <div>
                <input val={"treatment"} onChange={handleCheckbox} checked={state == "treatment"} type="checkbox"></input>
                <label>Treatment</label>
            </div>
        </div>
    );
}

export default TreatmentTypeSelect;