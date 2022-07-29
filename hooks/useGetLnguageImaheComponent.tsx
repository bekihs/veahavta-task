import ERI from 'svg/ERI'
import ETH from 'svg/ETH'
import GBR from 'svg/GBR'
import ILS from 'svg/ILS'
import SAU from 'svg/SAU'
const languages = {
  he: ILS,
  en: GBR,
  ar: SAU,
  am: ETH,
  ti: ERI,
}
export default function useGetLnguageImaheComponent() {
  return {
    getLanguageImage: (lang: string, label: string) => {
      const Comp = languages[lang]

      return <Comp label={label}></Comp>
    },
  }
}
