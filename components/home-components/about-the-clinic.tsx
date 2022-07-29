import { HomePageType } from '@/lib/interface'
import themePreval from '@/lib/theme.preval'
import Image from 'next/image'
import React from 'react'
import { WrapperLarge } from '../wrapper'

export default function AboutTheClinic({ data }: HomePageType) {
  return (
    <WrapperLarge id="about-us" className="grid-cols-2 justify-around">
      <style jsx global>
        {`
          .about-us-mini-title {
            font-style: normal;
            font-weight: 400;
            font-size: 28px;
            line-height: 37px;
            color: ${themePreval.colors['header-blue']};
          }

          .aboutus-title {
            font-weight: 700;
            font-size: 52px;
            line-height: 115%;
            /* or 60px */
          }

          .aboutus-text {
            font-weight: 400;
            font-size: 18px;
            line-height: 29px;
            margin-top: 50px;
          }
          @media (min-width: 769px) {
            .aboutus-image {
              padding-inline-end: 100px;
            }
            .aboutus-image  span,
              .aboutus-image  img{
              position:unset !important;
              width:100% !important;
              height:100% !important;
            }
          }
        `}
      </style>
      <div className="aboutus-image ">
        <Image layout='fill' src="/aboutUs.svg"></Image>
      </div>
      <div className="about-us-content">
        <div className="about-us-mini-title">{data?.homepage.aboutHeading}</div>
        <div className="aboutus-title">{data?.homepage.aboutTitle}</div>
        <div className="aboutus-text">{data?.homepage.aboutUsText}</div>
      </div>
    </WrapperLarge>
  )
}
