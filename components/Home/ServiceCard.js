

export default function ServiceCard(props) {
    return(
        <div className="serviceCard">
            <div className="row">
                <div className="col centerItem">
                    <div className="servicesRow">
                        <img src={props.imgLink} alt={props.imgAlt} />
                    </div>
                </div>
            </div>
            <div className="row" style={{paddingBottom: "20px", paddingTop: "20px"}}>
                <div className="col centerText">
                    <h2 className="fontSize32 ourFontBold text-white">{props.title}</h2>
                </div>
            </div>
            <div className="row" style={{margin: "0", paddingLeft: "0"}}>
                <div className="col" style={{paddingLeft: "0"}}>
                    <a href="" >
                        <div className="servicesLearnMore centerText">
                            <p className="fontSize24 ourFontBold" style={{margin: "0", color: "#ffff"}}>Learn More</p>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    );
}