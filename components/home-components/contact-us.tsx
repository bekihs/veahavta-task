import { HomePageType } from '@/lib/interface'
import themePreval from '@/lib/theme.preval'
import React from 'react'
import { WrapperLarge } from '../wrapper'
import ContactUsForm from './contact-us/form'
import ContactUsIcons from './contact-us/icons'

export default function ContactUs({ data }: HomePageType) {
  return (
    <div
      className="contactus-inner bg-contact-bg flex md:mt-[135px]"
      id="contact-us"
    >
      <style jsx>{`
        .contactus-mini-title {
          font-weight: 700;
          font-size: 22px;
          line-height: 29px;
          color: ${themePreval.colors['header-blue']};
          padding: 5px 23px;
          background: #ffffff;
          border-radius: 51px;
        }

        .contactus-title {
          font-weight: 700;
          font-size: 42px;
          padding-top: 11px;
          line-height: 55px;
        }
      `}</style>
      <WrapperLarge className="grid-cols-2 justify-around">
        <div className="contactus-content box-border">
          <span className="contactus-mini-title">
            {data?.homepage.contactUsHeading}
          </span>
          <div className="contactus-title">{data?.homepage.contactUsTitle}</div>
          <div className="contactus-text">{data?.homepage.contactUsText}</div>
          <ContactUsIcons data={data}></ContactUsIcons>
        </div>
        <ContactUsForm data={data}></ContactUsForm>
      </WrapperLarge>
    </div>
  )
}
