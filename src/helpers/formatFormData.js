function formatFormData(formData) {
  const labels = {
    firstName: "Ім'я:",
    lastName: "Прізвище:",
    phoneNumber: "Номер телефону:",
    description: "Питання:",
  };

  let formattedData = "";

  for (const key in formData) {
    if (formData[key]) {
      formattedData += `${labels[key]} ${formData[key]}\n`;
    }
  }

  return formattedData;
}

export default formatFormData;
