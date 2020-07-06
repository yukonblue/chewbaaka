/**
 * FelidaeFamilyTree.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jul 05, 2020
 * Updated  : Jul 05, 2020
 */

import React from 'react';

import "semantic-ui-css/semantic.min.css";

import TextReveal from '../shared/TextReveal'

import './FelidaeFamilyTree.css'

/** Puma lineage */
import image_cheetah from './assets/felidae/felidae_cheetah.jpg'
import image_puma from './assets/felidae/felidae_puma.jpg'
import image_jaguarundi from './assets/felidae/felidae_jaguarundi.jpg'

function FelidaeFamilyTree() {
  return (
    <div className="FelidaeFamilyTreeComponentOuterContainerDiv">
      <TextReveal
        coverImage={image_cheetah}
        description="Acinonyx jubatus"
        position={{top: 10, left: 10}}
      />
      <TextReveal
        coverImage={image_puma}
        description="Puma concolor"
        position={{top: 40, left: 10}}
      />
      <TextReveal
        coverImage={image_jaguarundi}
        description="Herpailurus yagouaroundi"
        position={{top: 70, left: 10}}
      />
    </div>
  )
}

export default FelidaeFamilyTree;
