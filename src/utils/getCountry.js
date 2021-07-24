import axios from "axios";

const getCountry = async () => {
  const url = `https://restcountries.eu/rest/v2/all`;
  const { data } = await axios.get(url);
  return data;
};

export default getCountry;
