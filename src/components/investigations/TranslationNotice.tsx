import { SiteLink } from '../content/SiteLink'
import {
  translationNoticeLead,
  translationNoticeLink,
  translationNoticeTail,
} from '../../content/investigations/locale'

const linkClass =
  'text-gold-bright underline decoration-gold/40 underline-offset-4 hover:decoration-gold-bright'

/** Visible on Arabic pages. The English investigation is the authority if the texts differ. */
export function TranslationNotice({ englishPath }: { englishPath: string }) {
  return (
    <p
      className="mt-6 max-w-[68ch] rounded-2xl border border-white/20 bg-white/[0.04] p-5 text-sm leading-relaxed text-cream"
      role="note"
    >
      {translationNoticeLead}
      <SiteLink className={linkClass} href={englishPath}>
        {translationNoticeLink}
      </SiteLink>
      {translationNoticeTail}
    </p>
  )
}
