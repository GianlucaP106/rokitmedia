import ContactForm from "../Global/ContactForm";


export default function Contact() {
    return (
        <section className="contactSection">
            <div className="row" style={{paddingTop: "60px"}}>
                <div className="col centerText">
                    <h1 className="ourFontBold fontSize40 text-white underlineText" style={{fontWeight: "bold"}}>Contact Us</h1>
                    <p className="ourFont fontSize24 text-white">The search ends here - all your design and marketing needs in one place. Let us know about your upcoming projects!</p>
                </div>
            </div>
            <div className="row" style={{paddingTop: "100px", paddingBottom: "60px"}}>
                <div className="col-lg-6 centerItemV">
                    <div>
                        <div className="row">
                            <div className="col" style={{padding: "0px 25px 0px 60px"}}>
                                <h4 className="ourFontBold fontSize40 text-white" style={{fontWeight: "bold"}}>Allow us to use our digital tools to help scale your business</h4>
                                <p className="ourFont fontSize24 text-white" style={{paddingTop: "25px"}}>At Rokit Media, our teams main objective is ensuring our customers are always satisfied with the work we provide them with. </p>
                                <p className="ourFont fontSize24 text-white" style={{paddingBottom: "25px", paddingTop: "25px"}}>Whether it be a small project, or a large project, each customer is a top priority to us. We ensure our customers a seamless experience working with us.</p>
                                <p className="ourFontBold fontSize24 text-white" style={{fontWeight: "bold"}}>We look forward to hearig from you!</p>
                            </div>
                        </div>
                        <div className="row" style={{paddingTop: "60px"}}>
                            <div className="col" style={{paddingLeft: "60px"}}>
                                <img className="rokitIcon" src="/assets/icons/rokitIcon.png" alt="rokit media"/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 centerItem contactColMobile">
                    <ContactForm />
                </div>
            </div>
        </section>
    );
}