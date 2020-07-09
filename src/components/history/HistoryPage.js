/**
 * HistoryPage.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jul 06, 2020
 * Updated  : Jul 08, 2020
 */

import React from 'react';

import "semantic-ui-css/semantic.min.css";

import ContentPageSkeleton from '../shared/ContentPageSkeleton'
import ContentPageIntroParagraph from '../shared/ContentPageIntroParagraph'
import ContentPageSectionHead from '../shared/ContentPageSectionHead'

import { config }  from './config'

import HistoryPageSectionTableOfContent from './HistoryPageSectionTableOfContent'
import HistoryPageFelidaeFamilyTreeSubsection from './HistoryPageFelidaeFamilyTreeSubsection'
import HistoryPageCheetahAndManImageSubsection from './HistoryPageCheetahAndManImageSubsection'
import HistoryPageCheetahsAtCCFSubsection from './HistoryPageCheetahsAtCCFSubsection'
import HistoryPageNamibiaSubsection from './HistoryPageNamibiaSubsection'

import coverImage from './assets/cheetah-mother-and-cubs-on-termite-mound.jpg'

class HistoryPage extends React.Component {

  render() {
    let pageProps = config.pageProps;
    pageProps.coverImage = coverImage;

    return (
      <ContentPageSkeleton pageProps={pageProps} content={this.renderContent()}/>
    )
  }

  renderContent() {
    return (
      <div>
        <HistoryPageSectionTableOfContent />

        <ContentPageIntroParagraph
          title={config.contentPageIntro.title}
          content={config.contentPageIntro.content}
        />

        {this.renderEvolutionSectionContent()}

        {this.renderCheetahAndManSectionContent()}

        {this.renderRangeAndPopulationSectionContent()}

        {this.renderCheetahAmbassadorsSectionContent()}

        <p>Hello</p><p>Hello</p><p>Hello</p><p>Hello</p><p>Hello</p><p>Hello</p><p>Hello</p><p>Hello</p>
        <p>Hello</p><p>Hello</p><p>Hello</p><p>Hello</p><p>Hello</p><p>Hello</p><p>Hello</p><p>Hello</p>
        <p>Hello</p><p>Hello</p><p>Hello</p><p>Hello</p><p>Hello</p><p>Hello</p><p>Hello</p><p>Hello</p>
        <p>Hello</p><p>Hello</p><p>Hello</p><p>Hello</p><p>Hello</p><p>Hello</p><p>Hello</p><p>Hello</p>
        <p>Hello</p><p>Hello</p><p>Hello</p><p>Hello</p><p>Hello</p><p>Hello</p><p>Hello</p><p>Hello</p>
        <p>Hello</p><p>Hello</p><p>Hello</p><p>Hello</p><p>Hello</p><p>Hello</p><p>Hello</p><p>Hello</p>
        <p>Hello</p><p>Hello</p><p>Hello</p><p>Hello</p><p>Hello</p><p>Hello</p><p>Hello</p><p>Hello</p>
        <p>Hello</p><p>Hello</p><p>Hello</p><p>Hello</p><p>Hello</p><p>Hello</p><p>Hello</p><p>Hello</p>
      </div>
    )
  }

  renderEvolutionSectionContent() {
    const sectionConfig = config.contentPageSections["section_Evolution"];

    return (
      <div>
        <ContentPageSectionHead
          title={sectionConfig.intro.title}
          content={sectionConfig.intro.content}
        />

        <HistoryPageFelidaeFamilyTreeSubsection />
      </div>
    );
  }

  renderCheetahAndManSectionContent() {
    const sectionConfig = config.contentPageSections["section_CheetahAndMan"];

    return (
      <div>
        <ContentPageSectionHead
          title={sectionConfig.intro.title}
          content={sectionConfig.intro.content}
        />

        <HistoryPageCheetahAndManImageSubsection
          subsectionConfig={sectionConfig.subsections["subsection_RelationshipsWithMan"]}
        />
      </div>
    );
  }

  renderRangeAndPopulationSectionContent() {
    const sectionConfig = config.contentPageSections["section_PopulationAndRange"];

    return (
      <div>
        <ContentPageSectionHead
          title={sectionConfig.intro.title}
          content={sectionConfig.intro.content}
        />

        <HistoryPageNamibiaSubsection />
      </div>
    );
  }

  /**
   * TODO
   * Really consider moving this section into the
   * 'Future' page.
   */
  renderCheetahAmbassadorsSectionContent() {
    return (
      <div>
        <ContentPageSectionHead
          title="Cheetah Ambassadaors"
          content="Many cheetah left a legacy that ..."
        />

        <HistoryPageCheetahsAtCCFSubsection />
      </div>
    );
  }
}

export default HistoryPage;
