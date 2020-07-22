/**
 * ecology/config.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jul 19, 2020
 * Updated  : Jul 22, 2020
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
            part_CheetahsRole: {
              title: "Cheetah's role",
              content: {
                paragraph_CheetahsRole_01:
                  "Every animal species has its role (or niche) in the ecosystem that it lives in. " +
                  "As a carnivorous predator, the cheetah's role in the ecosystem is important as it helps to " +
                  "maintain a balanced and healthy food web.",
                paragraph_CheetahsRole_02:
                  "One of the cheetah's roles in the ecosystem is to help keep the population of grazing animals " +
                  "a healthy state. Because of the fact that cheetahs do not have the strength to go after big games " +
                  "such as wildebeest, elands, and kudus, they go after the ones that are young, weak, or sick. " +
                  "This helps to ensure that only the strongest of those species will survive, and also the populations " +
                  "of those species won't reach the limit the ecosystem could handle such that it will have negative consequences."
              }
            },
            part_RelationshipsWithOtherSpecies: {
              title: "Relationships with other species",
              content: {
                paragraph_01:
                  "Perhaps the cheetahs' closest interactions with other species of animals other than the ones preyed upon " +
                  "are their competitors. While there are no species of animals that solely prey on the cheetahs as a food source, " +
                  "many compete with the cheetahs for food, territory, and dominance. Lions, leopards, and hyenas are the " +
                  "most formidable competitors that would come into the way of the cheetahs.",
                paragraph_02:
                  "Despite the fact that competitions inevitably lead to casualties, it is an important aspect of any healthy ecosystem. " +
                  "Competitions ensure that no species of animal absolutely dominates all the resources in a territory, and resource " +
                  "are partitioned accordingly among the competing species as much as possible to minimize conflict. This leads to a balanced " +
                  "ecosystem with the most biodiversity, as each species is unique in its role within the ecosystem."
              }
            }
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
            part_Hunting: {
              content: {
                part_Traditional_Hunting_versus_Poaching: {
                  title: "Traditional Hunting versus Poaching?",
                  content: {
                    paragraph_01:
                      "Subsistence hunting for food is carried out throughout the world where families live off the land. " +
                      "Traditional methods of traps and snares are still popular but more and more people are turning toward guns."
                  }
                },
                part_Conservation_Through_Sustainable_Utilization: {
                  title: "Conservation Through Sustainable Utilization",
                  content: {
                    paragraph_01:
                      "Sustainability refers to a process that can last forever. Utilizing a resource sustainably means that using " +
                      "the natural resource will not destroy it. Hunting can be a form of sustainable use. " +
                      "A sustainable outlook on hunting also sets aside a portion of the revenue collected form the " +
                      "hunt to support conservation efforts for the species."
                  },
                  is_part_What_is_Sustainable_Utilization: true
                },
                part_Hunting: {
                  title: "Hunting",
                  content: {
                    paragraph_01:
                      "Hunting has changed through the ages from a necessity for survival, to a sport and a management activity. " +
                      "Ethical hunters and trophy hunting operations operate with the best intentions for conservation and the " +
                      "continued existence of the population being hunted.",
                    paragraph_02:
                      "In Namibia, there are a number of laws that regulate hunting. Permits are required to hunt wildlife that " +
                      "has been divided up into numerous categories, namely, hunt-able game. With each of these categories " +
                      "there are differing requirements for permits."
                  }
                },
                part_Population_Control: {
                  title: "Population Control",
                  content: {
                    paragraph_01:
                      "Game farmers have to manage their herds throughout the year and on occasion they cull animals to reduce their numbers, " +
                      "through shooting or live sale. When animals are shot, the meat is sold for food. " +
                      "Game capture units transport and sell live game. Permits are required for these operations."
                  }
                },
              }
            },
            part_Predator_Control: {
              title: "Predator Control",
              content: {
                paragraph_01:
                  "Predator control is an issue around the globe.",
                paragraph_02:
                  "An animal usually resorts to killing livestock due to a medical problem, human influence or a natural incident which " +
                  "renders it unable to catch its wild prey. Only a cheetah that consistently hunts livestock should be considered a problem animal. " +
                  "It is critical to identify the individual culprit causing losses rather than remove all cheetahs indiscriminately. " +
                  "The opportunistic killing of inadequately protected livestock, such a new born calves in the bush, indicates poor livestock " +
                  "management which does not warrant the removal of the predator. Some farmers trap, poison and shoot cheetahs. " +
                  "This may not be due ti stock losses, but simply because the predator entered the farm and is perceived as a threat to livestock or family.",
                paragraph_03:
                  "Predator control most commonly involves setting live capture cage traps. Farmers also use gin traps and poisoned carcasses. " +
                  "These methods only increase problems as they tend to lure and kill indiscriminately. Animals suffering as a result include ones " +
                  "which benefit the farmland ecosystem, as such pangolin, aardwolf, honey badger and bat eared fox."
              },
              textBubble: {
                title: "Predator control is an issue around the globe.",
                content: "Proven farm and livestock management techniques can be employed to deter predations from problem animals. " +
                        "One great example is CCF's Livestock Guarding Dog program."
              }
            }
          }
        },
        subsection_TheFarmingCommunity: {
          title: "The Farming Community",
          subtitle: "New methods of livestock and wildlife management are incorporated into agricultural practices to ensure a healthy ecosystem.",
          contents: {
            part_Mixed_Farming_Wildlife_and_Livestock: {
              title: "Mixed Farming - Wildlife and Livestock",
              content: {
                paragraph_01:
                  "Combining game and livestock farming holds many advantages fo the farmer. " +
                  "A variety of game species helps to maintain a healthy farmland ecosystem by using all levels and forms of vegetation. " +
                  "When livestock prices are low, game animals can supplement the farmer’s income in the form of hunting, ecotourism or direct live sale. " +
                  "Game animals tolerate drought conditions better than livestock. " +
                  "They also act as a buffer reducing the occurrences of predation on livestock."
              }
            },
            part_Conservancies: {
              title: "Conservancies",
              content: {
                paragraph_01:
                  "Conservancies are legally protected areas with shared common resources where conservation is actively practiced. " +
                  "Its purpose is to achieve a collective policy for the ownership, management and use of resources. " +
                  "Conservation is the management of human use of organisms or ecosystems to ensure that such use is sustainable. " +
                  "Conservancy objectives include the protection, maintenance, rehabilitation, restoration, and enhancement of ecosystems.",
                paragraph_02:
                  "Conservancies retain all income from wildlife and tourism based enterprises within the conservancy and decides on how these fund are spent. " +
                  "Commercial conservancies consist of adjacent private farms joining together in common units. " +
                  "Communal conservancies operate on a local level and membership is made up entirely of community members who decide to " +
                  "work together for the sustainable management and use of wildlife and tourism."
              },
              is_part_Conservancies: true
            },
            part_Ecotourism: {
              title: "Eco-tourism",
              content: {
                paragraph_01:
                  "Namibia has a reputation as the “Cheetah Capital of the World” and tourists come to see cheetah habitat and learn how " +
                  "cheetahs survive on farmland. Ecotourism focuses in animals, habitats, and places of conservation interest. " +
                  "Etosha National Park, the Namibia Desert and the Skeleton Coast are major attractions for foreign ecotourists. " +
                  "Lodges, guest farms, and commercial villages are points on Namibian ecotours. Many of these destinations promote cheetah conservation.",
                paragraph_02:
                  "Sometime in the 2000s, the annual number of tourists visiting Namibia will exceed 500,000. " +
                  "Tourists spend money on transport, lodging, food and souvenirs. This is an important part of the economy and a supplement to " +
                  "agricultural income for many Namibians."
              }
            }
          }
        },
        subsection_CheetahFriendlyFarming: {
          title: "Cheetah Friendly Farming",
          contents: {
            part_Intro: {
              content: {
                paragraph_01:
                  "Namibian farmers practice diverse farming activities that form part of the ecosystem. " +
                  "It is farmers, hunters, and game managers who will preserve Namibia’s precious ecosystem " +
                  "for future generations to enjoy.",
                paragraph_02:
                  "There is no single solution to predator conflicts. Effective predator control and overall farm " +
                  "management requires a variety of integrated management strategies."
              }
            },
            part_FarmPractices: {
              content: {
                part_SmallstockPractices: {
                  title: "Smallstock practices",
                  content: {
                    part_Kraals: {
                      title: "Kraals",
                      content: {
                        paragraph_01:
                          "Kraaling smallstock at night enables monitoring and protection. Sturdy fencing or thorn branches " +
                          "must be tall enough to keep stock in and predators out."
                      }
                    },
                    part_Herder: {
                      title: "Herder",
                      content: {
                        paragraph_01:
                          "Keeping a herder with smallstock during the day provides additional protection."
                      }
                    }
                  }
                },
                part_SharedPractices: {
                  backgroundColorRGB: [247,220,111],
                  title: "Shared practices",
                  content: {
                    part_HerdManagement: {
                      title: "Herd Management",
                      content: {
                        paragraph_01:
                          "Predators such as cheetahs are opportunistic. Management strategies should aim to protect " +
                          "livestock when they are most vulnerable, particularly at night and during birthing seasons. " +
                          "Culling animals that fail to produce or consistently lose calves to predation increases herd production."
                      }
                    },
                    part_SeasonalBirths: {
                      title: "Seasonal births",
                      content: {
                        paragraph_01:
                          "Seasonal birthing allows intensive monitoring of the calving/lambing herds.",
                        paragraph_02:
                          "Synchronizing livestock births with wildlife calving seasons ensures sufficient natural prey when livestock are most vulnerable."
                      }
                    },
                    part_Fencing: {
                      title: "Fencing",
                      content: {
                        paragraph_01:
                          "Wildlife-friendly farmers use four to five strands of non-barbed galvanized wires for interior livestock fencing. " +
                          "These low fences are not high and leave a large gap along the bottom to allow migration of wildlife through farmlands."
                      }
                    },
                    part_GuardAnimals: {
                      title: "Guard animals",
                      content: {
                        paragraph_01:
                          "Losses are reduced by utilizing livestock guardians such as dogs for smallstock and donkeys for cattle. " +
                          "Guard animals need to be healthy and properly trained in order to be effective."
                      }
                    }
                  }
                },
                part_CattlePractices: {
                  title: "Cattle practices",
                  content: {
                    part_CalvingCamps: {
                      title: "Calving camps",
                      content: {
                        paragraph_01:
                          "Close monitoring is made possible by locating calving camps near the homestead. " +
                          "This reduces losses to predation, accidents or other complications in the first few weeks of a calf’s life. " +
                          "Larger herd size also discourages predators.",
                        paragraph_02:
                          "Calves under three months of age and heifers (first-time mothers) are most vulnerable to predators. " +
                          "Closer monitoring will reduce losses."
                      }
                    },
                    part_Breeds: {
                      title: "Breeds",
                      content: {
                        paragraph_01:
                          "Choose breeds that are more aggressive and allowing horns to grow on cows reduces losses to predators."
                      }
                    }
                  }
                }
              }
            }
          }
        },
        subsection_BushEncroachmentAndSolutions: {
          title: "Bush Encroachment and Solutions",
          contents: {
            part_BushEncroachment: {
              title: "Bush Encroachment",
              content: {
                part_Intro: {
                  content: {
                    paragraph_01:
                      "One of the most serious environmental threats facing Namibia is bush encroachment. " +
                      "Approximately 14 million hectares of land (12% of Namibia) is now so badly encroached " +
                      "that neither man nor livestock can penetrate it.",
                    paragraph_02:
                      "Under natural conditions, the savannas are covered with grasslands, scattered trees and shrubs, " +
                      "supporting a wide variety of wildlife. Herbivores usually feed intensely in localized areas for " +
                      "short periods of time. Plants and tress experience brief and intense browsing and grazing pressure " +
                      "separated by extended rest periods. This, combined with regular fires, maintains a balance between " +
                      "trees and grasses. Larger animals like elephant and rhino aid in controlling the growth of bush."
                  }
                },
                part_StockFarmingContributionToBushEncroachment: {
                  title: "How does Stock Farming Contribute to Bush Encroachment",
                  content: {
                    paragraph_01:
                      "Domestic livestock are primarily grazers. Farm fences prevent livestock from moving freely. " +
                      "If not properly managed, this results in overgrazing. This occurs when animals continue to graze " +
                      "and trampling the land on which they are kept, thus allowing little time for grass species to grow and seed. " +
                      "This leads to the gradual decline of grass species and allows the bush to grow out of control. " +
                      "The prevention of fires adds to bush encroachment."
                  }
                },
                part_CheetahSurvivalInBushEncroachedAreas: {
                  title: "Cheetah Survival in Bush Encroached Areas",
                  content: {
                    paragraph_01:
                      "Bush encroachment reduces carrying capacity for both livestock and game species. " +
                      "As bush encroachment increases, cheetahs must adopt their hunting techniques. " +
                      "Ambush tactics may replace the characteristic high-speed chase. " +
                      "Scientists are investigating a possible link between the increased occurrences of " +
                      "cheetah eye injuries and their hunting in bush encroached areas."
                  }
                }
              }
            },
            part_BushEncroachmentThreatensCheetahSurvival: {
              title: "Bush Encroachment Threatens Cheetah Survival",
              content: {
                part_Intro: {
                  title: "Bush Encroachment Threatens Cheetah Survival",
                  content: {
                    paragraph_01:
                      "Cheetahs hunt in open or semi-open savannah using bursts of speed. But Namibia’s livestock farmlands, " +
                      "where 90% of the cheetahs live, are less desirable for the cheetahs and the farmers due to bush encroachment. " +
                      "Bush encroachment, a form of desertification, is caused from overgrazing of livestock on the arid lands and " +
                      "unpredictable and regular droughts.",
                    paragraph_02:
                      "The deep rooted thorn bushes reduce the water table and compete with the grasses and become a thicket, " +
                      "taking the underground water and causing desertation. Bush encroachment causes changes in habitats and the " +
                      "mix of prey species on the land.",
                    paragraph_03:
                      "The cheetah’s rangeland has been infested with undesirable thickened thorn bush species. Bush encroachment reduces " +
                      "the amount of grasslands and poses a major livelihood threat to Namibians, as well as to the cheetah and other wildlife species."
                  }
                },
                part_CCFBushProject: {
                  title: "Cheetah Conservation Fund’s (CCF) Bush Project",
                  content: {
                    paragraph_01:
                      "CCF Bush (PTY) LTD, began in 2000, with the support from the United States Agency for International Development (USAID), " +
                      "to study and develop an ecologically and economically viable habitat restoration program. " +
                      "The goal of CCF Bush is to stimulate the development of a Namibian Biomass industry, thereby protecting the bush ecosystem, " +
                      "restoring wildlife habitat, improving farming productivity, creating employment opportunities and providing clean, renewable energy.",
                    paragraph_02:
                      "CCF harvests the thickened thorn bush, converting it into a clean-burning, biomass fuel log known asa Bushblok ™. " +
                      "CCF has restored hundreds of hectares of savannah grasslands for livestock, wildlife and cheetahs to share. " +
                      "In 2006, CCF obtained Forest Stewardship Council (FSC) certification, confirming that it manages forest resources " +
                      "responsibly and sustainably."
                  }
                },
                part_Objectives: {
                  title: "The Bushblok project objectives are:",
                  content: {
                    objective_list_items: [
                      "To enhance the long-term survival of the cheetah and other species by restoring the grasslands.",
                      "To provide an alternative to over-exploiting native Namibian trees for firewood and charcoal.",
                      "To encourage industries to use intruder bush as a raw material.",
                      "To provide standards for bush harvesting, chipping, processing and packaging.",
                      "To employ, train and empower disadvantaged Namibians.",
                      "To supply Namibians and international markets with compacted fuel log products."
                    ]
                  }
                }
              }
            }
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
