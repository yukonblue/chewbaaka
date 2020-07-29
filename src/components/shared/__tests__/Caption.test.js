/**
 * Caption.test.css
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jul 09, 2020
 * Updated  : Jul 29, 2020
 */

import React from 'react'

import { render, screen } from '@testing-library/react'

import renderer from 'react-test-renderer'

import Caption from '../Caption'

const caption = "This is a caption";

test('renders Caption component', () => {
  render(
    <Caption
      caption={caption}
    />
  );

  const captionElement = screen.getByTestId("CaptionComponentTestId");
  expect(captionElement).toBeInTheDocument();
  expect(captionElement.textContent).toBe(caption);
});

test('Caption component snapshot', () => {
  const tree = renderer
    .create(
      <Caption
        caption={caption}
      />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
