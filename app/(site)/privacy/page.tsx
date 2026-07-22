"use client";
import { motion } from "framer-motion";
import Link from "next/link";

const commitments = [
  {
    ref: "§ VI",
    href: "#s6",
    title: "We never sell your information. Period.",
    body: "Not your contact details, not your data, not lists of our clients. No sale, no rental, no lease — to anyone. The only third parties who touch your data are the vendors who help us serve you, and they're contractually barred from using it for anything else.",
    link: "Section VI — Sharing with third parties",
  },
  {
    ref: "§ III",
    href: "#s3",
    title: "Your tax return is used for one thing: your tax return.",
    body: "Federal law — IRC §7216 — makes it a crime for a preparer to use your tax return information for anything beyond preparing your return without your written consent. We follow that law to the letter, and we'll never bury that consent in fine print.",
    link: "Section III — Tax return information",
  },
  {
    ref: "§ X",
    href: "#s10",
    title: "We protect your data like a financial institution — because legally, we are one.",
    body: "Tax firms fall under the Gramm-Leach-Bliley Act and the FTC Safeguards Rule. That means a written security program, encryption in transit and at rest, strict access controls, and multi-factor authentication — not just good intentions.",
    link: "Section X — Data security",
  },
  {
    ref: "§ V",
    href: "#s5",
    title: "Your QuickBooks connection is yours — and read-only.",
    body: "Business clients can optionally link their own QuickBooks Online account. We only pull data out to build your reports — we never write anything back, no client can ever see another client's books, and you can disconnect at any time.",
    link: "Section V — QuickBooks integration",
  },
  {
    ref: "§ I",
    href: "#s1",
    title: "Your card number never touches our servers.",
    body: "Payments run through a dedicated payment processor. We never store your full card number — we keep only the transaction records needed for billing and bookkeeping.",
    link: "Section I — What we collect",
  },
  {
    ref: "§ VII–VIII",
    href: "#s7",
    title: "You can see it, fix it, or ask us to delete it.",
    body: "Wherever you live in the U.S., you can request access to what we hold, correct it, or have it deleted — subject only to the records the IRS requires us to keep. One email starts the process, and exercising your rights never costs you anything.",
    link: "Sections VII & VIII — Your rights",
  },
];

const sections = [
  {
    id: "s1",
    h: "I. Collection of Your Personal Information",
    paras: [
      "In order to provide you with the products and services offered, the Company may collect personally identifiable information, such as your first and last name, mailing address, email address, phone number, date of birth, Social Security number or taxpayer identification number, and job title, occupation, and employer information.",
      "Because the Company provides tax preparation and accounting services, the Portal may also collect and store tax return information and supporting documentation that you provide, such as Forms W-2 and 1099, income and expense records, prior-year tax returns, bank account information for refunds or payments, and information about your dependents and household (“Tax Return Information”).",
      "If you purchase the Company's products and services, payment is processed by a third-party payment processor (such as Stripe). Your full payment card number is collected and processed by the payment processor, not stored by the Company. The Company retains only the transaction records reasonably necessary for billing, accounting, and recordkeeping.",
      "The Company may also collect anonymous demographic information, which is not unique to you, such as your age and household income. We do not collect personal information about you unless you voluntarily provide it to us; however, certain personal information may be required in order to register for an account, engage our services, submit documents, or make payments.",
    ],
  },
  {
    id: "s2",
    h: "II. Use of Your Personal Information",
    paras: [
      "The Company collects and uses your personal information to: operate and deliver the services you have requested, including preparing and filing individual and/or business tax forms with the relevant tax authorities; provide you with information, products, or services that you request; provide notices about your account and communicate regarding your engagement; generate accounting reports, financial statements, and analytics as part of the services you have engaged us to perform; carry out the Company's obligations and enforce our rights under any contracts between you and us, including for billing and collection; notify you about changes to the Portal or our services; maintain the security of our services and prevent fraud or misuse; comply with applicable laws, regulations, legal processes, or governmental requests; and for any other purpose with your consent.",
    ],
  },
  {
    id: "s3",
    h: "III. Tax Return Information",
    paras: [
      "As a tax return preparer, the Company's use and disclosure of Tax Return Information is restricted by federal law, including Internal Revenue Code Sections 7216 and 6713 and the regulations thereunder. The Company uses Tax Return Information only to prepare and file your tax returns and to provide the services you have engaged us to perform, and as otherwise permitted or required by law.",
      "The Company may use your contact information to inform you of other products or services available from the Company. However, the Company will not use or disclose your Tax Return Information for marketing, cross-selling, or any purpose other than tax return preparation unless we first obtain your knowing, voluntary written consent in the form and manner required by IRS regulations.",
    ],
  },
  {
    id: "s4",
    h: "IV. Tracking Technologies; Do Not Track",
    paras: [
      "Pursuant to 6 Del. C. § 1205C(b), the Company discloses how it responds to web browser “Do Not Track” (“DNT”) signals and similar user preference mechanisms. At this time, the Company does not respond to DNT signals or similar mechanisms.",
      "The Portal uses cookies and similar technologies to maintain your login session and keep the Portal secure and functional, and analytics tools to understand how the Portal is used so we can improve our services. The Company does not use tracking technologies to serve third-party advertising within the Portal.",
    ],
  },
  {
    id: "s5",
    h: "V. QuickBooks Online Integration",
    paras: [
      "Business clients may optionally connect their own QuickBooks Online account to the Portal through Intuit's authorized application programming interfaces. If you choose to connect QuickBooks Online, the Company will access and retrieve accounting data from your QuickBooks Online account (such as transactions, accounts, customers, vendors, and financial reports) solely to provide accounting, reporting, and analytics services to you. The integration is read-only: the Portal retrieves data from QuickBooks Online and does not write data back to your QuickBooks Online account.",
      "Each client's QuickBooks Online connection is separate. Data retrieved from your QuickBooks Online account is used only in connection with your engagement and is never shared with, or made visible to, any other client. You may disconnect the QuickBooks Online integration at any time through the Portal or by contacting us, after which the Company will no longer retrieve data from your account. Your use of QuickBooks Online itself is governed by Intuit's own terms and privacy policy.",
    ],
  },
  {
    id: "s6",
    h: "VI. Sharing Information with Third Parties",
    paras: [
      "The Company does not sell, rent, or lease its customer lists or your personal information to third parties. The Company does not sell biometric data to third parties.",
      "The Company may share data with trusted service providers to help perform functions on our behalf, such as cloud hosting and data storage, payment processing, email delivery, customer support, and analytics. All such third parties are prohibited from using your personal information except to provide these services to the Company, and they are required to maintain the confidentiality of your information.",
      "If you elect to use certain optional third-party products offered in connection with our services — for example, refund transfer or related bank products offered through Santa Barbara Tax Products Group (“SBTPG”) — those products are provided under a separate agreement between you and the third party, are not integrated into the Portal, and are governed by that third party's own terms and privacy policy.",
      "The Company may disclose your personal information, without notice, if required to do so by law or in the good faith belief that such action is necessary to: (a) conform to the edicts of the law or comply with legal process; (b) protect and defend the rights or property of the Company; and/or (c) act under exigent circumstances to protect the personal safety of users or the public. Any disclosure of Tax Return Information will be made only as permitted by Internal Revenue Code Section 7216 and its regulations.",
    ],
  },
  {
    id: "s7",
    h: "VII. Your Privacy Rights",
    paras: [
      "Depending on your state of residence, you may have rights under applicable state privacy and data protection laws, which may include the right to: know and access the personal information we have collected about you; request correction of inaccurate personal information; request deletion of your personal information, subject to legal exceptions; and opt out of the sale of personal information or its use for targeted advertising. The Company does not sell your personal information and does not use it for targeted advertising.",
      "To exercise any of these rights, contact us using the information in the “Contact Information” section below. We may need to verify your identity before fulfilling your request, and we will respond within the timeframes required by applicable law. We will not discriminate against you for exercising any of these rights.",
    ],
  },
  {
    id: "s8",
    h: "VIII. Right to Deletion",
    paras: [
      "Subject to certain exceptions, on receipt of a verifiable request from you, we will delete your personal information from our records and direct any service providers to delete it from theirs. We may not be able to comply with a deletion request where retaining the information is necessary to: complete a transaction or provide a requested service; comply with federal or state recordkeeping requirements applicable to tax return preparers, including retention of copies of returns and related records required by the Internal Revenue Code; detect security incidents or protect against fraudulent or illegal activity; debug and repair errors; exercise free speech or another right provided by law; comply with an existing legal obligation; or otherwise use the information internally in a lawful manner compatible with the context in which you provided it.",
    ],
  },
  {
    id: "s9",
    h: "IX. Data Retention",
    paras: [
      "The Company retains personal information and Tax Return Information for as long as reasonably necessary to provide services to you, comply with our legal and professional obligations, resolve disputes, and enforce our agreements. Federal law requires tax return preparers to retain copies of returns or client lists for a minimum period, and other records may be subject to longer retention requirements. When information is no longer required to be retained, we dispose of it securely.",
    ],
  },
  {
    id: "s10",
    h: "X. Data Security and Breach Notification",
    paras: [
      "The Company is subject to the federal Gramm-Leach-Bliley Act and the FTC Safeguards Rule as a provider of tax preparation services, and maintains a written information security program with administrative, technical, and physical safeguards designed to protect personal information from unauthorized access, acquisition, disclosure, or use. These safeguards include encryption of data in transit and at rest, access controls limiting access to those who need it to perform services, and multi-factor authentication for access to systems containing client information.",
      "In the event of a security incident involving personal information, the Company will promptly investigate the incident and provide notice to affected individuals and, where required, to applicable regulatory authorities, in the manner and within the timeframes prescribed by applicable law.",
    ],
  },
  {
    id: "s11",
    h: "XI. External Data Storage",
    paras: [
      "We may store your data on secure servers provided by third-party cloud hosting vendors with whom we have contracted. These vendors are contractually required to maintain appropriate security measures and to use your data only to provide hosting and related services to the Company.",
    ],
  },
  {
    id: "s12",
    h: "XII. Children Under 13",
    paras: [
      "The Portal is not directed to children, and the Company does not knowingly collect personally identifiable information from children under the age of thirteen. If you are under the age of 13, you must ask your parent or guardian for permission to use the Portal. If we learn that we have collected personal information from a child under 13 without parental consent, we will delete it.",
    ],
  },
  {
    id: "s13",
    h: "XIII. Email Communications",
    paras: [
      "From time to time, the Company may contact you via email to provide announcements, promotional offers, alerts, confirmations, surveys, and/or other general communications. If you would like to stop receiving marketing or promotional communications, you may opt out by clicking the unsubscribe link included in those emails. You will continue to receive transactional and service-related communications regarding your account and engagement.",
    ],
  },
  {
    id: "s14",
    h: "XIV. Changes to This Policy",
    paras: [
      "The Company reserves the right to change this Policy from time to time — for example, when there are changes in our services, our data protection practices, or the law. When changes are significant, we will inform you by sending an email to the primary email address specified in your account, by placing a prominent notice on the Portal, and/or by updating this page. Your continued use of the Portal and/or our services after such modifications constitutes your acknowledgment of the modified Policy and your agreement to be bound by it.",
    ],
  },
];

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
          {/* Hero */}
          <p className="mb-4 text-sm font-semibold uppercase tracking-wide text-blue-600 dark:text-blue-400">
            Privacy at BLK Tax Services
          </p>
          <h1 className="mb-6 text-4xl font-bold leading-tight text-gray-900 dark:text-white md:text-5xl">
            Your taxes are personal. We keep them that way.
          </h1>
          <p className="mb-4 max-w-2xl text-lg text-gray-600 dark:text-gray-400">
            The BLK Tax Portal holds some of the most sensitive information you have — your income,
            your Social Security number, your business&apos;s books. Before the legal language, here is
            exactly how we treat it.
          </p>
          <p className="mb-12 text-gray-600 dark:text-gray-400">Effective July 19, 2026</p>

          {/* Plain-English summary */}
          <div className="mb-16 rounded-2xl bg-gray-50 p-6 dark:bg-gray-900 sm:p-10">
            <h2 className="mb-2 text-2xl font-bold text-gray-900 dark:text-white sm:text-3xl">
              Six commitments, in plain terms
            </h2>
            <p className="mb-8 text-gray-600 dark:text-gray-400">
              Each one is backed by a section of our full Privacy Policy below — the numbers tell you
              exactly where to look.
            </p>
            <div className="grid gap-5 sm:grid-cols-2">
              {commitments.map((c) => (
                <div key={c.ref} className="flex flex-col rounded-xl bg-white p-6 shadow-sm dark:bg-black">
                  <span className="mb-3 text-sm font-semibold text-blue-600 dark:text-blue-400">
                    {c.ref}
                  </span>
                  <h3 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">{c.title}</h3>
                  <p className="mb-4 flex-1 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                    {c.body}
                  </p>
                  <a
                    href={c.href}
                    className="text-sm font-medium text-blue-600 transition-colors hover:text-blue-700 dark:text-blue-400"
                  >
                    {c.link} →
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Transition */}
          <div className="mb-12 text-center">
            <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-blue-600 dark:text-blue-400">
              Now, the paperwork
            </p>
            <h2 className="mx-auto max-w-2xl text-2xl font-bold text-gray-900 dark:text-white sm:text-3xl">
              We&apos;re a tax firm. We believe in doing the paperwork properly.
            </h2>
          </div>

          {/* Full policy */}
          <div id="policy" className="prose prose-lg max-w-none dark:prose-invert">
            <h2 className="mb-2 text-3xl font-bold text-gray-900 dark:text-white">Privacy Policy</h2>
            <p className="mb-8 border-b border-gray-200 pb-6 text-sm text-gray-500 dark:border-gray-800 dark:text-gray-400">
              BLK Tax Portal — app.blktaxservices.com · Effective as of July 19, 2026
            </p>
            <p className="mb-8 text-gray-600 dark:text-gray-400">
              This Privacy Policy (&quot;Policy&quot;) applies to the BLK Tax Portal, available at
              app.blktaxservices.com (the &quot;Portal&quot;), and to BLK Consulting, LLC, a Delaware limited
              liability company doing business as BLK Tax Services (&quot;Company,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;),
              and governs data collection and usage. The Portal is a tax and client management
              application through which clients can communicate with the Company, share documents, and
              receive tax preparation, accounting, and advisory services. By using the Portal, you
              consent to the data practices described in this Policy.
            </p>

            {sections.map((s) => (
              <section id={s.id} key={s.id} className="mb-10 scroll-mt-28">
                <h3 className="mb-4 text-2xl font-semibold text-gray-900 dark:text-white">{s.h}</h3>
                {s.paras.map((p, i) => (
                  <p key={i} className="mb-4 text-gray-600 dark:text-gray-400">
                    {p}
                  </p>
                ))}
              </section>
            ))}

            <section id="s15" className="mb-10 scroll-mt-28">
              <h3 className="mb-4 text-2xl font-semibold text-gray-900 dark:text-white">
                XV. Contact Information
              </h3>
              <p className="mb-4 text-gray-600 dark:text-gray-400">
                The Company welcomes your questions or comments regarding this Policy. If you believe
                that the Company has not adhered to this Policy, please contact us at:
              </p>
              <div className="rounded-lg border-l-4 border-blue-600 bg-gray-50 p-6 dark:bg-gray-900">
                <p className="font-semibold text-gray-900 dark:text-white">
                  BLK Consulting, LLC d/b/a BLK Tax Services
                </p>
                <p className="text-gray-600 dark:text-gray-400">3 Germay Dr, Unit 4 #2081</p>
                <p className="text-gray-600 dark:text-gray-400">Wilmington, DE 19804</p>
                <p className="mt-3 text-gray-600 dark:text-gray-400">Email: contact@blktaxservices.com</p>
              </div>
              <p className="mt-6 italic text-gray-500 dark:text-gray-400">Effective as of July 19, 2026</p>
            </section>

            <p className="mt-8 text-gray-600 dark:text-gray-400">
              See also our{" "}
              <Link href="/terms" className="font-medium text-blue-600 hover:text-blue-700 dark:text-blue-400">
                Terms of Service
              </Link>
              .
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PrivacyPolicy;
