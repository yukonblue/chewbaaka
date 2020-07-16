/**
 * ContentPageTableOfContentMenuTemplate.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jul 07, 2020
 * Updated  : Jul 15, 2020
 */

import React from 'react';

import { Grid, GridColumn } from 'semantic-ui-react'

import "semantic-ui-css/semantic.min.css";

import './ContentPageTableOfContentMenuTemplate.css'

import { getElementStyleClassName } from '../../styling/styling'

import { ContentPageSectionTitleToAnchorId } from '../shared/ContentPageSectionAnchor'

import CircularImageButton from '../shared/CircularImageButton'

function ContentPageTableOfContentMenuTemplate(props) {
  // TODO: Handle multi-row menu.

  const gridColumns = [];
  for (const [idx, item] of props.items.entries()) {
    gridColumns.push(
      <GridColumn key={idx}>
        <CircularImageButton
          image={item.image}
          title={item.title}
          href={"#"+ContentPageSectionTitleToAnchorId(item.title)}
        />
      </GridColumn>
    );
  }

  return (
    <div className={getElementStyleClassName("ContentPageTableOfContentMenuTemplateOuterContainer")}>
      <div className={getElementStyleClassName("ContentPageTableOfContentMenuTemplateInnerContainer")}>
        <Grid columns={3}>
          <Grid.Row>
            {gridColumns}
          </Grid.Row>
        </Grid>
      </div>
    </div>
  );
}

export default ContentPageTableOfContentMenuTemplate;
