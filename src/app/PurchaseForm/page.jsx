"use client";

import React, { useState } from "react";
import Image from "next/image";

export default function Paymentform() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    category: "",
    style: "",
    color: "",
    logo: null,
    plan: "",
    paymentMethod: "",
    termsAccepted: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : type === "file" ? files[0] : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    alert("Purchase submitted successfully!");
  };
  const InfoTooltip = ({ text }) => (
  <span className="relative inline-block ml-1">
    <span className="cursor-pointer text-indigo-400 font-bold group relative">
      (i)
      <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-64 p-2 text-sm text-white bg-gray-800 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-50 pointer-events-none whitespace-normal">
        {text}
      </span>
    </span>
  </span>
);

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-black p-6">
      <div className="w-full max-w-3xl bg-white/10 backdrop-blur-md rounded-2xl shadow-lg">

        {/* Top Banner */}
        <div className="h-40 w-full relative">
          <Image
            src="/land.jpg"
            alt="Form Banner"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <h1 className="text-3xl font-bold text-white">
              ScanQR Purchase Form
            </h1>
          </div>
        </div>

        {/* Form Content */}
        <div className="p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Personal Information */}
            <div>
              <label className="block text-sm font-medium text-white mb-2">
                Full Name <InfoTooltip text="We’ll use your name to personalize your QR card and for transaction records." />
              </label>
              <input
                type="text"
                name="name"
                onChange={handleChange}
                required
                className="w-full p-3 rounded-lg bg-white/20 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-white mb-2">
                  Email Address <InfoTooltip text="We’ll send your payment receipt, order updates, and digital copy of your QR code here." />
                </label>
                <input
                  type="email"
                  name="email"
                  onChange={handleChange}
                  required
                  className="w-full p-3 rounded-lg bg-white/20 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-white mb-2">
                  Phone Number <InfoTooltip text="In case we need to reach you quickly about your order or delivery." />
                </label>
                <input
                  type="tel"
                  name="phone"
                  onChange={handleChange}
                  required
                  className="w-full p-3 rounded-lg bg-white/20 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
            </div>

            {/* Category Selection */}
            <div>
              <label className="block text-sm font-medium text-white mb-2">
                QR Card Category <InfoTooltip text="Choose the type of QR card you want so we can customize your product." />
              </label>
              <select
                name="category"
                onChange={handleChange}
                required
                className="w-full p-3 rounded-lg bg-white/20 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                <option value="" className="text-black">Select Category</option>
                <option value="Professional" className="text-black">Professional</option>
                <option value="Designer" className="text-black">Designer</option>
                <option value="Developer" className="text-black">Developer</option>
                <option value="Fashion" className="text-black">Fashion</option>
                <option value="Artist" className="text-black">Artist</option>
                <option value="Blogger" className="text-black">Blogger</option>
                <option value="General" className="text-black">General</option>
              </select>
            </div>

            {/* Card Preferences */}
            <div>
              <label className="block text-sm font-medium text-white mb-2">
                Card Style <InfoTooltip text="Helps us design your card according to your taste." />
              </label>
              <select
                name="style"
                onChange={handleChange}
                className="w-full p-3 rounded-lg bg-white/20 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                <option value="">Choose Style</option>
                <option value="modern">Modern</option>
                <option value="classic">Classic</option>
                <option value="minimal">Minimal</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-white mb-2">
                Preferred Color Theme <InfoTooltip text="We’ll apply this color to your QR card background and layout." />
              </label>
              <input
                type="color"
                name="color"
                onChange={handleChange}
                className="w-16 h-10 p-1 rounded-lg cursor-pointer"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-white mb-2">
                Upload Logo / Profile Picture <InfoTooltip text="If you’d like branding or your own photo on the card." />
              </label>
              <input
                type="file"
                name="logo"
                onChange={handleChange}
                className="w-full text-white cursor-pointer"
              />
            </div>
            {/* Purchase & Payment */}
            <div>
              <label className="block text-sm font-medium text-white mb-2">
                Payment Method <InfoTooltip text="Select your preferred way to pay securely." />
              </label>
              <div className="flex flex-wrap gap-4 text-white">
                {["Visa", "Mobile Money", "PayPal", "Paystack"].map(
                  (method) => (
                    <label
                      key={method}
                      className="flex items-center gap-2 cursor-pointer"
                    >
                      <input
                        type="radio"
                        name="paymentMethod"
                        value={method}
                        onChange={handleChange}
                        className="text-indigo-500"
                      />
                      {method}
                    </label>
                  )
                )}
              </div>
            </div>

            {/* Confirmation */}
            <div className="space-y-2">
              <label className="flex items-center gap-2 text-white">
                <input
                  type="checkbox"
                  name="termsAccepted"
                  onChange={handleChange}
                  required
                />
                I confirm the details above are correct
              </label>
              <label className="flex items-center gap-2 text-white">
                <input type="checkbox" required /> I accept the Terms & Conditions
              </label>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full py-3 bg-indigo-600 hover:bg-indigo-700 transition-all rounded-lg text-white font-semibold shadow-md cursor-pointer"
            >
              Complete Purchase
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
