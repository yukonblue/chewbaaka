/**
 * App.test.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jun 30, 2020
 * Updated  : Jul 03, 2020
 */

import React from 'react';

import { render, screen } from '@testing-library/react';

import App from '../App';

test('renders app', () => {
  render(<App />);

  const mainTitleElement = screen.getByText(/Run cheetah run/i);
  expect(mainTitleElement).toBeInTheDocument();

  // Tests home page component is present.
  const homePageComponent = screen.getByTestId("HomePageTestId");
  expect(homePageComponent).toBeInTheDocument();
});
