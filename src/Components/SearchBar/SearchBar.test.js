import React from 'react';
import { render, screen } from '@testing-library/react';
import { SearchBar } from './SearchBar'; 
import "@testing-library/jest-dom";

describe('SearchBar Component', () => {
  test('renders SearchBar in light mode with transparent background', () => {
    render(<SearchBar darkMode={false} transparent="transparent" />);
    
    const searchBar = screen.getByPlaceholderText(/search/i);
    
    
    expect(searchBar).toBeInTheDocument();

    
   
    expect(searchBar).toHaveClass('text-black bg-transparent');

    
   
    expect(screen.queryByRole('img', { hidden: true })).toBeNull();
  });

 

  test('renders SearchBar in dark mode with transparent background', () => {
    render(<SearchBar darkMode={true} transparent="transparent" />);

    const searchBar = screen.getByPlaceholderText(/search/i);
    
    
  
    expect(searchBar).toHaveClass('bg-black text-white');

    

    expect(screen.queryByRole('img', { hidden: true })).toBeNull();
  });



  test('does not render command icon when transparent prop is set to "transparent"', () => {
    render(<SearchBar darkMode={false} transparent="transparent" />);
    
    const commandIcon = screen.queryByLabelText(/command/i);
    expect(commandIcon).toBeNull();
  });


});
