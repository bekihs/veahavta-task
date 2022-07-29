import { HomePageType } from '@/lib/interface'
import themePreval from '@/lib/theme.preval'
import { Card } from '../data-components/card'

export default function Cards({ data }: HomePageType) {
  return (
    <div className="cards flex gap-4 items-stretch basis-0 flex-wrap justify-between">
      <style jsx>{`
        .card-image {
          background-color: ${themePreval.colors['contact-bg']};
          border-radius: 31px 31px 0 0;
        }
        .what-card-title {
          font-weight: 700;
          font-size: 28px;
          line-height: 37px;
          color: ${themePreval.colors['header-blue']};
        }
        .what-card-text {
          font-weight: 400;
          font-size: 18px;
          line-height: 24px;
        }
      `}</style>
      {data?.homepage.whatWeDoCards.map((i) => (
        <Card key={i.title} className="flex items-stretch flex-col  w-full md:w-[338px] md:max-w-[23%]">
          <div className="card-image  ">
            <img
              src={i.imagePath}
              alt={i.title}
              className="mx-auto my-[55px]"
            />
          </div>
          <div className="card-content mx-[20px] my-[29px]">
            <div className="what-card-title">{i.title}</div>
            <div className="what-card-text">{i.text}</div>
          </div>
        </Card>
      ))}
    </div>
  )
}
