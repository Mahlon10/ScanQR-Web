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

  const personalIcons = [
    { icon: 'https://i.ibb.co/rRMFDhsB/linkedin.png', name: 'Linkedin', link: 'https://facebook.com' },
    { icon: 'https://i.ibb.co/VYrjdmZ1/twitter.png', name: 'Twitter', link: 'https://twitter.com' },
    { icon: 'https://i.ibb.co/20Z411rr/instagram.png', name: 'Instagram', link: 'https://instagram.com' },
    { icon: 'https://i.ibb.co/PsZLMQHY/fivs.png', name: 'Fiverr', link: 'https://github.com' },
    { icon: 'https://i.ibb.co/whV28znb/cofounderlab.png', name: 'CoFoundersLab', link: 'https://linkedin.com' },
    { icon: 'https://i.ibb.co/Jj9ND1hP/selar.png', name: 'Selar', link: 'https://linkedin.com' },
  ];

  const organisationIcons = [
    { icon: 'https://i.ibb.co/zh0fJwg9/globe.png', name: 'Website', link: 'https://linkedin.com' },
    { icon: 'https://i.ibb.co/rRMFDhsB/linkedin.png', name: 'LinkedIn', link: 'https://linkedin.com' },
    { icon: 'https://i.ibb.co/VYrjdmZ1/twitter.png', name: 'Twitter', link: 'https://twitter.com' },
    { icon: 'https://i.ibb.co/cSVtNSYb/social.png', name: 'Amazon', link: 'https://github.com' },
    { icon: 'https://i.ibb.co/RGZMXsFq/etsy.png', name: 'Etsy', link: 'https://github.com' },
    { icon: 'https://i.ibb.co/yBSr2wLB/wats.png', name: 'Watsapp Business', link: 'https://github.com' },
  ];

  return (
    <div className="flex flex-col items-center space-y-4 text-white mx-[-90]">
      {/* Organisation Logo */}
      <div className="h-[92px] flex items-center justify-center">
        <img
          src="https://i.postimg.cc/3Rjg29MX/BC2.png"
          alt="Organisation Logo"
          className={`w-23 h-23 object-contain transition-opacity duration-500 ${
            isDark ? 'opacity-100' : 'opacity-0'
          }`}
        />
      </div>

      {/* Icons with dual layer transitions */}
      <div className="relative w-full h-[180px] overflow-hidden">
        {/* Personal Icons */}
        <div
          className={`absolute inset-0 grid grid-cols-3 gap-4 transition-all duration-700 ease-in-out transform ${
            isDark ? 'opacity-0 -translate-x-10 z-0' : 'opacity-100 translate-x-0 z-10'
          }`}
        >
          {personalIcons.map((item, index) => (
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
          {organisationIcons.map((item, index) => (
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
