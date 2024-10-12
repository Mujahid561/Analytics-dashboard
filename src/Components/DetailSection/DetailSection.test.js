import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import DetailSection from './DetailSection'; // Adjust the import path as necessary
import { DetailBoxData } from '../../MockData/MockData';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { hideNotification } from '../../Redux/DashboardReducer';
import "@testing-library/jest-dom";


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
    jest.clearAllMocks(); 
  });

 

  test('calls dispatch and navigate when "Orders" is clicked', () => {
    render(<DetailSection darkMode={false} />);

    
    const ordersBox = DetailBoxData.find(item => item.header === "Orders");

  
    fireEvent.click(screen.getByLabelText(`Navigate to ${ordersBox.header}`));

    
    expect(mockDispatch).toHaveBeenCalledWith(hideNotification());

   
    expect(mockNavigate).toHaveBeenCalledWith(ordersBox.path);
  });

  test('does not call dispatch or navigate for other boxes', () => {
    render(<DetailSection darkMode={false} />);

    
    const anotherBox = DetailBoxData.find(item => item.header !== "Orders");

    
    fireEvent.click(screen.getByLabelText(`Navigate to ${anotherBox.header}`));

  
    expect(mockDispatch).not.toHaveBeenCalled();
    expect(mockNavigate).not.toHaveBeenCalled();
  });

});
