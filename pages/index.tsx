import AboutTheClinic from '@/components/home-components/about-the-clinic'
import Banner from '@/components/home-components/banner'
import ContactUs from '@/components/home-components/contact-us'
import WhatWeDo from '@/components/home-components/what-we-do'
import { HomePageType, HOMEPAGE_QUERY } from '@/lib/interface'
import { NextPageContext } from 'next'
import { request } from '../lib/datocms'

export async function getStaticProps({ locale }: NextPageContext) {
  try {
    const data = await request({
      query: HOMEPAGE_QUERY(locale as string),
    })
    // console.log({ data });

    return {
      props: { data },
    }
  } catch (ex) {
    console.error(ex)
    return {
      redirect: {
        destination: '/' + ex.response.status,
      },
    }
  }
}

export default function Home({ data, error }: HomePageType) {
  console.log('Home data\n=========\n', data)
  if (data)
    return (
      <>
        <Banner data={data} />
        <AboutTheClinic data={data} />
        <WhatWeDo data={data} />
        <ContactUs data={data} />
        {/* Here is the structure of the home page data:
        <pre className="bg-dark text-light">{JSON.stringify(data, null, 2)}</pre> */}
      </>
    )
  else {
    console.error(error)

    return <div>error</div>
  }
}
