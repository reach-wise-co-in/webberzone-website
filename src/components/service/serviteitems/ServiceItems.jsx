"use client";
import { Link } from "@/lib/router"
import './ServiceItems.css'
function ServiceItems() {
    const serviceItems=[
        {
            serviceid:1,
            servicename:"Social Media Management",
            servicedesc:"Consistent posts and videos that keep your business top of mind."
        },
        {
            serviceid:2,
            servicename:"Meta & Google Ads",
            servicedesc:"Targeted ad campaigns that turn your budget into real leads."
        },
        {
            serviceid:3,
            servicename:"Geo-Fencing Ads",
            servicedesc:"Reach customers in the exact neighborhoods and locations you serve."
        },
        {
            serviceid:4,
            servicename:"Content Creation & AI Videos",
            servicedesc:"Scroll-stopping content and AI videos that tell your story."
        },
        {
            serviceid:5,
            servicename:"SEO",
            servicedesc:"Rank higher on Google and get found by local customers."
        },
        {
            serviceid:6,
            servicename:"Website & App Development",
            servicedesc:"Modern, responsive websites and apps built to convert."
        }
    ]
  return (
    <>
       <div className='d-flex flex-wrap '>
            <div className="row  ">
            {serviceItems.map(item => (
                <div className="col-lg-4  mt-3 p-3" key={item.serviceid}>
                    <Link to={`/services/${item.serviceid}`} className='text-decoration-none text-black'>
    <div className="service-container  ">
        <div className="id-container">
            <div className="help-icon ms-2 sora">
                <span className='service-id'>{item.serviceid < 10 ? `0${item.serviceid}` : item.serviceid}</span>
            </div>
        </div>
        <h4 className="mt-4 syne">{item.servicename}</h4>
        <p className="mt-3 text-muted sora font-14">{item.servicedesc}</p>
    </div>
</Link>

                </div>
            ))}
            </div>
        </div>
    </>
  )
}

export default ServiceItems
