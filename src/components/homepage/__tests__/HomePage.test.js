/**
 * HomePage.test.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jul 02, 2020
 * Updated  : Jul 02, 2020
 */

import React from 'react';
import { render } from '@testing-library/react';
import HomePage from '../HomePage';

test('renders homepage', () => {
  // TODO: Refine test case
  const { getByText } = render(<HomePage />);
  const mainTitleElement = getByText(/Run cheetah run/i);
  expect(mainTitleElement).toBeInTheDocument();

  // const mainButtonElement = getByText(/Explore/i);
  // expect(mainButtonElement).toBeInTheDocument();
});
