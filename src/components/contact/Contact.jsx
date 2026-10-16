"use client";
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import Topbar from "../../utilities/topbar/Topbar";
import './Contact.css';
import { FaArrowRightLong } from "react-icons/fa6";
import { FaRegQuestionCircle } from "react-icons/fa";
import { IoMdInformationCircleOutline } from "react-icons/io";
import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { toast } from 'react-toastify';
import { Helmet } from "@/lib/Helmet";
import { SITE, ALL_PLANS, SERVICES, whatsappLink } from "@/lib/site";
import { sendLead } from "@/lib/sendLead";

const NOT_SURE = "Not sure yet - need advice";

function Contact() {

  const { register, handleSubmit, reset, setValue, formState: { errors, isSubmitting } } = useForm();
  const [sent, setSent] = useState(false);

  // Pricing cards link here with ?plan=<id>; preselect that plan.
  useEffect(() => {
    const planId = new URLSearchParams(window.location.search).get('plan');
    const plan = ALL_PLANS.find((p) => p.id === planId);
    if (plan) setValue('interest', `${plan.name} (${plan.price})`);
  }, [setValue]);

  const onSubmit = async (data) => {
    try {
      await sendLead('Contact Us', {
        'Name': `${data.firstName} ${data.lastName}`,
        'Email': data.email,
        'Phone': data.phone,
        'Business': data.company,
        'Website': data.website,
        'Interested In': data.interest,
        'Project Details': data.projectDescription,
      }, { honeypot: data.hp });
      toast.success("Thanks! We'll get back to you shortly.");
      setSent(true);
      reset();
    } catch (error) {
      toast.error(`${error.message} You can also reach us on WhatsApp at ${SITE.phoneDisplay}.`);
    }
  };

  return (
    <>
     <Helmet>
        <link rel="canonical" href={`${SITE.url}/contact`} />
      </Helmet>
      <Topbar />

      <div className="hero-bg mb-4">
        <div className="hero-map-bg">
          <div className="container pt-5">
            <div className="hero-content text-black pt-5">
              <div className="d-flex gap-2 pt-5 mt-5 align-items-center">
                <span className="sora">Home</span>
                <ul className="d-inline mb-2">
                  <li className="sora text-muted">contact</li>
                </ul>
              </div>
            </div>
            <h1 className="Sectional-heading mt-4 pt-3 ms-2 syne">LET’S DISCUSS YOUR OPPORTUNITY</h1>
          </div>
        </div>
        <div className="bg-web-hero-img"></div>
      </div>


      <div className="container mt-5 pt-lg-5 pb-lg-5 mb-5">
        <div className="row justify-content-between">
          <div className="col-lg-8 col-md-4">
            <form onSubmit={handleSubmit(onSubmit)}>
              {/* Honeypot field, hidden from people; bots that fill it are ignored */}
              <input type="text" tabIndex={-1} autoComplete="off" aria-hidden="true" style={{ position: 'absolute', left: '-9999px' }} {...register('hp')} />
              <div>
                <h2 className='syne font-22'>
                  <span className="text-orange syne me-2">01.</span> Tell Us About Yourself
                </h2>
              </div>
              <div className="row justify-content-around mt-4">
                <div className="col-lg-5 col-md-5 border-bottom mt-2">
                  <div className="f-18 ms-2 mt-4 mb-4">First Name</div>
                  <input
                    type="text"
                    className="form-control mt-3 pb-4"
                    placeholder="First Name"
                    autoComplete="given-name"
                    {...register('firstName', { required: 'First name is required' })}
                  />
                  {errors.firstName && <p className="text-danger">{errors.firstName.message}</p>}
                </div>
                <div className="col-lg-5 border-bottom col-md-5 mt-2">
                  <div className="f-18 ms-2 mt-4 mb-4">Last Name</div>
                  <input
                    type="text"
                    className="form-control mt-3 pb-4"
                    placeholder="Last Name"
                    autoComplete="family-name"
                    {...register('lastName', { required: 'Last name is required' })}
                  />
                  {errors.lastName && <p className="text-danger">{errors.lastName.message}</p>}
                </div>
              </div>

              <div className="row justify-content-around">
                <div className="col-lg-5 col-md-5 border-bottom mt-2">
                  <div className="f-18 ms-2 mt-4 mb-4">Email Address</div>
                  <input
                    type="email"
                    className="form-control mt-3 pb-4"
                    placeholder="you@company.com"
                    autoComplete="email"
                    {...register('email', {
                      required: 'Email is required',
                      pattern: {
                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                        message: 'Invalid email address'
                      }
                    })}
                  />
                  {errors.email && <p className="text-danger">{errors.email.message}</p>}
                </div>
                <div className="col-lg-5 border-bottom col-md-5 mt-2">
                  <div className="f-18 ms-2 mt-4 mb-4">Phone</div>
                  <input
                    type="tel"
                    className="form-control mt-3 pb-4"
                    placeholder="(555) 123-4567"
                    autoComplete="tel"
                    {...register('phone', {
                      required: 'Phone number is required',
                      pattern: { value: /^[+\d\s().-]{7,20}$/, message: 'Invalid phone number' }
                    })}
                  />
                  {errors.phone && <p className="text-danger">{errors.phone.message}</p>}
                </div>
              </div>

              <div className="row justify-content-around">
                <div className="col-lg-5 col-md-5 border-bottom mt-2">
                  <div className="f-18 ms-2 mt-4 mb-4">Business Name</div>
                  <input
                    type="text"
                    className="form-control mt-3 pb-4"
                    placeholder="Your business name"
                    autoComplete="organization"
                    {...register('company', { required: 'Business name is required' })}
                  />
                  {errors.company && <p className="text-danger">{errors.company.message}</p>}
                </div>
                <div className="col-lg-5 border-bottom col-md-5 mt-2">
                  <div className="f-18 ms-2 mt-4 mb-4">Website <span className="text-muted font-14">(optional)</span></div>
                  <input
                    type="text"
                    className="form-control mt-3 pb-4"
                    placeholder="www.yourbusiness.com"
                    autoComplete="url"
                    {...register('website')}
                  />
                </div>
              </div>

              <div className="mt-5 pt-lg-4">
                <h2 className='syne font-22'>
                  <span className="text-orange syne mt-5 me-2">02.</span> What Can We Help You With?
                </h2>
                <div className="row">
                  <div className="col-lg-5 col-md-5 border-bottom mt-2">
                    <div className="f-18 ms-2 mt-4 mb-4">Plan or Service</div>
                    <select
                      className="form-select mt-3 mb-3"
                      defaultValue=""
                      {...register('interest', { required: 'Please choose an option' })}
                    >
                      <option value="" disabled>Choose a plan or service</option>
                      <optgroup label="Plans">
                        {ALL_PLANS.map((plan) => (
                          <option key={plan.id} value={`${plan.name} (${plan.price})`}>
                            {plan.name} - {plan.priceNote ? `${plan.priceNote} ` : ''}{plan.price}
                          </option>
                        ))}
                      </optgroup>
                      <optgroup label="Services">
                        {SERVICES.map((service) => (
                          <option key={service} value={service}>{service}</option>
                        ))}
                      </optgroup>
                      <option value={NOT_SURE}>{NOT_SURE}</option>
                    </select>
                    {errors.interest && <p className="text-danger">{errors.interest.message}</p>}
                  </div>
                </div>
              </div>

              <div className="mt-5 pt-lg-4">
                <h2 className='syne font-22'>
                  <span className="text-orange syne mt-5 me-2">03.</span> Tell Us About Your Project
                </h2>
                <div className="row">
                  <div className="col-lg-5 col-md-5 border-bottom mt-2">
                    <div className="f-18 ms-2 mt-4 mb-4">Project Description</div>
                    <textarea
                      cols={37}
                      name="projectDescription"
                      id="project"
                      className="border-none"
                      placeholder="Your goals, target area, timeline..."
                      {...register('projectDescription', { required: 'Project description is required' })}
                    />
                    {errors.projectDescription && <p className="text-danger">{errors.projectDescription.message}</p>}
                  </div>
                </div>
              </div>

              <button type="submit" disabled={isSubmitting} className="btn-webberzone w-100 text-black bg-white mt-5">
                {isSubmitting ? 'Sending...' : 'Send Query'}
              </button>
              {sent && (
                <p className="text-success mt-3">Thanks! Your request was received. We usually reply within a few hours.</p>
              )}
            </form>
          </div>

          <div className="col-lg-4 px-4 mt-3 col-md-4">
            <div className='text-start'>
              <ul>
                <li>Support Request</li>
              </ul>
              <p className="text-muted w-75 mt-4 mb-4">
                Our experts are ready to answer your questions.
              </p>
              <div className="syne sont-14 text-muted  learn-more mt-2" >
                Chat on WhatsApp     <a href={whatsappLink("Hi WebberZone, I have a question.")} target="_blank" rel="noopener noreferrer">
      <span className="arrow-icon ms-3"><FaArrowRightLong /></span>
    </a>
              </div>
              <div className="divider mt-3 pt-lg-3 mb-4">
                <div className="small-hr-wrapper">
                  <hr className="small-hr" />
                  <hr className="full-hr" />
                  <hr className="small-hr" />
                </div>
              </div>
            </div>

            <div className=' mt-4 text-start'>
              <div className="icon-container mt-3 mb-3 ">
                <div className="help-icon ms-2 sora">
                  <span className='service-id'><FaRegQuestionCircle /></span>
                </div>
              </div>
              <ul>
                <li>Need Help?</li>
              </ul>
              <p className="text-muted w-75 mt-4 mb-4">
                Questions about plans, ads or billing? Call, WhatsApp or email us.
              </p>

              <div className="icon-container mt-5 mb-3 ">
                <div className="help-icon ms-2 sora">
                  <span className='service-id'><IoMdInformationCircleOutline /></span>
                </div>
              </div>
              <ul>
                <li>Needs More Info?</li>
              </ul>
              <p className="text-muted w-75 mt-4 mb-4">
                For any other information feel free to contact us.
              </p>

              <div className="divider mt-3 pt-lg-3 mb-4">
                <div className="small-hr-wrapper">
                  <hr className="small-hr" />
                  <hr className="full-hr" />
                  <hr className="small-hr" />
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>


      <div className="container mt-5 mb-5">
        <div className="row justify-content-between">
          <div className="col-lg-5 mt-3 p-4">
            <h3 className='syne'>Serving the USA</h3>
            <ul className='mt-4'>
              <li>
                Remote-first agency
              </li>
            </ul>
            <p className="text-muted sora lh-lg ">
              We work with businesses across the United States. Reach us by phone, WhatsApp or email and we will set up a free strategy call.
            </p>
            <div className="divider mt-3 pt-lg-3 mb-4">
              <div className="small-hr-wrapper">
                <hr className="small-hr" />
                <hr className="full-hr" />
              </div>
              <div className="d-flex align-items-center mt-4">
                <span className='contact-logo me-3'><FaPhoneAlt /></span>
                <a href={`tel:${SITE.phoneE164}`} className='service-info text-decoration-none text-reset'>{SITE.phoneDisplay}</a>
              </div>

              <div className="d-flex align-items-center mt-4">
                <span className='contact-logo me-3'><FaWhatsapp /></span>
                <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className='service-info text-decoration-none text-reset'>WhatsApp {SITE.phoneDisplay}</a>
              </div>

              <div className="d-flex align-items-center mt-4">
                <span className='contact-logo me-3'><IoMdMail /></span>
                <a href={`mailto:${SITE.email}`} className='service-info text-decoration-none text-reset'>{SITE.email}</a>
              </div>

            </div>
          </div>

        </div>
      </div>

    </>
  );
}

export default Contact;
