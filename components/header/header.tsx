import { useLocale } from '@/lib/hooks'
import { CommonType } from '@/lib/interface'
import Link from 'next/link'
import { ChangeLangButton } from '../data-components/change-language-button'
import OneZeroSkipToMainContent from '../onezero-skip-to-main-content'
import Languages from './languages'
import Links from './links'

export default function Header({ data }: CommonType) {
  const { dir } = useLocale()
  return (
    <>
      <style jsx global>
        {`
          .h-header a {
            font-style: normal;
            font-weight: 400;
            font-size: 28px;
            line-height: 37px;
            /* identical to box height */
            margin-top: -10px;
            margin-inline-end: 1em;
            text-align: center;
            white-space: nowrap;
          }
        `}
      </style>
      <OneZeroSkipToMainContent
        text={'skipToMainContent'}
        dir={dir}
        className={'bg-light text-primary'}
      />
      <header className="h-header z-10 pt-4 px-4">
        <div className="flex justify-between gap-x-6 mx-auto xl:max-w-screen-xl lg:max-w-screen-lg flex-wrap  md:max-w-screen-md p-3 pb-0 bg-light rounded-lg ">
          <Links appLinks={data.appLinks}></Links>
          <Languages languageNames={data.languageNames}></Languages>
        </div>
      </header>
    </>
  )
}
