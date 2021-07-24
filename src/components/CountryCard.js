
const CountryCard = ({ country}) => {
    return (
      <div className="country">
        <div className="country-image">
          <img src={country.flag} alt={country.name} />
        </div>
        <div className={`country-info`}>
          <h2>{country.name}</h2>
          <ul>
            <li>
              <span>Population :</span> {country.population}
            </li>
            <li>
              <span>Region :</span> {country.region}
            </li>
            <li>
              <span>Capital : </span> {country.capital}
            </li>
          </ul>
        </div>
      </div>
    );
  };
  
  export default CountryCard;