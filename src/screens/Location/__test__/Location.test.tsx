import { fireEvent, render, screen } from "@testing-library/react";
import SearchLocationForm from "../components/SearchLocationForm";
import { errorMessages } from "../components/SearchLocationForm/constants";

const renderForm = () => {
  render(<SearchLocationForm />);
};
const getSubmitButton = () => {
  return screen.getByTestId("submit-btn");
};
const expectErrorMessage = (errorMessage: string) => {
  expect(screen.getByText(errorMessage)).toBeInTheDocument();
};
const getInput = () => {
  return screen.getByTestId("places-search-input");
};
const setInputValue = (value: string) => {
  const inputEl = getInput();
  fireEvent.change(inputEl, { target: { value } });
};

describe("Form Validations", () => {
  test("If the 'required' validation errors are displayed when the empty form is submitted", () => {
    renderForm();
    const buttonEl = getSubmitButton();
    fireEvent.submit(buttonEl);
    expectErrorMessage(errorMessages.required);
  });
  test("If the validation error is displayed when option is not selected from the places autocomplete", () => {
    renderForm();
    setInputValue("Stumpergasse 51, 1060 Vienna");
    const buttonEl = getSubmitButton();
    fireEvent.submit(buttonEl);
    expectErrorMessage(errorMessages.required);
  });
});
