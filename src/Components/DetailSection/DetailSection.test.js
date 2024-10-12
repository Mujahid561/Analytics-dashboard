import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import DetailSection from './DetailSection'; // Adjust the import path as necessary
import { DetailBoxData } from '../../MockData/MockData';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { hideNotification } from '../../Redux/DashboardReducer';
import "@testing-library/jest-dom";

// Mocking the necessary hooks
jest.mock('react-router-dom', () => ({
  useNavigate: jest.fn(),
}));

jest.mock('react-redux', () => ({
  useDispatch: jest.fn(),
}));

describe('DetailSection Component', () => {
  const mockDispatch = jest.fn();
  const mockNavigate = jest.fn();
  
  beforeEach(() => {
    useDispatch.mockReturnValue(mockDispatch);
    useNavigate.mockReturnValue(mockNavigate);
  });

  afterEach(() => {
    jest.clearAllMocks(); // Clear mocks after each test
  });

 

  test('calls dispatch and navigate when "Orders" is clicked', () => {
    render(<DetailSection darkMode={false} />);

    // Find the detail box corresponding to "Orders"
    const ordersBox = DetailBoxData.find(item => item.header === "Orders");

    // Simulate a click on the Orders box
    fireEvent.click(screen.getByLabelText(`Navigate to ${ordersBox.header}`));

    // Check if dispatch was called
    expect(mockDispatch).toHaveBeenCalledWith(hideNotification());

    // Check if navigate was called with the correct path
    expect(mockNavigate).toHaveBeenCalledWith(ordersBox.path);
  });

  test('does not call dispatch or navigate for other boxes', () => {
    render(<DetailSection darkMode={false} />);

    // Find the detail box corresponding to a different item (not "Orders")
    const anotherBox = DetailBoxData.find(item => item.header !== "Orders");

    // Simulate a click on a non-Orders box
    fireEvent.click(screen.getByLabelText(`Navigate to ${anotherBox.header}`));

    // Check that dispatch and navigate were not called
    expect(mockDispatch).not.toHaveBeenCalled();
    expect(mockNavigate).not.toHaveBeenCalled();
  });

});
