'use client';

import React, { useEffect, useState } from 'react';

const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsDark((prev) => !prev);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const personal1 = [
    { icon: 'https://i.ibb.co/20Z411rr/instagram.png', name: 'Instagram', link: 'https://www.instagram.com' },
    { icon: 'https://i.ibb.co/rRMFDhsB/linkedin.png', name: 'Linkedin', link: 'https://www.linkedin.com/login' },
    { icon: 'https://i.ibb.co/RprQ2Mbb/behance.png', name: 'Behance', link: 'https://www.linkedin.com/login' },
    { icon: 'https://i.ibb.co/HTkmXs66/pinterest.png', name: 'Pinterest', link: 'https://www.pinterest.com/login/' },
    { icon: 'https://i.ibb.co/pjjpYNr4/social-1.png', name: 'Dribbble', link: 'https://dribbble.com/session/new' },
    { icon: 'https://i.ibb.co/Z181L6WH/unsplash.png', name: 'Unsplash', link: 'https://unsplash.com/login/' },
  ];

  const business = [
    { icon: 'https://i.ibb.co/S4LPS5Qs/upwork-svgrepo-com.png', name: 'Upwork', link: 'https://www.upwork.com/ab/account-security/login' },
    { icon: 'https://i.ibb.co/YFdLZYBp/opensea.png', name: 'Opensea', link: 'https://opensea.io/MyAccount' },
    { icon: 'https://i.ibb.co/PsZLMQHY/fivs.png', name: 'Fiverr', link: 'https://www.fiverr.com/' },
    { icon: 'https://i.ibb.co/ynLzydGT/payhip.png', name: 'Payhip', link: 'https://payhip.com/auth/login' },
    { icon: 'https://i.ibb.co/yBSr2wLB/wats.png', name: 'Watsapp Business', link: 'https://business.whatsapp.com/' },
    { icon: 'https://i.ibb.co/Jj9ND1hP/selar.png', name: 'Selar', link: 'https://selar.com/' },
  ];

  return (
    <div className="flex flex-col items-center space-y-4 text-white mx-[-90]">
      {/* Icons with dual layer transitions */}
      <div className="relative w-full h-[180px] overflow-hidden">
        {/* Personal Icons */}
        <div
          className={`absolute inset-0 grid grid-cols-3 gap-4 transition-all duration-700 ease-in-out transform ${
            isDark ? 'opacity-0 -translate-x-10 z-0' : 'opacity-100 translate-x-0 z-10'
          }`}
        >
          {personal1.map((item, index) => (
            <a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center px-1 text-xs hover:opacity-80 transform transition-transform duration-500 hover:scale-110"
            >
              <img src={item.icon} alt={item.name} className="w-11 h-11" />
              <span className="mt-1 text-[10px]">{item.name}</span>
            </a>
          ))}
        </div>

        {/* Organisation Icons */}
        <div
          className={`absolute inset-0 grid grid-cols-3 gap-4 transition-all duration-700 ease-in-out transform ${
            isDark ? 'opacity-100 translate-x-0 z-10' : 'opacity-0 translate-x-10 z-0'
          }`}
        >
          {business.map((item, index) => (
            <a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center px-1 text-xs hover:opacity-80 transform transition-transform duration-500 hover:scale-110"
            >
              <img src={item.icon} alt={item.name} className="w-11 h-11" />
              <span className="mt-1 text-[10px]">{item.name}</span>
            </a>
          ))}
        </div>
      </div>

      {/* Toggle Switch */}
      <label className="relative inline-block w-[90px] h-[40px] cursor-pointer">
        <div
          className="w-full h-full rounded-full bg-cover bg-center transition-all duration-500 ease-in-out border border-white shadow-[0_0_15px_rgba(255,255,255,0.5)]"
          style={{
            backgroundImage: isDark
              ? "url('https://i.postimg.cc/Bv6GPPjF/po.jpg')"
              : "url('https://i.postimg.cc/PqRnWfDR/bn.jpg')",
          }}
        >
          <div
            className={`absolute top-0 w-[40px] h-[40px] rounded-full transition-transform duration-500 ease-in-out transform overflow-hidden shadow-xl ${
              isDark ? 'translate-x-[52px]' : 'translate-x-0'
            }`}
          >
            <div
              className={`absolute inset-0 bg-cover bg-center transition-opacity duration-700 ${
                isDark ? 'opacity-0' : 'opacity-100'
              }`}
              style={{
                backgroundImage: "url('https://i.postimg.cc/J0MYf9CL/fdc.jpg')",
              }}
            />
            <div
              className={`absolute inset-0 bg-cover bg-center transition-opacity duration-700 ${
                isDark ? 'opacity-100' : 'opacity-0'
              }`}
              style={{
                backgroundImage: "url('https://i.postimg.cc/J0MYf9CL/fdc.jpg')",
              }}
            />
          </div>
        </div>
      </label>

      {/* Labels */}
      <div className="w-[90px] flex justify-between text-sm text-white mr-30 mb-4">
        <span
          className={`pl-9 transition-colors duration-300 ${
            !isDark ? 'text-cyan-100 font-semibold' : 'text-white'
          }`}
        >
          Personal
        </span>
        <span
          className={`pl-9 transition-colors duration-300 ${
            isDark ? 'text-cyan-100 font-semibold' : 'text-white'
          }`}
        >
          Business
        </span>
      </div>
    </div>
  );
};

export default ThemeToggle;
