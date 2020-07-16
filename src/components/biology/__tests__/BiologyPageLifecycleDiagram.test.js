/**
 * BiologyPageLifecycleDiagram.test.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jul 16, 2020
 * Updated  : Jul 16, 2020
 */

import React from 'react'

import { render } from '@testing-library/react'

import renderer from 'react-test-renderer'

import BiologyPageLifecycleDiagram from '../BiologyPageLifecycleDiagram'

test('renders BiologyPageLifecycleDiagram component', () => {
  render(
    <BiologyPageLifecycleDiagram />
  );
});

test('BiologyPageLifecycleDiagram component snapshot', () => {
  const tree = renderer
    .create(
      <BiologyPageLifecycleDiagram />
    ) .toJSON();
  expect(tree).toMatchSnapshot();
});
