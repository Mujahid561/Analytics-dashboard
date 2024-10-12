import React from 'react';
import { screen,render } from '@testing-library/react';
import { Bar } from 'react-chartjs-2';
import ProjectionsChart from './ProjectionsChart'; // Adjust the import path as necessary
import "@testing-library/jest-dom";

jest.mock('react-chartjs-2', () => ({
  Bar: jest.fn(() => <div>Bar Chart</div>),
}));

describe('ProjectionsChart Component', () => {
  test('renders ProjectionsChart component with light mode', () => {
  render(<ProjectionsChart darkMode={false} />);
    
    // Check if the header is rendered
    expect(screen.getByText(/projections vs actuals/i)).toBeInTheDocument();
    
    // Check if Bar chart is rendered
    expect(screen.getByText(/bar chart/i)).toBeInTheDocument();
    
    // Check for light mode styles
   
  });

  test('renders ProjectionsChart component with dark mode', () => {
   render(<ProjectionsChart darkMode={true} />);
    
    // Check if the header is rendered
    expect(screen.getByText(/projections vs actuals/i)).toBeInTheDocument();
    
    // Check if Bar chart is rendered
    expect(screen.getByText(/bar chart/i)).toBeInTheDocument();
    
    // Check for dark mode styles

  });

  test('renders Bar chart with correct data and options', () => {
    render(<ProjectionsChart darkMode={false} />);
    
    // Check if the Bar component was called with the correct data and options
    expect(Bar).toHaveBeenCalledWith(
      expect.objectContaining({
        data: {
          labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
          datasets: expect.arrayContaining([
            expect.objectContaining({ label: 'Actual', data: [13, 15, 9, 20, 11, 17] }),
            expect.objectContaining({ label: 'Projection', data: [8, 10, 6, 10, 4, 7] }),
          ]),
        },
        options: expect.objectContaining({
          scales: expect.objectContaining({
            x: expect.objectContaining({
              stacked: true,
            }),
            y: expect.objectContaining({
              stacked: true,
              beginAtZero: true,
              min: 0,
              max: 30,
            }),
          }),
        }),
      }),
      {}
    );
  });
});
