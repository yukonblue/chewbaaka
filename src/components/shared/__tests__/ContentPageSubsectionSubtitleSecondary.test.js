/**
 * ContentPageSubsectionSubtitleSecondary.test.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jul 26, 2020
 * Updated  : Jul 26, 2020
 */

import React from 'react'

import { render, screen } from '@testing-library/react'

import renderer from 'react-test-renderer'

import ContentPageSubsectionSubtitleSecondary from '../ContentPageSubsectionSubtitleSecondary'

const titleText = "Hello, World";

test('renders ContentPageSubsectionSubtitleSecondary component', () => {
  render(
    <ContentPageSubsectionSubtitleSecondary>
      {titleText}
    </ContentPageSubsectionSubtitleSecondary>
  );

  const titleElement = screen.getByText(titleText);
  expect(titleElement).toBeInTheDocument();
});

test('ContentPageSubsectionSubtitleSecondary component snapshot', () => {
  const tree = renderer
    .create(
      <ContentPageSubsectionSubtitleSecondary>
        {titleText}
      </ContentPageSubsectionSubtitleSecondary>
    ).toJSON();
  expect(tree).toMatchSnapshot();
});
