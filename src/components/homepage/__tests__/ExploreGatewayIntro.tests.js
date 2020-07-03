/**
 * ExploreGatewayIntro.test.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jul 02, 2020
 * Updated  : Jul 02, 2020
 */

import React from 'react';

import { render, screen } from '@testing-library/react';

import ExploreGatewayIntro from '../ExploreGatewayIntro';

test('renders explore gateway intro', () => {
  render(<ExploreGatewayIntro />);

  // Tests component title is present.
  const componentTitleElement = screen.getByText(/Explore CCF's Cheetah Museum/i);
  expect(componentTitleElement).toBeInTheDocument();

  // Tests 'Get Involved' button is present and have the correct link.
  const getInvolvedButton = screen.getByText("Get Involved");
  expect(getInvolvedButton).toBeInTheDocument();
  expect(getInvolvedButton.href).toBe("https://cheetah.org/get-involved/ways-to-give/");
});
