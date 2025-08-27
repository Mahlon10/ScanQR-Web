"use client";

import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

export default function GeneralEnquiryModal({ isOpen5, onClose5 }) {
  return (
    <Dialog open={isOpen5} onOpenChange={onClose5}>
      <DialogContent className="max-h-[70vh] overflow-y-auto rounded-2xl p-6 text-black">
        <DialogHeader>
          <DialogTitle className="text-2xl font-semibold text-blue-900">
            General Enquiry
          </DialogTitle>
        </DialogHeader>

        <div className="mt-4 space-y-4 text-sm leading-relaxed">
          <p>
            For any general enquiries regarding your Profile Card or Profile Site, kindly reach out to our support team using the contact information below:
          </p>

          <div className="space-y-2">
            <p>
              <strong>Email:</strong>{" "}
              <a href="mailto:support@example.com" className="text-blue-600 underline">
                support@example.com
              </a>
            </p>
            <p>
              <strong>Phone:</strong>{" "}
              <a href="tel:+233123456789" className="text-blue-600 underline">
                +233 123 456 789
              </a>
            </p>
          </div>

          <p>
            We are happy to assist you with any questions or concerns. Please include your Profile Card or website details when contacting us so we can respond faster.
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
}
