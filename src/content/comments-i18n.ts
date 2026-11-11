import type { CommentLang } from './comments'

export type CommentCopy = {
  heading: string
  nameLabel: string
  bodyLabel: string
  submit: string
  pending: string
  empty: string
  anonymous: string
  published: string
  counter: (count: number) => string
  note: string
  privacy: string
  length: string
  links: string
  token: string
  status400: string
  status403: string
  status413: string
  status415: string
  status429: string
  status502: string
  network: string
  unknown: string
}

const en: CommentCopy = {
  heading: 'Comments',
  nameLabel: 'Name (optional)',
  bodyLabel: 'Comment',
  submit: 'Publish comment',
  pending: 'Publishing…',
  empty: 'No comments yet.',
  anonymous: 'Anonymous',
  published: 'Your comment is published.',
  counter: (count) => `${count} / 2000`,
  note: 'Comments are public and come from readers. They are not verified or endorsed by ARTIore. Do not share personal information. The name and the comment are stored, and a hashed IP address is used for spam limits.',
  privacy: 'Privacy policy',
  length: 'The comment must be 2–2000 characters.',
  links: 'A comment can include at most two links.',
  token: 'Complete the verification check, then publish.',
  status400:
    'The comment was not accepted. Check the name, the length (2–2000 characters), and that it has at most two links.',
  status403: 'Verification failed. Complete the check and try again.',
  status413: 'That comment is too large to send.',
  status415: 'The comment was not sent in the expected format.',
  status429: 'Too many comments. Please wait a few minutes and try again.',
  status502: 'Verification is unavailable right now. Try again shortly.',
  network: 'The comment service could not be reached. Try again shortly.',
  unknown: 'The comment could not be published. Try again shortly.',
}

const ar: CommentCopy = {
  heading: 'التعليقات',
  nameLabel: 'الاسم (اختياري)',
  bodyLabel: 'التعليق',
  submit: 'نشر التعليق',
  pending: 'جارٍ النشر…',
  empty: 'لا تعليقات بعد.',
  anonymous: 'مجهول',
  published: 'نُشر تعليقك.',
  counter: (count) => `${count} / 2000`,
  note: 'التعليقات علنية ومن القرّاء. لا تتحقق منها ARTIore ولا تتبناها. لا تشارك معلومات شخصية. يُحفظ الاسم والتعليق، ويُستخدم عنوان IP مُجزَّأ للحد من الإزعاج.',
  privacy: 'سياسة الخصوصية',
  length: 'يجب أن يكون التعليق بين حرفين و2000 حرف.',
  links: 'يمكن أن يتضمّن التعليق رابطين على الأكثر.',
  token: 'أتمّ التحقق، ثم انشر.',
  status400: 'لم يُقبل التعليق. راجع الاسم، والطول (من حرفين إلى 2000)، وألا يزيد عدد الروابط على اثنين.',
  status403: 'فشل التحقق. أتمّ الفحص ثم أعد المحاولة.',
  status413: 'هذا التعليق أكبر من أن يُرسل.',
  status415: 'لم يُرسل التعليق بالصيغة المتوقعة.',
  status429: 'تعليقات كثيرة. انتظر بضع دقائق ثم أعد المحاولة.',
  status502: 'التحقق غير متاح الآن. أعد المحاولة بعد قليل.',
  network: 'تعذّر الوصول إلى خدمة التعليقات. أعد المحاولة بعد قليل.',
  unknown: 'تعذّر نشر التعليق. أعد المحاولة بعد قليل.',
}

const fr: CommentCopy = {
  heading: 'Commentaires',
  nameLabel: 'Nom (facultatif)',
  bodyLabel: 'Commentaire',
  submit: 'Publier le commentaire',
  pending: 'Publication…',
  empty: 'Pas encore de commentaire.',
  anonymous: 'Anonyme',
  published: 'Votre commentaire est publié.',
  counter: (count) => `${count} / 2000`,
  note: 'Les commentaires sont publics et viennent des lecteurs. ARTIore ne les vérifie pas et ne les endosse pas. Ne partagez pas d’informations personnelles. Le nom et le commentaire sont enregistrés, et une adresse IP hachée sert à limiter le spam.',
  privacy: 'Politique de confidentialité',
  length: 'Le commentaire doit compter de 2 à 2000 caractères.',
  links: 'Un commentaire peut contenir deux liens au plus.',
  token: 'Terminez la vérification, puis publiez.',
  status400:
    'Le commentaire n’a pas été accepté. Vérifiez le nom, la longueur (2 à 2000 caractères) et la limite de deux liens.',
  status403: 'La vérification a échoué. Terminez le contrôle et réessayez.',
  status413: 'Ce commentaire est trop volumineux pour être envoyé.',
  status415: 'Le commentaire n’a pas été envoyé au format attendu.',
  status429: 'Trop de commentaires. Attendez quelques minutes et réessayez.',
  status502: 'La vérification est indisponible pour le moment. Réessayez bientôt.',
  network: 'Le service de commentaires est injoignable. Réessayez bientôt.',
  unknown: 'Le commentaire n’a pas pu être publié. Réessayez bientôt.',
}

const ur: CommentCopy = {
  heading: 'تبصرے',
  nameLabel: 'نام (اختیاری)',
  bodyLabel: 'تبصرہ',
  submit: 'تبصرہ شائع کریں',
  pending: 'شائع ہو رہا ہے…',
  empty: 'ابھی کوئی تبصرہ نہیں۔',
  anonymous: 'گمنام',
  published: 'آپ کا تبصرہ شائع ہو گیا۔',
  counter: (count) => `${count} / 2000`,
  note: 'تبصرے عوامی ہیں اور قارئین کی طرف سے ہیں۔ ARTIore ان کی تصدیق نہیں کرتا اور نہ انہیں تسلیم کرتا ہے۔ ذاتی معلومات نہ لکھیں۔ نام اور تبصرہ محفوظ ہوتے ہیں، اور سپیم کی حد کے لیے IP کا ہیش استعمال ہوتا ہے۔',
  privacy: 'رازداری کی پالیسی',
  length: 'تبصرہ 2 سے 2000 حروف کے درمیان ہونا چاہیے۔',
  links: 'ایک تبصرے میں زیادہ سے زیادہ دو روابط ہو سکتے ہیں۔',
  token: 'تصدیق مکمل کریں، پھر شائع کریں۔',
  status400: 'تبصرہ قبول نہیں ہوا۔ نام، لمبائی (2 سے 2000 حروف)، اور دو روابط کی حد دیکھیں۔',
  status403: 'تصدیق ناکام رہی۔ جانچ مکمل کریں اور دوبارہ کوشش کریں۔',
  status413: 'یہ تبصرہ بھیجنے کے لیے بہت بڑا ہے۔',
  status415: 'تبصرہ متوقع شکل میں نہیں بھیجا گیا۔',
  status429: 'تبصرے بہت زیادہ ہیں۔ چند منٹ انتظار کریں اور دوبارہ کوشش کریں۔',
  status502: 'تصدیق اس وقت دستیاب نہیں۔ تھوڑی دیر بعد کوشش کریں۔',
  network: 'تبصرہ سروس تک رسائی نہیں ہو سکی۔ تھوڑی دیر بعد کوشش کریں۔',
  unknown: 'تبصرہ شائع نہیں ہو سکا۔ تھوڑی دیر بعد کوشش کریں۔',
}

export const commentCopy: Record<CommentLang, CommentCopy> = { en, ar, fr, ur }

export function commentStatusMessage(copy: CommentCopy, status: number) {
  if (status === 400) return copy.status400
  if (status === 403) return copy.status403
  if (status === 413) return copy.status413
  if (status === 415) return copy.status415
  if (status === 429) return copy.status429
  if (status === 502) return copy.status502
  return copy.unknown
}
