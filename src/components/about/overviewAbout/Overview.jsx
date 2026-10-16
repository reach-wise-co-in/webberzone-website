"use client";
import "./Overview.css"
const aboutImg = "/about-img-1.png";
import { SiTicktick } from "react-icons/si";
import { SITE } from "@/lib/site";
function Overview() {
    return (
        <>
            <div className="container-fluid  bg-collaborate ">
                <div className="container">
                    <div className="pt-5 pb-5">
                        <div className="bg-web-collaborate-img"></div>
                        <div className="row">
                            <div className="col-lg-5 ">
                                <div className="parent-about-img">
                                    <div className="bg-circle-img"></div>
                                    <div className="img-firm-container">
                                        <img src={aboutImg} alt="WebberZone digital marketing team" className="about-img" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-1"></div>
                            <div className="col-lg-6 pt-5 ps-2">
                                <ul>
                                    <li className="syne ">Who We Are</li>
                                </ul>
                                <h2 className='Sectional-heading syne mt-4 me-2 mb-3'>We Help <span className="text-orange"> Small and Medium Businesses </span> Get More Leads and Customers Online. </h2>
                                <p className="text-muted mt-3">
                                {SITE.name} is a digital marketing and web agency for US businesses. We combine social media, Meta and Google Ads, geo-fencing, SEO and high-converting websites to put your business in front of local customers ready to buy.
                                </p>
                                <div className="row">
                                    <div className="col-md-6 col-lg-6 mt-2 col-sm-6">
                                        <ul className="list-unstyled mt-3">
                                            <li><span className="icon-font"><SiTicktick /></span> <span className="ms-2 sora">More Qualified Leads</span></li>
                                            <li className="mt-2"><span className="icon-font"><SiTicktick /></span> <span className="ms-2 sora">Local Targeting</span></li>
                                            <li className="mt-2"><span className="icon-font"><SiTicktick /></span><span className="ms-2 sora">Measurable ROI</span></li>
                                            <li className="mt-2"><span className="icon-font"><SiTicktick /></span><span className="ms-2 sora">Monthly Reports</span></li>
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

export default Overview
