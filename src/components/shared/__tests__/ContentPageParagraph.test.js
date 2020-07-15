/**
 * ContentPageParagraph.test.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jul 14, 2020
 * Updated  : Jul 14, 2020
 */

import React from 'react'

import { render, screen } from '@testing-library/react'

import renderer from 'react-test-renderer'

import ContentPageParagraph from '../ContentPageParagraph'

const content = "Hello, World. This is a ContentPageParagraph component";

test('renders ContentPageParagraph component', () => {
  render(
    <ContentPageParagraph>
      {content}
    </ContentPageParagraph>
  );

  const component = screen.getByText(content);
  expect(component).toBeInTheDocument();

  expect(component.classList.contains("ContentPageContentParagraphText")).toBe(true);
});

test('ContentPageParagraph component snapshot', () => {
  const tree = renderer
    .create(
      <ContentPageParagraph>
        {content}
      </ContentPageParagraph>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
