/**
 * CheetahSkeletalAnatomyDiagram.test.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jul 16, 2020
 * Updated  : Jul 16, 2020
 */

import React from 'react'

import { render } from '@testing-library/react'

import renderer from 'react-test-renderer'

import CheetahSkeletalAnatomyDiagram from '../CheetahSkeletalAnatomyDiagram'

test('renders CheetahSkeletalAnatomyDiagram component', () => {
  render(
    <CheetahSkeletalAnatomyDiagram />
  );
});

test('CheetahSkeletalAnatomyDiagram component snapshot', () => {
  const tree = renderer
    .create(
      <CheetahSkeletalAnatomyDiagram />
    ).toJSON();
  expect(tree).toMatchSnapshot();
});
