"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  hasRecordedCookieChoice,
  injectAnalyticsIfConsented,
  saveCookieConsent,
} from "@/lib/cookieConsent";

export function CookieConsentBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(!hasRecordedCookieChoice());
  }, []);

  useEffect(() => {
    injectAnalyticsIfConsented();
  }, []);

  const acceptAnalytics = () => {
    saveCookieConsent(true);
    injectAnalyticsIfConsented();
    setVisible(false);
  };

  const essentialOnly = () => {
    saveCookieConsent(false);
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-[100] border-t border-gray-200 bg-white/95 shadow-[0_-4px_24px_rgba(0,0,0,0.08)] backdrop-blur-md dark:border-gray-700 dark:bg-[#151A21]/95 dark:shadow-[0_-4px_24px_rgba(0,0,0,0.35)]"
      role="dialog"
      aria-label="Cookie preferences"
    >
      <div className="mx-auto max-w-4xl px-4 py-4 sm:flex sm:items-end sm:justify-between sm:gap-6">
        <div className="space-y-2 text-sm text-gray-600 dark:text-gray-400 sm:max-w-xl">
          <p className="font-medium text-gray-900 dark:text-white">Cookies & analytics</p>
          <p>
            We use essential cookies for the site to work. With your permission, we load
            privacy-friendly analytics to improve our services. See our{" "}
            <Link href="/privacy" className="text-blue-600 underline underline-offset-2 hover:no-underline dark:text-blue-400">
              Privacy Policy
            </Link>{" "}
            for details.
          </p>
        </div>
        <div className="mt-4 flex flex-shrink-0 flex-wrap gap-2 sm:mt-0 sm:justify-end">
          <button
            type="button"
            onClick={essentialOnly}
            className="rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-800 shadow-sm transition hover:bg-gray-50 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-100 dark:hover:bg-gray-700"
          >
            Essential only
          </button>
          <button
            type="button"
            onClick={acceptAnalytics}
            className="rounded-md bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700"
          >
            Accept analytics
          </button>
        </div>
      </div>
    </div>
  );
}
