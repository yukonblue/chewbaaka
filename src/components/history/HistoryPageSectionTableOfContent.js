/**
 * HistoryPageSectionTableOfContent.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jul 07, 2020
 * Updated  : Jul 07, 2020
 */

import React from 'react';

import "semantic-ui-css/semantic.min.css";

import './HistoryPageSectionTableOfContent.css'

import ContentPageTableOfContentMenuTemplate from '../shared/ContentPageTableOfContentMenuTemplate'

import image_circle from '../shared/assets/cheetah-conservation-fund-cheetah-fact-01.jpg'

function HistoryPageSectionTableOfContent(props) {
  // TODO: Consolidate menu item images.

  /**
   * TODO:
   * Find a way to consolidate the source of the section titles with the page sidebar menu.
   * Avoiding re-hardcoding them here and out-of-sync.
   */
  const items = [
    {
      image: image_circle,
      title: "Evolution",
    },
    {
      image: "https://upload.wikimedia.org/wikipedia/commons/f/f6/War_trophies_Deir_el_Bahari_Wellcome_L0027402.jpg",
      title: "Cheetah and Man",
    },
    {
      image:"https://upload.wikimedia.org/wikipedia/commons/e/e4/Acinonyx_jubatus_subspecies_range_IUCN_2015.png",
      title:"Range and Population",
    }
  ];

  return (
    <div className="HistoryPageSectionTableOfContentOuterContainer">
      <ContentPageTableOfContentMenuTemplate items={items}/>
    </div>
  );
}

export default HistoryPageSectionTableOfContent;
