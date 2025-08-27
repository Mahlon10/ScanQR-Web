'use client';

import React, { useState, useEffect } from 'react';
import ProfileCardInfoModal from "./ModalPages/Profile-card_info";
import ProfileSiteInfoModal from "./ModalPages/Profile-site_info";
import PrivacyPolicy from "./ModalPages/Privacy_policy";
import GeneralEnquiryModal from "./ModalPages/General_Enquiry";
import TermsOfServiceModal from "./ModalPages/Terms_of_service";
import { FaRegAddressCard, FaRegMoneyBillAlt, FaTiktok, FaGithub, FaInstagram } from "react-icons/fa";
import { MdPersonSearch, MdOutlinePrivacyTip, MdOutlinePolicy } from "react-icons/md";
import { IoIosInformationCircleOutline } from "react-icons/io";

export default function MainModal({ isOpen, onClose }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalOpen2, setIsModalOpen2] = useState(false);
  const [isModalOpen3, setIsModalOpen3] = useState(false);
  const [isModalOpen4, setIsModalOpen4] = useState(false);
  const [isModalOpen5, setIsModalOpen5] = useState(false);

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
      } fixed top-0 left-0 overflow-y-auto no-scrollbar w-full h-screen sm:py-30 bg-black/70 sm:px-8 px-4 py-5 backdrop-blur-sm`}
    >
      <div className="flex items-center justify-center">
        <div
            className="w-full max-w-2xl h-100 rounded-xl shadow-3 shadow-lg bg-cover bg-center text-white p-5 relative modal-content border border-white"
            style={{ backgroundImage: `url('https://i.postimg.cc/26bYjLC2/new2.jpg')` }}
        >
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close modal"
          className="absolute top-0 right-0 sm:top-6 sm:right-6 flex items-center justify-center w-10 h-10 rounded-full ease-in duration-150 bg-white/25 text-white hover:text-red-500 cursor-pointer"
        >
          &times;
        </button>

        {/* Modal Content */}
        <div className="absolute flex flex-col gap-2 text-lg mt-26">
          {/* Options */}
            <button
              onClick={() => setIsModalOpen(true)}
              className="flex items-center text-white cursor-pointer group relative"
            >
              <span className="relative after:content-[''] after:absolute after:left-0
                after:bottom-[-2px] after:h-[2px] after:w-0 after:bg-white after:transition-all
                after:duration-300 group-hover:after:w-1/2">
                  Profile-card info
              </span>
              <FaRegAddressCard className="ml-30 text-xl" />
            </button>

            <button
                onClick={() => setIsModalOpen2(true)}
                className="flex items-center text-white cursor-pointer group relative"
            >
                <span className="relative after:content-[''] after:absolute after:left-0
                after:bottom-[-2px] after:h-[2px] after:w-0 after:bg-white after:transition-all
                after:duration-300 group-hover:after:w-1/2">
                    Profile-site info
                </span>
                <MdPersonSearch className="ml-32 text-xl" />
            </button>

            <button
              onClick={() => setIsModalOpen(true)}
              className="flex items-center text-white cursor-pointer group relative"
            >
              <span className="relative after:content-[''] after:absolute after:left-0
                after:bottom-[-2px] after:h-[2px] after:w-0 after:bg-white after:transition-all
                after:duration-300 group-hover:after:w-1/2">
                  Payment
              </span>
              <FaRegMoneyBillAlt className="ml-45 text-xl" />
            </button>

            <button
              onClick={() => setIsModalOpen5(true)}
              className="flex items-center text-white cursor-pointer group relative"
            >
              <span className="relative after:content-[''] after:absolute after:left-0
                after:bottom-[-2px] after:h-[2px] after:w-0 after:bg-white after:transition-all
                after:duration-300 group-hover:after:w-1/2">
                  General enquiry
              </span>
              <IoIosInformationCircleOutline className="ml-31 text-xl" />
            </button>

            <button
              onClick={() => setIsModalOpen3(true)}
              className="flex items-center text-white cursor-pointer group relative"
            >
              <span className="relative after:content-[''] after:absolute after:left-0
                after:bottom-[-2px] after:h-[2px] after:w-0 after:bg-white after:transition-all
                after:duration-300 group-hover:after:w-1/2">
                  Privacy policy
              </span>
              <MdOutlinePrivacyTip className="ml-35.5 text-xl" />
            </button>

            <button
              onClick={() => setIsModalOpen4(true)}
              className="flex items-center text-white cursor-pointer group relative"
            >
              <span className="relative after:content-[''] after:absolute after:left-0
                after:bottom-[-2px] after:h-[2px] after:w-0 after:bg-white after:transition-all
                after:duration-300 group-hover:after:w-1/2">
                  Terms of service
              </span>
              <MdOutlinePolicy className="ml-31 text-xl" />
            </button>
          </div>

          {/* Social Links */}
          <div className="absolute flex gap-4 mt-85">
            <a href="https://facebook.com/yourpage" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="text-white text-xl hover:text-blue-500 transition" />
            </a>
            <a href="https://twitter.com/yourhandle" target="_blank" rel="noopener noreferrer">
              <FaTiktok className="text-xl hover:text-sky-400 transition" />
            </a>
            <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">
              <FaGithub className="text-xl hover:text-gray-400 transition" />
            </a>
          </div>

          {/* Description */}
          <div className="mt-8 space-y-4 text-center">
            <h2 className="text-sm text-gray-300 ml-100 mt-20">
              ScanQR is a smart, contactless profile-sharing solution
              designed to simplify how individuals and professionals connect.
              Each ScanQR card is embedded with a unique QR code. When someone
              scans your card using a smartphone, they are instantly taken to
              your personalized profile page. Your profile site showcases
              essential information like your name, bio, and profile photo along
              with direct links to your social media, website, portfolio, or
              contact details.
            </h2>
          </div>

        {/* Nested Modal */}
        <ProfileCardInfoModal isOpen1={isModalOpen} onClose1={() => setIsModalOpen(false)} />
        <ProfileSiteInfoModal isOpen2={isModalOpen2} onClose2={() => setIsModalOpen2(false)} />
        <PrivacyPolicy isOpen3={isModalOpen3} onClose3={() => setIsModalOpen3(false)} />
        <TermsOfServiceModal isOpen4={isModalOpen4} onClose4={() => setIsModalOpen4(false)} />
        <GeneralEnquiryModal isOpen5={isModalOpen5} onClose5={() => setIsModalOpen5(false)} />
      </div>
    </div>
   </div>
  );
}
