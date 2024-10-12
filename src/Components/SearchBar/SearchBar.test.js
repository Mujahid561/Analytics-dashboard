import React from 'react';
import { render, screen } from '@testing-library/react';
import { SearchBar } from './SearchBar'; // Adjust the import path as necessary
import "@testing-library/jest-dom";

describe('SearchBar Component', () => {
  test('renders SearchBar in light mode with transparent background', () => {
    render(<SearchBar darkMode={false} transparent="transparent" />);
    
    const searchBar = screen.getByPlaceholderText(/search/i);
    
    // Check if the input is rendered
    expect(searchBar).toBeInTheDocument();

    // Check styles for light mode and transparent background
   
    expect(searchBar).toHaveClass('text-black bg-transparent');

    // Check the icon classes
   
    expect(screen.queryByRole('img', { hidden: true })).toBeNull();
  });

 

  test('renders SearchBar in dark mode with transparent background', () => {
    render(<SearchBar darkMode={true} transparent="transparent" />);

    const searchBar = screen.getByPlaceholderText(/search/i);
    
    // Check styles for dark mode and transparent background
  
    expect(searchBar).toHaveClass('bg-black text-white');

    // Check the icon classes

    expect(screen.queryByRole('img', { hidden: true })).toBeNull();
  });



  test('does not render command icon when transparent prop is set to "transparent"', () => {
    render(<SearchBar darkMode={false} transparent="transparent" />);
    
    const commandIcon = screen.queryByLabelText(/command/i);
    expect(commandIcon).toBeNull();
  });


});
