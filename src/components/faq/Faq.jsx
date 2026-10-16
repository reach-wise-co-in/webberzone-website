"use client";
import Topbar from '../../utilities/topbar/Topbar'
import './Faq.css'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Tab1 from './tabcontent/Tab1';
import Tab2 from './tabcontent/Tab2';
import Tab3 from './tabcontent/Tab3';
import Tab4 from './tabcontent/Tab4';
import { Helmet } from "@/lib/Helmet";
import { SITE } from "@/lib/site";


function Faq() {
  return (
    <>
     <Helmet>
        <link rel="canonical" href={`${SITE.url}/faq`} />
      </Helmet>
    <Topbar/>

    <div className="hero-bg mb-4 ">
      <div className="hero-map-bg">
        <div className=" container pt-5 ">
          <div className="hero-content text-black pt-5">
            <div className="d-flex gap-2 pt-5 mt-5 align-items-center">
            <span className="sora">Home</span>
            
              <ul className="d-inline mb-2">
                <li className="sora text-muted">FAQs
                </li>
              </ul>
          
            </div>
          </div>
          <h1 className=" Sectional-heading mt-4 pt-3 ms-2 syne">FAQS</h1>
        </div>
      </div>
      <div className="bg-web-hero-img"></div>
    </div>

    <div className="container mt-5 pt-lg-3 pb-lg-5 mb-5 ">
    <Tabs
    defaultActiveKey="General"
    id="uncontrolled-tab-example"
    className="mb-3 custom-tabs d-flex flex-wrap justify-content-around"
  >
    <Tab eventKey="General" title="General" className='mt-2'>
      <Tab1 />
    </Tab>
    <Tab eventKey="Pricing & Plans" title="Pricing & Plans" className='mt-2'>
      <Tab2/>
    </Tab>
    <Tab eventKey="Services" title="Services" className='mt-2'>
      <Tab3/>
    </Tab>
    <Tab eventKey="Getting Started" title="Getting Started" className='mt-2'>
      <Tab4/>
    </Tab>
  </Tabs>
  
    </div>

    </>
  )
}

export default Faq
