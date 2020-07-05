/**
 * ImageSlideModal.test.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jul 05, 2020
 * Updated  : Jul 05, 2020
 */

import React from 'react';

import { render, screen } from '@testing-library/react';

import ImageSlideModal from '../ImageSlideModal';

import image01 from '../assets/cheetah-conservation-fund-logo.jpg'
import image02 from '../assets/cheetah-conservation-fund-30-logo.svg'

test('renders ImageSlideModal component', () => {
  render(
    <ImageSlideModal
      slides={[
        {
          image: image01,
          title: "Acinonyx jubatus",
          description: "This is the cheetah."
        },
        {
          image: image02,
          title: "Cheeeeeetah",
          description: "Fastest land animal on earth!"
        }
      ]}
    />
  );

  const componentCoverImageContainerDivPart = screen.getByTestId("ImageSlideModalComponentCoverImageContainerDivTestId");
  expect(componentCoverImageContainerDivPart).toBeInTheDocument();
});
