import React from "react";
import { render, screen } from "@testing-library/react";
import RevenueChart from "./RevenueChart"; // Adjust the import path as necessary
import { Line } from "react-chartjs-2";
import "@testing-library/jest-dom";

// Mock the Line component from react-chartjs-2
jest.mock("react-chartjs-2", () => ({
  Line: jest.fn(() => <canvas data-testid="line-chart" />),
}));

describe("RevenueChart Component", () => {
  

 

  test("renders RevenueChart component with correct data", () => {
    render(<RevenueChart darkMode={false} />);
    
    // Check for current and previous week data
    expect(screen.getByText(/Current Week \$58,211/i)).toBeInTheDocument();
    expect(screen.getByText(/Previous Week \$68,768/i)).toBeInTheDocument();
    
    // Check if the line chart contains the expected data structure
    expect(Line).toHaveBeenCalledWith(
      expect.objectContaining({
        data: expect.objectContaining({
          labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
          datasets: expect.arrayContaining([
            expect.objectContaining({ label: "Current Week" }),
            expect.objectContaining({ label: "Previous Week" }),
            expect.objectContaining({ label: "Projected" }),
          ]),
        }),
      }),
      {}
    );
  });
});
