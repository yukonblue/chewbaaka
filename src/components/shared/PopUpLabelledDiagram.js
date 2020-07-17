/**
 * PopUpLabelledDiagram.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jul 16, 2020
 * Updated  : Jul 16, 2020
 */

import React from 'react'

import { Button, Popup } from 'semantic-ui-react'

import { getElementStyleClassName } from '../../styling/styling'

import './PopUpLabelledDiagram.css'

export default class PopUpLabelledDiagram extends React.Component {

  render() {
    const componentDimensionStyle = {
      width: this.props.width,
      height: this.props.height,
      backgroundImage: `url(${this.props.image})`,
    };

    const popups = this.props.items.map(this.renderPopUp);

    return (
      <div
        style={componentDimensionStyle}
        className={getElementStyleClassName("PopUpLabelledDiagramOuterComponent")}
      >
        <div className={getElementStyleClassName("PopUpLabelledDiagramInnerComponent")}>
          {popups}
        </div>
      </div>
    );
  }

  renderPopUp(item) {
    const popUpContainerPositionStyle = item.position;

    return (
      <div style={popUpContainerPositionStyle} className={getElementStyleClassName("PopUpLabelledDiagramPopUpItemComponent")}>
        <Popup
          size="large"
          trigger={<Button icon="plus" color="blue" circular size="mini" />}
          content={item.content}
        />
      </div>
    );
  }
}
