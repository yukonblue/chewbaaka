/**
 * CircularImageButton.test.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jul 06, 2020
 * Updated  : Jul 08, 2020
 */

import React from 'react';

import { render, screen } from '@testing-library/react';

import renderer from 'react-test-renderer';

import CircularImageButton from '../CircularImageButton';

const title = "Cheetahology";
const image = "https://cheetah.org/wp-content/uploads/2019/01/cheetah-conservation-fund-cheetah-fact-01.jpg";
const href  = "https://cheetah.org/wp-content/uploads/2019/01/cheetah-conservation-fund-cheetah-fact-01.jpg";

test('renders CircularImageButton component', () => {
  render(
    <CircularImageButton
      title={title}
      image={image}
      href={href}
    />
  );

  const titleElement = screen.getByText(title);
  expect(titleElement).toBeInTheDocument();
});

test('CircularImageButton component snapshot', () => {
  const tree = renderer
    .create(
      <CircularImageButton
        title={title}
        image={image}
        href={href}
      />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
