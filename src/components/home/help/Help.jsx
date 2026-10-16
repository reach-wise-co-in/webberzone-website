"use client";
import './Help.css'
import { RiTeamLine } from "react-icons/ri";
import { SiGoogleads } from "react-icons/si";
import { MdOutlineLocationOn, MdOutlineVideoLibrary } from "react-icons/md";
import { TbSeo } from "react-icons/tb";
import { FaLaptopCode } from "react-icons/fa";
function Help() {
    return (
        <>
            <div className="container  pb-lg-4 mb-5">
                <div className="small-hr-wrapper">
                    <hr className="small-hr" />
                    <hr className="full-hr" />
                    <hr className="small-hr" />
                </div>
                <div className="help-section">
                    <div className="bg-web-img"></div>
                    <div className="container mt-5 pt-3">
                        <div className="mt-3 pt-3 mb-3">
                            <h2 className='Sectional-heading'>How We Can <span className="text-orange"> Help You </span></h2>
                            <div className="container mt-3 pt-3">
                                <div className="row ">
                                    {/* =============col-1 of hlp===== */}
                                    <div className="col-lg-6 col-md-6 mt-4 ">
                                        <h4 className='syne'>Marketing Services</h4>

                                        <div className="row mt-5 " >
                                            <div className="small-hr-wrapper">
                                                <hr className="small-hr" />
                                                <hr className="full-hr" />
                                            </div>
                                            <div className="d-flex mt-3 justify-content-evenly gap-4 flex-wrap">
                                                <div className="help-icon">
                                                <RiTeamLine />
                                                </div>
                                                <div className="content">
                                                   <h5 className='syne help-heading'> <span className="text-orange syne me-3">01</span> Social Media Management </h5>
                                                   <p className='mt-4 syne help-text text-secondary'>
                                                   We plan, create and publish posts and videos every month so your business stays visible, builds trust and stays top of mind with local customers.
                                                   </p>
                                                </div>
                                            </div>
                                        </div>


                                        <div className="row mt-3 " >
                                            <div className="small-hr-wrapper">
                                                <hr className="small-hr" />
                                                <hr className="full-hr" />
                                            </div>
                                            <div className="d-flex mt-3 justify-content-evenly gap-4 flex-wrap">
                                                <div className="help-icon">
                                                <SiGoogleads />
                                                </div>
                                                <div className="content">
                                                   <h5 className='syne help-heading'> <span className="text-orange syne me-3">02</span> Meta & Google Ads </h5>
                                                   <p className='mt-4 syne help-text text-secondary'>
                                                   We build and manage Meta and Google Ads campaigns, handle your ad budget and optimize every week to bring in more qualified leads.
                                                   </p>
                                                </div>
                                            </div>
                                        </div>


                                        <div className="row mt-3 " >
                                            <div className="small-hr-wrapper">
                                                <hr className="small-hr" />
                                                <hr className="full-hr" />
                                            </div>
                                            <div className="d-flex mt-3 justify-content-evenly gap-4 flex-wrap">
                                                <div className="help-icon">
                                                <MdOutlineLocationOn />
                                                </div>
                                                <div className="content">
                                                   <h5 className='syne help-heading'> <span className="text-orange syne me-3">03</span>Geo-Fencing Ads</h5>
                                                   <p className='mt-4 syne help-text text-secondary'>
                                                   Geo-fencing ads reach people in the exact neighborhoods and locations you choose, putting your offer in front of nearby buyers ready to act.
                                                   </p>
                                                </div>
                                            </div>
                                        </div>

                                       
                                    </div>

                                    {/* =============col-2 of hlp===== */}
                                    <div className="col-lg-6 col-md-6  mt-4 ">
                                        <h4 className='syne ms-3'>Growth Solutions</h4>

                                        <div className="row mt-5 " >
                                            <div className="small-hr-wrapper">
                                                <hr className="small-hr" />
                                                <hr className="full-hr" />
                                            </div>
                                            <div className="d-flex mt-3 justify-content-evenly gap-4 flex-wrap">
                                                <div className="help-icon">
                                                <MdOutlineVideoLibrary />
                                                </div>
                                                <div className="content">
                                                   <h5 className='syne help-heading'> <span className="text-orange syne me-3">04</span> Content & AI Videos </h5>
                                                   <p className='mt-4 syne help-text text-secondary'>
                                                   Full content creation and eye-catching AI videos that stop the scroll, tell your story and give your ads and social pages content that converts.
                                                   </p>
                                                </div>
                                            </div>
                                        </div>

                                        
                                        
                                        <div className="row mt-3 " >
                                            <div className="small-hr-wrapper">
                                                <hr className="small-hr" />
                                                <hr className="full-hr" />
                                            </div>
                                            <div className="d-flex mt-3 justify-content-evenly gap-4 flex-wrap">
                                                <div className="help-icon">
                                                <TbSeo />
                                                </div>
                                                <div className="content">
                                                   <h5 className='syne help-heading'> <span className="text-orange syne me-3">05</span> SEO & Analytics  </h5>
                                                   <p className='mt-4 syne help-text text-secondary'>
                                                   SEO that helps customers find you on Google, plus advanced analytics and monthly reports so you always know what is working and your ROI.
                                                   </p>
                                                </div>
                                            </div>
                                        </div>



                                        <div className="row mt-3 " >
                                            <div className="small-hr-wrapper">
                                                <hr className="small-hr" />
                                                <hr className="full-hr" />
                                            </div>
                                            <div className="d-flex mt-3 justify-content-evenly gap-4 flex-wrap">
                                                <div className="help-icon">
                                                <FaLaptopCode />
                                                </div>
                                                <div className="content">
                                                   <h5 className='syne help-heading'> <span className="text-orange syne me-3">06</span>  Website & App Development </h5>
                                                   <p className='mt-4 syne help-text text-secondary'>
                                                   Modern, responsive websites and apps built to load fast, look great on every device and turn your ad traffic into calls, bookings and sales.
                                                   </p>
                                                </div>
                                            </div>
                                        </div>



                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Help
