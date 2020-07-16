/**
 * ContentPageSubsectionContentBinder.test.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jul 15, 2020
 * Updated  : Jul 15, 2020
 */

import React from 'react'

import renderer from 'react-test-renderer';

import {
  ContentPageSubsectionParagraphsContentBinder,
  ContentPageSubsectionColumnDataBinderWithParagraphsContentBinder
} from '../ContentPageSubsectionContentBinder'

const paragraphContents = {
  paragraph_01: "Hello, World!",
  paragraph_02: "Cheetahs are such amazing animals!",
  paragraph_03: "We need to do our best to save them."
}

const columnData = {
  title: "Title",
  subtitle: "This is a subtitle",
  content: paragraphContents
}

test('ContentPageSubsectionParagraphsContentBinder snapshot', () => {
  const tree = renderer
    .create(
      <div>
        {ContentPageSubsectionParagraphsContentBinder(paragraphContents)}
      </div>
    ).toJSON();
  expect(tree).toMatchSnapshot();
});

test('ContentPageSubsectionColumnDataBinderWithParagraphsContentBinder snapshot', () => {
  const renderedColumnData = ContentPageSubsectionColumnDataBinderWithParagraphsContentBinder(columnData);

  expect(renderedColumnData.title).toBe(columnData.title);
  expect(renderedColumnData.subtitle).toBe(columnData.subtitle);

  const tree = renderer
    .create(
      <div>
        {renderedColumnData.content}
      </div>
    ).toJSON();
  expect(tree).toMatchSnapshot();
});
