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

/** Panthera lineage */
import image_tiger from './assets/felidae/panthera/felidae_tiger.jpg'
import image_lion from './assets/felidae/panthera/felidae_lion.jpg'
import image_jaguar from './assets/felidae/panthera/felidae_jaguar.jpg'
import image_leopard from './assets/felidae/panthera/felidae_leopard.jpg'
import image_snow_leopard from './assets/felidae/panthera/felidae_snow_leopard.jpg'
import image_mainland_clouded_leopard from './assets/felidae/panthera/felidae_mainland_clouded_leopard.jpg'
import image_sunda_clouded_leopard from './assets/felidae/panthera/felidae_sunda_clouded_leopard.jpg'

/** Bay Cat lineage */
import image_asiatic_golden_cat from './assets/felidae/baycat/felidae_asiatic_golden_cat.jpg'
import image_borneo_bay_cat from './assets/felidae/baycat/felidae_borneo_bay_cat.jpg'
import image_marbled_cat from './assets/felidae/baycat/felidae_marbled_cat.jpg'

/** Leopard Cat lineage */
import image_fishing_cat from './assets/felidae/leopardcat/felidae_fishing_cat.jpg'
import image_mainland_leopard_cat from './assets/felidae/leopardcat/felidae_mainland_leopard_cat_prionailurus_bengalensis.jpg'
import image_sunda_leopard_cat from './assets/felidae/leopardcat/felidae_sunda_leopard_cat_prionailurus_javanensis.jpg'
import image_flat_headed_cat from './assets/felidae/leopardcat/felidae_flat_headed_cat_prionailurus_planiceps.jpg'
import image_rusty_spotted_cat from './assets/felidae/leopardcat/felidae_rusty_spotted_cat_prionailurus_rubiginosus.jpg'
import image_pallas_cat from './assets/felidae/leopardcat/felidae_pallas_cat_Otocolobus_manul.jpg'

/** Felis lineage */
import image_jungle_cat from './assets/felidae/felis/felidae_jungle_cat_Felis_chaus.jpg'
import image_chinese_mountain_cat from './assets/felidae/felis/felidae_chinese_mountain_cat_Felis_bieti.jpg'
import image_european_wildcat from './assets/felidae/felis/felidae_european_wildcat_Felis_silvestris.jpg'
import image_african_wildcat from './assets/felidae/felis/felidae_african_wildcat_Felis_lybica.jpg'
import image_sand_cat from './assets/felidae/felis/felidae_sand_cat_Felis_margarita.jpg'
import image_black_footed_cat from './assets/felidae/felis/felidae_black_footed_cat_Felis_nigripes.jpg'

/** Caracal lineage */
import image_caracal from './assets/felidae/caracal/felidae_caracal_Caracal_caracal.jpg'
import image_serval from './assets/felidae/caracal/felidae_serval_Leptailurus_serval.jpg'
import image_african_golden_cat from './assets/felidae/caracal/felidae_african_golden_cat_Caracal_aurata.jpg'

function FelidaeFamilyTree() {
  return (
    <div className="FelidaeFamilyTreeComponentOuterContainerDiv">
      { /* Puma lineage */ }
      <TextReveal
        coverImage={image_cheetah}
        description="Cheetah (Acinonyx jubatus)"
        position={{top: 10, left: 10}}
      />
      <TextReveal
        coverImage={image_puma}
        description="Puma (Puma concolor)"
        position={{top: 140, left: 10}}
      />
      <TextReveal
        coverImage={image_jaguarundi}
        description="Jaguarundi (Herpailurus yagouaroundi)"
        position={{top: 270, left: 10}}
      />
      { /* Puma lineage */ }
      <TextReveal
        coverImage={image_eurasian_lynx}
        description="Eurasian Lynx (Lynx lynx)"
        position={{top: 10, left: 140}}
      />
      <TextReveal
        coverImage={image_canadian_lynx}
        description="Canadian Lynx (Lynx canadensis)"
        position={{top: 140, left: 140}}
      />
      <TextReveal
        coverImage={image_iberian_lynx}
        description="Iberian Lynx (Lynx pardinus)"
        position={{top: 270, left: 140}}
      />
      <TextReveal
        coverImage={image_bobcat}
        description="Bobcat (Lynx rufus)"
        position={{top: 400, left: 140}}
      />
      { /* Panthera lineage */ }
      <TextReveal
        coverImage={image_tiger}
        description="Tiger (Panthera tigris)"
        position={{top: 10, left: 270}}
      />
      <TextReveal
        coverImage={image_lion}
        description="Lion (Panthera leo)"
        position={{top: 140, left: 270}}
      />
      <TextReveal
        coverImage={image_jaguar}
        description="Jaguar (Panthera onca)"
        position={{top: 270, left: 270}}
      />
      <TextReveal
        coverImage={image_leopard}
        description="Leopard (Panthera pardus)"
        position={{top: 400, left: 270}}
      />
      <TextReveal
        coverImage={image_snow_leopard}
        description="Snow Leopard (Panthera uncia)"
        position={{top: 530, left: 270}}
      />
      <TextReveal
        coverImage={image_mainland_clouded_leopard}
        description="Mainland Clouded Leopard (Neofelis nebulosa)"
        position={{top: 660, left: 270}}
      />
      <TextReveal
        coverImage={image_sunda_clouded_leopard}
        description="Sunda Clouded Leopard (Neofelis diardi)"
        position={{top: 790, left: 270}}
      />
      { /* Bay Cat lineage */ }
      <TextReveal
        coverImage={image_asiatic_golden_cat}
        description="Asiatic Golden Cat (Catopuma temminckii)"
        position={{top: 10, left: 400}}
      />
      <TextReveal
        coverImage={image_borneo_bay_cat}
        description="Borneo Bay Cat (Catopuma badia)"
        position={{top: 140, left: 400}}
      />
      <TextReveal
        coverImage={image_marbled_cat}
        description="Marbled Cat (Pardofelis marmorata)"
        position={{top: 270, left: 400}}
      />
      { /* Leopard Cat lineage */ }
      <TextReveal
        coverImage={image_fishing_cat}
        description="Fishing Cat (Prionailurus viverrinus)"
        position={{top: 10, left: 530}}
      />
      <TextReveal
        coverImage={image_mainland_leopard_cat}
        description="Mainland Leopard Cat (Prionailurus bengalensis)"
        position={{top: 140, left: 530}}
      />
      <TextReveal
        coverImage={image_sunda_leopard_cat}
        description="Sunda Leopard Cat (Prionailurus javanensis)"
        position={{top: 270, left: 530}}
      />
      <TextReveal
        coverImage={image_flat_headed_cat}
        description="Flat-headed Cat (Prionailurus planiceps)"
        position={{top: 400, left: 530}}
      />
      <TextReveal
        coverImage={image_rusty_spotted_cat}
        description="Rusty-spotted Cat (Prionailurus rubiginosus)"
        position={{top: 530, left: 530}}
      />
      <TextReveal
        coverImage={image_pallas_cat}
        description="Pallas's Cat (Otocolobus manul)"
        position={{top: 660, left: 530}}
      />
      { /* Felis lineage */ }
      <TextReveal
        coverImage={image_jungle_cat}
        description="Jungle Cat (Felis chaus)"
        position={{top: 10, left: 660}}
      />
      <TextReveal
        coverImage={image_chinese_mountain_cat}
        description="Chinese Mountain Cat (Felis bieti)"
        position={{top: 140, left: 660}}
      />
      <TextReveal
        coverImage={image_european_wildcat}
        description="European Wildcat (Felis silvestris)"
        position={{top: 270, left: 660}}
      />
      <TextReveal
        coverImage={image_african_wildcat}
        description="African-Asiatic Wildcat (Felis lybica)"
        position={{top: 400, left: 660}}
      />
      <TextReveal
        coverImage={image_sand_cat}
        description="Sand Cat (Felis margarita)"
        position={{top: 530, left: 660}}
      />
      <TextReveal
        coverImage={image_black_footed_cat}
        description="Black-footed Cat (Felis nigripes)"
        position={{top: 660, left: 660}}
      />
      { /* Caracal lineage */ }
      <TextReveal
        coverImage={image_caracal}
        description="Caracal (Caracal caracal)"
        position={{top: 10, left: 790}}
      />
      <TextReveal
        coverImage={image_serval}
        description="Serval (Leptailurus serval)"
        position={{top: 140, left: 790}}
      />
      <TextReveal
        coverImage={image_african_golden_cat}
        description="African Golden Cat (Caracal aurata)"
        position={{top: 270, left: 790}}
      />
    </div>
  )
}

export default FelidaeFamilyTree;
