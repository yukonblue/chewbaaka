/**
 * ImageRevealDetailedWithTextCover.test.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jul 05, 2020
 * Updated  : Jul 08, 2020
 */

import React from 'react';

import { render, screen } from '@testing-library/react';

import renderer from 'react-test-renderer';

import ImageRevealDetailedWithTextCover from '../ImageRevealDetailedWithTextCover';

import contentImage from '../assets/cheetah-conservation-fund-30-logo.svg'

const title       = "Acinonyx jubatus";
const description = "Cheetah";

test('renders ImageRevealDetailedWithTextCover component', () => {
  render(
    <ImageRevealDetailedWithTextCover
      title={title}
      contentImage={contentImage}
      description={description}
    />
  );

  const imageRevealComponent = screen.getByTestId('ImageRevealDetailedWithTextCoverComponentTestId');
  expect(imageRevealComponent).toBeInTheDocument();

  // Tests visible part.
  const imageRevealComponentVisiblePart = screen.getByTestId('ImageRevealDetailedWithTextCoverComponentVisiblePartTestId');
  expect(imageRevealComponentVisiblePart).toBeInTheDocument();

  // Tests hidden part.
  const imageRevealComponentHiddenPart = screen.getByTestId('ImageRevealDetailedWithTextCoverComponentHiddenPartTestId');
  expect(imageRevealComponentHiddenPart).toBeInTheDocument();

  // Tests description text part.
  const imageRevealComponentTextDescriptionPart = screen.getByTestId('ImageRevealDetailedWithTextCoverComponentDescriptionTextPartTestId');
  expect(imageRevealComponentTextDescriptionPart).toBeInTheDocument();
  expect(imageRevealComponentTextDescriptionPart.textContent).toBe(description);

  // TODO: test component props.
});

test('ImageRevealDetailedWithTextCover component snapshot', () => {
  const tree = renderer
    .create(
      <ImageRevealDetailedWithTextCover
        title={title}
        contentImage={contentImage}
        description={description}
      />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
