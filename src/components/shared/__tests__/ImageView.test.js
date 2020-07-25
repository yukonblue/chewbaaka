/**
 * ImageView.test.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jul 06, 2020
 * Updated  : Jul 25, 2020
 */

import React from 'react'

import { render, screen } from '@testing-library/react'

import renderer from 'react-test-renderer'

import ImageView from '../ImageView'

import { getFormattedImageCaptionStringWithCredit }  from '../ImageCaptionUtils'

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

test('renders ImageView component with image credit string', () => {
  const caption = "This is a caption";
  const credit = "Image God";

  const expectedCaptionText = getFormattedImageCaptionStringWithCredit(caption, credit);

  render(
    <ImageView
      width={640}
      height={640}
      image="somesite.com/image.png"
      caption={caption}
      credit={credit}
    />
  );

  const captionElement = screen.getByTestId("ImageViewComponentCaptionPart");
  expect(captionElement).toBeInTheDocument();
  expect(captionElement.textContent).toBe(expectedCaptionText);
});

test('ImageView component snapshot', () => {
  const tree = renderer
    .create(
      <ImageView
        width={640}
        height={640}
        image="somesite.com/image.png"
        caption="This is a caption"
      />
    ).toJSON();
  expect(tree).toMatchSnapshot();
});

test('ImageView component with image credit string snapshot', () => {
  const tree = renderer
    .create(
      <ImageView
        width={640}
        height={640}
        image="somesite.com/image.png"
        caption="This is a caption"
        credit="Image God"
      />
    ).toJSON();
  expect(tree).toMatchSnapshot();
});
