import { useLocale } from '@/lib/hooks'
import { AppLinks, Common, LanguagesType } from '@/lib/interface'
import useGetLnguageImageComponent from 'hooks/useGetLnguageImaheComponent'
import Link from 'next/link'
import LogoSVG from 'svg/Logo'
import { ChangeLangButton } from '../data-components/change-language-button'
import OneZeroSkipToMainContent from '../onezero-skip-to-main-content'

export default function Links({ appLinks }: { appLinks: AppLinks }) {
  const { dir } = useLocale()
  return (
    <ul className="flex flex-row gap-x-2">
      <Logo />
      {appLinks.map((link) => (
        <li key={link.text}>
          <Link href={link.relativeLink}>
            <a>{link.text}</a>
          </Link>
        </li>
      ))}
    </ul>
  )
}

const Logo = () => {
  return (
    <Link href="/">
      <a>
        <LogoSVG></LogoSVG>
      </a>
    </Link>
  )
}
