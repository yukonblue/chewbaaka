/**
 * ContentPageAlarmBanner.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jul 26, 2020
 * Updated  : Jul 26, 2020
 */

import React from 'react'

import './ContentPageAlarmBanner.css'

export default function ContentPageAlarmBanner({children}) {
  return (
    <h4 className="ContentPageAlarmBannerText">
      {children}
    </h4>
  ); 
}
