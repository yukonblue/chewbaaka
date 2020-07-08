/**
 * ImageView.test.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jul 06, 2020
 * Updated  : Jul 06, 2020
 */

import React from 'react';

import { render, screen } from '@testing-library/react';

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
