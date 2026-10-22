import { SeoHead } from '../seo/SeoHead'
import type { Block, PageDocument } from '../../content/types'
import { InlineText, SiteLink } from './SiteLink'

function BlockView({ block }: { block: Block }) {
  switch (block.kind) {
    case 'paragraphs':
      return (
        <div className="space-y-4">
          {block.text.map((paragraph) => (
            <p className="text-base leading-relaxed text-cream/90" key={paragraph}>
              <InlineText text={paragraph} />
            </p>
          ))}
        </div>
      )
    case 'heading': {
      if (block.level === 3) {
        return <h3 className="font-serif text-2xl text-cream">{block.text}</h3>
      }
      return <h2 className="font-serif text-3xl text-cream">{block.text}</h2>
    }
    case 'cards':
      return (
        <div className="grid gap-4 sm:grid-cols-2">
          {block.items.map((item) => (
            <article className="rounded-2xl border border-gold/20 bg-white/[0.03] p-5" key={item.title}>
              {item.eyebrow ? (
                <p className="text-xs uppercase tracking-[0.18em] text-gold">{item.eyebrow}</p>
              ) : null}
              <h3 className="mt-2 font-serif text-xl text-cream">{item.title}</h3>
              <p className="mt-3 text-base leading-relaxed text-muted">
                <InlineText text={item.body} />
              </p>
            </article>
          ))}
        </div>
      )
    case 'list':
      return (
        <div>
          {block.title ? <h2 className="font-serif text-2xl text-cream">{block.title}</h2> : null}
          <ul className={`${block.title ? 'mt-4' : ''} space-y-2 text-base leading-relaxed text-cream/90`}>
            {block.items.map((item) => (
              <li className="border-l border-gold/40 pl-4" key={item}>
                <InlineText text={item} />
              </li>
            ))}
          </ul>
        </div>
      )
    case 'quote':
      return (
        <blockquote className="border-l-2 border-gold pl-5">
          <p className="font-serif text-2xl leading-snug text-gold-bright">“{block.text}”</p>
          {block.cite ? <footer className="mt-3 text-sm text-muted">{block.cite}</footer> : null}
        </blockquote>
      )
    case 'actions':
      return (
        <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          {block.items.map((item) => (
            <SiteLink
              className="inline-flex min-h-11 items-center justify-center whitespace-nowrap rounded-full border border-gold/50 px-5 py-2 text-center text-sm font-semibold text-gold-bright hover:bg-gold/10"
              href={item.href}
              key={item.href + item.label}
            >
              {item.label}
            </SiteLink>
          ))}
        </div>
      )
    case 'note':
      return (
        <p className="rounded-2xl border border-gold/25 bg-gold/5 p-5 text-base leading-relaxed text-cream/90">
          <InlineText text={block.text} />
        </p>
      )
    case 'numbered':
      return (
        <ol className="space-y-4">
          {block.items.map((item) => (
            <li className="grid grid-cols-[auto_1fr] gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-5" key={item.title}>
              <span className="font-serif text-2xl text-gold">{item.label}</span>
              <div>
                <h3 className="font-serif text-xl text-cream">{item.title}</h3>
                <p className="mt-2 text-base leading-relaxed text-muted">
                  <InlineText text={item.body} />
                </p>
              </div>
            </li>
          ))}
        </ol>
      )
    case 'split':
      return (
        <div className="grid gap-4 md:grid-cols-2">
          {[
            [block.leftTitle, block.left],
            [block.rightTitle, block.right],
          ].map(([title, items]) => (
            <section className="rounded-2xl border border-gold/20 p-5" key={String(title)}>
              <h3 className="font-serif text-xl text-gold-bright">{title}</h3>
              <ul className="mt-3 space-y-2 text-base text-cream/90">
                {(items as string[]).map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      )
    default:
      return null
  }
}

export function DocumentView({ page }: { page: PageDocument }) {
  return (
    <>
      <SeoHead description={page.description} path={page.path} title={page.headTitle} />
      <article className="mx-auto max-w-4xl">
        <header>
          <p className="text-xs uppercase tracking-[0.22em] text-gold">{page.eyebrow}</p>
          <h1 className="mt-3 font-serif text-4xl leading-tight text-cream sm:text-5xl">{page.title}</h1>
          <p className="mt-5 max-w-3xl text-lg leading-relaxed text-cream/90">{page.lead}</p>
        </header>
        <div className="mt-10 space-y-8">
          {page.blocks.map((block, index) => (
            <BlockView block={block} key={`${block.kind}-${index}`} />
          ))}
        </div>
      </article>
    </>
  )
}
