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

export default function ProfileCardInfoModal({ isOpen1, onClose1 }) {
  return (
    <Dialog open={isOpen1} onOpenChange={onClose1}>
      <DialogContent className="max-h-[80vh] overflow-y-auto rounded-2xl p-6 [&>button]:cursor-pointer">
        <DialogHeader>
          <DialogTitle className="text-2xl font-semibold text-blue-900">
            Profile Card Information
          </DialogTitle>
        </DialogHeader>

        {/* Accordion / Collapsible */}
        <Accordion type="single" collapsible className="w-full space-y-3">
          {/* First Collapsible */}
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-lg font-medium cursor-pointer">
              What is the Profile Card?
            </AccordionTrigger>
            <AccordionContent className="text-sm space-y-3 text-black leading-relaxed">
              <p>
                The Profile Card is a modern, digital-powered business card
                built to bridge the gap between physical branding and digital
                presence. It allows anyone to instantly access your digital
                identity via a QR code linking to your profile, portfolio,
                social platforms, and contact details.
              </p>
              <p>
                Unlike traditional static business cards, the Profile Card is
                live, dynamic, and always up-to-date.
              </p>

              <h4 className="font-semibold mt-4">Usage Guide:</h4>
              <ol className="list-decimal list-inside space-y-2">
                <li>Visit the <strong>ScanQr</strong> website.</li>
                <li>Select a card category that fits your industry.</li>
                <li>
                  Complete your purchase by entering details and making payment.
                </li>
                <li>
                  Check your email for:
                  <ul className="list-disc ml-6 mt-1">
                    <li>Your customized Profile Card PDF/Image</li>
                    <li>A unique QR code linked to your profile</li>
                    <li>Instructions for use and download</li>
                  </ul>
                </li>
                <li>Review your profile details (name, image, links, etc.).</li>
                <li>
                  Print from home or a professional shop (3.5 x 2 inches
                  standard size).
                </li>
                <li>
                  Share your card by handing it out and letting others scan your
                  QR code.
                </li>
              </ol>
            </AccordionContent>
          </AccordionItem>

          {/* Second Collapsible */}
          <AccordionItem value="item-2">
            <AccordionTrigger className="text-lg font-medium cursor-pointer">
              Profile Card Details Update & Replacement
            </AccordionTrigger>
            <AccordionContent className="text-sm space-y-3 text-black leading-relaxed">
              <p>
                You can request updates to your Profile Card (e.g., name,
                picture, QR embedded logo). Once updated, a new card will be
                issued via email. You may also request a replacement if your
                card PDF is missing.
              </p>

              <h4 className="font-semibold mt-4">
                Steps for Update or Replacement:
              </h4>
              <ol className="list-decimal list-inside space-y-2">
                <li>Contact our support team with your update request.</li>
                <li>
                  Provide the updated details (name, picture, logo, etc.).
                </li>
                <li>
                  Wait for confirmation and issuance of your new card via email.
                </li>
                <li>
                  For lost cards, request a replacement PDF format card from
                  support.
                </li>
              </ol>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </DialogContent>
    </Dialog>
  );
}
