/**
 * ContentPageRegularUnorderedList.test.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Aug 17, 2020
 * Updated  : Aug 17, 2020
 */

import React from 'react'

import { render, screen } from '@testing-library/react'

import renderer from 'react-test-renderer'

import ContentPageRegularUnorderedList from '../ContentPageRegularUnorderedList'

const listItems = [
  "This is an item",
  "This is another item"
];

test('renders ContentPageRegularUnorderedList component', () => {
  render(
    <ContentPageRegularUnorderedList
      obj={listItems}
    />
  );

  for (const [_, listItem] of listItems.entries()) {
    const itemTextElement = screen.getByText(listItem);
    expect(itemTextElement).toBeInTheDocument();
  }
});

test('ContentPageRegularUnorderedList component snapshot', () => {
  const tree = renderer
    .create(
      <ContentPageRegularUnorderedList
        obj={listItems}
      />
    ).toJSON();
  expect(tree).toMatchSnapshot();
});
