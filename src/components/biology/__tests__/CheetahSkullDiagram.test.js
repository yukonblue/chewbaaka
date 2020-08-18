/**
 * CheetahSkullDiagram.test.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Aug 17, 2020
 * Updated  : Aug 17, 2020
 */

import React from 'react'

import { render } from '@testing-library/react'

import renderer from 'react-test-renderer'

import CheetahSkullDiagram from '../CheetahSkullDiagram'

test('renders CheetahSkullDiagram component', () => {
  render(
    <CheetahSkullDiagram />
  );
});

test('CheetahSkullDiagram component snapshot', () => {
  const tree = renderer
    .create(
      <CheetahSkullDiagram />
    ).toJSON();
  expect(tree).toMatchSnapshot();
});
