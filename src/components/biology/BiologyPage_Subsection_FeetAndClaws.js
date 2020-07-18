/**
 * BiologyPage_Subsection_FeedAndClaws.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jul 16, 2020
 * Updated  : Jul 18, 2020
 */

import React from 'react'

import '../shared/ContentPageSharedStyles.css'

import ContentPageSubsectionTemplate from '../shared/ContentPageSubsectionTemplate'

import ContentPageParagraph from '../shared/ContentPageParagraph'

import ImageView from '../shared/ImageView'

import image_cheetah_dewclaw from './assets/cheetah_dewclaw.jpg'

export default class BiologyPageSubsectionFeetAndClaws extends React.Component {

  static _SUBSECTION_NAME_ = "subsection_FeetAndClaws";

  constructor(props) {
    super(props);
    this.state = {
      subsectionConfig: props.sectionConfig.subsections[BiologyPageSubsectionFeetAndClaws._SUBSECTION_NAME_]
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
      <div className="">
        
        <div className="OverflowHidden">
          <div className="FloatRight">
            <ImageView
              image={image_cheetah_dewclaw}
              caption="Cheetah dewclaw."
              width={611}
              height={273}
            />
          </div>

          <ContentPageParagraph>
            {this.state.subsectionConfig.contents["paragraph_FeetAndClaws_04"]}
          </ContentPageParagraph>
        </div>
      </div>
    );
  }
}
