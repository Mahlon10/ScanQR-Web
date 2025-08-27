"use client";
import React from "react";
import Link from 'next/link';

export default function PricingCard() {
  return (
    <div className="w-[460px] p-0 rounded-[32px] flex flex-col bg-gradient-to-tr from-[#787878] via-[#787878] via-65% to-[#787878]">
      {/* Title Section */}
      <div className="flex items-center justify-between px-4 py-3 text-white">
        <p className="text-sm font-semibold italic">
          MOST POPULAR
        </p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M10.277 16.515c.005-.11.187-.154.24-.058c.254.45.686 1.111 1.177 1.412c.49.3 1.275.386 1.791.408c.11.005.154.186.058.24c-.45.254-1.111.686-1.412 1.176s-.386 1.276-.408 1.792c-.005.11-.187.153-.24.057c-.254-.45-.686-1.11-1.176-1.411s-1.276-.386-1.792-.408c-.11-.005-.153-.187-.057-.24c.45-.254 1.11-.686 1.411-1.177c.301-.49.386-1.276.408-1.791m8.215-1c-.008-.11-.2-.156-.257-.062c-.172.283-.421.623-.697.793s-.693.236-1.023.262c-.11.008-.155.2-.062.257c.283.172.624.42.793.697s.237.693.262 1.023c.009.11.2.155.258.061c.172-.282.42-.623.697-.792s.692-.237 1.022-.262c.11-.009.156-.2.062-.258c-.283-.172-.624-.42-.793-.697s-.236-.692-.262-1.022M14.704 4.002l-.242-.306c-.937-1.183-1.405-1.775-1.95-1.688c-.545.088-.806.796-1.327 2.213l-.134.366c-.149.403-.223.604-.364.752c-.143.148-.336.225-.724.38l-.353.141l-.248.1c-1.2.48-1.804.753-1.881 1.283c-.082.565.49 1.049 1.634 2.016l.296.25c.325.275.488.413.58.6c.094.187.107.403.134.835l.024.393c.093 1.52.14 2.28.634 2.542s1.108-.147 2.336-.966l.318-.212c.35-.233.524-.35.723-.381c.2-.032.402.024.806.136l.368.102c1.422.394 2.133.591 2.52.188c.388-.403.196-1.14-.19-2.613l-.099-.381c-.11-.419-.164-.628-.134-.835s.142-.389.365-.752l.203-.33c.786-1.276 1.179-1.914.924-2.426c-.254-.51-.987-.557-2.454-.648l-.379-.024c-.417-.026-.625-.039-.806-.135c-.18-.096-.314-.264-.58-.6m-5.869 9.324C6.698 14.37 4.919 16.024 4.248 18c-.752-4.707.292-7.747 1.965-9.637c.144.295.332.539.5.73c.35.396.852.82 1.362 1.251l.367.31l.17.145c.005.064.01.14.015.237l.03.485c.04.655.08 1.294.178 1.805"></path>
        </svg>
      </div>

      {/* Card Content */}
      <div className="w-full h-full bg-[#161a20] rounded-[30px] text-[#838383] text-xs p-5 flex flex-col gap-3">
        <p className="font-semibold text-[#bab9b9]">Professional</p>
        <p className="text-3xl text-white font-bold">
          $98,00 <span className="text-sm font-normal">/ month</span>
        </p>
        <p className="text-xs">
          Best for growing startups and growth companies
        </p>
        <Link href="/PurchaseForm">
        <button className="bg-[#a1a0b7] via-65% to-[#272727] py-2 w-60 rounded-md text-black text-lg font-semibold shadow-inner shadow-white/60 transition-transform duration-300 hover:scale-105 hover:text-white hover:drop-shadow-[0_0_8px_#fff] active:scale-100 cursor-pointer">
          PURCHASE NOW
        </button>
        </Link>
      </div>
    </div>
  );
}
