/**
 * StatsLabel.test.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jul 25, 2020
 * Updated  : Jul 25, 2020
 */

import React from 'react'

import { render, screen } from '@testing-library/react'

import renderer from 'react-test-renderer';

import StatsLabel from '../StatsLabel';

const value = "2020";
const label = "CCF turned 30";

test('renders StatsLabel component', () => {
  render(
    <StatsLabel
      value={value}
      label={label}
      color="orange"
    />
  );

  const valueElement = screen.getByText(value);
  expect(valueElement).toBeInTheDocument();

  const labelElement = screen.getByText(label);
  expect(labelElement).toBeInTheDocument();
});

test('StatsLabel component snapshot', () => {
  const tree = renderer
    .create(
      <StatsLabel
        value={value}
        label={label}
        color="orange"
      />
    ).toJSON();
  expect(tree).toMatchSnapshot();
});
