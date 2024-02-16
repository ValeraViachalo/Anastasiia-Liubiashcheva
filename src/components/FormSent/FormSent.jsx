import React, { useState, useEffect } from "react";
import InputMask from "react-input-mask";
import "./FormSent.scss";

import sendMessage from "../../requests/sendMessage.js";
import formatFormData from "../../helpers/formatFormData.js";

import { motion } from "framer-motion";

const FormSent = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    description: "",
  });

  const [errors, setErrors] = useState({});
  const [isFormValid, setIsFormValid] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    if (name === "phoneNumber") {
      setFormData({
        ...formData,
        phoneNumber: value.replace(/\D/g, ""),
      });
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.firstName) {
      newErrors.firstName = "Ім’я є обов’язковим полем";
    }

    const phoneRegex = /^\d{9}$/;
    if (!phoneRegex.test(formData.phoneNumber)) {
      newErrors.phoneNumber = "Не вірно";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const resetForm = () => {
    // Функція для скидання форми на початковий стан
    setFormData({
      firstName: "",
      lastName: "",
      phoneNumber: "",
      description: "",
    });
    setErrors({});
    setIsFormValid(null);
    setErrorMessage(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const isValid = validateForm();
    setIsFormValid(isValid);

    if (isValid) {
      const phoneNumberWithPrefix = `+380${formData.phoneNumber}`;
      const dataToSend = {
        ...formData,
        phoneNumber: phoneNumberWithPrefix,
      };

      console.log("Дані, готові до відправки:", dataToSend);
      window.location.href = "#/form-request";

      const message = formatFormData(dataToSend);

      try {
        const result = await sendMessage(message, { throwIfFailed: false });

        if (!result.ok) {
          // Request failed
          setErrorMessage(
            "Помилка під час відправки запиту. Спробуйте ще раз."
          );
        } else {
          // Request OK
          // Скидуємо форму або виконуємо інші дії для успішного запиту
          resetForm(); // Скидання форми
        }
      } catch (err) {
        // Do something with error...
        setErrorMessage(
          "Сталася помилка під час відправки запиту. Спробуйте ще раз або зверніться до служби підтримки."
        );
      }
    }
  };

  useEffect(() => {
    if (errorMessage) {
      // Якщо є помилка, виводимо її в консоль
      console.error(errorMessage);
    }
  }, [errorMessage]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="container"
    >
      <div className="form">
        <h2 className="form__title">Зворотній зв’язок</h2>
        <form onSubmit={handleSubmit}>
          <fieldset>
            <legend className="form-text">Ім’я та призвище:</legend>
            <div className="form-container">
              <div className="input-container__input">
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  className="input-container__input--item"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                />
                {errors.firstName && (
                  <p className="input-message error">{errors.firstName}</p>
                )}
                {isFormValid !== null && !errors.firstName && (
                  <p
                    className={`input-message ${
                      isFormValid ? "success" : "error"
                    }`}
                  >
                    {isFormValid ? "Вірно" : "Не вірно"}
                  </p>
                )}
              </div>
              <div className="input-container__input">
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  className="input-container__input--item"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                />
                {isFormValid !== null && !errors.lastName && (
                  <p
                    className={`input-message ${
                      isFormValid ? "success" : "error"
                    }`}
                  >
                    {isFormValid ? "Вірно" : "Не вірно"}
                  </p>
                )}
              </div>
            </div>
          </fieldset>
          <div className="form-telephone">
            <label className="form-text" htmlFor="phoneNumber">
              Номер телефону
            </label>
            <div className="input-container phone">
              <div className="number">
                <div className="number-image"></div>
                <span>+380</span>
              </div>
              <InputMask
                placeholder="Номер телефону"
                mask="999999999"
                maskChar=""
                value={formData.phoneNumber}
                onChange={handleChange}
              >
                {(inputProps) => (
                  <input
                    className="input-phone"
                    type="text"
                    id="phoneNumber"
                    name="phoneNumber"
                    {...inputProps}
                  />
                )}
              </InputMask>
            </div>
          </div>
          {errors.phoneNumber && (
            <p className="input-message error">{errors.phoneNumber}</p>
          )}
          {isFormValid !== null && !errors.phoneNumber && (
            <p className={`input-message ${isFormValid ? "success" : "error"}`}>
              {isFormValid ? "Вірно" : "Не вірно"}
            </p>
          )}
          <div>
            <label className="form-text" htmlFor="description">
              Ваше питання
            </label>
            <div className="input-container">
              <textarea
                placeholder="Розкажіть детальніше про ваше запитання"
                className="input"
                id="description"
                name="description"
                value={formData.description}
                onChange={handleChange}
                required
              />
            </div>
            {isFormValid !== null && !errors.description && (
              <p
                className={`input-message ${isFormValid ? "success" : "error"}`}
              >
                {isFormValid ? "Вірно" : "Не вірно"}
              </p>
            )}
          </div>
          <button className="form--button" type="submit" id="submitButton">
            Відправити
          </button>
        </form>
        {errorMessage && <div className="error-message">{errorMessage}</div>}
      </div>
    </motion.div>
  );
};

export default FormSent;
