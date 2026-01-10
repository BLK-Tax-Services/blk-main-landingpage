
import Security from "@/components/Security";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Security - Your Data is Safe With Us",
  description: "Learn how we protect your sensitive financial information with bank-grade encryption and IRS-compliant security protocols.",
  // other metadata
};

const SecurityPage = () => {
  return (
    <>
      <Security />
    </>
  );
};

export default SecurityPage;
