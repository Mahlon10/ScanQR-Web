import React from "react";
import DigitalProduct from "@/components/Navs/digital-product";
import { Metadata } from "next";

export const metadata = {
  title: "Shop Details Page | NextCommerce Nextjs E-commerce template",
  description: "This is Shop Details Page for NextCommerce Template",
};


const DigitalProductPage = () => {
  return (
    <main>
      <DigitalProduct />
    </main>
  );
};

export default DigitalProductPage;
