import { FieldManualLayout } from '../components/field-manual/FieldManualLayout'
import { englishManual } from '../content/field-manual/en'
import { fieldManualLanguages } from '../content/field-manual/languages'

export default function FieldManualPage() {
  return <FieldManualLayout languages={fieldManualLanguages} manual={englishManual} />
}
