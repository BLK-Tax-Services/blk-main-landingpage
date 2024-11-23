
import { Metadata } from "next";
import SurveyForm from "@/components/Survey/SurveyForm";
export const metadata: Metadata = {
  title: "Survey Page - BLK",
  description: "This is Survey page fOR Survey",
  // other metadata
};

const SurveyPage = () => {
  return (
    <>
      <SurveyForm/>
    </>
  );
};

export default SurveyPage;
