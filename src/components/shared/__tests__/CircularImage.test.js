/**
 * CircularImage.test.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jul 07, 2020
 * Updated  : Jul 08, 2020
 */

import React from 'react';

import { render, screen } from '@testing-library/react';

import renderer from 'react-test-renderer';

import CircularImage from '../CircularImage';

const title = "Chewbaaka";
const image = "https://sotinpc.files.wordpress.com/2013/04/day-of-rememberance.jpg";

test('renders CircularImage component', () => {
  render(
    <CircularImage
      title={title}
      image={image}
    />
  );

  const titleElement = screen.getByText(title);
  expect(titleElement).toBeInTheDocument();
});

test('CircularImage component snapshot', () => {
  const tree = renderer
    .create(<CircularImage title={title} image={image} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
