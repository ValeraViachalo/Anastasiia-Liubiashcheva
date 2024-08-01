import React, { useEffect, useState } from "react";
import LogoAnimJson from "./JSON1.json";
// import LogoAnimJson from "./Lottie.json";
import Lottie from "lottie-react";

export default function LogoAnim() {
  const [showLogo, setShowLogo] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLogo(true);
    }, 1500);

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
