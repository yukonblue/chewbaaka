/**
 * TestPage.test.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jul 06, 2020
 * Updated  : Jul 06, 2020
 */

import React from 'react';

import { render, screen } from '@testing-library/react';

import TestPage from '../TestPage';

test('renders TestPage', () => {
  render(<TestPage />);

  const titleElement = screen.getByText("This is a test page");
  expect(titleElement).toBeInTheDocument();
});
