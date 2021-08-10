/**
 * ContentPageTableOfContentMenuTemplateCompact.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Aug 09, 2021
 * Updated  : Aug 09, 2021
 */

import React from 'react'

import { Icon } from 'semantic-ui-react'

import { getElementStyleClassName } from '../../styling/styling'

import { ContentPageSectionTitleToAnchorId } from './ContentPageSectionAnchor'

import './ContentPageTableOfContentMenuTemplateCompact.css'

export default function ContentPageTableOfContentMenuTemplateCompact(props) {
  const menuItems = [];
  for (const [idx, item] of props.items.entries()) {
    menuItems.push(
      <li key={idx}>
        <Icon key={idx} name='arrow alternate circle right' size='small'/>
        <a href={"#"+ContentPageSectionTitleToAnchorId(item.title)}>
          {item.title}
        </a>
      </li>
    );
  }

  return (
    <div className={getElementStyleClassName("ContentPageTableOfContentMenuTemplateCompactOuterContainer")}>
      <p className="ContentPageTableOfContentMenuTemplateCompactNavBarCaptionTitle">This page covers:</p>
      <nav>
        <ul className="ContentPageTableOfContentMenuTemplateCompactNavBarList">
          {menuItems}
        </ul>
      </nav>
    </div>
  );
}