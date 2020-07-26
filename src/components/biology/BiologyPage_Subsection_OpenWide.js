/**
 * BiologyPage_Subsection_OpenWide.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jul 16, 2020
 * Updated  : Jul 25, 2020
 */

import React from 'react';

import '../shared/ContentPageSharedStyles.css'

import ContentPageSubsectionTemplate from '../shared/ContentPageSubsectionTemplate'
import ContentPageSubsectionPart from '../shared/ContentPageSubsectionPart'

import {
  ContentPageSubsectionParagraphsContentBinder
} from '../shared/ContentPageSubsectionContentBinder'

import image_open_wide from './assets/open_wide.jpg'
import image_cheetah_grooming from './assets/cheetah_grooming.jpg'
import image_cheetah_tongue from './assets/cheetah_tongue.jpg'

export default class BiologyPageSubsectionOpenWide extends React.Component {

  static _SUBSECTION_NAME_ = "subsection_OpenWide";

  constructor(props) {
    super(props);
    this.state = {
      subsectionConfig: props.sectionConfig.subsections[BiologyPageSubsectionOpenWide._SUBSECTION_NAME_]
    };
  }

  render() {
    return (
      <div className="">
        <ContentPageSubsectionTemplate
          title={this.state.subsectionConfig.title}
          content={this.renderContent()}
        />
      </div>
    )
  }

  renderContent() {
    return (
      <div>
        {this.renderPart1()}
        {this.renderPart2()}
        {this.renderPart3()}
      </div>
    );
  }

  renderPart1() {
    return (
      <ContentPageSubsectionPart>
        <div className="OverflowHidden">
          <div className="FloatRight">
            <img src={image_open_wide} alt="" width={320} height={320} />  
          </div>
          {ContentPageSubsectionParagraphsContentBinder(this.state.subsectionConfig.contents.part1)}
        </div>
      </ContentPageSubsectionPart>
    );
  }

  renderPart2() {
    return (
      <ContentPageSubsectionPart>
        <div className="OverflowHidden">
          <div className="FloatLeft">
            <img src={image_cheetah_tongue} alt="Papillae on cheetah's tongue" />  
          </div>
          {ContentPageSubsectionParagraphsContentBinder(this.state.subsectionConfig.contents.part2)}
        </div>
      </ContentPageSubsectionPart>
    );
  }

  renderPart3() {
    return (
      <ContentPageSubsectionPart>
        <div className="OverflowHidden">
          <div className="FloatRight">
            <img src={image_cheetah_grooming} alt="Cheetah grooming" />
          </div>
          {ContentPageSubsectionParagraphsContentBinder(this.state.subsectionConfig.contents.part3)}
        </div>
      </ContentPageSubsectionPart>
    );
  }
}
