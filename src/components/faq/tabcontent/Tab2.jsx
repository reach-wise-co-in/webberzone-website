"use client";

import Accordion from 'react-bootstrap/Accordion';
import { Link } from "@/lib/router";
import { useState } from 'react';

function Tab2() {
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
              <span className="text-orange">Pricing & Plans</span> Simple Plans For Growing Businesses.
            </h2>
            <p className="sora text-muted mt-3">
              See what each plan includes and find the one that fits your business.
            </p>
          </div>
          <div className="col-lg-7 mt-2">
            <Accordion activeKey={activeKey} onSelect={handleSelect}>
              <Accordion.Item eventKey="0">
                <Accordion.Header className={`accordion-header ${activeKey === "0" ? "accordion-active" : ""}`}>
                  <h5 className='syne'>What marketing plans do you offer?</h5>
                </Accordion.Header>
                <Accordion.Body className='sora text-muted'>
                  We offer three marketing plans: the Basic Plan at $299, the Reach Plan at $599 and the All-in-One Plan at $799. Full details are on our <Link to="/pricing" className="text-orange">Pricing</Link> page.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header className={`accordion-header ${activeKey === "1" ? "accordion-active" : ""}`}>
                  <h5 className='syne'>What is included in the Basic Plan ($299)?</h5>
                </Accordion.Header>
                <Accordion.Body className='sora text-muted'>
                  The Basic Plan includes Social Media Management (10 Posts + 5 Videos), Full Content Creation, Geo Fencing Ads, AI Videos and Priority Support.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header className={`accordion-header ${activeKey === "2" ? "accordion-active" : ""}`}>
                  <h5 className='syne'>What is included in the Reach Plan ($599)?</h5>
                </Accordion.Header>
                <Accordion.Body className='sora text-muted'>
                  The Reach Plan includes Social Media Management (15 Posts + 7 Videos) and everything in the Basic Plan, plus Advanced Analytics, Meta Ads and Google Ads, with $1.5k ads.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="3">
                <Accordion.Header className={`accordion-header ${activeKey === "3" ? "accordion-active" : ""}`}>
                  <h5 className='syne'>What is included in the All-in-One Plan ($799)?</h5>
                </Accordion.Header>
                <Accordion.Body className='sora text-muted'>
                  The All-in-One Plan includes Social Media Management (20 Posts + 10 Videos) and everything in the Reach Plan, plus SEO and a Monthly Report, with $2.5k ads.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="4">
                <Accordion.Header className={`accordion-header ${activeKey === "4" ? "accordion-active" : ""}`}>
                  <h5 className='syne'>Do you offer website and app development plans?</h5>
                </Accordion.Header>
                <Accordion.Body className='sora text-muted'>
                  Yes. Our Basic Web plan starts at $299 and covers Website Development with a modern, responsive website. Our App & Web plan starts at $2,999 and covers both App Development and Website Development.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="5">
                <Accordion.Header className={`accordion-header ${activeKey === "5" ? "accordion-active" : ""}`}>
                  <h5 className='syne'>What about billing, contract terms or ad spend details?</h5>
                </Accordion.Header>
                <Accordion.Body className='sora text-muted'>
                  For billing, contract terms, ad budgets or anything not listed on our Pricing page, please <Link to="/contact" className="text-orange">contact us for details</Link>.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
        </div>
      </div>
    </>
  );
}

export default Tab2;
