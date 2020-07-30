/**
 * QuizBoard.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jul 17, 2020
 * Updated  : Jul 29, 2020
 */

import React from 'react'

import TextRevealWithTextCover from './TextRevealWithTextCover'

import { getElementStyleClassName } from '../../styling/styling'

import './QuizBoard.css'

export default class QuizBoard extends React.Component {

  render() {
    const componentDimensionStyle = {
      width: this.props.width,
      height: this.props.height
    };
  
    const items = this.props.items.map(this.renderItem);

    return (
      <div
        style={componentDimensionStyle}
        className={getElementStyleClassName("QuizBoardOuterContainer")}
      >
        <div className="QuizBoardInnerContainer">
          {items}
        </div>
      </div>
    );
  }

  renderItem(item, idx) {
    return (
      <div key={idx} className="QuizBoardItemContainer" style={item.position}>
        <TextRevealWithTextCover
          title={item.title}
          description={item.description}
          color="#6e9ce9"
        />
      </div>
    );
  }
}
