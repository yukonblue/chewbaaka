/**
 * PopUpLabelledDiagram.test.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jul 16, 2020
 * Updated  : Aug 05, 2020
 */

import React from 'react'

import { render } from '@testing-library/react'

import renderer from 'react-test-renderer'

import PopUpLabelledDiagram from '../PopUpLabelledDiagram'

import image from '../assets/cheetah-conservation-fund-logo-mini-min.jpg'

const __ITEMS__ = [
  {
    title: "Title 1",
    content: "Hello. This is a regular pop-up which does not allow for lots of content. You cannot fit a lot of words here as the paragraphs will be pretty narrow.",
    position: {
      top: 100,
      left: 30
    }
  },
  {
    title: "Title 2",
    content: "This is another item"
  }
];

test('renders PopUpLabelledDiagram component', () => {
  render(
    <PopUpLabelledDiagram
      image={image}
      width={1814}
      height={1043}
      items={__ITEMS__}
    />
  );
});

test('PopUpLabelledDiagram component snapshot', () => {
  const tree = renderer
    .create(
      <PopUpLabelledDiagram
        image={image}
        width={1814}
        height={1043}
        items={__ITEMS__}
      />
    ).toJSON();
  expect(tree).toMatchSnapshot();
});
