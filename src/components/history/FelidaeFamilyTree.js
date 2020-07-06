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
import image_cheetah from './assets/felidae/puma/felidae_cheetah.jpg'
import image_jaguarundi from './assets/felidae/puma/felidae_jaguarundi.jpg'
import image_puma from './assets/felidae/puma/felidae_puma.jpg'

/** Lynx lineage */
import image_eurasian_lynx from './assets/felidae/lynx/felidae_eurasian_lynx.jpg'
import image_canadian_lynx from './assets/felidae/lynx/felidae_canadian_lynx.jpg'
import image_iberian_lynx from './assets/felidae/lynx/felidae_iberian_lynx.jpg'
import image_bobcat from './assets/felidae/lynx/felidae_bobcat.jpg'

function FelidaeFamilyTree() {
  return (
    <div className="FelidaeFamilyTreeComponentOuterContainerDiv">
      { /* Puma lineage */ }
      <TextReveal
        coverImage={image_cheetah}
        description="Acinonyx jubatus"
        position={{top: 10, left: 10}}
      />
      <TextReveal
        coverImage={image_puma}
        description="Puma concolor"
        position={{top: 140, left: 10}}
      />
      <TextReveal
        coverImage={image_jaguarundi}
        description="Herpailurus yagouaroundi"
        position={{top: 270, left: 10}}
      />
      { /* Puma lineage */ }
      <TextReveal
        coverImage={image_eurasian_lynx}
        description="Lynx lynx"
        position={{top: 10, left: 140}}
      />
      <TextReveal
        coverImage={image_canadian_lynx}
        description="Lynx canadensis"
        position={{top: 140, left: 140}}
      />
      <TextReveal
        coverImage={image_iberian_lynx}
        description="Lynx pardinus"
        position={{top: 270, left: 140}}
      />
      <TextReveal
        coverImage={image_bobcat}
        description="Lynx rufus"
        position={{top: 400, left: 140}}
      />
    </div>
  )
}

export default FelidaeFamilyTree;
