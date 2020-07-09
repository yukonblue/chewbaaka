/**
 * ImageView.test.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jul 06, 2020
 * Updated  : Jul 08, 2020
 */

import React from 'react';

import { render, screen } from '@testing-library/react';

import renderer from 'react-test-renderer';

import ImageView from '../ImageView';

test('renders ImageView component', () => {
  const caption = "This is a caption";

  render(
    <ImageView
      width={640}
      height={640}
      image="somesite.com/image.png"
      caption={caption}
    />
  );

  const captionElement = screen.getByTestId("ImageViewComponentCaptionPart");
  expect(captionElement).toBeInTheDocument();
  expect(captionElement.textContent).toBe(caption);
});

test('ImageView component snapshot', () => {
  const tree = renderer
    .create(
      <ImageView
        width={640}
        height={640}
        image="somesite.com/image.png"
        caption="This is a caption"
      />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
