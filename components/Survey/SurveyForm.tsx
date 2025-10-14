"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ToastContainer, toast } from "react-toastify";

// --- START: Icon components (replaces react-icons) ---
const FaUser = (props) => <svg {...props} stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z"></path></svg>;
const FaFileAlt = (props) => <svg {...props} stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 384 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M224 136V0H24C10.7 0 0 10.7 0 24v464c0 13.3 10.7 24 24 24h336c13.3 0 24-10.7 24-24V160H248c-13.2 0-24-10.8-24-24zm64 236c0 6.6-5.4 12-12 12H108c-6.6 0-12-5.4-12-12v-8c0-6.6 5.4-12 12-12h168c6.6 0 12 5.4 12 12v8zm0-64c0 6.6-5.4 12-12 12H108c-6.6 0-12-5.4-12-12v-8c0-6.6 5.4-12 12-12h168c6.6 0 12 5.4 12 12v8zm0-64c0 6.6-5.4 12-12 12H108c-6.6 0-12-5.4-12-12v-8c0-6.6 5.4-12 12-12h168c6.6 0 12 5.4 12 12v8zM377 105L279.1 7c-4.5-4.5-10.6-7-17-7H256v128h128v-6.1c0-6.4-2.5-12.5-7-17z"></path></svg>;
const FaCheckCircle = (props) => <svg {...props} stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628 0z"></path></svg>;
const FaDollarSign = (props) => <svg {...props} stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 288 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M209.2 233.4l-108-31.6C88.7 198.2 80 186.5 80 173.5c0-16.3 13.2-29.5 29.5-29.5h66.3c12.2 0 24.2 3.7 34.2 10.5 6.1 4.1 14.3 2.3 18.4-3.7l17.1-25.1c4.1-6.1 2.3-14.3-3.7-18.4C235.4 89.2 217.1 84 198.8 84h-66.3C62.6 84 24 122.6 24 173.5c0 47.4 34.4 86.8 79.2 98.2l108 31.6c12.5 3.7 21.2 15.3 21.2 28.3 0 16.3-13.2 29.5-29.5 29.5h-66.3C124.9 361 113 357.3 103 350.5c-6.1-4.1-14.3-2.3-18.4 3.7l-17.1 25.1c-4.1 6.1-2.3 14.3 3.7 18.4 20.9 14.3 46.2 21.9 72.5 21.9h66.3c69.2 0 125.2-56 125.2-125.2 0-47.4-34.4-86.8-79.2-98.2z"></path></svg>;
const FaHeart = (props) => <svg {...props} stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z"></path></svg>;
const FaPhone = (props) => <svg {...props} stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M493.4 24.6l-104-24c-11.3-2.6-22.9 3.3-27.5 13.9l-48 112c-4.2 9.8-1.4 21.3 6.9 28l60.6 49.6c-36 76.7-98.9 140.5-177.2 177.2l-49.6-60.6c-6.8-8.3-18.2-11.1-28-6.9l-112 48C3.9 366.5-2 378.1.6 389.4l24 104C27.1 504.2 36.7 512 48 512c256.1 0 464-207.5 464-464 0-11.2-7.7-20.9-18.6-23.4z"></path></svg>;
const FaPlus = (props) => <svg {...props} stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"></path></svg>;
const FaMinus = (props) => <svg {...props} stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"></path></svg>;
const AiOutlineArrowRight = (props) => <svg {...props} stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M869 487.8L491.2 159.9c-2.9-2.5-6.6-3.9-10.5-3.9h-88.5c-7.4 0-10.8 9.2-5.2 14l350.2 304.7H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h585.1L386.9 854c-5.6 4.9-2.2 14 5.2 14h88.5c3.9 0 7.6-1.4 10.5-3.9l377.8-327.9c2-1.7 3.1-4.1 3.1-6.6 0-2.6-1.1-5-3.1-6.6z"></path></svg>;
const AiOutlineArrowLeft = (props) => <svg {...props} stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M872 474H286.9l350.2-304.7c5.6-4.9 2.2-14-5.2-14h-88.5c-3.9 0-7.6 1.4-10.5 3.9L155 487.8a8.03 8.03 0 0 0 0 12.4L432.8 849c2.9 2.5 6.6 3.9 10.5 3.9h88.5c7.4 0 10.8-9.2 5.2-14L286.9 550H872c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8z"></path></svg>;
// --- END: Icon components ---

interface FormData {
  fullName: string;
  email: string;
  phone: string;
}

interface Errors {
  documents?: string;
  businessMethod?: string;
  marriageStatus?: string;
  fullName?: string;
  email?: string;
  phone?: string;
}

const documentItems = [
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
  "Self Employment Income (1099-NEC)",
  "Other Income (1099-MISC)",
  "Real Estate Property"
];

const marriageOptions = ["Single", "Head of Household", "Married Filing Jointly", "Married Filing Separately", "Qualifying Widow"];

const documentKeyMapping: Record<number, string> = { 
  0: "retirementDistribution",
  1: "socialSecuritySSA",
  2: "stateOrLocalTaxRefund",
  3: "unemploymentCompensation",
  4: "interest",
  5: "dividends",
  6: "soldStockOrInvestments",
  7: "canceledDebt",
  8: "esaOrFtnDistribution",
  9: "hsaOrMsaDistribution",
  10: "partnershipSchedule",
  11: "gambling",
  12: "farming",
  13: "selfEmployment",
  14: "otherIncome",
  15: "rent"
};

const SurveyForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [businessMethod, setBusinessMethod] = useState("");
  const [documentCounts, setDocumentCounts] = useState<Record<number, number>>({});
  const [formData, setFormData] = useState<FormData>({ fullName: "", email: "", phone: "" });
  const [marriageStatus, setMarriageStatus] = useState<string>("");
  const [childrenCount, setChildrenCount] = useState<number>(0);
  const [errors, setErrors] = useState<Errors>({});
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [otherIncomeChecked, setOtherIncomeChecked] = useState(false);
  const [otherIncomeText, setOtherIncomeText] = useState("");

  useEffect(() => {
    const initialCounts: Record<number, number> = {};
    documentItems.forEach((_, index) => { initialCounts[index] = 0; });
    setDocumentCounts(initialCounts);
  }, []);

  const validateStep = () => {
    const newErrors: Errors = {};
    if (currentStep === 1) {
      const totalDocuments = Object.values(documentCounts).reduce((acc, val) => acc + val, 0);
      if (totalDocuments === 0 && !otherIncomeChecked) newErrors.documents = "Please select at least one document type or check 'Other'.";
    }
    if (currentStep === 2 && !businessMethod) newErrors.businessMethod = "Please select a business method.";
    if (currentStep === 3 && !marriageStatus) newErrors.marriageStatus = "Please select your filing status.";
    if (currentStep === 4) {
      if (!formData.fullName.trim()) newErrors.fullName = "Full name is required";
      if (!formData.email.trim()) newErrors.email = "Email is required";
      else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Email is invalid";
      
      const phoneDigits = formData.phone.replace(/\D/g, '');
      if (!phoneDigits) {
        newErrors.phone = "Phone number is required";
      } else if (phoneDigits.length !== 10) {
        newErrors.phone = "Please enter a valid 10-digit phone number";
      }
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNextStep = () => {
    if (validateStep()) setCurrentStep((prev) => Math.min(prev + 1, 5));
    else toast.error("Please complete the current step before proceeding.");
  };

  const handleBackStep = () => setCurrentStep((prev) => Math.max(prev - 1, 1));
  const handleIncrement = (index: number) => { setDocumentCounts((prev) => ({ ...prev, [index]: (prev[index] || 0) + 1 })); setErrors((prev) => ({ ...prev, documents: undefined })); };
  const handleDecrement = (index: number) => { setDocumentCounts((prev) => ({ ...prev, [index]: Math.max((prev[index] || 0) - 1, 0) })); };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => { const { name, value } = e.target; setFormData((prev) => ({ ...prev, [name]: value })); setErrors((prev) => ({ ...prev, [name]: undefined })); };
  
  // FIX 2: This new handler will auto-format the phone number as the user types.
  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.target.value.replace(/\D/g, '').substring(0, 10); // Get only digits, max 10
    const phoneNumberLength = input.length;
    let formattedPhoneNumber = "";

    if (phoneNumberLength > 0) {
      formattedPhoneNumber = `(${input.substring(0, 3)}`;
    }
    if (phoneNumberLength > 3) {
      formattedPhoneNumber += `) ${input.substring(3, 6)}`;
    }
    if (phoneNumberLength > 6) {
      formattedPhoneNumber += `-${input.substring(6, 10)}`;
    }

    setFormData(prev => ({ ...prev, phone: formattedPhoneNumber }));

    if (phoneNumberLength === 10) {
        setErrors(prev => ({ ...prev, phone: undefined }));
    }
  };
  
  const handleMarriageStatusChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newStatus = e.target.value;
    setMarriageStatus(newStatus);
    setErrors((prev) => ({ ...prev, marriageStatus: undefined }));
    if ((newStatus === "Head of Household" || newStatus === "Qualifying Widow") && childrenCount < 1) {
      setChildrenCount(1);
    }
  };

  const handleChildrenDecrement = () => {
    if ((marriageStatus === "Head of Household" || marriageStatus === "Qualifying Widow") && childrenCount <= 1) {
      toast.error("Your filing status requires at least 1 dependent.");
      return;
    }
    setChildrenCount(Math.max(childrenCount - 1, 0));
  };
  
  const handleChildrenIncrement = () => {
    setChildrenCount(childrenCount + 1);
  };

  const handleSubmit = async () => {
    if (!validateStep()) { toast.error("Please fix the errors in your personal information."); return; }
    setIsSubmitting(true);
    
    // FIX 3: Clean the phone number before sending it to the backend.
    const phoneDigits = formData.phone.replace(/\D/g, '');
    
    const data: Record<string, any> = { 
        name: formData.fullName, 
        email: formData.email, 
        phone: `+1${phoneDigits}`, 
        filingStatus: marriageStatus,
        married: marriageStatus.startsWith("Married"), 
        children: childrenCount, 
    };
    
    documentItems.forEach((_, index) => {
        const key = documentKeyMapping[index];
        if (key) {
            data[key] = (documentCounts[index] || 0) > 0;
        }
    });

    data.employment = false;

    if (otherIncomeChecked && otherIncomeText.trim()) {
        data.otherIncomeExplanation = otherIncomeText;
    }

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_APP_URL}/initialSurvey`, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(data), });
      if (!response.ok) {
        const errorData = await response.json();
        console.error("Server validation error:", errorData);
        throw new Error(`Server error: ${response.statusText}`);
      }
      await response.json();
      toast.success("Form submitted successfully!");
      setFormData({ fullName: "", email: "", phone: "" });
      setDocumentCounts({});
      setBusinessMethod("");
      setMarriageStatus("");
      setChildrenCount(0);
      setOtherIncomeChecked(false);
      setOtherIncomeText("");
      setCurrentStep(5);
    } catch (error) {
      toast.error("Error submitting the form. Please check the console for details.");
    } finally {
      setIsSubmitting(false);
    }
  };
  
  const steps = [ { step: 1, icon: FaFileAlt, label: "Documents" }, { step: 2, icon: FaDollarSign, label: "Payment" }, { step: 3, icon: FaHeart, label: "Family" }, { step: 4, icon: FaPhone, label: "Contact" } ];

  return (
    <section className="min-h-screen bg-gray-50 dark:bg-[#151A21] py-12 sm:py-20 px-4">
        {/* Toastify CSS is inlined for simplicity */}
        <style>{`.Toastify__toast-container{z-index:9999;position:fixed;padding:4px;width:320px;box-sizing:border-box;color:#fff}.Toastify__toast-container--top-left{top:1em;left:1em}.Toastify__toast-container--top-center{top:1em;left:50%;transform:translateX(-50%)}.Toastify__toast-container--top-right{top:1em;right:1em}.Toastify__toast-container--bottom-left{bottom:1em;left:1em}.Toastify__toast-container--bottom-center{bottom:1em;left:50%;transform:translateX(-50%)}.Toastify__toast-container--bottom-right{bottom:1em;right:1em}@media only screen and (max-width: 480px){.Toastify__toast-container{width:100vw;padding:0;left:0;margin:0}}.Toastify__toast{position:relative;min-height:64px;box-sizing:border-box;margin-bottom:1rem;padding:8px;border-radius:4px;box-shadow:0 1px 10px 0 rgba(0,0,0,.1),0 2px 15px 0 rgba(0,0,0,.05);display:flex;justify-content:space-between;max-height:800px;overflow:hidden;font-family:sans-serif;cursor:pointer;direction:ltr}.Toastify__toast--rtl{direction:rtl}.Toastify__toast-body{margin:auto 0;flex:1 1 auto;padding:6px}.Toastify__close-button{color:#fff;font-weight:700;font-size:14px;background:0 0;outline:none;border:none;padding:0;cursor:pointer;opacity:.7;transition:.3s ease;align-self:flex-start}.Toastify__close-button:hover{opacity:1}}`}</style>
      <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} />
      <div className="relative mx-auto max-w-4xl">
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="relative rounded-2xl bg-white dark:bg-black shadow-2xl overflow-hidden">
          <div className="px-6 py-8 sm:px-10 sm:py-12">
            <div className="mb-10">
                <div className="text-center mb-10">
                    <a href="/" className="inline-block">
                        <img src="/images/logo/logo-light.svg" alt="logo" width="200" height="50" className="dark:hidden" />
                        <img src="/images/logo/logo-dark.svg" alt="logo" width="200" height="50" className="hidden dark:block" />
                    </a>
                </div>
                <div className="relative">
                    <div className="absolute left-0 top-5 h-1 w-full bg-gray-200 dark:bg-gray-700 rounded-full" />
                    <div className="absolute left-0 top-5 h-1 bg-blue-600 rounded-full transition-all duration-500 ease-out" style={{ width: `calc(${ (100 / (steps.length - 1)) * (currentStep - 1) }% - ${currentStep > 1 ? '0.5rem' : '0rem'})` }}/>
                    <ul className="relative flex justify-between">
                        {steps.map(({ step, icon: Icon, label }) => {
                            const isCompleted = currentStep > step;
                            const isActive = currentStep === step;
                            return (
                                <li key={step} className="flex flex-col items-center gap-2 w-20 text-center">
                                    <div className={`flex h-10 w-10 items-center justify-center rounded-full text-lg transition-all duration-300 z-10 ${isCompleted ? "bg-green-500 text-white" : isActive ? "bg-blue-600 text-white scale-110 ring-4 ring-white dark:ring-black" : "bg-gray-200 dark:bg-gray-700 text-gray-500 dark:text-gray-400"}`}>
                                        {isCompleted ? <FaCheckCircle /> : <Icon />}
                                    </div>
                                    <p className={`text-xs sm:text-sm transition-colors duration-300 ${isActive ? 'text-blue-600 dark:text-blue-400 font-semibold' : 'text-gray-500 dark:text-gray-400'}`}>{label}</p>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </div>
            <div className="min-h-[450px] flex items-center justify-center">
                <AnimatePresence mode="wait">
                    {currentStep === 1 && (
                        <motion.div key="step1" initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -50 }} transition={{ duration: 0.3 }} className="w-full">
                            <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-900 dark:text-white mb-2">Select Your Tax Documents</h2>
                            <p className="text-center text-gray-500 dark:text-gray-400 mb-8">Choose the documents you have. You can select more than one.</p>
                            {errors.documents && <p className="text-center text-red-500 mb-4">{errors.documents}</p>}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 max-w-3xl mx-auto">
                                {documentItems.map((item, index) => (
                                    <div key={index} className="flex items-center justify-between p-2 rounded-lg transition-colors hover:bg-gray-100 dark:hover:bg-gray-800">
                                        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{item}</span>
                                        <div className="flex items-center">
                                            <button type="button" onClick={() => handleDecrement(index)} className="p-2 rounded-full text-gray-500 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"><FaMinus /></button>
                                            <span className="w-10 text-center font-semibold text-gray-900 dark:text-white">{documentCounts[index] || 0}</span>
                                            <button type="button" onClick={() => handleIncrement(index)} className="p-2 rounded-full text-blue-600 hover:bg-blue-100 dark:hover:bg-blue-900/50 transition-colors"><FaPlus /></button>
                                        </div>
                                    </div>
                                ))}
                                <div className="md:col-span-2 flex items-center p-2 rounded-lg">
                                    <input 
                                        type="checkbox"
                                        id="other-income-checkbox"
                                        className="h-5 w-5 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                                        checked={otherIncomeChecked}
                                        onChange={(e) => setOtherIncomeChecked(e.target.checked)}
                                    />
                                    <label htmlFor="other-income-checkbox" className="ml-3 text-sm font-medium text-gray-700 dark:text-gray-300">
                                        Other
                                    </label>
                                </div>
                                {otherIncomeChecked && (
                                    <motion.div 
                                        initial={{ opacity: 0, height: 0 }}
                                        animate={{ opacity: 1, height: 'auto' }}
                                        className="md:col-span-2"
                                    >
                                        <textarea
                                            value={otherIncomeText}
                                            onChange={(e) => setOtherIncomeText(e.target.value)}
                                            placeholder="explain other income"
                                            className="block w-full rounded-md border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 py-3 px-4 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-gray-900 dark:text-white"
                                            rows={3}
                                        />
                                    </motion.div>
                                )}
                            </div>
                        </motion.div>
                    )}
                    {currentStep === 2 && (
                        <motion.div key="step2" initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -50 }} transition={{ duration: 0.3 }} className="w-full">
                            <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-900 dark:text-white mb-2">Select Payment Method for tax preparation</h2>
                            <p className="text-center text-gray-500 dark:text-gray-400 mb-8">Don’t worry! We will not charge you until your return is complete.</p>
                            {errors.businessMethod && <p className="text-center text-red-500 mb-4">{errors.businessMethod}</p>}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
                                <UserTypeCard icon={FaDollarSign} title="Invoice / Card" description="Pay securely via invoice or card" selected={businessMethod === 'invoice'} onClick={() => setBusinessMethod('invoice')} />
                                <UserTypeCard icon={FaDollarSign} title="Deduct from Refund" description="Fees are taken from your refund" selected={businessMethod === 'refund'} onClick={() => setBusinessMethod('refund')} />
                            </div>
                        </motion.div>
                    )}
                    {currentStep === 3 && (
                        <motion.div key="step3" initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -50 }} transition={{ duration: 0.3 }} className="w-full max-w-md mx-auto">
                            <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-900 dark:text-white mb-2">Filing Status and Dependents</h2>
                            <p className="text-center text-gray-500 dark:text-gray-400 mb-8">This helps us determine the best filing status for you.</p>
                            {errors.marriageStatus && <p className="text-center text-red-500 mb-4">{errors.marriageStatus}</p>}
                                <div className="space-y-6">
                                    <div>
                                        <label htmlFor="marriage-status" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Filing Status</label>
                                        <select id="marriage-status" name="marriageStatus" value={marriageStatus} onChange={handleMarriageStatusChange} className="block w-full rounded-md border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 py-3 px-4 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-gray-900 dark:text-white" required>
                                            <option value="" disabled>Select your status</option>
                                            {marriageOptions.map((status) => (<option key={status} value={status}>{status}</option>))}
                                        </select>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <label className="font-medium text-gray-800 dark:text-gray-200">Children / Dependents</label>
                                        <div className="flex items-center">
                                            <button type="button" onClick={handleChildrenDecrement} className="p-2 rounded-full text-gray-500 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"><FaMinus /></button>
                                            <span className="w-10 text-center font-semibold text-gray-900 dark:text-white">{childrenCount}</span>
                                            <button type="button" onClick={handleChildrenIncrement} className="p-2 rounded-full text-blue-600 hover:bg-blue-100 dark:hover:bg-blue-900/50 transition-colors"><FaPlus /></button>
                                        </div>
                                    </div>
                                </div>
                        </motion.div>
                    )}
                    {currentStep === 4 && (
                        <motion.div key="step4" initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -50 }} transition={{ duration: 0.3 }} className="w-full max-w-lg mx-auto">
                            <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-900 dark:text-white mb-2">Your Contact Information</h2>
                            <p className="text-center text-gray-500 dark:text-gray-400 mb-8">One final step. How can we reach you?</p>
                            <div className="space-y-6">
                                <InputField id="full-name" name="fullName" label="Full Name" placeholder="John Doe" value={formData.fullName} onChange={handleChange} error={errors.fullName} />
                                <InputField id="email" name="email" label="Email Address" type="email" placeholder="you@example.com" value={formData.email} onChange={handleChange} error={errors.email} />
                                <div>
                                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Phone Number</label>
                                    <div className="relative">
                                        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                                            <span className="text-gray-500 dark:text-gray-400 sm:text-sm">+1</span>
                                        </div>
                                        {/* FIX 4: Connect the phone input to its specific handler and use the formatted value */}
                                        <input
                                            id="phone"
                                            name="phone"
                                            type="tel"
                                            placeholder="(555) 123-4567"
                                            value={formData.phone}
                                            onChange={handlePhoneChange}
                                            className={`block w-full rounded-md border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 py-3 pl-8 pr-4 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-gray-900 dark:text-white ${errors.phone ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : ''}`}
                                        />
                                    </div>
                                    {errors.phone && <p className="mt-1 text-sm text-red-500">{errors.phone}</p>}
                                </div>
                            </div>
                        </motion.div>
                    )}
                    {currentStep === 5 && (
                        <motion.div key="step5" initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }} className="w-full text-center">
                                <div className="flex justify-center mb-4">
                                <div className="h-20 w-20 flex items-center justify-center bg-green-100 dark:bg-green-900/50 rounded-full">
                                    <FaCheckCircle className="text-green-500 text-5xl" />
                                </div>
                            </div>
                            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-2">Thank You!</h2>
                            <p className="max-w-md mx-auto text-gray-600 dark:text-gray-400 mb-8">You will receive an email from our team in the next 72 hours with next steps. Please reach out to info@blktaxservices.com for any urgent requests.</p>
                            <a href="/" className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-6 py-3 font-medium text-white transition-all duration-300 hover:bg-blue-700 shadow-lg hover:shadow-blue-500/30">
                                Back to Home
                            </a>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
            <div className={`mt-10 flex gap-4 ${currentStep === 5 ? 'justify-center' : (currentStep === 1 ? 'justify-end' : 'justify-between')}`}>
                {currentStep > 1 && currentStep < 5 && (
                    <button type="button" onClick={handleBackStep} className="inline-flex items-center gap-2 rounded-lg px-6 py-3 font-medium bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors">
                        <AiOutlineArrowLeft /> Previous
                    </button>
                )}
                {currentStep < 4 && (
                    <button type="button" onClick={handleNextStep} className="inline-flex items-center gap-2 rounded-lg px-6 py-3 font-medium bg-blue-600 text-white hover:bg-blue-700 transition-colors shadow-lg hover:shadow-blue-500/30">
                        Next <AiOutlineArrowRight />
                    </button>
                )}
                 {currentStep === 4 && (
                    <button type="button" onClick={handleSubmit} disabled={isSubmitting} className="inline-flex items-center justify-center rounded-lg px-6 py-3 font-medium bg-blue-600 text-white hover:bg-blue-700 transition-colors shadow-lg hover:shadow-blue-500/30 disabled:opacity-50 disabled:cursor-wait">
                        {isSubmitting ? "Submitting..." : "Submit Information"}
                    </button>
                )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const UserTypeCard = ({ icon: Icon, title, description, selected, onClick }) => (
    <div onClick={onClick} className={`relative p-6 rounded-xl border-2 cursor-pointer transition-all duration-300 text-center ${selected ? 'border-blue-600 bg-blue-50 dark:bg-blue-900/20' : 'border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600'}`}>
        <div className={`mb-4 inline-flex h-14 w-14 items-center justify-center rounded-full ${selected ? 'bg-blue-600 text-white' : 'bg-gray-100 dark:bg-gray-800 text-blue-600'}`}><Icon className="text-3xl" /></div>
        <h3 className="text-lg font-bold text-gray-900 dark:text-white">{title}</h3>
        <p className="text-sm text-gray-500 dark:text-gray-400">{description}</p>
        {selected && <div className="absolute top-4 right-4 h-6 w-6 flex items-center justify-center bg-blue-600 text-white rounded-full"><FaCheckCircle /></div>}
    </div>
);

const InputField = ({ id, name, label, error, ...props }) => (
    <div>
        <label htmlFor={id} className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">{label}</label>
        <input id={id} name={name} className={`block w-full rounded-md border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 py-3 px-4 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-gray-900 dark:text-white ${error ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : ''}`} {...props} />
        {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
    </div>
);

export default SurveyForm;

