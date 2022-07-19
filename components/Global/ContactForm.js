import { useState } from "react";

export default function ContactForm() {

    const [web, setWeb] = useState(false);
    const [design, setDesign] = useState(false);
    const [marketing, setMarketing] = useState(false);

    function refreshForm() {
        const val = document.getElementById("jobType").value;

        if (val == "graphDesign") setDesign(true);
        else setDesign(false);

        if (val == "webDev") setWeb(true);
        else setWeb(false);

        if (val == "marketing") setMarketing(true);
        else setMarketing(false);
    }
    function resetForm() {
        document.getElementById("fullName").value = "";
        document.getElementById("companyName").value = "";
        document.getElementById("email").value = "";
        document.getElementById("jobType").value = "default";
        document.getElementById("webDevType").value = "";
        document.getElementById("designType").value = "";
        document.getElementById("marketingType").value = "";
        document.getElementById("description").value = "";

        refreshForm();
    }

    return(
        <div className="contactForm" style={{paddingTop: "50px", paddingBottom: "50px"}}>
            <div className="row">
                <div className="col centerText">
                    <h1 className="ourFontBold fontSize40 text-white underlineText">Request a quote</h1>
                    <p className="ourFont fontSize24 text-white">Let us know how we can help!</p>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <div>
                        <form method="post" action="/api/contact">
                            <div className="row">
                                <div className="col">
                                    <div className="centerItem">
                                        <div className="formLabel">
                                            <label className="ourFont fontSize24 text-white">Full Name*</label>
                                        </div>
                                    </div>
                                    <div className="centerItem">
                                        <input className="textInput" type="text" name="fullName" id="fullName" />
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
                                        <input className="textInput" type="text" name="companyName" id="companyName" />
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
                                        <input className="textInput" type="text" name="email" id="email" />
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
                                        <select onChange={refreshForm} defaultValue={"default"} className="textInput" name="jobType" id="jobType">
                                            <option disabled value="default">Select an Option</option>
                                            <option value="webDev">Web Development</option>
                                            <option value="graphDesign">Graphic Design</option>
                                            <option value="marketing">Marketing</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className={"row " + (web ? "": "noDisplay")}>
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
                            </div>
                            <div className="row">
                                <div className="col">
                                    <div className="centerItem">
                                        <div className="formLabel">
                                            <label className="ourFont fontSize24 text-white">Description</label>
                                        </div>
                                    </div>
                                    <div className="centerItem">
                                        <textarea className="textArea" name="description" id="description" />
                                    </div>
                                </div>
                            </div>
                            <div className="centerItem" style={{paddingTop: "50px"}}>
                                <div className="row" style={{width: "75%"}}>
                                    <div className="col-6" style={{paddingLeft: "0"}}>
                                        <button type="button" onClick={resetForm} className="resetButton">Reset</button>
                                    </div>
                                    <div className="col-6">
                                        <button type="submit" className="purpleButton submitButtonForm">Submit</button>
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