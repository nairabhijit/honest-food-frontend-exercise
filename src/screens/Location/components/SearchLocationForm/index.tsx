import { FormEvent, useCallback, useEffect, useState } from "react";
import { Form, Row, Col, Button, Spinner } from "react-bootstrap";
import Autocomplete from "react-google-autocomplete";
import classNames from "classnames";
import Error from "../../../../shared/components/Error";
import useOutletIdentifier from "../../hooks/useOutletIdentifier";
import { fetchOutletIdentifier, resetState } from "../../store/dispatchers";
import { Coordinates } from "../../store/types";
import { errorMessages } from "./constants";

const SearchLocationForm = () => {
  const { state, dispatch } = useOutletIdentifier();
  const [coordinates, setCoordinates] = useState<Coordinates | null>(null);
  const [error, setError] = useState("");

  useEffect(() => {
    if (state.failed) {
      setError("Failed to fetch outlet identifier!!");
    }
  }, [state.failed]);

  const onChangeInputText = () => {
    if (state.success) {
      // make it empty
      dispatch(resetState());
    }
    setError("");
    setCoordinates(null);
  };
  const onPlaceSelected = (place: any) => {
    setError("");
    const lat = place.geometry.location.lat();
    const lng = place.geometry.location.lng();
    setCoordinates({ lat, lng });
  };
  const onSubmit = useCallback(
    (event: FormEvent) => {
      event.preventDefault();
      if (!coordinates) {
        setError(errorMessages.required);
      } else {
        // send the request to fetch the outlet identifier
        dispatch(fetchOutletIdentifier(coordinates));
      }
    },
    [coordinates, dispatch]
  );

  return (
    <Form onSubmit={onSubmit}>
      <Row>
        <Col>
          <Autocomplete
            apiKey={process.env.REACT_APP_GOOGLE_API_KEY}
            className={classNames({
              "form-control": true,
              "is-invalid": error,
            })}
            placeholder="Search location"
            onChange={onChangeInputText}
            onPlaceSelected={onPlaceSelected}
            options={{ types: ["geocode"] }}
            data-testid="places-search-input"
          />
          {error ? <Error message={error} /> : null}
        </Col>
        <Col className="col-auto ps-0">
          <Button
            data-testid="submit-btn"
            type="submit"
            disabled={state.inProgress}
          >
            {state.inProgress ? (
              <>
                <Spinner
                  as="span"
                  animation="border"
                  size="sm"
                  role="status"
                  aria-hidden="true"
                />{" "}
                <span>Loading...</span>
              </>
            ) : (
              "Submit"
            )}
          </Button>
        </Col>
      </Row>
    </Form>
  );
};

export default SearchLocationForm;
