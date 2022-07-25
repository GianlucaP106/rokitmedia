import { useState } from "react";
import Popup from "./Popup";

export default function ContactForm() {

    const [popup, setPopup] = useState(false);

    function togglePopup(state) {
        setPopup(state);    
    }
    
    function activateTrans() {
        document.getElementById("popupWindow").classList.add("popupTransitionActive");
    }
    function deactivateTrans() {
        document.getElementById("popupWindow").classList.add("popupTransitionActive");
    }

    async function handleSubmit() {
        const [fullName, companyName, email, jobType, description] = document.querySelectorAll(".inputFieldVal");

        const jsonData = {
            fullName: fullName.value
        }
        try {
            const res = await fetch("/api/contact/", { 
                method: 'POST',
                headers: {
                    "Content-Type": "application/json; charset=utf8"
                  },
                body: JSON.stringify(jsonData)
            });
        }catch(e) {
            console.log(e.message);
            return;
        }
        togglePopup(true);
        setTimeout(() => {
            activateTrans();
        }, 30)
    }


    const [web, setWeb] = useState(false);
    const [design, setDesign] = useState(false);
    const [marketing, setMarketing] = useState(false);


    // function refreshForm() {
    //     const val = document.getElementById("jobType").value;

    //     if (val == "graphDesign") setDesign(true);
    //     else setDesign(false);

    //     if (val == "webDev") setWeb(true);
    //     else setWeb(false);

    //     if (val == "marketing") setMarketing(true);
    //     else setMarketing(false);
    // }
    function resetForm() {
        document.getElementById("fullName").value = "";
        document.getElementById("companyName").value = "";
        document.getElementById("email").value = "";
        document.getElementById("jobType").value = "default";
        // document.getElementById("webDevType").value = "";
        // document.getElementById("designType").value = "";
        // document.getElementById("marketingType").value = "";
        document.getElementById("description").value = "";

        // refreshForm();
    }

    return(
        <div className="contactForm" style={{paddingTop: "50px", paddingBottom: "50px"}}>
            <div className="row">
                <div className="col centerText">
                    <h1 className="ourFontBold fontSize40 text-white underlineText">Request a quote</h1>
                    <p className="ourFont fontSize24 text-white">Let us know how we can help!</p>
                </div>
            </div>
            { popup && <Popup deactivate={deactivateTrans} toggle={togglePopup}/>}
            <div className="row">
                <div className="col">
                    <div>
                        <form>
                            <div className="row">
                                <div className="col">
                                    <div className="centerItem">
                                        <div className="formLabel">
                                            <label className="ourFont fontSize24 text-white">Full Name*</label>
                                        </div>
                                    </div>
                                    <div className="centerItem">
                                        <input className="textInput inputFieldVal" type="text" name="fullName" id="fullName" />
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <div className="centerItem">
                                        <div className="formLabel">
                                            <label className="ourFont fontSize24 text-white">Company Name*</label>
                                        </div>
                                    </div>
                                    <div className="centerItem">
                                        <input className="textInput inputFieldVal" type="text" name="companyName" id="companyName" />
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <div className="centerItem">
                                        <div className="formLabel">
                                            <label className="ourFont fontSize24 text-white">Email*</label>
                                        </div>
                                    </div>
                                    <div className="centerItem">
                                        <input className="textInput inputFieldVal" type="text" name="email" id="email" />
                                    </div>
                                </div>
                            </div>
                          
                            <div className="row">
                                <div className="col">
                                    <div className="centerItem">
                                        <div className="formLabel">
                                            <label className="ourFont fontSize24 text-white">Service Type*</label>
                                        </div>
                                    </div>
                                    <div className="centerItem">
                                        <select defaultValue={"default"} className="textInput inputFieldVal" name="jobType" id="jobType">
                                            <option disabled value="default">Select an Option</option>
                                            <option value="webDev">Web Development</option>
                                            <option value="graphDesign">Graphic Design</option>
                                            <option value="marketing">Marketing</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            {/* <div className={"row " + (web ? "": "noDisplay")}>
                                <div className="col">
                                    <div className="centerItem">
                                        <div className="formLabel">
                                            <label className="ourFont fontSize24 text-white">What type of web software?</label>
                                        </div>
                                    </div>
                                    <div className="centerItem">
                                        <input className="textInput" type="text" name="webDevType" id="webDevType" />
                                    </div>
                                </div>
                            </div>
                            <div className={"row " + (design ? "": "noDisplay")}>
                                <div className="col">
                                    <div className="centerItem">
                                        <div className="formLabel">
                                            <label className="ourFont fontSize24 text-white">What type of design?</label>
                                        </div>
                                    </div>
                                    <div className="centerItem">
                                        <input className="textInput" type="text" name="designType" id="designType" />
                                    </div>
                                </div>
                            </div>
                            <div className={"row " + (marketing ? "": "noDisplay")}>
                                <div className="col">
                                    <div className="centerItem">
                                        <div className="formLabel">
                                            <label className="ourFont fontSize24 text-white">What type of Marketing</label>
                                        </div>
                                    </div>
                                    <div className="centerItem">
                                        <input className="textInput" type="text" name="marketingType" id="marketingType"/>
                                    </div>
                                </div>
                            </div> */}
                            <div className="row">
                                <div className="col">
                                    <div className="centerItem">
                                        <div className="formLabel">
                                            <label className="ourFont fontSize24 text-white">Description</label>
                                        </div>
                                    </div>
                                    <div className="centerItem">
                                        <textarea className="textArea inputFieldVal" name="description" id="description" />
                                    </div>
                                </div>
                            </div>
                            <div className="centerItem" style={{paddingTop: "50px"}}>
                                <div className="row" style={{width: "75%"}}>
                                    <div className="col-6" style={{paddingLeft: "0"}}>
                                        <button type="button" onClick={resetForm} className="resetButton">Reset</button>
                                    </div>
                                    <div className="col-6">
                                        <button type="button" onClick={ handleSubmit } className="purpleButton submitButtonForm">Submit</button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}