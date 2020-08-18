/**
 * ContentPageAlarmBanner.test.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Aug 17, 2020
 * Updated  : Aug 17, 2020
 */

import React from 'react'

import { render, screen } from '@testing-library/react'

import renderer from 'react-test-renderer'

import ContentPageAlarmBanner from '../ContentPageAlarmBanner'

const contentText = "This is an instance of `ContentPageAlarmBanner` component";

test('renders ContentPageAlarmBanner component', () => {
  render(
    <ContentPageAlarmBanner>
      {contentText}
    </ContentPageAlarmBanner>
  );

  const contentTextElement = screen.getByText(contentText);
  expect(contentTextElement).toBeInTheDocument();
});

test('ContentPageAlarmBanner component snapshot', () => {
  const tree = renderer
    .create(
      <ContentPageAlarmBanner>
        {contentText}
      </ContentPageAlarmBanner>
    ).toJSON();
  expect(tree).toMatchSnapshot();
});
