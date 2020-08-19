/**
 * ContentPageTableOfContentMenuTemplate.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jul 07, 2020
 * Updated  : Aug 18, 2020
 */

import React from 'react'

import { getElementStyleClassName } from '../../styling/styling'

import { ContentPageSectionTitleToAnchorId } from './ContentPageSectionAnchor'

import FluidSingleRowGrid from './FluidSingleRowGrid'

import CircularImageButton from './CircularImageButton'

import './ContentPageTableOfContentMenuTemplate.css'

if ( process.env.NODE_ENV === 'development' )
  require('./ContentPageTableOfContentMenuTemplate-debug.css')

export default function ContentPageTableOfContentMenuTemplate(props) {
  const gridColumns = [];
  for (const [idx, item] of props.items.entries()) {
    gridColumns.push(
      <CircularImageButton
        key={idx}
        image={item.image}
        title={item.title}
        href={"#"+ContentPageSectionTitleToAnchorId(item.title)}
      />
    );
  }

  return (
    <div className={getElementStyleClassName("ContentPageTableOfContentMenuTemplateOuterContainer")}>
      <div className={getElementStyleClassName("ContentPageTableOfContentMenuTemplateInnerContainer")}>
        <nav>
          <FluidSingleRowGrid>
            {gridColumns}
          </FluidSingleRowGrid>
        </nav>
      </div>
    </div>
  );
}
