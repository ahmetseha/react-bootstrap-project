import { Container, Row } from "react-bootstrap";
import CountryCard from "../components/CountryCard";

const Countries = ({ countries, isLoading }) => {
  return isLoading ? (
    <div className="d-flex justify-content-center display-2">Loading...</div>
  ) : (
    <Container fluid="md">
      <Row xs={2} md={4} lg={6} className="justify-content-md-center flex-wrap">
        {countries.map((country, index) => (
          <CountryCard key={index} country={country} />
        ))}
      </Row>
    </Container>
  );
};

export default Countries;
