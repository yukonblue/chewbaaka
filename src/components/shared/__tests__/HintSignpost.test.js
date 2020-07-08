/**
 * HintSignpost.test.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jul 07, 2020
 * Updated  : Jul 07, 2020
 */

import React from 'react';

import { render, screen } from '@testing-library/react';

import HintSignpost from '../HintSignpost';

test('renders HintSignpost component', () => {
  const hintText = "Hover over images below to reveal the genres";

  render(
    <HintSignpost hintText={hintText} />
  );

  const labelElement = screen.getByText(hintText);
  expect(labelElement).toBeInTheDocument();
});
