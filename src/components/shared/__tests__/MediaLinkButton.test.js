/**
 * MediaLinkButton.test.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jul 07, 2020
 * Updated  : Jul 07, 2020
 */

import React from 'react';

import { render, screen } from '@testing-library/react';

import MediaLinkButton from '../MediaLinkButton';

test('renders MediaLinkButton component', () => {
  const title = 'Watch "Walking with Chewbaaka" on YouTube';

  const href = "https://www.youtube.com/watch?v=WYjeEG06cjc";

  render(
    <MediaLinkButton href={href} title={title} />
  );

  const element = screen.getByText(title);
  expect(element).toBeInTheDocument();
});
