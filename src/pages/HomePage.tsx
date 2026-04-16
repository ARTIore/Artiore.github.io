import { HomeSections } from '../components/home/HomeSections'
import { SeoHead } from '../components/seo/SeoHead'
import { useLocale } from '../context/useLocale'

export default function HomePage() {
  const { copy } = useLocale()

  return (
    <>
      <SeoHead description={copy.heroSubStatement} path="/" title="Home" />
      <HomeSections />
    </>
  )
}
