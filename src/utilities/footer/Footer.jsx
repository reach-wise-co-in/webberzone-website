"use client";
import './Footer.css'
import { FaHeart } from "react-icons/fa";
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "@/lib/router";
import { SITE, whatsappLink } from "@/lib/site";
function Footer() {
  return (
    <>
    <div className="container-fluid bg-footer pt-5 ">
      <div className="container bg-map pt-4 mb-5 mt-5 pb-4 ">
    <div className="bg-web-footer-img "></div>
    <div className="d-flex align-items-center pt-3">
        <div className="row">
          <div className="col-lg-4 text-white  mt-2 ">
            <div className="logo"><img src="/webberzone-logo.svg" alt="WebberZone logo" className='img-fluid' /></div>
            <p className="mt-4 text-footer">
            WebberZone helps US businesses grow with social media management, Meta &amp; Google ads, geo-fencing campaigns, AI videos, SEO and high-converting websites.
            </p>
          </div>
          <div className="col-lg-4 text-white mt-2 ps-3 pe-3 pt-3 footer-col-center">
            <ul className="list-unstyled d-flex flex-column align-items-lg-center text-lg-center gap-2 m-0">
              <li><a href={`tel:${SITE.phoneE164}`} className="footer-link">{SITE.phoneDisplay}</a></li>
              <li><a href={`mailto:${SITE.email}`} className="footer-link">{SITE.email}</a></li>
            </ul>
          </div>
          <div className="col-lg-4 text-white mt-2 pt-3 px-4 pb-4 footer-col-right">
  <div className="d-flex flex-column rounded-pill">
    <p className='ms-2 me-2'>
    Ready to get more leads? Chat with us on WhatsApp.
    </p>
    <Button href={whatsappLink("Hi WebberZone, I would like to know more about your services.")} target="_blank" rel="noopener noreferrer" className="w-100 rounded-pill btn-footer">Chat on WhatsApp</Button>
  </div>
</div>
        </div>
        </div>
        <div className="small-hr-wrapper mt-5 pt-lg-3">
                    <hr className="small-hr" />
                    <hr className="full-hr" />
                    <hr className="small-hr" />
                </div>
                <div className="d-flex justify-content-between flex-wrap">
  <div className="social-media">
    <ul className="d-flex flex-wrap list-unstyled p-0 m-0 gap-4 mt-2">
      <li><Link to="/services" className="footer-link">Services</Link></li>
      <li><Link to="/pricing" className="footer-link">Pricing</Link></li>
      <li><Link to="/contact" className="footer-link">Contact</Link></li>
    </ul>
  </div>
  <div className="quick-links">
    <ul className="d-flex flex-wrap list-unstyled p-0 m-0 gap-4 mt-2">
      <li><Link to="/terms" className="footer-link">Terms & Conditions</Link></li>
      <li><Link to="/privacypolicy" className="footer-link">Privacy Policy</Link></li>
      <li><Link to="/sitemap" className="footer-link">Sitemap</Link></li>
    </ul>
  </div>
</div>

      </div>
      <div className="copy-right bg-bottom-footer pt-3 pb-3">
        <p className="text-secondary text-center">Copyright © {new Date().getFullYear()} <span className='text-danger ms-2 me-2'></span> {SITE.name}. All rights reserved.</p>
      </div>
    </div>
    </>
  )
}

export default Footer
