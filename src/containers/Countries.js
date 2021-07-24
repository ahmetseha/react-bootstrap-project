import CountryCard from "../components/CountryCard";

const Countries = ({ countries, isLoading }) => {
  return isLoading ? (
    <div>{/* <img src={loadingGif} alt="loading" /> */}</div>
  ) : (
    <section>
      {countries.map((country, index) => (
        <CountryCard key={index} country={country} />
      ))}
    </section>
  );
};

export default Countries;
