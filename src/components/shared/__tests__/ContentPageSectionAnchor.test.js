/**
 * ContentPageSectionAnchor.test.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jul 07, 2020
 * Updated  : Jul 08, 2020
 */

import React from 'react';

import { render, screen } from '@testing-library/react';

import renderer from 'react-test-renderer';

import ContentPageSectionAnchor from '../ContentPageSectionAnchor';

import { ContentPageSectionTitleToAnchorId } from '../ContentPageSectionAnchor'

test('renders ContentPageSectionAnchor component', () => {
  const title = "Cheetah and Man";

  render(<ContentPageSectionAnchor title={title} />);

  const component = screen.getByTestId("ContentPageSectionAnchorComponentTestId");
  expect(component.id).toBe(ContentPageSectionTitleToAnchorId(title));
});

test('tests ContentPageSectionTitleToAnchorId', () => {
  const title     = "Cheetah and Man";
  const expected  = "cheetah-and-man";
  const result    = ContentPageSectionTitleToAnchorId(title);

  expect(result).toBe(expected);
});

test('ContentPageSectionAnchor component snapshot', () => {
  const title = "Cheetah and Man";

  const tree = renderer
    .create(
      <ContentPageSectionAnchor title={title} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
