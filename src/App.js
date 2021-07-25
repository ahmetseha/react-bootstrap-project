import { useState, useEffect } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import SearchBar from "./components/SearchBar";
import Countries from "./containers/Countries";
import Header from "./components/Header";

function App() {
  const [countries, setCountries] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [query, setQuery] = useState("");
  const [searchCountries, setSearchCountries] = useState("");

  useEffect(() => {
    const getCountries = async () => {
      if (query === "") {
        const res = await axios(`https://restcountries.eu/rest/v2/all`);
        setCountries(res.data);
        setIsLoading(false);
      } else {
        const res = await axios(
          `https://restcountries.eu/rest/v2/name/${query}`
        );
        setCountries(res.data);
        setIsLoading(false);
      }
    };

    getCountries();
  }, [query]);

  const onChange = (e) => {
    setSearchCountries(e.target.value);
  };

  const filtered = countries.filter((item) => {
    return item.capital
      .toString()
      .toLowerCase()
      .includes(searchCountries.toLowerCase());
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
