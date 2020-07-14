/**
 * HistoryPage.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jul 06, 2020
 * Updated  : Jul 13, 2020
 */

import React from 'react';

import "semantic-ui-css/semantic.min.css";

import ContentPageSkeleton from '../shared/ContentPageSkeleton'

import { config }  from './config'

import HistoryPageSectionTableOfContent from './HistoryPageSectionTableOfContent'

import HistoryPageIntroSection from './HistoryPageIntroSection'
import HistoryPageSectionEvolution from './HistoryPage_Section_Evolution'
import HistoryPageSectionCheetahAndMan from './HistoryPage_Section_CheetahAndMan'
import HistoryPageSectionRangeAndPopulation from './HistoryPage_Section_RangeAndPopulation'

// import HistoryPageCheetahsAtCCFSubsection from './HistoryPage_Subsection_CheetahsAtCCF'

import coverImage from './assets/Cal-Butler-Cheetah-and-the-tree.jpg'

import '../shared/GlobalPageStyles.css'
import '../../styling/SharedStyles.css'

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
        <HistoryPageSectionTableOfContent config={config} />

        <HistoryPageIntroSection
          contentPageIntro={config.contentPageIntro}
        />

        <HistoryPageSectionEvolution config={config} />

        <HistoryPageSectionCheetahAndMan config={config} />

        <HistoryPageSectionRangeAndPopulation config={config} />

        {/* {this.renderCheetahAmbassadorsSectionContent()} */}
      </div>
    )
  }

  /**
   * TODO
   * Really consider moving this section into the
   * 'Future' page.
   */
  // renderCheetahAmbassadorsSectionContent() {
  //   return (
  //     <div>
  //       <ContentPageSectionHead
  //         title="Cheetah Ambassadaors"
  //         content="Many cheetah left a legacy that ..."
  //       />

  //       <HistoryPageCheetahsAtCCFSubsection />
  //     </div>
  //   );
  // }
}

export default HistoryPage;
