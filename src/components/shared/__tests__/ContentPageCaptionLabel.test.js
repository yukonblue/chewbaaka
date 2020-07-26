/**
 * ContentPageCaptionLabel.test.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jul 26, 2020
 * Updated  : Jul 26, 2020
 */

import React from 'react'

import { render, screen } from '@testing-library/react'

import renderer from 'react-test-renderer'

import ContentPageCaptionLabel from '../ContentPageCaptionLabel'

const text = "This is a caption label.";

test('renders ContentPageCaptionLabel component', () => {
  render(
    <ContentPageCaptionLabel>
      {text}
    </ContentPageCaptionLabel>
  );

  const textElement = screen.getByText(text);
  expect(textElement).toBeInTheDocument();
});

test('ContentPageCaptionLabel component snapshot', () => {
  const tree = renderer
    .create(
      <ContentPageCaptionLabel>
        {text}
      </ContentPageCaptionLabel>
    ).toJSON();
  expect(tree).toMatchSnapshot();
});
