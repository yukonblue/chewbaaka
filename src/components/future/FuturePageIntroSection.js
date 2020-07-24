/**
 * FuturePageIntroSection.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jul 24, 2020
 * Updated  : Jul 24, 2020
 */

import React from 'react'

import '../shared/ContentPageSharedStyles.css'

import ContentPageIntroSectionGeneric from '../shared/ContentPageIntroSectionGeneric'

import image_Earth_Mission_Possible from './assets/Earth_Mission_Possible.png'

export default class FuturePageIntroSection extends React.Component {

  render() {
    return (
      <ContentPageIntroSectionGeneric
        title={this.props.contentPageIntro.title}
        content={this.props.contentPageIntro.content}
        image={image_Earth_Mission_Possible}
      />
    );
  }
}
