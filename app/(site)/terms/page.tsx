"use client";
import { motion } from "framer-motion";
import Link from "next/link";

const highlights = [
  {
    href: "#t4",
    title: "This page covers the software, not your tax work.",
    body: "Your actual tax prep and advisory work is governed by the engagement letter or quote you sign with us. These Terms only cover the online Portal that connects us. If the two ever conflict on professional services, your engagement agreement wins.",
    link: "Section 4 — Professional services",
  },
  {
    href: "#t6",
    title: "Your documents stay yours.",
    body: "You keep ownership of everything you upload. You just grant us permission to store and process it so we can do the work — nothing more.",
    link: "Section 6 — Your content",
  },
  {
    href: "#t8",
    title: "QuickBooks is optional and read-only.",
    body: "Business clients can link QuickBooks Online if they want. We only read data to build your reports, never write back, and you can disconnect anytime.",
    link: "Section 8 — QuickBooks integration",
  },
  {
    href: "#t12",
    title: "You can leave, and take your data with you.",
    body: "You can stop using the Portal anytime. After your engagement ends you get at least 60 days to export copies of your content before your account is deactivated.",
    link: "Section 12 — Term & data export",
  },
  {
    href: "#t10",
    title: "Use it fairly.",
    body: "Don't try to access other clients' data, break the software, reverse-engineer it, or resell access. Standard fair-use rules.",
    link: "Section 10 — Acceptable use",
  },
  {
    href: "#t16",
    title: "Governed by Delaware law.",
    body: "Disputes are resolved in Delaware courts — no forced arbitration. Nothing here removes non-waivable consumer rights you have in your home state.",
    link: "Section 16 — Governing law",
  },
];

type TermSection = {
  id: string;
  n: string;
  h: string;
  intro?: string;
  list?: string[];
  paras?: string[];
  caps?: boolean;
};

const sections: TermSection[] = [
  {
    id: "t1",
    n: "SECTION 1",
    h: "Acceptance of These Terms",
    paras: [
      "By creating an account, logging in, or otherwise accessing or using the Portal, you accept and agree to be bound by these Terms and by our Privacy Policy, which is incorporated into these Terms by reference. If you do not agree to these Terms, do not access or use the Portal.",
      "You may use the Portal only if you are at least 18 years of age and capable of forming a binding contract, or if you are the authorized representative of a business entity, in which case “you” refers to that entity and you represent that you have authority to bind it.",
    ],
  },
  {
    id: "t2",
    n: "SECTION 2",
    h: "The Portal and Changes to It",
    paras: [
      "The Portal is provided as a hosted, online service. No software download or installation is required, and these Terms do not grant you any license to install or copy the Portal's software. We may add, modify, or discontinue features of the Portal from time to time. Where a change materially reduces the functionality available to you during an active engagement, we will use reasonable efforts to notify you.",
    ],
  },
  {
    id: "t3",
    n: "SECTION 3",
    h: "Accounts and Security",
    paras: [
      "You agree to provide accurate, current, and complete information when registering for an account and to keep that information up to date. You are responsible for maintaining the confidentiality of your login credentials and for all activity that occurs under your account. You agree to notify us promptly of any unauthorized access to or use of your account. We may suspend or terminate your access to the Portal if we reasonably believe your account has been compromised or is being used in violation of these Terms.",
    ],
  },
  {
    id: "t4",
    n: "SECTION 4",
    h: "Professional Services; No Advice from the Software",
    paras: [
      "The Portal is a technology platform. The professional tax preparation, accounting, and advisory services the Company provides to you are governed by the engagement letter, quote, or other service agreement between you and the Company (the “Engagement Agreement”), not by these Terms. If there is a conflict between these Terms and your Engagement Agreement with respect to professional services, the Engagement Agreement controls.",
      "Content made available through the Portal — including reports, analytics, calculators, and general informational material — does not by itself constitute tax, legal, accounting, or financial advice. Advice is provided only through your engagement with the Company's professionals.",
    ],
  },
  {
    id: "t5",
    n: "SECTION 5",
    h: "Fees and Payment",
    paras: [
      "Access to the Portal is included with the professional services you engage the Company to perform. Fees for professional services are set out in your Engagement Agreement or in a quote provided to you. Payments are processed through a third-party payment processor (such as Stripe); by submitting payment information you authorize the processor to charge the applicable fees. You are responsible for any applicable taxes on fees. Except as required by law or expressly stated in your Engagement Agreement, fees are non-refundable.",
    ],
  },
  {
    id: "t6",
    n: "SECTION 6",
    h: "Your Content and Documents",
    paras: [
      "You retain all ownership rights in the documents, records, and other content you upload to or generate through the Portal (“Your Content”). You grant the Company a limited, non-exclusive license to host, store, process, reproduce, and display Your Content solely as necessary to provide the services, comply with law, and maintain and secure the Portal. You are responsible for the accuracy and completeness of Your Content, and you represent that you have the right to provide it to us.",
    ],
  },
  {
    id: "t7",
    n: "SECTION 7",
    h: "Electronic Communications and Signatures",
    paras: [
      "By using the Portal, you consent to receive communications from the Company electronically, including by email and through notices posted in the Portal, and you agree that such communications satisfy any legal requirement that a communication be in writing. To the extent you execute documents electronically through or in connection with the Portal — including tax filing authorizations and engagement documents — you agree that your electronic signature is legally binding under the federal E-SIGN Act and applicable state law, including the Uniform Electronic Transactions Act. You may withdraw your consent to electronic delivery by contacting us, though doing so may limit your ability to use the Portal.",
    ],
  },
  {
    id: "t8",
    n: "SECTION 8",
    h: "QuickBooks Online Integration",
    paras: [
      "Business clients may optionally connect their own QuickBooks Online account to the Portal through Intuit's authorized interfaces. By connecting QuickBooks Online, you authorize the Company to retrieve accounting data from your QuickBooks Online account solely to provide accounting, reporting, and analytics services to you. The integration is read-only; the Portal does not write data back to your QuickBooks Online account. You may disconnect the integration at any time through the Portal or by contacting us. Your use of QuickBooks Online is governed by your agreement with Intuit, and the Company is not responsible for QuickBooks Online itself.",
    ],
  },
  {
    id: "t9",
    n: "SECTION 9",
    h: "Third-Party Products and Services",
    paras: [
      "Certain optional products offered in connection with our services — such as refund transfer or related bank products offered through Santa Barbara Tax Products Group — are provided by third parties under separate agreements between you and the third party, are not part of the Portal, and are governed by the third party's own terms and privacy policy. The Company is not a party to, and is not responsible for, those products.",
    ],
  },
  {
    id: "t10",
    n: "SECTION 10",
    h: "Acceptable Use",
    intro: "You agree not to:",
    list: [
      "Use the Portal for any unlawful purpose or in violation of any applicable law or regulation.",
      "Access or attempt to access any other client's account or data.",
      "Upload malicious code or take any action that interferes with or disrupts the Portal or its infrastructure.",
      "Decompile, reverse-engineer, disassemble, or otherwise attempt to derive the source code of the Portal, except to the extent such restriction is prohibited by law.",
      "Scrape, harvest, or systematically extract data from the Portal other than Your Content.",
      "Resell, sublicense, or provide access to the Portal to any third party without our written consent.",
      "Impersonate any person or misrepresent your affiliation with any person or entity.",
    ],
  },
  {
    id: "t11",
    n: "SECTION 11",
    h: "Intellectual Property",
    paras: [
      "The Portal, including its software, design, text, graphics, logos, and all related intellectual property, is owned by the Company or its licensors and is protected by copyright, trademark, and other intellectual property laws. Subject to these Terms, the Company grants you a limited, non-exclusive, non-transferable, revocable right to access and use the Portal for your own internal purposes in connection with the services. No other rights are granted. If you provide feedback or suggestions regarding the Portal, you grant the Company a perpetual, irrevocable, royalty-free license to use that feedback without restriction.",
    ],
  },
  {
    id: "t12",
    n: "SECTION 12",
    h: "Term, Termination, and Data Export",
    paras: [
      "These Terms apply for as long as you access or use the Portal. You may stop using the Portal at any time. We may suspend or terminate your access to the Portal for violation of these Terms, for security reasons, or upon conclusion of your engagement with the Company.",
      "Following the end of your engagement, you will retain access to the Portal (or will be provided another reasonable means of export) for at least sixty (60) days to download copies of Your Content. After that period, we may deactivate your account. The Company will continue to retain records as required by applicable law and professional standards, including recordkeeping requirements applicable to tax return preparers, as described in our Privacy Policy.",
    ],
  },
  {
    id: "t13",
    n: "SECTION 13",
    h: "Disclaimer of Warranties",
    caps: true,
    paras: [
      "THE PORTAL IS PROVIDED “AS IS” AND “AS AVAILABLE.” TO THE MAXIMUM EXTENT PERMITTED BY LAW, THE COMPANY DISCLAIMS ALL WARRANTIES, EXPRESS OR IMPLIED, INCLUDING ANY IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE, AND NON-INFRINGEMENT. THE COMPANY DOES NOT WARRANT THAT THE PORTAL WILL BE UNINTERRUPTED, ERROR-FREE, OR COMPLETELY SECURE. THIS SECTION DOES NOT LIMIT ANY WARRANTY OR OBLIGATION SET OUT IN YOUR ENGAGEMENT AGREEMENT WITH RESPECT TO PROFESSIONAL SERVICES, AND SOME JURISDICTIONS DO NOT ALLOW THE EXCLUSION OF CERTAIN WARRANTIES, SO SOME OF THE ABOVE EXCLUSIONS MAY NOT APPLY TO YOU.",
    ],
  },
  {
    id: "t14",
    n: "SECTION 14",
    h: "Limitation of Liability",
    caps: true,
    paras: [
      "TO THE MAXIMUM EXTENT PERMITTED BY LAW: (A) IN NO EVENT WILL THE COMPANY, ITS MEMBERS, MANAGERS, OFFICERS, EMPLOYEES, OR AGENTS BE LIABLE FOR ANY INDIRECT, CONSEQUENTIAL, SPECIAL, INCIDENTAL, PUNITIVE, OR EXEMPLARY DAMAGES (INCLUDING LOST PROFITS, LOST REVENUES, OR LOSS OF BUSINESS) ARISING OUT OF OR RELATING TO THE PORTAL, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGES; AND (B) THE COMPANY'S TOTAL AGGREGATE LIABILITY ARISING OUT OF OR RELATING TO THE PORTAL UNDER THESE TERMS WILL NOT EXCEED THE FEES PAID BY YOU TO THE COMPANY FOR SERVICES IN THE TWELVE (12) MONTHS PRECEDING THE EVENT GIVING RISE TO THE CLAIM. THESE LIMITATIONS DO NOT APPLY TO LIABILITY THAT CANNOT BE LIMITED BY LAW, AND THEY DO NOT LIMIT ANY LIABILITY OR STANDARD OF CARE SET OUT IN YOUR ENGAGEMENT AGREEMENT WITH RESPECT TO PROFESSIONAL SERVICES.",
    ],
  },
  {
    id: "t15",
    n: "SECTION 15",
    h: "Indemnification",
    paras: [
      "You agree to indemnify and hold the Company harmless from all third-party claims, judgments, liabilities, expenses, and costs (including reasonable attorneys' fees) arising from your breach of these Terms, your violation of applicable law, or your misuse of the Portal.",
    ],
  },
  {
    id: "t16",
    n: "SECTION 16",
    h: "Governing Law and Dispute Resolution",
    paras: [
      "These Terms are governed by the laws of the State of Delaware, without regard to its conflict of laws principles. The parties have considered and intentionally decided not to include any alternative dispute resolution procedures, such as mediation or arbitration, in these Terms. Any dispute, controversy, or claim arising out of or relating to these Terms or the Portal will be resolved exclusively through litigation in the state or federal courts located in Delaware, and each party consents to the jurisdiction of those courts. Nothing in this section limits any non-waivable right you may have under the consumer protection laws of your state of residence to bring a claim in your local courts.",
    ],
  },
  {
    id: "t17",
    n: "SECTION 17",
    h: "Attorneys' Fees",
    paras: [
      "If a legal suit, action, or proceeding is brought by any party to enforce or interpret any provision of these Terms, the prevailing party will be entitled to recover, in addition to any other relief awarded, its reasonable costs and attorneys' fees.",
    ],
  },
  {
    id: "t18",
    n: "SECTION 18",
    h: "General",
    paras: [
      "Severability. If any provision of these Terms is held invalid, illegal, or unenforceable, the remaining provisions continue in full force, and the affected provision will be enforced to the maximum extent permissible so as to effect the parties' intent.",
      "Waiver. The failure of either party to enforce any provision of these Terms is not a waiver of the right to enforce that or any other provision later.",
      "Assignment. You may not assign these Terms without our prior written consent. We may assign these Terms in connection with a merger, acquisition, or sale of assets.",
      "Entire Agreement. These Terms, together with the Privacy Policy, constitute the entire agreement between you and the Company regarding the Portal, and supersede all prior agreements regarding the Portal. Your Engagement Agreement governs the professional services and is not superseded by these Terms.",
    ],
  },
  {
    id: "t19",
    n: "SECTION 19",
    h: "Changes to These Terms",
    paras: [
      "We may update these Terms from time to time. When changes are significant, we will notify you by email to the primary address on your account and/or by prominent notice in the Portal. Your continued use of the Portal after changes take effect constitutes your acceptance of the updated Terms.",
    ],
  },
];

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
          {/* Hero */}
          <p className="mb-4 text-sm font-semibold uppercase tracking-wide text-blue-600 dark:text-blue-400">
            The fine print
          </p>
          <h1 className="mb-6 text-4xl font-bold leading-tight text-gray-900 dark:text-white md:text-5xl">
            Terms of Service for the BLK Tax Portal
          </h1>
          <p className="mb-4 max-w-2xl text-lg text-gray-600 dark:text-gray-400">
            These terms govern your use of the Portal itself. Your tax preparation and advisory work
            is governed by your engagement agreement with us — this page covers the software that
            connects us.
          </p>
          <p className="mb-12 text-gray-600 dark:text-gray-400">Effective July 19, 2026</p>

          {/* Plain-English summary */}
          <div className="mb-16 rounded-2xl bg-gray-50 p-6 dark:bg-gray-900 sm:p-10">
            <h2 className="mb-2 text-2xl font-bold text-gray-900 dark:text-white sm:text-3xl">
              The short version
            </h2>
            <p className="mb-8 text-gray-600 dark:text-gray-400">
              Here are the key points in plain English. The full, binding terms follow below — each
              card links to the section it summarizes.
            </p>
            <div className="grid gap-5 sm:grid-cols-2">
              {highlights.map((c) => (
                <div key={c.href} className="flex flex-col rounded-xl bg-white p-6 shadow-sm dark:bg-black">
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

          {/* Full terms */}
          <div className="prose prose-lg max-w-none dark:prose-invert">
            <h2 className="mb-2 text-3xl font-bold text-gray-900 dark:text-white">Terms of Service</h2>
            <p className="mb-8 border-b border-gray-200 pb-6 text-sm text-gray-500 dark:border-gray-800 dark:text-gray-400">
              BLK Tax Portal — app.blktaxservices.com · Effective as of July 19, 2026
            </p>
            <p className="mb-8 text-gray-600 dark:text-gray-400">
              These Terms of Service (&quot;Terms&quot;) govern your access to and use of the BLK Tax Portal,
              available at app.blktaxservices.com (the &quot;Portal&quot;), operated by BLK Consulting, LLC, a
              Delaware limited liability company doing business as BLK Tax Services (&quot;Company,&quot; &quot;we,&quot;
              &quot;us,&quot; or &quot;our&quot;). The Portal is a hosted web application through which clients communicate
              with the Company, share and receive documents, make payments, and receive accounting
              reports and analytics in connection with the Company's tax preparation, accounting, and
              advisory services.
            </p>

            {sections.map((s) => (
              <section id={s.id} key={s.id} className="mb-10 scroll-mt-28">
                <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400">
                  {s.n}
                </p>
                <h3 className="mb-4 text-2xl font-semibold text-gray-900 dark:text-white">{s.h}</h3>
                {s.intro && <p className="mb-4 text-gray-600 dark:text-gray-400">{s.intro}</p>}
                {s.list && (
                  <ul className="mb-4 list-disc space-y-2 pl-6 text-gray-600 dark:text-gray-400">
                    {s.list.map((li, i) => (
                      <li key={i}>{li}</li>
                    ))}
                  </ul>
                )}
                {s.paras?.map((p, i) => (
                  <p
                    key={i}
                    className={`mb-4 ${
                      s.caps
                        ? "text-sm leading-relaxed text-gray-500 dark:text-gray-400"
                        : "text-gray-600 dark:text-gray-400"
                    }`}
                  >
                    {p}
                  </p>
                ))}
              </section>
            ))}

            <section id="t20" className="mb-10 scroll-mt-28">
              <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400">
                SECTION 20
              </p>
              <h3 className="mb-4 text-2xl font-semibold text-gray-900 dark:text-white">
                Contact Information
              </h3>
              <p className="mb-4 text-gray-600 dark:text-gray-400">
                Questions about these Terms may be directed to:
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
              <Link href="/privacy" className="font-medium text-blue-600 hover:text-blue-700 dark:text-blue-400">
                Privacy Policy
              </Link>
              .
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TermsOfService;
