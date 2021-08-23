/**
 * ImageSlidingGallery.test.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jul 06, 2020
 * Updated  : Aug 23, 2021
 */

import React from 'react'

import { render, screen } from '@testing-library/react'

import renderer from 'react-test-renderer'

import ImageSlidingGallery from '../ImageSlidingGallery'

const slides=[
  {
    image: '',
    caption: "Researchers used the Tuxtla Statuette to decipher the epi-Olmec writing system, which represents both syllables and words",
    aspectRatio: {
      width: 1600,
      height: 900
    }
  },
  {
    image: '',
    caption: "Listen to a Tsimshian (Pacific Northwest Native) storyteller recount the family history painted on a 38-foot-long house front as specific parts of the design light up.",
    credit: "Image God",
    aspectRatio: {
      width: 1024,
      height: 736
    }
  }
];

test('renders ImageSlidingGallery component', () => {
  render(
    <ImageSlidingGallery
      slides={slides}
    />
  );

  const captionElement = screen.getByTestId("ImageSlidingGalleryCaptionPart");
  expect(captionElement).toBeInTheDocument();
  expect(captionElement.textContent).toBe(slides[0].caption);
});

test('ImageSlidingGallery component snapshot', () => {
  const tree = renderer
    .create(
      <ImageSlidingGallery
        slides={slides}
      />
    ).toJSON();
  expect(tree).toMatchSnapshot();
});
