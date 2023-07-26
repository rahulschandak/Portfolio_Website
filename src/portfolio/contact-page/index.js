import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import { ReactComponent as Location } from "feather-icons/dist/icons/map-pin.svg";
import { ReactComponent as Mail } from "feather-icons/dist/icons/mail.svg";
import { ReactComponent as Call } from "feather-icons/dist/icons/phone-call.svg";
import { ReactComponent as LinkedIn } from "feather-icons/dist/icons/linkedin.svg";

const ContactScreen = () => {
  const [isMobile, setIsMobile] = useState(false);
  const handleResize = () => {
    setIsMobile(window.innerWidth < 992);
  };
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [description, setDescription] = useState("");

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    if (name === "fullName") {
      setFullName(value);
    } else if (name === "email") {
      setEmail(value);
    } else if (name === "subject") {
      setSubject(value);
    } else if (name === "description") {
      setDescription(value);
    }
  };

  return (
    <div className="container wd-padding-bottom wd-background-black">
      <h1 className="contact-heading">Get in Touch</h1>

      {!isMobile && (
        <div className="wd-two-cols">
          <div className="wd-background6 wd-width1">
            <div className="wd-padding-5">
              <h4>
                <Location /> Location:
              </h4>
              <p>Boston, MA</p>
            </div>

            <div className="wd-padding-5">
              <h4>
                <Mail /> Email
              </h4>
              <p>chandak.r@northeastern.edu</p>
            </div>

            <div className="wd-padding-5">
              <h4>
                <Call /> Call
              </h4>
              <p>+1 857 313 1986</p>
            </div>

            <div className="wd-padding-5">
              <h4>
                <LinkedIn /> LinkedIn
              </h4>
              <a
                href="https://www.linkedin.com/in/rahulschandak/"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://www.linkedin.com/in/rahulschandak/
              </a>
            </div>
          </div>

          <div className="wd-width2">
            <form className="wd-background6 wd-padding-5">
              <div className="mb-3">
                <label htmlFor="fullName" className="form-label ">
                  Full Name
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={fullName}
                  onChange={handleInputChange}
                  className="form-control wd-background6 wd-border-1"
                  required
                />

                <label htmlFor="email" className="form-label ">
                  Email ID
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={email}
                  onChange={handleInputChange}
                  className="form-control wd-background6 wd-border-1"
                  required
                />

                <label htmlFor="subject" className="form-label ">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={subject}
                  onChange={handleInputChange}
                  className="form-control wd-background6 wd-border-1"
                  required
                />

                <label htmlFor="description" className="form-label ">
                  Description
                </label>
                <textarea
                  id="description"
                  name="description"
                  value={description}
                  onChange={handleInputChange}
                  className="form-control wd-background6 wd-border-1"
                  required
                />
              </div>
              <button type="submit" className="btn wd-btn-properties">
                Send Message
              </button>
            </form>
          </div>
        </div>
      )}

      {isMobile && (
        <div className="">
          <div className="wd-background6 wd-margin-bottom-5">
            <div className="">
              <h4>
                <Location /> Location:
              </h4>
              <p>Boston, MA</p>
            </div>

            <div className="">
              <h4>
                <Mail /> Email
              </h4>
              <p>chandak.r@northeastern.edu</p>
            </div>

            <div className="">
              <h4>
                <Call /> Call
              </h4>
              <p>+1 857 313 1986</p>
            </div>

            <div className="">
              <h4>
                <LinkedIn /> LinkedIn
              </h4>
              <a
                href="https://www.linkedin.com/in/rahulschandak/"
                target="_blank"
                rel="noopener noreferrer"
              >
                www.linkedin.com/in/rahulschandak/
              </a>
            </div>
          </div>

          <div className="">
            <form className="wd-background6">
              <div className="mb-3">
                <label htmlFor="fullName" className="form-label ">
                  Full Name
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={fullName}
                  onChange={handleInputChange}
                  className="form-control wd-background6 wd-border-1"
                  required
                />

                <label htmlFor="email" className="form-label ">
                  Email ID
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={email}
                  onChange={handleInputChange}
                  className="form-control wd-background6 wd-border-1"
                  required
                />

                <label htmlFor="subject" className="form-label ">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={subject}
                  onChange={handleInputChange}
                  className="form-control wd-background6 wd-border-1"
                  required
                />

                <label htmlFor="description" className="form-label ">
                  Description
                </label>
                <textarea
                  id="description"
                  name="description"
                  value={description}
                  onChange={handleInputChange}
                  className="form-control wd-background6 wd-border-1"
                  required
                />
              </div>
              <button type="submit" className="btn wd-btn-properties">
                Send Message
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContactScreen;
