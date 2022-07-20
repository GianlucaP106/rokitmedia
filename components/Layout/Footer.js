

export default function Footer() {
    return(
        <section className="footerSection">
            <div className="row footerRowTop">
                <div className="col-6 footerBorderTop" style={{paddingLeft: "0"}}>
                    <img className="footerLogo" src="/assets/logos/rokitLogo.png" />
                </div>
                <div className="col-6 myAlignRight footerBorderTop">
                    <p className="ourFontBold fontSize24 text-white" style={{fontWeight: "bold", margin: "0", marginRight: "30px", marginTop: "5px"}} id="questionsFooter">Questions?</p>
                    <button className="purpleButton"><p className="ourFontBold fontSize24 text-white" style={{fontWeight: "bold", margin: "0"}}>FAQ</p></button>
                </div>
            </div>
            <div className="row footerRowBottom" style={{paddingTop: "30px"}}>
                <div className="col" style={{paddingLeft: "0"}}>
                    <h2 className="text-white fontSize24">Contact Us</h2>
                    <h2 className="text-white fontSize24" style={{paddingTop: "30px"}}>Email</h2>
                    <p className="ourFontBold fontSize20 text-white footerSizeMobile" style={{textDecoration: "underline 1px white"}}>info.rokitmedia@gmail.com</p>
                    <h2 className="text-white fontSize24" style={{paddingTop: "20px"}}>Telephone</h2>
                    <p className="ourFontBold fontSize20 text-white footerSizeMobile">(514) 402 8282</p>
                    <p className="ourFontBold fontSize20 text-white footerSizeMobile">(514) 583 0042</p>
                </div>
                <div className="col-6 centerText">
                    <p className="ourFontBold fontSize20 text-white">Home</p>
                    <p className="ourFontBold fontSize20 text-white">Services</p>
                    <p className="ourFontBold fontSize20 text-white">About</p>
                    <p className="ourFontBold fontSize20 text-white">Contact Us</p>
                    <div className="centerItem" style={{paddingTop: "20px"}}>
                        <img className="socialMediaIcon" src="/assets/icons/instagramIcon.png" alt="instagram icon" />
                        <img className="socialMediaIcon" style={{marginLeft: "10px", marginRight: "10px"}} src="/assets/icons/linkedinIcon.png" alt="linkedin icon"/>
                        <img className="socialMediaIcon" src="/assets/icons/facebookIcon.png"  alt="facebook icon"/>
                    </div>
                </div>
                <div className="col-3" id="footerCol"></div>
            </div>
            <div className="row footerRowTop" style={{paddingBottom: "50px"}}>
                <div className="col footerRokitCol footerBorderBottom" style={{paddingBottom: "20px="}}>
                    <div className="footerRokit">
                        <img className="rokitIcon" src="/assets/icons/rokitIcon.png" alt="rokit media icon"/>
                    </div>
                </div>
            </div>
        </section>
    );
}