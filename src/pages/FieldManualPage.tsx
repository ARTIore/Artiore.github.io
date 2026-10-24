import { FieldManualLayout } from '../components/field-manual/FieldManualLayout'
import { englishManual } from '../content/field-manual/en'
import { fieldManualLanguages } from '../content/field-manual/languages'

export default function FieldManualPage() {
  return (
    <FieldManualLayout
      companions={[
        { href: '/field-manual/pocket-booklet', label: 'Companion: Pocket Booklet' },
        { href: '/field-manual/carousels', label: 'Companion: Carousels' },
      ]}
      languages={fieldManualLanguages}
      manual={englishManual}
    />
  )
}
