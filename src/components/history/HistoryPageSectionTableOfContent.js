/**
 * HistoryPageSectionTableOfContent.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jul 07, 2020
 * Updated  : Jul 13, 2020
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
   * Find a way to do this entire thing data driven (mostly the images)
   * so that we won't need this component.
   */

  const pageMenuItems = props.config.pageProps.pageMenuItems;

  const items = [
    {
      image: toc_menu_image_01,
      title: pageMenuItems[0],
    },
    {
      image: toc_menu_image_02,
      title: pageMenuItems[1],
    },
    {
      image: toc_menu_image_03,
      title: pageMenuItems[2],
    }
  ];

  return (
    <div className={getElementStyleClassName("HistoryPageSectionTableOfContentOuterContainer")}>
      <ContentPageTableOfContentMenuTemplate items={items}/>
    </div>
  );
}
