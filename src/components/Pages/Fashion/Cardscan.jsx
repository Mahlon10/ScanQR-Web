// components/modal/Modal.jsx
'use client';

import React, { useEffect } from 'react';


export default function Cardscan({ isscanOpen, onClose }) {
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (e.target.classList.contains('modal-overlay')) {
        onClose();
      }
    };
    window.addEventListener('click', handleClickOutside);
    return () => window.removeEventListener('click', handleClickOutside);
  }, [onClose]);

  if (!isscanOpen) return null;

  return (
    <div
      className={`${
        isscanOpen ? "z-[99999]" : "hidden"
      } fixed top-0 left-0 overflow-y-auto no-scrollbar w-full h-screen sm:py-15 bg-black/70 sm:px-8 px-4 py-5 backdrop-blur-sm`}
    >
      <div className="flex items-center justify-center">
        <div
          className="w-full max-w-3xl h-100 rounded-xl shadow-3 shadow-lg bg-cover bg-center text-white p-5 relative modal-content border border-white"
          style={{ backgroundImage: `url('https://i.postimg.cc/DzC4VR9D/fash.jpg')` }}
        >

          {/* Close Button */}
          <button
            onClick={onClose}
            aria-label="button for close modal"
            className="absolute top-0 right-0 sm:top-6 sm:right-6 flex items-center justify-center w-10 h-10 rounded-full ease-in duration-150 bg-white/25 text-white hover:text-red-500 cursor-pointer"
          >
            &times;
          </button>
          <div className="absolute bottom-5 left-45 right-5 text-white text-base sm:text-sm p-4 mb-[-20]">
            <p>1. Open a QR scanner app on your phone</p>
            <p>2. Draw it a bit closer to this screen pointing to the QR region</p>
            <p>3. Click on the link for user profile site</p>
          </div>
          </div>
        </div>
      </div>
  );
}
