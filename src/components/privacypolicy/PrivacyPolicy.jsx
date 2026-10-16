"use client";
import  './PrivacyPolicy.css'
import Topbar from "../../utilities/topbar/Topbar";
import { Helmet } from "@/lib/Helmet";
import { SITE } from "@/lib/site";

function PrivacyPolicy() {
  return (
    <>
      <Helmet>
        <link rel="canonical" href={`${SITE.url}/privacypolicy`} />
      </Helmet>
        <Topbar />

<div className="hero-bg mb-4">
  <div className="hero-map-bg">
    <div className="container pt-5">
      <div className="hero-content text-black pt-5">
        <div className="d-flex gap-2 pt-5 mt-5 align-items-center">
          <span className="sora">Home</span>
          <ul className="d-inline mb-2">
            <li className="sora text-muted">Privacy Policy</li>
          </ul>
        </div>
      </div>
      <h1 className="Sectional-heading mt-4 pt-3 ms-2 syne">Our Privacy Policy</h1>
    </div>
  </div>
  <div className="bg-web-hero-img"></div>
</div>

<div className="container mt-5 mb-4 pt-lg-3">
    <div className="row">
      <div className="col-md-10 mx-auto">
        <h3 className="sectional-heading syne fw-bold">Privacy Policy</h3>
        <p className="text-muted">Last updated: October 16, 2026</p>

       <div>
       <h5 className='mt-5 mb-3'>Introduction</h5>
        <p>
        Welcome to {SITE.name}! We value your privacy and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website <a href={SITE.url} target='_blank' rel="noopener noreferrer">{SITE.url.replace(/^https?:\/\//, "")}</a> or contact us about our services. Please read this policy carefully.
          </p>
       </div>

       <div>
       <h5 className='mt-5 sora mb-3'>Information We Collect</h5>
        <p>
        <strong className='me-2'>Personal Data:</strong>
        When you fill out our contact form or reach out to us, we collect the information you provide, which may include your name, email address, phone number, business name, website, and the message you send us.
          </p>
          <p>
        <strong className='me-2'>Usage Data:</strong>
        We may also collect information on how the website is accessed and used. This data may include your IP address, browser type, device information, pages visited, and other usage statistics.
          </p>
       </div>

       <div>
       <h5 className='mt-5 mb-3'>How We Use Your Information</h5>
        <p>
        We use the collected information for various purposes, including:
          </p>
          <div>
            <ul>
                <li>To respond to your inquiries, questions, and requests</li>
                <li>To provide, manage, and improve our services</li>
                <li>To communicate with you about our services and plans</li>
                <li>To monitor the usage of our website and measure the performance of our advertising</li>
                <li>To detect, prevent, and address technical issues</li>
                <li>To improve our website and services</li>
            </ul>
          </div>
       </div>

       <div>
       <h5 className='mt-5 mb-3'>How We Share Your Information</h5>
        <p>
        We do not sell your personal information. We share your information only in the following circumstances:
          </p>
          <div>
            <ul>
                <li>
                <strong>Contact Form Messages:</strong> When you submit our contact form, the details you provide (name, email, phone, business, website, and message) are placed into a WhatsApp message to {SITE.name}, which opens in your WhatsApp app or WhatsApp Web for you to review and send. Nothing is sent until you choose to send it. WhatsApp processes the message under its own privacy policy.
                </li>
                <li>
                <strong>Service Providers:</strong> We may share your information with third-party service providers who assist us in operating our website, conducting our business, or serving you.
                </li>
                <li>
                <strong>Legal Requirements:</strong> We may disclose your information if required by law or in response to valid requests by public authorities.
                </li>

            </ul>
          </div>
       </div>

       <div>
       <h5 className='mt-5 mb-3'>Cookies, Analytics and Advertising</h5>
        <p>
        We use cookies and similar tracking technologies to enhance your browsing experience. Our website may also use advertising and analytics platforms, such as those provided by Meta and Google, which may use cookies, pixels, or similar technologies to understand how visitors use our website and to measure and improve our advertising. You can set your browser to refuse all cookies or to indicate when a cookie is being sent, and you can manage ad preferences through the settings provided by those platforms.
          </p>
       </div>

       <div>
       <h5 className='mt-5 mb-3'>Security</h5>
        <p>
        We take reasonable measures to protect your personal information from unauthorized access, use, or disclosure. However, no method of online transmission or electronic storage is completely secure.
          </p>
       </div>
       <div>
       <h5 className='mt-5 mb-3'>Links to Other Websites</h5>
        <p>
        Our website may contain links to other websites, including WhatsApp, that are not operated by us. We have no control over and assume no responsibility for the content, privacy policies, or practices of any third-party sites or services.
          </p>
       </div>
       <div>
       <h5 className='mt-5 mb-3'>Your Rights</h5>
        <p>
        Depending on your location, you may have the right to access, correct, or delete your personal information. You can contact us to exercise these rights.
          </p>
       </div>
       <div>
       <h5 className='mt-5 mb-3'>Changes to This Privacy Policy</h5>
        <p>
        We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the &quot;Last updated&quot; date. You are advised to review this Privacy Policy periodically for any changes.
          </p>
       </div>
       <div>
       <h5 className='mt-5 mb-3'>Contact Us</h5>
        <p>
        If you have any questions about this Privacy Policy, please contact us at:
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

export default PrivacyPolicy
