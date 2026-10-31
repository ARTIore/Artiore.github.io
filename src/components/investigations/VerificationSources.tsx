import {
  articleVerificationSources,
  verificationSourceGroups,
  type VerificationSource,
} from '../../content/investigations/verification-sources'

const linkClass =
  'text-gold-bright underline decoration-gold/40 underline-offset-4 hover:decoration-gold-bright'

const registerHref = '/investigations/digital-exposure/source-register/#verification-sources-linked'

function SourceItem({ source }: { source: VerificationSource }) {
  return (
    <li className="leading-relaxed">
      <a className={linkClass} href={source.url} rel="noopener noreferrer" target="_blank">
        {source.title}
      </a>
      <span className="text-cream/80"> — {source.publisher}</span>
      {source.date ? <span className="text-muted"> · {source.date}</span> : null}
      {source.usedFor ? <span className="mt-1 block text-sm text-muted">Used to check: {source.usedFor}</span> : null}
    </li>
  )
}

export function VerificationSourceRegister() {
  return (
    <section className="mt-12 max-w-[68ch]" id="verification-sources-linked">
      <h2 className="font-serif text-3xl text-cream">Verification sources (linked)</h2>
      <p className="mt-4 leading-relaxed text-cream/90">
        Links were checked on 1 November 2026; some sites block automated checks or may move pages.
      </p>
      {verificationSourceGroups.map((group) => (
        <div className="mt-8" key={group.topic}>
          <h3 className="font-serif text-2xl text-cream">{group.topic}</h3>
          <ul className="mt-3 space-y-3">
            {group.sources.map((source) => (
              <SourceItem key={source.url} source={source} />
            ))}
          </ul>
        </div>
      ))}
    </section>
  )
}

export function ArticleVerificationSources({ slug }: { slug: string }) {
  const sources = articleVerificationSources[slug]
  if (!sources?.length) return null
  return (
    <section className="mt-12 max-w-[68ch]">
      <h2 className="font-serif text-2xl text-cream">Sources for this article</h2>
      <ul className="mt-4 space-y-3">
        {sources.map((source) => (
          <SourceItem key={source.url} source={source} />
        ))}
      </ul>
      <p className="mt-4 text-sm">
        <a className={linkClass} href={registerHref}>
          Full verification source register
        </a>
      </p>
    </section>
  )
}
