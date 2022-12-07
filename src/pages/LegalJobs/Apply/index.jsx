import React, { useState } from 'react';
import ApplyFormFirst from "../../../components/ApplyFormFirst";
import ApplyFormSecond from '../../../components/ApplyFormSecond';
import ApplyFormThird from '../../../components/ApplyFormThird';

const Apply = () => {
    const [step, setstep] = useState(1);

    const [formData, setFormData] = useState({
        title:"",
        description:"",
        file: "",
        email: "",
        mobile: "",
        password:""
    })

    // function for going to next step by increasing step state by 1
    const nextStep = () => {
        setstep(step + 1);
        console.log(formData.title);
    };

    // function for going to previous step by decreasing step state by 1
    const prevStep = () => {
        setstep(step - 1);
        console.log("step --- ", step);
    };

    // handling form input data by taking onchange value and updating our previous form data state
    const handleInputData = input => e => {
        // input value from the form
        const { value } = e.target;

        //updating for data state taking previous state and then adding new value to create new object
        setFormData(prevState => ({
            ...prevState,
            [input]: value
        }));
    }

    switch (step) {
        // case 1 to show stepOne form and passing nextStep, prevStep, and handleInputData as handleFormData method as prop and also formData as value to the fprm
        case 1:
            return (
                <section className="registe-form">
                    <div className="container">
                        <div className="registe-form__wrapper">
                            <div className="registe-form-image"> <img src="assets/images/registe-form-image1.png" alt="" /> </div>
                            <ApplyFormFirst nextStep={nextStep} handleFormData={handleInputData} values={formData} />
                        </div>
                    </div>
                </section>
            );
        case 2:
            return (
                <section className="registe-form">
                    <div className="container">
                        <div className="registe-form__wrapper">
                            <div className="registe-form-image"> <img src="assets/images/registe-form-image1.png" alt="" /> </div>
                            <ApplyFormSecond nextStep={nextStep} prevStep={prevStep} handleFormData={handleInputData} values={formData}/>
                        </div>
                    </div>
                </section>
            );
        case 3:
            return (
                <section className="registe-form">
                    <div className="container">
                        <div className="registe-form__wrapper">
                            <div className="registe-form-image"> <img src="assets/images/registe-form-image1.png" alt="" /> </div>
                            <ApplyFormThird nextStep={nextStep} prevStep={prevStep} handleFormData={handleInputData} values={formData}/>
                        </div>
                    </div>
                </section>
            );
        default:
            return (
                <section className="registe-form">
                </section>
            );
    }
}
export default Apply;