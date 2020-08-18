/**
 * MediaEmbed.test.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Aug 17, 2020
 * Updated  : Aug 17, 2020
 */

import React from 'react'

import { render } from '@testing-library/react'

import renderer from 'react-test-renderer'

import MediaEmbed from '../MediaEmbed'

const title = "This is a title";
const width = 480;
const height = 320;
const src = "https://www.youtube.com/watch?v=IRAbmfnrkL8";

test('renders MediaEmbed component', () => {
  render(
    <MediaEmbed
      title={title}
      width={width}
      height={height}
      src={src}
    />
  );
});

test('MediaEmbed component snapshot', () => {
  const tree = renderer
    .create(
      <MediaEmbed
        title={title}
        width={width}
        height={height}
        src={src}
      />
    ).toJSON();
  expect(tree).toMatchSnapshot();
});
