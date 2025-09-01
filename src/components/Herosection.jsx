'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import MainModal from '../components/Modal';
import ThemeToggle from '../components/Toggle';
import Cardscan from '../components/Cardscan';


export default function HeroBanner() {
  const [isOpen, setModalOpen] = useState(false);
  const [isscanOpen, setScanOpen] = useState(false);
  const [showScanMessage, setShowScanMessage] = useState(false);
  const [isMobileScanTrigger, setIsMobileScanTrigger] = useState(false);

  const router = useRouter();

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  const openScan = () => {
    setScanOpen(true);
    setIsMobileScanTrigger(false); // default
  };
  const openMobileScan = () => {
    setScanOpen(true);
    setIsMobileScanTrigger(true); // track mobile demo
  };
  const closeScan = () => setScanOpen(false);

  useEffect(() => {
    if (isscanOpen && isMobileScanTrigger) {
      const timer = setTimeout(() => {
        setShowScanMessage(true);
        setTimeout(() => {
          router.push('/view');
        }, 1500); // wait 1.5s after message before redirect
      }, 4000); // initial 4s wait

      return () => clearTimeout(timer);
    }
  }, [isscanOpen, isMobileScanTrigger, router]);

  return (
    <div
      className="w-full h-screen flex justify-center items-center bg-cover bg-center relative z-0"
      style={{
        backgroundImage:
          'url("https://i.postimg.cc/fLsd39mN/background-professional.jpg")',
      }}
    >
      {/* Left Heading */}
      <div className="absolute top-24 left-10">
        <h1 className="text-4xl md:text-5xl text-white italic leading-tight">
          Get a <span style={{ color: '#d4e0e2' }}>profile card</span>
          <br />
          linked with <br />
          a <span style={{ color: '#d4e0e2' }}>one-page profile site</span>
        </h1>
      </div>

      {/* Buttons (Mobile-only View button) */}
      <div className="flex flex-col items-start gap-6 mt-10 ml-45">
        {/* Mobile View Demo Button (Triggers scan then redirect) */}
        <button
          onClick={openMobileScan}
          className="block md:hidden bg-white text-blue-600 mt-48 font-semibold px-3 py-1 ml-[-148] rounded-md hover:bg-blue-100 hover:scale-105 transition duration-300"
        >
          View Demo
        </button>

        {/* Purchase */}
        <Link href="/PaymentHero">
          <button className="
          hidden md:inline-block
          bg-transparent text-white px-2 py-2 ml-45
          border border-white rounded-md
          hover:bg-[#d4e0e2] hover:text-black hover:scale-105
          transition duration-300 cursor-pointer
          ">
            Proceed to Purchase
          </button>
        </Link>
        {/* Mobile version — visible only on small screens */}
        <div className="fixed bottom-30 left-1/2 transform -translate-x-1/2 md:hidden z-50">
          <Link href="/purchase">
            <button className="
            bg-transparent text-white px-4 py-2
            border border-white rounded-md
            hover:bg-[#d4e0e2] hover:text-black hover:scale-105
            transition duration-300 cursor-pointer
            ">
              Proceed to Purchase
            </button>
          </Link>
        </div>

        {/* More Options */}
        <button
          onClick={openModal}
          className="absolute bottom-60 right-25 mr-83 text-black font-semibold px-5 py-2 rounded-md shadow-lg
          bg-[#d4e0e2] border hover:bg-transparent hover:border-white hover:text-white transition duration-300 cursor-pointer"
        >
          More Options
        </button>
        <button
          onClick={openModal}
          className="fixed bottom-45 right-29 md:hidden text-black font-semibold px-5 py-2 rounded-md shadow-lg
          bg-[#d4e0e2] border hover:bg-transparent hover:border-white hover:text-white transition duration-300 cursor-pointer z-50"
        >
          More Options
        </button>
      </div>

      {/* Theme Toggle */}
      <div className="hidden md:block absolute bottom-16 right-6 md:right-42 scale-90 md:scale-100">
        <ThemeToggle />
      </div>

      {/* Desktop-only Scan Trigger Image */}
      <img
        src="https://i.postimg.cc/RZ6Q141R/cardscreen2.png"
        alt="Card Scan"
        onClick={openScan}
        className="hidden md:block absolute bottom-28 left-6 w-90 h-auto cursor-pointer hover:scale-105 transition"
      />
      <p className="hidden md:block absolute top-85 left-23 text-white text-base text-xl animate-pulse">
        Click Card to View Demo
      </p>

      {/* Bottom Center Text */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-center text-white">
        <div className="font-bold text-xl">Dennis Acquah</div>
        <div className="text-base">Acquah Properties</div>
      </div>

      {/* Modals */}
      <MainModal isOpen={isOpen} onClose={closeModal} />
      <Cardscan isscanOpen={isscanOpen} onClose={closeScan}>
        {showScanMessage && (
          <div className="text-white text-lg text-center mt-4 animate-pulse">
            Profile Scanned. Redirecting...
          </div>
        )}
      </Cardscan>
    </div>
  );
}
