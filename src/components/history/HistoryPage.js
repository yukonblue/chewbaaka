/**
 * HistoryPage.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jul 06, 2020
 * Updated  : Jul 06, 2020
 */

import React from 'react';

import "semantic-ui-css/semantic.min.css";

import ContentPageSkeleton from '../shared/ContentPageSkeleton'
import HistoryPageSectionTableOfContent from './HistoryPageSectionTableOfContent'
import ContentPageIntroParagraph from '../shared/ContentPageIntroParagraph'

import coverImage from './assets/cheetah-mother-and-cubs-on-termite-mound.jpg'

// TODO: Refactor these into static config file.
const COVERPAGE_TITLE       = "History";
const COVERPAGE_SUBTITLE    = "Learn about the evolution and migration of the species, its relationship with man throughout history, and its population and ranges.";
const COVERPAGE_MENU_ITEMS  = [
                                "Evolution",
                                "Cheetah and Man",
                                "Range and Population"
                              ];

class HistoryPage extends React.Component {

  render() {
    const pageProps = {
      coverImage: coverImage,
      title: COVERPAGE_TITLE,
      subtitle: COVERPAGE_SUBTITLE,
      pageMenuItems: COVERPAGE_MENU_ITEMS,
    };

    return (
      <ContentPageSkeleton pageProps={pageProps} content={this.renderContent()}/>
    )
  }

  renderContent() {
    return (
      <div>
        <HistoryPageSectionTableOfContent />
        <ContentPageIntroParagraph
          title="History of the Cheetah"
          content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        />
        <p>Hello</p><p>Hello</p><p>Hello</p><p>Hello</p><p>Hello</p><p>Hello</p><p>Hello</p><p>Hello</p>
        <p>Hello</p><p>Hello</p><p>Hello</p><p>Hello</p><p>Hello</p><p>Hello</p><p>Hello</p><p>Hello</p>
        <p>Hello</p><p>Hello</p><p>Hello</p><p>Hello</p><p>Hello</p><p>Hello</p><p>Hello</p><p>Hello</p>
        <p>Hello</p><p>Hello</p><p>Hello</p><p>Hello</p><p>Hello</p><p>Hello</p><p>Hello</p><p>Hello</p>
        <p>Hello</p><p>Hello</p><p>Hello</p><p>Hello</p><p>Hello</p><p>Hello</p><p>Hello</p><p>Hello</p>
        <p>Hello</p><p>Hello</p><p>Hello</p><p>Hello</p><p>Hello</p><p>Hello</p><p>Hello</p><p>Hello</p>
        <p>Hello</p><p>Hello</p><p>Hello</p><p>Hello</p><p>Hello</p><p>Hello</p><p>Hello</p><p>Hello</p>
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
}

export default HistoryPage;
