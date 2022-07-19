

export default function Title() {
    return(
        <section className="webdevTitleSection">
            <div className="row titlewebRow" style={{ paddingTop: "150px"}}>
                <div className="col-lg-6 centerItemV">
                    <div>
                        <div className="row">
                            <div className="col-3">
                                <img src="/assets/images/webdevServices.png" alt="web development icon" style={{width: "100px"}}/>
                            </div>
                            <div className="col centerItemV">
                                <h1 className="ourFontBold fontSize40 text-white webdevTitleFont" style={{fontWeight: "bold"}}>Web Development</h1>
                            </div>
                        </div>
                        <div className="row" style={{paddingTop: "30px"}}>
                            <div className="col">
                                <p className="ourFontBold fontSize24 text-white">Our team will develop a website or web application unique to your brand, based on your preferences. </p>
                            </div>
                        </div>
                        <div className="row" style={{paddingTop: "60px"}}>
                            <div className="col-6">
                                <button className="purpleButton webdevButton" ><p className="ourFontBold fontSize24 text-white webdevFontButton" style={{margin: "0"}}>Get Started</p></button>
                            </div>
                            <div className="col-6 myAlignRight">
                                <p className="ourFontBold text-white fontSize24 viewProj centerItemV" style={{textDecoration: "underline 1px white", margin: "0", marginRight: "20px"}}>View Our Projects</p>
                                <img src="/assets/icons/arrow.png" style={{width: "25px", height: "25px", marginTop: "15px", marginRight: "20px" }} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 centerItem webdevMobileCol">
                    <img className="webdevImage" src="/assets/display/webdevImg.png" alt="web development image" />
                </div>
            </div>
            <div className="row" style={{paddingTop: "100px", paddingBottom: "100px"}}>
                <div className="col centerItem">
                     <img src="/assets/icons/rokitIcon.png" alt="rokit media icon"/>
                </div>
            </div>
        </section>
    );
}