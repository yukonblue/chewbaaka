/**
 * HistoryPage.test.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jul 07, 2020
 * Updated  : Jul 07, 2020
 */

import React from 'react';

import { render, screen } from '@testing-library/react';

import HistoryPage from '../HistoryPage';

test('renders HistoryPage', () => {
  render(<HistoryPage />);

  const pageHeadComponent = screen.getByText("History of the Cheetah");
  expect(pageHeadComponent).toBeInTheDocument();
});
