/**
 * HintSignpost.test.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jul 07, 2020
 * Updated  : Jul 08, 2020
 */

import React from 'react';

import { render, screen } from '@testing-library/react';

import renderer from 'react-test-renderer';

import HintSignpost from '../HintSignpost';

const hintText = "Hover over images below to reveal the genres";

test('renders HintSignpost component', () => {
  render(
    <HintSignpost hintText={hintText} />
  );

  const labelElement = screen.getByText(hintText);
  expect(labelElement).toBeInTheDocument();
});

test('HintSignpost component snapshot', () => {
  const tree = renderer
    .create(
      <HintSignpost hintText={hintText} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
