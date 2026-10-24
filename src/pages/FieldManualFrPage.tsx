import { FieldManualLayout } from '../components/field-manual/FieldManualLayout'
import { frenchManual } from '../content/field-manual/fr'
import { fieldManualLanguages } from '../content/field-manual/languages'

export default function FieldManualFrPage() {
  return <FieldManualLayout languages={fieldManualLanguages} manual={frenchManual} />
}
