/**
 * Display translations for the public claim trace.
 * Underlying wording, quotes, source titles, and history strings stay in the English ledger.
 * This map is display text only. It does not change claims-data.ts.
 */

export const arabicClaimWording: Record<string, string> = {
  C008:
    'يمكن تغيير إعدادات DNS عبر موجّه مخترَق أو برمجية خبيثة؛ متجه بيانات الاعتماد الافتراضية أو البرمجيات الثابتة لم تثبته المصادر المُستشهَد بها.',
  C014: 'تنفيذ رمز عن بُعد في Linux BlueZ 2.6.32–4.13.1؛ نُسب ما قبل المصادقة إلى بحث BlueBorne.',
  C028:
    'حساب WhatsApp: تبديل SIM والتصيّد برمز التحقق مساران موثّقان للاستيلاء؛ آليات شركة الاتصالات لم يُتحقَّق منها بشكل مستقل هنا.',
  C042:
    'يمكن للفيديو أو الصوت الاصطناعي أن يدعم احتيال تحويل عبر الهندسة الاجتماعية؛ التحويل ما زال يتطلب تفويض الضحية، والتزييف العميق ليس المسار الوحيد.',
  C046:
    'يعامل هذا المقال المحيط بوصفه سياسة هوية وإذن، لا موقع الشبكة وحده — إطار تحليلي تدعمه بنية zero trust، وليس حقيقة مقيسة.',
  C047:
    'الاحتيال الواسع النطاق كبير الحجم ومدفوع ماليًا: 859,532 شكوى لدى IC3 وأكثر من $16B خسائر مُبلَّغ عنها في 2024. «Cheap» و«scalable» توصيفان تحليليان، ولم يُقاسا هنا.',
  C055:
    'أسطح الاختراق المذكورة تدعمها إرشادات المحفظة والأمن؛ Ronin وBybit مُبلَّغ عنهما بوصفهما اختراقات مفاتيح أو بنية تحتية أو ثقة، لا كسورًا تشفيرية. أرقام الدولار تقديرات مُبلَّغ عنها، ولم تُراجع تدقيقيًا هنا.',
  C058:
    'بدأ اختراق MGM عام 2023 بهندسة اجتماعية لمكتب المساعدة، لا باستغلال Wi-Fi؛ تؤكد CISA متجه مكتب المساعدة، ويؤكد NLR تسوية $45M، ونموذج 8-K الخاص بـ MGM هو أساس رقم ~$100M (وليس في مصادر CISA/NLR التي جُلبت).',
  C062:
    'تكشف شبكة الضيوف عنوان MAC والوجهات واستعلامات DNS وTLS SNI وعناوين URL حيث يسجّلها المزوّد أو يعترضها؛ التوقيت والحجم موثّقان لدى مصادر البائعين (hide.me وhellorecon.com وPerformance Networks)، لكن التحقق من المصدر الأولي معلّق.',
  C064:
    'يمكن للتحكم في حلّ الأسماء أن يعيد التوجيه أو يحجب الحلّ ويدعم التوجيه إلى اسم شبيه؛ تحليل التوقيت ونتيجة الشهادة الصالحة لم تثبتهما الصفحة المُستشهَد بها، وفك تشفير TLS حدّ منفصل.',
  C065:
    'يوثّق CVE-2008-1447 ثغرة تسميم الذاكرة المؤقتة لـ DNS؛ استجابة الإفصاح المنسّق وتعشية منفذ المصدر سياق تاريخي لم يثبته مدخل NVD.',
  C066: 'مؤكَّد مقابل قصة FBI بتاريخ 9 November 2011.',
  C068:
    'يوثّق Sitting Ducks (2024) اختطاف النطاقات عبر سجلات DNS المعلّقة والتفويضات العرجاء؛ رقما ~1 million نطاق معرّض وtens-of-thousands نطاق مختطَف تقديرات بحثية، ولم يُراجعا تدقيقيًا بشكل مستقل هنا.',
  C069:
    'أعاد اختطاف BGP في April 2018 توجيه بعض حركة DNS الخاصة بـ Route 53 ومستخدمين لـ MyEtherWallet إلى موقع تصيّد؛ خسارة ~$150,000 تقدير مُبلَّغ عنه، ولم تُراجع تدقيقيًا بشكل مستقل هنا.',
  C074: 'KNOB هو CVE-2019-9506. BIAS هو CVE-2020-10135، وليس CVE-2020-12351.',
  C075:
    'يمكن لملحقات Bluetooth HID حقن ضغطات المفاتيح حين يزاوج مهاجم واحدة أو ينتحل شخصيتها (فئة CVE-2023-45866)؛ مثال شاشة برايل تشبيه، ولم يثبته سجل CVE.',
  C083: 'بلغت Anatsa أكثر من 100k تثبيت على Play (رقم مُبلَّغ عنه)؛ إساءة استخدام إمكانية الوصول موثّقة.',
  C084: 'إصدارات iOS قبل 14.8؛ أُصلح في 14.8.',
  C085:
    'أُصلح BLASTPASS في iOS 16.6.1. الإصدارات المتأثرة هي ما قبل 16.6.1، لا 16.6.1 وما قبله.',
  C086:
    'سجلات المكوّنات المُستشهَد بها تُصلح Operation Triangulation في iOS 16.3 و16.5.1 و16.6، لا كإصلاح واحد في 16.6.1.',
  C088:
    'يربط تحليل Coruna من Kaspersky في March 2026 إطارًا بأدوات Operation Triangulation؛ «reused and maintained» استدلال تحليلي من هذا الربط، وليس قياسًا مباشرًا.',
  C091: 'ثغرات مودم Exynos مُبلَّغ عنها؛ قابلية الاستغلال تعتمد على الجهاز.',
  C106:
    'الاستيلاء على الحساب مسار شائع إلى محتوى السحابة عبر التصيّد أو سرقة الجلسة بوكيل عكسي أو تبديل SIM أو إرهاق MFA أو كلمات مرور مُعادة الاستخدام؛ «most common» لم تثبته المصادر المُستشهَد بها.',
  C131:
    'تشمل متجهات إيصال Pegasus الموثّقة سلاسل iMessage من نوع zero-click (FORCEDENTRY وBLASTPASS) ومكالمات WhatsApp تستغل CVE-2019-3568؛ «network-based injection in some cases» لم تثبته المصادر المُستشهَد بها.',
  C148:
    'حماية أُطر الإدارة في WPA2 اختيارية (802.11w)، وليست افتراضية؛ يعالجها WPA3-SAE/MFP فقط حين تدعمها نقطة الوصول والعميل معًا.',
  C150:
    'طلب التوجيه الأمريكي الطارئ لعام 2019 من الوكالات الفدرالية خطوات محددة لتخفيف العبث ببنية DNS؛ القائمة الدقيقة للتدقيق وكلمة المرور والترقيع والمراقبة موجودة في ED 19-01، لا في ملخص التنبيه.',
  C184: '16.6.1 هو إصلاح BLASTPASS. الإصدارات المتأثرة هي ما قبل 16.6.1، لا 16.6.1 وما قبله.',
  C185: 'BIAS = CVE-2020-10135؛ تعيين R15 خاطئ.',
  C197: 'ED 19-01 في Jan 2019؛ لا يُدّعى أنه جاء بدافع إفصاح April 2019.',
  C198: 'تنفيذ رمز عن بُعد ضمن شروط BlueBorne الموثّقة؛ ليس شاملًا.',
}

export const arabicCaveat: Record<string, string> = {
  'Single-source.': 'مصدر واحد.',
  'The ledger stores no checked sentence for this claim.': 'لا يخزّن السجل جملة مُراجَعة لهذا الادعاء.',
  'Analytical frame; “not network location alone”': 'إطار تحليلي؛ «not network location alone».',
  'OM-07: IC3 figures are self-reported complaints, not a census of all fraud.':
    'OM-07: أرقام IC3 شكاوى ذاتية الإبلاغ، وليست تعدادًا لكل الاحتيال.',
  'Large-scale/financially motivated; “cheap/scalable” removed':
    'كبير الحجم ومدفوع ماليًا؛ أُزيل «cheap/scalable».',
  'Confirmed covers the mechanism only, not the dollar figures.':
    'يغطي وصف «مؤكَّد» الآلية فقط، لا أرقام الدولار.',
  'SNI/DNS supported; timing/volume unestablished': 'SNI/DNS مدعومان؛ التوقيت والحجم لم يُثبتا.',
}

export const arabicReason: Record<string, string> = {
  'DNS tampering confirmed; vector partial.': 'أُكِّد العبث بـ DNS؛ المتجه جزئي.',
  'Source inaccessible; mechanism narrowed.': 'المصدر غير متاح؛ ضُيّقت الآلية.',
  'Victim-action condition added.': 'أُضيف شرط فعل الضحية.',
  'Framework, not an empirical claim; wording trimmed to analysis.':
    'إطار، لا ادعاء تجريبي؛ قُصّت الصياغة إلى التحليل.',
  'Volume/loss supported; “cheap/scalable” not measured.':
    'الحجم والخسارة مدعومان؛ «cheap/scalable» لم يُقاسا.',
  'Figures are estimates; mechanism supported.': 'الأرقام تقديرات؛ الآلية مدعومة.',
  'Help-desk vector and $45M settlement confirmed; $100M source not fetched.':
    'أُكِّد متجه مكتب المساعدة وتسوية $45M؛ لم يُجلب مصدر $100M.',
  'Vendor/industry sources document timing/volume and URL logging; primary-source verification pending. Provisional, not confirmed.':
    'توثّق مصادر البائعين والقطاع التوقيت والحجم وتسجيل URL؛ التحقق من المصدر الأولي معلّق. مؤقت، وليس مؤكَّدًا.',
  'Some outcomes not in source.': 'بعض النتائج ليست في المصدر.',
  'NVD supports CVE, not response history.': 'يدعم NVD معرّف CVE، لا تاريخ الاستجابة.',
  'Second independent source found; C066 publication gate opens.':
    'وُجد مصدر مستقل ثانٍ؛ تُفتح بوابة نشر C066.',
  'Counts are estimates.': 'الأعداد تقديرات.',
  'Loss figure is reported.': 'رقم الخسارة مُبلَّغ عنه.',
  'The BIAS identifier in the claim text was CVE-2020-12351. The cited record is CVE-2020-10135.':
    'معرّف BIAS في نص الادعاء كان CVE-2020-12351. السجل المُستشهَد به هو CVE-2020-10135.',
  'HID injection supported; braille analogy not.': 'حقن HID مدعوم؛ تشبيه برايل ليس كذلك.',
  '16.6.1 is the fix, so the affected range is the versions before 16.6.1.':
    '16.6.1 هو الإصلاح، لذا المدى المتأثر هو الإصدارات قبل 16.6.1.',
  'The cited Apple notes do not record a single Triangulation fix in 16.6.1.':
    'ملاحظات Apple المُستشهَد بها لا تسجّل إصلاحًا واحدًا لـ Triangulation في 16.6.1.',
  'Inference labeled.': 'وُسِم الاستدلال.',
  'Ranking unsupported; routes supported.': 'الترتيب غير مدعوم؛ المسارات مدعومة.',
  'Network vector unsupported.': 'المتجه الشبكي غير مدعوم.',
  '“Not protected” overstates; protection is optional.': '«Not protected» يبالغ؛ الحماية اختيارية.',
  'Action list not in summary.': 'قائمة الإجراءات ليست في الملخص.',
  '16.6.1 is the fix, so it is not inside the affected range.':
    '16.6.1 هو الإصلاح، لذا هو ليس داخل المدى المتأثر.',
}

export const arabicClaimsChrome = {
  kicker: 'تحقيق التعرض الرقمي العالمي',
  title: 'أثر الادعاءات',
  introLead:
    'هذه ادعاءات السجل التي تظهر على صفحات التحقيق المنشورة، إضافة إلى كل ادعاء ما زال السجل يعلّمه غير مُتحقَّق منه. ملاحظات الحزم الأقدم التي عدّت 124 ادعاءً قد تجاوزها السجل. في السجل المشتق ',
  introMid: ' ادعاءً. تنشر هذه الصفحة ',
  introTail: ' منها.',
  rejected:
    'رُفضت ستة ادعاءات أثناء المراجعة وهي مستبعدة. لا تُنشر صياغتها ولا مصادرها.',
  gradesLead: 'تتبع الدرجات العامة تسميات أدلة التحقيق: ',
  evidenceMethod: 'منهج الأدلة',
  gradesBody:
    '. «مؤكَّد» يعني أنه موثّق في الواقع. «مُبرهَن» يعني أنه أُثبت في البحث، من غير استغلال مؤكَّد في العالم الواقعي. «معقول» يعني أنه متماسك تقنيًا، من غير دليل عام على الاستغلال. «غير مدعوم» يعني أنه يُكرَّر على نطاق واسع، من غير دليل يُعتمد عليه. حيث يُعدَّل حكم السجل، تضيف الصفحة «ضُيِّقت الصياغة بعد المراجعة». «مُتحقَّق منه» حالة سجل مختلفة، وليست درجة «مؤكَّد».',
  search: 'بحث',
  label: 'التصنيف',
  shown: 'معروضة',
  narrowed: 'ضُيِّقت الصياغة بعد المراجعة.',
  englishWording: 'الصياغة الإنجليزية المعتمدة',
  quote: 'اقتباس',
  ledgerWording: 'صياغة السجل',
  integrity: 'السلامة',
  integrityBody:
    'الحكم الحالي هو أحدث حكم لم يُعكس. الادعاء الذي بلا حكم غير مُتحقَّق منه. يحمل كل مدخل في السجل بصمة. تلك البصمة هي SHA-256 لبصمة المدخل السابق مضافًا إليها سجل معياري للمدخل. يفحص البناء السلسلة كاملة ويتوقف إذا انكسرت. تدرج الملفات أدناه البصمة، والبصمة التي قبلها، للمدخلات المرتبطة بادعاءات هذه الصفحة. يغطي السجل ما فُحص ومتى. هو ليس دليلًا على أن الحالة كانت صحيحة قبل كتابة المدخل.',
  downloadJson: 'تنزيل سلسلة البصمات (JSON)',
  downloadCsv: 'تنزيل سلسلة البصمات (CSV)',
}
