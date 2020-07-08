/**
 * CircularImage.test.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jul 07, 2020
 * Updated  : Jul 07, 2020
 */

import React from 'react';

import { render, screen } from '@testing-library/react';

import CircularImage from '../CircularImage';

test('renders CircularImage component', () => {
  const title = "Chewbaaka";

  render(
    <CircularImage
      title={title}
      image="https://sotinpc.files.wordpress.com/2013/04/day-of-rememberance.jpg"
    />
  );

  const titleElement = screen.getByText(title);
  expect(titleElement).toBeInTheDocument();
});
