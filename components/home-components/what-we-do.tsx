import { Common, Homepage, HomePageType } from '@/lib/interface'
import themePreval from '@/lib/theme.preval'
import React from 'react'
import { Card } from '../data-components/card'
import { WrapperLarge } from '../wrapper'
import Cards from './what-we-do-cards'

export default function WhatWeDo({ data }: HomePageType) {
  return (
    <WrapperLarge>
      <style jsx global>
        {`
          .what-we-do-title {
            font-weight: 700;
            font-size: 82px;
            line-height: 107px;
            text-align: center;
          }
          .what-we-do-mini-title {
            font-weight: 400;
            font-size: 28px;
            line-height: 37px;
            text-align: center;
            color: ${themePreval.colors.red};
          }
        `}
      </style>
      <div className="what-we-do-mini-title">
        {data?.homepage.whatWeDoHeading}
      </div>
      <div className="what-we-do-title">{data?.homepage.whatWeDoTitle}</div>
      <Cards data={data}></Cards>
    </WrapperLarge>
  )
}
