/**
 * ecology/config.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jul 19, 2020
 * Updated  : Jul 20, 2020
 */

export const config = {
  pageProps: {
    coverImage: "",
    title: "Ecology",
    subtitle: "Subtitle TBD ...",
    pageMenuItems: [
      {
        title: "Ecosystem and Habitat",
        tocImageFilename: "ecology_page_toc_menu_img_01.jpg"
      },
      {
        title: "Eco-management",
        tocImageFilename: "ecology_page_toc_menu_img_02.jpg"
      },
      {
        title: "Research",
        tocImageFilename: "ecology_page_toc_menu_img_03.jpg"
      },
    ],
  },
  contentPageIntro: {
    title: "Ecology",
    content: "TBD ..."
  },
  contentPageSections: {
    section_EcosystemAndHabitat: {
      intro: {
        title: "Ecosystem and Habitat",
        content: "Understanding the relationships and interactions of elements in the ecosystem and habitat " +
                "where cheetahs live is crucial for any conservation and management efforts. " +
                "Understanding of subjects in this area can help answer questions such as " +
                "“what animals do cheetahs prey on and eat” and “what are its roles in its habitat and " +
                "relationships with other species of animals”."
      },
      subsections: {
        subsection_WhereCheetahsLive: {
          title: "Where Cheetahs Live",
          contents: {
            part_CheetahHabitat: {
              title: "Cheetah Habitat",
              content: {
                paragraph_01:
                  "Animals, includes cheetah, are adopted to live in specific habitats. " +
                  "Cheetahs live mainly in grassland savannah. They prefer habitat which includes " +
                  "some cover in the form of bushes, medium length grass, trees, and small hills. " +
                  "Cheetahs need abundant prey in their habitat to survive and reproduce. " +
                  "In Namibia their habitat is densely bushed due to bush encroachment.",
                paragraph_02:
                  "Cheetahs sometimes live in a wide variety of habitats. They occasionally use semi-desert, " +
                  "dense woodland or mountainous terrain. Older animals unable to defend territories and young " +
                  "cheetahs just starting to live on their own use these marginal habitats."
              }
            },
            part_NamibianBiomes: {
              title: "Namibian Biomes",
              content: {
                paragraph_biomes_map_caption:
                  "Map of Namibian biomes and cheetah ranges in Namibia. " +
                  "It's clear to see that cheetahs prefer biomes that have more " +
                  "vegetation that support the animals they prey on.",
                paragraph_biome_intro:
                  "Namibia is a country with a rich biodiversity, as it spans over " +
                  "five distinct types of biomes.",
                paragraph_biome_savanna:
                  "",
                paragraph_succulent_karro:
                  "",
                paragraph_biome_karoo_nama:
                  "",
                paragraph_biome_namib_desert:
                  "",
                paragraph_biome_lakes_and_salt_pans:
                  "",
              }
            }
          }
        },
        subsection_TheCheetahsPrey: {
          title: "The Cheetah's Prey",
          contents: {
            paragraph_TheCheetahsPrey_01:
              "Cheetahs hunt mostly small antelope, young of large antelope, warthog, hare and game birds. " +
              "They may take livestock in exceptional or opportunistic cases.",
            paragraph_TheCheetahsPrey_02:
              "Cheetahs prefer game to livestock.",
            paragraph_TheCheetahsPrey_03:
              "The cheetah’s lightweight build limits the size of prey they catch. Male coalitions can, " +
              "however, overcome larger prey. Coalitions also stand a better chance at defeating their prey " +
              "against competitors than single cheetahs.",
            paragraph_TheCheetahsPrey_04:
              "Predators have to work very hard to catch their prey. Cheetahs need to carefully select the animal " +
              "they are most likely to catch. For this reason cheetahs, like all other predators, " +
              "target animals that are old, sick, very young, injured, or slow. " +
              "This allows only the strongest to survive and pass on their genes, " +
              "thus maintaining a healthier game population."
          }
        },
        subsection_CheetahsRoleInTheEcosystem: {
          title: "Cheetah's Role in the Ecosystem",
          contents: {
          }
        }
      }
    },
    section_Ecomanagement: {
      intro: {
        title: "Eco-management",
        content: "TBD ..."
      },
      subsections: {
        subsection_HuntingAndPredatorControl: {
          title: "Hunting and Predator Control",
          contents: {
          }
        },
        subsection_TheFarmingCommunity: {
          title: "The Farming Community",
          contents: {
          }
        },
        subsection_BushEncroachmentAndSolutions: {
          title: "Bush Encroachment and Solutions",
          contents: {
          }
        }
      }
    },
    section_Research: {
      intro: {
        title: "Research",
        content: "TBD ..."
      },
      subsections: {
        subsection_UnderstandingAnimalMovement: {
          title: "Understanding Animal Movement",
          contents: {
          }
        }
      }
    }
  }
};
