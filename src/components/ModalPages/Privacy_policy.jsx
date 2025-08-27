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

export default function PrivacyPolicyModal({ isOpen3, onClose3 }) {
  return (
    <Dialog open={isOpen3} onOpenChange={onClose3}>
      <DialogContent className="max-h-[80vh] overflow-y-auto rounded-2xl p-6 [&>button]:cursor-pointer">
        <DialogHeader>
          <DialogTitle className="text-2xl font-semibold text-blue-900">
            Privacy Policy
          </DialogTitle>
        </DialogHeader>

        {/* Accordion / Collapsible */}
        <Accordion type="single" collapsible className="w-full space-y-3">
          {/* Introduction */}
          <AccordionItem value="intro">
            <AccordionTrigger className="text-lg font-medium cursor-pointer">
              1. Introduction
            </AccordionTrigger>
            <AccordionContent className="text-sm space-y-3 text-black leading-relaxed">
              <p>
                <strong>Effective Date:</strong> 5th May, 2025
              </p>
              <p>
                Innovation Max is committed to protecting your privacy. This
                Privacy Policy explains how we collect, use, store, and share
                your information when you use our Profile Card and One-Page
                Profile Website services (collectively referred to as the
                “Services”).
              </p>
              <p>
                By using our Services, you agree to the terms outlined in this
                Privacy Policy.
              </p>
            </AccordionContent>
          </AccordionItem>

          {/* Information We Collect */}
          <AccordionItem value="info">
            <AccordionTrigger className="text-lg font-medium cursor-pointer">
              2. Information We Collect
            </AccordionTrigger>
            <AccordionContent className="text-sm space-y-3 text-black leading-relaxed">
              <h4 className="font-semibold">a. Personal Information</h4>
              <ul className="list-disc list-inside space-y-1">
                <li>Full name</li>
                <li>Email address</li>
                <li>Phone number (optional)</li>
                <li>Profile image (for card design)</li>
                <li>
                  Social media or professional links (LinkedIn, GitHub,
                  Instagram, etc.)
                </li>
                <li>
                  Profession or category (e.g., Professional, Developer,
                  Blogger)
                </li>
              </ul>

              <h4 className="font-semibold mt-3">b. Usage Data</h4>
              <ul className="list-disc list-inside space-y-1">
                <li>Website traffic</li>
                <li>QR code scans</li>
                <li>Clicks on profile page links</li>
                <li>Device and browser type</li>
              </ul>
            </AccordionContent>
          </AccordionItem>

          {/* How We Use */}
          <AccordionItem value="use">
            <AccordionTrigger className="text-lg font-medium cursor-pointer">
              3. How We Use Your Information
            </AccordionTrigger>
            <AccordionContent className="text-sm space-y-3 text-black leading-relaxed">
              <ul className="list-disc list-inside space-y-1">
                <li>Generate your digital profile card and webpage</li>
                <li>Deliver your profile card via email</li>
                <li>Host and manage your one-page profile site</li>
                <li>Improve the functionality and design of our Services</li>
                <li>
                  Communicate updates, feature announcements, or promotional
                  offers (with your consent)
                </li>
              </ul>
            </AccordionContent>
          </AccordionItem>

          {/* Storage */}
          <AccordionItem value="storage">
            <AccordionTrigger className="text-lg font-medium cursor-pointer">
              4. How Your Data is Stored
            </AccordionTrigger>
            <AccordionContent className="text-sm text-black leading-relaxed">
              <p>
                Your data is securely stored on encrypted cloud infrastructure
                (Vercel, Firebase). We implement industry-standard security
                measures to protect against unauthorized access, disclosure, or
                alteration.
              </p>
            </AccordionContent>
          </AccordionItem>

          {/* Sharing */}
          <AccordionItem value="sharing">
            <AccordionTrigger className="text-lg font-medium cursor-pointer">
              5. Sharing of Information
            </AccordionTrigger>
            <AccordionContent className="text-sm text-black leading-relaxed space-y-2">
              <p>
                We do not sell, rent, or share your personal information with
                third parties for marketing purposes.
              </p>
              <p>We may only share data:</p>
              <ul className="list-disc list-inside space-y-1">
                <li>
                  With third-party service providers who support our platform
                  operations
                </li>
                <li>If legally required (e.g., court orders or regulations)</li>
                <li>To enforce our Terms of Use or protect legal rights</li>
              </ul>
            </AccordionContent>
          </AccordionItem>

          {/* Cookies */}
          <AccordionItem value="cookies">
            <AccordionTrigger className="text-lg font-medium cursor-pointer">
              6. Cookies and Tracking
            </AccordionTrigger>
            <AccordionContent className="text-sm text-black leading-relaxed">
              <p>
                We may use minimal cookies or analytics tools (e.g., Vercel
                analytics) to understand usage patterns and optimize user
                experience. You can disable cookies in your browser settings.
              </p>
            </AccordionContent>
          </AccordionItem>

          {/* Rights */}
          <AccordionItem value="rights">
            <AccordionTrigger className="text-lg font-medium cursor-pointer">
              7. Your Rights
            </AccordionTrigger>
            <AccordionContent className="text-sm text-black leading-relaxed">
              <ul className="list-disc list-inside space-y-1">
                <li>Access or update your personal information</li>
                <li>Request deletion of your data</li>
                <li>Withdraw consent at any time</li>
                <li>
                  Lodge a complaint with a data protection authority if
                  applicable
                </li>
              </ul>
            </AccordionContent>
          </AccordionItem>

          {/* Children */}
          <AccordionItem value="children">
            <AccordionTrigger className="text-lg font-medium cursor-pointer">
              8. Children's Privacy
            </AccordionTrigger>
            <AccordionContent className="text-sm text-black leading-relaxed">
              <p>
                Our services are not intended for individuals under the age of
                13. We do not knowingly collect data from children.
              </p>
            </AccordionContent>
          </AccordionItem>

          {/* Changes */}
          <AccordionItem value="changes">
            <AccordionTrigger className="text-lg font-medium cursor-pointer">
              9. Changes to This Privacy Policy
            </AccordionTrigger>
            <AccordionContent className="text-sm text-black leading-relaxed">
              <p>
                We may update this Privacy Policy from time to time. Users will
                be notified of material changes via email or website
                announcement.
              </p>
            </AccordionContent>
          </AccordionItem>

          {/* Contact */}
          <AccordionItem value="contact">
            <AccordionTrigger className="text-lg font-medium cursor-pointer">
              10. Contact Us
            </AccordionTrigger>
            <AccordionContent className="text-sm text-black leading-relaxed space-y-2">
              <p>If you have questions or concerns, contact us:</p>
              <ul className="list-disc list-inside space-y-1">
                <li>Innovation Max</li>
                <li>Email: [your-support-email@example.com]</li>
                <li>Phone: [your contact number]</li>
                <li>Website: [your website link]</li>
              </ul>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </DialogContent>
    </Dialog>
  );
}
