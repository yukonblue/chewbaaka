/**
 * ImageSlide.test.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jul 04, 2020
 * Updated  : Jul 04, 2020
 */

import React from 'react';

import { render, screen } from '@testing-library/react';

import ImageSlide from '../ImageSlide';

import image01 from '../assets/cheetah-conservation-fund-logo.jpg'
import image02 from '../assets/cheetah-conservation-fund-30-logo.svg'

test('renders ImageSlide compoent', () => {

  const title = "Cheetah evolution";

  render(
          <ImageSlide images={[image01, image02]}
          labels={["image01", "image02"]}
          percentages={[0, 20,100]} title={title}
          decrementButtonLabel="backward"
          incrementButtonLabel="forward"/>
  );

  const imageSlideComponent = screen.getByTestId("ImageSlideComponentTestId");
  expect(imageSlideComponent).toBeInTheDocument();

  // Tests title component part.
  const imageSlideComponentTitlePart = screen.getByTestId("ImageSlideComponentTitlePartTestId");
  expect(imageSlideComponentTitlePart).toBeInTheDocument();
  expect(imageSlideComponentTitlePart.textContent).toBe(title);

  // Tests img component part.
  const imageSlideComponentImgPart = screen.getByTestId("ImageSlideComponentImgPartTestId");
  expect(imageSlideComponentImgPart).toBeInTheDocument();

  // Tests progress indicator component part.
  const imageSlideComponentProgressIndicatorPart = screen.getByTestId("ImageSlideComponentProgressIndicatorPartTestId");
  expect(imageSlideComponentProgressIndicatorPart).toBeInTheDocument();

  // Tests decrement button component part.
  const imageSlideComponentDecrementButton = screen.getByTestId("ImageSlideComponentDecrementButtonPartTestId");
  expect(imageSlideComponentDecrementButton).toBeInTheDocument();

  // Tests increment button component part.
  const imageSlideComponentIncrementButton = screen.getByTestId("ImageSlideComponentIncrementButtonPartTestId");
  expect(imageSlideComponentIncrementButton).toBeInTheDocument();
});
