/**
 * TextReveal.test.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jul 04, 2020
 * Updated  : Jul 04, 2020
 */

import React from 'react';

import { render, screen } from '@testing-library/react';

import TextReveal from '../TextReveal';

import coverImage from '../assets/cheetah-conservation-fund-cheetah-fact-01.jpg'

test('renders TextReveal component', () => {
  const description = "Cheetah";

  render(
    <TextReveal
      coverImage={coverImage}
      description={description}
    />
  );

  const component = screen.getByTestId('TextRevealComponentTestId');
  expect(component).toBeInTheDocument();

  // Tests visible part.
  const componentVisiblePart = screen.getByTestId('TextRevealComponentVisiblePartTestId');
  expect(componentVisiblePart).toBeInTheDocument();

  // Tests hidden part.
  const componentHiddenPart = screen.getByTestId('TextRevealComponentHiddenPartTestId');
  expect(componentHiddenPart).toBeInTheDocument();

  // Tests description text part.
  const componentTextDescriptionPart = screen.getByTestId('TextRevealComponentDescriptionTextPartTestId');
  expect(componentTextDescriptionPart).toBeInTheDocument();
  expect(componentTextDescriptionPart.textContent).toBe(description);

  // TODO: test component props.
});
