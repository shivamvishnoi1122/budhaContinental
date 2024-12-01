import React, { useRef, useState, useEffect } from "react";
import emailjs from "emailjs-com";

const Booking = ({ setBookingModal }) => {
  const form = useRef();
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  useEffect(() => {
    // Disable scroll when modal is open
    document.body.classList.add("no-scroll");

    // Re-enable scroll when modal is closed
    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
    .sendForm(
      "service_v5g39zt",
      "template_iibsh7k",
      form.current,
      "XDJ5e997wK2jMxjcI"
    )
      .then((result) => {
        console.log("Success:", result.text);
        setSuccess("Your mail has been sent successfully!");
        setError(null); // Clear any previous errors
        window.alert(
          "Your email has been sent. Our customer team will contact you shortly regarding your booking confirmation."
        );
        setBookingModal(false);
        // Reset form
        form.current.reset();
      })
      .catch((error) => {
        console.error("Error:", error.text);
        setSuccess(null); // Clear any previous success messages
        setError("Failed to send email. Please try again.");
      });
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <div className="collection-pull-up-view-backdrop"></div>
      <div className="new-vendor-container slideLeft">
        <div className="form-header-logo">
          <h3>Booking</h3>
          <svg
            onClick={() => setBookingModal(false)}
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="none"
          >
            <path
              fill="#000"
              stroke="#fff"
              strokeWidth="1.5"
              d="M14.845 1.155h.001a1.4 1.4 0 0 1 0 1.967v.001L10.49 7.477l-.53.53.53.53 4.355 4.351a1.37 1.37 0 0 1 0 1.943 1.384 1.384 0 0 1-.987.419c-.352 0-.685-.124-.946-.402l-.008-.01-.01-.008-4.354-4.324-.529-.525-.528.525-4.355 4.324-.002.002a1.384 1.384 0 0 1-.986.418c-.34 0-.712-.144-.987-.418v-.001c-.532-.53-.546-1.401.004-1.97l4.35-4.322.533-.53-.532-.532-4.355-4.354a1.4 1.4 0 0 1 0-1.967v-.001a1.403 1.403 0 0 1 1.977.005l4.351 4.344.532.531.53-.532 4.325-4.344a1.403 1.403 0 0 1 1.976-.004Z"
            ></path>
          </svg>
        </div>
        {/* Form fields */}
        <div className="data-input-booking">
          <div className="input-contianers">
            <div className="sub-input-container">
              <label>First Name</label>
              <input name="firstName" placeholder="First name" required />
            </div>
            <div className="sub-input-container">
              <label>Last Name</label>
              <input name="lastName" placeholder="Last name" required />
            </div>
          </div>
        </div>
        <div className="data-input-booking">
          <label>Mobile</label>
          <div className="input-contianers">
            <input
              type="text"
              name="mobile"
              maxLength="10"
              placeholder="Enter Phone number"
              required
              pattern="[0-9]{10}"
              title="Please enter a 10-digit phone number"
            />
          </div>
        </div>
        <div className="data-input-booking">
          <label>E-mail</label>
          <div className="input-contianers">
            <input
              type="email"
              name="email"
              placeholder="Enter E-mail"
              required
              title="Please enter a valid email address"
            />
          </div>
        </div>
        <div className="data-input-booking">
          <div className="input-contianers">
            <div className="sub-input-container">
              <label>Check-in</label>
              <input name="checkIn" type="date" required />
            </div>
            <div className="sub-input-container">
              <label>Check-out</label>
              <input name="checkOut" type="date" required />
            </div>
          </div>
        </div>
        <div className="data-input-booking">
          <div className="input-contianers">
            <div className="sub-input-container">
              <label>Adult</label>
              <input type="number" name="adults" placeholder="No of Adults" required />
            </div>
            <div className="sub-input-container">
              <label>Child</label>
              <input type="number" name="children" placeholder="No. of Children" required />
            </div>
          </div>
        </div>
        <div className="data-input-booking">
          <label>Description</label>
          <div className="input-contianers">
            <textarea
              name="description"
              placeholder="Tell us about your journey"
              required
            />
          </div>
        </div>
        <div className="data-input-booking">
          <button className="btn-primary btn w-100" type="submit">
            Submit
          </button>
        </div>
      </div>
    </form>
  );
};

export default Booking;
