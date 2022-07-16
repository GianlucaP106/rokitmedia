import ServiceCard from "./ServiceCard";

export default function Services() {
    return(
        <section>
            <div className="row">
                <div className="col centerText">
                    <h1 className="fontSize32">Services Offered</h1>
                </div>
            </div>
            <div className="row" style={{paddingTop: "50px"}}>
                <div className="col-md centerItem">
                    <ServiceCard imgLink="/assets/images/webdevServices.png" imgAlt="Web Dev image" title={"Web Development"} />
                </div>
                <div className="col-md centerItem">
                    <ServiceCard imgLink="/assets/images/uixServices.png" imgAlt="UI/UX design image" title={"UI/UX Design"} />
                </div>
                <div className="col-md centerItem">
                    <ServiceCard imgLink="/assets/images/marketingService.png" imgAlt="Marketing Image" title={"Digital Marketing"} />
                </div>
            </div>
        </section>
    );
}