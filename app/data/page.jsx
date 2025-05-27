"use client";
import { useRef, useEffect, useState } from "react";
import emailjs from "@emailjs/browser";
import { MdMarkEmailRead } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";

const ContactForm = () => {
  const [alert, setAlert] = useState({ show: false, type: "", message: "" });
  const formRef = useRef(null);

  const AlertMessage = ({ type, message }) => {
    const baseClasses = "px-4 py-3 rounded font-medium text-sm border";

    const typeStyles = {
      success: "bg-green-100 text-green-700 border-green-300",
      error: "bg-red-100 text-red-700 border-red-300",
      info: "bg-blue-100 text-blue-700 border-blue-300",
    };

    return (
      <div className={`${baseClasses} ${typeStyles[type] || ""}`}>
        {message}
      </div>
    );
  };
  useEffect(() => {
    emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID1,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID1,
        formRef.current,
        {
          publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY1,
        }
      )
      .then(
        () => {
          setAlert({
            show: true,
            type: "success",
            message: "Message sent successfully! We will get back to you soon.",
          });

          formRef.current.reset();
        },
        (error) => {
          console.error("EmailJS Error:", error);
          setAlert({
            show: true,
            type: "error",
            message: "Failed to send message. Please try again later.",
          });
        }
      );
  };

  return (
    <>
      <section className="bg-white p-4 sm:p-10 justify-center flex flex-col lg:flex-row gap-3 border border-blue-800 min-h-screen font-poppins">
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="w-full lg:w-[47%] rounded-2xl p-3 sm:p-8 flex items-center justify-center"
        >
          <div className="w-full">
            <div className="flex flex-row gap-4 xl:gap-6 xl:flex-row justify-between">
              <div className="flex flex-col w-full">
                <input
                  type="text"
                  name="user_name"
                  className="rounded w-full border border-gray-200 py-3 px-5 bg-gray-200 text-black my-2"
                  placeholder="Enter Name"
                  required
                />
              </div>
            </div>

            <div className="flex flex-row gap-4 xl:gap-6 xl:flex-row justify-between">
              <div className="flex flex-col w-full xl:w-1/2">
                <input
                  type="email"
                  name="user_email"
                  className="rounded w-full border border-gray-200 py-3 px-5 bg-gray-200 text-black my-2"
                  placeholder="Enter Email"
                  required
                />
              </div>
              <div className="flex flex-col w-full xl:w-1/2">
                <input
                  type="text"
                  name="user_phone"
                  className="rounded w-full border border-gray-200 py-3 px-5 bg-gray-200 text-black my-2"
                  placeholder="Enter Phone"
                  required
                />
              </div>
            </div>

            <div className="flex flex-col my-2">
              <textarea
                name="message"
                rows="10"
                className="rounded mb-5 bg-gray-200 w-full pl-2"
                placeholder="Your Message"
                required
              ></textarea>
            </div>
            {alert.show && (
              <div className="mt-4 mb-2 text-center">
                <AlertMessage type={alert.type} message={alert.message} />
              </div>
            )}
            <div className="mt-2 w-full text-center rounded-lg py-3 font-bold text-base">
              <button
                type="submit"
                className="w-full text-white hover:bg-pink-400 bg-pink-500 py-3 tex-center rounded"
              >
                Submit Message
              </button>
            </div>
          </div>
        </form>

        <div className="lg:flex">
          <div className="my-auto text-blue-800">
            <h1 className="font-bold flex justify-center xl:justify-self-start text-2xl">
              For more enquiries?
            </h1>
            <p className="flex justify-center xl:items-end">
              You can reach out to us using these
            </p>
            <p className="flex justify-center xl:justify-self-start">details</p>
            <ul className="flex flex-col justify-center mt-5 space-y-8">
              <a
                target="_blank"
                href="tel:0548715098"
                rel="noopener noreferrer"
              >
                <li className="hover:bg-slate-100 flex gap-3 p-2 rounded-lg">
                  <span className="text-3xl h-12 w-12 rounded border border-black-400 bg-blue-800 grid place-items-center text-white">
                    <FaPhoneAlt />
                  </span>
                  <div>
                    <span>Phone</span>
                    <p>0558715098</p>
                  </div>
                </li>
              </a>
              <a
                target="_blank"
                href="mailto:support@event-pulse.com"
                rel="noopener noreferrer"
              >
                <li className="hover:bg-slate-100 flex gap-3 p-2 rounded-lg">
                  <span className="h-12 w-12 text-white bg-blue-800 rounded grid place-items-center text-3xl">
                    <MdMarkEmailRead />
                  </span>
                  <div>
                    <p>Email</p>
                    <p>support@event-pulse.com</p>
                  </div>
                </li>
              </a>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactForm;
