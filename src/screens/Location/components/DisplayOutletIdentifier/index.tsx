import { useContext } from "react";
import { Row, Col } from "react-bootstrap";
import { LocationContext } from "../../context/Provider";

const DisplayOutletIdentifier = () => {
  const { state, dispatch } = useContext(LocationContext);

  return state.success ? (
    <Row className="mt-2">
      <Col>
        <strong>Outlet Identifier: </strong>
        <span>{state.outletIdentifier ? state.outletIdentifier : "N/A"}</span>
      </Col>
    </Row>
  ) : null;
};

export default DisplayOutletIdentifier;
