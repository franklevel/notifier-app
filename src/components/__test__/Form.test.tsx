import { render, fireEvent, screen, act } from "@testing-library/react";
import "@testing-library/jest-dom";
import "@testing-library/jest-dom/extend-expect";
import Form from "../Form";

describe("Form Component", () => {
  test("renders form fields", () => {
    const onSubmitMock = jest.fn();
    render(<Form onSubmit={onSubmitMock} />);
    expect(screen.getByLabelText("Message")).toBeInTheDocument();
    expect(screen.getByLabelText("Category")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Submit" })).toBeInTheDocument();
  });

  test("button is disabled by default", () => {
    const onSubmitMock = jest.fn();
    render(<Form onSubmit={onSubmitMock} />);
    expect(screen.getByRole("button", { name: "Submit" })).toBeDisabled();
  });

  test("button is enabled when message and category are provided", () => {
    const onSubmitMock = jest.fn();
    render(<Form onSubmit={onSubmitMock} />);
    const messageInput = screen.getByLabelText("Message");
    const categoryInput = screen.getByLabelText("Category");
    fireEvent.change(messageInput, { target: { value: "Test Message" } });
    fireEvent.change(categoryInput, { target: { value: "Test Category" } });
    expect(screen.getByRole("button", { name: "Submit" })).not.toBeDisabled();
  });

  test("submits form data on button click", async () => {
    const onSubmitMock = jest.fn();
    render(<Form onSubmit={onSubmitMock} />);

    const messageInput = screen.getByLabelText("Message");
    const categoryInput = screen.getByLabelText("Category");
    fireEvent.change(messageInput, { target: { value: "Test Message" } });
    fireEvent.change(categoryInput, { target: { value: "Test Category" } });
    fireEvent.click(screen.getByRole("button", { name: "Submit" }));

    await act(async () => {});

    expect(onSubmitMock).toHaveBeenCalledWith({
      message: "Test Message",
      categoryId: "Test Category",
    });
  });
});
