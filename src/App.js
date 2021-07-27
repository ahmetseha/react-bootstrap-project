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
    setSearchCountries(e.target.value);
  };

  const filtered = countries.filter((item) => {
    return Object.keys(item).some((key) => {
      console.log(item);
      return item[key]
        .toString()
        .toLowerCase()
        .includes(searchCountries.toString().toLowerCase());
    });
  });

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
