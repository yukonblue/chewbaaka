/**
 * HistoryPageIntroSection.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jul 12, 2020
 * Updated  : Jul 12, 2020
 */

import React from 'react';

import { getElementStyleClassName } from '../../styling/styling'

import '../shared/ContentPageSharedStyles.css'

import ContentPageIntroSectionTemplate from '../shared/ContentPageIntroSectionTemplate'

import './HistoryPageIntroSection.css'

import image from './assets/intro-section-cheetah.png'

export default class HistoryPageIntroSection extends React.Component {

  render() {
    return (
      <div className={getElementStyleClassName("HistoryPageIntroSectionOuterContainer")}>
        <ContentPageIntroSectionTemplate
          title={this.props.contentPageIntro.title}
          content={this.renderContent()}
        />
      </div>
    );
  }

  renderContent() {
    return (
      <div className={getElementStyleClassName("HistoryPageIntroSectionInnerContainer")}>
        <img
          className={getElementStyleClassName("HistoryPageIntroSectionImg")}
          src={image}
          alt=""
        />
        <p className="ContentPageSectionSubtitleText">
          {this.props.contentPageIntro.content}
        </p>      
      </div>
    );
  }
}
