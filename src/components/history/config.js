/**
 * history/config.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jul 07, 2020
 * Updated  : Aug 20, 2020
 */

export const config = {
  headMeta: {
    title: "History of the cheetah",
    description: "Learn about the history and evolution of the cheetah.",
    keywords: [
      "cheetah history",
      "cheetah evolution",
      "cheetah lineage",
      "cheetah population",
      "cheetah range",
    ]
  },
  pageProps: {
    coverImage: "History_Page_Cover_Image-min.jpg",
    title: "History",
    subtitle: "Learn about the evolution and migration of the species, its relationship with man throughout history, and its population and ranges.",
    pageMenuItems: [
      {
        title: "Evolution",
        tocImageFilename: "history_page_toc_menu_img_01-min.jpg"
      },
      {
        title: "Cheetah and Man",
        tocImageFilename: "history_page_toc_menu_img_02-min.jpg"
      },
      {
        title: "Range and Population",
        tocImageFilename: "history_page_toc_menu_img_03-min.jpg"
      }
    ],
    pageTailNavMenu: {
      prevPage: {
        label: "Home",
        href: "/"
      },
      nextPage: {
        label: "Biology",
        href: "/biology"
      }
    }
  },
  contentPageIntro: {
    title: "History of the Cheetah",
    content: "The evolution and history of the cheetah are just as remarkable and " +
          "interesting as the species itself. Its evolution goes back to nearly " +
          "7 million years ago in time, and spanned across almost all the continents on the planet. " +
          "Its history with human interactions goes as far back as to 32000 BCE, and " +
          "the cheetah has been a symbol of significant meaning in different civilizations and " +
          "cultures across thousands of years of human history. Even up to this day, " +
          "the cheetah continues to be considered as a spiritual animal that manifests " +
          "as a symbol of a multitude of positive characteristics, such as adaptability, " +
          "persistence, and focus.",
    image: {
      filename: "History_Page_Intro_Section_Background-min.png"
    }
  },
  contentPageSections: {
    section_Evolution: {
      intro: {
        title: "Evolution",
        content: "Although many would think the cheetah had originated on the continent of Africa, " +
        "the oldest fossils place  cheetahs in North America in what is now Texas, Nevada and Wyoming. " +
        "Cheetahs were common throughout Asia, Africa, Europe and North America until the end of the last " +
        "Ice Age, about 10,000 years ago, when massive climatic changes caused large numbers of mammals to disappear."
      },
      subsections: {
        subsection_EvolutionOfCats: {
          title: "Evolution of Cats"
        },
        subsection_CheetahEvolution: {
          title: "Cheetah Evolution"
        }
      },
    },
    section_CheetahAndMan: {
      intro: {
        title: "Cheetah and Man",
        content: "The history of cheetah-human relationship goes back in millennia, " +
        "and archeological artifacts uncovered throughout the world suggest that " +
        "human interactions with the species goes hand in hand with its migration and evolution. " +
        "The relationship between cheetahs and us have been both profound and complex, " +
        "as the species have been revered, utilized, displayed, and exploited throughout human history."
      },
      subsections: {
        subsection_RelationshipsWithMan: {
          title: "Relationships with Man",
          contents: {
            paragraph_Cheetah_And_Man_01:
              'Traditional African healers and witchdoctors used cheetah foot bones in spiritualistic rituals to symbolize fleet-footedness and speed. ' +
              'They used bones from a wide variety of animals and techniques varied from tribe to tribe. Objects ' +
              'represented a person, a thing or mood from the past, present or future, and are known as Divinatory sets.',
            paragraph_Cheetah_And_Man_02:
              'During the time of the Egyptian pharaohs, the cheetah was considered a goddess named ' +
              '"Mafdet". Pharaohs kept cheetahs as close companions, ' +
              "symbolic of Mafdet's protection of the royal throne.",
            paragraph_Cheetah_And_Man_03:
              'The San of Southern Africa ate cheetah meat as a symbol for speed, but it was not a main food in their diet.',
            paragraph_Cheetah_And_Man_04:
              'Kings wore cheetah skins for dignity. Trade in cheetah skin only started after European explorers began ' +
              'requesting them.',
          }
        },
        subsection_CheetahsInSports: {
          title: "Cheetahs In Sports",
          contents: {
            paragraph_The_Hunting_Leopard_01:
              'In c1700 BC, the Egyptians were the first to tame cheetahs. They admired the cheetah for its speed, ' +
              'hunting ability and beauty. They honored cheetahs as symbols of royalty and prestige.',

            paragraph_The_Hunting_Leopard_02:
              'The swiftest animal on earth became a cherished hunting companion of Pharaohs and royalty ' +
              'throughout Europe, Asia and India. Until the early 1900s, ownership of cheetahs was as important ' +
              'to these nobles as their love for gold. Cheetahs hunt by sight so they excelled in the sport ' +
              'known as "coursing". Hunts organized by royalty and nobles were for the challenge of sport, ' +
              'not for food. Hunts represented power and prestige.',

            paragraph_The_Hunting_Leopard_03:
              'By the 1500s the popularity of the cheetah as a hunting companion rivaled that of the dog. ' +
              'Cheetahs, the most easily tamed of the big cats, were caught, tamed and trained. Adults were ' +
              'used because cubs had not learned how to hunt. Tamed cheetahs formed a strong bond with their keepers.',

            paragraph_The_Hunting_Leopard_04:
              'Each cheetah rode to the hunt by horseback or on a cart. Its eyes were coved with a hood and uncovered ' +
              'when prey were sighted. The cat was released to chase down the prey then rewarded with meat fed from a ' +
              'wooden spoon.',

            paragraph_The_Hunting_Leopard_05:
              'Although cherished, pampered cheetahs were loved to near extinction and taken from the wild in great numbers. ' +
              'By the early 1900s, India and Iran were importing African cheetahs for the sport of "coursing", as their own ' +
              'wild population became too small.'
          }
        },
        subsection_CheetahsInArt: {
          title: "Cheetahs In Art",
          contents: {
            paragraph_Cheetah_In_Art_01:
              'Sumerians (Iraqi ancestors) were the first to use cheetahs in art.',

            paragraph_Cheetah_In_Art_02:
              'The cheetah and leopard have often been mistaken for each other. ' +
              'Cheetahs in early art were frequently called "panther" ' +
              'or "hunting leopard". Early artists called the true leopard "pardus" ' +
              'and described it as a cross between a cheetah (panther), and the lion (leo).',

            paragraph_Cheetah_In_Art_03:
              'Middle Age and Renaissance artists began drawing cheetahs and other ' +
              'animals more life-like. During this time of scientific exploration, ' +
              'detailed descriptions of animals provided incentive for reality in art. ' +
              'Artists included cheetahs more often in their paintings as the trade in ' +
              'live animals increased.',

            paragraph_Cheetah_In_Art_04:
              'Artists always pictured cheetahs as animals of speed and royalty.'
          }
        }
      }
    },
    section_PopulationAndRange: {
      intro: {
        title: "Range and Population",
        content: "A combination of factors such as game hunting, retaliatory killing, " +
                "habitat encroachment have caused the sharp decline of the global cheetah " +
                "population over the last century, and driven the species out of much of their " +
                "historical range. One of the last strongholds of the species today remain in " +
                "southern Africa, spanning over Namibia and Botswana, which together " +
                "holds two thirds of the species' population."
      },
      subsections: {
        subsection_Namibia: {
          title: "Namibia - Cheetah Capital of the World",
          contents: {
            Cheetah_Capital_Of_The_World: {
              title: "Namibia",
              subtitle: "Cheetah Capital of the World",
              content: {
                paragraph_Cheetah_Capital_Of_The_World_01:
                  "Namibia has the world's largest cheetah population. " +
                  "Approximately 3000 cheetahs share the land with humans, " +
                  "livestock, and wildlife.",

                paragraph_Cheetah_Capital_Of_The_World_02:
                  "Today, the status of the Namibian cheetah is stabilizing. " +
                  "During the 1980s, the population of Namibian cheetahs " +
                  "declined by half. In the 10-year period, nearly " +
                  "7,000 cheetahs were removed from the wild.",

                paragraph_Cheetah_Capital_Of_The_World_03:
                  "In most countries where cheetahs live, their numbers " +
                  "have been reduced to critical levels. The cheetah's " +
                  "survival worldwide is in human hands."
              }
            },
            Namibia_Home_For_The_Future: {
              title: "Namibia",
              subtitle: "Hope for the Future",
              content: {
                paragraph_01:
                  "The greatest hope for the cheetah's survival lies in the " +
                  'pristine countryside of Namibia. Nearly 1000 Namibian farmers ' +
                  "control the fate of the country's cheetahs and the land they live."
              }
            }
          }
        },
        subsection_RoadToExtinction: {
          title: "The Road to Extinction",
          contents: {
            The_Road_To_Extinction: {
              title: "The Road to Extinction?",
              subtitle: "1990",
              content: {
                paragraph_The_Road_To_Extinction_01:
                  "World development, industrialization, automobiles, and airplanes...",

                paragraph_The_Road_To_Extinction_02:
                  "Through the 1900s, man's inventions seemed limitless, yet there is " +
                  "nothing man-made that rivals the speed and efficiency of the cheetah.",

                paragraph_The_Road_To_Extinction_03:
                  "Scientists classified the cheetah as Acinonyx jubatus, yet nobles still " +
                  'referred to it as the "hunting leopard". By the end of the 1800s, cheetahs ' +
                  'were a rarity in Asia Minor and Arabia because of their use in the sport ' +
                  'of "coursing".',

                paragraph_The_Road_To_Extinction_04:
                  'Although it appeared that the cheetahs had a large range, their numbers ' +
                  'within that range existed in small pockets. Cheetahs, farmers and their livestock ' +
                  'all preferred open grasslands for their habitat. Increasing agricultural development ' +
                  'and new settlements played havoc with remaining cheetah populations.',
              }
            },
            Where_Did_The_Cheetah_Go: {
              title: "Where Did the Cheetah Go?",
              subtitle: "1975",
              content: {
                paragraph_Where_Did_The_Cheetah_Go_01:
                  'As human population grew, the amount of land devoted to livestock farming ' +
                  'steadily increased. Livestock filled the open land where cheetahs roamed. ' +
                  'Natural prey became scarce. Farmers kill other large predators. Although ' +
                  'game reserves protected them, cheetahs could not compete against hyenas ' +
                  'and lions. Farmlands offered cheetahs a safe haven, but they sometimes killed livestock.',

                paragraph_Where_Did_The_Cheetah_Go_02:
                  'Farmers saw cheetahs more frequently and thought their numbers had increased. ' +
                  'Cheetahs took the blame for most predator-related livestock losses. ' +
                  'Farmers killed cheetahs by the thousands as pests or to sell their skins ' +
                  'to the fur trade.',

                paragraph_Where_Did_The_Cheetah_Go_03:
                  'By 1975, researches realized that the cheetah was in trouble. CITES ' +
                  '(Convention on International Trade of Endangered Species) placed the cheetah ' +
                  'on Appendix I, making international trade in live cheetah or cheetah products illegal. ' +
                  'Local laws supported CITES in many countries where cheetahs still lived. ' +
                  'Researchers began looking for ways to encourage the growth of cheetah populations ' +
                  'through land management practices.'
              }
            }
          }
        }
      }
    }
  }
};
