/**
 * ImageCollageCell.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jul 10, 2020
 * Updated  : Jul 10, 2020
 */

import React from 'react';

import "semantic-ui-css/semantic.min.css";

import { Image, Reveal } from 'semantic-ui-react'

import { getElementStyleClassName } from '../../styling/styling'

import './ImageCollageCell.css'

export default class ImageCollageCell extends React.Component {

  render() {
    return (
      <div className={getElementStyleClassName("ImageCollageCellOuterContainer")}>
        <div className={getElementStyleClassName("ImageCollageCellInnerContainer")}>
          <Reveal animated='move down'>
            <Reveal.Content hidden>
              <div className={getElementStyleClassName("ImageCollageCellCore")}>
                <Image src={this.props.image} />
                <div className={getElementStyleClassName("ImageCollageCellTitleGroupOuterContainer")}>
                  <p className={getElementStyleClassName("ImageCollageCellSubtitleText")}>{this.props.subtitle}</p>
                  <h2 className={getElementStyleClassName("ImageCollageCellTitleText")}>{this.props.title}</h2>
                </div>
              </div>
            </Reveal.Content>
            <Reveal.Content visible>
              <div className={getElementStyleClassName("ImageCollageCellCore")}>
                <Image src={this.props.image} />
              </div>
            </Reveal.Content>
          </Reveal>
        </div>
      </div>
    );
  }
}
