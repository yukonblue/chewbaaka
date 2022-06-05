/**
 * AmbassadorCard.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jun 05, 2022
 * Updated  : Jun 05, 2022
 */

import React from 'react'

import { Card, Image } from 'semantic-ui-react'

export default function AmbassadorCard({ image, name, date, description }) {
  return (
    <Card>
      <Image src={image}/>
      <Card.Content>
        <Card.Header>{name}</Card.Header>
        <Card.Meta>
          <span>Joined Cheetah Conservation Fund in {date}</span>
        </Card.Meta>
        <Card.Description>
          {description}
        </Card.Description>
      </Card.Content>
    </Card>  
  );
}
