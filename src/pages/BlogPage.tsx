import { SeoHead } from '../components/seo/SeoHead'
import { SiteLink } from '../components/content/SiteLink'
import { alsoOnArtioreBlog, blogPosts } from '../content/blog'
import { links } from '../content/links'
import { blogMeta } from '../content/registry'

export default function BlogPage() {
  return (
    <>
      <SeoHead description={blogMeta.description} path={blogMeta.path} title={blogMeta.headTitle} />
      <article className="mx-auto max-w-4xl">
        <p className="text-xs uppercase tracking-[0.22em] text-gold">Blog</p>
        <h1 className="mt-3 font-serif text-4xl text-cream sm:text-5xl">Four essays</h1>
        <p className="mt-5 max-w-3xl text-lg leading-relaxed text-muted">
          These four pieces by Zain Ul Abdin are the ones captured in full from artiore.com on April 16, 2026. The
          blog index there lists more transmissions. Their full text is not reproduced here.
        </p>
        <div className="mt-8 space-y-4">
          {blogPosts.map((post) => (
            <article className="rounded-2xl border border-gold/20 p-5" key={post.path}>
              <p className="text-xs uppercase tracking-[0.16em] text-gold">
                {post.category} · {post.date} · {post.minutes}
              </p>
              <h2 className="mt-2 font-serif text-2xl text-cream">
                <SiteLink className="hover:text-gold-bright" href={post.path}>
                  {post.title}
                </SiteLink>
              </h2>
              <p className="mt-2 text-sm text-muted">{post.author}</p>
              <p className="mt-3 leading-relaxed text-cream/90">{post.summary}</p>
            </article>
          ))}
        </div>

        <section className="mt-12">
          <h2 className="font-serif text-3xl text-cream">Also listed on artiore.com/blog</h2>
          <p className="mt-3 text-muted">Titles, dates, and the one-line descriptions from the index. No guessed URLs.</p>
          <ul className="mt-5 space-y-4">
            {alsoOnArtioreBlog.map((item) => (
              <li className="border-l border-gold/40 pl-4" key={item.title}>
                <p className="text-cream">{item.title}</p>
                <p className="text-sm text-gold">
                  {item.date} · {item.minutes} · Zain Ul Abdin
                </p>
                <p className="mt-1 text-sm text-muted">{item.summary}</p>
              </li>
            ))}
          </ul>
          <SiteLink className="mt-6 inline-block text-gold-bright underline underline-offset-4" href={links.artioreBlog}>
            artiore.com/blog
          </SiteLink>
        </section>
      </article>
    </>
  )
}
