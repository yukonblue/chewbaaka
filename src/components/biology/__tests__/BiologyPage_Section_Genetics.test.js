/**
 * BiologyPage_Section_Genetics.test.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jul 19, 2020
 * Updated  : Jul 19, 2020
 */

import React from 'react'

import { render } from '@testing-library/react'

import { config } from '../config'

import renderer from 'react-test-renderer'

import BiologyPageSectionGenetics from '../BiologyPage_Section_Genetics'

test('renders BiologyPageSectionGenetics component', () => {
  render(<BiologyPageSectionGenetics config={config}/>);
});

test('BiologyPageSectionGenetics component snapshot', () => {
  const tree = renderer
    .create(
      <BiologyPageSectionGenetics config={config}/>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
