import React from "react";
import { render, screen } from "@testing-library/react";
import RevenueChart from "./RevenueChart"; 
import { Line } from "react-chartjs-2";
import "@testing-library/jest-dom";


jest.mock("react-chartjs-2", () => ({
  Line: jest.fn(() => <canvas data-testid="line-chart" />),
}));

describe("RevenueChart Component", () => {
  

 

  test("renders RevenueChart component with correct data", () => {
    render(<RevenueChart darkMode={false} />);
    
    
    expect(screen.getByText(/Current Week \$58,211/i)).toBeInTheDocument();
    expect(screen.getByText(/Previous Week \$68,768/i)).toBeInTheDocument();
    
    
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
