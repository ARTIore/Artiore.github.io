import { FieldManualLayout } from '../components/field-manual/FieldManualLayout'
import { arabicManual } from '../content/field-manual/ar'
import { fieldManualLanguages } from '../content/field-manual/languages'

export default function FieldManualArPage() {
  return <FieldManualLayout languages={fieldManualLanguages} manual={arabicManual} />
}
