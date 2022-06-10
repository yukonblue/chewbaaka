/**
 * ContentPageSubsectionTemplate.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jul 07, 2020
 * Updated  : Jun 09, 2022
 */

/**
 * ContentPageSubsectionTemplate
 *
 * `ContentPageSubsectionTemplate` is a template component
 * that hosts the content of each content page subsection.
 * Offers basic styling supports such as positioning and layout.
 */

import React from 'react'

import {
  getElementStyleClassName
} from '../../styling/styling'

import { Design2CommonRoundedBorderRadiusStyle } from '../shared/Design2_CommonUtils'

import { combineStyles } from './Utils'

import './ContentPageSharedStyles.css'

import './ContentPageSubsectionTemplate.css'

if ( process.env.NODE_ENV === 'development' )
  require('./ContentPageSubsectionTemplate-debug.css')

export default function ContentPageSubsectionTemplate(props) {

  const styles = {
    backgroundColor: props.bgColor
  }

  return (
    <section className={combineStyles(getElementStyleClassName("ContentPageSubsectionTemplateOuterContainer"), Design2CommonRoundedBorderRadiusStyle)} style={styles}>
      <h3 className={getElementStyleClassName("ContentPageSubsectionTitle")}>
        {props.title}
      </h3>
      {props.content}
    </section>
  );
}
