# Release Note

## Version 0.2.9

* Date: August 21, 2020
* Commit: `f2b7d5f`
* Tag: `v0.2.9`
* Archive: [archive](https://github.com/tetrachrome/chewbaaka/releases/tag/v0.2.9)
* Changelog:
  * Fixes for the following issues:
    * Issue #191 - 'Home' menu item in content page top nav bar points to invalid '/home' path

## Version 0.2.8

* Date: August 20, 2020
* Commit: `4063848`
* Tag: `v0.2.8`
* Archive: [archive](https://github.com/tetrachrome/chewbaaka/releases/tag/v0.2.8)
* Changelog:
  * Changeset #190 - Update `'semantic-ui-react'` to version `1.2.1`.

## Version 0.2.7

* Date: August 20, 2020
* Commit: `bffe06f`
* Tag: `v0.2.7`
* Archive: [archive](https://github.com/tetrachrome/chewbaaka/releases/tag/v0.2.7)
* Changelog:
  * Fixes for the following issues:
    * Issue #187 - Content page title and other meta tags should have distinct content
  * Other changes.
    * Depedency module security update.
    * Update content page titles.

## Version 0.2.6

* Date: August 19, 2020
* Commit: `d016821`
* Tag: `v0.2.6`
* Archive: [archive](https://github.com/tetrachrome/chewbaaka/releases/tag/v0.2.6)
* Changelog:
  * Fixes for the following issues:
    * Issue #181 - Refine page document outline and use more semantically correct HTML5 elements where appropriate.
    * Issue #185 - Images in 'Bush Encroachment and Solutions' subsection can be stretched.
  * Other changes:
    * Changeset #180 - Add more unit tests.
    * Changeset #183 - Address accessibility issues - Part 1
    * Update wording in footer.
  * All accessibility fixes and refinements:
    * Fix **'Heading elements are not in a sequentially-descending order'** issue in footer links.
    * Fix **'Image elements do not have [alt] attributes'** and **'Links do not have a discernible name'** issues in explore gateway grid item links.
    * Fix **'Links to cross-origin destinations are unsafe'** issue in footer links.
    * Fix **'Image elements do not have [alt] attributes'** issue in CCF logo in footer.
    * Fix **'Buttons do not have an accessible name'** issue in `ImageSlidingGallery` component.
    * Fix **'Buttons do not have an accessible name'** issue in `ImageSlidingGalleryDiscrete` component.
    * Fix **'ARIA input fields do not have accessible names'** and **'[aria-*] attributes do not have valid values'** issues in `ImageSlide` component.
    * Fix **'Displays images with incorrect aspect ratio '** issue in content page tail image collage component.
    * Fix **'Includes front-end JavaScript libraries with known security vulnerabilities'** by update lodash dependency to version `4.17.20`.
    * Fix **'Background and foreground colors do not have a sufficient contrast ratio'** issue in content page top nav bar items.
    * Fix **'Background and foreground colors do not have a sufficient contrast ratio'** issue in CCF link in footer.

## Version 0.2.5

* Date: August 17, 2020
* Commit: `1ccb7d7`
* Tag: `v0.2.5`
* Archive: [archive](https://github.com/tetrachrome/chewbaaka/releases/tag/v0.2.5)
* Changelog:
  * Fixes for the following issues:
    * Issue #173 - Text in `TextBubble` clipped when bubble shrunk.
    * Issue #174 - Typo in first paragraph in 'Where Cheetahs Live' subsection.
    * Issue #177 - 'Cheetah Anatomy Diagram' can bleed beyond viewport dimension.

## Version 0.2.4

* Date: August 17, 2020
* Commit: `40d9af8`
* Tag: `v0.2.4`
* Archive: [archive](https://github.com/tetrachrome/chewbaaka/releases/tag/v0.2.4)
* Changelog:
  * Fixes for the following issues:
    * Issue #171 - 'Cheetah Olympics' component should label pronghorn antelope second fastest **land** animal.

## Version 0.2.3

* Date: August 15, 2020
* Commit: `ee5f023`
* Tag: `v0.2.3`
* Archive: [archive](https://github.com/tetrachrome/chewbaaka/releases/tag/v0.2.3)
* Changelog:
  * Fixes for the following issues:
    * #169 - CCF logo icon in footer is too blurry.

## Version 0.2.2

* Date: August 14, 2020
* Commit: `a6f2f66`
* Tag: `v0.2.2`
* Archive: [archive](https://github.com/tetrachrome/chewbaaka/releases/tag/v0.2.2)
* Changelog:
  * Fixes for the following issues:
    * Issue #161 - Explore gateway grid item anchor area too wide when viewport is shrunk.
    * Issue #162 - Cheetah range map under 'Namibia - Cheetah Capital of the World' subsection not horizontally centered.
    * Issue #163 - Consider an additional media query tier for content page nav bar.
    * Issue #165 - Inconsistent dimensions in Explore gateway grid item images.
  * Other changes:
    * Fix `--bump-minor` and `--bump-major` options in `versionutil.py` to be semantically correct.
    * Add unit test for 'Namibia - Cheetah Capital of the World' subsection.

## Version 0.2.1

* Date: August 13, 2020
* Commit: `c3f44f6`
* Tag: `v0.2.1`
* Archive: [archive](https://github.com/tetrachrome/chewbaaka/releases/tag/v0.2.1)
* Changelog:
  * Fixes for the following issues:
    * Issue #153 - Image under 'What is Conservation' subsection is stretched.
    * Issue #155 - Degenerate rendering in `ImageSlidingGalleryDiscrete` component.
    * Issue #156 - Misalignment in `ImageSlidingGalleryDiscrete` component in Ecology page.
    * Issue #157 - Explore gateway buttons in homepage can be stretched.
    * Issue #158 - Bad layout in Homepage explore gateway intro.
    * Issue #159 - Not enough margin between parts in 'Stage 2' subsection in Biology page.
  * Other changes:
    * [Fix] Make button labels in `ImageSlidingGalleryDiscrete` component start at 1 instead of 0
    * Retired image artwork `src/components/ecology/assets/Spoor_Tracking_Data_Collection-min.jpg`.

## Version 0.2.0

* Date: August 13, 2020
* Commit: `66dca7a`
* Tag: `v0.2.0`
* Archive: [archive](https://github.com/tetrachrome/chewbaaka/releases/tag/v0.2.0)
* Changelog
  * Fixes for the following issues:
    * Issue #125 - Adopt fluid dimension design across content pages
  * All notable changes:
    - Removed `min-width` specification in named style `ContentPageSkeletonContentContainerDimension`.
    - Deprecate `TopNavBar` and refined `ContentPageTopNavMenuBar` as the single top navigation bar in a content page.
    - Refined the following common controls to better adopt fluid layout:
      - `CircularImage`
      - `ImageView`
      - `Caption`
      - `MediaEmbed`
      - `StatsLabel`
      - `FactBannerImage`
      - `ImageSlidingGallery`
      - `ImageSlidingGalleryDiscrete`
      - `TextBubble`
    - Refined the following content page layout components to better adopt fluid layout:
      - `ContentPageTopNavMenuBar`
      - `ContentPageIntroSectionGeneric`
      - `ContentPageSubsectionTwoColumnContentTemplate`
      - `ContentPageSubsectionThreeColumnContentTemplate`
      - `ContentPageTail`
      - `ContentPageTailPrevNextButtonNavMenu`
      - `ContentPageSideFloatFluidContainer`
      - `FluidTwoColumnContainer`
    - Introduced new content page layout component `FluidSingleRowGrid`.
    - Refined background image styling of `ContentPageBanner` component.
    - Use conditional rendering and media queries for fixed size component.
    - [Refine][Style] Add media query specification for content page side rail menu.
    - [Refine][Fix] Make sure image wrapped by `FluidImageWrapper` retain original aspect ratio.
    - [Style][Refine] Give vertical margin to `FactBannerImage` component.
    - [Style][Refine] Remove fixed height specification for text in `Caption` component (I'm okay with page jump for now).

## Version 0.1.14

* Date: August 11, 2020
* Commit: `cc134a5`
* Tag: `v0.1.14`
* Archive: [archive](https://github.com/tetrachrome/chewbaaka/releases/tag/v0.1.14)
* Changelog:
  * Fixes for the following issues:
    * Issue #147 - Typo in intro banner subtitle in Biology page
    * Issue #149 - Typos discovered throughout content pages

## Version 0.1.13

* Date: August 10, 2020
* Commit: `3611583`
* Tag: `v0.1.13`
* Archive: [archive](https://github.com/tetrachrome/chewbaaka/releases/tag/v0.1.13)
* Changelog:
  * Fixes for the following issues:
    * Issue #94 - Content paragraph not left aligned with subsection title in select cases.
  * Other changes:
    * Changeset #144 - Remove top nav bar from home page
  * Specific changes:
    * [Style][Fix] Removing 20px padding of named style `ContentPageSubsectionTwoColumnContentTemplateColumnInnerContainer`.
    * [Content][Fix] Fix incorrect alt text of 'What is a Habitat' banner image under 'Where Cheetahs Live' subsection.
    * [Style][Refine] Horizontally center `NamibiaBiome` component instance under 'Where Cheetahs Live' subsection.
    * [Style][Refine] Add left and right padding to two columns in `ContentPageSubsectionTwoColumnContentTemplate` component.
    * [Style][Refine] Horizontally center 'What is a Habitat' banner image under 'Where Cheetahs Live' subsection.
    * [Style][Refine] Horizontally center image in 'Cheetahs in Art' subsection.
    * [Style][Refine] Remove top nav bar from home page.
    * Remove `fixedOnTop` prop from `TopNavBar` component.

## Version 0.1.12

* Date: August 09, 2020
* Commit: `84feb07`
* Tag: `v0.1.12`
* Archive: [archive](https://github.com/tetrachrome/chewbaaka/releases/tag/v0.1.12)
* Changelog:
  * Changeset #141 - Incorporate embedded YouTube video frames in content pages

## Version 0.1.11

* Date: August 09, 2020
* Commit: `d8493e4`
* Tag: `v0.1.11`
* Archive: [archive](https://github.com/tetrachrome/chewbaaka/releases/tag/v0.1.11)
* Changelog:
  * Fixes for the following issues:
    * Issue #94 - `TextBubble` clipping inside `ContentPageSideFloatFluidContainer`
    * Issue #96 - Felidae Family Tree does not show entirety in most regular sized display sizes
    * Issue #98 - Content page top nav menu bar should highlight the item for the current page
    * Issue #105 - Missing essential security headers in HTTP responses
    * Issue #121 - Navigations between pages cause browser to refresh
    * Issue #123 - Content page extend beyond supposed bound right-hand side
    * Issue #130 - We should render all fixed-width components conditionally
    * Issue #131 - `ImageView`, `ImageViewModal`, `ImageSlidingGalleryDiscrete`, and `ImageSlideModal` components can bleed out of parent bound
    * Issue #139 - Stats blow box in history page have inconsistent inner and outer background color
  * Other notable changes:
    * Changeset #120 - Deprecate and remove `ImageSlideDiscrete` component
    * Changeset #126 - Strip debug styles from production builds
    * Changeset #134 - History page style cleanups
    * Changeset #135 - Biology page style refinements
    * Changeset #136 - General refinements
    * Changeset #138 - Refine landing page text styles

## Version 0.1.10

* Date: August 06, 2020
* Commit: `bbf515f`
* Tag: `v0.1.10`
* Archive: [archive](https://github.com/tetrachrome/chewbaaka/releases/tag/v0.1.10)
* Changelog:
  * Fixes for the following issues:
    * Issue #119 - Failed deployment of version 0.1.9

## Version 0.1.9

* Date: August 06, 2020
* Commit: `19999ef`
* Tag: `v0.1.9`
* Archive: [archive](https://github.com/tetrachrome/chewbaaka/releases/tag/v0.1.9)
* Changelog:
  * Fixes for the following issues:
    * Issue #100 - Static resources have cache control max-age of zero seconds.
    * Issue #105 - Missing essential security headers in HTTP responses.
    * Issue #107 - Home page content payload too heavy.
    * Issue #109 - History page content payload too heavy.
    * Issue #111 - Biology page content payload too heavy.
    * Issue #113 - Ecology page content payload too heavy.
    * Issue #115 - Future page content payload too heavy.
  * [Sitemap] Update `sitemap.xml` to remove forward slash `'/'` in all `<loc>` tag URL values.
  * [Refactor][Refine] Remove `TestPage` component and all associated tests.

## Version 0.1.8

* Date: August 04, 2020
* Commit: `08ad5ed`
* Tag: `v0.1.8`
* Archive: [archive](https://github.com/tetrachrome/chewbaaka/releases/tag/v0.1.8)
* Changelog:
  * [Fix] Fix home page layout issues on mobile (Issue #103)

## Version 0.1.7

* Date: August 04, 2020
* Commit: `35899c2`
* Tag: `v0.1.7`
* Archive: [archive](https://github.com/tetrachrome/chewbaaka/releases/tag/v0.1.7)
* Changelog:
  * [Tool] Introduced `health_check.py`.
  * [Content] Update HTML title and description meta in `index.html`.
  * [Content] Update main title and subtitle text in `LandingPageGateway` component.
  * [Style] Update landing page subtitle element to be h2 header.

## Version 0.1.6

* Date: August 03, 2020
* Commit: `80af697`
* Tag: `v0.1.6`
* Archive: [archive](https://github.com/tetrachrome/chewbaaka/releases/tag/v0.1.6)
* Changelog:
  * [Fix] Fix incorrect sitemap format in `sitemap.xml`.

## Version 0.1.5

* Date: August 03, 2020
* Commit: `fed070e`
* Tag: `v0.1.5`
* Archive: [archive](https://github.com/tetrachrome/chewbaaka/releases/tag/v0.1.5)
* Changelog:
  * [Content] Incorporate copyright statement in global footer.
  * [Config] Introduce `public/sitemap.xml`.
  * [Config] Update `public/robots.txt`.
  * [Config] Add 'noindex' meta directive in `public/index.html`.
  * Add setup instructions in top-level `README.md`.

## Version 0.1.4

* Date: August 01, 2020
* Commit: `61eb3fe`
* Tag: `v0.1.4`
* Archive: [archive](https://github.com/tetrachrome/chewbaaka/releases/tag/v0.1.4)
* Changelog:
  * [Style][Fix] Remove use of 'Comic Sans MS' font across components.
  * [Style][Refactor] Consolidate illustration title and subtitle font styles.
  * [Style][Refine] Add vertical padding around 'related cat image' in 'Evolution of Cats' subsection.
  * [Style][Refine] Render `FelidaeFamilyTree` component anyway but without left side clipping (but still can be clipped on the right hand side).
  * [Style][Refine] Increase component dimension height offset of ImageSlidingGalleryDiscrete component by 20px.
  * [Style][Refine] Update font-family of named style FuturePageTailVisionStatementText to be just "cursive".
  * [Feature] Introduce `DimensionPredicatedContainer` component (not currently being used).
  * [Feature] Introduce `ContentPageTailPrevNextButtonNavMenu` component and incorporate into pages.
  * [Style][Refine] Adjust image dimensions in 'Relationships with Man' subsection to be consistent.
  * [Style][Refine] Adjust image dimensions in 'Schools, Teachers, Learners' subsection to be consistent in height.

## Version 0.1.3

* Date: July 31, 2020
* Commit: `5b0d163`
* Tag: `v0.1.3`
* Archive: [archive](https://github.com/tetrachrome/chewbaaka/releases/tag/v0.1.3)
* Notes:
  * [Style][Fix] Fix issue in `ImageSlide` component where background and foreground images.

## Version 0.1.2

* Date: July 31, 2020
* Commit: `fa5168d`
* Tag: `v0.1.2`
* Archive: [archive](https://github.com/tetrachrome/chewbaaka/releases/tag/v0.1.2)
* Notes:
  * [Style][Refine] Refine all necessary components to make site adapt better at smaller displays.
  * [Fix][Content] Fixed spelling and grammar issues across all content pages.
  * [Style][Refine] Make text in `CircularImageButton` bold again.
  * [Style][Refine] Refine styling of 'Kinked Tail' part in 'Abnormalities' subsection.
  * [Style][Refine] Refine style of `ContentPageSideNavMenu` component.
  * [Style][Refine] Added vertical paddings across content pages where needed.
  * [Style][Fix] Update height specification of text in `Caption` component again to prevent page jump.
  * Updated author name in project global config.
  * Incorporate release notes in project.

## Version 0.1.1

* Date: July 30, 2020
* Commit: `3fae99d`
* Tag: `v0.1.1`
* Archive: [archive](https://github.com/tetrachrome/chewbaaka/releases/tag/v0.1.1)
* Notes:
  * [Style][Refine] Remove font weight specification for named style `CircularImageButtonTitle` for `CircularImageButton` component.
  * [Refine][Style] Make container of `ImageViewModal` have pointer cursor style when hovered + Add hover effect.
  * [Fix][Style] Fix issue where 'Did You Know' in 'Stage 2' subsection is clipped when clicked.
  * [Fix] Show author name in global footer across all content pages.

## Version 0.1.0

* Date: July 30, 2020
* Commit: `b07dfb1`
* Tag: `v0.1.0`
* Archive: [archive](https://github.com/tetrachrome/chewbaaka/releases/tag/v0.1.0)
* Notes:
  * Initial version and release.
