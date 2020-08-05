/**
 * ImageSlide.test.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jul 05, 2020
 * Updated  : Aug 05, 2020
 */

import React from 'react'

import { render, screen } from '@testing-library/react'

import renderer from 'react-test-renderer'

import ImageSlide from '../ImageSlide'

import { RUN_TEST_NEVER } from '../../../testing/testing'

import image01 from '../assets/cheetah-conservation-fund-logo-mini-min.jpg'
import image02 from '../assets/cheetah-conservation-fund-30-logo.svg'

const title             =   "Cheetah evolution";
const sliderNameLabel   =   "Timeline";
const sliderUnitLabel   =   "mya";
const caption           =   "Slide to see change";
const marks             =   [
                              {
                                value: 0,
                                label: '150',
                                image: image01
                              },
                              {
                                value: 25,
                                label: '100',
                                image: image02
                              }
                            ];

test('renders ImageSlide component', () => {
  render(
    <ImageSlide
      title={title}
      sliderNameLabel={sliderNameLabel}
      sliderUnitLabel={sliderUnitLabel}
      caption={caption}
      marks={marks}
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
  expect(imageSlideComponentLabelPart.textContent).toBe(marks[0].label);

  // Tests slider name label component part.
  const imageSlideComponentSliderNameLabelPart = screen.getByTestId("ImageSlideComponentSliderNameLabelPartTestId");
  expect(imageSlideComponentSliderNameLabelPart).toBeInTheDocument();
  expect(imageSlideComponentSliderNameLabelPart.textContent).toBe(sliderNameLabel);

  // Tests slider unit label component part.
  const imageSlideComponentSliderUnitLabelPart = screen.getByTestId("ImageSlideComponentSliderUnitLabelPartTestId");
  expect(imageSlideComponentSliderUnitLabelPart).toBeInTheDocument();
  expect(imageSlideComponentSliderUnitLabelPart.textContent).toBe(sliderUnitLabel);

  // Tests caption component part.
  const imageSlideComponentCaptionPart = screen.getByText(caption);
  expect(imageSlideComponentCaptionPart).toBeInTheDocument();
});

/**
 * Skip this test for now.
 */
RUN_TEST_NEVER(() => {
  test('ImageSlide component snapshot', () => {
    const tree = renderer
      .create(
        <ImageSlide
          title={title}
          sliderNameLabel={sliderNameLabel}
          sliderUnitLabel={sliderUnitLabel}
          caption={caption}
          marks={marks}
        />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
