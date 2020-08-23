/**
 * ContentPageTableOfContentMenuBootstrapper.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jul 15, 2020
 * Updated  : Aug 22, 2020
 */

import React from 'react'

import ContentPageTableOfContentMenuTemplate from './ContentPageTableOfContentMenuTemplate'

import DimensionPredicatedContainer from '../shared/DimensionPredicatedContainer'

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
    <DimensionPredicatedContainer
      pred={(dimension) => (dimension.width >= 824)}
      renderContentHandler={() => (<ContentPageTableOfContentMenuTemplate items={items} />)}
    />
  );
}
