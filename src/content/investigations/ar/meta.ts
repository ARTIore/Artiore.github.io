import { arabicInvestigationFaqs } from './faqs'
import { investigationOg, investigationPiece, investigationPublished } from '../catalog'
import { arabicInvestigationBase, arabicPathFor } from '../locale'

export const arabicHub = {
  path: arabicInvestigationBase,
  title: "تحقيق التعرض الرقمي العالمي",
  headTitle: "تحقيق التعرض الرقمي العالمي | ARTIore",
  description: "كيف يمكن للتقنية اليومية أن تمسّ الخصوصية والهوية والأمن المالي. مكتب أبحاث ARTIore، تحقيق التعرض الرقمي العالمي، الإصدار 1.0.",
  crumbName: "تحقيق التعرض الرقمي العالمي",
  headline: "تحقيق التعرض الرقمي العالمي",
  dek: "كيف يمكن للتقنية اليومية أن تمسّ الخصوصية والهوية والأمن المالي",
  lastmod: '2026-11-03',
}

export const arabicClaimsMeta = {
  path: `${arabicInvestigationBase}/claims`,
  headTitle: "أثر الادعاءات | تحقيق التعرض | ARTIore",
  description: "أثر عام لادعاءات صفحات التحقيق: الصياغة والمصادر والاقتباسات والتحفظات والتصحيحات. ستة ادعاءات مرفوضة مستبعدة من النشر ضمن التحقيق.",
  crumbName: "أثر الادعاءات",
  headline: "أثر الادعاءات",
  lastmod: '2026-11-03',
}

const copy: Record<string, { title: string; seoTitle: string; description: string; kicker?: string; readingTime?: string; dek?: string; byline?: string }> = {
  "perimeter": { title: "الإذن هو المحيط", seoTitle: "الإذن هو المحيط الرقمي | ARTIore", description: "دليل بنيوي للتعرض الرقمي: لماذا تهم الأذونات والحسابات والبيانات الوصفية ومسارات الاسترداد أكثر من أي جهاز واحد بعينه. ضمن هذا التحقيق.", kicker: "الإطار", readingTime: "10 دقائق", dek: "هاتفك ليس صندوقًا مقفلًا. إنه كومة من الأذونات — وأكثرها يفعل ما صُمّم ليفعله تمامًا.", byline: "أبحاث ARTIore" },
  "executive-investigation": { title: "سطح الهجوم غير المرئي", seoTitle: "سطح الهجوم غير المرئي | ARTIore", description: "غرض هذا التقرير ليس أن يقنعك بأنك تتعرض لهجوم. غرضه أن لا تخلط أبدًا بين عدم الألفة وبين الأمان. هذا جزء من تحقيق التعرض الرقمي العالمي، الإصدار 1.0.", kicker: "التحقيق التنفيذي", readingTime: "نحو 105 دقيقة" },
  "password-protected-wifi-not-secure": { title: "لماذا لا تكون شبكة Wi-Fi المحمية بكلمة مرور شبكة آمنة", seoTitle: "كلمة مرور Wi-Fi ليست أمانًا | ARTIore", description: "كلمة مرور Wi-Fi تثبت أنه يجوز لك الانضمام إلى الشبكة، لا أن الشبكة جديرة بالثقة. هذا ما يحميه WPA2 وWPA3 فعلًا. ضمن هذا التحقيق.", kicker: "الشبكات", readingTime: "6 دقائق" },
  "hotel-wifi-security-guide": { title: "أمان شبكة Wi-Fi في الفندق: ما الذي ينبغي أن يفعله المسافر فعلًا", seoTitle: "أمان Wi-Fi في الفندق | ARTIore", description: "تجمع الفنادق عابرين وشبكات مشتركة وبيانات دفع. دليل عملي مبني على الأدلة لمخاطر Wi-Fi في الفندق وبوابات الدخول الإجباري.", kicker: "السفر", readingTime: "7 دقائق" },
  "dns-hijacking-explained": { title: "شرح اختطاف DNS: المفتاح غير المرئي الذي يقرر وجهتك", seoTitle: "اختطاف DNS: من يقرر الوجهة | ARTIore", description: "يقرر DNS أي خادم يتصل به جهازك. كيف يعمل اختطاف DNS وتسميم الذاكرة المؤقتة والمحللات الخبيثة، وما الذي ما زال HTTPS يحميه.", kicker: "الشبكات", readingTime: "7 دقائق" },
  "bluetooth-ble-tracking": { title: "تتبّع Bluetooth وBLE: ما الذي تبثّه أجهزتك", seoTitle: "تتبّع Bluetooth وBLE | ARTIore", description: "تبث أجهزة Bluetooth Low Energy بلا انقطاع. كيف يعمل تتبّع BLE، وماذا تفعل عشوائية العنوان، وأي الثغرات تهم القارئ. ضمن هذا التحقيق.", kicker: "اللاسلكي", readingTime: "7 دقائق" },
  "android-accessibility-service-malware": { title: "برمجيات Android الخبيثة عبر خدمة إمكانية الوصول: الإذن الذي يستطيع قراءة شاشتك", seoTitle: "برمجيات إمكانية الوصول | ARTIore", description: "تستطيع خدمات إمكانية الوصول في Android قراءة الشاشة والضغط عنك، ولذلك تسيء أحصنة البنوك استخدامها. هكذا تراجع جهازك. ضمن هذا التحقيق.", kicker: "الأجهزة المحمولة", readingTime: "7 دقائق" },
  "iphone-zero-click-spyware": { title: "برمجيات iPhone التجسسية zero-click: ما الذي ثبت، وما الذي يفعله Lockdown Mode", seoTitle: "تجسس iPhone من دون نقرة | ARTIore", description: "أجهزة iPhone صعبة الاختراق لا محصّنة. نظر موثّق في سلاسل zero-click وتنبيهات Apple ووضع Lockdown وكيف يُقيَّم الدليل. ضمن هذا التحقيق.", kicker: "الأجهزة المحمولة", readingTime: "7 دقائق" },
  "whatsapp-encryption-limits": { title: "حدود تشفير WhatsApp: ما الذي لا يحميه التشفير بين الطرفين", seoTitle: "حدود تشفير حساب WhatsApp | ARTIore", description: "يشفر WhatsApp محتوى الرسالة، لا حسابك ولا جهازك ولا بياناتك الوصفية. عرض للثغرات الموثّقة وللنسخ الاحتياطية وحدودها. ضمن هذا التحقيق.", kicker: "المراسلة", readingTime: "7 دقائق" },
  "pegasus-predator-commercial-spyware": { title: "Pegasus وPredator وبرامج التجسس التجارية: ما الذي ثبت فعلًا", seoTitle: "Pegasus وPredator: ما ثبت | ARTIore", description: "دليل مبني على الأدلة لبرامج التجسس المأجورة: ما يستطيعه Pegasus وPredator، ومن استُهدف، وما يزال غير معروف. هذا جزء من تحقيق التعرض الرقمي العالمي، الإصدار 1.0.", kicker: "المراقبة", readingTime: "8 دقائق" },
  "cloud-photo-account-takeover": { title: "أمان الصور السحابية: كيف تُسرق الحسابات والرموز", seoTitle: "أمان صور السحابة والحساب | ARTIore", description: "نادرًا ما تُسرق صور السحابة بكسر التشفير. تُؤخذ عبر الحسابات والجلسات وروابط المشاركة. هكذا يحدث الاستيلاء على الحساب. ضمن هذا التحقيق.", kicker: "السحابة", readingTime: "6 دقائق" },
  "crypto-wallet-drainers": { title: "أدوات سحب محافظ العملات المشفّرة: عبارات البذرة والموافقات وتسميم العناوين", seoTitle: "سحب محافظ العملات المشفرة | ARTIore", description: "سلاسل الكتل آمنة تشفيريًا؛ المحافظ ليست كذلك. كيف تسرق أدوات السحب والموافقات الخبيثة وتسميم العناوين والتطبيقات المزيفة الأموال.", kicker: "المال", readingTime: "7 دقائق" },
  "sim-swap-account-takeover": { title: "تبديل شريحة SIM والاستيلاء على الحساب: حين يصبح رقم هاتفك أضعف حلقة", seoTitle: "تبديل SIM والاستيلاء | ARTIore", description: "يحوّل تبديل SIM رقم هاتفك إلى مفتاح للمهاجم. كيف يعمل الاحتيال، ولماذا يفشل العامل الثاني عبر SMS، وكيف تنقل حساباتك. ضمن هذا التحقيق.", kicker: "الهوية", readingTime: "6 دقائق" },
  "hotel-keycard-lock-security": { title: "أقفال بطاقات الفندق: قضية Unsaflok وما تعنيه للنزلاء", seoTitle: "أقفال الفندق وقضية Unsaflok | ARTIore", description: "استخدمت ثلاثة ملايين باب فندقي نظام قفل ببطاقات قابلة للتزوير. ما أثبته بحث Unsaflok، وما لم يثبته ذلك البحث. ضمن هذا التحقيق.", kicker: "الأمن المادي", readingTime: "5 دقائق" },
  "browser-extensions-session-theft": { title: "إضافات المتصفح وسرقة الجلسة: لماذا لا تكون المصادقة المتعددة العامل الحاجز الأخير", seoTitle: "إضافات المتصفح والجلسة | ARTIore", description: "تحمي المصادقة المتعددة العامل عملية الدخول. بعد الدخول، تعتمد الخدمة غالبًا على اعتماد جلسة كي تتعرّف على المتصفح. ضمن هذا التحقيق." },
  "digital-security-warning-signs": { title: "علامات التحذير للأمن الرقمي: ما الذي تفحصه قبل الذعر", seoTitle: "علامات التحذير الرقمية | ARTIore", description: "يسخن الهاتف. يفشل اتصال Wi-Fi. تطول قائمة معرّفات Bluetooth. هذه ملاحظات حقيقية، لكنها لا تجيب عن السؤال نفسه. ضمن هذا التحقيق." },
  "deepfake-ai-payment-fraud": { title: "التزييف العميق والاحتيال في المدفوعات بالذكاء الاصطناعي", seoTitle: "تزييف عميق واحتيال دفع | ARTIore", description: "مكالمة الفيديو ليست مصادقة. تحويلات بالتزييف العميق مُبلَّغ عنها، وشاشة الموافقة، ولماذا يبقى مضاعف احتيال الذكاء الاصطناعي فرضية لا رقمًا مقيسًا.", kicker: "الاحتيال", readingTime: "6 دقائق" },
  "regional-reporting-limits": { title: "إبلاغ إقليمي، لا ترتيب بين الدول", seoTitle: "إبلاغ إقليمي لا ترتيب | ARTIore", description: "الأرقام الإقليمية نوافذ إبلاغ لا ترتيبًا للدول. خط أساس لشكاوى أمريكية، وحصص مجموعات بيانات أوروبية، وحدود الملفات الأرق.", kicker: "الأقاليم", readingTime: "8 دقائق" },
  "stalkerware-safety-planning": { title: "برامج الملاحقة والتخطيط للسلامة", seoTitle: "برامج الملاحقة والسلامة | ARTIore", description: "برامج الملاحقة عادةً شخص لديه وصول، لا غريب. احفظ الدليل وخطط مع مدافع. إعادة ضبط الجهاز ليست الخطوة الأولى. ضمن هذا التحقيق.", kicker: "السلامة", readingTime: "5 دقائق" },
  "evidence-method": { title: "منهج الأدلة", seoTitle: "منهج الأدلة في التحقيق | ARTIore", description: "كيف يحجز هذا التحقيق الادعاءات. المرفوض وغير المُتحقَّق منه والمقموع والمحجوز قانونيًا حالات مختلفة، وأعداد السجل مذكورة.", kicker: "المنهج", readingTime: "7 دقائق" },
  "global-threat-matrix": { title: "مصفوفة التهديد العالمية", seoTitle: "مصفوفة التهديد العالمية | ARTIore", description: "عرض مقارن لأسطح الهجوم التي فحصها هذا التحقيق، بحسب الشرط المسبق والأثر وقوة الدليل ووسائل الحماية المتاحة. هذا جزء من تحقيق التعرض الرقمي العالمي، الإصدار 1.0.", kicker: "مصفوفة التهديد" },
  "public-safety-checklist": { title: "قائمة السلامة العامة", seoTitle: "قائمة السلامة العامة | ARTIore", description: "دليل عملي مبني على التحقيق. هو قصير عمدًا، وهذه هي الضوابط التي تغيّر النتائج. هذا جزء من تحقيق التعرض الرقمي العالمي، الإصدار 1.0.", kicker: "قائمة السلامة العامة" },
  "technical-glossary": { title: "المسرد التقني", seoTitle: "المسرد التقني للتحقيق | ARTIore", description: "ستة وثمانون مفهومًا مستخدمًا في هذا التحقيق بلغة واضحة. تصف التعريفات كيف يُستخدم كل مصطلح داخل هذا التقرير. ضمن هذا التحقيق.", kicker: "المسرد" },
  "source-register": { title: "سجل المصادر", seoTitle: "سجل مصادر التحقيق العام | ARTIore", description: "كل ادعاء واقعي جوهري في التحقيق يقابله مدخل أدناه. تسجّل المدخلات الناشر والتاريخ والنوع ورابطًا أو موضعًا للمصدر. ضمن هذا التحقيق.", kicker: "سجل المصادر" },
}

export function arabicPieceView(slug: string) {
  const en = investigationPiece(slug)
  const ar = copy[slug]
  if (!en || !ar) return undefined
  return {
    ...en,
    title: ar.title,
    seoTitle: ar.seoTitle,
    headTitle: ar.seoTitle,
    description: ar.description,
    crumbName: ar.title,
    summary: ar.description,
    kicker: ar.kicker,
    readingTime: ar.readingTime,
    dek: ar.dek,
    byline: ar.byline ?? 'مكتب أبحاث ARTIore',
    path: arabicPathFor(en.path),
    dateModified: '2026-11-03',
    lastmod: '2026-11-03',
  }
}

export const arabicPieces = Object.keys(copy).map((slug) => {
  const piece = arabicPieceView(slug)
  if (!piece) throw new Error(`Missing Arabic piece ${slug}`)
  return piece
})

const sharedImage = {
  image: investigationOg.src,
  imageWidth: investigationOg.width,
  imageHeight: investigationOg.height,
  imageAlt: investigationOg.alt,
  inLanguage: 'ar' as const,
  locale: 'ar_AR' as const,
  dir: 'rtl' as const,
}

export const arabicInvestigationMeta = [
  {
    path: arabicHub.path,
    headTitle: arabicHub.headTitle,
    description: arabicHub.description,
    crumbName: arabicHub.crumbName,
    headline: arabicHub.headline,
    datePublished: investigationPublished,
    lastmod: arabicHub.lastmod,
    ...sharedImage,
  },
  ...arabicPieces.map((piece) => ({
    path: piece.path,
    headTitle: piece.headTitle,
    description: piece.description,
    crumbName: piece.crumbName,
    headline: piece.title,
    datePublished: piece.datePublished ?? investigationPublished,
    dateModified: piece.dateModified,
    lastmod: piece.lastmod,
    faqs: arabicInvestigationFaqs[piece.slug],
    ...sharedImage,
  })),
]

