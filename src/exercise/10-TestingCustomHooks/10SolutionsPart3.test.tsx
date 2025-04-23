import React from "react";
import { render, act } from "@testing-library/react";
import useCounter from "../sharedComponent/useCounter";


function setup(props?: { initialCount?: number; step?: number }) {
  const result = { current: {} as ReturnType<typeof useCounter> };

  function TestComponent() {
    result.current = useCounter(props);
    return null;
  }

  render(<TestComponent />);
  return result;
}

describe("useCounter (hook only) - Part 3", () => {
  test("should allow customization of the initial count", () => {
    const result = setup({ initialCount: 100 });
    expect(result.current.count).toBe(100);

    act(() => {
      result.current.increment();
    });

    expect(result.current.count).toBe(101);
  });

  test("should allow customization of the step", () => {
    const result = setup({ step: 3 });
    expect(result.current.count).toBe(0);

    act(() => {
      result.current.increment();
    });

    expect(result.current.count).toBe(3);

    act(() => {
      result.current.decrement();
    });

    expect(result.current.count).toBe(0);
  });
});
