/**
 * HistoryPage_Subsection_FelidaeFamilyTree.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jul 07, 2020
 * Updated  : Jul 29, 2020
 */

import React from 'react'

import '../shared/ContentPageSharedStyles.css'
import './HistoryPage_Subsection_FelidaeFamilyTree.css'

import { getElementStyleClassName } from '../../styling/styling'

import ContentPageSubsectionTemplate from '../shared/ContentPageSubsectionTemplate'
import ContentPageParagraph from '../shared/ContentPageParagraph'
import ContentPageSubsectionSubtitle from '../shared/ContentPageSubsectionSubtitle'
import ContentPageSubsectionPart from '../shared/ContentPageSubsectionPart'

import MediaLinkButton from '../shared/MediaLinkButton'

import HintSignpost from '../shared/HintSignpost'

import QnAPopUp from '../shared/QnAPopUp'

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
        {this.renderRelatedCatPart()}
        {this.renderFelidaeFamilyTreePart()}
        {this.renderQnAPart()}
      </div>
    );
  }

  renderRelatedCatPart() {
    return (
      <ContentPageSubsectionPart>
        <ContentPageSubsectionSubtitle>
          Which big cat is the most related to the cheetah?
        </ContentPageSubsectionSubtitle>

        <ContentPageParagraph>
          It is easy to think that the closest relative to the cheetah among the big cats is the leopard,
          given the close resemblance to their appearances. However, the cheetah is actually most closely
          related to the North American <b>cougar (puma)</b> (<span className="TaxonomyBinomialName">Puma concolor</span>)
          and the <b>jaguarundi</b> (<span className="TaxonomyBinomialName">Herpailurus yagouaroundi</span>)
          that roams through Central to South America. Together, these three species form the <b><span className="TaxonomyBinomialName">Puma</span></b> lineage,
          one of the eight lineages of the <span className="TaxonomyBinomialName">Felidae</span> family.
        </ContentPageParagraph>

        <img src={big_cats_image} alt="Big Cats" />
      </ContentPageSubsectionPart>
    );
  }

  renderFelidaeFamilyTreePart() {
    return (
      <ContentPageSubsectionPart>
        <ContentPageSubsectionSubtitle>
          Felidae Family Tree
        </ContentPageSubsectionSubtitle>

        <ContentPageParagraph>
          The evolution of the <span className="TaxonomyBinomialName">Felidae</span> cat
          family began about 25 million years ago. Through time, the ancestors
          of the cat family slowly evolved into eight main lineages, with each lineage
          representing a subset of the <span className="TaxonomyBinomialName">Felidae</span> cat
          family that are the most related genetically.
        </ContentPageParagraph>

        <HintSignpost
          hintText="Hover over images below to reveal the members in the Felidae family tree"
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
      </ContentPageSubsectionPart>
    );
  }

  renderQnAPart() {
    return (
      <ContentPageSubsectionPart>
        <QnAPopUp
          content="All the species of cats except for only the domestic cat are being threatened toward extinction due to man-made factors, such as climate change and habitat destructions."
        />
      </ContentPageSubsectionPart>
    );
  }
}
