// components/modal/Modal.jsx
'use client';

import React, { useEffect } from 'react';
import { FaRegAddressCard } from "react-icons/fa";
import { MdPersonSearch } from "react-icons/md";
import { FaRegMoneyBillAlt } from "react-icons/fa";
import { MdOutlinePrivacyTip } from "react-icons/md";
import { IoIosInformationCircleOutline } from "react-icons/io";
import { MdOutlinePolicy } from "react-icons/md";
import { FaTiktok, FaGithub, FaInstagram } from "react-icons/fa";


export default function Modal({ isOpen, onClose }) {
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (e.target.classList.contains('modal-overlay')) {
        onClose();
      }
    };
    window.addEventListener('click', handleClickOutside);
    return () => window.removeEventListener('click', handleClickOutside);
  }, [onClose]);

  if (!isOpen) return null;

  return (
    <div
      className={`${
        isOpen ? "z-[99999]" : "hidden"
      } fixed top-0 left-0 overflow-y-auto no-scrollbar w-full h-screen sm:py-15 bg-black/70 sm:px-8 px-4 py-5 backdrop-blur-sm`}
    >
      <div className="flex items-center justify-center">
        <div
          className="w-full max-w-2xl h-100 rounded-xl shadow-3 shadow-lg bg-cover bg-center text-white p-5 relative modal-content border border-white"
          style={{ backgroundImage: `url('https://i.postimg.cc/26bYjLC2/new2.jpg')` }}
        >

          {/* Close Button */}
          <button
            onClick={onClose}
            aria-label="button for close modal"
            className="absolute top-0 right-0 sm:top-6 sm:right-6 flex items-center justify-center w-10 h-10 rounded-full ease-in duration-150 bg-white/25 text-white hover:text-red-500 cursor-pointer"
          >
            &times;
          </button>

          {/* Modal Content */}
          <div className="absolute flex flex-col gap-2 text-lg mt-26">
              <a href="/privacy" className="flex items-center hover:underline text-white">
                  <span>Profile-card info</span>
              <FaRegAddressCard className="ml-30 text-xl" /></a>
              <a href="/terms" className="flex items-center hover:underline text-white">
                  <span>Profile-site info</span>
              <MdPersonSearch className="ml-32 text-xl" /></a>
              <a href="/terms" className="flex items-center hover:underline text-white">
                  <span>Payment</span>
                      <FaRegMoneyBillAlt className="ml-45 text-xl"/></a>
              <a href="/terms" className="flex items-center hover:underline text-white">
                  <span>General enquiry</span>
                      <IoIosInformationCircleOutline className="ml-31 text-xl"/></a>
              <a href="/terms" className="flex items-center hover:underline text-white">
                  <span>Privacy policy</span>
                  <MdOutlinePrivacyTip className="ml-35.5 text-xl"/></a>
              <a href="/terms" className="flex items-center hover:underline text-white">
                  <span>Terms of service</span>
              <MdOutlinePolicy className="ml-31 text-xl"/></a>
            </div>
            <div className="absolute flex gap-4 mt-85">
                <a href="https://facebook.com/yourpage" target="_blank" rel="noopener noreferrer">
                    <FaInstagram className="text-white text-xl hover:text-blue-500 transition" />
                </a>
                <a href="https://twitter.com/yourhandle" target="_blank" rel="noopener noreferrer">
                    <FaTiktok className="text-white text-xl hover:text-sky-400 transition" />
                </a>
                <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">
                    <FaGithub className="text-white text-xl hover:text-blue-400 transition" />
                </a>
            </div>
          <div className="mt-8 space-y-4 text-center">
            <h2 className="text-sm text-gray-300 ml-100 mt-20">ScanQR is a smart, contactless
profile-sharing solution designed
to simplify how individuals and
professionals connect. Each
ScanQR card is embedded with a
unique QR code. When someone
scans your card using a
smartphone, they are instantly
taken to your personalized profile
page.

Your profile site showcases
essential information like your
name, bio, and profile photo
along with direct links to your
social media, website, portfolio,
or contact details. </h2>
          </div>
        </div>
      </div>
    </div>
  );
}
