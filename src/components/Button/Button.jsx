import React from "react";
import { Link } from "react-router-dom";

import "./Button.scss";

export const Button = ({ href, children, state = "primary" }) => {
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
    </Link>
  );
};
