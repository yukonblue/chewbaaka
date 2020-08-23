/**
 * ContentPageHead.test.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jul 06, 2020
 * Updated  : Aug 22, 2020
 */

import React from 'react'

import { render, screen } from '@testing-library/react'

import renderer from 'react-test-renderer'

import ContentPageHead from '../ContentPageHead'

import RouterWrapped from '../../../testing/RouterWrapped'

const coverImageNamePrefix = "My_Cover_Image";
const title = "Page Title";
const subtitle = "Page Subtitle";

const pageProps = {
  coverImageNamePrefix: coverImageNamePrefix,
  title: title,
  subtile: subtitle
};

test('renders ContentPageHead component', () => {
  render(
    RouterWrapped(
      <ContentPageHead
        pageProps={pageProps}
      />
    )
  );

  const component = screen.getByTestId("ContentPageHeadComponentTestId");
  expect(component).toBeInTheDocument();
});

test('ContentPageHead component snapshot', () => {
  const tree = renderer
    .create(
      RouterWrapped(
        <ContentPageHead
          pageProps={pageProps}
        />
      )
    ).toJSON();
  expect(tree).toMatchSnapshot();
});
