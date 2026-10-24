/**
 * Shared sincerity disclaimer for every Field Manual page.
 * Keyed by language code, the same way the manuals are.
 * Add `es`, `ur`, and `hi` here when those manuals publish.
 * A code with no entry falls back to English.
 */
export const sincerityNotes = {
  en: {
    dir: 'ltr',
    text: 'We have tried to be accurate and sincere. If anything here is mistaken or incomplete, it is unintentional. May Allah forgive any error and accept our effort. Please verify important details with the sources listed and with qualified people.',
  },
  fr: {
    dir: 'ltr',
    text: "Nous avons cherché à être exacts et sincères. Si quoi que ce soit ici est erroné ou incomplet, ce n'est pas intentionnel. Qu'Allah pardonne toute erreur et accepte notre effort. Veuillez vérifier les détails importants auprès des sources indiquées et de personnes qualifiées.",
  },
  ar: {
    dir: 'rtl',
    text: 'حرصنا على الدقة والإخلاص. وإن وقع هنا خطأ أو نقص فهو غير مقصود. نسأل الله أن يغفر لنا كل خطأ وأن يتقبل جهدنا. نرجو التحقق من التفاصيل المهمة من المصادر المذكورة ومن أهل الاختصاص.',
  },
} as const

export type SincerityCode = keyof typeof sincerityNotes

export function sincerityFor(code: string): { lang: string; dir: 'ltr' | 'rtl'; text: string } {
  if (code in sincerityNotes) {
    const note = sincerityNotes[code as SincerityCode]
    return { lang: code, dir: note.dir, text: note.text }
  }
  return { lang: 'en', dir: sincerityNotes.en.dir, text: sincerityNotes.en.text }
}
