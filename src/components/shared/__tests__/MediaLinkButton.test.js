/**
 * MediaLinkButton.test.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jul 07, 2020
 * Updated  : Jul 08, 2020
 */

import React from 'react';

import { render, screen } from '@testing-library/react';

import renderer from 'react-test-renderer';

import MediaLinkButton from '../MediaLinkButton';

const title = 'Watch "Walking with Chewbaaka" on YouTube';

const href = "https://www.youtube.com/watch?v=WYjeEG06cjc";

test('renders MediaLinkButton component', () => {
  render(
    <MediaLinkButton href={href} title={title} />
  );

  const element = screen.getByText(title);
  expect(element).toBeInTheDocument();
});

test('MediaLinkButton component snapshot', () => {
  const tree = renderer
    .create(
      <MediaLinkButton href={href} title={title} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
