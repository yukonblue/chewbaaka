/**
 * HistoryPage_Section_Evolution.test.js
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

import HistoryPageSectionEvolution from '../HistoryPage_Section_Evolution';

test('renders HistoryPageSectionEvolution component', () => {
  render(<HistoryPageSectionEvolution config={config}/>);
});

test('HistoryPageSectionEvolution component snapshot', () => {
  const tree = renderer
    .create(
      <HistoryPageSectionEvolution config={config}/>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
