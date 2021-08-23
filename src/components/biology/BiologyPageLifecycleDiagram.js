/**
 * BiologyPageLifecycleDiagram.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jul 16, 2020
 * Updated  : Aug 23, 2021
 */

import React from 'react'

import { getElementStyleClassName } from '../../styling/styling'

import image_lifecycle_diagram from './assets/Lifecycle_Diagram-min.png'

import FluidImageWrapper from '../shared/FluidImageWrapper'

import '../shared/ContentPageSharedStyles.css'

import './BiologyPageLifecycleDiagram.css'

if ( process.env.NODE_ENV === 'development' )
  require('./BiologyPageLifecycleDiagram-debug.css')

export default function BiologyPageLifecycleDiagram() {
  return (
    <div className={getElementStyleClassName("BiologyPageLifecycleDiagramOuterContainer")}>
      <h3 className="ContentPageSubsectionTitle TextCentered">
        The Cycle of Life
      </h3>
      <p className="BiologyPageLifecycleDiagramSubtitle TextCentered">
        There are four stages in the lifecycle of the cheetah.
      </p>
      <p className="BiologyPageLifecycleDiagramContentText TextCentered">
        <b>Stage 1</b>: 90 to 95 days pregnancy; <b>Stage 2</b>: 6 weeks to 18 months;
      </p>
      <p className="BiologyPageLifecycleDiagramContentText TextCentered">
        <b>Stage 3</b>: 18 to 22 months; <b>Stage 4</b>: adult life.
      </p>
      <FluidImageWrapper
        src={image_lifecycle_diagram}
        alt="lifecycle diagram"
        centered
        // Aspect ratio
        width={640}
        height={675}
      />
    </div>
  );
}
