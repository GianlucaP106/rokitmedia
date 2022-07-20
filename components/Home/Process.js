

export default function Process() {
    return(
        <section className="processSection">
            <div className="row" style={{paddingTop: '100px'}}>
                <div className="col">
                    <h1 className="ourFontBold fontSize40 text-white">Our Proven Process</h1>
                </div>
            </div>
            <div className="row" style={{paddingTop: "60px"}}>
                <div className="col-lg-6">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="processCard">
                                <img className="processImg" src="/assets/images/reqQuote.png" alt=""/>
                                <h3 className="fontSize24 ourFont text-white" style={{fontWeight: 'bold', padding: "10px 0px 10px 0px"}}>1. Request a quote</h3>
                                <p className="ourFont fontSize24 text-white">Fill out our quote form here!</p>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="processCard">
                                <img className="processImg" src="/assets/images/meeting.png" alt=""/>
                                <h3 className="fontSize24 ourFont text-white" style={{fontWeight: 'bold', padding: "10px 0px 10px 0px"}}>2. Schedule a meeting</h3>
                                <p className="ourFont fontSize24 text-white">After reviewing your wuote submission, our team will contact you to schedule a meeting.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="processCard">
                                <img className="processImg" src="/assets/images/contract.png" alt=""/>
                                <h3 className="fontSize24 ourFont text-white" style={{fontWeight: 'bold', padding: "10px 0px 10px 0px"}}>3. Sign contract</h3>
                                <p className="ourFont fontSize24 text-white">Rokit Media will send a contract agreement that highlights details discussed from our meeting.</p>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="processCard">
                                <img className="processImg" src="/assets/images/work.png" alt=""/>
                                <h3 className="fontSize24 ourFont text-white" style={{fontWeight: 'bold', padding: "10px 0px 10px 0px"}}>4. Time to work!</h3>
                                <p className="ourFont fontSize24 text-white">Our team starts to work on your project!</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row" style={{paddingTop: "50px"}}>
                <div className="col centerItem">
                    <img className="rokitIcon" src="/assets/icons/rokitIcon.png" alt="rokit media icon"/>
                </div>
            </div>
        </section>
    );
}