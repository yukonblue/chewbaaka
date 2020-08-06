# Release Note

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
