/**
 * App.test.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jun 30, 2020
 * Updated  : Jul 01, 2020
 */

import React from 'react';
import { render } from '@testing-library/react';
import App from '../App';

test('renders homepage', () => {
  const { getByText } = render(<App />);
  const mainTitleElement = getByText(/Run cheetah run/i);
  expect(mainTitleElement).toBeInTheDocument();

  // const mainButtonElement = getByText(/Explore/i);
  // expect(mainButtonElement).toBeInTheDocument();
});
