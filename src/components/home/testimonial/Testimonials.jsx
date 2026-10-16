"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import { FaArrowLeft, FaArrowRight, FaStar } from "react-icons/fa";
import { TESTIMONIALS } from "@/lib/testimonials";
import "./Testimonials.css";

const initials = (name) =>
  name.split(/\s+/).filter(Boolean).slice(0, 2).map((w) => w[0].toUpperCase()).join("");

function Testimonials() {
  return (
    <section className="wz-reviews" id="testimonials">
      <div className="wz-deco" aria-hidden="true"></div>
      <div className="container">
        <div className="row align-items-center wz-reviews-head">
          <div className="col-md-6 col-xl-6">
            <span className="wz-suptitle">Testimonial</span>
            <h2 className="wz-reviews-title">What Our <span className="text-orange">Clients</span> Say</h2>
          </div>
          <div className="col-md-6 col-xl-6">
            <div className="wz-adaptive-right">
              <div className="wz-slider-nav">
                <div className="wz-slider-btn wz-revi-prev" role="button" aria-label="Previous review">
                  <FaArrowLeft /><span>Prev</span>
                </div>
                <div className="wz-slider-btn wz-revi-next" role="button" aria-label="Next review">
                  <span>Next</span><FaArrowRight />
                </div>
              </div>
            </div>
          </div>
        </div>

        <Swiper
          className="wz-revi-slider"
          modules={[Navigation]}
          loop
          speed={800}
          slidesPerView={1}
          spaceBetween={30}
          navigation={{ nextEl: ".wz-revi-next", prevEl: ".wz-revi-prev" }}
          breakpoints={{ 768: { slidesPerView: 2 }, 1200: { slidesPerView: 3 } }}
        >
          {TESTIMONIALS.map((t, i) => (
            <SwiperSlide key={i}>
              <div className="wz-review">
                <div className="wz-stars">
                  <img src="/testimonials/quote.svg" alt="" width={30} height={24} />
                  <ul aria-label={`${t.rating} out of 5 stars`}>
                    {Array.from({ length: 5 }, (_, s) => (
                      <li key={s} className={s < t.rating ? "" : "wz-empty"}><FaStar /></li>
                    ))}
                  </ul>
                </div>
                <p>{t.quote}</p>
                <div className="wz-author">
                  {t.photo
                    ? <img src={t.photo} alt={t.name} />
                    : <span className="wz-avatar" aria-hidden="true">{initials(t.name)}</span>}
                  <div className="wz-name">
                    <h6>{t.name}</h6>
                    <span className="wz-text-sm">{t.role}</span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default Testimonials;
