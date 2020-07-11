/**
 * ContentPageTail.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jul 11, 2020
 * Updated  : Jul 11, 2020
 */

import React from 'react';

import ImageCollage from './ImageCollage'

import {
  getElementStyleClassName,
  getElementStyleClassNames
} from '../../styling/styling'

import ContentPageSectionTemplate from './ContentPageSectionTemplate'

import './ContentPageTail.css'
import './ContentPageSharedStyles.css'

export default class ContentPageTail extends React.Component {

  render() {
    return (
      <div className={getElementStyleClassNames(["ContentPageSkeletonContentContainerDimension", "ContentPageTailOuterContainer"])}>
        <ContentPageSectionTemplate
          sectionConfig={{
            intro: {
              title: "Before You Go",
            }
          }}
          sectionContent={this.renderContent()}
        />
      </div>
    );
  }

  renderContent() {
    return (
      <div className={getElementStyleClassName("ContentPageTailInnerContainer")}>
        <ImageCollage
          cells={[
            {
              image: "https://www.thevintagenews.com/wp-content/uploads/2018/12/anubis_attending_the_mummy_of_sennedjem.jpg",
              title: "How You Can Help",
              subtitle: "Every action counts",
              href: ""
            },
            {
              image: "https://www.thevintagenews.com/wp-content/uploads/2018/12/anubis_attending_the_mummy_of_sennedjem.jpg",
              title: "How You Can Help",
              subtitle: "Every action counts",
              href: ""
            },
            {
              image: "https://www.thevintagenews.com/wp-content/uploads/2018/12/anubis_attending_the_mummy_of_sennedjem.jpg",
              title: "How You Can Help",
              subtitle: "Every action counts",
              href: ""
            },
            {
              image: "https://www.thevintagenews.com/wp-content/uploads/2018/12/anubis_attending_the_mummy_of_sennedjem.jpg",
              title: "How You Can Help",
              subtitle: "Every action counts",
              href: ""
            },
          ]}
        />
      </div>
    );
  }
}
