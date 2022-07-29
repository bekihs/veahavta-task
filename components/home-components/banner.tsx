import { HomePageType } from '@/lib/interface'
import themePreval from '@/lib/theme.preval'
import React from 'react'
import { PageHeader } from '../data-components/header-text'
import { HomeButton } from '../data-components/home-button'

export default function Banner({ data }: HomePageType) {
  return (
    <div id="top-header">
      <div className="wrapper">
        <div className="background"></div>
        <PageHeader>{data.homepage.title}</PageHeader>
        <div className="desc">{data?.homepage.description}</div>
        <HomeButton className="mt-2em mb-[5em]">
          {data?.homepage.getToKnowUsButton}
        </HomeButton>
        <style jsx>{`
          .top-header .home-button {
            margin-bottom: 8em;
          }
          div.desc {
            font-family: 'Assistant';
            max-width: 40%;
            font-style: normal;
            font-weight: 400;
            font-size: 28px;
            margin: 20px auto 40px auto;
            line-height: 37px;
            text-align: center;
          }
          div.wrapper {
            margin-top: -${themePreval.height.header};
            padding-top: ${themePreval.height.header};
            position: relative;
            text-align: center;
          }
          div.background {
            position: absolute;
            z-index: -1;
            inset: 0;

            background: linear-gradient(
              109.17deg,
              ${themePreval.colors['contact-bg']} 38.49%,
              #d3d1fc 72.36%
            );
          }
        `}</style>
      </div>
    </div>
  )
}
