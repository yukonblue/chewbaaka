/**
 * CheetahSkeletalAnatomyDiagram.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jul 16, 2020
 * Updated  : Jul 16, 2020
 */

import React from 'react'

import PopUpLabelledDiagram from '../shared/PopUpLabelledDiagram'

// import image_cheetah_skeletal_anatomy from './assets/cheetah_skeletal_anatomy.jpg'
import image_cheetah_skeletal_anatomy from './assets/cheetah_skeletal_anatomy_02.jpg'

export default class CheetahSkeletalAnatomyDiagram extends React.Component {

  /**
   * In counterclock direction starting from the top (spine)
   */
  static __ITEMS__ = [
    {
      title: "Propulsive spine",
      content: "The extreme flexibility of the cheetah’s spine is unique. This allows more " +
              "extension during running, thus making both its stride length and speed possible. " +
              "If the spine were stiff and the pectoral and pelvic girdles were firmly attached, " +
              "the cheetah would not be able to reach 100 km / hr.",
      position: {
        top: 80,
        left: 460
      }
    },
    {
      title: "Tail",
      content: "The cheetah’s long muscular tail works as a rudder, stabilizing and acting as a "+
              "counter balance to its body weight. This allows sudden sharp turns during high speed chases.",
      position: {
        top: 200,
        left: 180
      }
    },
    {
      title: "Hips (Pelvic girdle)",
      content: "The hips (pelvic girdle) pivot to increase the cheetah’s stride length. " +
              "This allows the front and rear legs to stretch further apart when the body is fully extended. " +
              "The hips and shoulders move closer together when the feet come under its body.",
      position: {
        top: 180,
        left: 320
      }
    },
    {
      title: "Legs",
      content: "Long slender bones increases stride yet can take high-speed impact. " +
              "The way muscles connect to bones at each joint lets the cat quickly kick into high gear.",
      position: {
        top: 400,
        left: 380
      }
    },
    {
      title: "Shoulder bone (Pectoral girdle)",
      content: "The shoulder bone (pectoral girdle) does not attach to the collarbone, " +
              "thus allowing the shoulders to move freely. This increases the length of the stride.",
      position: {
        top: 200,
        left: 550
      }
    },
    {
      title: "Skull",
      content: "The cat skulls are different from other carnivore species, as they have a flat nose and " +
              "enlarge nasal cavity. There is a large area for the strong jaw muscles, although overall " +
              "the cheetah's skull is smaller compared to that of the leopard and lion.",
      position: {
        top: 200,
        left: 780
      }
    }
  ];

  render() {
    return (
      <div>
        <PopUpLabelledDiagram
          image={image_cheetah_skeletal_anatomy}
          width={960}
          height={640}
          items={CheetahSkeletalAnatomyDiagram.__ITEMS__}
        />
      </div>
    );
  }
}
