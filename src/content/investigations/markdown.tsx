import type { ReactNode } from 'react'
import { SiteLink } from '../../components/content/SiteLink'
import { investigationBase } from './catalog'

const linkClass =
  'text-gold-bright underline decoration-gold/40 underline-offset-4 hover:decoration-gold-bright'

export type InvestigationTocItem = { id: string; text: string }

type Key = { n: number }

function slugify(text: string) {
  const slug = text
    .toLowerCase()
    .replace(/['’]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
  return slug || 'section'
}

function bodyOf(markdown: string) {
  if (!markdown.startsWith('---')) return markdown
  const end = markdown.indexOf('\n---', 3)
  if (end === -1) return markdown
  return markdown.slice(end + 4).replace(/^\n/, '')
}

function resolveHref(href: string, slugs: ReadonlySet<string>) {
  const trimmed = href.trim()
  if (/^(https?:|mailto:|#)/.test(trimmed)) return trimmed
  const hashAt = trimmed.indexOf('#')
  const hash = hashAt >= 0 ? trimmed.slice(hashAt) : ''
  const path = hashAt >= 0 ? trimmed.slice(0, hashAt) : trimmed
  const slug = path.replace(/^\.\//, '').replace(/\/$/, '')
  if (slugs.has(slug)) return `${investigationBase}/${slug}/${hash}`
  if (path.startsWith('/')) {
    if (path.endsWith('/') || /\.[a-z0-9]+$/i.test(path)) return `${path}${hash}`
    return `${path}/${hash}`
  }
  return trimmed
}

function renderLink(href: string, children: ReactNode, key: number) {
  if (href.startsWith('#')) {
    return (
      <a className={linkClass} href={href} key={key}>
        {children}
      </a>
    )
  }
  const external = href.startsWith('http://') || href.startsWith('https://')
  if (external) {
    return (
      <a className={linkClass} href={href} key={key} rel="noreferrer" target="_blank">
        {children}
      </a>
    )
  }
  return (
    <SiteLink className={linkClass} href={href} key={key}>
      {children}
    </SiteLink>
  )
}

function tryLink(text: string, index: number) {
  if (text[index] !== '[') return null
  const close = text.indexOf(']', index + 1)
  if (close === -1 || text[close + 1] !== '(') return null
  const end = text.indexOf(')', close + 2)
  if (end === -1) return null
  return {
    label: text.slice(index + 1, close),
    href: text.slice(close + 2, end),
    end: end + 1,
  }
}

function tryUrl(text: string, index: number) {
  if (!text.startsWith('http://', index) && !text.startsWith('https://', index)) return null
  let end = index
  while (end < text.length && !/[\s<>)]/.test(text[end])) end += 1
  let href = text.slice(index, end)
  while (/[.,;:!?]$/.test(href)) {
    href = href.slice(0, -1)
    end -= 1
  }
  if (!href.includes('://')) return null
  return { href, end }
}

function findBoldEnd(text: string, start: number) {
  let index = start
  while (index < text.length) {
    if (text[index] === '`') {
      const end = text.indexOf('`', index + 1)
      if (end === -1) return -1
      index = end + 1
      continue
    }
    if (text.startsWith('**', index)) return index
    if (text[index] === '*') {
      const end = text.indexOf('*', index + 1)
      if (end === -1) return -1
      index = end + 1
      continue
    }
    index += 1
  }
  return -1
}

function parseInline(text: string, key: Key, slugs: ReadonlySet<string>): ReactNode[] {
  const nodes: ReactNode[] = []
  let index = 0
  let buffer = ''
  const flush = () => {
    if (!buffer) return
    nodes.push(buffer)
    buffer = ''
  }
  while (index < text.length) {
    if (text[index] === '`') {
      const end = text.indexOf('`', index + 1)
      if (end > index) {
        flush()
        nodes.push(
          <code className="rounded bg-white/10 px-1 py-0.5 font-mono text-[0.9em]" key={key.n++}>
            {text.slice(index + 1, end)}
          </code>,
        )
        index = end + 1
        continue
      }
    }
    const link = tryLink(text, index)
    if (link) {
      flush()
      const linkKey = key.n++
      nodes.push(renderLink(resolveHref(link.href, slugs), parseInline(link.label, key, slugs), linkKey))
      index = link.end
      continue
    }
    if (text.startsWith('**', index)) {
      const end = findBoldEnd(text, index + 2)
      if (end !== -1) {
        flush()
        nodes.push(
          <strong key={key.n++}>{parseInline(text.slice(index + 2, end), key, slugs)}</strong>,
        )
        index = end + 2
        continue
      }
    }
    if (text[index] === '*') {
      const end = text.indexOf('*', index + 1)
      if (end > index && !text.startsWith('**', index)) {
        flush()
        nodes.push(<em key={key.n++}>{parseInline(text.slice(index + 1, end), key, slugs)}</em>)
        index = end + 1
        continue
      }
    }
    const url = tryUrl(text, index)
    if (url) {
      flush()
      const urlKey = key.n++
      nodes.push(renderLink(url.href, url.href, urlKey))
      index = url.end
      continue
    }
    buffer += text[index]
    index += 1
  }
  flush()
  return nodes
}

function splitRow(line: string) {
  return line
    .trim()
    .replace(/^\|/, '')
    .replace(/\|$/, '')
    .split('|')
    .map((cell) => cell.trim())
}

function isSeparator(line: string) {
  const cells = splitRow(line)
  return cells.length > 1 && cells.every((cell) => /^:?-+:?$/.test(cell))
}

function headingTag(level: number, text: ReactNode, id: string, key: number) {
  const className =
    level === 1
      ? 'mt-14 max-w-[68ch] scroll-mt-36 border-t border-white/15 pt-8 font-serif text-3xl text-cream'
      : level === 2
        ? 'mt-10 max-w-[68ch] scroll-mt-36 font-serif text-2xl text-cream'
        : 'mt-8 max-w-[68ch] scroll-mt-36 font-serif text-xl text-cream'
  // The page already has one h1. Any markdown h1, including part titles, is demoted.
  if (level <= 2) {
    return (
      <h2 className={className} id={id} key={key}>
        {text}
      </h2>
    )
  }
  if (level === 3) {
    return (
      <h3 className={className} id={id} key={key}>
        {text}
      </h3>
    )
  }
  return (
    <h4 className={className} id={id} key={key}>
      {text}
    </h4>
  )
}

export function renderInvestigationMarkdown(
  markdown: string,
  options: { title: string; slugs: ReadonlySet<string>; partsToc: boolean },
) {
  const key: Key = { n: 0 }
  const slugs = options.slugs
  const lines = bodyOf(markdown).replaceAll('\r\n', '\n').split('\n')
  const blocks: ReactNode[] = []
  const toc: InvestigationTocItem[] = []
  const used = new Set<string>()
  let index = 0

  const uniqueId = (text: string) => {
    const base = slugify(text)
    let id = base
    let n = 2
    while (used.has(id)) {
      id = `${base}-${n}`
      n += 1
    }
    used.add(id)
    return id
  }

  while (index < lines.length) {
    const line = lines[index]
    if (!line.trim()) {
      index += 1
      continue
    }
    if (line.trim() === '---') {
      blocks.push(<hr className="border-white/15" key={key.n++} />)
      index += 1
      continue
    }
    const heading = /^(#{1,6}) (.+)$/.exec(line)
    if (heading) {
      const level = heading[1].length
      const text = heading[2].trim()
      if (level === 1 && text === options.title) {
        index += 1
        continue
      }
      const id = uniqueId(text)
      if (options.partsToc && level === 1) toc.push({ id, text })
      blocks.push(headingTag(level, parseInline(text, key, slugs), id, key.n++))
      index += 1
      continue
    }
    if (line.startsWith('|')) {
      const rows: string[] = []
      while (index < lines.length && lines[index].startsWith('|')) {
        rows.push(lines[index])
        index += 1
      }
      const header = splitRow(rows[0] ?? '')
      const hasSep = rows.length > 1 && isSeparator(rows[1])
      const bodyRows = (hasSep ? rows.slice(2) : rows.slice(1)).filter((row) => !isSeparator(row))
      blocks.push(
        <div className="max-w-full overflow-x-auto" key={key.n++}>
          <table className="w-full border-collapse text-left text-sm">
            {hasSep ? (
              <thead>
                <tr>
                  {header.map((cell, cellIndex) => (
                    <th className="border border-white/15 px-3 py-2 align-top font-semibold text-cream" key={cellIndex}>
                      {parseInline(cell, key, slugs)}
                    </th>
                  ))}
                </tr>
              </thead>
            ) : null}
            <tbody>
              {(hasSep ? bodyRows : rows).map((row, rowIndex) => (
                <tr key={rowIndex}>
                  {splitRow(row).map((cell, cellIndex) => (
                    <td className="border border-white/15 px-3 py-2 align-top text-cream/90" key={cellIndex}>
                      {parseInline(cell, key, slugs)}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>,
      )
      continue
    }
    const task = /^[-*] \[ \] (.*)$/.exec(line)
    const bullet = /^[-*] (.*)$/.exec(line)
    const ordered = /^(\d+)\. (.*)$/.exec(line)
    if (task || (bullet && !task) || ordered) {
      const items: { task: boolean; text: string }[] = []
      const orderedList = Boolean(ordered)
      while (index < lines.length) {
        const current = lines[index]
        const taskItem = /^[-*] \[ \] (.*)$/.exec(current)
        const bulletItem = /^[-*] (.*)$/.exec(current)
        const orderedItem = /^(\d+)\. (.*)$/.exec(current)
        if (orderedList) {
          if (!orderedItem) break
          items.push({ task: false, text: orderedItem[2] })
        } else if (taskItem) {
          items.push({ task: true, text: taskItem[1] })
        } else if (bulletItem && !/^[-*] \[ \] /.test(current)) {
          items.push({ task: false, text: bulletItem[1] })
        } else break
        index += 1
      }
      if (orderedList) {
        blocks.push(
          <ol className="max-w-[68ch] list-decimal space-y-2 pl-6 text-cream/90" key={key.n++}>
            {items.map((item, itemIndex) => (
              <li className="leading-relaxed" key={itemIndex}>
                {parseInline(item.text, key, slugs)}
              </li>
            ))}
          </ol>,
        )
      } else if (items.some((item) => item.task)) {
        blocks.push(
          <ul className="max-w-[68ch] space-y-2 text-cream/90" key={key.n++}>
            {items.map((item, itemIndex) => (
              <li className="leading-relaxed" key={itemIndex}>
                <span className="flex gap-3">
                  <input className="mt-1 size-4 shrink-0 accent-gold" disabled type="checkbox" />
                  <span>{parseInline(item.text, key, slugs)}</span>
                </span>
              </li>
            ))}
          </ul>,
        )
      } else {
        blocks.push(
          <ul className="max-w-[68ch] list-disc space-y-2 pl-6 text-cream/90" key={key.n++}>
            {items.map((item, itemIndex) => (
              <li className="leading-relaxed" key={itemIndex}>
                {parseInline(item.text, key, slugs)}
              </li>
            ))}
          </ul>,
        )
      }
      continue
    }
    const paragraph: string[] = [line.trim()]
    index += 1
    while (
      index < lines.length &&
      lines[index].trim() &&
      !lines[index].startsWith('#') &&
      !lines[index].startsWith('|') &&
      lines[index].trim() !== '---' &&
      !/^[-*] /.test(lines[index]) &&
      !/^\d+\. /.test(lines[index])
    ) {
      paragraph.push(lines[index].trim())
      index += 1
    }
    blocks.push(
      <p className="max-w-[68ch] leading-relaxed text-cream/90" key={key.n++}>
        {parseInline(paragraph.join(' '), key, slugs)}
      </p>,
    )
  }

  return { toc, body: blocks }
}
