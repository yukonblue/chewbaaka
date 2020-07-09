/**
 * ContentPageBanner.test.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jul 06, 2020
 * Updated  : Jul 08, 2020
 */

import React from 'react';

import { render, screen } from '@testing-library/react';

import renderer from 'react-test-renderer';

import ContentPageBanner from '../ContentPageBanner';

const coverImage = '';
const title = 'Title';
const subtitle = 'This is a subtitle';

test('renders ContentPageBanner component', () => {
  render(<ContentPageBanner coverImage={coverImage} title={title} subtitle={subtitle} />);

  const component = screen.getByTestId("ContentPageBannerComponentTestId");
  expect(component).toBeInTheDocument();

  const titleElement = screen.getByText(title);
  expect(titleElement).toBeInTheDocument();

  const subtitleElement = screen.getByText(subtitle);
  expect(subtitleElement).toBeInTheDocument();
});

test('ContentPageBanner component snapshot', () => {
  const tree = renderer
    .create(
      <ContentPageBanner
        coverImage={coverImage}
        title={title}
        subtitle={subtitle}
      />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
