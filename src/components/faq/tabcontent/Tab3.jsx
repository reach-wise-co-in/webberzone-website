"use client";
import Accordion from 'react-bootstrap/Accordion';
import { Link } from "@/lib/router";
import { useState } from 'react';

function Tab3() {
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
              <span className="text-orange">Our Services</span> Marketing, Ads, SEO & Development.
            </h2>
            <p className="sora text-muted mt-3">
              Learn more about the services we provide and how they work together to grow your business.
            </p>
          </div>
          <div className="col-lg-7 mt-2">
            <Accordion activeKey={activeKey} onSelect={handleSelect}>
              <Accordion.Item eventKey="0">
                <Accordion.Header className={`accordion-header ${activeKey === "0" ? "accordion-active" : ""}`}>
                  <h5 className='syne'>What does Social Media Management include?</h5>
                </Accordion.Header>
                <Accordion.Body className='sora text-muted'>
                  We plan and publish posts and videos for your business on social media. The number of posts and videos depends on your plan, and Full Content Creation and AI Videos are included in all marketing plans.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header className={`accordion-header ${activeKey === "1" ? "accordion-active" : ""}`}>
                  <h5 className='syne'>Which advertising platforms do you run ads on?</h5>
                </Accordion.Header>
                <Accordion.Body className='sora text-muted'>
                  We run Meta Ads, Google Ads and Geo-Fencing Ads. Geo-Fencing Ads let you reach people in specific locations, such as around your business or a competitor&apos;s location. Meta Ads and Google Ads are included in the Reach and All-in-One plans.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header className={`accordion-header ${activeKey === "2" ? "accordion-active" : ""}`}>
                  <h5 className='syne'>How do your ads help me get leads?</h5>
                </Accordion.Header>
                <Accordion.Body className='sora text-muted'>
                  We create and manage ad campaigns that put your business in front of people likely to need your services and encourage them to contact you. The results for each business vary, and we keep you informed on how your campaigns are performing.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="3">
                <Accordion.Header className={`accordion-header ${activeKey === "3" ? "accordion-active" : ""}`}>
                  <h5 className='syne'>How do you report on results?</h5>
                </Accordion.Header>
                <Accordion.Body className='sora text-muted'>
                  The Reach Plan includes Advanced Analytics, and the All-in-One Plan adds a Monthly Report, so you can see how your marketing is performing. Contact us for details on what reporting fits your plan.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="4">
                <Accordion.Header className={`accordion-header ${activeKey === "4" ? "accordion-active" : ""}`}>
                  <h5 className='syne'>Do you build websites and apps?</h5>
                </Accordion.Header>
                <Accordion.Body className='sora text-muted'>
                  Yes. We build modern, responsive websites and develop apps. See our <Link to="/services/website-app-development" className="text-orange">Website & App Development</Link> page to learn more.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
        </div>
      </div>
    </>
  );
}

export default Tab3;
