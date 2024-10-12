import React from "react";
import { render, screen } from "@testing-library/react";
import SalesChart from "./SalesChart"; 
import { Doughnut } from "react-chartjs-2";
import "@testing-library/jest-dom";


jest.mock("react-chartjs-2", () => ({
  Doughnut: jest.fn(() => <canvas data-testid="doughnut-chart" />),
}));

describe("SalesChart Component", () => {
  test("renders SalesChart component in light mode", () => {
    render(<SalesChart darkMode={false} />);
    
   
    expect(screen.getByText(/total sales/i)).toBeInTheDocument();
    
   
    const chart = screen.getByTestId("doughnut-chart");
    expect(chart).toBeInTheDocument();

   
  
  });

  test("renders SalesChart component in dark mode", () => {
    render(<SalesChart darkMode={true} />);
    
    
    expect(screen.getByText(/total sales/i)).toBeInTheDocument();
    
   
    const chart = screen.getByTestId("doughnut-chart");
    expect(chart).toBeInTheDocument();

    

  });

  test("renders SalesChart component with correct data", () => {
    render(<SalesChart darkMode={false} />);
    
   
    expect(screen.getByText(/direct/i)).toBeInTheDocument();
    expect(screen.getByText(/\$300\.56/i)).toBeInTheDocument();
    expect(screen.getByText(/affiliate/i)).toBeInTheDocument();
    expect(screen.getByText(/\$135\.18/i)).toBeInTheDocument();
    expect(screen.getByText(/sponsored/i)).toBeInTheDocument();
    expect(screen.getByText(/\$154\.02/i)).toBeInTheDocument();
    expect(screen.getByText(/e-mail/i)).toBeInTheDocument();
    expect(screen.getByText(/\$48\.96/i)).toBeInTheDocument();

    
    expect(Doughnut).toHaveBeenCalledWith(
      expect.objectContaining({
        data: expect.objectContaining({
          labels: ["Direct", "Gap1", "Affiliate", "Gap2", "Sponsored", "Gap3", "E-mail", "Gap4"],
          datasets: expect.arrayContaining([
            expect.objectContaining({ label: "Total Sales" }),
          ]),
        }),
      }),
      {}
    );
  });
});
