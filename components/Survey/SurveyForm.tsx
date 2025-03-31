"use client";
import React, { useState, useEffect } from "react";
import {
  FaUser,
  FaFileAlt,
  FaCheckCircle,
  FaDollarSign,
  FaHeart,
  FaPhone,
} from "react-icons/fa";
import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface FormData {
  fullName: string;
  email: string;
  phone: string;
}

interface Errors {
  userType?: string;
  documents?: string;
  businessMethod?: string;
  marriageStatus?: string;
  fullName?: string;
  email?: string;
  phone?: string;
}

// Document arrays
const personal_item = [
  "Retirement distribution (1099-R)",
  "Social Security (SSA-1099)",
  "State or local tax refund (1099-G)",
  "Unemployment compensation (1099-G)",
  "Interest (1099-INT)",
  "Dividends (1099-DIV)",
  "Sold stocks or investments (1099-B)",
  "Canceled debt (1099-C)",
  "ESA or 529 distribution (1099-Q)",
  "HSA or MSA distribution (1099-SA)",
  "Partnership (Schedule K-1)",
  "Gambling (W-2G)",
  "Farming",
  "Other",
];

const business_items = [
  "Retirement distribution (1099-R)",
  "Social Security (SSA-1099)",
  "State or local tax refund (1099-G)",
  "Unemployment compensation (1099-G)",
  "Interest (1099-INT)",
  "Dividends (1099-DIV)",
  "Sold stocks or investments (1099-B)",
  "Canceled debt (1099-C)",
  "ESA or 529 distribution (1099-Q)",
  "HSA or MSA distribution (1099-SA)",
  "Partnership (Schedule K-1)",
  "Gambling (W-2G)",
  "Farming",
  "Other",
];

const marriageOptions = ["Single", "Married", "Separated", "Divorced"];

const documentKeyMapping = {
  0: "employment_W2",
  1: "retirementDistribution",
  2: "socialSecuritySSA",
  3: "selfEmployment",
  4: "stateOrLocalTaxRefund",
  5: "unemploymentCompensation",
  6: "interest",
  7: "dividends",
  8: "soldStockOrInvestments",
  9: "canceledDebt",
  10: "rent",
  11: "royalties",
  12: "esaOrFtnDistribution",
  13: "hsaOrMsaDistribution",
  14: "partnershipSchedule",
  15: "sCorporationSchedule",
  16: "estateOrTrustSchedule",
  17: "gambling",
  18: "farming",
};

const SurveyForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [userType, setUserType] = useState("");
  const [businessMethod, setBusinessMethod] = useState("");
  const [documentCounts, setDocumentCounts] = useState<Record<number, number>>({});
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
    phone: "",
  });
  const [marriageStatus, setMarriageStatus] = useState("");
  const [childrenCount, setChildrenCount] = useState(0);
  const [errors, setErrors] = useState<Errors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Initialize doc counts when userType changes
  useEffect(() => {
    const initializeDocumentCounts = () => {
      const initialCounts: Record<number, number> = {};
      const itemsToUse = userType === "individual" ? personal_item : business_items;
      itemsToUse.forEach((_, index) => {
        initialCounts[index] = 0;
      });
      setDocumentCounts(initialCounts);
    };

    if (userType) {
      initializeDocumentCounts();
    }
  }, [userType]);

  // Validation for each step
  const validateStep = () => {
    const newErrors: Errors = {};

    // Step 1
    if (currentStep === 1 && !userType) {
      newErrors.userType = "Please select a user type.";
    }

    // Step 2
    if (currentStep === 2) {
      const totalDocuments = Object.values(documentCounts).reduce((acc, val) => acc + val, 0);
      if (totalDocuments === 0) {
        newErrors.documents = "Please select at least one document type.";
      }
    }

    // Step 3
    if (currentStep === 3 && !businessMethod) {
      newErrors.businessMethod = "Please select a business method.";
    }

    // Step 4
    if (currentStep === 4 && !marriageStatus) {
      newErrors.marriageStatus = "Please select your marriage status.";
    }

    // Step 5
    if (currentStep === 5) {
      if (!formData.fullName.trim()) {
        newErrors.fullName = "Full name is required";
      }
      if (!formData.email.trim()) {
        newErrors.email = "Email is required";
      } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
        newErrors.email = "Email is invalid";
      }
      if (!formData.phone.trim()) {
        newErrors.phone = "Phone number is required";
      } else if (!/^\d{10}$/.test(formData.phone.replace(/\D/g, ""))) {
        newErrors.phone = "Phone number must be 10 digits";
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Step Navigation
  const handleNextStep = async () => {
    if (validateStep()) {
      setCurrentStep((prev) => Math.min(prev + 1, 5));
    } else {
      toast.error("Please fix the errors before proceeding.");
    }
  };

  const handleBackStep = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 1));
  };

  // Increment/Decrement
  const handleIncrement = (index: number) => {
    setDocumentCounts((prev) => ({
      ...prev,
      [index]: prev[index] + 1,
    }));
    setErrors((prev) => ({ ...prev, documents: undefined }));
  };

  const handleDecrement = (index: number) => {
    setDocumentCounts((prev) => ({
      ...prev,
      [index]: prev[index] > 0 ? prev[index] - 1 : 0,
    }));
  };

  // Input change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  // Single (self filing) checkbox
  const handleFilingSelf = (e: React.ChangeEvent<HTMLInputElement>) => {
    const isChecked = e.target.checked;
    setMarriageStatus(isChecked ? "Single" : "");
    setChildrenCount(isChecked ? 0 : childrenCount);
    setErrors((prev) => ({ ...prev, marriageStatus: undefined }));
  };

  // Submit
  const handleSubmit = async () => {
    if (!validateStep()) {
      toast.error("Please fix the errors in your personal information.");
      return;
    }

    setIsSubmitting(true);

    const data: Record<string, any> = {
      name: formData.fullName,
      email: formData.email,
      phone: formData.phone,
      business_method: businessMethod,
      marriage_status: marriageStatus,
      children: childrenCount,
    };

    // Attach doc counts
    Object.keys(documentKeyMapping).forEach((index) => {
      const documentKey = documentKeyMapping[index as unknown as keyof typeof documentKeyMapping];
      data[documentKey] = documentCounts[Number(index)] || 0;
    });

    try {
      const response = await fetch("http://127.0.0.1:4000/api/v1/initialSurvey", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error(`Server error: ${response.statusText}`);
      }

      await response.json();
      toast.success("Form submitted successfully!");

      // Reset
      setFormData({ fullName: "", email: "", phone: "" });
      setDocumentCounts({});
      setBusinessMethod("");
      setUserType("");
      setMarriageStatus("");
      setChildrenCount(0);
      setCurrentStep(6);
    } catch (error) {
      toast.error("Error submitting the form. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  // Items to display
  const displayedItems = userType === "individual" ? personal_item : business_items;

  return (
    <section className="pb-12.5 pt-32.5 lg:pb-25 lg:pt-45 xl:pb-30 xl:pt-20 dark:bg-[#151A21] bg-gray-50">
      <ToastContainer />
      <div className="relative z-[1] mx-auto max-w-c-1016 px-7.5 pb-7.5 pt-10 lg:px-15 lg:pt-15 xl:px-20 xl:pt-20">
        {/* Background Shape */}
        <div className="absolute left-0 top-0 -z-[1] h-2/3 w-full rounded-lg bg-gradient-to-t from-transparent to-[#dee7ff47] dark:to-[#252A42]" />
        <div className="absolute bottom-17.5 left-0 -z-[1] h-1/3 w-full">
          <Image
            src="/images/shape/shape-dotted-light.svg"
            alt="Dotted"
            className="dark:hidden"
            fill
          />
          <Image
            src="/images/shape/shape-dotted-dark.svg"
            alt="Dotted"
            className="hidden dark:block"
            fill
          />
        </div>

        <motion.div
          variants={{ hidden: { opacity: 0, y: -20 }, visible: { opacity: 1, y: 0 } }}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 1, delay: 0.1 }}
          viewport={{ once: true }}
          className="animate_top rounded-lg bg-white px-7.5 pt-7.5 shadow-solid-8 dark:border dark:border-strokedark dark:bg-black xl:px-15 xl:pt-15"
        >
          {/* Logo */}
          <div className="mb-15 flex items-center justify-center text-3xl font-semibold text-black dark:text-white xl:text-sectiontitle2">
            {/* Make the logo a bit bigger */}
            <div className="inline-flex items-center justify-center p-3 rounded-md bg-white/70 dark:bg-white/10 backdrop-blur-sm shadow-md">
              <Image
                src="/images/logo/logo-light.svg"
                alt="logo"
                width={240}
                height={60}
                className="dark:hidden"
              />
              <Image
                src="/images/logo/logo-dark.svg"
                alt="logo"
                width={240}
                height={60}
                className="hidden dark:block"
              />
            </div>
          </div>

          <div className="mx-auto w-full max-w-4xl">
            {/* Progress Bar */}
            <div className="relative">
              <div
                className="absolute left-0 top-1/2 -mt-px h-1 w-full bg-strokedark/30 dark:bg-white/10"
                aria-hidden="true"
              >
                <div
                  className="h-1 rounded-full bg-blue-600 transition-all duration-700 ease-in-out"
                  style={{
                    width: `${(100 / 5) * (currentStep - 1)}%`,
                  }}
                />
              </div>
              <ul className="relative z-10 flex w-full max-w-4xl justify-between pt-2">
                {[1, 2, 3, 4, 5].map((step) => {
                  const isCompleted = currentStep > step;
                  const isActive = currentStep === step;
                  const stepBg = isCompleted
                    ? "bg-green-500 text-white"
                    : isActive
                      ? "bg-blue-600 text-white"
                      : "bg-slate-300 dark:bg-strokedark text-black dark:text-white";
                  return (
                    <li key={step}>
                      <div
                        className={`flex h-12 w-12 items-center justify-center rounded-full text-sm font-semibold transition-colors duration-500 ${stepBg}`}
                        aria-current={isActive ? "step" : undefined}
                      >
                        {step === 1 ? (
                          <FaUser />
                        ) : step === 2 ? (
                          <FaFileAlt />
                        ) : step === 3 ? (
                          <FaDollarSign />
                        ) : step === 4 ? (
                          <FaHeart />
                        ) : (
                          <FaPhone />
                        )}
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* Survey Steps */}
            <div className="flex w-full justify-center py-8 sm:py-16">
              {/* Step 1: Select User Type */}
              {currentStep === 1 && (
                <motion.div
                  key="step1"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -30 }}
                  transition={{ duration: 0.5 }}
                  className="flex w-full flex-col items-center rounded-lg p-6"
                >
                  <h1 className="mb-4 text-center text-3xl font-bold text-black dark:text-white">
                    Select Your User Type
                  </h1>
                  {errors.userType && (
                    <p className="mb-4 text-red-500">{errors.userType}</p>
                  )}
                  <div className="grid w-full max-w-4xl grid-cols-1 gap-8 sm:grid-cols-2">
                    {/* Individual */}
                    <div
                      className={`relative cursor-pointer rounded-lg border-2 p-6 shadow-lg ${
                        userType === "individual"
                          ? "border-blue-500"
                          : "border-transparent"
                      } transition-colors duration-300 dark:bg-blacksection`}
                      onClick={() => setUserType("individual")}
                    >
                      <div className="flex flex-col items-center">
                        <FaUser className="mb-4 text-4xl text-blue-600" />
                        <h2 className="mb-1 text-xl font-semibold text-black dark:text-white">
                          Individual
                        </h2>
                        <p className="text-center text-sm text-gray-500 dark:text-gray-300">
                          For personal tax filings
                        </p>
                        <input
                          type="radio"
                          className="form-radio absolute right-4 top-4 h-6 w-6 text-blue-600"
                          checked={userType === "individual"}
                          onChange={() => setUserType("individual")}
                        />
                      </div>
                    </div>
                    {/* Business */}
                    <div
                      className={`relative cursor-pointer rounded-lg border-2 p-6 shadow-lg ${
                        userType === "business"
                          ? "border-blue-500"
                          : "border-transparent"
                      } transition-colors duration-300 dark:bg-blacksection`}
                      onClick={() => setUserType("business")}
                    >
                      <div className="flex flex-col items-center">
                        <FaFileAlt className="mb-4 text-4xl text-blue-600" />
                        <h2 className="mb-1 text-xl font-semibold text-black dark:text-white">
                          Business
                        </h2>
                        <p className="text-center text-sm text-gray-500 dark:text-gray-300">
                          For business tax filings
                        </p>
                        <input
                          type="radio"
                          className="form-radio absolute right-4 top-4 h-6 w-6 text-blue-600"
                          checked={userType === "business"}
                          onChange={() => setUserType("business")}
                        />
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Step 2: Select Documents */}
              {currentStep === 2 && (
                <motion.div
                  key="step2"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -30 }}
                  transition={{ duration: 0.5 }}
                  className="w-full rounded-lg p-6"
                >
                  <h1 className="mb-4 text-center text-2xl font-bold text-black dark:text-white">
                    Select Your Document Type
                  </h1>
                  {errors.documents && (
                    <p className="mb-4 text-center text-red-500">{errors.documents}</p>
                  )}
                  <div className="grid w-full max-w-4xl grid-cols-1 gap-4 sm:grid-cols-2">
                    {displayedItems.map((item, index) => (
                      <div key={index} className="flex items-center justify-between">
                        <span className="text-sm font-medium text-black dark:text-white">
                          {item}
                        </span>
                        <div className="flex items-center space-x-0">
                          <button
                            type="button"
                            onClick={() => handleDecrement(index)}
                            className="rounded-bl rounded-tl border border-gray-400 bg-gray-200 px-2 text-black shadow hover:bg-gray-300 dark:border-strokedark dark:bg-strokedark dark:text-white"
                          >
                            -
                          </button>
                          <span className="w-8 border border-gray-300 bg-gray-100 text-center dark:border-strokedark dark:bg-blacksection dark:text-white">
                            {documentCounts[index] || 0}
                          </span>
                          <button
                            type="button"
                            onClick={() => handleIncrement(index)}
                            className="rounded-br rounded-tr border  px-2 text-white shadow  dark:border-strokedark dark:bg-strokedark"
                          >
                            +
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* Step 3: Payment Method */}
              {currentStep === 3 && (
                <motion.div
                  key="step3"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -30 }}
                  transition={{ duration: 0.5 }}
                  className="flex w-full flex-col items-center rounded-lg p-6"
                >
                  <h1 className="mb-4 text-center text-3xl font-bold text-black dark:text-white">
                    Select Payment Method
                  </h1>
                  {errors.businessMethod && (
                    <p className="mb-4 text-center text-red-500">{errors.businessMethod}</p>
                  )}
                  <div className="grid w-full max-w-4xl grid-cols-1 gap-8 sm:grid-cols-2">
                    {/* Invoice/Card */}
                    <div
                      className={`relative cursor-pointer rounded-lg border-2 p-6 shadow-lg ${
                        businessMethod === "invoice"
                          ? "border-blue-500"
                          : "border-transparent"
                      } transition-colors duration-300 dark:bg-blacksection`}
                      onClick={() => setBusinessMethod("invoice")}
                    >
                      <div className="flex flex-col items-center">
                        <FaDollarSign className="mb-4 text-4xl text-blue-600" />
                        <h2 className="mb-1 text-xl font-semibold text-black dark:text-white">
                          Invoice / Card
                        </h2>
                        <p className="text-center text-sm text-gray-500 dark:text-gray-300">
                          Pay via invoice or card.
                        </p>
                        <input
                          type="radio"
                          className="form-radio absolute right-4 top-4 h-6 w-6 text-blue-600"
                          checked={businessMethod === "invoice"}
                          onChange={() => setBusinessMethod("invoice")}
                        />
                      </div>
                    </div>
                    {/* Refund */}
                    <div
                      className={`relative cursor-pointer rounded-lg border-2 p-6 shadow-lg ${
                        businessMethod === "refund"
                          ? "border-blue-500"
                          : "border-transparent"
                      } transition-colors duration-300 dark:bg-blacksection`}
                      onClick={() => setBusinessMethod("refund")}
                    >
                      <div className="flex flex-col items-center">
                        <FaDollarSign className="mb-4 text-4xl text-blue-600" />
                        <h2 className="mb-1 text-xl font-semibold text-black dark:text-white">
                          Refund
                        </h2>
                        <p className="text-center text-sm text-gray-500 dark:text-gray-300">
                          Fees deducted from your refund.
                        </p>
                        <input
                          type="radio"
                          className="form-radio absolute right-4 top-4 h-6 w-6 text-blue-600"
                          checked={businessMethod === "refund"}
                          onChange={() => setBusinessMethod("refund")}
                        />
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Step 4: Marriage/Family */}
              {currentStep === 4 && (
                <motion.div
                  key="step4"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -30 }}
                  transition={{ duration: 0.5 }}
                  className="flex w-full flex-col items-center rounded-lg p-6"
                >
                  <h1 className="mb-4 text-center text-3xl font-bold text-black dark:text-white">
                    Marriage and Family Status
                  </h1>
                  {errors.marriageStatus && (
                    <p className="mb-4 text-center text-red-500">
                      {errors.marriageStatus}
                    </p>
                  )}
                  <div className="w-full max-w-md p-6 text-black dark:text-white">
                    <div className="mb-6 flex items-center">
                      <input
                        type="checkbox"
                        id="filing-self"
                        className="form-checkbox mr-2 h-5 w-5 text-blue-600"
                        checked={marriageStatus === "Single"}
                        onChange={handleFilingSelf}
                      />
                      <label htmlFor="filing-self" className="text-lg font-medium">
                        I am filing for myself only (Single)
                      </label>
                    </div>
                    <div className="mb-8">
                      <label htmlFor="marriage-status" className="mb-1 block text-sm font-bold">
                        Marriage Status
                      </label>
                      <select
                        id="marriage-status"
                        name="marriageStatus"
                        value={marriageStatus}
                        onChange={(e) => {
                          setMarriageStatus(e.target.value);
                          setErrors((prev) => ({ ...prev, marriageStatus: undefined }));
                        }}
                        className="form-select w-full rounded border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:border-strokedark dark:bg-blacksection dark:focus:ring-gray-300"
                        required
                      >
                        <option value="" disabled>
                          Select your status
                        </option>
                        {marriageOptions.map((status, index) => (
                          <option key={index} value={status}>
                            {status}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="flex items-center justify-between">
                      <label className="text-lg font-bold">Children/Dependents</label>
                      <div className="flex items-center space-x-0">
                        <button
                          type="button"
                          onClick={() => setChildrenCount(Math.max(childrenCount - 1, 0))}
                          className="rounded-bl rounded-tl border border-gray-400 bg-gray-200 px-2 text-black shadow hover:bg-gray-300 dark:border-strokedark dark:bg-strokedark dark:text-white"
                          disabled={marriageStatus === "Single"}
                        >
                          -
                        </button>
                        <span className="w-8 border border-gray-300 bg-gray-100 text-center dark:border-strokedark dark:bg-blacksection dark:text-white">
                          {childrenCount}
                        </span>
                        <button
                          type="button"
                          onClick={() => setChildrenCount(childrenCount + 1)}
                          className="rounded-br rounded-tr border border-blue-700 bg-blue-600 px-2 text-white shadow hover:bg-blue-700 dark:border-strokedark dark:bg-[#1d4ed8]"
                          disabled={marriageStatus === "Single"}
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Step 5: Personal Info */}
              {currentStep === 5 && (
                <motion.div
                  key="step5"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -30 }}
                  transition={{ duration: 0.5 }}
                  className="w-full rounded-lg p-6"
                >
                  <h1 className="mb-4 text-center text-2xl font-bold text-black dark:text-white">
                    Your Personal Information
                  </h1>
                  {(errors.fullName || errors.email || errors.phone) && (
                    <p className="mb-4 text-center text-red-500">
                      {errors.fullName || errors.email || errors.phone}
                    </p>
                  )}
                  <div className="mb-10 space-y-6">
                    <div className="flex flex-col gap-5 md:flex-row md:justify-between">
                      <div className="md:w-[48%]">
                        <label
                          htmlFor="full-name"
                          className="mb-1 block text-sm font-medium text-black dark:text-white"
                        >
                          Full Name
                        </label>
                        <input
                          id="full-name"
                          name="fullName"
                          placeholder="John Doe"
                          value={formData.fullName}
                          onChange={handleChange}
                          className="w-full border-b border-gray-400 bg-transparent pb-2 focus:border-blue-500 focus:placeholder:text-black focus-visible:outline-none dark:border-strokedark dark:focus:border-blue-400 dark:focus:placeholder:text-white"
                          type="text"
                          required
                        />
                      </div>
                      <div className="md:w-[48%]">
                        <label
                          htmlFor="email"
                          className="mb-1 block text-sm font-medium text-black dark:text-white"
                        >
                          Email Address
                        </label>
                        <input
                          id="email"
                          name="email"
                          placeholder="you@example.com"
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full border-b border-gray-400 bg-transparent pb-2 focus:border-blue-500 focus:placeholder:text-black focus-visible:outline-none dark:border-strokedark dark:focus:border-blue-400 dark:focus:placeholder:text-white"
                          type="email"
                          required
                        />
                      </div>
                    </div>
                    <div className="md:w-[48%]">
                      <label
                        htmlFor="phone"
                        className="mb-1 block text-sm font-medium text-black dark:text-white"
                      >
                        Phone Number
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        placeholder="(123) 456-7890"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full border-b border-gray-400 bg-transparent pb-2 focus:border-blue-500 focus:placeholder:text-black focus-visible:outline-none dark:border-strokedark dark:focus:border-blue-400 dark:focus:placeholder:text-white"
                        type="tel"
                        required
                      />
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Step 6: Confirmation */}
              {currentStep === 6 && (
                <motion.div
                  key="step6"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -30 }}
                  transition={{ duration: 0.5 }}
                  className="flex flex-col items-center justify-center py-8 text-center text-black dark:text-white"
                >
                  <h1 className="mb-4 text-2xl font-bold">Thank You!</h1>
                  <p className="mb-8">
                    You will receive an email within the next 1-3 business days
                    with a contract and pricing quotes.
                  </p>
                  <Link
                    href="/"
                    className="inline-flex items-center rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
                  >
                    <FaCheckCircle className="mr-2 h-5 w-5" />
                    Back to Home
                  </Link>
                </motion.div>
              )}
            </div>

            {/* Navigation Buttons */}
            <div className="mx-auto mt-8 flex w-full max-w-3xl items-center justify-between gap-2">
              {currentStep > 1 && currentStep < 6 ? (
                <button
                  type="button"
                  onClick={handleBackStep}
                  className="mb-6 flex w-full items-center justify-center rounded-lg border border-gray-300 bg-gray-100 px-6 py-3 text-base font-medium text-black transition-all duration-300 hover:border-blue-500 hover:bg-blue-500/10 hover:text-blue-500 dark:border-strokedark dark:bg-strokedark dark:text-white"
                >
                  <AiOutlineArrowLeft className="mr-2 h-5 w-5" />
                  Previous
                </button>
              ) : (
                <div></div>
              )}

              {currentStep < 5 ? (
                <button
                  type="button"
                  onClick={handleNextStep}
                  className="mb-6 flex w-full items-center justify-center rounded-lg border border-blue-600 bg-blue-600 px-6 py-3 text-base font-medium text-white transition-all duration-300 hover:bg-blue-700"
                >
                  Next
                  <AiOutlineArrowRight className="ml-2 h-5 w-5" />
                </button>
              ) : currentStep === 5 ? (
                <button
                  type="button"
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                  className={`mb-6 flex w-full items-center justify-center rounded-lg border border-blue-600 bg-blue-600 px-6 py-3 text-base font-medium text-white transition-all duration-300 hover:bg-blue-700 ${
                    isSubmitting ? "cursor-not-allowed opacity-50" : ""
                  }`}
                >
                  {isSubmitting ? "Submitting..." : "Submit"}
                </button>
              ) : null}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SurveyForm;
