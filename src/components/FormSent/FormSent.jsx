import React, { useState } from "react";
import "./FormSent.scss";
import sendMessage from "../../requests/sendMessage";
import formatFormData from "../../helpers/formatFormData";

function FormSent() {
  const [formData, setFormData] = useState({
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Changing value in formData
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Simple validation: checking if a value is entered
    if (!formData.description.trim()) {
      setError("Please enter something before submitting");
      return;
    }

    // Getting data object to send
    const formattedData = formatFormData(formData);

    try {
      // Sending data to the server
      await sendMessage(formattedData);

      // Logging successful submission to the console
      console.log("Sent successfully:", formattedData);

      // Clearing input fields and resetting errors
      setFormData((prevFormData) => ({
        ...prevFormData,
        description: "",
      }));
      setError(null);
    } catch (error) {
      // Logging error to the console in case of failure
      console.error("Error sending:", error);
      setError("An error occurred while sending. Try again.");
    }
  };

  return (
    <div className="formsent">
      <form onSubmit={handleSubmit}>
        <label className="form-text">
          Enter something:
          <input
            type="text"
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
          />
        </label>
        {error && <p className="error-message">{error}</p>}
        <button className="form-button" type="submit">
          Sent
        </button>
      </form>
    </div>
  );
}

export default FormSent;
