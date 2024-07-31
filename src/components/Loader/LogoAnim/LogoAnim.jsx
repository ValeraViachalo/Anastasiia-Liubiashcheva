import React, { useEffect, useState } from "react";
import LogoAnimJson from "./Lottie.json";
// import LogoAnimJson from "./LogoAnimJson.lottie";
import Lottie from "lottie-react";

export default function LogoAnim() {
  const [showLogo, setShowLogo] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLogo(true);
    }, 1000); // 500ms delay

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {showLogo && (
        <Lottie
          animationData={LogoAnimJson}
          loop={false}
          onError={(error) => console.error("Lottie animation error:", error)}
        />
      )}
    </>
  );
}
