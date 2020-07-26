/**
 * ContentPageTwoColumnImageGallary.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jul 26, 2020
 * Updated  : Jul 26, 2020
 */

import React from 'react'

import ContentPageSubsectionTwoColumnContentTemplate from '../shared/ContentPageSubsectionTwoColumnContentTemplate'

import ImageView from '../shared/ImageView'

export default class ContentPageTwoColumnImageGallary extends React.Component {

  render() {
    return (
      <ContentPageSubsectionTwoColumnContentTemplate
        lhsColumn={{content: this.renderColumn(this.props.parts[0])}}
        rhsColumn={{content: this.renderColumn(this.props.parts[1])}}
      />
    );
  }

  renderColumn(part) {
    return (
      <ImageView
        image={part.image}
        caption={part.caption}
        credit={part.credit}
        width={part.width}
        height={part.height}
      />
    );
  }
}
