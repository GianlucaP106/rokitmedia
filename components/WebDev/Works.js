

export default function Works() {
    return(
        <section className="workSection">
            <div className="row" style={{paddingTop: "100px"}}>
                <div className="col">
                    <div className="titlewebRow alignmentFix">
                        <h1 className="ourPurple ourFontBold fontSize20" style={{fontWeight: "bold"}}>Web Development</h1>
                        <h2 className="text-white ourFontBold fontSize40" style={{fontWeight: "bold"}}>How It Works</h2>
                    </div>
                </div>
            </div>
            <div className="workContainer">
                <div className="row workRow worksColLeft">
                    <div className="col-lg-8 worksColLeft">
                        <img src="/assets/images/How it Works Step 1 (IDEA).png" alt="how it works idea" className="worksImg" />
                        <p className="ourFont centerItemV workTextPos text-white fontSize24">STEP 1: Our team will ask you to give a few ideas in regards to your ideal image of your website or web application. (Requirements, images, user experience, etc.)</p>
                    </div>
                </div>
                <div className="row workRow worksColRight">
                    <div className="col-lg-8 worksColRight">
                        <p className="ourFont centerItemV workTextPos text-white fontSize24" id="orderFix1">STEP 2: In this step, we hand the pen and paper off to our skilled designers who will design the user interface of your website</p>
                        <img src="/assets/images/How it Works Step 1 (IDEA).png" alt="how it works idea" className="worksImg" id="orderFix2" />
                    </div>
                </div>
                <div className="row workRow worksColLeft">
                    <div className="col-lg-8 worksColLeft">
                        <img src="/assets/images/How it works feedback icon.png" alt="how it works idea" className="worksImg" />
                        <p className="ourFont centerItemV workTextPos text-white fontSize24">STEP 3: Once a design has been created, it will be shared with you and your team for feedback</p>
                    </div>
                </div>
                <div className="row workRow worksColRight">
                    <div className="col-lg-8 worksColRight">
                        <p className="ourFont centerItemV workTextPos text-white fontSize24" id="orderFix1">STEP 4: Upon reviewing feedback and making any necessary changes, the project will then be transfered to our development team where they will turn your ideas into reality</p>
                        <img src="/assets/images/How it works development icon.png" id="orderFix2" alt="how it works idea" className="worksImg"/>
                    </div>
                </div>
                <div className="row workRow worksColLeft">
                    <div className="col-lg-8 worksColLeft">
                        <img src="/assets/images/How it works functionality icon.png" alt="how it works idea" className="worksImg" />
                        <p className="ourFont centerItemV workTextPos text-white fontSize24">STEP 5: Our development team brings the design to life in this step, enhancing the functionality of the site and create proper navigation within the site to provide your consumers with a smooth and efficient journey</p>
                    </div>
                </div>
                <div className="row workRow worksColRight">
                    <div className="col-lg-8 worksColRight">
                        <p className="ourFont centerItemV workTextPos text-white fontSize24" id="orderFix1">STEP 6: Website launch!</p>
                        <img src="/assets/images/How it works website launch.png" id="orderFix2" alt="how it works idea" className="worksImg" />
                    </div>
                </div>
                <div className="row workRow worksColLeft">
                    <div className="col-lg-8 worksColLeft">
                        <img src="/assets/images/how it works maintenance icon.png" alt="how it works idea" className="worksImg" />
                        <div>
                            <p className="ourFont centerItemV workTextPos text-white fontSize24">STEP 7: Your new website will now be monitored to ensure everything is running properly</p>
                            <p className="ourFont centerItemV workTextPos ourPurple fontSize24">*contact us for more information on website maintenance</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row" style={{paddingTop: "60px", paddingBottom: "150px"}}>
                <div className="col-sm-3"></div>
                <div className="col-sm-6 centerText">
                    <button className="purpleButton text-white ourFontBoldX fontSize24 workButton">Request A quote Today</button>
                </div>
                <div className="col-sm-3 centerItemV rokitIconWorkContainer">
                    <img className="rokitIconWork rokitIcon" src="/assets/icons/rokitIcon.png" alt="rokit media icon"/>
                </div>
            </div>
        </section>
    );
}