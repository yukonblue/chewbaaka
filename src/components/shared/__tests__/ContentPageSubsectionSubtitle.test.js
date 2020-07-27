/**
 * ContentPageSubsectionSubtitle.test.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jul 26, 2020
 * Updated  : Jul 26, 2020
 */

import React from 'react'

import { render, screen } from '@testing-library/react'

import renderer from 'react-test-renderer'

import ContentPageSubsectionSubtitle from '../ContentPageSubsectionSubtitle'

const titleText = "Hello, World";

test('renders ContentPageSubsectionSubtitle component', () => {
  render(
    <ContentPageSubsectionSubtitle>
      {titleText}
    </ContentPageSubsectionSubtitle>
  );

  const titleElement = screen.getByText(titleText);
  expect(titleElement).toBeInTheDocument();
});

test('ContentPageSubsectionSubtitle component snapshot', () => {
  const tree = renderer
    .create(
      <ContentPageSubsectionSubtitle>
        {titleText}
      </ContentPageSubsectionSubtitle>
    ).toJSON();
  expect(tree).toMatchSnapshot();
});
