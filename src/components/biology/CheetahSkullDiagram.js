/**
 * CheetahSkullDiagram.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jul 16, 2020
 * Updated  : Jul 30, 2020
 */

import React from 'react'

import PopUpLabelledDiagram from '../shared/PopUpLabelledDiagram'

import image_cheetah_skull from './assets/cheetah_skull.jpg'

export default class CheetahSkullDiagram extends React.Component {

  /**
   * In counterclock direction starting from the top (spine)
   */
  static __ITEMS__ = [
    {
      title: "Forward facing eyes",
      content: "Like most land predators, the cheetahs have forward-facing eyes, which provide them " +
              "binocular vision that allows them to focus on their prey, while it's stalking the prey " +
              "or chasing it at high speed.",
      position: {
        top: 160,
        left: 350
      }
    },
    {
      title: "Sagittal crest",
      content: "A sagittal crest is a ridge of bone running lengthwise along the midline " +
              "of the top of the skull of many mammalian species. The extra room formed by " +
              "the sagittal crest provide additional muscle mass that's connected to the jaw, " +
              "which gives predators extraordinary jaw strength to crush bones and shear through meat.",
      position: {
        top: 180,
        left: 750
      }
    },
    {
      title: "Zygomatic arch",
      content: "Zygomatic arch (cheekbone) is the bridge of bone extending from the temporal bone at the " +
              "side of the head around to the upper jawbone. One of its functions is to provide attachment site " +
              "for jaw (masseter) muscles used for chewing. The cheetah, like other big cats, " +
              "have fairly wide zygomatic arch to allow for more room of jaw muscle.",
      position: {
        top: 300,
        left: 500
      }
    },
    {
      title: "Snout",
      content: "Cats in general have flatter snout (nose) and enlarged nasal cavity, which allows for " +
              "higher volume of air flow when breathing, crucial for fueling the lungs during intense " +
              "activities such as pursuing a prey at very high speed.",
      position: {
        top: 220,
        left: 120
      }
    }
  ];

  render() {
    return (
      <PopUpLabelledDiagram
        image={image_cheetah_skull}
        width={900}
        height={573}
        items={CheetahSkullDiagram.__ITEMS__}
      />
    );
  }
}
