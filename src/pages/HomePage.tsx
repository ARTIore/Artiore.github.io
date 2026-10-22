import { HomeSections } from '../components/home/HomeSections'
import { SeoHead } from '../components/seo/SeoHead'
import { homeMeta } from '../content/registry'

export default function HomePage() {
  return (
    <>
      <SeoHead description={homeMeta.description} path={homeMeta.path} title={homeMeta.headTitle} />
      <HomeSections />
    </>
  )
}
