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
        <h1>History of the Cheetah</h1>
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
