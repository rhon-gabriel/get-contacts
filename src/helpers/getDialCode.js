const axios = require("axios");

export const getDialCode = async () => {
  const response = await axios.get("https://ipapi.co/json/");
  const dialCode = response.data.country_calling_code;
  return dialCode;
};
