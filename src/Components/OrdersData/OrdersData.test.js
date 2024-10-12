import React from 'react';
import { render, screen} from '@testing-library/react';
import { useSelector } from 'react-redux';
import OrdersData from './OrdersData'; // Adjust the import path as necessary
import { orders } from '../../MockData/ordersMockData';
import "@testing-library/jest-dom";

// Mocking the necessary hooks
jest.mock('react-redux');

describe('OrdersData Component', () => {
  beforeEach(() => {
    // Reset the mock before each test
    jest.clearAllMocks();
  });

  test('renders the order list header', () => {
    // Mock the selector to return light mode
    useSelector.mockReturnValue({
      dataReducer: {
        darkMode: false,
      },
    });

    render(<OrdersData />);

    expect(screen.getByText(/order list/i)).toBeInTheDocument();
  });

  test('renders the action buttons', () => {
    // Mock the selector to return light mode
    useSelector.mockReturnValue({
      dataReducer: {
        darkMode: false,
      },
    });

    render(<OrdersData />);

    expect(screen.getByLabelText(/add order/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/filter orders/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/sort orders/i)).toBeInTheDocument();
  });

  test('renders correct number of order rows', () => {
    // Mock the selector to return light mode
    useSelector.mockReturnValue({
      dataReducer: {
        darkMode: false,
      },
    });

    render(<OrdersData />);

    // Ensure that the number of rendered rows matches the orders array length
    const rows = screen.getAllByRole('row');
    expect(rows.length).toBe(orders.length + 1); // +1 for the header row
  });

 

  test('applies correct styles for dark mode', () => {
    // Mock the selector to return dark mode
    useSelector.mockReturnValue({
      dataReducer: {
        darkMode: true,
      },
    });

    render(<OrdersData />);

    const table = screen.getByRole('table');
    expect(table).toHaveClass('text-white bg-black');
  });

 

 
});
