/**
 * Footer.test.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jul 02, 2020
 * Updated  : Jul 02, 2020
 */

import React from 'react';
import { render } from '@testing-library/react';
import Footer from '../Footer.js';

test('renders global footer', () => {
  // TODO: Refine test case
  const { getByText } = render(<Footer />);
  const mainTitleElement = getByText(/Resources/i);
  expect(mainTitleElement).toBeInTheDocument();

  // const mainButtonElement = getByText(/Explore/i);
  // expect(mainButtonElement).toBeInTheDocument();
});
