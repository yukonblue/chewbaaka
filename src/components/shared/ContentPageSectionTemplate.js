/**
 * ContentPageSectionTemplate.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jul 08, 2020
 * Updated  : Jul 08, 2020
 */

import React from 'react';

import ContentPageSectionHead from './ContentPageSectionHead'

function ContentPageSectionTemplate(props) {
  return (
    <div>
      <ContentPageSectionHead
          title={props.sectionConfig.intro.title}
          content={props.sectionConfig.intro.content}
      />

      <div>
        {props.sectionContent}
      </div>
    </div>
  );
}

export default ContentPageSectionTemplate;
