import { Link } from "react-router-dom";
import { footerContact, footerItem, socialIcons } from "../data/Data";
import Newsletter from "../home/Newsletter";
import Booking from "../common/Booking"
import { useState } from "react";

export default function Footer() {
  const  [modalBooking,setBookingModal] = useState(false)
  return (
    <>
      <Newsletter setBookingModal ={setBookingModal} />
      {modalBooking && <Booking setBookingModal={setBookingModal} />}
      <div
        className="container-fluid bg-dark text-light footer wow fadeIn"
        data-wow-delay="0.1s"
      >
        <div className="container pb-5">
          <div className="row g-5 flex-class">
            <div className="col-md-6 col-lg-4">
              <div className="bg-primary rounded p-4">
                <Link to="/">
                  <h1 className="text-white text-uppercase mb-3">Buddha Continental</h1>
                </Link>
                {/* <p className="text-white mb-0">
                  Build a professional website for your hotel business and grab
                  the attention of new visitors upon your site’s launch.
                </p> */}
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <h6 className="section-title text-start text-primary text-uppercase mb-4">
                Contact
              </h6>
              {footerContact.map((val, index) => (
                <p className="mb-2 footer-info" key={index}>
                  {val.icon} <solid><a href={val.href} target="_blank" rel="noopener noreferrer">{val.name}</a></solid>
                </p>
              ))}
              {/* <div className="d-flex pt-2">
                {socialIcons.slice(0, 4).map((val, index) => (
                  <a className="btn btn-outline-light btn-social" href="">
                    {val.icon}
                  </a>
                ))}
              </div> */}
            </div>
            <div className="col-lg-5 col-md-12 footer-services">
              <div className="row gy-5 g-4">
                {footerItem.map((section, sectionIndex) => (
                  <div className="col-md-6" key={sectionIndex}>
                    <h6 className="section-title text-start text-primary text-uppercase mb-4">
                      {section.header}
                    </h6>
                    {section.UnitItem.map((item, itemIndex) => (
                      <a className="btn btn-link" href={item.link} key={itemIndex}>
                        {item.name}
                      </a>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
