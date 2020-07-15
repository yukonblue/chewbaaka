/**
 * HistoryPage_Subsection_FelidaeFamilyTree.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jul 07, 2020
 * Updated  : Jul 14, 2020
 */

import React from 'react';

import '../shared/ContentPageSharedStyles.css'
import './HistoryPage_Subsection_FelidaeFamilyTree.css'

import { getElementStyleClassName } from '../../styling/styling'

import ContentPageSubsectionTemplate from '../shared/ContentPageSubsectionTemplate'
import ContentPageParagraph from '../shared/ContentPageParagraph'

import MediaLinkButton from '../shared/MediaLinkButton'

import HintSignpost from '../shared/HintSignpost'

import LineBreak from '../shared/LineBreak'

import FelidaeFamilyTree from './FelidaeFamilyTree'

import big_cats_image from './assets/Big_Cats.png'

export default class HistoryPageSubsectionFelidaeFamilyTree extends React.Component {

  static _SUBSECTION_NAME_ = "subsection_EvolutionOfCats";

  constructor(props) {
    super(props);
    this.state = {
      subsectionConfig: props.sectionConfig.subsections[HistoryPageSubsectionFelidaeFamilyTree._SUBSECTION_NAME_]
    };
  }

  render() {
    return (
      <div className={getElementStyleClassName("HistoryPageSubsectionFelidaeFamilyTreeOuterContainer")}>
        <ContentPageSubsectionTemplate
          title={this.state.subsectionConfig.title}
          content={this.renderContent()}
        />
      </div>
    )
  }

  renderContent() {
    return (
      <div className={getElementStyleClassName("HistoryPageSubsectionFelidaeFamilyTreeInnerContainer")}>
        <div>
          <h4 className={getElementStyleClassName("ContentPageSubsectionSubtitle")}>
            Which big cat is the most related to the cheetah?
          </h4>

          <ContentPageParagraph>
            It is easy to think that the closest relative to the cheetah among the big cats is the leopard,
            given the close resemblance to their appearances. However, the cheetah is actually most closely
            related to the North American <b>cougar (puma)</b> (<span className="TaxonomyBinomialName">Puma concolor</span>)
            and the <b>jaguarundi</b> (<span className="TaxonomyBinomialName">Herpailurus yagouaroundi</span>)
            that roams through Central to South America. Together, these three species form the <b>Puma</b> lineage,
            one of the eight lineages of the <span className="TaxonomyBinomialName">Felidae</span> family.
          </ContentPageParagraph>

          <img src={big_cats_image} alt="Big Cats" />
        </div>

        <div>
          <h4 className="ContentPageSubsectionSubtitle">Felidae Family Tree</h4>

          <ContentPageParagraph>
            The evolution of the <span className="TaxonomyBinomialName">Felidae</span> cat
            family began about 25 million years ago. Through time, the ancestors
            of the cat family slowly evolved into eight main lineages, each lineage
            representing a subset of the <span className="TaxonomyBinomialName">Felidae</span> cat
            family that are the most related genetically.
          </ContentPageParagraph>

          <LineBreak lines={2} />

          <ContentPageParagraph>
            Below is an illustration of the <i>Felidae</i> family tree. Hover over
            each image in the tree to reveal its genus. (Cats in the same
            lineage have the same background color).
          </ContentPageParagraph>

          <HintSignpost
            hintText="Hover over images below to reveal the genera in the Felidae family"
            iconName="arrow circle down"
          />

          <div className={getElementStyleClassName("HistoryPageSubsectionFelidaeFamilyTreeCore")}>
            <FelidaeFamilyTree />
          </div>

          <MediaLinkButton
            href="https://www.wildcatfamily.com/felidae-evolution/"
            title='Learn more about Felidae Evolution'
            icon="file alternate outline"
          />
        </div>
      </div>
    );
  }
}
