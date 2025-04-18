"use client";
import React from "react";
import Lottie from "lottie-react";

const LottieAnimation = () => {
  return (
    <div className="w-full h-[500px] transform -translate-y-12">
      <Lottie
        animationData={require("/public/images/shape/tax-01.json")}
        loop
      />
    </div>
  );
};

export default LottieAnimation;
