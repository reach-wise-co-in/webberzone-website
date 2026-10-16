"use client";
import "./Collaborate.css"
import { GiThink } from "react-icons/gi";
import { SiStartrek } from "react-icons/si";
import { BsGraphUpArrow } from "react-icons/bs";
import { BiLogoGraphql } from "react-icons/bi";
import { Link } from "@/lib/router";

function Collaborate() {
    return (
        <>
            <div className="container-fluid bg-collaborate ">
                <div className="container">
                    <div className="pt-5 pb-5">
                        <div className="bg-web-collaborate-img"></div>
                        <ul>
                            <li className="syne">How We Grow Your Business</li>
                        </ul>
                        <h3 className='Sectional-heading syne mt-3 mb-3'><span className="text-orange"> Our </span> Process  </h3>
                        <div className="row mt-5">
                            <div className="col-lg-3 col-md-6 col-sm-12 ">
                                <div className="d-flex gap-3 align-items-center">
                                    <div className="collaborate-icon">
                                    <GiThink />
                                    </div>
                                    <h5 className='syne help-heading'>  Understand Your Market </h5>
                                </div>
                                <p className="text-muted mt-4">
                                We start by learning your business, your ideal customers and your service area. Then we build a clear marketing plan around your goals, whether that is more calls, more bookings or more foot traffic.
                                </p>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-12 ">
                                <div className="d-flex gap-3 align-items-center">
                                    <div className="collaborate-icon">
                                    <SiStartrek />
                                    </div>
                                    <h5 className='syne help-heading'>Launch Smart </h5>
                                </div>
                                <p className="text-muted mt-4">
                                We launch your social media content, Meta and Google Ads and geo-fencing campaigns with precise local targeting, so your budget reaches the people most likely to buy from you, starting from day one.
                                </p>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-12 ">
                                <div className="d-flex gap-3 align-items-center">
                                    <div className="collaborate-icon">
                                        <BsGraphUpArrow />
                                    </div>
                                    <h5 className='syne help-heading'>  Optimize for ROI </h5>
                                </div>
                                <p className="text-muted mt-4">
                                We track every click, call and lead with advanced analytics. Ads, audiences and creatives are tested and refined continuously so you get more leads for every dollar you spend. 
                                </p>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-12 ">
                                <div className="d-flex gap-3 align-items-center">
                                    <div className="collaborate-icon">
                                        <BiLogoGraphql />
                                    </div>
                                    <h5 className='syne help-heading'> Scale What Works </h5>
                                </div>
                                <p className="text-muted mt-4">
                                With clear monthly reports and priority support, you always know how your marketing is performing. When a campaign wins, we scale it up to bring in even more customers as your business grows.
                                </p>
                            </div>

                        </div>
                        <div className="mt-4 d-flex justify-content-between flex-wrap">
                            <div className="syne learn-more mt-2" >
                                {/* Learn More <span className="arrow-icon ms-3"><FaArrowRightLong /></span> */}
                            </div>
                            <div className="mt-2"> <Link to="/pricing" className="btn btn-webberzone text-black btn-orange">View Plans</Link></div>
                        </div>
                        <div className="bg-web-bottom-img"></div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Collaborate
