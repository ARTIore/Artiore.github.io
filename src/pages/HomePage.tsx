import { HomeSections } from '../components/home/HomeSections'
import { SeoHead } from '../components/seo/SeoHead'
import { homeMeta } from '../content/meta'

export default function HomePage() {
  return (
    <>
      <SeoHead
        crumbName={homeMeta.crumbName}
        description={homeMeta.description}
        kind={homeMeta.kind}
        path={homeMeta.path}
        title={homeMeta.headTitle}
      />
      <HomeSections />
    </>
  )
}
