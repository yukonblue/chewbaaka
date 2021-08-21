/**
 * BiologyPage_Section_Lifecycle.test.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jul 15, 2020
 * Updated  : Aug 21, 2021
 */

import React from 'react'

import { render } from '@testing-library/react'

import { config } from '../config'

import renderer from 'react-test-renderer'

import BiologyPageSectionLifecyle from '../BiologyPage_Section_Lifecycle'

test('renders BiologyPageSectionLifecyle component', () => {
  render(<BiologyPageSectionLifecyle config={config}/>);
});

test('BiologyPageSectionLifecyle component snapshot', () => {
  const tree = renderer
    .create(
      <BiologyPageSectionLifecyle config={config}/>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
