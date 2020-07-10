/**
 * styling.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jul 09, 2020
 * Updated  : Jul 09, 2020
 */

import { config } from '../config'

const getElementStyleClassName = (name) => {
  let res = [name];

  if ( config.styling.mode === "debug" ) {
    if ( config.styling.debugStyles["DebugColor"] ) {
      res.push(name+"_DebugColor");
    }
    if ( config.styling.debugStyles["DebugWireframe"] ) {
      res.push("DebugWireframe")
    }
  }

  return res.join(" ");
};

const getElementStyleClassNames = (names) => {
  let res = names.map((name) => ( getElementStyleClassName(name) ));

  return res.join(" ");
};

export {
  getElementStyleClassName,
  getElementStyleClassNames
}
