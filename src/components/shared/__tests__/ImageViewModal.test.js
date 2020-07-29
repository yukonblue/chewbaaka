/**
 * ImageViewModal.test.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jul 29, 2020
 * Updated  : Jul 29, 2020
 */

import React from 'react'

import { render, screen } from '@testing-library/react'

import renderer from 'react-test-renderer'

import ImageViewModal from '../ImageViewModal'

import image from '../assets/cheetah-conservation-fund-logo.jpg'

test('renders ImageViewModal component', () => {
  render(
    <ImageViewModal
      width={720}
      height={480}
      image={image}
    />
  );

  const componentCoverImageContainerPart = screen.getByTestId("ImageViewModalComponentCoverImageContainerTestId");
  expect(componentCoverImageContainerPart).toBeInTheDocument();
});

test('ImageViewModal component snapshot', () => {
  const tree = renderer
    .create(
      <ImageViewModal
        width={720}
        height={480}
        image={image}
      />
    ).toJSON();
  expect(tree).toMatchSnapshot();
});
