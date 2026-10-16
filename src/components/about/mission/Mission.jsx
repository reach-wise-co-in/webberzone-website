"use client";
import './Mission.css'
const aboutImg2 = "/about-img-2.png";

function Mission() {
  return (
    <>
       <div className="container-fluid mt-4  bg-collaborate ">
                <div className="container">
                    <div className="pt-5 pb-5">
                        <div className="bg-web-collaborate-img"></div>
                        <div className="row">
                            <div className="col-lg-5 ">
                                <div className="parent-about-img">
                                    <div className="bg-circle-img"></div>
                                    <div className="img-firm-container">
                                        <img src={aboutImg2} alt="Growing a business with digital marketing" className="about-img" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-1"></div>
                            <div className="col-lg-6 pt-5 ps-2">
                                <ul>
                                    <li className="syne ">Why We Exist</li>
                                </ul>
                                <h2 className='Sectional-heading syne mt-4 me-2 mb-3'>Our Mission </h2>
                                <p className="text-muted mt-3">
                                Our mission is to give small and medium businesses the kind of marketing that used to be reserved for big brands. We create the content, run the ads, build the websites and report on the results, with affordable plans and responsive support, so you can focus on serving your customers while we keep new ones coming in.

                                </p>
                                <div className="row">
                                    <div className="col-md-6 col-lg-6 mt-2 col-sm-6">
                                        <ul className=" mt-3">
                                            <li className="mt-2"> <span className=" sora">Generate more leads.</span></li>
                                            <li className="mt-2"><span className=" sora">Reach local customers.</span></li>
                                            <li className="mt-2"><span className=" sora">Grow with clear ROI.</span></li>
                                        </ul>
                                    </div>
                                    <div className="col-md-6 col-lg-6 mt-2 col-sm-6 align-items-end"> </div>                   
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </>
  )
}

export default Mission
