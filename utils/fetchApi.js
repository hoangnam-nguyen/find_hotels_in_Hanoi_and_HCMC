import axios from "axios";

export const baseUrl = "https://hotels4.p.rapidapi.com";

export const fetchApi = async (url) => {
  const { data } = await axios.get(url, {
    headers: {
      "x-rapidapi-host": "hotels4.p.rapidapi.com",
      "x-rapidapi-key": "7d48e51604mshfd188a7e57140abp1f70dajsn2ae98dfd4d81",
    },
  });

  return data;
};
