import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 m-0">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="col-span-1">
            <h3 className="text-xl font-bold mb-4">About Us</h3>
            <p>
              Welcome to ----x----x----, your trusted
              real estate partner. Our expert team is dedicated to helping you
              buy, sell, or invest with confidence. We offer personalized
              service, local market insights, and a commitment to your success.
              Discover your dream property with us today.
            </p>
          </div>
          <div className="col-span-1">
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul>
              <li className="mb-2">
                <a href="/" className="hover:underline">
                  Home
                </a>
              </li>
              <li className="mb-2">
                <a href="/contact" className="hover:underline">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div className="col-span-1">
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <p>
                H-10
            </p>
            <p>
                NIT Kurukshetra, Thanesar, Haryana
            </p>
            <p className="mt-4">
              <a href="mailto:12345678@nitkkr.ac.in" className="hover:underline">
                1234567890@nitkkr.ac.in
              </a>
            </p>
            <p>
              <a href="tel:+911234567890" className="hover:underline">
                +91 1234567890
              </a>
            </p>
          </div>
        </div>
        <div className="text-center mt-8">
          <p>&copy; 2069 ----x----x---- All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
