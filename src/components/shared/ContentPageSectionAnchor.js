/**
 * ContentPageSectionAnchor.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jul 07, 2020
 * Updated  : Jul 07, 2020
 */

import React from 'react';

function ContentPageSectionTitleToAnchorId(title) {
  return title.toLowerCase().replace(/\s/g , "-");
};

function ContentPageSectionAnchor(props) {
  return (
    <div id={ContentPageSectionTitleToAnchorId(props.title)} />
  );
}

export {
  ContentPageSectionTitleToAnchorId
}

export default ContentPageSectionAnchor;
