/**
 * ImageCollageCell.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jul 10, 2020
 * Updated  : Jul 11, 2020
 */

/**
 * ImageCollageCell
 *
 * `ImageCollageCell` is a component that illustrates an image
 * that is hoverable with a title and subtitle text shown
 * over it, as well as an navigational href link.
 *
 * Props:
 *
 *  - `image`: The image to show.
 *
 *  - `title`: The title text.
 *
 *  - `subtitle`: The subtitle text.
 *
 *  - `href`: The href link.
 *
 *  - `width` (optional): Desired width of the cell.
 *
 *  - `height` (optional): Desired height of the cell.
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
                <Image className="" src={this.props.image} width={this.props.width} height={this.props.height} href={this.props.href} />
                <div className={getElementStyleClassName("ImageCollageCellTitleGroupOuterContainer")}>
                  <p className={getElementStyleClassName("ImageCollageCellSubtitleText")}>{this.props.subtitle}</p>
                  <h2 className={getElementStyleClassName("ImageCollageCellTitleText")}>{this.props.title}</h2>
                </div>
              </div>
            </Reveal.Content>
            <Reveal.Content visible>
              <div className={getElementStyleClassName("ImageCollageCellCore")}>
                <Image className="ImageCollageCellImgVisibleStyle"  src={this.props.image} width={this.props.width} height={this.props.height} href={this.props.href} />
                <div className={getElementStyleClassName("ImageCollageCellTitleGroupOuterContainer")}>
                  {/* <p className={getElementStyleClassName("ImageCollageCellSubtitleText")}>{this.props.subtitle}</p> */}
                  <h2 className={getElementStyleClassName("ImageCollageCellTitleText")}>{this.props.title}</h2>
                </div>
              </div>
            </Reveal.Content>
          </Reveal>
        </div>
      </div>
    );
  }
}
