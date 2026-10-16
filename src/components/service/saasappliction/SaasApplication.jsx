"use client";
import './SaasApplication.css'
import { IoIosStats } from "react-icons/io";
import { FaFacebook, FaInstagram, FaGoogle, FaYoutube, FaMapMarkerAlt, FaSearch } from "react-icons/fa";
import { BsLaptop } from "react-icons/bs";
import { Link } from "@/lib/router";

function SaasApplication() {
    return (
        <>
            <div className="container-fluid bg-footer-saas">
                <div className="semicircle"></div> {/* Add the semicircle element */}
                <div className="container mt-4">
                    <div className="bg-web-saas-img "></div>
                    <div className="d-flex justify-content-center">
                        <ul className="d-inline mb-2 mt-5 pt-lg-3">
                            <li className="sora text-white">Everywhere Your Customers Are</li>
                        </ul>
                    </div>
                </div>
                <h2 className="sectonal-heading mt-4 mb-4 text-white text-center">
                    Platforms &amp; <span className="text-orange">Channels</span> We Manage
                </h2>
                <div className="container text-soft w-50 text-center">
                    We manage your marketing across the platforms that matter most to US consumers, so your business shows up wherever people are searching, scrolling, and buying.
                </div>

                <div className="container mt-4 pb-4">
                    <div className="row">
                        <div className="col-lg-3 col-md-6 mt-3 ">
                            <h5 className='syne help-heading text-white'> <span className="text-orange syne me-3"><FaFacebook /></span>  Facebook Ads &amp; Pages </h5>
                        </div>
                        <div className="col-lg-3 col-md-6 mt-3 ">
                            <h5 className='syne help-heading text-white'> <span className="text-orange syne me-3"><FaInstagram /></span>  Instagram Posts &amp; Reels </h5>
                        </div>
                        <div className="col-lg-3 col-md-6 mt-3 ">
                            <h5 className='syne help-heading text-white'> <span className="text-orange syne me-3"><FaGoogle /></span>  Google Search Ads </h5>
                        </div>
                        <div className="col-lg-3 col-md-6 mt-3 ">
                            <h5 className='syne help-heading text-white'> <span className="text-orange syne me-3"><FaYoutube /></span>  YouTube &amp; Video Ads </h5>
                        </div>

                    </div>

                    <div className="row mt-3">
                        <div className="col-lg-3 col-md-6 mt-3 ">
                            <h5 className='syne help-heading text-white'> <span className="text-orange syne me-3"><FaMapMarkerAlt /></span>  Geo-Fencing Campaigns </h5>
                        </div>
                        <div className="col-lg-3 col-md-6 mt-3 ">
                            <h5 className='syne help-heading text-white'> <span className="text-orange syne me-3"><FaSearch /></span>  Local SEO </h5>
                        </div>
                        <div className="col-lg-3 col-md-6 mt-3 ">
                            <h5 className='syne help-heading text-white'> <span className="text-orange syne me-3"><BsLaptop /></span>  Websites &amp; Apps </h5>
                        </div>
                        <div className="col-lg-3 col-md-6 mt-3 ">
                            <h5 className='syne help-heading text-white'> <span className="text-orange syne me-3"><IoIosStats /></span>  Analytics &amp; Reports </h5>
                        </div>

                    </div>
                    <div className="mt-5 pt-lg-2 d-flex justify-content-center"> <Link to="/contact" className="btn btn-webberzone text-white btn-orange">Tell Us About Your Business</Link></div>
                </div>
            </div>
        </>
    )
}

export default SaasApplication
