/**
 * history/config.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jul 07, 2020
 * Updated  : Jul 08, 2020
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
      }
    },
    section_CheetahAndMan: {
      intro: {
        title: "Cheetah and Man",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      },
      subsections: {
        subsection_RelationshipsWithMan: {
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
      }
    }
  }
};
