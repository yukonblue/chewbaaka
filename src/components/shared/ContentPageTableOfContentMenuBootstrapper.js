/**
 * ContentPageTableOfContentMenuBootstrapper.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jul 15, 2020
 * Updated  : Aug 09, 2021
 */

import React from 'react'

import ContentPageTableOfContentMenuTemplate from './ContentPageTableOfContentMenuTemplate'

import ContentPageTableOfContentMenuTemplateCompact from './ContentPageTableOfContentMenuTemplateCompact'

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
    <div>
      <DimensionPredicatedContainer
        pred={(dimension) => (dimension.width >= 824)}
        renderContentHandler={() => (<ContentPageTableOfContentMenuTemplate items={items} />)}
      />
      <DimensionPredicatedContainer
        pred={(dimension) => (dimension.width < 824)}
        renderContentHandler={() => (<ContentPageTableOfContentMenuTemplateCompact items={items} />)}
      />
    </div>
  );
}
