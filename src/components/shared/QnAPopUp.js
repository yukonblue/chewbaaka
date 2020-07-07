/**
 * QnAPopUp.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jul 06, 2020
 * Updated  : Jul 06, 2020
 */

import React from 'react';

import "semantic-ui-css/semantic.min.css";

import { Button } from 'semantic-ui-react'

import './QnAPopUp.css'

import TextBubble from './TextBubble'

class QnAPopUp extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    }
    this.handleToggle = this.handleToggle.bind(this);
  }

  handleToggle() {
    this.setState((prevState) => ({
      isOpen: prevState.isOpen ^ 1,
    }));
  }

  render() {
    return (
      <div className="QnAPopUpContainer">
        <div className="QnAPopUpMainTextBubbleContainer" style={{width: 256, height:256}}>
          <TextBubble hidden={!this.state.isOpen} diameter={256} title="Did you know?" content={this.props.content}/>
        </div>
        <div className="QnAPopUpTextSecondaryBubbleContainer" style={{width: 45, height:45}}>
          <TextBubble hidden={!this.state.isOpen} diameter={45} title="" content=""/>
        </div>
        <div className="QnAPopUpButtonGroupContainer">
          <Button className="QuestionButton" circular icon="question" color={this.state.isOpen ? "black" : "orange"} onClick={this.handleToggle} />
          {/* <span>Did you know?</span> */}
        </div>
      </div>
    );
  }
}

export default QnAPopUp;
