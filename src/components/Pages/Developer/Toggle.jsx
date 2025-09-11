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
    { icon: 'https://i.ibb.co/rRMFDhsB/linkedin.png', name: 'Linkedin', link: 'https://www.linkedin.com/login' },
    { icon: 'https://i.ibb.co/VYrjdmZ1/twitter.png', name: 'Twitter', link: 'https://twitter.com' },
    { icon: 'https://i.ibb.co/20Z411rr/instagram.png', name: 'Instagram', link: 'https://www.instagram.com/scan.qr_app/' },
    { icon: 'https://i.ibb.co/23zRcTcD/whatsapp.png', name: 'Watsapp', link: 'https://www.whatsapp.com/download' },
    { icon: 'https://i.ibb.co/whV28znb/cofounderlab.png', name: 'CoFoundersLab', link: 'https://cofounderslab.com/' },
  ];

  const organisationIcons = [
    { icon: 'https://i.ibb.co/zh0fJwg9/globe.png', name: 'Profile', link: 'https://scanqr-web.vercel.app/' },
    { icon: 'https://i.ibb.co/hJJRDMNr/github-icon-svgrepo-com.png', name: 'Github', link: 'https://github.com/login' },
    { icon: 'https://i.ibb.co/8nY9v1XC/discord-icon-svgrepo-com.png', name: 'Discord', link: 'https://canary.discord.com/login' },
    { icon: 'https://i.ibb.co/tNnfpL1/Kg.png', name: 'Kaggle', link: 'https://www.kaggle.com/account/login' },
    { icon: 'https://i.ibb.co/Gf07kNC6/reddit-color-svgrepo-com.png', name: 'Reddit', link: 'https://www.reddit.com/login/' },
    { icon: 'https://i.ibb.co/Fb3h5v2w/upwork-svgrepo-com-1.png', name: 'Upwork', link: 'https://www.upwork.com/ab/account-security/login' },
    { icon: 'https://i.ibb.co/dsWNdKTy/dev.png', name: 'DEVCommunity', link: 'https://dev.to/enter' },
    { icon: 'https://i.ibb.co/cK1CQLgg/gitlab-svgrepo-com.png', name: 'Gitlab', link: 'https://gitlab.com/users/sign_in' },
    { icon: 'https://i.ibb.co/pjdT2rJw/coffee.png', name: 'Buy me a coffee', link: 'https://buymeacoffee.com/login' },
  ];

  return (
    <div className="flex flex-col items-center space-y-4 text-white mx-[-90]">
      {/* Icons with dual layer transitions */}
      <div className="relative w-full h-[220px] overflow-hidden">
        {/* Personal Icons */}
        <div
          className={`absolute inset-0 grid grid-cols-3 transition-all duration-700 ease-in-out transform ${
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
          className={`absolute inset-0 grid grid-cols-3 gap-3 transition-all duration-700 ease-in-out transform ${
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
          Community/Portfolio
        </span>
      </div>
    </div>
  );
};

export default ThemeToggle;
