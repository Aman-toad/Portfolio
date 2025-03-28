"use client"

import React, { useState } from "react";
import { MapPin, Mail, Phone, Printer } from "lucide-react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {

    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Form submitted successfully!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-800 p-4">
      <div className="w-full max-w-4xl relative flex justify-center">
        {/* Main container with shadow */}
        <div className="bg-white rounded-lg shadow-xl w-[90%] flex relative">
          {/* sky blue contact info card */}
          <div className="red-container bg-sky-600 text-white p-8 w-[50%] absolute left-[-60px] top-[20px] bottom-[20px] z-10 shadow-2xl rounded-xl text-[10px] md:text-[16px] md:w-[40%]">
            <h2 className="text-2xl font-semibold mb-10">Contact Us</h2>

            <div className="flex items-start space-x-3 mb-6">
              <MapPin className="w-5 h-5 mt-1 flex-shrink-0" />
              <div>
                <p>00, ABC Nagar</p>
                <p>1100-- Delhi</p>
              </div>
            </div>

            <div className="flex items-center space-x-3 mb-6">
              <Mail className="w-5 h-5 flex-shrink-0" />
              <p>amanfalse@email.com</p>
            </div>

            <div className="flex items-center space-x-3 mb-6">
              <Phone className="w-5 h-5 flex-shrink-0" />
              <p>+91 971-------</p>
            </div>

          </div>

          {/* White form container */}
          <div className="white-container ml-[35%] p-8 w-[75%]">
            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-slate-700 mb-2">Get in Touch</h2>
              <p className="text-slate-500">Feel free to drop us a line below!</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  className="w-full p-3 bg-gray-50 border border-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-red-300"
                  required
                />
              </div>

              <div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  className="w-full p-3 bg-gray-50 border border-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-red-300"
                  required
                />
              </div>

              <div>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Typing your message here..."
                  className="w-full p-3 bg-gray-50 border border-gray-100 rounded-md h-32 resize-none focus:outline-none focus:ring-2 focus:ring-red-300"
                  required
                />
              </div>

              <div className="pt-4 flex justify-start">
                <button
                  type="submit"
                  className="bg-sky-600 hover:bg-sky-500 text-white font-medium py-3 px-12 rounded-full cursor-pointer transition-colors duration-300"
                >
                  SEND
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
