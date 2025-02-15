import React from "react";
import { FiPhone, FiMail, FiMapPin, FiClock } from "react-icons/fi";
import ContactForm from "../../component/Form/ContactForm";

const Contact = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 -mt-24 relative z-10">
        {/* Contact Cards */}
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {[
            {
              icon: FiPhone,
              title: "Phone",
              lines: ["+880 1810-058005", "Reservation: +880 1810-058005"],
            },
            {
              icon: FiMail,
              title: "Email",
              lines: [
                "info@hotelgreenland.com",
                "reservations@hotelgreenland.com",
              ],
            },
            {
              icon: FiMapPin,
              title: "Address",
              lines: ["123 Luxury Avenue", "Bandarban, Bangladesh"],
            },
            {
              icon: FiClock,
              title: "Hours",
              lines: ["24/7 Front Desk", "Check-in: 11 AM - Check-out: 10 AM"],
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-shadow duration-300 flex flex-col items-center text-center"
            >
              <div className="w-16 h-16 bg-emerald-100 text-emerald-500 rounded-full flex items-center justify-center mb-6">
                <item.icon className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold">{item.title}</h3>
              {item.lines.map((line, i) => (
                <p key={i} className="text-gray-600 text-sm mt-1">
                  {line}
                </p>
              ))}
            </div>
          ))}
        </div>

        {/* Contact Form Section */}
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <div className="space-y-6">
            <h2 className="text-4xl font-semibold mb-6 text-gray-800">
              Get in Touch
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Experience unparalleled luxury at Hotel Greenland. Whether you
              have questions about our amenities, need assistance with your
              reservation, or want to plan a special event, our dedicated team
              is here to help.
            </p>
            <div className="grid grid-cols-2 gap-6 mt-8">
              <img
                src="https://images.unsplash.com/photo-1578683010236-d716f9a3f461"
                alt="Hotel Lobby"
                className="rounded-lg shadow-lg"
              />
              <img
                src="https://www.travelandleisure.com/thmb/_m-pWvizq7o11cnnVDLZ6XceHYU=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/rosewood-carlyle-presidential-suite-LUXESUITE0122-0046808a88924e57922d78c7f1d9ca60.jpg"
                alt="Hotel Suite"
                className="rounded-lg shadow-lg mt-12"
              />
            </div>
          </div>

          <div className="bg-gray-50 p-8 rounded-xl shadow-lg">
            <h3 className="text-2xl font-semibold mb-6">Send Us a Message</h3>
            <ContactForm />
          </div>
        </div>

        {/* Map Section */}
        <div className="mb-20">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="grid md:grid-cols-3">
              <div className="p-8 md:col-span-1 bg-gray-900 text-white">
                <h3 className="text-2xl font-light mb-6">Visit Our Hotel</h3>
                <p className="text-gray-400 mb-6 leading-relaxed">
                  Located in the heart of Bandarban, Hotel Greenland offers easy
                  access to local attractions while providing a peaceful retreat
                  for our guests.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <FiMapPin className="w-5 h-5 text-emerald-400" />
                    <p className="text-sm">123 Luxury Avenue, Bandarban</p>
                  </div>
                  <div className="flex items-center space-x-4">
                    <FiPhone className="w-5 h-5 text-emerald-400" />
                    <p className="text-sm">+880 1810-058005</p>
                  </div>
                  <div className="flex items-center space-x-4">
                    <FiMail className="w-5 h-5 text-emerald-400" />
                    <p className="text-sm">info@hotelgreenland.com</p>
                  </div>
                </div>
              </div>
              <div className="md:col-span-2 h-[500px]">
                <iframe
                  className="w-full h-full"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1847.171139092693!2d92.21923687243037!3d22.18909496969414!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30ad6b38cb492611%3A0xf2bbfa416823b43b!2sHotel%20Green%20land%20Bandarban!5e0!3m2!1sen!2sbd!4v1680503113790!5m2!1sen!2sbd"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
