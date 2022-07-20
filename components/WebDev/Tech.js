


export default function Tech() {
    return(
        <section className="techSection" style={{ paddingTop: "15px"}}>
            <div className="row">
                <div className="col">
                    <div className="titlewebRow alignmentFix" >
                        <h1 className="ourPurple ourFontBold fontSize20" style={{fontWeight: "bold"}}>Web Development</h1>
                        <h2 className="text-white ourFontBold fontSize40" style={{fontWeight: "bold"}}>Technologies We Use</h2>
                        <p className=" text-white fontSize20">All the technologies and software used by our team in order to deliver high quality websites and web applications. </p>
                    </div>
                </div>
            </div>
            <div className="row" style={{paddingTop: "60px"}}>
                <div className="col-6 myAlignRight" style={{borderRight: "2px solid #925FF9"}}>
                    <div className="techCol" style={{paddingRight: "20px"}}>
                        <div className="row">
                            <div className="col centerText">
                                <h3 className="ourFontBold fontSize32 text-white techTitle" style={{textDecoration: "underline 1px white", textUnderlineOffset: "5px"}}>Designers</h3>
                            </div>
                        </div>
                        <div className="row" style={{paddingTop: "50px"}}>
                            <div className="col-md-6 centerText">
                                <div className="centerText" style={{padding: "10px"}}>
                                    <img className="figmaImg" src="/assets/logos/figmaLogo.png" alt="figma logo"/>
                                    <p className="text-white fontSize24 techText ourFont" style={{marginTop: "15px"}}>Figma</p>
                                </div>
                            </div>
                            <div className="col-md-6 centerText">
                                <div className="centerText" style={{padding: "10px"}}>
                                    <img className="techImg" src="/assets/logos/photoshopLogo.png" alt="photoshop logo"/>
                                    <p className="text-white fontSize24 techText ourFont" style={{marginTop: "15px"}}>Photoshop</p>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6 centerText">
                                <div className="centerText" style={{padding: "10px"}}>
                                    <img className="techImg" src="/assets/logos/adobeLogo.png" alt="adobe illustrator logo"/>
                                    <p className="text-white fontSize24 techText ourFont" style={{marginTop: "15px"}}>Adobe Illustrator</p>
                                </div>
                            </div>
                            <div className="col-md-6 centerText">
                                <div className="centerText" style={{padding: "10px"}}>
                                    <img className="techImg" src="/assets/logos/trelloLogo.png" alt="trello logo"/>
                                    <p className="text-white fontSize24 techText ourFont" style={{marginTop: "15px"}}>Trello</p>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6 centerText">
                                <div className="centerText" style={{padding: "10px"}}>
                                    <img className="techImg" src="/assets/logos/webflowLogo.png" alt="webflow logo"/>
                                    <p className="text-white fontSize24 techText ourFont" style={{marginTop: "15px"}}>WebFlow</p>
                                </div>
                            </div>               
                        </div>
                    </div>
                </div>
                <div className="col-6 myAlignLeft">
                    <div className="techCol" style={{ paddingLeft: "20px"}}>
                        <div className="row">
                            <div className="col centerText">
                                <h3 className="ourFontBold fontSize32 text-white techTitle" style={{textDecoration: "underline 1px white", textUnderlineOffset: "5px"}}>Developers</h3>
                            </div>
                        </div>
                        <div className="row" style={{paddingTop: "50px"}}>
                            <div className="col-md-6 centerText">
                                <div className="centerText" style={{padding: "10px"}}>
                                    <img className="techImg" src="/assets/logos/nextLogo.png" alt="next.js logo"/>
                                    <p className="text-white fontSize24 techText ourFont" style={{marginTop: "15px"}}>Next.js</p>
                                </div>
                            </div>
                            <div className="col-md-6 centerText">
                                <div className="centerText" style={{padding: "10px", paddingLeft: "30px"}}>
                                    <img className="techImg" src="/assets/logos/vercelLogo.png" alt="vercel logo"/>
                                    <p className="text-white fontSize24 techText ourFont" style={{marginTop: "15px"}}>Vercel</p>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6 centerText">
                                <div className="centerText" style={{padding: "10px"}}>
                                    <img className="techImg" src="/assets/logos/reactLogo.png" alt="react.js logo"/>
                                    <p className="text-white fontSize24 techText ourFont" style={{marginTop: "15px"}}>React.js</p>
                                </div>
                            </div>
                            <div className="col-md-6 centerText">
                                <div className="centerText" style={{padding: "10px", paddingLeft: "30px"}}>
                                    <img className="bootstrapImg" src="/assets/logos/bootstrapLogo.svg" alt="bootstrap logo"/>
                                    <p className="text-white fontSize24 techText ourFont" style={{marginTop: "15px"}}>BootStrap</p>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6 centerText">
                                <div className="centerText" style={{padding: "10px"}}>
                                    <img className="techImg" src="/assets/logos/nodejsLogo.svg" alt="node.js logo"/>
                                    <p className="text-white fontSize24 techText ourFont" style={{marginTop: "15px"}}>Node.js</p>
                                </div>
                            </div>               
                            <div className="col-md-6 centerText">
                                <div className="centerText" style={{padding: "10px", paddingLeft: "30px"}}>
                                    <img className="mongoDBImg" src="/assets/logos/mongodbLogo.png" alt="mongodb logo"/>
                                    <p className="text-white fontSize24 techText ourFont" style={{marginTop: "15px"}}>MongoDB</p>
                                </div>
                            </div>               
                        </div>
                    </div>
                </div>
            </div>
        </section>
    ); 
}