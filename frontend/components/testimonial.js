import { Autoplay, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import SectionTitle from "./global/section-title";
import { Swiper, SwiperSlide } from "swiper/react";
import { IoMdQuote } from "react-icons/io";

const Testimonial = () => {
  return (
    <div className="testimonial section-padding section-bg">
      <div className="container">
        <SectionTitle title="What people said about UpTrend" />
        <div className="rwo">
          <div className="col-12">
            <Swiper
              modules={[Pagination, Autoplay]}
              pagination={{ clickable: true }}
              autoplay
              breakpoints={{
                768: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
              }}
            >
              <SwiperSlide>
                <div className="testimonial__item">
                  <div className="user">
                    <div className="user__image">
                      <img
                        className="img-fluid"
                        src="images/user1.jpg"
                        alt="user 01"
                      />
                    </div>
                    <h3 className="user__name"> Jane & John D</h3>
                    <p className="user__title">Satisfied Homebuyer</p>
                    <div className="quote__icon">
                      <IoMdQuote />
                    </div>
                  </div>
                  <p className="user__description">
                  "UPTrend Real-Estate PLC made our home-buying experience truly exceptional. From the moment we walked into their office, we were treated with professionalism and warmth. Our agent was knowledgeable and patient, guiding us through every step of the process. We are thrilled with our new home and couldn't have asked for a better experience. Thank you, UPTrend, for helping us find our perfect home!"
                  </p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="testimonial__item">
                  <div className="user">
                    <div className="user__image">
                      <img
                        className="img-fluid"
                        src="images/user2.jpg"
                        alt="user 02"
                      />
                    </div>
                    <h3 className="user__name">Michael S.</h3>
                    <p className="user__title"> Real Estate Investor</p>
                    <div className="quote__icon">
                      <IoMdQuote />
                    </div>
                  </div>
                  <p className="user__description">
                  "As an investor, I look for a real estate partner who understands the market and my specific needs. UPTrend Real-Estate PLC exceeded my expectations with their expertise and attention to detail. They helped me identify great investment opportunities and managed the transactions smoothly. I highly recommend UPTrend for anyone looking to invest in real estate in Ethiopia."
                  </p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="testimonial__item">
                  <div className="user">
                    <div className="user__image">
                      <img
                        className="img-fluid"
                        src="images/user3.jpg"
                        alt="user 02"
                      />
                    </div>
                    <h3 className="user__name">Ahmed M.</h3>
                    <p className="user__title">Commercial Property Client</p>
                    <div className="quote__icon">
                      <IoMdQuote />
                    </div>
                  </div>
                  <p className="user__description">
                  "We needed a commercial space for our growing business, and UPTrend Real-Estate PLC delivered beyond our expectations. They understood our requirements and found the perfect location for us. The entire process was handled professionally and efficiently. We are extremely satisfied with our new space and the service we received. UPTrend is our go-to for all our real estate needs!"
                  </p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="testimonial__item">
                  <div className="user">
                    <div className="user__image">
                      <img
                        className="img-fluid"
                        src="images/user4.jpg"
                        alt="user 02"
                      />
                    </div>
                    <h3 className="user__name">Sarah & Alex K.</h3>
                    <p className="user__title"> First-Time Homebuyer</p>
                    <div className="quote__icon">
                      <IoMdQuote />
                    </div>
                  </div>
                  <p className="user__description">
                  "Buying our first home was a big step, and we were nervous about the process. But UPTrend Real-Estate PLC made it so easy for us. Our agent explained everything clearly and was always available to answer our questions. The whole team was friendly and supportive, making sure we felt comfortable every step of the way. We love our new home and are grateful for the excellent service we received!"
                  </p>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
