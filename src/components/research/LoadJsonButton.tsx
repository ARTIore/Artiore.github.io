import type { ChangeEvent } from 'react'
import { buttonClass } from '../safety/safety-styles'

export function LoadJsonButton({
  label,
  onText,
  onError,
}: {
  label: string
  onText: (text: string) => void
  onError: (message: string) => void
}) {
  function onChange(event: ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0]
    event.target.value = ''
    if (!file) return
    if (file.size > 2 * 1024 * 1024) {
      onError('File rejected. The limit is 2 MB.')
      return
    }
    const reader = new FileReader()
    reader.onload = () => {
      onText(typeof reader.result === 'string' ? reader.result : '')
    }
    reader.onerror = () => onError('The file could not be read.')
    reader.readAsText(file)
  }

  return (
    <label
      className={`${buttonClass} w-full cursor-pointer justify-center focus-within:outline focus-within:outline-2 focus-within:outline-offset-[3px] focus-within:outline-gold-bright sm:w-auto`}
    >
      {label}
      <input accept="application/json,.json" className="sr-only" onChange={onChange} type="file" />
    </label>
  )
}
