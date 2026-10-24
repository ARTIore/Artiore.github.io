import { sincerityFor } from '../../content/field-manual/sincerity'

export function SincerityNote({ code, placement = 'top' }: { code: string; placement?: 'top' | 'bottom' }) {
  const note = sincerityFor(code)
  return (
    <p
      className={`sincerity-note max-w-[68ch] rounded-2xl border border-gold/30 bg-gold/5 p-5 text-sm leading-relaxed text-cream/90 ${
        placement === 'bottom' ? 'mt-12' : 'mt-6'
      }`}
      dir={note.dir}
      lang={note.lang}
      role="note"
    >
      {note.text}
    </p>
  )
}
