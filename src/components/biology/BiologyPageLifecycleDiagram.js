/**
 * BiologyPageLifecycleDiagram.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jul 16, 2020
 * Updated  : Jul 16, 2020
 */

import React from 'react'

import '../shared/ContentPageSharedStyles.css'

import './BiologyPageLifecycleDiagram.css'

import { getElementStyleClassName } from '../../styling/styling'

import image_lifecycle_diagram from './assets/Lifecycle_Diagram_640x675.png'

export default function BiologyPageLifecycleDiagram() {
  return (
    <div className={getElementStyleClassName("BiologyPageLifecycleDiagramOuterContainer")}>
      <h3 className="ContentPageSubsectionTitle TextCentered">The Cycle of Life</h3>
      <p className="BiologyPageLifecycleDiagramSubtitle TextCentered">There are four stages in the lifecycle of the cheetah.</p>
      <p className="BiologyPageLifecycleDiagramContentText TextCentered">
        <b>Stage 1</b>: 90 to 95 days pregnancy; <b>Stage 2</b>: 6 weeks to 18 months;
      </p>
      <p className="BiologyPageLifecycleDiagramContentText TextCentered">
        <b>Stage 3</b>: 18 to 22 months; <b>Stage 4</b>: adult life.
      </p>
      <div className="Centered">
        <img src={image_lifecycle_diagram} alt="lifecycle diagram" />
      </div>
    </div>
  )
}
