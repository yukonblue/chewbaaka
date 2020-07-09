/**
 * testing.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jul 08, 2020
 * Updated  : Jul 08, 2020
 */

const CIRCLECI_KEY = 'CIRCLECI';

const CI_KEY = 'CI';

const PREDICATE_IS_ON_CIRCLE_CI = () => ( ( CIRCLECI_KEY in process.env )  );

const PREDICATE_IS_ON_CI = () => ( ( CIRCLECI_KEY in process.env || CI_KEY in process.env ) );

const PREDICATE_NO_OP = () => ( true );

const SKIP_TEST_ON_PREDICATE = (testBlock, pred) => {
  return () => {
    if ( pred() ) {
    } else {
      testBlock();
    }
  }
};

const SKIP_TEST_ON_CIRCLE_CI = (testBlock) => ( SKIP_TEST_ON_PREDICATE(testBlock, PREDICATE_IS_ON_CIRCLE_CI) );

const SKIP_TEST_ON_CI = (testBlock) => ( SKIP_TEST_ON_PREDICATE(testBlock, PREDICATE_IS_ON_CI) );

const SKIP_TEST = (testBlock) => ( SKIP_TEST_ON_PREDICATE(testBlock, PREDICATE_NO_OP) );

export {
  SKIP_TEST_ON_PREDICATE,
  SKIP_TEST_ON_CIRCLE_CI,
  SKIP_TEST_ON_CI,
  SKIP_TEST,
  PREDICATE_NO_OP
};
