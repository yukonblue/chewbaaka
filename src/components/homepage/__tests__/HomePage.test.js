/**
 * HomePage.test.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jul 02, 2020
 * Updated  : Jul 03, 2020
 */

import React from 'react';

import { render, screen } from '@testing-library/react';

import HomePage from '../HomePage';

test('renders homepage', () => {
  render(<HomePage />);

  const mainTitleElement = screen.getByText(/Run cheetah run/i);
  expect(mainTitleElement).toBeInTheDocument();

  // TODO: make this test more comprehensive.
});
