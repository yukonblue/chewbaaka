/**
 * ContentPageSubsectionPart.test.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jul 26, 2020
 * Updated  : Jul 26, 2020
 */

import React from 'react'

import { render, screen } from '@testing-library/react'

import renderer from 'react-test-renderer'

import ContentPageSubsectionPart from '../ContentPageSubsectionPart'

const titleText = "Hello, World";

const bodyText = "This is some text.";

const renderChildren = () => (
  <div>
    <h1>{titleText}</h1>
    <p>{bodyText}</p>
  </div>
);

test('renders ContentPageSubsectionPart component', () => {
  render(
    <ContentPageSubsectionPart>
      {renderChildren()}
    </ContentPageSubsectionPart>
  );

  const titleElement = screen.getByText(titleText);
  expect(titleElement).toBeInTheDocument();

  const bodyTextElement = screen.getByText(bodyText);
  expect(bodyTextElement).toBeInTheDocument();
});

test('ContentPageSubsectionPart component snapshot', () => {
  const tree = renderer
    .create(
      <ContentPageSubsectionPart>
        {renderChildren()}
      </ContentPageSubsectionPart>
    ).toJSON();
  expect(tree).toMatchSnapshot();
});
