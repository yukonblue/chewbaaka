/**
 * ImageSlidingGalleryDiscrete.test.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jul 23, 2020
 * Updated  : Jul 24, 2020
 */

import React from 'react'

import { render, screen } from '@testing-library/react'

import renderer from 'react-test-renderer'

import ImageSlidingGalleryDiscrete from '../ImageSlidingGalleryDiscrete'

const slides=[
  {
    image: '',
    caption: "Researchers used the Tuxtla Statuette to decipher the epi-Olmec writing system, which represents both syllables and words"
  },
  {
    image: '',
    caption: "Listen to a Tsimshian (Pacific Northwest Native) storyteller recount the family history painted on a 38-foot-long house front as specific parts of the design light up."
  }
];

test('renders ImageSlidingGalleryDiscrete component', () => {
  render(
    <ImageSlidingGalleryDiscrete
      slides={slides}
      width={100}
      height={100}
    />
  );

  const captionElement = screen.getByTestId("ImageSlidingGalleryDiscreteCaptionPart");
  expect(captionElement).toBeInTheDocument();
  expect(captionElement.textContent).toBe(slides[0].caption);
});

test('ImageSlidingGalleryDiscrete component snapshot', () => {
  const tree = renderer
    .create(
      <ImageSlidingGalleryDiscrete
        slides={slides}
        width={100}
        height={100}
      />
    ).toJSON();
  expect(tree).toMatchSnapshot();
});
