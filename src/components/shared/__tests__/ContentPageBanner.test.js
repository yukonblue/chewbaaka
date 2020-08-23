/**
 * ContentPageBanner.test.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jul 06, 2020
 * Updated  : Aug 22, 2020
 */

import React from 'react'

import { render, screen } from '@testing-library/react'

import renderer from 'react-test-renderer'

import ContentPageBanner from '../ContentPageBanner'

const coverImageNamePrefix = "My_Cover_Image";
const title = 'Title';
const subtitle = 'This is a subtitle';

const getInstance = () => (
  <ContentPageBanner
    coverImageNamePrefix={coverImageNamePrefix}
    title={title}
    subtitle={subtitle}
    imageContext={null}
  />
);

test('renders ContentPageBanner component', () => {
  render(
    getInstance()
  );

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
      getInstance()
    ).toJSON();
  expect(tree).toMatchSnapshot();
});
