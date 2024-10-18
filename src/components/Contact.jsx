import React, {useState} from "react";
import { CONTACT } from "../contances";
import { FaLocationDot } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import emailjs from "emailjs-com"
import { motion } from "framer-motion";

const Contact = () => {
    const [formData, setFormData] = useState(
        {
            name: "",
            email: "",
            message: "",
        });
const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
};
  const handleSubmit = (e) => {
    e.preventDefault();
  emailjs
    .send(
      "service_flsvbrv", // Replace with your EmailJS service ID
      "template_9r2pura", // Replace with your EmailJS template ID
      formData,
      "iY1EFI1jk-WSI6ubo" // Replace with your EmailJS user ID
    )
    .then(
      (result) => {
        alert("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      },
      (error) => {
        alert("Failed to send message.");
        console.log(error.text);
      }
    );


  };

  return (
    <div className="border-b border-neutral-900 pb-20">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="text-4xl my-10 text-center"
      >
        Get in Touch
      </motion.h1>
      <div className="mb-8 flex flex-wrap lg:justify-center gap-10">
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }}
          className=" tracking-tighter"
        >
          <p className="my-4 flex gap-2">
            {" "}
            <FaLocationDot />
            {CONTACT.address}{" "}
          </p>
          <p className="my-4 flex gap-2">
            {" "}
            <IoCall /> {CONTACT.phoneNo}
          </p>
          <a
            href="#"
            className=" flex gap-2 no-underline hover:no-underline"
            style={{ textDecoration: "none" }}
          >
            <MdEmail />
            {CONTACT.email}
          </a>
        </motion.div>
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 1 }}
        >
          <form onSubmit={handleSubmit}>
            <div className="mb-6">
              {/* <label for="name" className="block text-sm font-medium text-gray-700">Name</label> */}
              <input
                type="text"
                id="name"
                name="name"
                required
                className="mt-1 block w-full bg-transparent border-b-2 border-gray-300 focus:border-blue-500 focus:outline-none placeholder-gray-500 focus:placeholder-transparent"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            <div className="mb-6">
              {/* <label for="email" className="block text-sm font-medium text-gray-700">Email</label> */}
              <input
                type="email"
                id="email"
                name="email"
                required
                className="mt-1 block w-full bg-transparent border-b-2 border-gray-300 focus:border-blue-500 focus:outline-none placeholder-gray-500 focus:placeholder-transparent"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div className="mb-6">
              <label
                for="message"
                className="block text-sm font-medium text-gray-700"
              ></label>
              <textarea
                id="message"
                name="message"
                rows="4"
                required
                className="mt-1 block w-full bg-transparent border-b-2 border-gray-300 focus:border-blue-500 focus:outline-none placeholder-gray-500 focus:placeholder-transparent"
                placeholder="Write a Message"
                value={formData.message}
                onChange={handleChange}
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 rounded-md"
            >
              Submit
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
