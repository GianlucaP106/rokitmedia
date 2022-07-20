import ServiceCard from "./ServiceCard";

export default function Services() {
    return(
        <section className="servicesSection">
            {/* <div className="row">
                <div className="col centerText">
                    <h1 className="fontSize32">Services Offered</h1>
                </div>
            </div> */}
            <div className="row" style={{paddingTop: "100px"}}>
                <div className="col-md centerItem serviceCardContainer">
                    <ServiceCard imgLink="/assets/images/webdevServices.png" imgAlt="Web Dev image" title={"Web Development"} pageLink={"/web-development"} />
                </div>
                <div className="col-md centerItem serviceCardContainer">
                    <ServiceCard imgLink="/assets/images/uixServices.png" imgAlt="UI/UX design image" title={"UI/UX Design"} pageLink={""} />
                </div>
                <div className="col-md centerItem serviceCardContainer2">
                    <ServiceCard imgLink="/assets/images/marketingService.png" imgAlt="Marketing Image" title={"Digital Marketing"} pageLink={""} />
                </div>
            </div>
            <div className="row" style={{paddingTop: "150px"}}>
                <div className="col-md-6 centerItem centerItemV">
                    <img className="displayImg" src="/assets/display/productivity.png" alt="web development and design image"/>
                </div>
                <div className="col-md-6">
                    <div style={{paddingLeft: "12px"}}>
                        <h3 className="ourFontBold fontSize40 text-white">Why Choose Rokit Media</h3>
                        <p className="ourFont fontSize24 text-white">Our team consists of professional web/graphic designers, software engineers, and marketers that reflect Rokit Media’s core values:</p>
                        <ul className="ourFont fontSize24 text-white">
                            <li >Team Player</li>
                            <li>Hard Work</li>
                            <li>Customer Satisfaction</li>
                        </ul>
                        <div className="centerItem" style={{width: '100%', paddingTop: "15px", paddingBottom: "30px"}}>
                            <img className="rokitIcon" src="/assets/icons/rokitIcon.png" /> 
                        </div>
                        <p className="ourFont fontSize24 text-white">Rokit Media delivers all web development, graphic design, logo designs, digital marketing, social media marketing (Instagram marketing, Facebook marketing, LinkedIn marketing, etc.), SEO, Google Ads, and promotional videos in a professional and timely manner.</p>
                    </div>
                </div>
            </div>
            <div className="row" style={{paddingTop: "50px"}}>
                <div className="col centerItem">
                    <button className="purpleButton ourFont fontSize24 text-white" style={{width: "405px", height: "100px"}}>Request a quote today!</button>
                </div>
            </div>
        </section>
    );
}