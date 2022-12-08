import React from "react";
// import validator from "validator";
import { Form } from "react-bootstrap";

const ApplyFormSecond = ({ nextStep, handleFormData, prevStep, values }) => {

    //creating error state for validation
    // const [error, setError] = useState(false);

    // after form submit validating the form data using validator
    const submitFormData = (e) => {
        e.preventDefault();

        // checking if value of first name and last name is empty show error else take to next step
        // if (validator.isEmpty(values.file)) {
        //     setError(true);
        //     console.log("error")
        // } else {
        //     console.log("next")
        //     nextStep();
        // }
        nextStep();
    };
   

    return (
        <div className="registe-form-field">
            <Form onSubmit={submitFormData}>
                <div className="form-col">
                    <label>Upload Document</label>
                    <div id="app" >
                        <div className="file-wrapp-content"> <img src="assets/images/file.png" alt="" />
                            <h5>Drag your Files here to<br />
                                upload</h5>
                            <div className="divider-item">
                                <p>or</p>
                            </div>
                        </div>
                        <div className="file-wrapp">
                            <div className="file-wrapper">
                                <input type="file" name="file-input" multiple="True"  />                                
                                <img src="assets/images/file-up.png" alt="" /> Choose file
                            </div>
                            <ul className="file-item-list">
                                <li v-for="(file, index) in files">
                                    <button title="Remove"><i className="fa-solid fa-xmark"></i></button>
                                </li>
                            </ul>
                        </div>
                    </div >
                </div >

                <div className="form-col">
                    <p className="note-text"><span>Note:</span>Image or document size cannot be more than 20mb.                        
                    </p>
                    {/* defaultValue={values.file} onChange={handleFormData("file")} */}

                </div>

                <div className="form-col text-center">
                    <button type="button" className="form-btn form-btn-second" onClick={prevStep}>
                        Previous
                        <img src="assets/images/submit-arrow-red.png" alt="" />
                    </button>
                    <button type="submit" className="form-btn">Next <img src="assets/images/submit-arrow.png" alt="" /></button>
                </div>
            </Form >
        </div >
    )
}

export default ApplyFormSecond