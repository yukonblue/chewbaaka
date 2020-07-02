/**
 * LandingPageGateway.test.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jul 02, 2020
 * Updated  : Jul 02, 2020
 */

import React from 'react';
import { render } from '@testing-library/react';
import LandingPageGateway from '../LandingPageGateway';

test('renders landing page gateway', () => {
  // TODO: Refine test case
  const { getByText } = render(<LandingPageGateway />);
  const mainTitleElement = getByText(/Run cheetah run/i);
  expect(mainTitleElement).toBeInTheDocument();

  // const mainButtonElement = getByText(/Explore/i);
  // expect(mainButtonElement).toBeInTheDocument();
});
