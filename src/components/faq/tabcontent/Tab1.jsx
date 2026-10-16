"use client";
import './Tab1.css';
import Accordion from 'react-bootstrap/Accordion';
import { SITE, whatsappLink } from "@/lib/site";
import { Link } from "@/lib/router";
import { useState } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';
function Tab1() {
  const [activeKey, setActiveKey] = useState(null);
  const handleSelect = (eventKey) => {
    setActiveKey(eventKey === activeKey ? null : eventKey);
  };

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <>
      <div className="container mt-5 pt-lg-3">
        <div className="row mt-4 justify-content-between">
          <div className="col-lg-4 mt-2" data-aos="fade-up" >
            <h2 className='syne'>
              <span className="text-orange">{SITE.name}</span> Digital Marketing & Web Agency.
            </h2>
            <p className="sora text-muted mt-3">
              Find quick answers about who we are, who we work with, and how to reach us.
            </p>
          </div>
          <div className="col-lg-7 mt-2">
            <Accordion activeKey={activeKey} onSelect={handleSelect}>
              <Accordion.Item eventKey="0">
                <Accordion.Header className={`accordion-header ${activeKey === "0" ? "accordion-active" : ""}`}>
                  <h5 className='syne'>What is {SITE.name}?</h5>
                </Accordion.Header>
                <Accordion.Body className='sora text-muted'>
                  {SITE.name} is a digital marketing and web agency. We help small and medium-sized businesses in the US grow and get more leads through social media management, content creation, AI videos, paid ads (Meta Ads, Google Ads and Geo-Fencing Ads), SEO, and website and app development.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header className={`accordion-header ${activeKey === "1" ? "accordion-active" : ""}`}>
                  <h5 className='syne'>Who do you work with?</h5>
                </Accordion.Header>
                <Accordion.Body className='sora text-muted'>
                  We work with small and medium-sized businesses in the US that want a stronger online presence and a steady flow of leads from social media, paid advertising and search.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header className={`accordion-header ${activeKey === "2" ? "accordion-active" : ""}`}>
                  <h5 className='syne'>What services does {SITE.name} offer?</h5>
                </Accordion.Header>
                <Accordion.Body className='sora text-muted'>
                  Our services include Social Media Management, Full Content Creation, AI Videos, Meta Ads, Google Ads, Geo-Fencing Ads, SEO, Advanced Analytics, Monthly Reports, Priority Support, Website Development and App Development. You can explore each one on our <Link to="/services" className="text-orange">Services</Link> page.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="3">
                <Accordion.Header className={`accordion-header ${activeKey === "3" ? "accordion-active" : ""}`}>
                  <h5 className='syne'>How can I contact {SITE.name}?</h5>
                </Accordion.Header>
                <Accordion.Body className='sora text-muted'>
                  You can fill out the form on our <Link to="/contact" className="text-orange">Contact</Link> page, message us on <a href={whatsappLink(`Hi ${SITE.name}, I'd like to know more about your services.`)} target="_blank" rel="noopener noreferrer" className="text-orange">WhatsApp</a>, email us at <a href={`mailto:${SITE.email}`} className="text-orange">{SITE.email}</a>, or call us at <a href={`tel:${SITE.phoneE164}`} className="text-orange">{SITE.phoneDisplay}</a>.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
        </div>
      </div>
    </>
  );
}

export default Tab1;
