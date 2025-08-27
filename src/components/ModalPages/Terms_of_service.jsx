"use client";

import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export default function TermsOfServiceModal({ isOpen4, onClose4 }) {
  return (
    <Dialog open={isOpen4} onOpenChange={onClose4}>
      <DialogContent className="max-h-[80vh] overflow-y-auto rounded-2xl p-6 [&>button]:cursor-pointer">
        <DialogHeader>
          <DialogTitle className="text-2xl font-semibold text-blue-900">
            Terms of Service
          </DialogTitle>
        </DialogHeader>

        <Accordion type="single" collapsible className="w-full space-y-3">
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-lg font-medium cursor-pointer">
              1. Acceptance of Terms
            </AccordionTrigger>
            <AccordionContent className="text-sm space-y-3 text-black leading-relaxed">
              <p>
                By using our Services (including receiving your card and accessing your webpage), you agree to be legally bound by these Terms. If you do not agree to these Terms, do not use the service.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2">
            <AccordionTrigger className="text-lg font-medium cursor-pointer">
              2. Eligibility
            </AccordionTrigger>
            <AccordionContent className="text-sm space-y-3 text-black leading-relaxed">
              <p>
                You must be at least 13 years old to use this Service. By using it, you represent that you meet the age requirement and have the authority to enter into this agreement.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3">
            <AccordionTrigger className="text-lg font-medium cursor-pointer">
              3. Services Description
            </AccordionTrigger>
            <AccordionContent className="text-sm space-y-3 text-black leading-relaxed">
              <ul className="list-disc ml-6 space-y-1">
                <li>A custom-designed profile card sent via email</li>
                <li>A hosted one-page personal profile webpage</li>
                <li>Integration of user social/professional links and QR code functionality</li>
                <li>Optional category-based designs (e.g., Developer, Blogger, Professional)</li>
              </ul>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-4">
            <AccordionTrigger className="text-lg font-medium cursor-pointer">
              4. User Responsibilities
            </AccordionTrigger>
            <AccordionContent className="text-sm space-y-3 text-black leading-relaxed">
              <ul className="list-disc ml-6 space-y-1">
                <li>Provide accurate and up-to-date information</li>
                <li>Not use the platform for unlawful or harmful purposes</li>
                <li>Refrain from uploading offensive, misleading, or copyright-violating content</li>
                <li>Protect your profile information and notify us immediately of any unauthorized access</li>
              </ul>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-5">
            <AccordionTrigger className="text-lg font-medium cursor-pointer">
              5. Intellectual Property
            </AccordionTrigger>
            <AccordionContent className="text-sm space-y-3 text-black leading-relaxed">
              <p>
                80% of designs, branding, code, and technologies used in the Profile Card and Profile Website are owned by Innovation Max unless otherwise stated. Users retain ownership of their uploaded content (e.g., name, profile photo), but grant us a non-exclusive license to use it in generating and hosting the profile.
              </p>
            </AccordionContent>
          </AccordionItem>

          {/* Continue with other sections in a similar pattern */}
        </Accordion>
      </DialogContent>
    </Dialog>
  );
}
