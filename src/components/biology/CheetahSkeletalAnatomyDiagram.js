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

import image_cheetah_skeletal_anatomy from './assets/cheetah_skeletal_anatomy.jpg'

export default class CheetahSkeletalAnatomyDiagram extends React.Component {

  static __ITEMS__ = [
    {
      title: "Title 1",
      content: "Hello. This is a regular pop-up which does not allow for lots of content. You cannot fit a lot of words here as the paragraphs will be pretty narrow.",
      position: {
        top: 100,
        left: 30
      }
    },
    {
      title: "Title 2",
      content: "This is another item"
    }
  ];

  render() {
    return (
      <div>
        <PopUpLabelledDiagram
          image={image_cheetah_skeletal_anatomy}
          width={800}
          height={530}
          items={CheetahSkeletalAnatomyDiagram.__ITEMS__}
        />
      </div>
    );
  }
}
