/**
 * CheetahOlympics.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jul 17, 2020
 * Updated  : Jul 17, 2020
 */

import React from 'react'

import QuizBoard from '../shared/QuizBoard'

import QnAPopUp from '../shared/QnAPopUp'

import './CheetahOlympics.css'

export default class CheetahOlympics extends React.Component {

  static __ITEMS__ = [
    {
      title: "Lion",
      description: "80 km/hr (2nd place)",
      position: {
        top: 40,
        left: 40
      }
    },
    {
      title: "Human",
      description: "45 km/hr (7th place)",
      position: {
        top: 40,
        left: 280
      }
    },
    {
      title: "Zebra",
      description: "58 km/hr (6th place) ",
      position: {
        top: 40,
        left: 520
      }
    },
    {
      title: "Black Mamba",
      description: "32 km/hr (9th place)",
      position: {
        top: 240,
        left: 40
      }
    },
    {
      title: "Wildebeest",
      description: "78 km/hr (3rd place)",
      position: {
        top: 240,
        left: 280
      }
    },
    {
      title: "Cheetah",
      description: "110 km/hr (1st place 🏆)",
      position: {
        top: 240,
        left: 520
      }
    },
    {
      title: "Race Horse",
      description: "60 km/h (5th place)",
      position: {
        top: 440,
        left: 40
      }
    },
    {
      title: "Elephant",
      description: "65 km/hr (4th place)",
      position: {
        top: 440,
        left: 280
      }
    },
    {
      title: "Warthog",
      description: "40 km/hr (8th place)",
      position: {
        top: 440,
        left: 520
      }
    },
    {
      title: "Jackal",
      description: "16 km/hr (10th place)",
      position: {
        top: 640,
        left: 280
      }
    },
    {
      title: "Second fastest animal in the world",
      description: "Pronghorn antelope, a North American species, sprints up to 86 km/hr.",
      position: {
        top: 840,
        left: 40
      }
    },
    {
      title: "Fastest animal in the world",
      description: "Peregrine falcon, a bird species, dives at 360km/hr.",
      fontSize: 16,
      position: {
        top: 840,
        left: 520
      }
    },
  ]

  render() {
    return (
      <div className="CheetahOlympicsOuterContainer">
        <div className="CheetahOlympicsInnerContainer">
          <h4 className="CheetahOlympicsTitle">Cheetah Olympics</h4>

          <p>Frankie Fredericks, Namibian Olympic silver medal sprinter, ran 200 meters in 19.92 seconds.</p>

          <p>The cheetah can run the same distance in 6.54 seconds.</p>

          <p className="CheetahOlympicsSubtitle">Who will win the race?</p>
          <p>Which is the fastest land animal in Africa?</p>

          <QuizBoard
            width={720}
            height={1040}
            items={CheetahOlympics.__ITEMS__}
          />
        </div>
        <div className="CheetahOlympicsQnAPopUpContainer">
          <QnAPopUp
            content="The pronghorn antelope is the fastest land animal in North America. When the first cheetahs ancestors roamed in North America, they used to prey on pronghorn antelopes."
          />
        </div>
      </div>
    );
  }
}
