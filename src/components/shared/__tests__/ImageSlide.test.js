/**
 * ImageSlide.test.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jul 05, 2020
 * Updated  : Jul 08, 2020
 */

import React from 'react';

import { render, screen } from '@testing-library/react';

import renderer from 'react-test-renderer';

import ImageSlide from '../ImageSlide';

import image01 from '../assets/cheetah-conservation-fund-logo.jpg'
import image02 from '../assets/cheetah-conservation-fund-30-logo.svg'

const title             =   "Cheetah evolution";
const labels            =   ["image01", "image02"];
const sliderBeginLabel  =   "Start";
const sliderEndLabel    =   "Finish";
const caption           =   "Slide to see change";

test('renders ImageSlide component', () => {
  render(
          <ImageSlide
            images={[image01, image02]}
            labels={labels}
            title={title}
            sliderBeginLabel={sliderBeginLabel}
            sliderEndLabel={sliderEndLabel}
            caption={caption}
          />
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

  // Tests slider component part.
  const imageSlideComponentSliderPart = screen.getByTestId("ImageSlideComponentSliderPartTestId");
  expect(imageSlideComponentSliderPart).toBeInTheDocument();

  // Tests label component part.
  const imageSlideComponentLabelPart = screen.getByTestId("ImageSlideComponentLabelPartTestId");
  expect(imageSlideComponentLabelPart).toBeInTheDocument();
  expect(imageSlideComponentLabelPart.textContent).toBe(labels[0]);

  // Tests slider begin label component part.
  const imageSlideComponentSliderBeginLabelPart = screen.getByTestId("ImageSlideComponentSliderBeginLabelPartTestId");
  expect(imageSlideComponentSliderBeginLabelPart).toBeInTheDocument();
  expect(imageSlideComponentSliderBeginLabelPart.textContent).toBe(sliderBeginLabel);

  // Tests slider end label component part.
  const imageSlideComponentSliderEndLabelPart = screen.getByTestId("ImageSlideComponentSliderEndLabelPartTestId");
  expect(imageSlideComponentSliderEndLabelPart).toBeInTheDocument();
  expect(imageSlideComponentSliderEndLabelPart.textContent).toBe(sliderEndLabel);

  // Tests caption component part.
  const imageSlideComponentCaptionPart = screen.getByTestId("ImageSlideComponentCaptionPartTestId");
  expect(imageSlideComponentCaptionPart).toBeInTheDocument();
  expect(imageSlideComponentCaptionPart.textContent).toBe(caption);
});

test('ImageSlide component snapshot', () => {
  const tree = renderer
    .create(
      <ImageSlide
        images={[image01, image02]}
        labels={labels}
        title={title}
        sliderBeginLabel={sliderBeginLabel}
        sliderEndLabel={sliderEndLabel}
        caption={caption}
      />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
