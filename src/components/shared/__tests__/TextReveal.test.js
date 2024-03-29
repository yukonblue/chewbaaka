/**
 * TextReveal.test.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jul 04, 2020
 * Updated  : Jul 27, 2020
 */

import React from 'react'

import { render, screen } from '@testing-library/react'

import renderer from 'react-test-renderer'

import TextReveal from '../TextReveal'

const description = "Cheetah";

const coverImage = "https://cheetah.org/wp-content/uploads/2019/01/cheetah-conservation-fund-cheetah-fact-01.jpg";

test('renders TextReveal component', () => {
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

test('TextReveal component snapshot', () => {
  const tree = renderer
    .create(
      <TextReveal
        coverImage={coverImage}
        description={description}
      />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
