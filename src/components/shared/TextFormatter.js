/**
 * TextFormatter.js
 * Chewbaaka
 *
 * Author   : gitsitgo
 * Created  : Nov 6, 2020
 * Updated  : Nov 6, 2020
 */

import React from 'react';

function getFormattedSpecialText(text) {
    let textArray = text.split(/(BBB[a-zA-Z0-9]+BBB|III[a-zA-Z0-9]+III|UUU[a-zA-Z0-9]+UUU)/);
    const emptyStr = '';
    textArray.forEach((element, index, array) => {
      console.log(array[index]);
      if(element.indexOf('BBB') === 0) array[index] = <b key={element}>{element.replace(/BBB/g,emptyStr)}</b>;
      else if(element.indexOf('III') === 0) array[index]= <i key={element}>{element.replace(/III/g,emptyStr)}</i>;
      else if(element.indexOf('UUU') === 0) array[index] = <u key={element}>{element.replace(/UUU/g,emptyStr)}</u>;
      else array[index] = element;
    });
  
    return textArray;
};

export default getFormattedSpecialText;