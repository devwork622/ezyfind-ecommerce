import React, { useState } from "react";
import validator from "validator";
import { Form } from "react-bootstrap";
import { Link } from 'react-router-dom';

const ApplyFormThird = ({ nextStep, handleFormData, prevStep, values }) => {

    //creating error state for validation
    const [error, setError] = useState(false);

    // after form submit validating the form data using validator
    const submitFormData = (e) => {
        e.preventDefault();

        // checking if value of first name and last name is empty show error else take to next step
        if (validator.isEmpty(values.email) || validator.isEmpty(values.mobile) || validator.isEmpty(values.password)) {
            setError(true);
        } else {
            nextStep();
        }
    };

    return (
        <div className="registe-form-field">
            <Form onSubmit={submitFormData}>
                <div className="form-col">
                    <label>Email</label>
                    <input type="email" name="" placeholder="Enter email" defaultValue={values.email} onChange={handleFormData("email")}/>
                    {error ? (
                        <Form.Text style={{ color: "red" }}>
                            This is a required field
                        </Form.Text>
                    ) : (
                        ""
                    )}
                </div>
                <div className="form-col form-col-tel">
                    <label>Mobile Number</label>
                    <input type="tel" name="" placeholder="Enter Mobile number" defaultValue={values.mobile} onChange={handleFormData("mobile")}/>
                    {error ? (
                        <Form.Text style={{ color: "red" }}>
                            This is a required field
                        </Form.Text>
                    ) : (
                        ""
                    )}
                </div>
                <div className="form-col">
                    <label>Password</label>
                    <input type="password" name="" placeholder="Enter password" defaultValue={values.password} onChange={handleFormData("password")}/>
                    {error ? (
                        <Form.Text style={{ color: "red" }}>
                            This is a required field
                        </Form.Text>
                    ) : (
                        ""
                    )}
                </div>
                <div className="row">
                    <div className="col-6">
                        <div className="btn-social-link"><Link to=""><i className="fa-brands fa-facebook"></i> Facebook</Link></div>
                    </div>
                    <div className="col-6">
                        <div className="btn-social-link"><Link to=""><i className="fa-brands fa-google"></i> Google</Link></div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-6">
                        <div className="form-col">
                            <button type="button" className="form-btn-2">Previous <img src="assets/images/submit-arrow-2.png" alt="" onClick={prevStep}/></button>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="form-col">
                            <button type="submit" className="form-btn">Next <img src="assets/images/submit-arrow.png" alt="" /></button>
                        </div>
                    </div>
                </div>
            </Form>
        </div>
    )
}

export default ApplyFormThird