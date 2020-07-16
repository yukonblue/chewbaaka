/**
 * ContentPageTableOfContentMenuBootstrapper.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jul 15, 2020
 * Updated  : Jul 15, 2020
 */

import React from 'react'

import ContentPageTableOfContentMenuTemplate from './ContentPageTableOfContentMenuTemplate'

export default function ContentPageTableOfContentMenuBootstrapper(props) {
  /**
   * TODO:
   * The current dynamic image loading uses require.context,
   * which has its own drawbacks.
   *
   * We should explore more robust alternative solutions.
   */
  const images = props.imagesContext();
  const items = props.pageMenuItems.map((pageMenuItem) => ({
    title: pageMenuItem.title,
    image: images("./" + pageMenuItem.tocImageFilename)
  }));

  return (
    <ContentPageTableOfContentMenuTemplate items={items} />
  );
}
