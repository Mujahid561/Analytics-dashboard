import React from "react";
import { render, screen } from "@testing-library/react";
import DetailBox from "./DetailBox";
import { FaArrowUp } from "react-icons/fa";
import "@testing-library/jest-dom";

describe("DetailBox Component", () => {
  const mockData = {
    header: "Revenue",
    value: "$1000",
    impact: "+20%",
    darkModeColor: "#333",
    lightModeColor: "#fff",
    icon: FaArrowUp,
  };

  test("renders with default props", () => {
    render(<DetailBox data={mockData} darkMode={false} index={0} />);


    expect(screen.getByRole("button")).toHaveAccessibleName(
      "Detail box for Revenue"
    );
    expect(screen.getByText("Revenue")).toBeInTheDocument();
    expect(screen.getByText("$1000")).toBeInTheDocument();
    expect(screen.getByText("+20%")).toBeInTheDocument();
  });

  test("applies correct background color in light mode", () => {
    render(<DetailBox data={mockData} darkMode={false} index={0} />);
    const detailBox = screen.getByRole("button");


    expect(detailBox).toHaveStyle({ backgroundColor: "#fff" });
  });

  test("applies correct background color in dark mode", () => {
    render(<DetailBox data={mockData} darkMode={true} index={0} />);
    const detailBox = screen.getByRole("button");


    expect(detailBox).toHaveStyle({ backgroundColor: "#333" });
  });

  test("does not render an icon when not provided", () => {
    const newData = { ...mockData, icon: null };
    render(<DetailBox data={newData} darkMode={false} index={0} />);

    expect(screen.queryByRole("img")).not.toBeInTheDocument();
  });

  test("has correct role and tabIndex for accessibility", () => {
    render(<DetailBox data={mockData} darkMode={false} index={0} />);
    const detailBox = screen.getByRole("button");

    expect(detailBox).toHaveAttribute("tabIndex", "0");
    expect(detailBox).toHaveAttribute("role", "button");
  });
});
