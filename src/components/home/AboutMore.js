import React from "react";
import Heading from "../common/Heading";
import { aboutMore } from "../data/Data";

export default function AboutMore() {
  return (
    <>
      <div className="container-xxl py-5">
        <div className="container">
          <div className="row g-5 align-items-center  display-flex-more">
            <div className="col-lg-6">
              <h6 className="section-title text-start text-primary text-uppercase">
                Why Us ..?
              </h6>
              <h1 className="mb-4">
                What we{" "}
                <span className="text-primary text-uppercase">Offer</span>
              </h1>
              <p className="mb-4">
                We provide an exceptional living experience, offering a wide
                array of premium amenities to ensure your comfort and
                satisfaction. Our facilities include meticulously clean and
                well-maintained rooms, gourmet food crafted by trained chefs, a
                refreshing swimming pool, and secure, free parking. Enjoy
                seamless connectivity with free Wi-Fi and the convenience of
                self-contained private kitchens. Additionally, we offer 24*7
                hospital facilities to cater to any medical needs, ensuring
                peace of mind. Our community spaces foster a welcoming
                environment, with beautifully landscaped gardens, a
                fully-equipped gym, and recreational areas. Whether you're
                relaxing by the pool or enjoying a meal in your private kitchen,
                we are dedicated to making your stay as enjoyable and
                hassle-free as possible.
              </p>
              <div className="row g-3 pb-4">
                {aboutMore.map((item, key) => (
                  <div className="col-sm-4 wow fadeIn" data-wow-delay="0.1s">
                    <div className="border rounded p-1">
                      <div className="border rounded text-center p-4">
                        {item.icon}
                        <h2 className="mb-1" data-toggle="counter-up">
                          {item.count}
                        </h2>
                        <p className="mb-0">{item.text}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <a className="btn btn-primary py-3 px-5 mt-2" href="/about">
                Explore More
              </a>
            </div>
            <div className="col-lg-6">
              <div className="row g-3">
                <div className="col-6 text-start">
                  <img
                    className="img-fluid rounded w-100 wow zoomIn"
                    data-wow-delay="0.3s"
                    src="/assets/img/swim.jpg"
                  />
                </div>
                <div className="col-6 text-start">
                  <img
                    className="img-fluid rounded w-75 wow zoomIn"
                    data-wow-delay="0.1s"
                    src="/assets/img/cafetaria.jpg"
                    style={{ marginTop: "25%" }}
                  />
                </div>
                <div className="col-6 text-end">
                  <img
                    className="img-fluid rounded w-75 wow zoomIn"
                    data-wow-delay="0.7s"
                    src="/assets/img/room-3.jpg"
                  />
                </div>
                <div className="col-6 text-start">
                  <img
                    className="img-fluid rounded w-50 wow zoomIn"
                    data-wow-delay="0.5s"
                    src="/assets/img/food.jpg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
