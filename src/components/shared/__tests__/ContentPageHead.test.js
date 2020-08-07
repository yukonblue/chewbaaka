/**
 * ContentPageHead.test.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jul 06, 2020
 * Updated  : Aug 06, 2020
 */

import React from 'react'

import { render, screen } from '@testing-library/react'

import renderer from 'react-test-renderer'

import ContentPageHead from '../ContentPageHead'

import RouterWrapped from '../../../testing/RouterWrapped'

const coverImage="";
const title="Page Title";
const subtitle="Page Subtitle";

const pageProps = {
  coverImage: coverImage,
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
