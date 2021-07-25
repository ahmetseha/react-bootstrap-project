import { InputGroup, FormControl } from "react-bootstrap";

const SearchBar = ({ onChange, searchCountries }) => {
  return (
    <InputGroup className="p-3" style={{ width: "40%", margin: "2rem auto" }}>
      <FormControl
        className="border border-2 border-dark rounded-start rounded-3"
        value={searchCountries}
        onChange={onChange}
        placeholder="Search..."
        aria-describedby="inputGroup-sizing-default"
      />
    </InputGroup>
  );
};

export default SearchBar;
