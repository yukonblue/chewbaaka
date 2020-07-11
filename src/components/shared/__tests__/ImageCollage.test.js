/**
 * ImageCollage.test.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jul 11, 2020
 * Updated  : Jul 11, 2020
 */

import React from 'react';

import { render, screen } from '@testing-library/react';

import ImageCollage from '../ImageCollage';

import image from '../assets/cheetah-conservation-fund-logo.jpg'

test('renders ImageCollage compoent', () => {
  const title = "Title";
  const subtitle = "This is a subtitle";

  render(
    <ImageCollage
      cells={[
          {
            image: image,
            title: title,
            subtitle: subtitle
          }
        ]}
    />
  );

  const titleElement = screen.getByText(title);
  expect(titleElement).toBeInTheDocument();

  const subtitleElement = screen.getByText(subtitle);
  expect(subtitleElement).toBeInTheDocument();
});
