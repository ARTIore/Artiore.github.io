import { Breadcrumbs } from '../components/seo/Breadcrumbs'
import { SeoHead } from '../components/seo/SeoHead'
import { SiteLink } from '../components/content/SiteLink'
import { RelatedReadingFor } from '../components/related/RelatedReading'
import { InvestigationLanguageSwitcher } from '../components/investigations/InvestigationLanguageSwitcher'
import { InvestigationLicense } from '../components/investigations/InvestigationLicense'
import { TranslationNotice } from '../components/investigations/TranslationNotice'
import { arabicHub, arabicPieces } from '../content/investigations/ar/meta'
import {
  investigationHub,
  investigationLicenseUrl,
  investigationOg,
  investigationPublished,
} from '../content/investigations/catalog'
import { arabicInvestigationBase, investigationAlternates } from '../content/investigations/locale'

const linkClass =
  'text-gold-bright underline decoration-gold/40 underline-offset-4 hover:decoration-gold-bright'

const printPath = '/investigations/digital-exposure/ar/public-safety-checklist/print.html'

const findings = [
  'انتقل المحيط إلى داخل الجهاز: صارت الهويات والرموز والأذونات أهم من جدران الشبكة.',
  'التشفير يحمي قناة، لا طرفًا.',
  'أكثر الهجمات إضرارًا موجَّهة، وليست شاملة.',
  'الاحتيال اليومي هو حيث يذهب المال فعلًا: خسائر مُبلَّغ عنها إلى FBI قدرها $20.877bn في 2025.',
  'الضيافة هدف بنيوي، وليست امتيازًا إجراميًا.',
  'يخفق المستخدمون لأن الواجهات تخفي العواقب، لا لأنهم متهورون.',
]

const corrections = [
  'نُشر الإصدار 1.0 في 31 أكتوبر 2026.',
  '31 أكتوبر 2026: أُضيف مقالان، إضافات المتصفح وسرقة الجلسة، وعلامات التحذير للأمن الرقمي.',
  '1 نوفمبر 2026: أُضيف مقال الإطار، ووُسّع دليل Wi-Fi في الفندق.',
  '1 نوفمبر 2026 — أُضيفت مصادر تحقق بروابط إلى سجل المصادر والمقالات.',
  '2 نوفمبر 2026 — ضُيّق BlueBorne إلى CVE-2017-1000251، ونوى Linux من 2.6.32 إلى 4.13.1. ليس هجومًا شاملًا من غير اقتران. التصحيح نفسه على صفحة Bluetooth والمسرد والملخص التنفيذي وسجل المصادر.',
  '2 نوفمبر 2026 — يستطيع KNOB إنزال عشوائية المفتاح المتفاوَض عليه إلى بايت واحد في أسوأ حالة.',
  '2 نوفمبر 2026 — يبقى BIAS هو CVE-2020-10135. CVE-2020-12351 ثغرة BlueZ مختلفة ولا تُدمَج مع BIAS.',
  '2 نوفمبر 2026 — تنبيهات Apple وGoogle لتتبّع غير مرغوب من مايو 2024 تعتمد على التوافق. حُذفت جملة قالت إن باحثين أظهروا أن التنبيهات يمكن التهرب منها.',
  '2 نوفمبر 2026 — حدود ترقيع iPhone: أُصلح FORCEDENTRY في iOS 14.8. يستخدم BLASTPASS وOperation Triangulation الإصدار 16.6.1 حدًا للترقيع. تختلف مصادر BLASTPASS في ما إذا كان 16.6.1 داخل المدى المتأثر أم هو الإصلاح، ويُذكر الخلاف ولا يُسوّى بالوسط.',
  '2 نوفمبر 2026 — CVE-2025-24200 يتطلب وصولًا ماديًا وليس سلسلة zero-click.',
  '2 نوفمبر 2026 — DNS، Sea Turtle: النطاق عشرات المنظمات في 13 دولة على الأقل، مصدر واحد، لا «more than 40 organisations».',
  '2 نوفمبر 2026 — DNS، Sitting Ducks: رقم النطاقات المعرّضة «around one million» موسوم بأنه تقدير.',
  '2 نوفمبر 2026 — DNS، Route 53: خسارة اختطاف أبريل 2018 رقم مُبلَّغ عنه بنحو US$150,000.',
  '2 نوفمبر 2026 — التوجيه الطارئ 19-01 مؤرخ 22 يناير 2019. لا يوصف بأنه جاء بدافع إفصاح Sea Turtle في أبريل 2019.',
  '2 نوفمبر 2026 — DNSChanger موسوم بأنه من مصدرين. لم تعد الجملة تقول إن البرمجية غيّرت الإعدادات على ملايين الأجهزة.',
  '2 نوفمبر 2026 — يُسمّى CVE-2008-1447 لفئة تسميم الذاكرة المؤقتة عام 2008. لا يُعامل سجل الثغرة كتاريخ للاستجابة اللاحقة.',
  '2 نوفمبر 2026 — يمكن للتحكم في DNS أن يعيد توجيه اتصال أو يحجبه أو يؤخره. لا يفك تشفير جلسة TLS مُتحقَّق من صحتها كما ينبغي. يحمي DNSSEC السلامة لا السرية.',
  '2 نوفمبر 2026 — لم يعد مثال موجّه DNS يذكر سوء إعداد UPnP مسارًا للهجوم. يسمّي بيانات اعتماد افتراضية أو عيبًا في البرمجيات الثابتة.',
  '2 نوفمبر 2026 — تخفيفات إمكانية الوصول في Android، بما فيها Android 12 و13 و15، موصوفة بأنها جزئية.',
  '2 نوفمبر 2026 — رقم Anatsa لأكثر من 100,000 تثبيت على Google Play مُبلَّغ عنه، ولم يُراجع تدقيقيًا بشكل مستقل.',
  '2 نوفمبر 2026 — يُبقي Wi-Fi الفندق هذا الوسم المؤقت كاملًا: SNI وDNS مدعومان؛ التوقيت والحجم وتسجيل URL موثّقة لدى مصادر البائعين والقطاع، والتحقق الأولي معلّق.',
  '2 نوفمبر 2026 — Wi-Fi الفندق: حماية أُطر الإدارة في WPA3 جزئية، وفقط حين تدعمها نقطة الوصول والجهاز معًا. يبقى 802.11w اختياريًا.',
  '2 نوفمبر 2026 — تبديل SIM، بما في ذلك صفحة WhatsApp: مسار رمز التحقق موثّق وليس مسار الاستيلاء الوحيد على المراسلة. إبطال الجلسة منفصل عن تغيير كلمة المرور. المسارات غير مرتَّبة.',
  '2 نوفمبر 2026 — مشروع Pegasus: أكثر من 50,000 رقم أهداف محتملة، لا إصابات مؤكَّدة.',
  '2 نوفمبر 2026 — حذف إجراء OFAC في 30 ديسمبر 2025 ثلاثة أفراد: Sara Hamou وAndrea Gambazzi وMerom Harpaz. لم يحذف Intellexa أو Cytrox ككيانين. لم يجد بحث في قائمة العقوبات البريطانية في 2 نوفمبر 2026 صفوفًا لهذه الأسماء الثلاثة.',
  '2 نوفمبر 2026 — الحكم المدني في مايو 2025 ضد NSO ليس دليلًا تقنيًا على كل إصابة مزعومة. قضية Million Dollar Dissident حلقة موثّقة واحدة، لا دراسة انتشار.',
  '2 نوفمبر 2026 — تضيف قائمة السلامة العامة إعادة ضبط من ثماني خطوات. ليست ضمانًا. يبقى Lockdown Mode مشروطًا. تُذكر استثناءات Advanced Data Protection للبريد وجهات الاتصال والتقويمات.',
  '2 نوفمبر 2026 — أُضيفت أربع صفحات: التزييف العميق واحتيال المدفوعات بالذكاء الاصطناعي؛ الإبلاغ الإقليمي لا ترتيبًا؛ برامج الملاحقة والتخطيط للسلامة؛ ومنهج الأدلة.',
  '2 نوفمبر 2026 — أُضيفت الرخصة: Creative Commons Attribution 4.0 International (CC BY 4.0). تاريخ الإصدار على الصفحة الجامعة هو 31 أكتوبر 2026، تاريخ نشر هذه الصفحة أول مرة.',
  '2 نوفمبر 2026 — سجل الادعاءات: لم يعودا C085 وC184 يقولان إن BLASTPASS أصاب iOS 16.6.1 وما قبله. iOS 16.6.1 هو الإصلاح، لذا الإصدارات المتأثرة هي ما قبل 16.6.1. لم يعد C086 يقول إن Operation Triangulation أُصلح في 16.6.1. تسرد سجلات المكوّنات المُستشهَد بها إصلاحات في iOS 16.3 و16.5.1 و16.6. يسجّل C074 أن BIAS هو CVE-2020-10135 لا CVE-2020-12351.',
]

export default function InvestigationHubArPage() {
  const piece = (slug: string) => arabicPieces.find((item) => item.slug === slug)
  const executive = piece('executive-investigation')
  const matrix = piece('global-threat-matrix')
  const checklist = piece('public-safety-checklist')
  const register = piece('source-register')

  return (
    <>
      <SeoHead
        alternates={investigationAlternates(investigationHub.path)}
        author="ARTIore Research Desk"
        authorOrganization="ARTIore"
        crumbName={arabicHub.crumbName}
        datePublished={investigationPublished}
        description={arabicHub.description}
        dir="rtl"
        headline={arabicHub.headline}
        image={investigationOg.src}
        imageAlt={investigationOg.alt}
        imageHeight={investigationOg.height}
        imageWidth={investigationOg.width}
        inLanguage="ar"
        kind="article"
        license={investigationLicenseUrl}
        locale="ar_AR"
        path={arabicHub.path}
        title={arabicHub.headTitle}
      />
      <Breadcrumbs current={arabicHub.crumbName} label="مسار التنقل" path={arabicHub.path} />
      <article className="investigation" dir="rtl" lang="ar">
        <header className="max-w-[68ch]">
          <InvestigationLanguageSwitcher arPath={arabicInvestigationBase} current="ar" enPath={investigationHub.path} />
          <p className="text-xs uppercase tracking-[0.22em] text-gold">سطح الهجوم غير المرئي</p>
          <h1 className="mt-4 font-serif text-4xl leading-tight text-cream sm:text-5xl">{arabicHub.title}</h1>
          <p className="mt-4 text-lg leading-relaxed text-cream/90">{arabicHub.dek}</p>
          <p className="mt-3 text-sm text-muted">
            الإصدار <bdi dir="ltr">1.0</bdi> · <time dateTime="2026-10-31">31 أكتوبر 2026</time> · عام
          </p>
          <InvestigationLicense locale="ar" />
        </header>
        <TranslationNotice englishPath={investigationHub.path} />
        <div className="mt-10 max-w-[68ch] space-y-4 text-base leading-relaxed text-cream/90">
          <p>
            يفحص هذا التحقيق عشرة افتراضات شائعة عن الأمان الرقمي، ثم يتتبّع الطبقات التقنية تحتها: الشبكات المشتركة، ونظام أسماء النطاقات، وBluetooth وBluetooth Low Energy، وخدمات إمكانية الوصول، واستغلال أنظمة تشغيل الهواتف، والمراسلة المشفّرة، وبرامج التجسس التجارية، والتخزين السحابي، والعملات المشفّرة. ويختم ببيان كيف تجتمع هذه الطبقات، وكيف تُنتَج الكلفة البشرية للتعقيد، وما الذي يستطيع القرّاء فعله على نحو واقعي.
          </p>
        </div>
        <section className="mt-12 max-w-[68ch]">
          <h2 className="font-serif text-3xl text-cream">النتائج الست</h2>
          <ol className="mt-4 list-decimal space-y-3 ps-6 leading-relaxed text-cream/90">
            {findings.map((finding) => (
              <li key={finding}>{finding}</li>
            ))}
          </ol>
        </section>
        <section className="mt-12 max-w-[68ch]">
          <h2 className="font-serif text-3xl text-cream">ترتيب القراءة</h2>
          <ol className="mt-4 list-decimal space-y-3 ps-6 leading-relaxed text-cream/90">
            <li>
              {executive ? (
                <SiteLink className={linkClass} href={executive.path}>
                  <strong>التحقيق التنفيذي</strong>
                </SiteLink>
              ) : (
                <strong>التحقيق التنفيذي</strong>
              )}{' '}
              — ابدأ من هنا. يعطي الملخص التنفيذي النتائج الست؛ ويفهرس الجزء الخامس عشر الباقي.
            </li>
            <li>
              {matrix ? (
                <SiteLink className={linkClass} href={matrix.path}>
                  <strong>مصفوفة التهديد</strong>
                </SiteLink>
              ) : (
                <strong>مصفوفة التهديد</strong>
              )}{' '}
              — لنظرة مقارنة وأولويات معدَّلة بالمخاطر.
            </li>
            <li>
              {checklist ? (
                <SiteLink className={linkClass} href={checklist.path}>
                  <strong>القائمة</strong>
                </SiteLink>
              ) : (
                <strong>القائمة</strong>
              )}{' '}
              — للطبقة القابلة للتنفيذ.{' '}
              <SiteLink className={linkClass} href={printPath}>
                قائمة قابلة للطباعة
              </SiteLink>
            </li>
            <li>
              <a className={linkClass} href="#pieces">
                <strong>المقالات</strong>
              </a>{' '}
              — للتوزيع والبحث.
            </li>
            <li>
              {register ? (
                <SiteLink className={linkClass} href={register.path}>
                  <strong>سجل المصادر</strong>
                </SiteLink>
              ) : (
                <strong>سجل المصادر</strong>
              )}{' '}
              — للتحقق من الوقائع. يعرض{' '}
              <SiteLink className={linkClass} href="/investigations/digital-exposure/ar/claims/">
                أثر الادعاءات
              </SiteLink>{' '}
              الادعاءات المنشورة خلف هذه الصفحات.
            </li>
          </ol>
        </section>
        <section className="mt-12" id="pieces">
          <h2 className="font-serif text-3xl text-cream">كل المواد</h2>
          <ul className="mt-6 grid gap-4 sm:grid-cols-2">
            {arabicPieces.map((item) => (
              <li key={item.path}>
                <article className="h-full rounded-2xl border border-gold/20 bg-white/[0.03] p-5">
                  {item.kicker ? <p className="text-xs uppercase tracking-[0.18em] text-gold">{item.kicker}</p> : null}
                  <h3 className="mt-2 font-serif text-xl text-cream">
                    <SiteLink className={linkClass} href={item.path}>
                      {item.title}
                    </SiteLink>
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted">{item.summary}</p>
                  {item.readingTime ? <p className="mt-3 text-xs text-muted">{item.readingTime}</p> : null}
                  {item.printable ? (
                    <p className="mt-3">
                      <SiteLink className={`inline-flex min-h-11 items-center ${linkClass}`} href={printPath}>
                        قائمة قابلة للطباعة
                      </SiteLink>
                    </p>
                  ) : null}
                </article>
              </li>
            ))}
          </ul>
        </section>
        <section className="mt-12 max-w-[68ch]">
          <h2 className="font-serif text-3xl text-cream">الاستشهاد</h2>
          <p className="mt-4 leading-relaxed text-cream/90">
            مكتب أبحاث ARTIore،{' '}
            <em dir="ltr">
              The Invisible Attack Surface: How Everyday Technology Can Compromise Privacy, Identity and Financial Security
            </em>{' '}
            (سطح الهجوم غير المرئي: كيف يمكن للتقنية اليومية أن تمسّ الخصوصية والهوية والأمن المالي)، تحقيق التعرض الرقمي العالمي، الإصدار 1.0، 26 أكتوبر 2026.
          </p>
          <p className="mt-3 text-cream/90">
            <em dir="ltr">ARTIore — Intelligence in Service of Humanity.</em> (ARTIore — ذكاء في خدمة الإنسانية.)
          </p>
        </section>
        <section className="mt-12 max-w-[68ch]" id="corrections">
          <h2 className="font-serif text-3xl text-cream">سجل التصحيحات</h2>
          {corrections.map((line) => (
            <p className="mt-4 leading-relaxed text-cream/90" key={line}>
              {line}
            </p>
          ))}
        </section>
        <RelatedReadingFor sourcePath="/investigations/digital-exposure/ar" />
      </article>
    </>
  )
}
