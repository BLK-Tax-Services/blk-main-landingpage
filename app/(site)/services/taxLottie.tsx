"use client";
import React, { useRef } from "react";

const LottieAnimation = () => {
  const ref = useRef(null);
  React.useEffect(() => {
    import("@lottiefiles/lottie-player");
  });

  return (
    <div className="w-full h-[500px] transform -translate-y-12">
      <lottie-player
        id="firstLottie"
        ref={ref}
        autoplay
        loop
        mode="normal"
        src="/images/shape/tax-01.json"
        style={{  width: "400px", height: "400px" }}
      ></lottie-player>
    </div>
  );
};

export default LottieAnimation;
