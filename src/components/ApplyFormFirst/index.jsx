import React, { useState } from "react";
import validator from "validator";
import { Form } from "react-bootstrap";

const ApplyFormFirst = ({ nextStep, handleFormData, values }) => {

    const [error, setError] = useState(false);

    // after form submit validating the form data using validator
    const submitFormData = (e) => {
        e.preventDefault();

        // checking if value of first name and last name is empty show error else take to step 2
        if (
            validator.isEmpty(values.title) ||
            validator.isEmpty(values.description)
        ) {
            setError(true);
        } else {
            nextStep();
        }
    };

    return (
        <div className="registe-form-field">
            <h4>Apply</h4>
            <Form onSubmit={submitFormData}>
                <div className="form-col">
                    <label>Title</label>
                    <input type="text" name="" defaultValue={values.title} onChange={handleFormData("title")} placeholder="Legal Assistant required with 2+ years experience" />
                    {error ? (
                        <Form.Text style={{ color: "red" }}>
                            This is a required field
                        </Form.Text>
                    ) : (
                        ""
                    )}
                </div>
                <div className="form-col">
                    <label>Description</label>
                    <textarea name="" placeholder="Enter Description" defaultValue={values.description} onChange={handleFormData("description")}></textarea>
                    {error ? (
                        <Form.Text style={{ color: "red" }}>
                            This is a required field
                        </Form.Text>
                    ) : (
                        ""
                    )}
                </div>
                <div className="form-col">
                    <button type="submit" className="form-btn">Next <img src="assets/images/submit-arrow.png" alt="" /></button>
                </div>
            </Form>
        </div>
    )
}

export default ApplyFormFirst