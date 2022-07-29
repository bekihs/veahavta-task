import { HomePageType } from '@/lib/interface'
import themePreval from '@/lib/theme.preval'
import React from 'react'

export default function ContactUsIcons({ data }: HomePageType) {
  return (
    <div className=" flex flex-wrap gap-4 pt-[40px]">
      <style jsx>{``}</style>
      {data?.common.contactUsLinks.map((i) => (
        <div className="item flex" key={i.linkValue}>
          <div className="min-w-[44px] min-h-[44px] max-w-[44px] max-h-[44px] p-[10px] bg-header-blue rounded-full">
            {' '}
            <img src={i.imagePath} alt={i.text} className=" " />
          </div>
          <div className="item-text p-[10px]">{i.text}</div>
        </div>
      ))}
    </div>
  )
}
