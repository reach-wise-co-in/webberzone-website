"use client";
import Topbar from '../../utilities/topbar/Topbar'
import './Service.css'
import { Link } from "@/lib/router"
import ServiceItems from './serviteitems/ServiceItems'
import { FaArrowRightLong } from "react-icons/fa6";
import { FaBullseye, FaMapMarkerAlt, FaVideo, FaChartLine } from "react-icons/fa";
import { IoSettingsSharp } from "react-icons/io5";
import { FaGlobe } from "react-icons/fa6";
import SaasApplication from './saasappliction/SaasApplication';
import { Helmet } from "@/lib/Helmet";
import { SITE } from "@/lib/site";

function Service() {
  return (
    <>
     <Helmet>
        <link rel="canonical" href={`${SITE.url}/services`} />
      </Helmet>
      <Topbar />

      <div className="hero-bg mb-4 ">
        <div className="hero-map-bg">
          <div className=" container pt-5 ">
            <div className="hero-content text-black pt-5">
              <div className="d-flex gap-2 pt-5 mt-5 align-items-center">
                <span className="sora">Home</span>

                <ul className="d-inline mb-2">
                  <li className="sora text-muted">Services
                  </li>
                </ul>

              </div>
            </div>
            <h1 className="  mt-4 pt-3 ms-2 syne">DIGITAL MARKETING &amp; WEB SERVICES</h1>
          </div>
        </div>
        <div className="bg-web-hero-img"></div>
      </div>

      <div className="container mt-5 pt-lg-5 pb-lg-5 mb-3 ">
        <div className="row ">
          <div className="col-lg-7 mt-2 col-md-7">
            <h4 className="syne">

              At {SITE.name}, we help US small and medium businesses get found, get noticed, and <span className="text-orange">get more leads</span> with social media, paid ads, SEO, and websites built to convert.
            </h4>
          </div>
          <div className="col-lg-2 col-md-2"></div>
          <div className="col-lg-3 mt-2 col-md-4 text-center">
            <Link to="/contact" className="btn btn-webberzone text-black sora">Get a Free Consultation</Link>
          </div>
        </div>
        <div className="mt-5 mb-4">
          <div className="small-hr-wrapper mt-2">
            <hr className="small-hr" />
            <hr className="full-hr" />
          </div>
        </div>
      </div>

      <div className="container mb-3">
        <ul>
          <li>What We Do</li>
        </ul>
        <h2 className=' sectional-heading syne mt-4 '>Marketing <span className="text-orange">Built for Growth</span> Helps You Win More Customers</h2>
        <p className='w-100  mt-4'>
          From scroll-stopping content to targeted Meta, Google, and Geo-Fencing ads, every service is focused on one goal:
          turning local attention into calls, bookings, and paying customers for your business.
        </p>
        <div className="mt-5">
          <ServiceItems />

          <div className="mt-4 d-flex justify-content-between flex-wrap">
            <div className="syne learn-more mt-3" >
              View Pricing <Link to='/pricing'><span className="arrow-icon ms-3"><FaArrowRightLong /></span></Link>
            </div>
            <div className="mt-3"> <Link to="/contact" className="btn btn-webberzone text-black btn-orange">Tell Us About Your Business</Link></div>
          </div>
          <div className="bg-web-service-img"></div>
          <div className="small-hr-wrapper mt-5">
            <hr className="small-hr" />
            <hr className="full-hr" />
          </div>
        </div>
      </div>

      <div className="container mt-5">
        <div className="d-flex justify-content-center">
        <ul className="d-inline mb-2">
                  <li className="sora text-muted">Let's Grow Together
                  </li>
                </ul>
        </div>

        <h2 className="sectonal-heading mt-3 text-center">
                Ready To Take The <span className="text-orange">Next Step?</span>
                </h2>

                <div className="mt-4 mb-4">
                  <div className="row">
                    <div className="col-lg-6 mt-3 p-3 ">
                     <div className="border-pricing p-5">
                     <h4 className='syne'>Get a Free Consultation</h4>
                      <p className="mt-3 mb-3 text-muted me-3 font-14">
                      Tell us about your business, your market, and your goals. We'll review where your leads come from today and recommend a practical plan to reach more local customers. Call {SITE.phoneDisplay} or email {SITE.email}.
                      </p>
                      <div className="syne learn-more mt-3 mb-4" >
                      Book a Free Call <Link to='/contact'> <span className="arrow-icon ms-3"><FaArrowRightLong /></span></Link>
            </div>
                     </div>
                    </div>
                    <div className="col-lg-6 mt-3 p-3 ">
              <div className="border-pricing p-5">
              <h4 className='syne'>See Our Plans</h4>
                      <p className="mt-3 mb-3 text-muted me-3 font-14">
                      Choose a monthly marketing plan that fits your budget, with clear deliverables and monthly reports. Need a new website or app instead? We build those too, with simple, upfront pricing.
                      </p>
                      <div className="syne learn-more mt-3 mb-4" >
                      View Pricing <Link to='/pricing'> <span className="arrow-icon ms-3"><FaArrowRightLong /></span></Link>
            </div>
              </div>
                    </div>
                  </div>
                </div>
              
      </div>

      <div className="container  pb-lg-4 mb-5">
                <div className="small-hr-wrapper">
                    <hr className="small-hr" />
                    <hr className="full-hr" />
                    <hr className="small-hr" />
                </div>
                <div className="help-section">
                    <div className="bg-web-img"></div>
                    <div className="container mt-5 pt-3">
                    <ul className="d-inline mb-2">
                  <li className="syne text-muted">Focused on Results
                  </li>
                </ul>
                        <div className="mt-3 pt-3 mb-3">
                            <h2 className='Sectional-heading'>Our Approach To <span className="text-orange"> Growing Your Business </span></h2>
                            <div className="container mt-3 pt-3">
                                <div className="row ">
                                    {/* =============col-1 of hlp===== */}
                                    <div className="col-lg-6 col-md-6 mt-4 ">
                                       

                                        <div className="row mt-5 " >
                                           
                                            <div className="d-flex mt-3 justify-content-evenly gap-4 flex-wrap">
                                                <div className="help-icon">
                                                <FaBullseye />
                                                </div>
                                                <div className="content">
                                                   <h5 className='syne help-heading'> <span className="text-orange syne me-3">01</span>  Goals &amp; Strategy </h5>
                                                   <p className='mt-4 syne help-text text-secondary'>
                                                   We start by learning your business, your ideal customers, and your goals, then build a marketing plan focused on leads and revenue.
                                                   </p>
                                                </div>
                                            </div>
                                        </div>


                                        <div className="row mt-3 " >
                                           
                                            <div className="d-flex mt-3 justify-content-evenly gap-4 flex-wrap">
                                                <div className="help-icon">
                                                <FaMapMarkerAlt />
                                                </div>
                                                <div className="content">
                                                   <h5 className='syne help-heading'> <span className="text-orange syne me-3">02</span> Local Targeting </h5>
                                                   <p className='mt-4 syne help-text text-secondary'>
                                                   We put your ads and content in front of the right people in your service area, using location, interest, and behavior targeting so your budget isn't wasted.
                                                   </p>
                                                </div>
                                            </div>
                                        </div>


                                        <div className="row mt-3 " >
                                           
                                            <div className="d-flex mt-3 justify-content-evenly gap-4 flex-wrap">
                                                <div className="help-icon">
                                                <FaVideo />
                                                </div>
                                                <div className="content">
                                                   <h5 className='syne help-heading'> <span className="text-orange syne me-3">03</span> Content That Converts</h5>
                                                   <p className='mt-4 syne help-text text-secondary'>
                                                   Our team creates posts, videos, and AI videos that showcase your business, build trust with local customers, and give people a clear reason to call, book, or buy.
                                                   </p>
                                                </div>
                                            </div>
                                        </div>

                                       
                                    </div>

                                    {/* =============col-2 of hlp===== */}
                                    <div className="col-lg-6 col-md-6  mt-4 ">
                                        

                                        <div className="row mt-5 " >
                                           
                                            <div className="d-flex mt-3 justify-content-evenly gap-4 flex-wrap">
                                                <div className="help-icon">
                                                <IoSettingsSharp />
                                                </div>
                                                <div className="content">
                                                   <h5 className='syne help-heading'> <span className="text-orange syne me-3">04</span> Launch &amp; Optimize </h5>
                                                   <p className='mt-4 syne help-text text-secondary'>
                                                   We launch your Meta, Google, and Geo-Fencing campaigns, then continuously test audiences, creatives, and budgets to improve cost per lead and return on ad spend.
                                                   </p>
                                                </div>
                                            </div>
                                        </div>

                                        
                                        
                                        <div className="row mt-3 " >
                                          
                                            <div className="d-flex mt-3 justify-content-evenly gap-4 flex-wrap">
                                                <div className="help-icon">
                                                <FaChartLine />
                                                </div>
                                                <div className="content">
                                                   <h5 className='syne help-heading'> <span className="text-orange syne me-3">05</span> Analytics &amp; Reports </h5>
                                                   <p className='mt-4 syne help-text text-secondary'>
                                                   Advanced analytics and easy-to-read monthly reports show exactly where your leads come from, what's working, and where we'll focus next, so you always know your ROI.
                                                   </p>
                                                </div>
                                            </div>
                                        </div>



                                        <div className="row mt-3 " >
                                           
                                            <div className="d-flex mt-3 justify-content-evenly gap-4 flex-wrap">
                                                <div className="help-icon">
                                                <FaGlobe />
                                                </div>
                                                <div className="content">
                                                   <h5 className='syne help-heading'> <span className="text-orange syne me-3">06</span>  Websites That Sell </h5>
                                                   <p className='mt-4 syne help-text text-secondary'>
                                                   We build modern, responsive websites and apps designed to turn visitors into customers, with fast load times, clear calls to action, and SEO built in from day one.
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
            <SaasApplication/>
    </>
  )
}

export default Service
