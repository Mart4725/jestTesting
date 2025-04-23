
import React from 'react';
import { render, screen } from '@testing-library/react';
import EasyButton from '../sharedComponent/EasyButton';
import { ThemeProvider } from '../sharedComponent/theme';

function renderWithProviders(ui, { theme = 'light', ...options } = {}) {
  function Wrapper({ children }) {
    return <ThemeProvider initialTheme={theme}>{children}</ThemeProvider>;
  }
  return render(ui, { wrapper: Wrapper, ...options });
}

test('EasyButton renders with light theme using renderWithProviders', () => {
  renderWithProviders(<EasyButton>Easy</EasyButton>, { theme: 'light' });

  const button = screen.getByRole('button', { name: /easy/i });
  expect(button).toHaveStyle({
    backgroundColor: 'white',
    color: 'black',
  });
});

test('EasyButton renders with dark theme using renderWithProviders', () => {
  renderWithProviders(<EasyButton>Easy</EasyButton>, { theme: 'dark' });

  const button = screen.getByRole('button', { name: /easy/i });
  expect(button).toHaveStyle({
    backgroundColor: 'black',
    color: 'white',
  });
});
