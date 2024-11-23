import { Metadata } from "next";
import ServiceTab from "@/components/Service/Index";

export const metadata: Metadata = {
  title: "Services Us Page - BLK",
  description: "This is Services Us page for BLK",
  // other metadata
};

const ServicePage = async () => {
  return (
    <>

      <ServiceTab />
    </>
  );
};

export default ServicePage;
