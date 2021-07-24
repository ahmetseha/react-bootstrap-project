
const SearchBar = ({ handleSubmit, onChange, searchCountries }) => {
  return (
    <div className="">
      <form
        className=""
        onSubmit={handleSubmit}
      >
        <div>
          <i className="fas fa-search"></i>
        </div>
        <input
          type="text"
          placeholder="Search countries"
          onChange={onChange}
          value={searchCountries}
          className=""
        />
      </form>
    </div>
  );
};

export default SearchBar;