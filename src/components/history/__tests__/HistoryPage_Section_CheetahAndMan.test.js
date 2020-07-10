/**
 * HistoryPage_Section_CheetahAndMan.test.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jul 10, 2020
 * Updated  : Jul 10, 2020
 */

import React from 'react';

import { render } from '@testing-library/react';

import { config } from '../config'

import renderer from 'react-test-renderer';

import HistoryPageSectionCheetahAndMan from '../HistoryPage_Section_CheetahAndMan';

test('renders HistoryPageSectionCheetahAndMan component', () => {
  render(<HistoryPageSectionCheetahAndMan config={config}/>);
});

test('HistoryPageSectionCheetahAndMan component snapshot', () => {
  const tree = renderer
    .create(
      <HistoryPageSectionCheetahAndMan config={config}/>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
