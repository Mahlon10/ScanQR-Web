"use client";
import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function ProfileSiteInfoModal({ isOpen2, onClose2 }) {
  return (
    <Dialog open={isOpen2} onOpenChange={onClose2}>
      <DialogContent className="max-h-[80vh] overflow-y-auto rounded-2xl p-6 [&>button]:cursor-pointer">
        <DialogHeader>
          <DialogTitle className="text-2xl font-semibold text-blue-900">
            Profile Site Information
          </DialogTitle>
        </DialogHeader>

        {/* Accordion / Collapsible */}
        <Accordion type="single" collapsible className="w-full space-y-3">
          {/* First Collapsible */}
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-lg font-medium cursor-pointer">
              What is the Profile Site?
            </AccordionTrigger>
            <AccordionContent className="text-sm space-y-3 text-black leading-relaxed">
              <p>
                The <strong>Profile Site</strong> is a personalized one-page website
                generated when you purchase the digital product. It serves as your
                digital identity hub, making it easier than ever to share your
                professional, creative, or business presence.
              </p>
              <p>
                Built with modern web technologies and frameworks, it was created
                with profile-linked industries in mind. Developed by the Innovation Max team,
                this “webpage for everyone” utilizes the Vercel cloud infrastructure
                to deliver fast, secure, and scalable one-page websites tailored
                to each user. By leveraging edge functions and serverless
                architecture, each profile site is optimized for real-time
                updates and global accessibility.
              </p>
              <p>
                Innovation Max envisions a future where everyone owns a digital
                space—accessible via a simple QR code or link—that replaces the
                traditional business card with a smarter, more interactive alternative.
              </p>

              <h4 className="font-semibold mt-4">Key Features:</h4>
              <ul className="list-disc list-inside space-y-1">
                <li>Custom profile image and bio</li>
                <li>Clickable social media icons</li>
                <li>Quick contact links (phone, WhatsApp, email)</li>
                <li>Resume or portfolio button</li>
                <li>Editable anytime, live updates instantly</li>
                <li>Mobile-optimized and lightning-fast</li>
              </ul>
            </AccordionContent>
          </AccordionItem>

          {/* Second Collapsible */}
          <AccordionItem value="item-2">
            <AccordionTrigger className="text-lg font-medium cursor-pointer">
              Usage Guide: How to Get and Use Your Profile Site
            </AccordionTrigger>
            <AccordionContent className="text-sm space-y-3 text-black leading-relaxed">
              <h4 className="font-semibold">1. Order & Setup</h4>
              <ul className="list-disc ml-6 space-y-1">
                <li>Browse through our available categories.</li>
                <li>Select the one that best fits your industry.</li>
                <li>Submit your details (photo, social links, bio) via form.</li>
              </ul>

              <h4 className="font-semibold mt-3">2. Instant Site Creation</h4>
              <ul className="list-disc ml-6 space-y-1">
                <li>Your personal one-page profile site is generated instantly.</li>
                <li>
                  You will receive a link and a printable card with a QR code in
                  your email.
                </li>
              </ul>

              <h4 className="font-semibold mt-3">3. Share Your Profile</h4>
              <ul className="list-disc ml-6 space-y-1">
                <li>Give out your printed card or send your digital link.</li>
                <li>
                  When someone scans your QR or visits your URL, they’ll land
                  directly on your live profile site.
                </li>
              </ul>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </DialogContent>
    </Dialog>
  );
}
