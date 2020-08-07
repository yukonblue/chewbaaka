/**
 * PopUpLabelledDiagram.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jul 16, 2020
 * Updated  : Aug 07, 2020
 */

import React from 'react'

import { Button, Popup } from 'semantic-ui-react'

import { getElementStyleClassName } from '../../styling/styling'

import './PopUpLabelledDiagram.css'

if ( process.env.NODE_ENV === 'development' )
  require('./PopUpLabelledDiagram-debug.css')

export default class PopUpLabelledDiagram extends React.Component {

  static renderPopUpItemTriggerContent = (item) => ((
    <div>
      <h4 className={getElementStyleClassName("PopUpLabelledDiagramPopUpItemTitle")}>
        {item.title}
      </h4>
      <p>{item.content}</p>
    </div>
  ));

  render() {
    const componentDimensionStyle = {
      width: this.props.width,
      height: this.props.height,
      backgroundImage: `url(${this.props.image})`,
    };

    const popups = this.props.items.map(this.renderPopUpItem);

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

  renderPopUpItem(item, idx) {
    return (
      <div
        key={idx}
        style={item.position}
        className={getElementStyleClassName("PopUpLabelledDiagramPopUpItemComponent")}
      >
        <Popup
          size="large"
          trigger={<Button icon="plus" color="blue" circular size="mini" />}
          content={PopUpLabelledDiagram.renderPopUpItemTriggerContent(item)}
        />
      </div>
    );
  }
}
