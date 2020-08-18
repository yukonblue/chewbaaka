/**
 * HistoryPageCheetahEvolutionMap.test.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Aug 17, 2020
 * Updated  : Aug 17, 2020
 */

import React from 'react'

import { render, screen } from '@testing-library/react'

import renderer from 'react-test-renderer'

import HistoryPageCheetahEvolutionMap from '../HistoryPageCheetahEvolutionMap'

import { RUN_TEST_NEVER } from '../../../testing/testing'

test('renders HistoryPageCheetahEvolutionMap component', () => {
  render(
    <HistoryPageCheetahEvolutionMap />
  );

  const expectedTitleText = "Map of Cheetah Evolution";

  const titleTextElement = screen.getByText(expectedTitleText);
  expect(titleTextElement).toBeInTheDocument();
});

/**
 * Skip this test for now.
 */
RUN_TEST_NEVER(() => {
  test('HistoryPageCheetahEvolutionMap component snapshot', () => {
    const tree = renderer
      .create(
        <HistoryPageCheetahEvolutionMap />
      ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
