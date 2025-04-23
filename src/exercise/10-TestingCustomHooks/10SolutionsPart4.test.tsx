import { renderHook, act } from "@testing-library/react";
import useCounter from "../sharedComponent/useCounter";

describe("useCounter (hook only) - Part 4", () => {
  test("should allow customization of the initial count", () => {
    const { result } = renderHook(() => useCounter({ initialCount: 100 }));
    expect(result.current.count).toBe(100);

    act(() => {
      result.current.increment();
    });

    expect(result.current.count).toBe(101);
  });

  test("should allow customization of the step", () => {
    const { result } = renderHook(() => useCounter({ step: 3 }));
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
