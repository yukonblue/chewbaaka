/**
 * ContentPageSectionAnchor.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jul 07, 2020
 * Updated  : Jul 07, 2020
 */

/**
 * ContentPageSectionAnchor
 *
 * `ContentPageSectionAnchor` is a component that synthesizes
 * into a local anchor point for the corresponding content page
 * section within the page.
 *
 * Users specify the title of the section, and the title is
 * used to convert to its corresponding anchor id.
 * (e.g., "Cheetah and Man" is converted into "cheetah-and-man",
 * and links can reference to it via "#cheetah-and-man" the href).
 *
 * Props:
 *
 *  - `title`: The title of the corresponding content section.
 *    Used to generate the anchor point id.
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
