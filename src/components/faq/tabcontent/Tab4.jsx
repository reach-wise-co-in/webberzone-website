"use client";
import Accordion from 'react-bootstrap/Accordion';
import { SITE, whatsappLink } from "@/lib/site";
import { Link } from "@/lib/router";
import { useState } from 'react';

function Tab4() {
  const [activeKey, setActiveKey] = useState(null);
  const handleSelect = (eventKey) => {
    setActiveKey(eventKey === activeKey ? null : eventKey);
  };

  return (
    <>
      <div className="container mt-5 pt-lg-3">
        <div className="row mt-4 justify-content-between">
          <div className="col-lg-4 mt-2">
            <h2 className='syne'>
              <span className="text-orange">Getting Started</span> Start Growing With Us.
            </h2>
            <p className="sora text-muted mt-3">
              Here is how to get in touch, what to share with us, and how to choose the right plan.
            </p>
          </div>
          <div className="col-lg-7 mt-2">
            <Accordion activeKey={activeKey} onSelect={handleSelect}>
              <Accordion.Item eventKey="0">
                <Accordion.Header className={`accordion-header ${activeKey === "0" ? "accordion-active" : ""}`}>
                  <h5 className='syne'>How do I get started?</h5>
                </Accordion.Header>
                <Accordion.Body className='sora text-muted'>
                  Send us your details through our <Link to="/contact" className="text-orange">Contact</Link> page or message us on <a href={whatsappLink(`Hi ${SITE.name}, I'd like to get started.`)} target="_blank" rel="noopener noreferrer" className="text-orange">WhatsApp</a>. We will get back to you to understand your business and goals and recommend a plan.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header className={`accordion-header ${activeKey === "1" ? "accordion-active" : ""}`}>
                  <h5 className='syne'>What information should I share when I reach out?</h5>
                </Accordion.Header>
                <Accordion.Body className='sora text-muted'>
                  It helps to share your name, business name, website (if you have one), the services you are interested in and your goals, such as getting more leads or growing your social media.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header className={`accordion-header ${activeKey === "2" ? "accordion-active" : ""}`}>
                  <h5 className='syne'>Which plan should I choose?</h5>
                </Accordion.Header>
                <Accordion.Body className='sora text-muted'>
                  It depends on your goals. The Basic Plan is a good starting point for social media and content, the Reach Plan adds Meta Ads, Google Ads and Advanced Analytics, and the All-in-One Plan adds SEO and a Monthly Report. If you are unsure, contact us and we will help you decide.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="3">
                <Accordion.Header className={`accordion-header ${activeKey === "3" ? "accordion-active" : ""}`}>
                  <h5 className='syne'>Can I talk to someone before signing up?</h5>
                </Accordion.Header>
                <Accordion.Body className='sora text-muted'>
                  Of course. You can call us at <a href={`tel:${SITE.phoneE164}`} className="text-orange">{SITE.phoneDisplay}</a>, email <a href={`mailto:${SITE.email}`} className="text-orange">{SITE.email}</a> or chat with us on WhatsApp.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
        </div>
      </div>
    </>
  );
}

export default Tab4;
