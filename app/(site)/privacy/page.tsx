"use client";
import { motion } from "framer-motion";

const PrivacyPolicy = () => {
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
            Privacy Policy
          </h1>
          <p className="mb-8 text-gray-600 dark:text-gray-400">
            Last Updated: January 13, 2026
          </p>

          <div className="prose prose-lg max-w-none dark:prose-invert">
            <section className="mb-10">
              <h2 className="mb-4 text-2xl font-semibold text-gray-900 dark:text-white">
                1. Introduction
              </h2>
              <p className="mb-4 text-gray-600 dark:text-gray-400">
                BLK Tax Services ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website, use our services, or engage with us in other ways.
              </p>
              <p className="text-gray-600 dark:text-gray-400">
                Please read this Privacy Policy carefully. By accessing or using our services, you acknowledge that you have read, understood, and agree to be bound by all the terms of this Privacy Policy.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="mb-4 text-2xl font-semibold text-gray-900 dark:text-white">
                2. Information We Collect
              </h2>
              
              <h3 className="mb-3 text-xl font-medium text-gray-800 dark:text-gray-200">
                2.1 Personal Information
              </h3>
              <p className="mb-4 text-gray-600 dark:text-gray-400">
                We may collect personal information that you voluntarily provide to us when you:
              </p>
              <ul className="mb-4 list-disc pl-6 text-gray-600 dark:text-gray-400">
                <li>Register for our services or create an account</li>
                <li>Fill out forms on our website, including contact forms</li>
                <li>Subscribe to our newsletter or marketing communications</li>
                <li>Request tax preparation or consultation services</li>
                <li>Communicate with us via email, phone, or other channels</li>
              </ul>
              <p className="mb-4 text-gray-600 dark:text-gray-400">
                This information may include:
              </p>
              <ul className="mb-4 list-disc pl-6 text-gray-600 dark:text-gray-400">
                <li>Name, email address, phone number, and mailing address</li>
                <li>Social Security Number (SSN) or Tax Identification Number (TIN)</li>
                <li>Date of birth and marital status</li>
                <li>Employment and income information</li>
                <li>Bank account and financial information</li>
                <li>Tax documents and related financial records</li>
              </ul>

              <h3 className="mb-3 text-xl font-medium text-gray-800 dark:text-gray-200">
                2.2 Automatically Collected Information
              </h3>
              <p className="mb-4 text-gray-600 dark:text-gray-400">
                When you visit our website, we may automatically collect certain information, including:
              </p>
              <ul className="mb-4 list-disc pl-6 text-gray-600 dark:text-gray-400">
                <li>IP address and device identifiers</li>
                <li>Browser type and version</li>
                <li>Operating system</li>
                <li>Pages visited and time spent on pages</li>
                <li>Referring website addresses</li>
                <li>Cookies and similar tracking technologies</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="mb-4 text-2xl font-semibold text-gray-900 dark:text-white">
                3. How We Use Your Information
              </h2>
              <p className="mb-4 text-gray-600 dark:text-gray-400">
                We use the information we collect for various purposes, including:
              </p>
              <ul className="mb-4 list-disc pl-6 text-gray-600 dark:text-gray-400">
                <li>Providing tax preparation, filing, and consultation services</li>
                <li>Processing transactions and sending related information</li>
                <li>Responding to your inquiries and providing customer support</li>
                <li>Sending administrative information, updates, and security alerts</li>
                <li>Sending marketing and promotional communications (with your consent)</li>
                <li>Improving our website, services, and user experience</li>
                <li>Complying with legal obligations and regulatory requirements</li>
                <li>Detecting, preventing, and addressing fraud or security issues</li>
                <li>Enforcing our terms, conditions, and policies</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="mb-4 text-2xl font-semibold text-gray-900 dark:text-white">
                4. Disclosure of Your Information
              </h2>
              <p className="mb-4 text-gray-600 dark:text-gray-400">
                We may share your information in the following circumstances:
              </p>
              <ul className="mb-4 list-disc pl-6 text-gray-600 dark:text-gray-400">
                <li><strong>With the IRS and State Tax Authorities:</strong> To file your tax returns and related documents as authorized by you</li>
                <li><strong>Service Providers:</strong> With third-party vendors who perform services on our behalf, such as payment processing, data analysis, and email delivery</li>
                <li><strong>Legal Requirements:</strong> When required by law, subpoena, or other legal process</li>
                <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets</li>
                <li><strong>With Your Consent:</strong> When you have given us explicit permission to share your information</li>
              </ul>
              <p className="text-gray-600 dark:text-gray-400">
                We do not sell, rent, or trade your personal information to third parties for their marketing purposes.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="mb-4 text-2xl font-semibold text-gray-900 dark:text-white">
                5. Data Security
              </h2>
              <p className="mb-4 text-gray-600 dark:text-gray-400">
                We implement appropriate technical and organizational security measures to protect your personal information, including:
              </p>
              <ul className="mb-4 list-disc pl-6 text-gray-600 dark:text-gray-400">
                <li>256-bit SSL encryption for data transmission</li>
                <li>Secure data storage with access controls</li>
                <li>Regular security assessments and updates</li>
                <li>Employee training on data protection practices</li>
                <li>Multi-factor authentication for account access</li>
              </ul>
              <p className="text-gray-600 dark:text-gray-400">
                However, no method of transmission over the Internet or electronic storage is 100% secure. While we strive to protect your personal information, we cannot guarantee its absolute security.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="mb-4 text-2xl font-semibold text-gray-900 dark:text-white">
                6. Data Retention
              </h2>
              <p className="text-gray-600 dark:text-gray-400">
                We retain your personal information for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law. For tax-related documents, we typically retain records for a minimum of seven (7) years in accordance with IRS guidelines and professional standards.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="mb-4 text-2xl font-semibold text-gray-900 dark:text-white">
                7. Your Privacy Rights
              </h2>
              <p className="mb-4 text-gray-600 dark:text-gray-400">
                Depending on your location, you may have certain rights regarding your personal information:
              </p>
              <ul className="mb-4 list-disc pl-6 text-gray-600 dark:text-gray-400">
                <li><strong>Access:</strong> Request access to your personal information</li>
                <li><strong>Correction:</strong> Request correction of inaccurate or incomplete information</li>
                <li><strong>Deletion:</strong> Request deletion of your personal information (subject to legal retention requirements)</li>
                <li><strong>Portability:</strong> Request a copy of your data in a portable format</li>
                <li><strong>Opt-Out:</strong> Opt out of marketing communications at any time</li>
                <li><strong>Withdraw Consent:</strong> Withdraw consent where processing is based on consent</li>
              </ul>
              <p className="text-gray-600 dark:text-gray-400">
                To exercise any of these rights, please contact us using the information provided below.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="mb-4 text-2xl font-semibold text-gray-900 dark:text-white">
                8. Cookies and Tracking Technologies
              </h2>
              <p className="mb-4 text-gray-600 dark:text-gray-400">
                We use cookies and similar tracking technologies to collect and store information about your interactions with our website. You can control cookies through your browser settings and other tools. However, disabling cookies may affect the functionality of our website.
              </p>
              <p className="text-gray-600 dark:text-gray-400">
                We may use the following types of cookies:
              </p>
              <ul className="mb-4 list-disc pl-6 text-gray-600 dark:text-gray-400">
                <li><strong>Essential Cookies:</strong> Required for the website to function properly</li>
                <li><strong>Analytics Cookies:</strong> Help us understand how visitors interact with our website</li>
                <li><strong>Functional Cookies:</strong> Remember your preferences and settings</li>
                <li><strong>Marketing Cookies:</strong> Used to deliver relevant advertisements</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="mb-4 text-2xl font-semibold text-gray-900 dark:text-white">
                9. Third-Party Links
              </h2>
              <p className="text-gray-600 dark:text-gray-400">
                Our website may contain links to third-party websites or services. We are not responsible for the privacy practices of these third parties. We encourage you to review the privacy policies of any third-party sites you visit.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="mb-4 text-2xl font-semibold text-gray-900 dark:text-white">
                10. Children's Privacy
              </h2>
              <p className="text-gray-600 dark:text-gray-400">
                Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children. If we become aware that we have collected personal information from a child without parental consent, we will take steps to delete that information.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="mb-4 text-2xl font-semibold text-gray-900 dark:text-white">
                11. California Privacy Rights (CCPA)
              </h2>
              <p className="mb-4 text-gray-600 dark:text-gray-400">
                If you are a California resident, you have additional rights under the California Consumer Privacy Act (CCPA):
              </p>
              <ul className="mb-4 list-disc pl-6 text-gray-600 dark:text-gray-400">
                <li>Right to know what personal information is collected, used, shared, or sold</li>
                <li>Right to delete personal information held by businesses</li>
                <li>Right to opt-out of the sale of personal information</li>
                <li>Right to non-discrimination for exercising your CCPA rights</li>
              </ul>
              <p className="text-gray-600 dark:text-gray-400">
                We do not sell personal information as defined under the CCPA.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="mb-4 text-2xl font-semibold text-gray-900 dark:text-white">
                12. Changes to This Privacy Policy
              </h2>
              <p className="text-gray-600 dark:text-gray-400">
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date. We encourage you to review this Privacy Policy periodically for any changes.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="mb-4 text-2xl font-semibold text-gray-900 dark:text-white">
                13. Contact Us
              </h2>
              <p className="mb-4 text-gray-600 dark:text-gray-400">
                If you have any questions about this Privacy Policy or our privacy practices, please contact us at:
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

export default PrivacyPolicy;
