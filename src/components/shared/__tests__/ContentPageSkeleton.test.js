/**
 * ContentPageSkeleton.test.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jul 06, 2020
 * Updated  : Aug 18, 2020
 */

import React from 'react'

import { render, screen } from '@testing-library/react'

import renderer from 'react-test-renderer'

import ContentPageSkeleton from '../ContentPageSkeleton'

import RouterWrapped from '../../../testing/RouterWrapped'

const pageProps = {
  coverImage: "",
  title: "Title",
  subtitle: "This is a subtitle",
  pageMenuItems: [
    {
      title: "Menu Item 1"
    },
    {
      title: "Menu Item 2"
    }
  ],
  pageTailNavMenu: {
    prevPage: {
      label: "Biology",
      href: "/biology"
    },
    nextPage: {
      label: "Future",
      href: "/future"
    }
  }
};

const contentPageIntro = {
  title: "This is a title",
  content: "This is some content",
  image: {
    filename: "cheetah-conservation-fund-logo-mini-min.jpg"
  }
};

const imagesContext = () => {
  return (imageName) => (null);
};

const renderInstance = () => (
  RouterWrapped(
    <ContentPageSkeleton
      pageProps={pageProps}
      contentPageIntro={contentPageIntro}
      imagesContext={imagesContext}
    />
  )
);

test('renders ContentPageSkeleton component', () => {
  render(
    renderInstance()
  );

  const component = screen.getByTestId("ContentPageSkeletonComponentTestId");
  expect(component).toBeInTheDocument();
});

test('ContentPageSkeleton snapshot', () => {
  const tree = renderer
    .create(
      renderInstance()
    ).toJSON();
  expect(tree).toMatchSnapshot();
});
