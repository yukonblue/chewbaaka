/**
 * ImageSlide.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jul 05, 2020
 * Updated  : Aug 23, 2021
 */

/**
 * ImageSlide
 *
 * ImageSlide is a component that allows user to
 * specify a set of images to display along with an
 * input slider that can slide through the set of images.
 *
 * A good example application of this component could be
 * to use a set of images to illustrate changes along a timeline.
 *
 * Props:
 *
 *  - `title` (optional): The title of the component.
 *
 *  - `marks`: An array of { value, label, image, description } objects
 *    specifying the value and label of each slider tick mark, and the
 *    image to be displayed that's associated with that tick mark.
 *
 *  - `sliderNameLabel`: The label used for illustrating the semantic meaning
 *    of the slider name.
 *
 *  - `sliderUnitLabel`: The label used for illustrating the semantic meaning
 *    of the slider value unit.
 *
 *  - `caption` (optional): Specify an optional caption text to demonstrate the
 *    meaning of the slider, or to specify instructions on how to use the slider.
 *
 *  - `backgroundImage` (optional): Specify an optional background image.
 *    The background image will always be shown behind the slide images.
 *
 *  - `onChange` (optional): Specify an optional callback handler that
 *    gets called when the slider changes.
 *    Signature is (val) => {}.
 */

import React from 'react'

import { Header, Label } from 'semantic-ui-react'

import { Slider } from '@material-ui/core'

import 'semantic-ui-css/semantic.min.css'

import ContentPageCaptionLabel from './ContentPageCaptionLabel'

import { getElementStyleClassName } from '../../styling/styling'

import './ImageSlide.css'

if ( process.env.NODE_ENV === 'development' )
  require('./ImageSlide-debug.css')

export default class ImageSlide extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      activeMark: props.marks[0].value,
      /** NOTE: Object.fromEntries() seems not supported on our CI
       * running with Node 10.x
       * https://github.com/tetrachrome/chewbaaka/pull/28/checks?check_run_id=856741151
       */
      // marksDict: Object.fromEntries( props.marks.map( mark => [mark.value, mark]) )
      marksDict: props.marks.reduce((obj, mark) => {
        obj[mark.value] = mark;
        return obj;
      }, {})
    }
    this.handleSliderChange = this.handleSliderChange.bind(this);
  }

  handleSliderChange(_, value) {
    this.setState((prevState) => ({
      activeMark: Number(value),
      marksDict: prevState.marksDict
    }));
    if ( this.props.onChange ) {
      this.props.onChange(value);
    }
  }

  render() {
    const componentDimensionStyle = {
      maxWidth: this.props.imageWidth
    };

    /**
     * NOTE
     *
     * No longer need to specify the image dimension since we
     * now specify both max-width and max-height to be 100%
     * in the .css file
     *
     * Following the advice from
     * https://stackoverflow.com/questions/3029422/how-do-i-auto-resize-an-image-to-fit-a-div-container
     */
    const imageDimensionStyle = {
      // maxWidth: this.props.imageWidth,
    }

    const imgElementContainerStyle = {
      maxWidth: this.props.imageWidth,
      backgroundImage: `url(${this.props.backgroundImage})`,
    }

    const aspectRatio = {
      width: parseInt(this.props.imageWidth, 10),
      height: parseInt(this.props.imageHeight, 10)
    }

    return (
      <div
        className={getElementStyleClassName("ImageSlideOuterContainer")}
        style={componentDimensionStyle}
        data-testid="ImageSlideComponentTestId"
      >

        <div className={getElementStyleClassName("ImageSlideInnerContainer")}>

          <Header as='h1' textAlign="center" data-testid="ImageSlideComponentTitlePartTestId">
            {this.props.title}
          </Header>

          <div
            className={getElementStyleClassName("ImageSlideImgElementContainer")}
            style={imgElementContainerStyle}
          >
            <img
              className={getElementStyleClassName("ImageSlideImgElement")} 
              src={this.state.marksDict[this.state.activeMark].image}
              alt={this.state.marksDict[this.state.activeMark].label}
              style={imageDimensionStyle}
              data-testid="ImageSlideComponentImgPartTestId"
              // Specify the aspect ratio
              width={aspectRatio.width}
              height={aspectRatio.height}
            />
          </div>

          <div className={getElementStyleClassName("ImageSlideSliderAndLabelOuterContainer")}>
            <div className={getElementStyleClassName("ImageSlideLabelOuterContainer")}>
              <Label
                color="black"
                data-testid="ImageSlideComponentLabelPartTestId"
              >
                {this.state.marksDict[this.state.activeMark].label}
              </Label>

              <ContentPageCaptionLabel>
                {this.state.marksDict[this.state.activeMark].description}
              </ContentPageCaptionLabel>
            </div>

            <div className={getElementStyleClassName("ImageSlideSliderAndLabelInnerContainer")}>
              <div className={getElementStyleClassName("ImageSlideSliderElementContainer")}>
                <div className={getElementStyleClassName("ImageSlideComponentSliderNameLabelContainer")}>
                  <Label
                    color="yellow"
                    data-testid="ImageSlideComponentSliderNameLabelPartTestId"
                  >
                    {this.props.sliderNameLabel}
                  </Label>
                </div>

                <div className={getElementStyleClassName("ImageSlideComponentSliderEndLabelContainer")}>
                  <Label
                    color="orange"
                    data-testid="ImageSlideComponentSliderUnitLabelPartTestId"
                  >
                    {this.props.sliderUnitLabel}
                  </Label>
                </div>

                <Slider
                  defaultValue={this.props.marks[0].value}
                  valueLabelFormat={(value) => ("")}
                  aria-label="discrete-slider-restrict"
                  step={null}
                  valueLabelDisplay="auto"
                  marks={this.props.marks}
                  onChange={this.handleSliderChange}
                  data-testid="ImageSlideComponentSliderPartTestId"
                />

              </div>
            </div>

            <ContentPageCaptionLabel>
              {this.props.caption}
            </ContentPageCaptionLabel>
          </div>

        </div>

      </div>
    );
  }
}
