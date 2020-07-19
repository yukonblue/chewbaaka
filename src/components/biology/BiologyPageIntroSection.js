/**
 * BiologyPageIntroSection.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jul 16, 2020
 * Updated  : Jul 18, 2020
 */

import React from 'react';

import { getElementStyleClassName } from '../../styling/styling'

import '../shared/ContentPageSharedStyles.css'

import ContentPageIntroSectionTemplate from '../shared/ContentPageIntroSectionTemplate'

import './BiologyPageIntroSection.css'

import image_cheetah_skeleton from './assets/Cheetah_Skeleton_Transparent_720x406.png'

export default class BiologyPageIntroSection extends React.Component {

  render() {
    return (
      <div className={getElementStyleClassName("BiologyPageIntroSectionOuterContainer")}>
        <ContentPageIntroSectionTemplate
          title={this.props.contentPageIntro.title}
          content={this.renderContent()}
        />
      </div>
    );
  }

  renderContent() {
    return (
      <div className={getElementStyleClassName("BiologyPageIntroSectionInnerContainer")}>
        <img
          className={getElementStyleClassName("BiologyPageIntroSectionImg")}
          src={image_cheetah_skeleton}
          alt=""
        />
        <p className="ContentPageSectionSubtitleText">
          {this.props.contentPageIntro.content}
        </p>      
      </div>
    );
  }
}
