import { useLocale } from '@/lib/hooks'
import { Common, LanguagesType } from '@/lib/interface'
import useGetLnguageImageComponent from 'hooks/useGetLnguageImaheComponent'
import Link from 'next/link'
import { ChangeLangButton } from '../data-components/change-language-button'
import OneZeroSkipToMainContent from '../onezero-skip-to-main-content'

export default function Languages({
  languageNames,
}: {
  languageNames: LanguagesType
}) {
  const { dir } = useLocale()
  const { getLanguageImage } = useGetLnguageImageComponent()
  const languaes = Object.keys(languageNames[0] || {})
  console.log(languaes)
  return (
    <ul className="flex flex-row gap-x-2">
      {languaes.map((lang) => (
        <li key={lang}>
          <ChangeLangButton className="" lang={lang}>
            {getLanguageImage(lang, languageNames[0][lang])}
          </ChangeLangButton>
        </li>
      ))}
    </ul>
  )
}
