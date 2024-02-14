import classNames from "classnames";
import { FC, ReactNode, forwardRef, ForwardedRef } from "react";
import { useInView } from "react-intersection-observer";
import "./FullWidthBg.scss";

const FullWidthBg = ({
  url,
  alt,
  children,
  customClass = "",
  classSection = "",
  type = "image",
  ...otherProps
}) => {
  const classForBg = classNames("full_width_image__item", customClass);

  const classForSection = classNames("full_width_image", classSection);

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0,
  });

  return (
    <div className={classForSection} ref={ref} {...otherProps}>
      {inView &&
        (type === "video" && typeof url === "string" ? (
          <video
            loop
            muted
            autoPlay
            webkit-playsinline
            playsInline
            className={classForBg}
          >
            <source src={url} />
          </video>
        ) : (
          <img
            src={url}
            alt={alt ? alt : "background"}
            className={classForBg}
            loading="lazy"
          />
        ))}
      {children}
    </div>
  );
};

export default FullWidthBg;
