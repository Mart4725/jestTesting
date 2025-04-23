import React from "react";
import { render, act } from "@testing-library/react";
import useCounter from "../sharedComponent/useCounter";

describe("useCounter (hook only)", () => {
  let result: {
    count: number;
    increment: () => void;
    decrement: () => void;
  };

  function TestComponent(props: { initialCount?: number; step?: number }) {
    result = useCounter(props);
    return null;
  }

  test("should initialize count with default value", () => {
    render(<TestComponent />);
    expect(result.count).toBe(0);
  });

  test("should accept initialCount and step", () => {
    render(<TestComponent initialCount={10} step={5} />);
    
    expect(result.count).toBe(10);

    act(() => {
      result.increment();
    });

    expect(result.count).toBe(15);

    act(() => {
      result.decrement();
    });

    expect(result.count).toBe(10);
  });
});
