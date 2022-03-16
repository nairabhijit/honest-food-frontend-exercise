import { Container, Row, Col } from "react-bootstrap";
import DisplayOutletIdentifier from "./components/DisplayOutletIdentifier";
import SearchLocationForm from "./components/SearchLocationForm";
import LocationProvider from "./context/Provider";
import "./index.scss";

const Location = () => {
  return (
    <Container>
      <Row className="search-location justify-content-center align-items-center">
        <Col lg={4}>
          <LocationProvider>
            <>
              <SearchLocationForm />
              <DisplayOutletIdentifier />
            </>
          </LocationProvider>
        </Col>
      </Row>
    </Container>
  );
};

export default Location;
