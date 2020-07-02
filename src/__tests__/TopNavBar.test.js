/**
 * TopNavBar.test.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jul 02, 2020
 * Updated  : Jul 02, 2020
 */

import React from 'react';
import { render } from '@testing-library/react';
import TopNavBar from '../TopNavBar';

test('renders top nav bar', () => {
  // TODO: Refine test case
  const { getByText } = render(<TopNavBar />);
  const mainTitleElement = getByText(/IUCN status/i);
  expect(mainTitleElement).toBeInTheDocument();

  // const mainButtonElement = getByText(/Explore/i);
  // expect(mainButtonElement).toBeInTheDocument();
});
