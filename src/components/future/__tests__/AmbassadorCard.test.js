/**
 * AmbassadorCard.test.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jun 05, 2022
 * Updated  : Jun 05, 2022
 */

import React from 'react'

import { render } from '@testing-library/react'

import { config } from '../config'

import renderer from 'react-test-renderer'

import AmbassadorCard from '../AmbassadorCard'

const image = "https://sotinpc.files.wordpress.com/2013/04/day-of-rememberance.jpg";

const card = (
  <AmbassadorCard
    image={image}
    name="Chewbaaka"
    date="2022"
    description="Hello I am Chewbaaka"
  />
);

test('renders AmbassadorCard component', () => {
  render(
    card
  );
});

test('AmbassadorCard component snapshot', () => {
  const tree = renderer
    .create(
      card
    ).toJSON();
  expect(tree).toMatchSnapshot();
});
