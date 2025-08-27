"use client";

import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function PaymentPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    quantity: 1,
    paymentMethod: "card",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Checkout data:", formData);
    // 🔗 connect here to payment API (Stripe, Flutterwave, Paystack, etc.)
  };

  const pricePerUnit = 50; // Example price
  const totalPrice = formData.quantity * pricePerUnit;

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 px-4">
      <Card className="max-w-lg w-full shadow-lg rounded-2xl">
        <CardContent className="p-6 space-y-6">
          {/* Price Display */}
          <div className="text-center">
            <h2 className="text-2xl font-semibold text-gray-800">ScanQR Purchase</h2>
            <p className="text-lg mt-2 text-gray-600">₵{pricePerUnit} per QR Code</p>
            <p className="text-xl font-bold text-orange-700 mt-2">Total: ₵{totalPrice}</p>
          </div>

          {/* Purchase Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-3 border rounded-lg"
            />

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-3 border rounded-lg"
            />

            <input
              type="number"
              name="quantity"
              placeholder="Quantity"
              min="1"
              value={formData.quantity}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg"
            />

            {/* Payment Method Options */}
            <div>
              <label className="block font-medium text-gray-700 mb-2">Choose Payment Method:</label>
              <div className="flex gap-4">
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="card"
                    checked={formData.paymentMethod === "card"}
                    onChange={handleChange}
                  />
                  Card
                </label>
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="momo"
                    checked={formData.paymentMethod === "momo"}
                    onChange={handleChange}
                  />
                  Mobile Money
                </label>
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="paypal"
                    checked={formData.paymentMethod === "paypal"}
                    onChange={handleChange}
                  />
                  PayPal
                </label>
              </div>
            </div>

            {/* Checkout Button */}
            <Button
              type="submit"
              className="w-full bg-orange-700 text-white py-3 rounded-lg hover:bg-orange-800 transition"
            >
              Proceed to Checkout
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
