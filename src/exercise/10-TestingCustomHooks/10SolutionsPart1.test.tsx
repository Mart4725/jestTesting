import { render, screen, fireEvent } from "@testing-library/react";  
import userEvent from "@testing-library/user-event";  
import UseCounterHook from "./UseCounterHook";  
import React from "react";


describe("UseCounterHook", () => {
  test("should start with count at 0", () => {
    render(<UseCounterHook />);  
    const count = screen.getByRole("heading", { level: 1 }); 
    expect(count).toHaveTextContent("0"); 
  });

  test("should increment the count when the increment button is clicked", async () => {
    render(<UseCounterHook />);  
    const incrementButton = screen.getByText(/increment/i);  
    const count = screen.getByRole("heading", { level: 1 });  

    await userEvent.click(incrementButton);

    expect(count).toHaveTextContent("1");
  });

  test("should decrement the count when the decrement button is clicked", async () => {
    render(<UseCounterHook />);  
    const decrementButton = screen.getByText(/decrement/i);  
    const count = screen.getByRole("heading", { level: 1 });  

    await userEvent.click(decrementButton);

    expect(count).toHaveTextContent("-1");
  });
});
