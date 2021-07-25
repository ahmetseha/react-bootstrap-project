import { Card } from "react-bootstrap";

const CountryCard = ({ country }) => {
  return (
    <Card className="mb-3" style={{ marginRight: "1rem" }}>
      <Card.Img
        src={country.flag}
        alt={country.name}
        style={{ width: "100%", height: "120px", padding: "0.5rem" }}
      />
      <Card.Body>
        <Card.Title>{country.name}</Card.Title>
        <Card.Text>{country.capital}</Card.Text>
        <Card.Text>{country.region}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default CountryCard;
