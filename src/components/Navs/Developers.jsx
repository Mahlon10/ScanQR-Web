'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Modal from '../Modal';

export default function Developers() {
  const [isOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  return (
    <div
      className="w-full h-screen flex justify-center items-center bg-cover bg-center"
      style={{ backgroundImage: 'url("/Professional.jpg")' }}
    >
      <div className="flex flex-col items-start gap-6 mt-10 ml-45">
        <Link href="/view">
          <button className="bg-white text-blue-600 font-semibold px-3 py-1 ml-58 rounded-md transition duration-300 ease-in-out hover:bg-blue-100 hover:scale-105 cursor-pointer">
            View
          </button>
        </Link>

        <Link href="/purchase">
          <button className="bg-transparent text-white font-regular px-2 py-2 ml-45 rounded-md border border-white transition duration-300 ease-in-out hover:bg-white hover:text-blue-600 hover:scale-105 cursor-pointer">
            Proceed to Purchase
          </button>
        </Link>

        <button
            onClick={openModal}
            className="fixed bottom-10 right-10 mr-40 bg-blue-600 text-white font-semibold px-5 py-2 rounded-md shadow-lg hover:bg-blue-700 transition duration-300 cursor-pointer"
          >
            More Options
          </button>
      </div>

      <Modal isOpen={isOpen} onClose={closeModal} />
    </div>
  );
}
