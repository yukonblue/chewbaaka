/**
 * TextFormatter.js
 * Chewbaaka
 *
 * Author   : gitsitgo
 * Created  : Nov 6, 2020
 * Updated  : Nov 6, 2020
 */

 
/**
 * TextFormatter
 *
 * TextFormatter is a general shared function
 * that receives text with custom format codes
 * to render simple text formats like bold, 
 * underline, italics
 *
 * Bold = BBB
 * Italics = III
 * Underline = UUU
 * 
 */

import React from 'react';

function getFormattedText(text) {
    if(text === undefined) return text;

    let textArray = text.split(/(BBB[a-zA-Z0-9 ._\-']+BBB|III[a-zA-Z0-9 ._\-']+III|UUU[a-zA-Z0-9 ._\-']+UUU)/);

    if(textArray.length===1) return text;

    const emptyStr = '';

    textArray.forEach((element, index, array) => {
      if(element.indexOf('BBB') === 0) array[index] = <b key={element}>{element.replace(/BBB/g,emptyStr)}</b>;
      else if(element.indexOf('III') === 0) array[index]= <i key={element}>{element.replace(/III/g,emptyStr)}</i>;
      else if(element.indexOf('UUU') === 0) array[index] = <u key={element}>{element.replace(/UUU/g,emptyStr)}</u>;
      else array[index] = element;
    });
    
    // textArray is now a JSX array - return as an array otherwise rejoining will
    // cause the output to convert JSX into incorrect string object representation
    return textArray;
};

export default getFormattedText;