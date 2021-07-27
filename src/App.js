import { useState, useEffect } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import SearchBar from "./components/SearchBar";
import Countries from "./containers/Countries";
import Header from "./components/Header";

function App() {
  const [countries, setCountries] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchCountries, setSearchCountries] = useState("");

  useEffect(() => {
    setIsLoading(false);
    axios
      .get(`https://restcountries.eu/rest/v2/all`)
      .then((res) => setCountries(res.data));
  }, []);

  const onChange = (e) => {
    let charMap = {
      çÇ: "c",
      ğĞ: "g",
      şŞ: "s",
      üÜ: "u",
      ıİ: "i",
      öÖ: "o",
    };
    for (var key in charMap) {
      e.target.value = e.target.value.replace(
        new RegExp("[" + key + "]", "g"),
        charMap[key]
      );
    }
    setSearchCountries(
      e.target.value
        .replace(/[^-a-zA-Z0-9\s]+/gi, "")
        .replace(/\s/gi, "-")
        .replace(/[-]+/gi, "-")
        .toLowerCase()
    );
  };

  // const filtered = countries.filter((item) => {
  //   return Object.keys(item).some((key) => {
  //     console.log(item);
  //     return item[key]
  //       .toString()
  //       .toLowerCase()
  //       .includes(searchCountries.toString().toLowerCase());
  //   });
  // });

  const filtered = countries.filter(
    (item) =>
      item.name
        .toString()
        .toLowerCase()
        .includes(searchCountries.toLowerCase()) ||
      item.capital
        .toString()
        .toLowerCase()
        .includes(searchCountries.toLowerCase()) ||
      item.region
        .toString()
        .toLowerCase()
        .includes(searchCountries.toLowerCase())
  );

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}>
      <Header />
      <SearchBar onChange={onChange} searchCountries={searchCountries} />
      <Countries countries={filtered} isLoading={isLoading} />
    </div>
  );
}

export default App;
