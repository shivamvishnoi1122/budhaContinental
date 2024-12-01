import React from "react";
import CommonHeading from "../common/CommonHeading";
import { roomItems } from "../data/Data";
import Booking from "../common/Booking";
import { useState } from "react";
import FacialityModal from "../common/FacialityModal";

export default function Rooms() {
  const [modalBooking, setBookingModal] = useState(false);
  const [index, setIndex] = useState("");
  // const  [modalBooking,setBookingModal] = useState(false)

  const handleFacialityModal = (index) => {
    setBookingModal(true);
    setIndex(index);
  };
  return (
    <>
      {modalBooking && <Booking setBookingModal={setBookingModal} />}
      {}
      <div className="container-xxl py-5">
        <div className="container">
          <CommonHeading
            heading="Our Rooms"
            title="Rooms"
            subtitle="Explore Our"
          />
          <div className="row g-4">
            {roomItems.map((item, index) => (
              <div
                className="col-lg-4 col-md-6 wow fadeInUp"
                data-wow-delay="0.1s">
                <div className="room-item shadow rounded overflow-hidden">
                  <div className="position-relative">
                    <img className="img-fluid" src={item.img} alt="img" />
                    <small className="position-absolute start-0 top-100 translate-middle-y bg-primary text-white rounded py-1 px-3 ms-4">
                      {item.price}
                    </small>
                  </div>
                  <div className="p-4 mt-2">
                    <div className="d-flex justify-content-between mb-3">
                      <h5 className="mb-0">{item.name}</h5>
                      <div className="ps-2">{item.star}</div>
                    </div>
                    <div className="d-flex mb-3">
                      {item.facility.map((value, index) => (
                        <small className="border-end me-3 pe-3">
                          {value.icon}
                          {`${value.quantity ? value.quantity : ""  }${value.facility}`}
                        </small>
                      ))}
                    </div>
                    <p className="text-body mb-3">{item.description}</p>
                    <div className="d-flex justify-content-between">
                      {/* <a className="btn btn-sm btn-primary rounded py-2 px-4">
                        {item.yellowbtn}
                      </a> */}
                      <a
                        className="btn btn-sm btn-dark rounded py-2 px-4"
                        onClick={() => handleFacialityModal(index)}>
                        {item.darkbtn}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
