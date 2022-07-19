

export default function Title() {
    return(
        <section className="titleSection">
            <div className="row" style={{paddingTop: "125px"}}>
                <div className="col-md-6">
                    <div style={{padding: "130px 0px 0px 50px"}}>
                        <h1 className="fontSize40 text-white ourFontBold" style={{fontWeight: "bold"}}>Start Your New Website, Design, or Marketing Campaign Today!</h1>
                        <p className="ourFont fontSize24 text-white" style={{paddingBottom: "20px", paddingTop: "20px"}}>At Rokit Media, our professional web development team will work alongside you during the development of your web application - and post-launch.</p>
                        <button className="purpleButton text-white fontSize24">Get Started!</button>
                    </div>
                </div>
                <div className="col-md-6 centerItem">
                    <img className="displayImg" src="/assets/display/homeImg.png" alt="rokit media web development"/>
                </div>
            </div>
        </section>
    );
}