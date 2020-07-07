/**
 * ImageSlidingGallery.test.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jul 06, 2020
 * Updated  : Jul 06, 2020
 */

import React from 'react';

import { render, screen } from '@testing-library/react';

import ImageSlidingGallery from '../ImageSlidingGallery';

test('renders ImageSlidingGallery component', () => {
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

  render(<ImageSlidingGallery slides={slides} /> );

  const captionElement = screen.getByTestId("ImageSlidingGalleryCaptionPart");
  expect(captionElement).toBeInTheDocument();
  expect(captionElement.textContent).toBe(slides[0].caption);
});
