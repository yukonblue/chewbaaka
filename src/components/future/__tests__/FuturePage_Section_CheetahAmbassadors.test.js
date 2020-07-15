/**
 * FuturePage_Section_CheetahAmbassadors.test.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jul 14, 2020
 * Updated  : Jul 14, 2020
 */

import React from 'react'

import { render } from '@testing-library/react'

import { config } from '../config'

import renderer from 'react-test-renderer'

import FuturePageSectionCheetahAmbassadors from '../FuturePage_Section_CheetahAmbassadors'

test('renders FuturePageSectionCheetahAmbassadors component', () => {
  render(<FuturePageSectionCheetahAmbassadors config={config}/>);
});

test('FuturePageSectionCheetahAmbassadors component snapshot', () => {
  const tree = renderer
    .create(
      <FuturePageSectionCheetahAmbassadors config={config}/>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
