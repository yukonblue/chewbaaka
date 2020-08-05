/**
 * ImageSlideModal.test.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jul 05, 2020
 * Updated  : Aug 05, 2020
 */

import React from 'react'

import { render, screen } from '@testing-library/react'

import renderer from 'react-test-renderer'

import ImageSlideModal from '../ImageSlideModal'

import image01 from '../assets/cheetah-conservation-fund-logo-mini-min.jpg'
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

test('ImageSlideModal component snapshot', () => {
  const tree = renderer
    .create(
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
      />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
