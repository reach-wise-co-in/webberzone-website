"use client";
import Topbar from "../../utilities/topbar/Topbar";
import { Link } from "@/lib/router";

const PAGES = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Us" },
  {
    to: "/services",
    label: "Services",
    children: [
      { to: "/services/1", label: "Social Media Management" },
      { to: "/services/2", label: "Meta & Google Ads" },
      { to: "/services/3", label: "Geo-Fencing Ads" },
      { to: "/services/4", label: "Content & AI Videos" },
      { to: "/services/5", label: "SEO" },
      { to: "/services/6", label: "Website & App Development" },
    ],
  },
  { to: "/pricing", label: "Pricing" },
  { to: "/contact", label: "Contact Us" },
  { to: "/faq", label: "FAQs" },
  { to: "/privacypolicy", label: "Privacy Policy" },
  { to: "/terms&conditions", label: "Terms & Conditions" },
  { to: "/sitemap", label: "Sitemap" },
];

function Sitemap() {
  return (
    <>

    <Topbar />

<div className="hero-bg mb-4">
  <div className="hero-map-bg">
    <div className="container pt-5">
      <div className="hero-content text-black pt-5">
        <div className="d-flex gap-2 pt-5 mt-5 align-items-center">
          <span className="sora">Home</span>
          <ul className="d-inline mb-2">
            <li className="sora text-muted">Sitemap</li>
          </ul>
        </div>
      </div>
      <h2 className="Sectional-heading mt-4 pt-3 ms-2 syne"> Sitemap </h2>
    </div>
  </div>
  <div className="bg-web-hero-img"></div>
</div>

<div className="container mt-5 mb-5 pt-lg-3">
  <div className="row">
    <div className="col-md-10 mx-auto">
      <h3 className="sectional-heading syne fw-bold mb-4">All Pages</h3>
      <ul className="sora">
        {PAGES.map((page) => (
          <li key={page.to} className="mb-3">
            <Link to={page.to} className="text-orange">{page.label}</Link>
            {page.children && (
              <ul className="mt-2">
                {page.children.map((child) => (
                  <li key={child.to} className="mb-2">
                    <Link to={child.to} className="text-muted">{child.label}</Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  </div>
</div>
    </>
  )
}

export default Sitemap
