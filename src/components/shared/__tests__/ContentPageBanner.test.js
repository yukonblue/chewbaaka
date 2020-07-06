/**
 * ContentPageBanner.test.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jul 06, 2020
 * Updated  : Jul 06, 2020
 */

import React from 'react';

import { render, screen } from '@testing-library/react';

import ContentPageBanner from '../ContentPageBanner';

test('renders ContentPageBanner component', () => {
  const coverImage = '';
  const title = 'Title';
  const subtitle = 'This is a subtitle';

  render(<ContentPageBanner coverImage={coverImage} title={title} subtitle={subtitle} />);

  const component = screen.getByTestId("ContentPageBannerComponentTestId");
  expect(component).toBeInTheDocument();

  const titleElement = screen.getByText(title);
  expect(titleElement).toBeInTheDocument();

  const subtitleElement = screen.getByText(subtitle);
  expect(subtitleElement).toBeInTheDocument();
});
