/**
 * NamibianBiomes.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jul 20, 2020
 * Updated  : Jul 26, 2020
 */

import React from 'react'

import ContentPageCaptionLabel from '../shared/ContentPageCaptionLabel'

import ImageSlideModal from '../shared/ImageSlideModal'

import image_biome_savanna from './assets/biome_savanna.jpg'
import image_biome_succulent_karro from './assets/biome_succulent_karro_biome.jpg'
import image_biome_nama_karoo from './assets/biome_nama_karoo.jpg'
import image_biome_namib_desert from './assets/biome_namib_desert.jpg'
import image_biome_lakes_and_salt_pans from './assets/biome_lakes_and_salt_pans.jpg'

export default function NamibianBiomes(props) {
  const content = props.part.content;

  return (
    <div style={{width: 480}}>
      <ImageSlideModal
        slides={[
          {
            image: image_biome_savanna,
            title: "Savanna biome",
            description: content["paragraph_biome_savanna"]
          },
          {
            image: image_biome_succulent_karro,
            title: "Succulent Karoo biome",
            description: content["paragraph_succulent_karro"]
          },
          {
            image: image_biome_nama_karoo,
            title: "Nama Karoo biome",
            description: content["paragraph_biome_nama_karoo"]
          },
          {
            image: image_biome_namib_desert,
            title: "Desert biome",
            description: content["paragraph_biome_namib_desert"]
          },
          {
            image: image_biome_lakes_and_salt_pans,
            title: "Lakes and salt pans biome",
            description: content["paragraph_biome_lakes_and_salt_pans"]
          }
        ]}
      />
      <ContentPageCaptionLabel>
        Click to learn more about the biomes of Namibia.
      </ContentPageCaptionLabel>
    </div>
  );
}
