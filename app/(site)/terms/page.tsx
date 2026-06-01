"use client";
import { motion } from "framer-motion";

const TermsOfService = () => {
  return (
    <section className="overflow-hidden bg-white pt-32 pb-16 dark:bg-black md:pt-40 md:pb-20">
      <div className="mx-auto max-w-screen-xl px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-4xl"
        >
          <h1 className="mb-8 text-4xl font-bold text-gray-900 dark:text-white md:text-5xl">
            Terms of Service & End-User License Agreement
          </h1>
          <p className="mb-8 text-gray-600 dark:text-gray-400">
            Last Updated: June 1, 2026
          </p>

          <div className="prose prose-lg max-w-none dark:prose-invert">
            <section className="mb-10">
              <h2 className="mb-4 text-2xl font-semibold text-gray-900 dark:text-white">
                1. Agreement to Terms
              </h2>
              <p className="mb-4 text-gray-600 dark:text-gray-400">
                These Terms of Service and End-User License Agreement ("Terms") constitute a legally binding agreement between you ("User," "you," or "your") and BLK Tax Services ("Company," "we," "our," or "us") governing your access to and use of our website at blktaxservices.com and our tax management platform at app.blktaxservices.com (collectively, the "Service").
              </p>
              <p className="text-gray-600 dark:text-gray-400">
                By accessing or using the Service, you agree to be bound by these Terms. If you do not agree to these Terms, you may not access or use the Service.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="mb-4 text-2xl font-semibold text-gray-900 dark:text-white">
                2. Description of Service
              </h2>
              <p className="mb-4 text-gray-600 dark:text-gray-400">
                BLK Tax Services provides a cloud-based tax preparation, bookkeeping, and financial management platform that includes:
              </p>
              <ul className="mb-4 list-disc pl-6 text-gray-600 dark:text-gray-400">
                <li>Tax filing preparation and submission services</li>
                <li>Integration with QuickBooks and other accounting software (via Intuit's QuickBooks API)</li>
                <li>Financial reporting and AI-powered insights</li>
                <li>Client document management and collaboration tools</li>
                <li>Monthly bookkeeping and reconciliation services</li>
              </ul>
              <p className="text-gray-600 dark:text-gray-400">
                The Service is intended for use by individuals, small businesses, and tax professionals.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="mb-4 text-2xl font-semibold text-gray-900 dark:text-white">
                3. QuickBooks Integration & Third-Party Services
              </h2>
              <p className="mb-4 text-gray-600 dark:text-gray-400">
                Our Service integrates with Intuit QuickBooks Online through Intuit's authorized API. By connecting your QuickBooks account, you:
              </p>
              <ul className="mb-4 list-disc pl-6 text-gray-600 dark:text-gray-400">
                <li>Authorize BLK Tax Services to read and process your QuickBooks financial data (transactions, accounts, vendors, customers) for the purpose of tax preparation and financial reporting</li>
                <li>Acknowledge that your use of QuickBooks is also subject to Intuit's own Terms of Service and Privacy Policy</li>
                <li>Understand that we do not store your QuickBooks credentials — authentication is handled through Intuit's secure OAuth 2.0 protocol</li>
                <li>May revoke our access to your QuickBooks data at any time by disconnecting the integration within the Service or through your Intuit account settings</li>
              </ul>
              <p className="text-gray-600 dark:text-gray-400">
                We access only the QuickBooks data scopes necessary to provide the Service and do not use your financial data for advertising or sell it to third parties.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="mb-4 text-2xl font-semibold text-gray-900 dark:text-white">
                4. User Accounts & Eligibility
              </h2>
              <p className="mb-4 text-gray-600 dark:text-gray-400">
                To use the Service, you must:
              </p>
              <ul className="mb-4 list-disc pl-6 text-gray-600 dark:text-gray-400">
                <li>Be at least 18 years of age</li>
                <li>Provide accurate, current, and complete registration information</li>
                <li>Maintain the security of your account credentials</li>
                <li>Promptly notify us of any unauthorized use of your account</li>
              </ul>
              <p className="text-gray-600 dark:text-gray-400">
                You are responsible for all activity that occurs under your account. We reserve the right to suspend or terminate accounts that violate these Terms.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="mb-4 text-2xl font-semibold text-gray-900 dark:text-white">
                5. License Grant
              </h2>
              <p className="mb-4 text-gray-600 dark:text-gray-400">
                Subject to your compliance with these Terms and payment of applicable fees, BLK Tax Services grants you a limited, non-exclusive, non-transferable, revocable license to:
              </p>
              <ul className="mb-4 list-disc pl-6 text-gray-600 dark:text-gray-400">
                <li>Access and use the Service for your personal or internal business tax and accounting purposes</li>
                <li>Download and print reports and documents generated through the Service for your records</li>
              </ul>
              <p className="text-gray-600 dark:text-gray-400">
                This license does not include the right to sublicense, resell, or create derivative works from the Service.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="mb-4 text-2xl font-semibold text-gray-900 dark:text-white">
                6. Prohibited Uses
              </h2>
              <p className="mb-4 text-gray-600 dark:text-gray-400">
                You agree not to:
              </p>
              <ul className="mb-4 list-disc pl-6 text-gray-600 dark:text-gray-400">
                <li>Use the Service for any unlawful purpose or in violation of any applicable laws</li>
                <li>Submit false, fraudulent, or misleading financial or tax information</li>
                <li>Attempt to gain unauthorized access to any part of the Service or its infrastructure</li>
                <li>Reverse engineer, decompile, or disassemble any software component of the Service</li>
                <li>Use automated tools to scrape, crawl, or harvest data from the Service</li>
                <li>Interfere with or disrupt the integrity or performance of the Service</li>
                <li>Share account credentials with unauthorized third parties</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="mb-4 text-2xl font-semibold text-gray-900 dark:text-white">
                7. Fees & Payment
              </h2>
              <p className="mb-4 text-gray-600 dark:text-gray-400">
                Certain features of the Service require payment of fees. By subscribing to a paid plan:
              </p>
              <ul className="mb-4 list-disc pl-6 text-gray-600 dark:text-gray-400">
                <li>You authorize us to charge your chosen payment method on a recurring basis</li>
                <li>Fees are non-refundable except as required by law or as expressly stated in our refund policy</li>
                <li>We reserve the right to modify pricing with 30 days' advance notice</li>
                <li>Failure to pay may result in suspension or termination of your access</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="mb-4 text-2xl font-semibold text-gray-900 dark:text-white">
                8. Intellectual Property
              </h2>
              <p className="mb-4 text-gray-600 dark:text-gray-400">
                The Service and all content, features, and functionality (including but not limited to software, text, graphics, logos, and icons) are owned by BLK Tax Services or its licensors and are protected by applicable intellectual property laws.
              </p>
              <p className="text-gray-600 dark:text-gray-400">
                You retain ownership of all data and documents you upload to the Service. By uploading content, you grant us a limited license to process and display that content solely to provide the Service to you.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="mb-4 text-2xl font-semibold text-gray-900 dark:text-white">
                9. Disclaimers
              </h2>
              <p className="mb-4 text-gray-600 dark:text-gray-400">
                THE SERVICE IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED. WE DISCLAIM ALL WARRANTIES, INCLUDING IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.
              </p>
              <p className="text-gray-600 dark:text-gray-400">
                The Service provides tools to assist with tax preparation but does not constitute legal, financial, or professional tax advice. You are responsible for the accuracy of information submitted to tax authorities. We recommend consulting a licensed tax professional for complex tax situations.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="mb-4 text-2xl font-semibold text-gray-900 dark:text-white">
                10. Limitation of Liability
              </h2>
              <p className="text-gray-600 dark:text-gray-400">
                TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, BLK TAX SERVICES SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS OR REVENUES, WHETHER INCURRED DIRECTLY OR INDIRECTLY, OR ANY LOSS OF DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES, RESULTING FROM YOUR USE OF THE SERVICE. OUR TOTAL LIABILITY SHALL NOT EXCEED THE GREATER OF $100 OR THE AMOUNT YOU PAID US IN THE PAST TWELVE MONTHS.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="mb-4 text-2xl font-semibold text-gray-900 dark:text-white">
                11. Indemnification
              </h2>
              <p className="text-gray-600 dark:text-gray-400">
                You agree to indemnify, defend, and hold harmless BLK Tax Services and its officers, directors, employees, and agents from any claims, liabilities, damages, losses, or expenses arising out of your use of the Service, your violation of these Terms, or your submission of inaccurate or fraudulent information.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="mb-4 text-2xl font-semibold text-gray-900 dark:text-white">
                12. Termination
              </h2>
              <p className="mb-4 text-gray-600 dark:text-gray-400">
                We may suspend or terminate your access to the Service at any time, with or without cause, with or without notice. You may terminate your account at any time by contacting us.
              </p>
              <p className="text-gray-600 dark:text-gray-400">
                Upon termination, your right to use the Service ceases immediately. We will retain your data for a period consistent with our Privacy Policy and applicable legal requirements, after which it will be deleted.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="mb-4 text-2xl font-semibold text-gray-900 dark:text-white">
                13. Governing Law & Dispute Resolution
              </h2>
              <p className="text-gray-600 dark:text-gray-400">
                These Terms shall be governed by the laws of the State of Georgia, without regard to its conflict of law provisions. Any disputes arising under these Terms shall be resolved through binding arbitration in accordance with the American Arbitration Association rules, except that either party may seek injunctive relief in a court of competent jurisdiction.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="mb-4 text-2xl font-semibold text-gray-900 dark:text-white">
                14. Changes to These Terms
              </h2>
              <p className="text-gray-600 dark:text-gray-400">
                We reserve the right to modify these Terms at any time. We will notify you of material changes by posting the updated Terms on this page and updating the "Last Updated" date. Your continued use of the Service after any changes constitutes acceptance of the new Terms.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="mb-4 text-2xl font-semibold text-gray-900 dark:text-white">
                15. Contact Us
              </h2>
              <p className="mb-4 text-gray-600 dark:text-gray-400">
                If you have any questions about these Terms, please contact us at:
              </p>
              <div className="rounded-lg bg-gray-50 p-6 dark:bg-gray-800">
                <p className="mb-2 text-gray-800 dark:text-gray-200">
                  <strong>BLK Tax Services</strong>
                </p>
                <p className="mb-2 text-gray-600 dark:text-gray-400">
                  Email: contact@blktaxservices.com
                </p>
                <p className="text-gray-600 dark:text-gray-400">
                  Website: www.blktaxservices.com
                </p>
              </div>
            </section>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TermsOfService;
