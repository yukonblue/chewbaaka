/**
 * ContentPageSubsectionContentBinder.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jul 10, 2020
 * Updated  : Jul 18, 2020
 */

import React from 'react'

import ContentPageParagraph from './ContentPageParagraph'

import './ContentPageSharedStyles.css'

import getFormattedText from './TextFormatter.js'

function ContentPageSubsectionColumnDataBinder(columnData, columnContentBinder) {
  return {
    title: columnData.title,
    subtitle: columnData.subtitle,
    content: columnContentBinder(columnData.content)
  };
}

const ContentPageSubsectionParagraphsContentBinder = (paragraphContents) => (
  Object.keys(paragraphContents).map(
    (key, idx) => (
      <ContentPageParagraph key={idx}>
        {getFormattedText(paragraphContents[key])}
      </ContentPageParagraph>
    )
  )
);

const ContentPageSubsectionColumnDataBinderWithParagraphsContentBinder = (columnData) => (
  ContentPageSubsectionColumnDataBinder(columnData, ContentPageSubsectionParagraphsContentBinder)
);

const ContentPageSubsectionParagraphsJoin = (paragraphContents) => (
  Object.values(paragraphContents).map((content)=> getFormattedText(content + " "))
);

export {
  ContentPageSubsectionColumnDataBinder,
  ContentPageSubsectionParagraphsContentBinder,
  ContentPageSubsectionColumnDataBinderWithParagraphsContentBinder,
  ContentPageSubsectionParagraphsJoin
}
