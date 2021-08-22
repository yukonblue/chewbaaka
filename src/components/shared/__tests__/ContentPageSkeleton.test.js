/**
 * ContentPageSkeleton.test.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jul 06, 2020
 * Updated  : Aug 22, 2021
 */

import React from 'react'

import { render, screen } from '@testing-library/react'

import renderer from 'react-test-renderer'

import ContentPageSkeleton from '../ContentPageSkeleton'

import RouterWrapped from '../../../testing/RouterWrapped'

const appConfig = {
  headMeta:{
    keywords: [
      "HTML head meta keyword shared 1",
      "HTML head meta keyword shared 2",
      "HTML head meta keyword shared 3",
    ]
  }
};

const pageConfig = {
  headMeta: {
    title: "HTML head meta title",
    description: "This is HTML head meta description.",
    keywords: [
      "HTML head meta keyword 1",
      "HTML head meta keyword 2",
      "HTML head meta keyword 3",
    ]
  },
  pageProps: {
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
  },
  contentPageIntro: {
    title: "This is a title",
    content: "This is some content",
    image: {
      filenamePrefix: "cheetah-conservation-fund-logo-mini-min",
      aspectRatio: {
        width: 410,
        height: 200
      }
    }
  }
};

const imagesContext = () => {
  return (imageName) => (null);
};

const renderInstance = () => (
  RouterWrapped(
    <ContentPageSkeleton
      appConfig={appConfig}
      pageConfig={pageConfig}
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
