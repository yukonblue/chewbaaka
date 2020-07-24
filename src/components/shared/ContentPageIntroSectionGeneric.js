/**
 * ContentPageIntroSectionGeneric.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jul 24, 2020
 * Updated  : Jul 24, 2020
 */

import React from 'react';

import { getElementStyleClassName } from '../../styling/styling'

import './ContentPageSharedStyles.css'

import ContentPageIntroSectionTemplate from './ContentPageIntroSectionTemplate'

import './ContentPageIntroSectionGeneric.css'

export default class ContentPageIntroSectionGeneric extends React.Component {

  render() {
    return (
      <div className={getElementStyleClassName("ContentPageIntroSectionGenericOuterContainer")}>
        <ContentPageIntroSectionTemplate
          title={this.props.title}
          content={this.renderContent()}
        />
      </div>
    );
  }

  renderContent() {
    return (
      <div className={getElementStyleClassName("ContentPageIntroSectionGenericInnerContainer")}>
        <img
          className={getElementStyleClassName("ContentPageIntroSectionGenericImg")}
          src={this.props.image}
          alt={this.props.title}
        />
        <p className="ContentPageSectionSubtitleText">
          {this.props.content}
        </p>      
      </div>
    );
  }
}
