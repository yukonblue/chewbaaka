/**
 * ImageSlideDiscrete.test.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jul 04, 2020
 * Updated  : Jul 08, 2020
 */

import React from 'react';

import { render, screen } from '@testing-library/react';

import renderer from 'react-test-renderer';

import ImageSlideDiscrete from '../ImageSlideDiscrete';

import image01 from '../assets/cheetah-conservation-fund-logo.jpg'
import image02 from '../assets/cheetah-conservation-fund-30-logo.svg'

const title = "Cheetah evolution";

test('renders ImageSlideDiscrete component', () => {
  render(
          <ImageSlideDiscrete images={[image01, image02]}
          labels={["image01", "image02"]}
          percentages={[0, 20,100]} title={title}
          decrementButtonLabel="backward"
          incrementButtonLabel="forward"/>
  );

  const imageSlideComponent = screen.getByTestId("ImageSlideDiscreteComponentTestId");
  expect(imageSlideComponent).toBeInTheDocument();

  // Tests title component part.
  const imageSlideComponentTitlePart = screen.getByTestId("ImageSlideDiscreteComponentTitlePartTestId");
  expect(imageSlideComponentTitlePart).toBeInTheDocument();
  expect(imageSlideComponentTitlePart.textContent).toBe(title);

  // Tests img component part.
  const imageSlideComponentImgPart = screen.getByTestId("ImageSlideDiscreteComponentImgPartTestId");
  expect(imageSlideComponentImgPart).toBeInTheDocument();

  // Tests progress indicator component part.
  const imageSlideComponentProgressIndicatorPart = screen.getByTestId("ImageSlideDiscreteComponentProgressIndicatorPartTestId");
  expect(imageSlideComponentProgressIndicatorPart).toBeInTheDocument();

  // Tests decrement button component part.
  const imageSlideComponentDecrementButton = screen.getByTestId("ImageSlideDiscreteComponentDecrementButtonPartTestId");
  expect(imageSlideComponentDecrementButton).toBeInTheDocument();

  // Tests increment button component part.
  const imageSlideComponentIncrementButton = screen.getByTestId("ImageSlideDiscreteComponentIncrementButtonPartTestId");
  expect(imageSlideComponentIncrementButton).toBeInTheDocument();
});

test('ImageSlideDiscrete component snapshot', () => {
  const tree = renderer
    .create(
      <ImageSlideDiscrete
        images={[image01, image02]}
        labels={["image01", "image02"]}
        percentages={[0, 20,100]} title={title}
        decrementButtonLabel="backward"
        incrementButtonLabel="forward"
      />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
