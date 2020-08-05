/**
 * FluidTwoColumnContainer.test.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Aug 04, 2020
 * Updated  : Aug 04, 2020
 */

import React from 'react'

import { render, screen } from '@testing-library/react'

import renderer from 'react-test-renderer'

import FluidTwoColumnContainer from '../FluidTwoColumnContainer'

const lhsColumnText = "This is the LHS column.";
const rhsColumnText = "This is the RHS column.";

test('renders FluidTwoColumnContainer component', () => {
  render(
    <FluidTwoColumnContainer
      lhsColumn={
        <p>{lhsColumnText}</p>
      }
      rhsColumn={
        <p>{rhsColumnText}</p>
      }
    />
  );

  const lhsColumnTextElement = screen.getByText(lhsColumnText);
  expect(lhsColumnTextElement).toBeInTheDocument();

  const rhsColumnTextElement = screen.getByText(rhsColumnText);
  expect(rhsColumnTextElement).toBeInTheDocument();
});

test('FluidTwoColumnContainer component snapshot', () => {
  const tree = renderer
    .create(
      <FluidTwoColumnContainer
        lhsColumn={
          <p>{lhsColumnText}</p>
        }
        rhsColumn={
          <p>{rhsColumnText}</p>
        }
      />
    ).toJSON();
  expect(tree).toMatchSnapshot();
});
