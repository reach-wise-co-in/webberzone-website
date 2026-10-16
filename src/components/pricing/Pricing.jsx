"use client";
import './Pricing.css'
import Topbar from "../../utilities/topbar/Topbar";
import { Link } from "@/lib/router";
import { Helmet } from "@/lib/Helmet";
import { SITE, MARKETING_FEATURES, MARKETING_PLANS, DEV_PLANS } from "@/lib/site";

function PlanCard({ plan, children }) {
  return (
    <div className="col-lg-4 col-md-6 mt-4">
      <div className={`border-pricing p-5 h-100 ${plan.id === "reach" ? "featured-plan" : ""}`}>
        {plan.id === "reach" && <span className="plan-badge sora">Most Popular</span>}
        <p className="sora text-muted font-14">{plan.tagline}</p>
        <h2 className='Sectional-heading'>{plan.name}</h2>
        <div className="d-flex align-items-baseline gap-2">
          {plan.priceNote && <span className="text-muted font-14">{plan.priceNote}</span>}
          <h3 className="text-orange mt-4 mb-3">{plan.price}</h3>
        </div>

        <div className="mt-4 pt-lg-2 mb-3">
          <Link to={`/contact?plan=${plan.id}`} className="btn-pricing w-100 text-black bg-none">Get Started</Link>
        </div>
        <div className='mt-4'>
          <ul className='list-unstyled check-list-item'>
            {children}
          </ul>
        </div>
      </div>
    </div>
  );
}

function Pricing() {
  return (
    <>
    <Helmet>
        <link rel="canonical" href={`${SITE.url}/pricing`} />
      </Helmet>
        <Topbar />

      <div className="hero-bg mb-4 ">
      <div className="hero-map-bg">
        <div className=" container pt-5 ">
          <div className="hero-content text-black pt-5">
            <div className="d-flex gap-2 pt-5 mt-5 align-items-center">
            <span className="sora">Home</span>

              <ul className="d-inline mb-2">
                <li className="sora text-muted">Pricing
                </li>
              </ul>

            </div>
          </div>
          <h1 className=" Sectional-heading mt-4 pt-3 ms-2 syne">PRICING AND PLANS</h1>
        </div>
      </div>
      <div className="bg-web-hero-img"></div>
    </div>

    <div className="container mt-5 pt-lg-5 mb-2">
    <h3 className="syne text-center">
    Social Media <span className="text-orange">& </span> Ads Marketing
        </h3>
    </div>

    <div className="container mb-5">
        <div className="row mt-3">
          {MARKETING_PLANS.map((plan) => (
            <PlanCard key={plan.id} plan={plan}>
              <li className='mt-2'>{plan.social}</li>
              {MARKETING_FEATURES.map((feature) => (
                <li key={feature} className={`mt-2 ${plan.includes.includes(feature) ? "" : "empty-list"}`}>{feature}</li>
              ))}
              <li className={`mt-2 ${plan.adBudget ? "" : "empty-list"}`}>{plan.adBudget || "Ad Budget"}</li>
            </PlanCard>
          ))}
        </div>
    </div>

    <div className="container mt-5 pt-lg-4 mb-2">
    <h3 className="syne text-center">
    Website <span className="text-orange">& </span> App Development
        </h3>
    </div>

    <div className="container mb-5 pb-lg-5">
        <div className="row mt-3 justify-content-center">
          {DEV_PLANS.map((plan) => (
            <PlanCard key={plan.id} plan={plan}>
              {plan.features.map((feature) => (
                <li key={feature} className='mt-2'>{feature}</li>
              ))}
            </PlanCard>
          ))}
        </div>
    </div>
    </>
  )
}

export default Pricing
