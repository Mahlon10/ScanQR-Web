'use client';

import React from "react";
import Image from "next/image";

export default function PaymentChannel() {
    return (
        <div className="mb-2 mr-28 text-center">
            <div className="grid grid-cols-2 gap-5 mb-5 justify-center items-center max-w-md mx-auto">
                <Image
                    src="/momo.jpg"
                    alt="Momo"
                    width={160}
                    height={160}
                    className="object-contain mx-auto"
                />
                <Image
                    src="/Visa.png"
                    alt="Visa"
                    width={140}
                    height={140}
                    className="object-contain mx-auto"
                />
                <Image
                    src="/Paystack.png"
                    alt="Paystack"
                    width={180}
                    height={180}
                    className="object-contain mx-auto"
                />
                <Image
                    src="/Paypal2.png"
                    alt="Paypal"
                    width={140}
                    height={140}
                    className="object-contain mx-auto"
                />
            </div>
        </div>
    );
}
