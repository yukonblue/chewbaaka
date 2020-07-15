/**
 * biology/config.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jul 15, 2020
 * Updated  : Jul 15, 2020
 */

export const config = {
  pageProps: {
    coverImage: "",
    title: "Biology",
    subtitle: "Subtitle TBD ...",
    pageMenuItems: [
      "Lifecycle",
      "Anatomy",
    ],
  },
  contentPageSections: {
    section_Lifecycle: {
      intro: {
        title: "Lifecycle",
        content: "Content TBD ..."
      },
      subsections: {
        subsection_Lifecycle_Stage_1: {
          title: "Stage 1",
          contents: {
            paragraph_Lifecycle_Stage_1: "B;ah"
          }
        },
        subsection_Lifecycle_Stage_2: {
          title: "Stage 2",
          contents: {
            paragraph_Lifecycle_Stage_2: "B;ah"
          }
        },
        subsection_Lifecycle_Stage_3: {
          title: "Stage 3",
          contents: {
            paragraph_Lifecycle_Stage_3: "B;ah"
          }
        }
      },
    },
  }
};
