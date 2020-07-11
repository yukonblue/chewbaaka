/**
 * ContentPageSubsectionColumnDataBinder.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jul 10, 2020
 * Updated  : Jul 10, 2020
 */

import React from 'react';

function ContentPageSubsectionColumnDataBinder(columnData, columnContentBinder) {
  return {
    title: columnData.title,
    subtitle: columnData.subtitle,
    content: columnContentBinder(columnData.content)
  };
}

const ContentPageSubsectionColumnParagraphsContentBinder = (columnDataContent) => (
  Object.keys(columnDataContent).map(
    (key, idx) => (<p key={idx}>{columnDataContent[key]}</p>)
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
