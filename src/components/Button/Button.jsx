import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

import "./Button.scss";

export const Button = ({ href, children, state }) => {
  return (
    <Link to={href} className="button">
      <div className="arrow-wrapper">
        <div className="arrow">
          <svg
            width="100%"
            height="100%"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4.49909 11.0001L16.0851 11.0001L11.5851 6.50006L12.9991 5.08606L19.9131 12.0001L12.9991 18.9141L11.5851 17.5001L16.0851 13.0001L4.49909 13.0001V11.0001Z"
              fill="black"
            />
          </svg>
        </div>
        <div className="arrow">
          <svg
            width="100%"
            height="100%"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4.49909 11.0001L16.0851 11.0001L11.5851 6.50006L12.9991 5.08606L19.9131 12.0001L12.9991 18.9141L11.5851 17.5001L16.0851 13.0001L4.49909 13.0001V11.0001Z"
              fill="black"
            />
          </svg>
        </div>
      </div>
      <span className="link-ul text">{children}</span>
      {state === "primary" && (
        <div className="arrow-wrapper">
          <div className="arrow">
            <svg
              width="100%"
              height="100%"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4.49909 11.0001L16.0851 11.0001L11.5851 6.50006L12.9991 5.08606L19.9131 12.0001L12.9991 18.9141L11.5851 17.5001L16.0851 13.0001L4.49909 13.0001V11.0001Z"
                fill="black"
              />
            </svg>
          </div>
          <div className="arrow">
            <svg
              width="100%"
              height="100%"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4.49909 11.0001L16.0851 11.0001L11.5851 6.50006L12.9991 5.08606L19.9131 12.0001L12.9991 18.9141L11.5851 17.5001L16.0851 13.0001L4.49909 13.0001V11.0001Z"
                fill="black"
              />
            </svg>
          </div>
        </div>
      )}
    </Link>
  );
};

export const ButtonSecondary = ({ href, children }) => {
  return (
    <Link to={href} className="button button--seconadry">
      <div className="arrow-wrapper">
        <div className="arrow">
          <span>→</span>
        </div>
        <div className="arrow">
          <span>→</span>
        </div>
      </div>
      <span className="link-medium text">{children}</span>
      <div className="arrow-wrapper">
        <div className="arrow">
          <span>←</span>
        </div>
        <div className="arrow">
          <span>←</span>
        </div>
      </div>
    </Link>
  );
};

export const LinkBtn = ({
  href,
  children,
  classes = "body-text-5 link-medium uppercase",
  ...rest
}) => {
  const wrapperRef = useRef();
  const linkRef = useRef();

  return (
    <Link to={href} ref={wrapperRef} className="link-wrapper" {...rest}>
      <span ref={linkRef} className={`${classes} link-button`}>
        {children}
      </span>
      <span className={`${classes} link-button`}>
        {children}
      </span>
    </Link>
  );
};