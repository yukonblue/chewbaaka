/**
 * ExploreGatewayGridItem.test.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jul 02, 2020
 * Updated  : Jul 28, 2020
 */

import React from 'react'

import { render, screen } from '@testing-library/react'

import renderer from 'react-test-renderer'

import ExploreGatewayGridItem from '../ExploreGatewayGridItem'

const image = "https://cheetah.org/wp-content/uploads/2019/05/iwt_ancientindiancheetahhunt_1000-600-scaled.jpg";
const dstUrl = "https://cheetah.org/learn/illegal-pet-trade/";
const title = "History";

test('renders ExploreGatewayGridItem component', () => {
  render(
    <ExploreGatewayGridItem
      image={image}
      title={title}
      dstUrl={dstUrl}
    />
  );

  // Tests component title is present.
  const componentTitleElement = screen.getByText(title);
  expect(componentTitleElement).toBeInTheDocument();
  expect(componentTitleElement).toHaveTextContent(title);

  // Tests img element is present and have the correct 'src' attribute value.
  const componentImgElement = screen.getByTestId("ExploreGatewayGridItemImageTestId");
  expect(componentImgElement).toBeInTheDocument();
  expect(componentImgElement.src).toBe(image);

  // Tests anchor element is present points to the correct URL.
  const componentAnchorElement = screen.getByTestId("ExploreGatewayGridItemImageAnchorTestId");
  expect(componentAnchorElement).toBeInTheDocument();
  expect(componentAnchorElement.href).toBe(dstUrl);
});

test('ExploreGatewayGridItem component snapshot', () => {
  const tree = renderer
    .create(
      <ExploreGatewayGridItem
        image={image}
        title={title}
        dstUrl={dstUrl}
      />
    ).toJSON();
  expect(tree).toMatchSnapshot();
});
