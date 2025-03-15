"use client";
import React, { useState, useEffect } from "react";
import {
  FaUser,
  FaFileAlt,
  FaCheckCircle,
  FaDollarSign,
  FaMoneyBill,
  FaMoneyCheck,
  FaRing,
  FaHeart,
  FaPhone,
} from "react-icons/fa";
import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

const personal_item = [
  // "Employment (W-2)",
  // "Self-employment (1099-NEC or 1099-K)",
  // "Rent (1099-MISC)",
  // "Royalties (1099-MISC)",
  // "S-corporation (Schedule K-1)",
  // "Estate or trust (Schedule K-1)",
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
  const [documentCounts, setDocumentCounts] = useState({});
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    otherTitle: "",
    otherValue: "",
  });
  const [marriageStatus, setMarriageStatus] = useState("");
  const [childrenCount, setChildrenCount] = useState(0);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const initializeDocumentCounts = (surveyData = null) => {
      const initialCounts = {};
      const itemsToUse =
        userType === "individual" ? personal_item : business_items;
      itemsToUse.forEach((_, index) => {
        initialCounts[index] = surveyData
          ? surveyData[documentKeyMapping[index]] || 0
          : 0;
      });
      setDocumentCounts(initialCounts);
    };

    if (userType) {
      initializeDocumentCounts();
    }
  }, [userType]);

  const handleNextStep = async () => {
    if (currentStep === 1 && !userType) {
      alert("Please select a user type to proceed.");
      return;
    }
    if (currentStep === 3 && !businessMethod) {
      alert("Please select a business method to proceed.");
      return;
    }
    setCurrentStep((prev) => Math.min(prev + 1, 5));
  };

  const handleBackStep = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 1));
  };

  const handleIncrement = (index) => {
    setDocumentCounts((prev) => ({
      ...prev,
      [index]: prev[index] + 1,
    }));
  };

  const handleDecrement = (index) => {
    setDocumentCounts((prev) => ({
      ...prev,
      [index]: prev[index] > 0 ? prev[index] - 1 : 0,
    }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };


  const handleSubmit = async () => {

    setIsSubmitting(true);

    const data = {
      name: formData.fullName,
      email: formData.email,
      phone: formData.phone,
      business_method: businessMethod,
      marriage_status: marriageStatus,
      children: childrenCount,
    };

    [...personal_item, ...business_items].forEach((item, index) => {
      const documentKey = documentKeyMapping[index];
      data[documentKey] = documentCounts[index] || 0;
    });

    try {
      const response = await fetch(
        "http://192.168.148.101:4000/api/v1/initialSurvey",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      if (!response.ok) {
        throw new Error(`Server error: ${response.statusText}`);
      }

      const result = await response.json();
      alert("Form submitted successfully!");

      setFormData({
        fullName: "",
        email: "",
        phone: "",
        otherTitle: "",
        otherValue: "",
      });
      setDocumentCounts({});
      setBusinessMethod("");
      setUserType("");
      setMarriageStatus("");
      setChildrenCount(0);
      setCurrentStep(6);
    } catch (error) {
      alert("There was an error submitting the form. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const displayedItems =
    userType === "individual" ? personal_item : business_items;

  return (
    <section className="pb-12.5 pt-32.5 lg:pb-25 lg:pt-45 xl:pb-30 xl:pt-50">

      <div className="relative z-1 mx-auto max-w-c-1016 px-7.5 pb-7.5 pt-10 lg:px-15 lg:pt-15 xl:px-20 xl:pt-20">
        <div
          className="absolute left-0 top-0 -z-1 h-2/3 w-full rounded-lg bg-gradient-to-t from-transparent to-[#dee7ff47] dark:bg-gradient-to-t dark:to-[#252A42]"></div>
        <div className="absolute bottom-17.5 left-0 -z-1 h-1/3 w-full">
          <Image
            src="/images/shape/shape-dotted-light.svg"
            alt="Dotted"
            className="dark:hidden"
            layout="fill"
          />
          <Image
            src="/images/shape/shape-dotted-dark.svg"
            alt="Dotted"
            className="hidden dark:block"
            layout="fill"
          />
        </div>
        <motion.div
          variants={{
            hidden: {
              opacity: 0,
              y: -20,
            },
            visible: {
              opacity: 1,
              y: 0,
            },
          }}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 1, delay: 0.1 }}
          viewport={{ once: true }}
          className="animate_top rounded-lg bg-white px-7.5 pt-7.5 shadow-solid-8 dark:border dark:border-strokedark dark:bg-black xl:px-15 xl:pt-15"
        >
          <div className="mb-15 text-center text-3xl font-semibold text-black dark:text-white xl:text-sectiontitle2">
            <Image
              src="/images/logo/logo-light.svg"
              alt="logo"
              width={119.03}
              height={30}
              className="w-full dark:hidden"

            />
          </div>
          <div className="mx-auto w-full max-w-4xl">
            {/* Progress Bar */}
            <div className="relative">
              <div
                className="absolute left-0 top-1/2 -mt-px h-1 w-full bg-slate-400"
                aria-hidden="true"
              >
                <div
                  className="h-1 rounded-full bg-blue-600"
                  style={{
                    width: `${(100 / 5) * (currentStep - 1)}%`,
                    transition: "width 0.8s ease-in-out",
                  }}
                ></div>
              </div>
              <ul className="relative flex w-full max-w-4xl justify-between">
                {[1, 2, 3, 4, 5].map((step) => (
                  <li key={step}>
                    <div
                      className={`flex h-12 w-12 items-center justify-center rounded-full text-xs font-semibold ${
                        currentStep > step
                          ? "bg-green-500 text-white"
                          : currentStep === step
                            ? "bg-blue-600 text-white"
                            : "bg-slate-300 text-slate-900"
                      }`}
                      aria-current={currentStep === step ? "step" : undefined}
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
                ))}
              </ul>
            </div>

            {/* Survey Steps */}
            <div className="flex w-full justify-center py-8 sm:py-16">
              {/* Step 1: Select User Type */}
              {currentStep === 1 && (
                <div className="flex w-full flex-col items-center rounded-lg p-6">
                  <h1 className="mb-8 text-center text-3xl font-bold">
                    Select Your User Type
                  </h1>
                  <div className="grid w-full max-w-4xl grid-cols-1 gap-8 sm:grid-cols-2">
                    {/* Individual Option */}
                    <div
                      className={`relative cursor-pointer rounded-lg border-2 bg-white p-6 shadow-lg ${
                        userType === "individual"
                          ? "border-blue-500"
                          : "border-transparent"
                      } transition-colors duration-300`}
                      onClick={() => setUserType("individual")}
                    >
                      <div className="flex flex-col items-center">
                        <div className="mb-4 text-4xl">
                          <FaUser className="text-blue-600" />
                        </div>
                        <h2 className="mb-2 text-xl font-semibold">
                          Individual
                        </h2>
                        <p className="text-center text-sm text-gray-500">
                          Select this if you are filing as an individual.
                        </p>
                        <input
                          type="radio"
                          className="form-radio absolute right-4 top-4 h-6 w-6 text-blue-600 transition-all"
                          checked={userType === "individual"}
                          onChange={() => setUserType("individual")}
                        />
                      </div>
                    </div>

                    {/* Business Option */}
                    <div
                      className={`relative cursor-pointer rounded-lg border-2 bg-white p-6 shadow-lg ${
                        userType === "business"
                          ? "border-blue-500"
                          : "border-transparent"
                      } transition-colors duration-300`}
                      onClick={() => setUserType("business")}
                    >
                      <div className="flex flex-col items-center">
                        <div className="mb-4 text-4xl">
                          <FaFileAlt className="text-blue-600" />
                        </div>
                        <h2 className="mb-2 text-xl font-semibold">Business</h2>
                        <p className="text-center text-sm text-gray-500">
                          Select this if you are filing for a business.
                        </p>
                        <input
                          type="radio"
                          className="form-radio absolute right-4 top-4 h-6 w-6 text-blue-600 transition-all"
                          checked={userType === "business"}
                          onChange={() => setUserType("business")}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Step 2: Select Documents */}
              {currentStep === 2 && (
                <div className="w-full rounded-lg p-6">
                  <h1 className="mb-6 text-center text-2xl font-bold text-slate-800">
                    Select Your Document Type
                  </h1>
                  <div className="grid w-full max-w-4xl grid-cols-1 gap-4 sm:grid-cols-2">
                    {displayedItems.map((item, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between"
                      >
                        <span className="text-sm font-medium">{item}</span>
                        <div className="flex items-center space-x-0">
                          <button
                            type="button"
                            onClick={() => handleDecrement(index)}
                            className="rounded-bl rounded-tl border border-gray-400 bg-gray-200 px-2 py-0 text-black shadow hover:bg-gray-300"
                          >
                            -
                          </button>
                          <span className="w-8 border border-gray-300 bg-gray-100 text-center">
                            {documentCounts[index]}
                          </span>
                          <button
                            type="button"
                            onClick={() => handleIncrement(index)}
                            className="rounded-br rounded-tr border border-blue-700 bg-blue-600 px-2 py-0 text-white shadow hover:bg-blue-700"
                          >
                            +
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Step 3: Select Payment Method */}
              {currentStep === 3 && (
                <div className="flex w-full flex-col items-center rounded-lg p-6">
                  <h1 className="mb-8 text-center text-3xl font-bold">
                    Select How You Would Like to Pay
                  </h1>
                  <div className="grid w-full max-w-4xl grid-cols-1 gap-8 sm:grid-cols-2">
                    {/* Invoice/Card Option */}
                    <div
                      className={`relative cursor-pointer rounded-lg border-2 bg-white p-6 shadow-lg ${
                        businessMethod === "invoice"
                          ? "border-blue-500"
                          : "border-transparent"
                      } transition-colors duration-300`}
                      onClick={() => setBusinessMethod("invoice")}
                    >
                      <div className="flex flex-col items-center">
                        <div className="mb-4 text-4xl">
                          <FaDollarSign className="text-blue-600" />
                        </div>
                        <h2 className="mb-2 text-xl font-semibold">
                          Invoice/Card
                        </h2>
                        <p className="text-center text-sm text-gray-500">
                          Pay via invoice or card. This is a common method for
                          businesses.
                        </p>
                        <input
                          type="radio"
                          className="form-radio absolute right-4 top-4 h-6 w-6 text-blue-600 transition-all"
                          checked={businessMethod === "invoice"}
                          onChange={() => setBusinessMethod("invoice")}
                        />
                      </div>
                    </div>

                    {/* Refund Option */}
                    <div
                      className={`relative cursor-pointer rounded-lg border-2 bg-white p-6 shadow-lg ${
                        businessMethod === "refund"
                          ? "border-blue-500"
                          : "border-transparent"
                      } transition-colors duration-300`}
                      onClick={() => setBusinessMethod("refund")}
                    >
                      <div className="flex flex-col items-center">
                        <div className="mb-4 text-4xl">
                          <FaDollarSign className="text-blue-600" />
                        </div>
                        <h2 className="mb-2 text-xl font-semibold">Refund</h2>
                        <p className="text-center text-sm text-gray-500">
                          Opt for a refund. This is typically used for returning
                          payments.
                        </p>
                        <input
                          type="radio"
                          className="form-radio absolute right-4 top-4 h-6 w-6 text-blue-600 transition-all"
                          checked={businessMethod === "refund"}
                          onChange={() => setBusinessMethod("refund")}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Step 4: Marriage and Family Status */}
              {currentStep === 4 && (
                <div className="flex w-full flex-col items-center rounded-lg p-6">
                  <h1 className="mb-8 text-center text-3xl font-bold">
                    Marriage and Family Status
                  </h1>
                  <div className="w-full p-6">
                    <div className="mb-6">
                      <input
                        type="checkbox"
                        id="filing-self"
                        className="form-checkbox mr-2 h-5 w-5 text-blue-600 transition duration-150 ease-in-out"
                        checked={marriageStatus === "Single"}
                        onChange={() =>
                          setMarriageStatus(
                            marriageStatus === "Single" ? "" : "Single",
                          )
                        }
                      />
                      <label
                        htmlFor="filing-self"
                        className="text-lg font-medium"
                      >
                        I am filing for myself only
                      </label>
                    </div>
                    <div className="mb-10">
                      <label
                        htmlFor="marriage-status"
                        className="mb-1 block text-sm font-bold"
                      >
                        Marriage Status
                      </label>
                      <select
                        id="marriage-status"
                        name="marriageStatus"
                        value={marriageStatus}
                        onChange={(e) => setMarriageStatus(e.target.value)}
                        className="form-select w-full rounded border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                      <label className="text-xl font-bold">
                        Children/Dependents
                      </label>
                      <div className="flex items-center space-x-0">
                        <button
                          type="button"
                          onClick={() =>
                            setChildrenCount(Math.max(childrenCount - 1, 0))
                          }
                          className="rounded-bl rounded-tl border border-gray-400 bg-gray-200 px-2 py-0 text-black shadow hover:bg-gray-300"
                        >
                          -
                        </button>
                        <span className="w-8 border border-gray-300 bg-gray-100 text-center">
                          {childrenCount}
                        </span>
                        <button
                          type="button"
                          onClick={() => setChildrenCount(childrenCount + 1)}
                          className="rounded-br rounded-tr border border-blue-700 bg-blue-600 px-2 py-0 text-white shadow hover:bg-blue-700"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Step 5: Personal Information */}
              {currentStep === 5 && (
                <div className="w-full rounded-lg p-6">
                  <h1 className="mb-6 text-center text-2xl font-bold text-slate-800">
                    Your Personal Information
                  </h1>

                  <div className="mb-10 space-y-10 ">
                    <div className="mb-7.5 flex flex-col gap-7.5 lg:mb-12.5 lg:flex-row lg:justify-between lg:gap-14">
                      <input
                        id="full-name"
                        name="fullName"
                        placeholder="Full name"
                        value={formData.fullName}
                        onChange={handleChange}
                        className="w-full border-b border-stroke bg-transparent pb-3.5 focus:border-waterloo focus:placeholder:text-black focus-visible:outline-none dark:border-strokedark dark:focus:border-manatee dark:focus:placeholder:text-white lg:w-1/2"
                        type="text"
                        required
                      />

                      <input
                        id="email"
                        name="email"
                        placeholder="Email address"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full border-b border-stroke bg-transparent pb-3.5 focus:border-waterloo focus:placeholder:text-black focus-visible:outline-none dark:border-strokedark dark:focus:border-manatee dark:focus:placeholder:text-white lg:w-1/2"
                        type="email"
                        required
                      />
                    </div>
                    <div>
                      <input
                        id="phone"
                        name="phone"
                        placeholder="Phone Number"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full border-b border-stroke bg-transparent pb-3.5 focus:border-waterloo focus:placeholder:text-black focus-visible:outline-none dark:border-strokedark dark:focus:border-manatee dark:focus:placeholder:text-white lg:w-1/2"
                        type="tel"
                        required
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Step 6: Confirmation */}
              {currentStep === 6 && (
                <div className="text-center">
                  <h1 className="mb-6 text-2xl font-bold text-slate-800">
                    Thank You!
                  </h1>
                  <p className="mb-8">
                    You will receive an email within the next 1-3 business days
                    with a contract and pricing quotes.
                  </p>
                  <a
                    href="/"
                    className="inline-flex items-center rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                  >
                    <FaCheckCircle className="mr-2 h-5 w-5" />
                    Back to Home
                  </a>
                </div>
              )}
            </div>

            {/* Navigation Buttons */}
            <div className="mx-auto mt-8 flex w-full max-w-3xl items-center justify-between">
              {currentStep !== 1 ? (
                <button
                  type="button"
                  onClick={handleBackStep}
                  className="text-body-color dark:text-body-color-dark dark:shadow-two mb-6 flex w-full items-center justify-center rounded-sm border border-stroke bg-[#f8f8f8] px-6 py-3 text-base outline-none transition-all duration-300 hover:border-primary hover:bg-primary/5 hover:text-primary dark:border-transparent dark:bg-[#2C303B] dark:hover:border-primary dark:hover:bg-primary/5 dark:hover:text-primary dark:hover:shadow-none"
                >
                  Previous
                </button>
              ) : (
                <div></div>
              )}
              {currentStep < 5 ? (
                <button
                  type="button"
                  onClick={handleNextStep}
                  className="text-body-color dark:text-body-color-dark dark:shadow-two mb-6 flex w-full items-center justify-center rounded-sm border border-stroke bg-[#f8f8f8] px-6 py-3 text-base outline-none transition-all duration-300 hover:border-primary hover:bg-primary/5 hover:text-primary dark:border-transparent dark:bg-[#2C303B] dark:hover:border-primary dark:hover:bg-primary/5 dark:hover:text-primary dark:hover:shadow-none"
                >
                  Next
                </button>
              ) : currentStep === 5 ? (
                <button
                  type="button"
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                  className={`text-body-color dark:text-body-color-dark dark:shadow-two mb-6 flex w-full items-center justify-center rounded-sm border border-stroke bg-[#f8f8f8] px-6 py-3 text-base outline-none transition-all duration-300 hover:border-primary hover:bg-primary/5 hover:text-primary dark:border-transparent dark:bg-[#2C303B] dark:hover:border-primary dark:hover:bg-primary/5 dark:hover:text-primary dark:hover:shadow-none ${
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