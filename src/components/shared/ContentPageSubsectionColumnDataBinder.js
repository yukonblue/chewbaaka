/**
 * ContentPageSubsectionColumnDataBinder.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jul 10, 2020
 * Updated  : Jul 14, 2020
 */

import React from 'react';

import ContentPageParagraph from './ContentPageParagraph'

import './ContentPageSharedStyles.css'

function ContentPageSubsectionColumnDataBinder(columnData, columnContentBinder) {
  return {
    title: columnData.title,
    subtitle: columnData.subtitle,
    content: columnContentBinder(columnData.content)
  };
}

const ContentPageSubsectionColumnParagraphsContentBinder = (columnDataContent) => (
  Object.keys(columnDataContent).map(
    (key, idx) => (
      <ContentPageParagraph key={idx}>
        {columnDataContent[key]}
      </ContentPageParagraph>
    )
  )
);

const ContentPageSubsectionColumnDataBinderWithParagraphBinder = (columnData) => (
  ContentPageSubsectionColumnDataBinder(columnData, ContentPageSubsectionColumnParagraphsContentBinder)
);

export {
  ContentPageSubsectionColumnDataBinder,
  ContentPageSubsectionColumnParagraphsContentBinder,
  ContentPageSubsectionColumnDataBinderWithParagraphBinder
}
