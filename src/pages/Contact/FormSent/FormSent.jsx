import React, { useState } from "react";
import InputMask from "react-input-mask";
import "./FormSent.scss";

import sendMessage from "../../../requests/sendMessage.js";
import formatFormData from "../../../helpers/formatFormData.js";

import { motion } from "framer-motion";

const FormSent = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    phoneNumber: "",
    email: "",
    description: "",
  });

  const [errors, setErrors] = useState({});
  const [isFormValid, setIsFormValid] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);
  const [isFormSent, setIsFormSent] = useState(false);
  const [isFormSentSuccessfully, setIsFormSentSuccessfully] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    let newValue = value;

    if (name === "phoneNumber") {
      if (value.charAt(0) === "0") {
        newValue = "38" + value.substring(1).replace(/\D/g, "");
      }
    }

    setFormData({
      ...formData,
      [name]: newValue,
    });

    setErrors({
      ...errors,
      [name]: "",
    });
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = "Mistake";
    }

    if (
      !formData.phoneNumber.trim() ||
      formData.phoneNumber.replace(/\D/g, "").length < 9
    ) {
      newErrors.phoneNumber = "Mistake";
    }

    if (!formData.email.trim() || !validateEmail(formData.email)) {
      newErrors.email = "Invalid email address";
    }

    Object.entries(formData).forEach(([key, value]) => {
      if (
        ["firstName", "phoneNumber", "email"].includes(key) &&
        !value.trim()
      ) {
        newErrors[key] = "This is a required field";
      }
    });

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const resetFormFields = () => {
    setFormData((prevData) => ({
      ...prevData,
      firstName: "",
      phoneNumber: "",
      email: "",
      description: "",
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsFormSent(true);
    const isValid = validateForm();
    setIsFormValid(isValid);

    if (isValid) {
      let phoneNumberWithPrefix = formData.phoneNumber.replace(/\D/g, "");

      if (phoneNumberWithPrefix.charAt(0) === "0") {
        phoneNumberWithPrefix = `38${phoneNumberWithPrefix}`;
      }

      const dataToSend = {
        ...formData,
        phoneNumber: phoneNumberWithPrefix,
      };

      console.log("Data to send:", dataToSend);

      try {
        const result = await sendMessage(formatFormData(dataToSend), {
          throwIfFailed: false,
        });

        if (!result.ok) {
          setErrorMessage("Failed to send message, please try again.");
        } else {
          setIsFormSentSuccessfully(true);
          resetFormFields();
        }
      } catch (err) {
        setErrorMessage(
          "An error occurred while sending the request. Please try again or contact support."
        );
      }
    }
  };

  return (
    <div className="form">
      <p className="form__title">Share your contact →</p>
      <form onSubmit={handleSubmit} className="form__wrapper">
        <fieldset>
          <div className="form-container">
            <div className="input-container__input">
              <p>
                <input
                  type="text"
                  placeholder="[ Your name ]*"
                  id="firstName"
                  name="firstName"
                  className={`input-container__input--item ${
                    isFormSent &&
                    !formData.firstName.trim() &&
                    !isFormSentSuccessfully
                      ? "required-field"
                      : ""
                  } ${errors.firstName ? "mistake-field" : ""}`}
                  value={formData.firstName}
                  onChange={handleChange}
                />
              </p>
              {errors.firstName && (
                <p
                  className={`"input-message body-text-3 ${
                    isFormSent &&
                    !formData.firstName.trim() &&
                    !isFormSentSuccessfully
                      ? "required-field"
                      : ""
                  } ${errors.firstName ? "mistake-field" : ""}`}
                >
                  {errors.firstName}
                </p>
              )}
            </div>
          </div>
        </fieldset>
        <fieldset>
          <div className="form-telephone">
            <div className="input-container phone">
              <p>
                <InputMask
                  mask="+999999999999"
                  maskChar=""
                  value={formData.phoneNumber}
                  onChange={handleChange}
                >
                  {(inputProps) => (
                    <input
                      placeholder="[ Your phone ]*"
                      className={`input-phone input-container__input--item ${
                        isFormSent &&
                        !formData.phoneNumber.trim() &&
                        !isFormSentSuccessfully
                          ? "required-field"
                          : ""
                      } ${errors.phoneNumber ? "mistake-field" : ""}`}
                      type="text"
                      id="phoneNumber"
                      name="phoneNumber"
                      {...inputProps}
                    />
                  )}
                </InputMask>
              </p>
              {errors.phoneNumber && (
                <p
                  className={`"input-message body-text-3 ${
                    isFormSent &&
                    !formData.phoneNumber.trim() &&
                    !isFormSentSuccessfully
                      ? "required-field"
                      : ""
                  } ${errors.phoneNumber ? "mistake-field" : ""}`}
                >
                  {errors.phoneNumber}
                </p>
              )}
            </div>
          </div>
        </fieldset>

        <fieldset>
          <legend className="form-text"></legend>
          <div className="form-container">
            <div className="input-container__input">
              <p>
                <input
                  placeholder="[ Your email ]*"
                  type="email"
                  id="email"
                  name="email"
                  className={`input-container__input--item ${
                    isFormSent &&
                    !formData.email.trim() &&
                    !isFormSentSuccessfully
                      ? "required-field"
                      : ""
                  } ${errors.email ? "mistake-field" : ""}`}
                  value={formData.email}
                  onChange={handleChange}
                />
              </p>
              {errors.email && (
                <p
                  className={`input-message body-text-3 ${
                    isFormSent &&
                    !formData.email.trim() &&
                    !isFormSentSuccessfully
                      ? "required-field"
                      : ""
                  } ${errors.email ? "mistake-field" : ""}`}
                >
                  {errors.email}
                </p>
              )}
            </div>
          </div>
        </fieldset>
        <div>
          <div className="input-container">
            <p>
              <textarea
                placeholder="Your request"
                className="input input-container__input--item input-container__input--item-textarea"
                id="description"
                name="description"
                value={formData.description}
                onChange={handleChange}
              />
            </p>
          </div>
        </div>

        <button className="form--button button" type="submit" id="submitButton">
          <div className="arrow-wrapper">
            <div className="arrow">→</div>
            <div className="arrow">→</div>
          </div>
          <h5 className="link-ul text">Send</h5>
        </button>
      </form>
      {errorMessage && <div className="error-message">{errorMessage}</div>}
    </div>
  );
};

export default FormSent;
