/**
 * CircularImageButton.test.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jul 06, 2020
 * Updated  : Jul 06, 2020
 */

import React from 'react';

import { render, screen } from '@testing-library/react';

import CircularImageButton from '../CircularImageButton';

test('renders CircularImageButton component', () => {
  const title = "Cheetahology";

  render(
    <CircularImageButton
      title={title}
      image="https://cheetah.org/wp-content/uploads/2019/01/cheetah-conservation-fund-cheetah-fact-01.jpg"
      href="https://cheetah.org/wp-content/uploads/2019/01/cheetah-conservation-fund-cheetah-fact-01.jpg"
    />
  );

  const titleElement = screen.getByText(title);
  expect(titleElement).toBeInTheDocument();
});
