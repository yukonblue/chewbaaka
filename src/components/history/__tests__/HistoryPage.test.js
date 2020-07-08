/**
 * HistoryPage.test.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jul 07, 2020
 * Updated  : Jul 08, 2020
 */

import React from 'react';

import { render, screen } from '@testing-library/react';

import renderer from 'react-test-renderer';

import HistoryPage from '../HistoryPage';

test('renders HistoryPage', () => {
  render(<HistoryPage />);

  const pageHeadComponent = screen.getByText("History of the Cheetah");
  expect(pageHeadComponent).toBeInTheDocument();
});

test('HistoryPage component snapshot', () => {
  console.log(process.env);
  const tree = renderer
    .create(<HistoryPage />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
