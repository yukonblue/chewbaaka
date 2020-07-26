/**
 * FelidaeFamilyTree.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jul 05, 2020
 * Updated  : Jul 25, 2020
 */

import React from 'react'

import "semantic-ui-css/semantic.min.css"

import TextReveal from '../shared/TextReveal'

import { getElementStyleClassName } from '../../styling/styling'

import './FelidaeFamilyTree.css'

/** Puma lineage */
import image_cheetah from './assets/felidae/puma/felidae_cheetah_Acinonyx_jubatus_240x240.jpg'
import image_jaguarundi from './assets/felidae/puma/felidae_jaguarundi_Herpailurus_yagouaroundi_240x240.jpg'
import image_puma from './assets/felidae/puma/felidae_puma_Puma_concolor_240x240.jpg'

/** Lynx lineage */
import image_eurasian_lynx from './assets/felidae/lynx/felidae_eurasian_lynx_Lynx_lynx_240x240.jpg'
import image_canadian_lynx from './assets/felidae/lynx/felidae_canadian_lynx_Lynx_canadensis_240x240.jpg'
import image_iberian_lynx from './assets/felidae/lynx/felidae_iberian_lynx_Lynx_pardinus_240x240.jpg'
import image_bobcat from './assets/felidae/lynx/felidae_bobcat_Lynx_rufus_240x240.jpg'

/** Panthera lineage */
import image_tiger from './assets/felidae/panthera/felidae_tiger_Panthera_tigris_240x240.jpg'
import image_lion from './assets/felidae/panthera/felidae_lion_Panthera_leo_240x240.jpg'
import image_jaguar from './assets/felidae/panthera/felidae_jaguar_Panthera_onca_240x240.jpg'
import image_leopard from './assets/felidae/panthera/felidae_leopard_Panthera_pardus_240x240.jpg'
import image_snow_leopard from './assets/felidae/panthera/felidae_snow_leopard_Panthera_uncia_240x240.jpg'
import image_mainland_clouded_leopard from './assets/felidae/panthera/felidae_mainland_clouded_leopard_Neofelis_nebulosa_240x240.jpg'
import image_sunda_clouded_leopard from './assets/felidae/panthera/felidae_sunda_clouded_leopard_Neofelis_diardi_240x240.jpg'

/** Bay Cat lineage */
import image_asiatic_golden_cat from './assets/felidae/baycat/felidae_asiatic_golden_cat_Catopuma_temminckii_240x240.jpg'
import image_borneo_bay_cat from './assets/felidae/baycat/felidae_borneo_bay_cat_Catopuma_badia_240x240.jpg'
import image_marbled_cat from './assets/felidae/baycat/felidae_marbled_cat_Pardofelis_marmorata_240x240.jpg'

/** Leopard Cat lineage */
import image_fishing_cat from './assets/felidae/leopardcat/felidae_fishing_cat_Prionailurus_viverrinus_240x240.jpg'
import image_mainland_leopard_cat from './assets/felidae/leopardcat/felidae_mainland_leopard_cat_Prionailurus_bengalensis_240x240.jpg'
import image_sunda_leopard_cat from './assets/felidae/leopardcat/felidae_sunda_leopard_cat_Prionailurus_javanensis_240x240.jpg'
import image_flat_headed_cat from './assets/felidae/leopardcat/felidae_flat_headed_cat_Prionailurus_planiceps_240x240.jpg'
import image_rusty_spotted_cat from './assets/felidae/leopardcat/felidae_rusty_spotted_cat_Prionailurus_rubiginosus_240x240.jpg'
import image_pallas_cat from './assets/felidae/leopardcat/felidae_pallas_cat_Otocolobus_manul_240x240.jpg'

/** Felis lineage */
import image_jungle_cat from './assets/felidae/felis/felidae_jungle_cat_Felis_chaus_240x240.jpg'
import image_chinese_mountain_cat from './assets/felidae/felis/felidae_chinese_mountain_cat_Felis_bieti_240x240.jpg'
import image_european_wildcat from './assets/felidae/felis/felidae_european_wildcat_Felis_silvestris_240x240.jpg'
import image_african_wildcat from './assets/felidae/felis/felidae_african_wildcat_Felis_lybica_240x240.jpg'
import image_sand_cat from './assets/felidae/felis/felidae_sand_cat_Felis_margarita_240x240.jpg'
import image_black_footed_cat from './assets/felidae/felis/felidae_black_footed_cat_Felis_nigripes_240x240.jpg'

/** Caracal lineage */
import image_caracal from './assets/felidae/caracal/felidae_caracal_Caracal_caracal_240x240.jpg'
import image_serval from './assets/felidae/caracal/felidae_serval_Leptailurus_serval_240x240.jpg'
import image_african_golden_cat from './assets/felidae/caracal/felidae_african_golden_cat_Caracal_aurata_240x240.jpg'

/** Leopardus lineage */
import image_ocelot from './assets/felidae/leopardus/felidae_ocelot_Leopardus_pardalis_240x240.jpg'
import image_geoffroys_cat from './assets/felidae/leopardus/felidae_geoffroys_cat_Leopardus_geoffroyi_240x240.jpg'
import image_andean_cat from './assets/felidae/leopardus/felidae_andean_cat_Leopardus_jacobita_240x240.jpg'
import image_maygay from './assets/felidae/leopardus/felidae_margay_Leopardus_wiedii_240x240.jpg'
import image_pampas_cat from './assets/felidae/leopardus/felidae_pampas_cat_Leopardus_colocola_240x240.jpg'
import image_oncilla from './assets/felidae/leopardus/felidae_oncilla_Leopardus_tigrinus_240x240.jpg'
import image_southern_tiger_cat from './assets/felidae/leopardus/felidae_southern_tiger_cat_Leopardus_guttulus_240x240.jpg'
import image_guina from './assets/felidae/leopardus/felidae_guina_Leopardus_guigna_240x240.jpg'

const contentColorLynx = [29,88,182];
const contentColorPanthera = [248,180,14];
const contentColorLeopardCat = [232,10,147];
const contentColorCaracal = [12,231,168];
const contentColorFelis = [154,77,13];
const contentColorBayCat = [95,0,221];
const contentColorLeopardus = [41,105,3];

export default function FelidaeFamilyTree() {
  return (
    <div className={getElementStyleClassName("FelidaeFamilyTreeComponentOuterContainerDiv")}>
      { /* Puma lineage */ }
      <TextReveal
        coverImage={image_cheetah}
        description="Cheetah"
        caption="Acinonyx jubatus"
        contentColor="orange"
        position={{top: 10, left:35}}
      />
      <TextReveal
        coverImage={image_puma}
        description="Puma"
        caption="Puma concolor"
        contentColor="orange"
        position={{top: 160, left: 15}}
      />
      <TextReveal
        coverImage={image_jaguarundi}
        description="Jaguarundi"
        caption="Herpailurus yagouaroundi"
        contentColor="orange"
        position={{top: 310, left: 40}}
      />
      { /* Lynx lineage */ }
      <TextReveal
        coverImage={image_eurasian_lynx}
        description="Eurasian Lynx"
        caption="Lynx lynx"
        contentColor={`rgb(${contentColorLynx}`}
        position={{top: 30, left: 180}}
      />
      <TextReveal
        coverImage={image_canadian_lynx}
        description="Canadian Lynx"
        caption="Lynx canadensis"
        contentColor={`rgb(${contentColorLynx}`}
        position={{top: 190, left: 190}}
      />
      <TextReveal
        coverImage={image_iberian_lynx}
        description="Iberian Lynx"
        caption="Lynx pardinus"
        contentColor={`rgb(${contentColorLynx}`}
        position={{top: 350, left: 200}}
      />
      <TextReveal
        coverImage={image_bobcat}
        description="Bobcat"
        caption="Lynx rufus"
        contentColor={`rgb(${contentColorLynx}`}
        position={{top: 500, left: 180}}
      />
      { /* Panthera lineage */ }
      <TextReveal
        coverImage={image_tiger}
        description="Tiger"
        caption="Panthera tigris"
        contentColor={`rgb(${contentColorPanthera})`}
        position={{top: 20, left: 430}}
      />
      <TextReveal
        coverImage={image_lion}
        description="Lion"
        caption="Panthera leo"
        contentColor={`rgb(${contentColorPanthera})`}
        position={{top: 30, left: 580}}
      />
      <TextReveal
        coverImage={image_jaguar}
        description="Jaguar"
        caption="Panthera onca"
        contentColor={`rgb(${contentColorPanthera})`}
        position={{top: 180, left: 400}}
      />
      <TextReveal
        coverImage={image_leopard}
        description="Leopard"
        caption="Panthera pardus"
        contentColor={`rgb(${contentColorPanthera})`}
        position={{top: 180, left: 550}}
      />
      <TextReveal
        coverImage={image_snow_leopard}
        description="Snow Leopard"
        caption="Panthera uncia"
        contentColor={`rgb(${contentColorPanthera})`}
        position={{top: 330, left: 390}}
      />
      <TextReveal
        coverImage={image_mainland_clouded_leopard}
        description="Mainland Clouded Leopard"
        caption="Neofelis nebulosa"
        contentColor={`rgb(${contentColorPanthera})`}
        position={{top: 470, left: 330}}
      />
      <TextReveal
        coverImage={image_sunda_clouded_leopard}
        description="Sunda Clouded Leopard"
        caption="Neofelis diardi"
        contentColor={`rgb(${contentColorPanthera})`}
        position={{top: 620, left: 320}}
      />
      { /* Bay Cat lineage */ }
      <TextReveal
        coverImage={image_asiatic_golden_cat}
        description="Asiatic Golden Cat"
        caption="Catopuma temminckii"
        contentColor={`rgb(${contentColorBayCat})`}
        position={{top: 420, left: 1340}}
      />
      <TextReveal
        coverImage={image_borneo_bay_cat}
        description="Borneo Bay Cat"
        caption="Catopuma badia"
        contentColor={`rgb(${contentColorBayCat})`}
        position={{top: 490, left: 1180}}
      />
      <TextReveal
        coverImage={image_marbled_cat}
        description="Marbled Cat"
        caption="Pardofelis marmorata"
        contentColor={`rgb(${contentColorBayCat})`}
        position={{top: 540, left: 1020}}
      />
      { /* Leopardus lineage */ }
      <TextReveal
        coverImage={image_ocelot}
        description="Ocelot"
        caption="Leopardus pardalis"
        contentColor={`rgb(${contentColorLeopardus})`}
        position={{top: 640, left: 1400}}
      />
      <TextReveal
        coverImage={image_geoffroys_cat}
        description="Geoffroy's Cat"
        caption="Leopardus geoffroyi"
        contentColor={`rgb(${contentColorLeopardus})`}
        position={{top: 780, left: 1370}}
      />
      <TextReveal
        coverImage={image_andean_cat}
        description="Andean Cat"
        caption="Leopardus jacobita"
        contentColor={`rgb(${contentColorLeopardus})`}
        position={{top: 700, left: 1200}}
      />
      <TextReveal
        coverImage={image_maygay}
        description="Margay"
        caption="Leopardus wiedii"
        contentColor={`rgb(${contentColorLeopardus})`}
        position={{top: 720, left: 1020}}
      />
      <TextReveal
        coverImage={image_pampas_cat}
        description="Pampas Cat"
        caption="Leopardus colocola"
        contentColor={`rgb(${contentColorLeopardus})`}
        position={{top: 660, left: 880}}
      />
      <TextReveal
        coverImage={image_oncilla}
        description="Oncilla - Northern Tiger Cat"
        caption="Leopardus tigrinus"
        contentColor={`rgb(${contentColorLeopardus})`}
        position={{top: 670, left: 730}}
      />
      <TextReveal
        coverImage={image_southern_tiger_cat}
        description="Southern Tiger Cat"
        caption="Leopardus guttulus"
        contentColor={`rgb(${contentColorLeopardus})`}
        position={{top: 730, left: 580}}
      />
      <TextReveal
        coverImage={image_guina}
        description="Guiña / Kodkod"
        caption="Leopardus guigna"
        contentColor={`rgb(${contentColorLeopardus})`}
        position={{top: 850, left: 1200}}
      />
      { /* Leopard Cat lineage */ }
      <TextReveal
        coverImage={image_fishing_cat}
        description="Fishing Cat"
        caption="Prionailurus viverrinus"
        contentColor={`rgb(${contentColorLeopardCat})`}
        position={{top: 10, left: 790}}
      />
      <TextReveal
        coverImage={image_mainland_leopard_cat}
        description="Mainland Leopard Cat"
        caption="Prionailurus bengalensis"
        contentColor={`rgb(${contentColorLeopardCat})`}
        position={{top: 150, left: 750}}
      />
      <TextReveal
        coverImage={image_sunda_leopard_cat}
        description="Sunda Leopard Cat"
        caption="Prionailurus javanensis"
        contentColor={`rgb(${contentColorLeopardCat})`}
        position={{top: 300, left: 700}}
      />
      <TextReveal
        coverImage={image_flat_headed_cat}
        description="Flat-headed Cat"
        caption="Prionailurus planiceps"
        contentColor={`rgb(${contentColorLeopardCat})`}
        position={{top: 400, left: 560}}
      />
      <TextReveal
        coverImage={image_rusty_spotted_cat}
        description="Rusty-spotted Cat"
        caption="Prionailurus rubiginosus"
        contentColor={`rgb(${contentColorLeopardCat})`}
        position={{top: 450, left: 700}}
      />
      <TextReveal
        coverImage={image_pallas_cat}
        description="Pallas's Cat"
        caption="Otocolobus manul"
        contentColor={`rgb(${contentColorLeopardCat})`}
        position={{top: 560, left: 530}}
      />
      { /* Caracal lineage */ }
      <TextReveal
        coverImage={image_caracal}
        description="Caracal"
        caption="Caracal caracal"
        contentColor={`rgb(${contentColorCaracal})`}
        position={{top: 10, left: 950}}
      />
      <TextReveal
        coverImage={image_serval}
        description="Serval"
        caption="Leptailurus serval"
        contentColor={`rgb(${contentColorCaracal})`}
        position={{top: 160, left: 900}}
      />
      <TextReveal
        coverImage={image_african_golden_cat}
        description="African Golden Cat"
        caption="Caracal aurata"
        contentColor={`rgb(${contentColorCaracal})`}
        position={{top: 300, left: 860}}
      />
      { /* Felis lineage */ }
      <TextReveal
        coverImage={image_jungle_cat}
        description="Jungle Cat"
        caption="Felis chaus"
        position={{top: 30, left: 1120}}
        contentColor={`rgb(${contentColorFelis})`}
      />
      <TextReveal
        coverImage={image_chinese_mountain_cat}
        description="Chinese Mountain Cat"
        caption="Felis bieti"
        position={{top: 170, left: 1070}}
        contentColor={`rgb(${contentColorFelis})`}
      />
      <TextReveal
        coverImage={image_european_wildcat}
        description="European Wildcat"
        caption="Felis silvestris"
        position={{top: 170, left: 1200}}
        contentColor={`rgb(${contentColorFelis})`}
      />
      <TextReveal
        coverImage={image_african_wildcat}
        description="African-Asiatic Wildcat"
        caption="Felis lybica"
        position={{top: 230, left: 1330}}
        contentColor={`rgb(${contentColorFelis})`}
      />
      <TextReveal
        coverImage={image_sand_cat}
        description="Sand Cat"
        caption="Felis margarita"
        position={{top: 300, left: 1200}}
        contentColor={`rgb(${contentColorFelis})`}
      />
      <TextReveal
        coverImage={image_black_footed_cat}
        description="Black-footed Cat"
        caption="Felis nigripes"
        position={{top: 320, left: 1060}}
        contentColor={`rgb(${contentColorFelis})`}
      />
    </div>
  )
}
