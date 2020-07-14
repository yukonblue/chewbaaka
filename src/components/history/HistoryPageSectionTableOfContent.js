/**
 * HistoryPageSectionTableOfContent.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jul 07, 2020
 * Updated  : Jul 12, 2020
 */

import React from 'react';

import "semantic-ui-css/semantic.min.css";

import './HistoryPageSectionTableOfContent.css'

import { getElementStyleClassName } from '../../styling/styling'

import ContentPageTableOfContentMenuTemplate from '../shared/ContentPageTableOfContentMenuTemplate'

import toc_menu_image_01 from './assets/menu/history_page_toc_menu_img_01.jpg'
import toc_menu_image_02 from './assets/menu/history_page_toc_menu_img_02.jpg'
import toc_menu_image_03 from './assets/menu/history_page_toc_menu_img_03.jpg'

export default function HistoryPageSectionTableOfContent(props) {
  /**
   * TODO:
   * Find a way to consolidate the source of the section titles with the page sidebar menu.
   * Avoiding re-hardcoding them here and out-of-sync.
   */
  const items = [
    {
      image: toc_menu_image_01,
      title: "Evolution",
    },
    {
      image: toc_menu_image_02,
      title: "Cheetah and Man",
    },
    {
      image: toc_menu_image_03,
      title: "Range and Population",
    }
  ];

  return (
    <div className={getElementStyleClassName("HistoryPageSectionTableOfContentOuterContainer")}>
      <ContentPageTableOfContentMenuTemplate items={items}/>
    </div>
  );
}
