"use client";
import { useParams } from "@/lib/router";
import Topbar from '../../../utilities/topbar/Topbar';
import './SingleService.css';
import { Helmet } from "@/lib/Helmet";
import { SITE } from "@/lib/site";

function SingleService() {
    const serviceItems = [
        {
            serviceid: 1,
            servicename: "Social Media Management",
            servicedesc: "Consistent posts and videos that keep your business top of mind.",
            image:"https://designsvalley.com/wp-content/uploads/2024/02/core-components-digital-marketing-1024x585.webp",
            heading1: "Stay Top of Mind With Local Customers",
            text1: "Your customers are on Facebook and Instagram every day, and your business should be too. Our Social Media Management service takes the work off your plate: we plan your content calendar, create on-brand posts and short-form videos, write captions that speak to your audience, and publish consistently so your pages always look active and professional. We keep your messaging aligned with your offers and promotions, highlight what makes your business different, and give people a clear next step, whether that is calling you, booking an appointment, or visiting your website. Instead of scrambling to post when you find a spare minute, you get a steady, polished social presence that builds trust and keeps your brand in front of the people most likely to buy from you.",
            text2: "For small and medium businesses in the US, social media is often the first place a potential customer checks before picking up the phone. An outdated or empty page can quietly cost you leads, while a consistent, engaging presence shows that you are active, trustworthy, and ready to serve. Regular posts and videos keep you visible to past customers, encourage referrals, and give your paid ads a credible page to send people to. Social content also gives you a direct line to your community, helping you announce offers, showcase real work, and answer questions quickly. When it is managed strategically and measured with clear analytics, social media becomes a reliable part of how your business attracts new customers and brings existing ones back.",
            process: [
                {
                    step: 1,
                    text: "Brand and Audience Discovery",
                    detail: "We learn about your business, services, ideal customers, and service area, then review your current pages to see what is working and where the opportunities are."
                },
                {
                    step: 2,
                    text: "Content Calendar",
                    detail: "We plan a monthly calendar of posts and videos built around your offers, seasonal promotions, and the questions your customers ask most, so every post has a purpose."
                },
                {
                    step: 3,
                    text: "Creation and Publishing",
                    detail: "Our team creates the post designs, videos, and captions, then publishes on a consistent schedule so your pages stay active without taking time away from running your business."
                },
                {
                    step: 4,
                    text: "Reporting and Improvement",
                    detail: "We track reach, engagement, and inquiries, share the results in your monthly report, and adjust the content plan based on what your audience responds to."
                }
            ]
        },
        {
            serviceid:2,
            servicename:"Meta & Google Ads",
            servicedesc:"Targeted ad campaigns that turn your budget into real leads.",
            image:"https://designsvalley.com/wp-content/uploads/2024/02/core-components-digital-marketing-1024x585.webp",
            heading1: "Turn Ad Spend Into Real Leads",
            text1: "Meta Ads and Google Ads let you reach people at the exact moment they are ready to buy, but only when the campaigns are built and managed the right way. We set up and run campaigns across Facebook, Instagram, Google Search, and YouTube, targeting the people in your area who match your ideal customer. We write the ad copy, create the visuals, set up conversion tracking, and manage your ad budget carefully so every dollar is working toward calls, form fills, and bookings.",
            text2: "Paid advertising is one of the fastest ways for a small or medium business to generate new leads, because you can reach motivated customers right away instead of waiting months for organic growth. Google Ads puts you in front of people actively searching for your services, while Meta Ads helps you reach the right local audience on Facebook and Instagram before they even start looking. With proper tracking in place, you can see exactly what you are paying per lead and which campaigns bring in customers. That visibility lets us shift budget toward what works and cut what does not, so your advertising is focused on return on investment rather than guesswork.",
            process: [
                {
                    step: 1,
                    text: "Goals and Budget Planning",
                    detail: "We define what a lead means for your business, your target cost per lead, and a monthly ad budget that fits your goals and your market."
                },
                {
                    step: 2,
                    text: "Audience and Keyword Research",
                    detail: "We research the search terms your customers use and build Meta audiences based on location, interests, and behavior so your ads reach the right people."
                },
                {
                    step: 3,
                    text: "Ad Creation",
                    detail: "We write compelling ad copy and create images and videos that highlight your offer and give people a clear reason to click, call, or book."
                },
                {
                    step: 4,
                    text: "Tracking Setup",
                    detail: "We set up conversion tracking for calls, forms, and bookings so every campaign can be measured by the leads it actually produces."
                },
                {
                    step: 5,
                    text: "Launch and Daily Management",
                    detail: "We launch your campaigns and monitor them closely, managing bids, budgets, and placements to keep spending efficient."
                },
                {
                    step: 6,
                    text: "Testing and Optimization",
                    detail: "We continuously test new headlines, creatives, and audiences, moving budget toward the ads that deliver the best cost per lead."
                },
                {
                    step: 7,
                    text: "Monthly Reporting",
                    detail: "You receive a clear monthly report showing spend, leads, cost per lead, and our recommendations for the month ahead."
                }
            ]
        },
        {
            serviceid:3,
            servicename:"Geo-Fencing Ads",
            servicedesc:"Reach customers in the exact neighborhoods and locations you serve.",
            heading1: "Target Customers Exactly Where They Are",
            image:"https://designsvalley.com/wp-content/uploads/2024/02/core-components-digital-marketing-1024x585.webp",
            text1: "Geo-Fencing Ads let you draw a virtual boundary around specific locations, such as neighborhoods, competitor storefronts, event venues, or your own service area, and show your ads to people's mobile devices when they are inside it. Instead of advertising to an entire city, you focus your budget on the places where your best customers live, work, and shop. We help you choose the right locations, create ads that match the moment, and keep showing your message to interested people after they leave the area, so your business stays in front of them while they decide where to spend their money.",
            text2: "For local businesses, location is everything. Geo-Fencing gives you a level of precision that traditional advertising cannot match, putting your offer in front of people based on where they physically are. A home service company can target specific ZIP codes and neighborhoods, a restaurant can reach people near a busy shopping district, and a retailer can reach shoppers visiting nearby competitors. Because your ads only reach people in the areas you choose, less of your budget is wasted on audiences who would never become customers. Combined with clear reporting, Geo-Fencing becomes a focused, measurable way to grow your local customer base and stand out in your market.",
            process: [
                {
                    step: 1,
                    text: "Location Strategy",
                    detail: "We identify the neighborhoods, ZIP codes, competitor locations, and venues where your ideal customers spend their time."
                },
                {
                    step: 2,
                    text: "Fence Setup and Targeting",
                    detail: "We build precise geo-fences around those locations and set targeting rules so your ads reach the right people at the right time."
                },
                {
                    step: 3,
                    text: "Ad Creative and Launch",
                    detail: "We create location-relevant ads with a strong offer and a clear call to action, then launch the campaign within your managed budget."
                },
                {
                    step: 4,
                    text: "Measurement and Refinement",
                    detail: "We track impressions, clicks, and leads by location, then refine your fences and budget to focus on the areas that perform best."
                }
            ]
        },
        {
            serviceid:4,
            servicename:"Content Creation & AI Videos",
            servicedesc:"Scroll-stopping content and AI videos that tell your story.",
            heading1: "Content That Gets Noticed",
            image:"https://www.georgeanimatrix.com/blog/wp-content/uploads/2023/08/jpeg-optimizer_14-1.jpg",
            text1: "Great marketing starts with great content. Our Full Content Creation service covers everything your marketing needs: branded social posts, short-form videos, ad creatives, captions, and copy that speaks directly to your customers. We also produce AI videos, a fast and cost-effective way to create professional, engaging video content without the time and expense of a traditional shoot. Every piece is designed around your brand and your offers, with a clear message and a call to action that moves viewers toward contacting your business.",
            text2: "People decide in seconds whether to stop scrolling or keep going, and video is one of the most effective ways to capture that attention on platforms like Facebook, Instagram, and YouTube. Strong, consistent content helps a small business look established and trustworthy, explains your services clearly, and gives your ads more impact. AI videos make it practical to produce fresh video content on a regular schedule, so you can test new messages, promote seasonal offers, and keep your pages active without a large production budget. When your content is built to connect with real customers, every post and ad works harder to bring in leads and grow your business.",
            process: [
                {
                    step: 1,
                    text: "Creative Brief",
                    detail: "We learn your brand voice, services, offers, and audience so every piece of content sounds like you and speaks to the right customers."
                },
                {
                    step: 2,
                    text: "Concepts and Scripts",
                    detail: "We develop content ideas, hooks, and video scripts focused on capturing attention in the first few seconds and leading to a clear call to action."
                },
                {
                    step: 3,
                    text: "Production",
                    detail: "Our team designs posts and produces videos and AI videos sized for each platform, from Instagram Reels to Facebook and YouTube ads."
                },
                {
                    step: 4,
                    text: "Review and Delivery",
                    detail: "You review the content and request changes, then we finalize and deliver it ready to publish or use in your ad campaigns."
                }
            ]
        },
        {
            serviceid:5,
            servicename:"SEO",
            servicedesc:"Rank higher on Google and get found by local customers.",
            heading1: "Get Found by Customers Searching for You",
            image:"https://qph.cf2.quoracdn.net/main-qimg-b6bafd99f13c98241c90e8cc168de2ac-lq",
            text1: "When someone in your area searches for the services you offer, your business should be one of the first they see. Our SEO service improves your visibility on Google through keyword research, on-page optimization, technical fixes, and local SEO for your Google Business Profile. We optimize your page titles, content, site speed, and mobile experience, make sure your business information is accurate and consistent online, and track your progress with advanced analytics. The goal is simple: more of the right people finding your website and contacting you.",
            text2: "Most customers start their search for a local business on Google, and the businesses that appear at the top of the results and in the map pack get the majority of the clicks and calls. SEO helps you earn that visibility without paying for every click, making it one of the most cost-effective long-term investments a small or medium business can make. A well-optimized website also builds credibility, because people tend to trust businesses that rank well. SEO works hand in hand with your paid ads and social media: ads deliver leads quickly, while SEO builds a steady, growing stream of organic traffic over time. With monthly reports, you can see how your rankings, traffic, and inquiries are improving and where we are focusing next.",
            process: [
                {
                    step: 1,
                    text: "SEO Audit and Keyword Research",
                    detail: "We review your website and online presence, identify technical and content issues, and research the keywords your local customers actually use to find businesses like yours."
                },
                {
                    step: 2,
                    text: "On-Page and Technical SEO",
                    detail: "We optimize titles, headings, meta descriptions, and page content, improve site speed and mobile friendliness, and fix issues that keep search engines from properly indexing your pages."
                },
                {
                    step: 3,
                    text: "Local SEO",
                    detail: "We optimize your Google Business Profile, keep your business name, address, and phone number consistent across the web, and help you encourage customer reviews to strengthen your local rankings."
                },
                {
                    step: 4,
                    text: "Tracking and Monthly Reports",
                    detail: "We monitor rankings, traffic, and leads with advanced analytics and share a clear monthly report with progress, insights, and next steps."
                }
            ]
        },
        {
            serviceid:6,
            servicename:"Website & App Development",
            servicedesc:"Modern, responsive websites and apps built to convert.",
            heading1: "Websites and Apps Built to Win Customers",
            image:"https://cdn6.f-cdn.com/files/download/82615852/web-dev-ty.jpg?image-optimizer=force&format=webply&width=967",
            text1: "Your website is often the first impression a customer has of your business, and it needs to work as hard as you do. We design and build modern, responsive websites that look great on every device, load quickly, and make it easy for visitors to call, book, or request a quote. Need more than a website? We also develop custom web and mobile apps tailored to how your business operates. Whether you are launching your first site or replacing an outdated one, we turn your goals into a polished product with straightforward, upfront pricing.",
            text2: "Every ad you run, every social post you publish, and every search result you earn eventually sends people to your website. If that site is slow, confusing, or hard to use on a phone, you lose leads you have already paid to attract. A professional, conversion-focused website builds trust, clearly explains your services, and guides visitors toward contacting you. Built with SEO and analytics in mind, it also helps you rank better on Google and understand how visitors behave. For businesses that need more, a custom app can streamline operations, improve the customer experience, and open new ways to grow. Either way, a strong digital foundation makes all of your marketing more effective.",
            process: [
                {
                    step: 1,
                    text: "Discovery and Planning",
                    detail: "We learn about your business, customers, and goals, then plan the pages, features, and structure your website or app needs to succeed."
                },
                {
                    step: 2,
                    text: "Design",
                    detail: "We create a clean, modern design that matches your brand, with clear calls to action that guide visitors toward contacting you."
                },
                {
                    step: 3,
                    text: "Content and Copy",
                    detail: "We help you prepare persuasive copy, images, and videos that explain your services and give visitors a reason to choose you."
                },
                {
                    step: 4,
                    text: "Development",
                    detail: "We build a fast, responsive website or app using modern technology, with contact forms, click-to-call buttons, and integrations your business relies on."
                },
                {
                    step: 5,
                    text: "Testing",
                    detail: "We test across browsers, phones, and tablets to make sure everything works smoothly, loads quickly, and looks right on every screen."
                },
                {
                    step: 6,
                    text: "SEO and Analytics Setup",
                    detail: "We set up on-page SEO basics and analytics tracking so your new site is ready to be found on Google and every lead can be measured."
                },
                {
                    step: 7,
                    text: "Launch",
                    detail: "We connect your domain and hosting, launch your website, or help publish your app to the Apple App Store and Google Play Store."
                },
                {
                    step: 8,
                    text: "Ongoing Support",
                    detail: "After launch, we are available for updates, fixes, and improvements so your website or app stays secure, current, and effective."
                }
            ]
        }
    ];

    const { id } = useParams();
    const serviceid = parseInt(id, 10);
    const service = serviceItems.find(item => item.serviceid === serviceid);

    if (!service) {
        return <p>Service not found</p>;
    }

    return (
        <>
       <Helmet>
        <link rel="canonical" href={`${SITE.url}/services/${id}`} />
      </Helmet>
            <Topbar />

            <div className="hero-bg mb-4 ">
                <div className="hero-map-bg">
                    <div className="container pt-5">
                        <div className="hero-content text-black pt-5">
                            <div className="d-flex gap-2 pt-5 mt-5 align-items-center">
                                <ul className="d-inline mb-2">
                                    <li className="sora text-muted">Our Services</li>
                                </ul>
                            </div>
                        </div>
                        <h2 className="Sectional-heading mt-4 pt-3 ms-2 syne">{service.servicename}</h2>
                    </div>
                </div>
                <div className="bg-web-hero-img"></div>
            </div>

            <div className="container">
                <div className="row">
                    <div className="col-lg-5  mt-3">
                    <div className="solution-img-container why-choose-us-img">
                        <img src={service.image} alt={service.servicename} className="solution-img" />
                        </div>
                    </div>
                    <div className="col-lg-1"></div>
                    <div className="col-lg-6 d-flex align-items-center mt-3">
                       <div>
                       <h1 className="syne">{service.heading1}</h1>
                        <div className="text-muted sora lh-base mt-3">
                            {service.text1}
                        </div>
                       </div>
                    </div>
                </div>

                <div className="mt-5 mb-4">
                    <div className="small-hr-wrapper mt-2">
                        <hr className="small-hr" />
                        <hr className="full-hr" />
                        <hr className="small-hr" />
                    </div>
                </div>
            </div>

            <div className="container">
                <h3 className="text-center syne">Why <span className="text-orange">{service.servicename}</span> is Important?</h3>
                <p className="text-muted sora font-14 mt-3">
                    {service.text2}
                </p>
                <div className="small-hr-wrapper mt-4 mb-4">
                    <hr className="small-hr" />
                    <hr className="full-hr" />
                    <hr className="small-hr" />
                </div>
            </div>

            <div className="container mb-4">
                <h3 className="text-center syne">Process <span className="text-orange">Behind</span></h3>
                <div className="row gap-3 mt-3 justify-content-around">
                {service.process.map((step, index) => (
    <div className="col-lg-4 mt-3  border-pricing  p-3" key={index}>
        <div className="service-container ">
            <div className="id-container">
                <div className="help-icon ms-2 sora">
                    <span className='service-id'> 0{step.step}</span>
                </div>
            </div>
            <h4 className="mt-4 syne">{step.text}</h4>
            <p className="mt-3 text-muted sora font-14">{step.detail}</p>
        </div>
    </div>
))}
                </div>
            </div>
        </>
    );
}

export default SingleService;
