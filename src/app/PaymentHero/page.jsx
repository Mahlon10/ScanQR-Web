'use client';

import React from "react";
import PricingCard from "@/components/Pricetag";
import PaymentChannel from "@/components/PaymentOptions";

export default function PaymentHerosection() {
    return (
        <div
            className="w-full h-screen flex flex-col justify-end items-end bg-cover bg-center relative px-6"
            style={{
                backgroundImage:
                    'url("https://i.postimg.cc/MHYXH5Lx/Pricings.jpg")'
            }}
        >

            <div className="mb-18 mr-18">
                <PricingCard />
            </div>

            {/* Payment options directly below */}
            <PaymentChannel />
        </div>
    );
}
