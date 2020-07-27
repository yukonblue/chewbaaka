/**
 * ContentPageTwoColumnImageGallary.test.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jul 26, 2020
 * Updated  : Jul 26, 2020
 */

import React from 'react'

import { render } from '@testing-library/react'

import renderer from 'react-test-renderer'

import ContentPageTwoColumnImageGallary from '../ContentPageTwoColumnImageGallary'

const parts = [
  {
    image: "some image 1",
    caption: "This is image 1.",
    width: 720,
    height: 480
  },
  {
    image: "some image 2",
    caption: "This is image 2.",
    credit: "Image God",
    width: 1080,
    height: 720
  }
];

test('renders ContentPageTwoColumnImageGallary component', () => {
  render(
    <ContentPageTwoColumnImageGallary
      parts={parts}
    />
  );
});

test('ContentPageTwoColumnImageGallary component snapshot', () => {
  const tree = renderer
    .create(
      <ContentPageTwoColumnImageGallary
        parts={parts}
      />
    ).toJSON();
  expect(tree).toMatchSnapshot();
});
