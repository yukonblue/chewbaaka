/**
 * QnAPopUp.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jul 06, 2020
 * Updated  : Aug 07, 2020
 */

/**
 * QnAPopUp
 *
 * `QnAPopUp` is a component that shows the answer/fact associaetd
 * with a "Did you know?" question.
 *
 * Props:
 *
 *  - `content`: The content text of the illustrated answer/fact.
 */

import React from 'react'

import { Button, Label } from 'semantic-ui-react'

import "semantic-ui-css/semantic.min.css"

import TextBubble from './TextBubble'

import { getElementStyleClassName } from '../../styling/styling'

import './QnAPopUp.css'

if ( process.env.NODE_ENV === 'development' )
  require('./QnAPopUp-debug.css')

export default class QnAPopUp extends React.Component {

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
      <div className={getElementStyleClassName("QnAPopUpContainer")}>
        <div className={getElementStyleClassName("QnAPopUpButtonGroupContainer")}>
          <Label size="large" color="blue">
            Did You Know 
            <Button
              className="QuestionButton"
              circular
              icon="question"
              color={this.state.isOpen ? "black" : "orange"}
              onClick={this.handleToggle}
            />
          </Label>
        </div>
        <div className={getElementStyleClassName("QnAPopUpTextSecondaryBubbleContainer")}>
          <TextBubble
            hidden={!this.state.isOpen}
            diameter={45}
            title=""
            content=""
          />
        </div>
        <div className={getElementStyleClassName("QnAPopUpMainTextBubbleContainer")}>
          <TextBubble
            hidden={!this.state.isOpen}
            diameter={320}
            title="Did you know?"
            content={this.props.content}
          />
        </div>
      </div>
    );
  }
}
