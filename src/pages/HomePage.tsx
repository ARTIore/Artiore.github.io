import { HomeDuo } from '../components/sections/HomeDuo'
import { HomeFeatured } from '../components/sections/HomeFeatured'
import { HomeHero } from '../components/sections/HomeHero'
import { HomeMission } from '../components/sections/HomeMission'
import { HomePillars } from '../components/sections/HomePillars'
import { HomePreview } from '../components/sections/HomePreview'
import { HomeSupport } from '../components/sections/HomeSupport'
import { Divider } from '../components/ui/Divider'
import { SeoMeta } from '../components/layout/SeoMeta'

export default function HomePage() {
  return (
    <>
      <SeoMeta
        title="Human intuition + AI precision"
        description="ARTIore is a premium intelligence platform that turns complexity into clarity through explainable, signal-first design."
        path="/"
      />
      <HomeHero />
      <Divider />
      <HomeMission />
      <Divider />
      <HomeDuo />
      <HomePillars />
      <HomeFeatured />
      <HomePreview />
      <HomeSupport />
    </>
  )
}
