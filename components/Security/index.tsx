
"use client";
import React from "react";
import Image from "next/image";
import SectionHeader from "../Common/SectionHeader";
import {
  ShieldCheckIcon,
  EyeIcon,
  BellIcon,
} from "@heroicons/react/24/outline";
import { CheckBadgeIcon } from "@heroicons/react/24/solid";

const Security = () => {
  return (
    <>
      <section className="pt-35 md:pt-40 xl:pt-46 pb-20 lg:pb-25 xl:pb-30">
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
          <div className="flex flex-col items-center justify-center text-center">
            <div className="md:w-3/4">
              <h1 className="text-4xl xl:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                Your Data Security is Our Obsession.
              </h1>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                We use bank-grade encryption and IRS-compliant protocols to
                ensure your sensitive financial information never falls into the
                wrong hands.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-20 lg:pb-25 xl:pb-30">
        <div className="mx-auto max-w-c-1235 px-4 md:px-8 xl:px-0">
          <SectionHeader
            headerInfo={{
              title: "CORE PILLARS",
              subtitle: "How We Keep You Safe",
              description: ``,
            }}
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            <div className="flex flex-col items-center text-center p-6">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-300">
                <ShieldCheckIcon className="w-7 h-7" />
              </div>
              <h3 className="font-bold text-xl text-gray-900 dark:text-white mb-2">
                Bank-Grade Encryption
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Your data is protected by AES-256-GCM encryption, the same
                standard used by the US military. Even in the unlikely event of
                a database breach, your data remains unreadable mathematical
                noise.
              </p>
            </div>
            <div className="flex flex-col items-center text-center p-6">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-300">
                <CheckBadgeIcon className="w-7 h-7" />
              </div>
              <h3 className="font-bold text-xl text-gray-900 dark:text-white mb-2">
                IRS Compliance
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                We strictly adhere to IRS Publication 4557 (Safeguarding
                Taxpayer Data) and NIST guidelines, ensuring we meet or exceed
                federal standards for data privacy and protection.
              </p>
            </div>
            <div className="flex flex-col items-center text-center p-6">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-300">
                <EyeIcon className="w-7 h-7" />
              </div>
              <h3 className="font-bold text-xl text-gray-900 dark:text-white mb-2">
                Strict Access Control
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Only you and your specifically assigned tax professional can
                access your files. Our "Steel Door" architecture prevents
                unauthorized access, ensuring complete privacy.
              </p>
            </div>
            <div className="flex flex-col items-center text-center p-6">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-300">
                <BellIcon className="w-7 h-7" />
              </div>
              <h3 className="font-bold text-xl text-gray-900 dark:text-white mb-2">
                Complete Transparency
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Our real-time notification system alerts you the second your
                return is Filed, Accepted by the IRS, or requires your
                attention. You track every step of the journey.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-20 lg:pb-25 xl:pb-30">
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
          <SectionHeader
            headerInfo={{
              title: "HOW WE PROTECT YOU",
              subtitle: "A Deeper Dive into Our Security",
              description: ``,
            }}
          />
          <div className="overflow-x-auto mt-12">
            <table className="w-full text-left text-gray-900 dark:text-white">
              <thead className="bg-gray-100 dark:bg-gray-800">
                <tr>
                  <th className="px-6 py-4 font-bold">Feature</th>
                  <th className="px-6 py-4 font-bold">How It Protects You</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <td className="px-6 py-4 text-gray-900 dark:text-white">Field-Level Encryption</td>
                  <td className="px-6 py-4 text-gray-600 dark:text-gray-400">
                    Unlike standard systems that only encrypt the disk, we
                    encrypt specific fields (like SSNs) individually.
                  </td>
                </tr>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <td className="px-6 py-4 text-gray-900 dark:text-white">Atomic Transactions</td>
                  <td className="px-6 py-4 text-gray-600 dark:text-gray-400">
                    Our payment checks are rigorous. We use "Atomic
                    Transactions" to ensure you are never double-charged or
                    billed for services not rendered.
                  </td>
                </tr>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <td className="px-6 py-4 text-gray-900 dark:text-white">Zero-Plaintext Logs</td>
                  <td className="px-6 py-4 text-gray-600 dark:text-gray-400">
                    Our systems are designed to never write sensitive data to
                    internal logs, ensuring your private info stays private,
                    even from our developers.
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-gray-900 dark:text-white">Secure Document Upload</td>
                  <td className="px-6 py-4 text-gray-600 dark:text-gray-400">
                    Your tax documents are uploaded via a secure, encrypted
                    tunnel directly to our private storage.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="pb-20 lg:pb-25 xl:pb-30">
        <div className="mx-auto max-w-c-1235 px-4 md:px-8 xl:px-0">
          <SectionHeader
            headerInfo={{
              title: "FREQUENTLY ASKED QUESTIONS",
              subtitle: "Your Questions Answered",
              description: ``,
            }}
          />
          <div className="mt-12 space-y-8">
            <div>
              <h4 className="font-bold text-lg text-gray-900 dark:text-white mb-2">
                Q: Who can see my tax documents?
              </h4>
              <p className="text-gray-600 dark:text-gray-400">
                A: Only <strong>YOU</strong> and your{" "}
                <strong>assigned Tax Preparer</strong>. Not even other tax
                preparers on our platform can search for or view your files. It
                is a strict 1-to-1 relationship.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-lg text-gray-900 dark:text-white mb-2">
                Q: Is my credit card information safe?
              </h4>
              <p className="text-gray-600 dark:text-gray-400">
                A: Absolutely. We do not store your credit card numbers. All
                payments are processed securely through <strong>Stripe</strong>,
                a global leader in payment processing, ensuring we never touch
                your raw payment data.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-lg text-gray-900 dark:text-white mb-2">
                Q: What happens if I make a mistake on my upload?
              </h4>
              <p className="text-gray-600 dark:text-gray-400">
                A: Our system includes automated "Logic Checks." If you upload
                more documents than expected or miss a critical file, our
                system flags it for review before we even file, preventing
                rejections from the IRS.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Security;
