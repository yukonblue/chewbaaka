/**
 * history/config.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jul 07, 2020
 * Updated  : Jul 10, 2020
 */

export const config = {
  pageProps: {
    coverImage: "../history/assets/cheetah-mother-and-cubs-on-termite-mound.jpg",
    title: "History",
    subtitle: "Learn about the evolution and migration of the species, its relationship with man throughout history, and its population and ranges.",
    pageMenuItems: [
      "Evolution",
      "Cheetah and Man",
      "Range and Population"
    ],
  },
  contentPageIntro: {
    title: "History of the Cheetah",
    content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
  contentPageSections: {
    section_Evolution: {
      intro: {
        title: "Evolution",
        content: "The oldest fossils place  cheetahs in North America in what is now Texas, Nevada and Wyoming. Cheetahs were common throughout Asia, Africa, Europe and North America until the end of the last Ice Age, about 10,000 years ago, when massive climatic changes caused large numbers of mammals to disappear."
      },
      subsections: {
        subsection_EvolutionOfCats: {
          title: "Evolution of Cats"
        }
      }
    },
    section_CheetahAndMan: {
      intro: {
        title: "Cheetah and Man",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      },
      subsections: {
        subsection_RelationshipsWithMan: {
          title: "Relationships with Man",
          contents: {
            paragraph_01: "Try resizing the window: You'll see that each sentence is on one line when the window is wide enough. Only when the window is too narrow for the whole sentence will the sentence be broken over several lines. When you remove the 'margin-right: -50%' and resize the window again, you'll see that the sentences will be broken already when the window is still twice as wide as the text lines. "
          }
        }
      }
    },
    section_PopulationAndRange: {
      intro: {
        title: "Range and Population",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      },
      subsections: {
        subsection_Namibia: {
          title: "Namibia - Cheetah Capital of the World",
          contents: {
            paragraph_01:
              "Namibia has the world's largest cheetah population. " +
              "Approximately 3000 cheetahs share the land with humans, " +
              "livestock, and wildlife. " +

              "Today, the status of the Namibian cheetah is stabilizing. " +
              "During the 1980s, the population of Namibina cheetahs " +
              "declined by half. In the 10-year period, nearly " +
              "7,000 cheetahs were removed from the wild. " +

              "In most countries where cheetahs live, their numbers " +
              "have been reduced to critical levels. The cheetah's " +
              "survival worldwide is in human hands.",

            paragraph_Namibia_Home_For_The_Future:
              "The greatest hope for the cheetah's survival lies in the " +
              'pristine countryside of Namibia. Nearly 1000 Namibian farmers ' +
              "control the fate of the country's cheetahs and the land they live.",
          }
        },
        subsection_RoadToExtinction: {
          title: "The Road to Extinction ?",
          contents: {
            paragraph_The_Road_To_Extinction:
              "World development, industrialization, automobiles, and aeroplanes..." +

              "Through the 1900s, man's inventions seemed limitless, yet there is " +
              "nothing man-made that rivals the speed and efficiency of the cheetah." +

              "Scientists classified the cheetah as Acinonyx jubatus, yet nobles still " +
              'referred to it as the "hunting leopard". By the end of the 1800s, cheetahs' +
              'were a rarity in Asia Minor and Arabia because of their use in the sport ' +
              'of "coursing".' +

              'Although it appeared that the cheeatahs had a large range, their numbers ' +
              'within that range existed in small pockets. Cheetahs, farmers and their livestock ' +
              'all preferred open grasslands for their habitat. Increasing agricultural development ' +
              'and new settlements played havoc with remaining cheetah populations.',

            paragraph_Where_Did_The_Cheetah_Go:
              'As human population grew, the amount of land devoted to livestock farming ' +
              'steadily increased. Livestock filled the open land where cheetahs roamed. ' +
              'Natural prey became scarce. Farmers kill other large predators. Although ' +
              'game reserves protected them, cheetahs could not compete against hyoenas ' +
              'and lions. Farmlands offered cheetahs a safe haven, but they sometimes killed livestock.' +

              'Farmers saw cheetahs more frequently and thought their numbers had increased. ' +
              'Cheetahs took the blame for most predator-related livestock losses. ' +
              'Farmers killed cheetahs by the thousands as pests or to seell their skins ' +
              'to the fur trade.' +

              'By 1975, researches realized that the cheetah was in troubles. CITES ' +
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
};
