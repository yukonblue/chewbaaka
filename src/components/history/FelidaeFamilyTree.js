/**
 * FelidaeFamilyTree.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jul 05, 2020
 * Updated  : Jul 12, 2020
 */

import React from 'react';

import "semantic-ui-css/semantic.min.css";

import TextReveal from '../shared/TextReveal'

import { getElementStyleClassName } from '../../styling/styling'

import './FelidaeFamilyTree.css'

/** Puma lineage */
import image_cheetah from './assets/felidae/puma/felidae_cheetah_Acinonyx_jubatus.jpg'
import image_jaguarundi from './assets/felidae/puma/felidae_jaguarundi_Herpailurus_yagouaroundi.jpg'
import image_puma from './assets/felidae/puma/felidae_puma_Puma_concolor.jpg'

/** Lynx lineage */
import image_eurasian_lynx from './assets/felidae/lynx/felidae_eurasian_lynx_Lynx_lynx.jpg'
import image_canadian_lynx from './assets/felidae/lynx/felidae_canadian_lynx_Lynx_canadensis.jpg'
import image_iberian_lynx from './assets/felidae/lynx/felidae_iberian_lynx_Lynx_pardinus.jpg'
import image_bobcat from './assets/felidae/lynx/felidae_bobcat_Lynx_rufus.jpg'

/** Panthera lineage */
import image_tiger from './assets/felidae/panthera/felidae_tiger_Panthera_tigris.jpg'
import image_lion from './assets/felidae/panthera/felidae_lion_Panthera_leo.jpg'
import image_jaguar from './assets/felidae/panthera/felidae_jaguar_Panthera_onca.jpg'
import image_leopard from './assets/felidae/panthera/felidae_leopard_Panthera_pardus.jpg'
import image_snow_leopard from './assets/felidae/panthera/felidae_snow_leopard_Panthera_uncia.jpg'
import image_mainland_clouded_leopard from './assets/felidae/panthera/felidae_mainland_clouded_leopard_Neofelis_nebulosa.jpg'
import image_sunda_clouded_leopard from './assets/felidae/panthera/felidae_sunda_clouded_leopard_Neofelis_diardi.jpg'

/** Bay Cat lineage */
import image_asiatic_golden_cat from './assets/felidae/baycat/felidae_asiatic_golden_cat_Catopuma_temminckii.jpg'
import image_borneo_bay_cat from './assets/felidae/baycat/felidae_borneo_bay_cat_Catopuma_badia.jpg'
import image_marbled_cat from './assets/felidae/baycat/felidae_marbled_cat_Pardofelis_marmorata.jpg'

/** Leopard Cat lineage */
import image_fishing_cat from './assets/felidae/leopardcat/felidae_fishing_cat_Prionailurus_viverrinus.jpg'
import image_mainland_leopard_cat from './assets/felidae/leopardcat/felidae_mainland_leopard_cat_Prionailurus_bengalensis.jpg'
import image_sunda_leopard_cat from './assets/felidae/leopardcat/felidae_sunda_leopard_cat_Prionailurus_javanensis.jpg'
import image_flat_headed_cat from './assets/felidae/leopardcat/felidae_flat_headed_cat_Prionailurus_planiceps.jpg'
import image_rusty_spotted_cat from './assets/felidae/leopardcat/felidae_rusty_spotted_cat_Prionailurus_rubiginosus.jpg'
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

/** Leopardus lineage */
import image_ocelot from './assets/felidae/leopardus/felidae_ocelot_Leopardus_pardalis.jpg'
import image_geoffroys_cat from './assets/felidae/leopardus/felidae_geoffroys_cat_Leopardus_geoffroyi.jpg'
import image_andean_cat from './assets/felidae/leopardus/felidae_andean_cat_Leopardus_jacobita.jpg'
import image_maygay from './assets/felidae/leopardus/felidae_margay_Leopardus_wiedii.jpg'
import image_pampas_cat from './assets/felidae/leopardus/felidae_pampas_cat_Leopardus_colocola.jpg'
import image_oncilla from './assets/felidae/leopardus/felidae_oncilla_Leopardus_tigrinus.jpg'
import image_southern_tiger_cat from './assets/felidae/leopardus/felidae_southern_tiger_cat_Leopardus_guttulus.jpg'
import image_guina from './assets/felidae/leopardus/felidae_guina_Leopardus_guigna.jpg'

export default function FelidaeFamilyTree() {
  return (
    <div className={getElementStyleClassName("FelidaeFamilyTreeComponentOuterContainerDiv")}>
      { /* Puma lineage */ }
      <TextReveal
        coverImage={image_cheetah}
        description="Cheetah"
        caption="Acinonyx jubatus"
        position={{top: 10, left: 10}}
      />
      <TextReveal
        coverImage={image_puma}
        description="Puma"
        caption="Puma concolor"
        position={{top: 140, left: 10}}
      />
      <TextReveal
        coverImage={image_jaguarundi}
        description="Jaguarundi"
        caption="Herpailurus yagouaroundi"
        position={{top: 270, left: 10}}
      />
      { /* Puma lineage */ }
      <TextReveal
        coverImage={image_eurasian_lynx}
        description="Eurasian Lynx"
        caption="Lynx lynx"
        position={{top: 10, left: 140}}
      />
      <TextReveal
        coverImage={image_canadian_lynx}
        description="Canadian Lynx"
        caption="Lynx canadensis"
        position={{top: 140, left: 140}}
      />
      <TextReveal
        coverImage={image_iberian_lynx}
        description="Iberian Lynx"
        caption="Lynx pardinus"
        position={{top: 270, left: 140}}
      />
      <TextReveal
        coverImage={image_bobcat}
        description="Bobcat"
        caption="Lynx pardinus"
        position={{top: 400, left: 140}}
      />
      { /* Panthera lineage */ }
      <TextReveal
        coverImage={image_tiger}
        description="Tiger"
        caption="Panthera tigris"
        position={{top: 10, left: 270}}
      />
      <TextReveal
        coverImage={image_lion}
        description="Lion"
        caption="Panthera leo"
        position={{top: 140, left: 270}}
      />
      <TextReveal
        coverImage={image_jaguar}
        description="Jaguar"
        caption="Panthera onca"
        position={{top: 270, left: 270}}
      />
      <TextReveal
        coverImage={image_leopard}
        description="Leopard"
        caption="Panthera pardus"
        position={{top: 400, left: 270}}
      />
      <TextReveal
        coverImage={image_snow_leopard}
        description="Snow Leopard"
        caption="Panthera uncia"
        position={{top: 530, left: 270}}
      />
      <TextReveal
        coverImage={image_mainland_clouded_leopard}
        description="Mainland Clouded Leopard"
        caption="Neofelis nebulosa"
        position={{top: 660, left: 270}}
      />
      <TextReveal
        coverImage={image_sunda_clouded_leopard}
        description="Sunda Clouded Leopard"
        caption="Neofelis diardi"
        position={{top: 790, left: 270}}
      />
      { /* Bay Cat lineage */ }
      <TextReveal
        coverImage={image_asiatic_golden_cat}
        description="Asiatic Golden Cat"
        caption="Catopuma temminckii"
        position={{top: 10, left: 400}}
      />
      <TextReveal
        coverImage={image_borneo_bay_cat}
        description="Borneo Bay Cat"
        caption="Catopuma badia"
        position={{top: 140, left: 400}}
      />
      <TextReveal
        coverImage={image_marbled_cat}
        description="Marbled Cat"
        caption="Pardofelis marmorata"
        position={{top: 270, left: 400}}
      />
      { /* Leopard Cat lineage */ }
      <TextReveal
        coverImage={image_fishing_cat}
        description="Fishing Cat"
        caption="Prionailurus viverrinus"
        position={{top: 10, left: 530}}
      />
      <TextReveal
        coverImage={image_mainland_leopard_cat}
        description="Mainland Leopard Cat"
        caption="Prionailurus bengalensis"
        position={{top: 140, left: 530}}
      />
      <TextReveal
        coverImage={image_sunda_leopard_cat}
        description="Sunda Leopard Cat"
        caption="Prionailurus javanensis"
        position={{top: 270, left: 530}}
      />
      <TextReveal
        coverImage={image_flat_headed_cat}
        description="Flat-headed Cat"
        caption="Prionailurus planiceps"
        position={{top: 400, left: 530}}
      />
      <TextReveal
        coverImage={image_rusty_spotted_cat}
        description="Rusty-spotted Cat"
        caption="Prionailurus rubiginosus"
        position={{top: 530, left: 530}}
      />
      <TextReveal
        coverImage={image_pallas_cat}
        description="Pallas's Cat"
        caption="Otocolobus manul"
        position={{top: 660, left: 530}}
      />
      { /* Felis lineage */ }
      <TextReveal
        coverImage={image_jungle_cat}
        description="Jungle Cat"
        caption="Felis chaus"
        position={{top: 10, left: 660}}
      />
      <TextReveal
        coverImage={image_chinese_mountain_cat}
        description="Chinese Mountain Cat"
        caption="Felis bieti"
        position={{top: 140, left: 660}}
      />
      <TextReveal
        coverImage={image_european_wildcat}
        description="European Wildcat"
        caption="Felis silvestris"
        position={{top: 270, left: 660}}
      />
      <TextReveal
        coverImage={image_african_wildcat}
        description="African-Asiatic Wildcat"
        caption="Felis lybica"
        position={{top: 400, left: 660}}
      />
      <TextReveal
        coverImage={image_sand_cat}
        description="Sand Cat"
        caption="Felis margarita"
        position={{top: 530, left: 660}}
      />
      <TextReveal
        coverImage={image_black_footed_cat}
        description="Black-footed Cat"
        caption="Felis nigripes"
        position={{top: 660, left: 660}}
      />
      { /* Caracal lineage */ }
      <TextReveal
        coverImage={image_caracal}
        description="Caracal"
        caption="Caracal caracal"
        position={{top: 10, left: 790}}
      />
      <TextReveal
        coverImage={image_serval}
        description="Serval"
        caption="Leptailurus serval"
        position={{top: 140, left: 790}}
      />
      <TextReveal
        coverImage={image_african_golden_cat}
        description="African Golden Cat"
        caption="Caracal aurata"
        position={{top: 270, left: 790}}
      />
      { /* Leopardus lineage */ }
      <TextReveal
        coverImage={image_ocelot}
        description="Ocelot"
        caption="Leopardus pardalis"
        position={{top: 10, left: 920}}
      />
      <TextReveal
        coverImage={image_geoffroys_cat}
        description="Geoffroy's Cat"
        caption="Leopardus geoffroyi"
        position={{top: 140, left: 920}}
      />
      <TextReveal
        coverImage={image_andean_cat}
        description="Andean Cat"
        caption="Leopardus jacobita"
        position={{top: 270, left: 920}}
      />
      <TextReveal
        coverImage={image_maygay}
        description="Margay"
        caption="Leopardus wiedii"
        position={{top: 400, left: 920}}
      />
      <TextReveal
        coverImage={image_pampas_cat}
        description="Pampas Cat"
        caption="Leopardus colocola"
        position={{top: 530, left: 920}}
      />
      <TextReveal
        coverImage={image_oncilla}
        description="Oncilla - Northern Tiger Cat"
        caption="Leopardus tigrinus"
        position={{top: 660, left: 920}}
      />
      <TextReveal
        coverImage={image_southern_tiger_cat}
        description="Southern Tiger Cat"
        caption="Leopardus guttulus"
        position={{top: 790, left: 920}}
      />
      <TextReveal
        coverImage={image_guina}
        description="Guiña / Kodkod"
        caption="Leopardus guigna"
        position={{top: 10, left: 1050}}
      />
    </div>
  )
}
