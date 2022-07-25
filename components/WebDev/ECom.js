export default function ECom() {
    return(
        <section className="">
            <div className="row">
                <div className="col">
                    <div className="titlewebRow alignmentFix" >
                        <h1 className="ourPurple ourFontBold fontSize20" style={{fontWeight: "bold"}}>Web Development</h1>
                        <h2 className="text-white ourFontBold fontSize40" style={{fontWeight: "bold"}}>Web Applications</h2>
                    </div>
                </div>
            </div>
            <div className="row" style={{paddingTop: "60px", paddingBottom: "60px"}}>
                <div className="col centerItem">
                    <div>
                        <img className="webapplogin" src="/assets/display/WEB_APP_LOGIN_MACBOOK.png" alt="web app login template" />
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <div className="titlewebRow alignmentFix" >
                        <p className="text-white fontSize20">All the technologies and software used by our team in order to deliver high quality websites and web applications. </p>
                    </div>
                </div>
            </div>
            <div className="row" style={{paddingTop: "60px"}}>
                <div className="col-md-6 centerItemV">
                    <div>
                        <div className="row">
                            <div className="col-1 centerItem centerItemV ecomIcon">
                                <img src="/assets/icons/check.png" />
                            </div>
                            <div className="col">
                                <div className="">
                                    <p className="text-white ourFontBold fontSize24" style={{fontWeight: "bold"}}>Manage Quotes</p>
                                    <p className="text-white ourFont fontSize24">Give your team the ability to view how many leads are coming in, which ones you have responded to, and which potential clients are still waiting to hear from you</p>
                                </div>
                            </div>
                        </div>
                        <div className="row" style={{paddingTop: "30px"}}>
                            <div className="col-1 centerItem centerItemV ecomIcon">
                                <img src="/assets/icons/check.png" />
                            </div>
                            <div className="col">
                                <div className="">
                                    <p className="text-white ourFontBold fontSize24" style={{fontWeight: "bold"}}>Order Summary</p>
                                    <p className="text-white ourFont fontSize24">View all orders being placed on your website and their status (shipped out, not shipped out)</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 centerItem centerItemV">
                    <img className="portalImg" src="/assets/display/Portal_Presentation.png" alt="portal example" />
                </div>
            </div>
            <div className="row" style={{paddingTop: "60px"}}>
                <div className="col">
                    <div className="titlewebRow alignmentFix" >
                        <h1 className="ourPurple ourFontBold fontSize20" style={{fontWeight: "bold"}}>Web Development</h1>
                        <h2 className="text-white ourFontBold fontSize40" style={{fontWeight: "bold"}}>Payment Processing</h2>
                        <p className=" text-white fontSize20">If your web application requires payments - we’ve got you covered. We impliment technologies such as Stripe to make payments quick and easy. </p>
                    </div>
                </div>
            </div>
            <div className="row" style={{paddingTop: "60px"}}>
                <div className="col centerItem centerItemV">
                    <img className="checkoutImg" src="/assets/display/STRIPE_EX.png" alt="pay checkout example"/>
                </div>
            </div>
            <div className="row" style={{paddingTop: "60px", paddingBottom: "60px"}}>
                <div className="col centerItem">
                    <button className="purpleButton text-white ourFontBold fontSize24" style={{fontWeight: "bold"}} type="button">Get Started</button>
                </div>
            </div>
        </section>
    );
}