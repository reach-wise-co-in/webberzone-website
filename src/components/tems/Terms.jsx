"use client";
import Topbar from "../../utilities/topbar/Topbar";
import { Helmet } from "@/lib/Helmet";
import { SITE } from "@/lib/site";
import { Link } from "@/lib/router";

function Terms() {
  return (
    <>
      <Helmet>
        <link rel="canonical" href={`${SITE.url}/terms`} />
      </Helmet>
           <Topbar />

<div className="hero-bg mb-4">
  <div className="hero-map-bg">
    <div className="container pt-5">
      <div className="hero-content text-black pt-5">
        <div className="d-flex gap-2 pt-5 mt-5 align-items-center">
          <span className="sora">Home</span>
          <ul className="d-inline mb-2">
            <li className="sora text-muted">Terms &amp; Conditions</li>
          </ul>
        </div>
      </div>
      <h1 className="Sectional-heading mt-4 pt-3 ms-2 syne">Terms And Conditions</h1>
    </div>
  </div>
  <div className="bg-web-hero-img"></div>
</div>

<div className="container mt-5 mb-4 pt-lg-3">
    <div className="row">
      <div className="col-md-10 mx-auto">
        <h3 className="sectional-heading syne fw-bold">Terms & Conditions</h3>
        <p className="text-muted">Last updated: October 16, 2026</p>

       <div>
       <h5 className='mt-5 mb-3'>Introduction</h5>
        <p>
        Welcome to {SITE.name}! By accessing or using our website <a href={SITE.url} target='_blank' rel="noopener noreferrer">{SITE.url.replace(/^https?:\/\//, "")}</a>, you agree to comply with and be bound by these Terms & Conditions. If you do not agree with these terms, please do not use our website.
          </p>
       </div>

       <div>
       <h5 className='mt-5 sora mb-3'>Our Services</h5>
        <p>
        {SITE.name} provides digital marketing and web services, including social media management, content creation, AI videos, Meta Ads, Google Ads, Geo-Fencing Ads, SEO, analytics and reporting, and website and app development. Information on this website, including plan descriptions and prices, is provided for general information. The specific scope, pricing, billing, and terms of any engagement will be confirmed with you directly before work begins. Please contact us for details.
          </p>
       </div>

       <div>
       <h5 className='mt-5 sora mb-3'>No Guarantee of Results</h5>
        <p>
        Marketing and advertising results depend on many factors outside our control, including market conditions and the policies of third-party platforms such as Meta and Google. While we work to help your business reach its goals, we do not guarantee any specific number of leads, sales, rankings, or other outcomes.
          </p>
       </div>

       <div>
       <h5 className='mt-5 sora mb-3'>Intellectual Property</h5>
        <p>
        All content, trademarks, and other intellectual property on our website are owned by {SITE.name} or its licensors. You may not use, reproduce, distribute, or create derivative works based on any content without our express written permission.
          </p>

       </div>



       <div>
       <h5 className='mt-5 mb-3'>Information You Submit</h5>

          <div>
            <ul>
                <li>
                <strong>Accuracy:</strong> You agree that the information you submit through our contact form or other channels is accurate and that you are authorized to share it.
                </li>
                <li>
                <strong>Acceptable Use:</strong> You agree not to use our website or contact channels to send unlawful, misleading, abusive, or spam content. We reserve the right to ignore or remove any such submissions.
                </li>

            </ul>
          </div>
       </div>

       <div>
       <h5 className='mt-5 mb-3'>Third-Party Links and Services</h5>
        <p>
        Our website may contain links to third-party websites and services, such as WhatsApp. These links are provided for your convenience, and we are not responsible for the content or practices of any linked sites or services.
          </p>
       </div>

       <div>
       <h5 className='mt-5 mb-3'>Disclaimers</h5>

          <div>
            <ul>
                <li>
                <strong>No Warranty:</strong> Our website is provided “as is” and “as available” without any warranties, express or implied. We do not guarantee that the website will be available at all times or that it will be free from errors or viruses.
                </li>
                <li>
                <strong>Limitation of Liability:</strong> To the fullest extent permitted by law, {SITE.name} is not liable for any indirect, incidental, special, or consequential damages arising from the use of our website or any content provided.
                </li>

            </ul>
          </div>
       </div>

       <div>
       <h5 className='mt-5 mb-3'>Indemnification</h5>
        <p>
        You agree to indemnify and hold harmless {SITE.name} from any claims, liabilities, damages, losses, or expenses arising out of your misuse of our website or any violation of these Terms & Conditions.
          </p>
       </div>
       <div>
       <h5 className='mt-5 mb-3'>Privacy</h5>
        <p>
        Your use of our website is also governed by our <Link to="/privacypolicy" className="text-orange">Privacy Policy</Link>, which explains how we collect and use your information.
          </p>
       </div>
       <div>
       <h5 className='mt-5 mb-3'>Changes to These Terms</h5>
        <p>
        We may update these Terms & Conditions from time to time. We will notify you of any changes by posting the new terms on this page. Your continued use of our website constitutes acceptance of the revised terms.
          </p>
       </div>
       <div>
       <h5 className='mt-5 mb-3'>Contact Us</h5>
        <p>
        If you have any questions about these Terms & Conditions, please contact us at:
          </p>
          <h6 className="mt-3 mb-3">{SITE.name}</h6>
          <p><strong className="text-orange">Email:</strong> <a href={`mailto:${SITE.email}`}>{SITE.email}</a></p>
          <p><strong className="text-orange">Phone:</strong> <a href={`tel:${SITE.phoneE164}`}>{SITE.phoneDisplay}</a></p>

       </div>
          </div>
          </div>

</div>
    </>
  )
}

export default Terms
