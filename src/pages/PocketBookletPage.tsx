import { FieldManualLayout } from '../components/field-manual/FieldManualLayout'
import { pocketBookletPdfPath } from '../content/field-manual/meta'
import { pocketBooklet } from '../content/field-manual/pocket-booklet'
import { pocketBookletImages } from '../content/field-manual/pocket-booklet-pages'

export default function PocketBookletPage() {
  return (
    <FieldManualLayout
      bookletPages={pocketBookletImages}
      download={{ href: pocketBookletPdfPath, label: 'Download PDF' }}
      languages={[]}
      manual={pocketBooklet}
    />
  )
}
