/**
 * CheetahOlympics.test.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jul 19, 2020
 * Updated  : Jul 19, 2020
 */

import React from 'react'

import { render } from '@testing-library/react'

import renderer from 'react-test-renderer'

import CheetahOlympics from '../CheetahOlympics'

test('renders CheetahOlympics component', () => {
  render(
    <CheetahOlympics />
  );
});

test('CheetahOlympics component snapshot', () => {
  const tree = renderer
    .create(
      <CheetahOlympics />
    ).toJSON();
  expect(tree).toMatchSnapshot();
});
