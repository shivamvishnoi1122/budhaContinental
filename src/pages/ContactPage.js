import React, { useRef } from "react";
import Heading from "../components/common/Heading";
import CommonHeading from "../components/common/CommonHeading";
import { contact } from "../components/data/Data";
import emailjs from "emailjs-com";

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_v5g39zt", // Replace with your actual service ID
        "template_tnhq0jl", // Replace with your actual template ID
        form.current,
        "XDJ5e997wK2jMxjcI"// Replace with your actual user ID
      )
      .then((result) => {
        console.log("Success:", result.text);
      window.alert(
          "Your Query is raised. Our customer team will contact you shortly."
        );
        // Reset form
        form.current.reset();
      })
      .catch((error) => {
        console.error("Error:", error.text);
      });
  };

  return (
    <>
      <Heading heading="Contact" title="Home" subtitle="Contact" />

      <div className="container-xxl py-5">
        <div className="container">
          <CommonHeading
            heading="Contact Us"
            subtitle="Contact"
            title="For Any Query"
          />
          <div className="row g-4">
            <div className="col-12">
              <div className="row gy-4">
                {contact.map((item, index) => (
                  <div className="col-md-4" key={index}>
                    <h6 className="section-title text-start text-primary text-uppercase">
                      {item.title}
                    </h6>
                    <p>
                      {item.icon}
                      <a href={item.href} target="_blank" rel="noopener noreferrer">{item.email}</a>
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div className="col-md-6 wow fadeIn" data-wow-delay="0.1s">
            <iframe
                class="position-relative rounded w-100 h-100"
                src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3476.942506849153!2d78.75125447552827!3d29.371972575269147!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjnCsDIyJzE5LjEiTiA3OMKwNDUnMTMuOCJF!5e0!3m2!1sen!2sin!4v1724688741957!5m2!1sen!2sin" 
                style={{ minHeight: "350px", border: "0" }}
                allowfullscreen=""
                aria-hidden="false"
                tabindex="0"
              ></iframe>
            </div>
            <div className="col-md-6">
              <div className="wow fadeInUp" data-wow-delay="0.2s">
                <form ref={form} onSubmit={sendEmail}>
                  <div className="row g-3">
                    <div className="col-md-6">
                      <div className="form-floating">
                        <input
                          type="text"
                          className="form-control"
                          id="name"
                          name="user_name" // Corresponds to the placeholder in your EmailJS template
                          placeholder="Your Name"
                          required
                        />
                        <label htmlFor="name">Your Name</label>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-floating">
                        <input
                          type="email"
                          className="form-control"
                          id="email"
                          name="user_email" // Corresponds to the placeholder in your EmailJS template
                          placeholder="Your Email"
                          required
                        />
                        <label htmlFor="email">Your Email</label>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-floating">
                        <textarea
                          className="form-control"
                          placeholder="Query Reason"
                          id="reason"
                          name="query_reason" // New name for Query Reason
                          style={{ height: "100px" }}
                          required
                        ></textarea>
                        <label htmlFor="reason">Query Reason</label>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-floating">
                        <textarea
                          className="form-control"
                          placeholder="Description"
                          id="description"
                          name="description" // New name for Description
                          style={{ height: "150px" }}
                          required
                        ></textarea>
                        <label htmlFor="description">Description</label>
                      </div>
                    </div>
                    <div className="col-12">
                      <button
                        className="btn btn-primary w-100 py-3"
                        type="submit"
                      >
                        Send Message
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
