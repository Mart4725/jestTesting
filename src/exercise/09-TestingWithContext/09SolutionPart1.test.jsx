
import React from 'react';
import { render, screen } from '@testing-library/react';
import EasyButton from '../sharedComponent/EasyButton';
import { ThemeProvider } from '../sharedComponent/theme';

function Wrapper({ children, theme = 'light' }) {
  return <ThemeProvider initialTheme={theme}>{children}</ThemeProvider>;
}

test('renders EasyButton with light theme styles', () => {
  render(<EasyButton>Easy</EasyButton>, {
    wrapper: ({ children }) => <Wrapper theme="light">{children}</Wrapper>,
  });

  const button = screen.getByRole('button', { name: /easy/i });
  expect(button).toHaveStyle({
    backgroundColor: 'white',
    color: 'black',
  });
});

test('renders EasyButton with dark theme styles', () => {
  render(<EasyButton>Easy</EasyButton>, {
    wrapper: ({ children }) => <Wrapper theme="dark">{children}</Wrapper>,
  });

  const button = screen.getByRole('button', { name: /easy/i });
  expect(button).toHaveStyle({
    backgroundColor: 'black',
    color: 'white',
  });
});
