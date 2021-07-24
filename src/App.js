import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import SearchBar   from "./components/SearchBar";
import Countries from "./containers/Countries";

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
        const result = await axios(
          `https://restcountries.eu/rest/v2/name/${query}`
        );
        setCountries(result.data);
        setIsLoading(false);
      }
    };

    getCountries();
  }, [query]);

  const onChange = (e) => {
    setSearchCountries(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setQuery(searchCountries);
  };

  return (
    <div className="App">
      <SearchBar
        handleSubmit={handleSubmit}
        onChange={onChange}
        searchCountries={searchCountries}
      />
      <Countries countries={countries} isLoading={isLoading} />
    </div>
  );
}

export default App;
