import React from 'react';
import { render, screen } from '@testing-library/react';
import { useSelector } from 'react-redux';
import OrdersData from './OrdersData';
import { orders } from '../../MockData/ordersMockData';
import "@testing-library/jest-dom";


jest.mock('react-redux');

describe('OrdersData Component', () => {
  beforeEach(() => {

    jest.clearAllMocks();
  });

  test('renders the order list header', () => {

    useSelector.mockReturnValue({
      dataReducer: {
        darkMode: false,
      },
    });

    render(<OrdersData />);

    expect(screen.getByText(/order list/i)).toBeInTheDocument();
  });

  test('renders the action buttons', () => {

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

    useSelector.mockReturnValue({
      dataReducer: {
        darkMode: false,
      },
    });

    render(<OrdersData />);


    const rows = screen.getAllByRole('row');
    expect(rows.length).toBe(orders.length + 1);
  });



  test('applies correct styles for dark mode', () => {

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
