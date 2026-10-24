export type CarouselSlide = {
  src: string
  alt: string
  text: string
}

export type CarouselDeck = {
  id: string
  number: string
  title: string
  subtitle?: string
  slides: CarouselSlide[]
}

export const carouselDecks: CarouselDeck[] = [
  {
    id: "moral-frame",
    number: "01",
    title: "The moral frame",
    subtitle: "Allah suffices.",
    slides: [
      {
        src: "/field-manual/carousels/s-01.webp",
        alt: "01 Allah suffices. A moral frame for service to everyday people. IN THIS CAROUSEL Four verses, two sayings, one standard. What the texts say — and what they do not say. Why benefit and truthful speech are the test. # SWIPE Full sources and notes in the companion booklet.",
        text: "01\nAllah suffices.\nA moral frame for service to everyday people.\nIN THIS CAROUSEL\nFour verses, two sayings, one standard. What the texts say — and what they do not say. Why benefit and truthful speech are the test.\n# SWIPE\nFull sources and notes in the companion booklet.",
      },
      {
        src: "/field-manual/carousels/s-02.webp",
        alt: "That is why We ordained for the Children of Israel that whoever takes a life — unless as a punishment for murder or mischief in the land — it will be as if they killed all of humanity; and whoever saves a life, it will be as if they saved all of humanity. Qur'an 5:32 · Clear Quran translation WHAT IT DOES NOT SAY That any person or armed group may take a life on its own authority. The exception is a legal category, not a licence.",
        text: "That is why We ordained for the Children of Israel that whoever takes a life — unless as a punishment for murder or mischief in the land — it will be as if they killed all of humanity; and whoever saves a life, it will be as if they saved all of humanity.\nQur'an 5:32 · Clear Quran translation\nWHAT IT DOES NOT SAY\nThat any person or armed group may take a life on its own authority. The exception is a legal category, not a licence.",
      },
      {
        src: "/field-manual/carousels/s-03.webp",
        alt: "O humanity! Indeed, We created you from a male and a female, and made you into peoples and tribes so that you may get to know one another. Surely the most noble of you in the sight of Allah is the most righteous among you. Qur'an 49:13 · Clear Quran translation WHAT IT DOES NOT SAY That difference is a reason for domination. The purpose of difference is mutual knowledge; the criterion is righteousness, not power.",
        text: "O humanity! Indeed, We created you from a male and a female, and made you into peoples and tribes so that you may get to know one another. Surely the most noble of you in the sight of Allah is the most righteous among you.\nQur'an 49:13 · Clear Quran translation\nWHAT IT DOES NOT SAY\nThat difference is a reason for domination. The purpose of difference is mutual knowledge; the criterion is righteousness, not power.",
      },
      {
        src: "/field-manual/carousels/s-04.webp",
        alt: "Let there be no compulsion in religion, for the truth stands out clearly from falsehood. Qur'an 2:256 · Clear Quran translation WHAT IT DOES NOT SAY That Muslims cannot invite, argue, or witness. It forbids coercion, not persuasion.",
        text: "Let there be no compulsion in religion, for the truth stands out clearly from falsehood.\nQur'an 2:256 · Clear Quran translation\nWHAT IT DOES NOT SAY\nThat Muslims cannot invite, argue, or witness. It forbids coercion, not persuasion.",
      },
      {
        src: "/field-manual/carousels/s-05.webp",
        alt: "O believers! Stand firm for justice as witnesses for Allah even if it is against yourselves, your parents, or close relatives. Be they rich or poor, Allah is best to ensure their interests. Qur'an 4:135 · Clear Quran translation WHAT IT DOES NOT SAY That justice is optional when it costs you. It applies against your own side, your family, and your party.",
        text: "O believers! Stand firm for justice as witnesses for Allah even if it is against yourselves, your parents, or close relatives. Be they rich or poor, Allah is best to ensure their interests.\nQur'an 4:135 · Clear Quran translation\nWHAT IT DOES NOT SAY\nThat justice is optional when it costs you. It applies against your own side, your family, and your party.",
      },
      {
        src: "/field-manual/carousels/s-06.webp",
        alt: "01 The most beneficial people \"The most beloved of people to Allah are those most beneficial to people.\" — al-Tabaran, al-Mu'jam al-Awsat. Graded sahih by al-Albani, Silsila 906. Some scholars question parts of the chain. 02 A word of truth \"The best jihad is a word of truth before a tyrannical ruler.\" — Abu Dawud 4344 (sahih, al-Albani); al-Tirmidhi 2174 (hasan gharib). Speech, not violence. 03 What it does not say That intention is enough. That insult is a virtue. That anyone may take up arms. The standard is concrete benefit and truthful speech.",
        text: "01 The most beneficial people\n\"The most beloved of people to Allah are those most beneficial to people.\" — al-Tabaran, al-Mu'jam al-Awsat. Graded sahih by al-Albani, Silsila 906. Some scholars question parts of the chain.\n02 A word of truth\n\"The best jihad is a word of truth before a tyrannical ruler.\" — Abu Dawud 4344 (sahih, al-Albani); al-Tirmidhi 2174 (hasan gharib). Speech, not violence.\n03 What it does not say\nThat intention is enough. That insult is a virtue. That anyone may take up arms. The standard is concrete benefit and truthful speech.",
      },
      {
        src: "/field-manual/carousels/s-07.webp",
        alt: "01 They do not pick a side They do not tell us which armed group is right, which state is more guilty, or which donation is most effective. 02 They do not guarantee acceptance Only Allah knows what pleases Him. Do the work; do not claim the reward. 03 They do not replace evidence What is happening, what should be done, and how to do it are three different questions. 04 They do not excuse harm Good intentions do not justify lies, dehumanisation, or money sent to a fraud.",
        text: "01 They do not pick a side\nThey do not tell us which armed group is right, which state is more guilty, or which donation is most effective.\n02 They do not guarantee acceptance\nOnly Allah knows what pleases Him. Do the work; do not claim the reward.\n03 They do not replace evidence\nWhat is happening, what should be done, and how to do it are three different questions.\n04 They do not excuse harm\nGood intentions do not justify lies, dehumanisation, or money sent to a fraud.",
      },
      {
        src: "/field-manual/carousels/s-08.webp",
        alt: "1 Hold every power to the same evidence Governments, armed groups, and foreign powers. No exceptions for your side. 2 Refuse dehumanisation No propaganda. No collective blame. No calls to violence against any group. 3 Make benefit concrete Food, water, medicine, a wage, a safe return, a fair trial. Not just words.",
        text: "1 Hold every power to the same evidence Governments, armed groups, and foreign powers. No exceptions for your side.\n2 Refuse dehumanisation No propaganda. No collective blame. No calls to violence against any group.\n3 Make benefit concrete Food, water, medicine, a wage, a safe return, a fair trial. Not just words.",
      },
    ],
  },
  {
    id: "seven-places",
    number: "02",
    title: "Seven places",
    slides: [
      {
        src: "/field-manual/carousels/s-09.webp",
        alt: "02 Seven places. One standard. What ordinary people face now - and what one person can do this week. IN THIS CAROUSEL Palestine · Yemen · Syria · Afghanistan · Saudi Arabia · Somalia · South Sudan · Chad · Pakistan One dated fact, one number, one action per place. # SWIPE Full sources and notes in the companion booklet.",
        text: "02\nSeven places. One standard.\nWhat ordinary people face now - and what one person can do this week.\nIN THIS CAROUSEL\nPalestine · Yemen · Syria · Afghanistan · Saudi Arabia · Somalia · South Sudan · Chad · Pakistan One dated fact, one number, one action per place.\n# SWIPE\nFull sources and notes in the companion booklet.",
      },
      {
        src: "/field-manual/carousels/s-10.webp",
        alt: "1.4M people in IPC Phase 3 or worse — 212,000 in Phase 4 351 children killed since the October 2025 ceasefire 41% of the $4.06bn 2026 appeal funded THIS WEEK Fund verified food and health. Write one letter for aid access and phase two.",
        text: "1.4M people in IPC Phase 3 or worse — 212,000 in Phase 4\n351 children killed since the October 2025 ceasefire\n41% of the $4.06bn 2026 appeal funded\nTHIS WEEK\nFund verified food and health. Write one letter for aid access and phase two.",
      },
      {
        src: "/field-manual/carousels/s-11.webp",
        alt: "18.3M people acutely food insecure 200k+ newly displaced since the escalation began in August 2026 12.7% of the 2026 aid plan funded by May 2026 THIS WEEK Fund Yemeni-led health and food pipelines. Support a payroll mechanism, not only emergency aid.",
        text: "18.3M people acutely food insecure\n200k+ newly displaced since the escalation began in August 2026\n12.7% of the 2026 aid plan funded by May 2026\nTHIS WEEK\nFund Yemeni-led health and food pipelines. Support a payroll mechanism, not only emergency aid.",
      },
      {
        src: "/field-manual/carousels/s-12.webp",
        alt: "15.6M people need humanitarian assistance 38,000+ missing Syrians registered with the ICRC — a floor, not a count 16% of the $2.9bn 2026 plan funded by May 2026 THIS WEEK Fund shelter and missing-persons work. Protect returnees' housing, land, and property rights.",
        text: "15.6M people need humanitarian assistance\n38,000+ missing Syrians registered with the ICRC — a floor, not a count\n16% of the $2.9bn 2026 plan funded by May 2026\nTHIS WEEK\nFund shelter and missing-persons work. Protect returnees' housing, land, and property rights.",
      },
      {
        src: "/field-manual/carousels/s-13.webp",
        alt: "19.2M projected in IPC Phase 3+ this lean season 2.4M girls excluded from secondary education 26% of the 2026 appeal funded by August 2026 THIS WEEK Fund nutrition and women-led health. Support community-based learning for girls.",
        text: "19.2M projected in IPC Phase 3+ this lean season\n2.4M girls excluded from secondary education\n26% of the 2026 appeal funded by August 2026\nTHIS WEEK\nFund nutrition and women-led health. Support community-based learning for girls.",
      },
      {
        src: "/field-manual/carousels/s-14.webp",
        alt: "356 executions in 2025 — a record since 1990 70+ Kenyan domestic workers documented in Amnesty's 2025 report Nov 2026 ILO Governing Body session on the Article 26 complaint THIS WEEK Support the ILO complaint. Ask employers and pension funds for labour due diligence.",
        text: "356 executions in 2025 — a record since 1990\n70+ Kenyan domestic workers documented in Amnesty's 2025 report\nNov 2026\nILO Governing Body session on the Article 26 complaint\nTHIS WEEK\nSupport the ILO complaint. Ask employers and pension funds for labour due diligence.",
      },
      {
        src: "/field-manual/carousels/s-15.webp",
        alt: "5.1M people in Somalia in IPC Phase 3+ 7.8M people in South Sudan in IPC Phase 3+ — 56% of the population 914k Sudanese refugees hosted in Chad",
        text: "5.1M people in Somalia in IPC Phase 3+\n7.8M people in South Sudan in IPC Phase 3+ — 56% of the population\n914k Sudanese refugees hosted in Chad",
      },
      {
        src: "/field-manual/carousels/s-16.webp",
        alt: "11 Oct emergency and Governor's Rule imposed in Khyber Pakhtunkhwa 10.3% headline inflation, September 2026 21.9% of the population below the poverty line",
        text: "11 Oct emergency and Governor's Rule imposed in Khyber Pakhtunkhwa\n10.3% headline inflation, September 2026\n21.9% of the population below the poverty line",
      },
      {
        src: "/field-manual/carousels/s-17.webp",
        alt: "1 Give where the gap is binding Recurring, unrestricted money to verified local and frontline organizations. 2 Speak where a decision is made One representative, one institution, one specific ask. 3 Build one durable structure A dialogue group, a giving circle, a workplace campaign. Civilians on every side count equally. Every power is held to the same evidence. Sources in the companion booklet.",
        text: "1 Give where the gap is binding Recurring, unrestricted money to verified local and frontline organizations.\n2 Speak where a decision is made One representative, one institution, one specific ask.\n3 Build one durable structure A dialogue group, a giving circle, a workplace campaign.\nCivilians on every side count equally. Every power is held to the same evidence.\nSources in the companion booklet.",
      },
    ],
  },
  {
    id: "the-gap",
    number: "03",
    title: "The gap is a choice",
    slides: [
      {
        src: "/field-manual/carousels/s-18.webp",
        alt: "03 The gap is a choice. What the funding numbers actually mean - and how to close one small part of it. IN THIS CAROUSEL The cuts happening now. What the funding percentages mean. Where money goes — and how to vet it in 60 seconds. SWIPE Full sources and notes in the companion booklet.",
        text: "03\nThe gap is a choice.\nWhat the funding numbers actually mean - and how to close one small part of it.\nIN THIS CAROUSEL\nThe cuts happening now. What the funding percentages mean. Where money goes — and how to vet it in 60 seconds.\nSWIPE\nFull sources and notes in the companion booklet.",
      },
      {
        src: "/field-manual/carousels/s-19.webp",
        alt: "500,000 people cut from WFP's Gaza food caseload in October 2026 Rations halved; hot meals cut from 250,000 to 150,000 a day. 1.4M people still in IPC Phase 3+ in Gaza 212,000 in Phase 4. Famine is not currently classified. 18.3M people acutely food insecure in Yemen The 2026 plan was 12.7% funded by May. WHAT THIS MEANS The cut is not a forecast. It is a decision already made.",
        text: "500,000 people cut from WFP's Gaza food caseload in October 2026 Rations halved; hot meals cut from 250,000 to 150,000 a day.\n1.4M people still in IPC Phase 3+ in Gaza 212,000 in Phase 4. Famine is not currently classified.\n18.3M people acutely food insecure in Yemen The 2026 plan was 12.7% funded by May.\nWHAT THIS MEANS\nThe cut is not a forecast. It is a decision already made.",
      },
      {
        src: "/field-manual/carousels/s-20.webp",
        alt: "12.7% Yemen's 2026 plan, by May 2026 The 2025 plan ended at 28%. 26% Afghanistan's 2026 appeal, by August 2026 $1.71bn requested for 17.5 million people. 16% Syria's 2026 plan, by May 2026 Reconstruction needs are estimated at $216bn. 29.9% Chad's 2025 plan The 2026 plan asks $986m for 3.4 million people. WHAT THIS MEANS The gap is not evenly distributed. Neither is the money.",
        text: "12.7% Yemen's 2026 plan, by May 2026 The 2025 plan ended at 28%.\n26% Afghanistan's 2026 appeal, by August 2026 $1.71bn requested for 17.5 million people.\n16% Syria's 2026 plan, by May 2026 Reconstruction needs are estimated at $216bn.\n29.9% Chad's 2025 plan The 2026 plan asks $986m for 3.4 million people.\nWHAT THIS MEANS\nThe gap is not evenly distributed. Neither is the money.",
      },
      {
        src: "/field-manual/carousels/s-21.webp",
        alt: "01 It lets a partner plan A six-month commitment is more useful than a one-off spike. It buys food, fuel, and staff time. 02 It protects a caseload You cannot fill a national gap. You can protect a named clinic, school, or shelter cohort. 03 It keeps local staff employed Local organizations are closest to the need and most underfunded. Unrestricted money keeps them alive.",
        text: "01 It lets a partner plan\nA six-month commitment is more useful than a one-off spike. It buys food, fuel, and staff time.\n02 It protects a caseload\nYou cannot fill a national gap. You can protect a named clinic, school, or shelter cohort.\n03 It keeps local staff employed\nLocal organizations are closest to the need and most underfunded. Unrestricted money keeps them alive.",
      },
      {
        src: "/field-manual/carousels/s-22.webp",
        alt: "01 60% · Frontline food and health WFP, ICRC, PRCS, YFCA, national Red Cross/Red Crescent societies. 02 30% · Local rights and documentation Al Mezan, HRCP, Elman Peace, ATPDH. Documentation is protective. 03 10% · Mine action or missing persons A demined road and an answer for a family are durable benefits.",
        text: "01 60% · Frontline food and health\nWFP, ICRC, PRCS, YFCA, national Red Cross/Red Crescent societies.\n02 30% · Local rights and documentation\nAl Mezan, HRCP, Elman Peace, ATPDH. Documentation is protective.\n03 10% · Mine action or missing persons\nA demined road and an answer for a family are durable benefits.",
      },
      {
        src: "/field-manual/carousels/s-23.webp",
        alt: "01 Registration Find the charity number on the regulator's own database — not on the appeal page. 02 Audited accounts Last two years, published. A glossy annual report is not an audit. 03 Field presence A named country office and a UN cluster or established partner that can confirm delivery. 04 Sanctions Screen the organization and its principals against OFAC, UN, EU, and UK lists. 05 Complaints A published whistleblowing or beneficiary complaints channel. Ask for it.",
        text: "01 Registration\nFind the charity number on the regulator's own database — not on the appeal page.\n02 Audited accounts\nLast two years, published. A glossy annual report is not an audit.\n03 Field presence\nA named country office and a UN cluster or established partner that can confirm delivery.\n04 Sanctions\nScreen the organization and its principals against OFAC, UN, EU, and UK lists.\n05 Complaints\nA published whistleblowing or beneficiary complaints channel. Ask for it.",
      },
      {
        src: "/field-manual/carousels/s-24.webp",
        alt: "1 Choose one pipeline Food/health first if you can only choose one. It is the most immediate. 2 Set a six-month budget An amount you can sustain without resentment. Recurring beats dramatic. 3 Write the 90-day ask \"What can you deliver in 30 days, to how many people, and how will I see it?\"",
        text: "1 Choose one pipeline Food/health first if you can only choose one. It is the most immediate.\n2 Set a six-month budget An amount you can sustain without resentment. Recurring beats dramatic.\n3 Write the 90-day ask \"What can you deliver in 30 days, to how many people, and how will I see it?\"",
      },
    ],
  },
  {
    id: "before-you-share",
    number: "04",
    title: "Before you share",
    slides: [
      {
        src: "/field-manual/carousels/s-25.webp",
        alt: "04 Before you share. A field protocol for war footage, viral claims, and fundraising appeals. IN THIS CAROUSEL Six checks before you share. War footage, AI images, and fundraising appeals. How to correct without hiding.",
        text: "04\nBefore you share.\nA field protocol for war footage, viral claims, and fundraising appeals.\nIN THIS CAROUSEL\nSix checks before you share. War footage, AI images, and fundraising appeals. How to correct without hiding.",
      },
      {
        src: "/field-manual/carousels/s-26.webp",
        alt: "01 A share is an act It can raise money, distort a negotiation, or expose a family to reprisal. Treat it as one. 02 Emotion is a warning The more a post makes you want to act immediately, the more you need to check it. 03 Silence is allowed You do not have to post about every atrocity. You do have to avoid amplifying a lie.",
        text: "01 A share is an act\nIt can raise money, distort a negotiation, or expose a family to reprisal. Treat it as one.\n02 Emotion is a warning\nThe more a post makes you want to act immediately, the more you need to check it.\n03 Silence is allowed\nYou do not have to post about every atrocity. You do have to avoid amplifying a lie.",
      },
      {
        src: "/field-manual/carousels/s-27.webp",
        alt: "01 Pause Find the original post, not the screenshot. Who posted it first? 02 Date and place Check the upload date, the earliest instance, and one landmark. If the trees are wrong, stop. 03 Context What happened before and after? A clip can omit the target or the rescue. 04 Corroborate Two independent sources — not two accounts quoting the same original. 05 Check the money If it is an appeal, go to the organization's own site. Never a DM or personal account. 06 Correct If you shared something false, say so publicly and link the correction.",
        text: "01 Pause\nFind the original post, not the screenshot. Who posted it first?\n02 Date and place\nCheck the upload date, the earliest instance, and one landmark. If the trees are wrong, stop.\n03 Context\nWhat happened before and after? A clip can omit the target or the rescue.\n04 Corroborate\nTwo independent sources — not two accounts quoting the same original.\n05 Check the money\nIf it is an appeal, go to the organization's own site. Never a DM or personal account.\n06 Correct\nIf you shared something false, say so publicly and link the correction.",
      },
      {
        src: "/field-manual/carousels/s-28.webp",
        alt: "01 Dignity Do not share identifiable bodies or faces without consent and a clear public-interest reason. 02 Trauma Survivors and families see the same feed. A description with a source is often enough. 03 Propaganda Both sides curate footage. Ask who benefits from you sharing this clip, now.",
        text: "01 Dignity\nDo not share identifiable bodies or faces without consent and a clear public-interest reason.\n02 Trauma\nSurvivors and families see the same feed. A description with a source is often enough.\n03 Propaganda\nBoth sides curate footage. Ask who benefits from you sharing this clip, now.",
      },
      {
        src: "/field-manual/carousels/s-29.webp",
        alt: "01 Hands and text Extra fingers, garbled lettering, inconsistent signage. 02 Light and motion Shadows that disagree; objects that warp; unnatural crowd movement. 03 Provenance Ask for the original file and metadata. C2PA credentials are emerging, not universal. 04 Too perfect A clean, cinematic clip of a chaotic event is a warning, not a gift.",
        text: "01 Hands and text\nExtra fingers, garbled lettering, inconsistent signage.\n02 Light and motion\nShadows that disagree; objects that warp; unnatural crowd movement.\n03 Provenance\nAsk for the original file and metadata. C2PA credentials are emerging, not universal.\n04 Too perfect\nA clean, cinematic clip of a chaotic event is a warning, not a gift.",
      },
      {
        src: "/field-manual/carousels/s-30.webp",
        alt: "01 Who is asking? A registered organization, or a personal account with a story? 02 Where does the money go? A named beneficiary, a budget, and a delivery partner — or vague promises? 03 Is it sanctioned? Check OFAC, UN, EU, and UK lists. Terror-financing rules can reach donors. 04 Can I get a receipt? Yes, from the organization's own payment page. No, from a DM. 05 What is the report? Ask for a 90-day report before you give, not after.",
        text: "01 Who is asking?\nA registered organization, or a personal account with a story?\n02 Where does the money go?\nA named beneficiary, a budget, and a delivery partner — or vague promises?\n03 Is it sanctioned?\nCheck OFAC, UN, EU, and UK lists. Terror-financing rules can reach donors.\n04 Can I get a receipt?\nYes, from the organization's own payment page. No, from a DM.\n05 What is the report?\nAsk for a 90-day report before you give, not after.",
      },
      {
        src: "/field-manual/carousels/s-31.webp",
        alt: "01 Name it \"I shared this yesterday. It is not what it claimed.\" 02 Cite it Link the source that corrects it. Do not hide the correction in a comment. 03 Do not delete to evade Delete only if the post endangers someone. Otherwise, leave the record and correct it.",
        text: "01 Name it\n\"I shared this yesterday. It is not what it claimed.\"\n02 Cite it\nLink the source that corrects it. Do not hide the correction in a comment.\n03 Do not delete to evade\nDelete only if the post endangers someone. Otherwise, leave the record and correct it.",
      },
      {
        src: "/field-manual/carousels/s-32.webp",
        alt: "1 Pick one claim A number, a video, or an appeal. Run the six steps. 2 Teach one person Send them the protocol. Verification spreads by habit, not by policy. 3 Protect one person Remove a name, a location, or a face that should not be public.",
        text: "1 Pick one claim A number, a video, or an appeal. Run the six steps.\n2 Teach one person Send them the protocol. Verification spreads by habit, not by policy.\n3 Protect one person Remove a name, a location, or a face that should not be public.",
      },
    ],
  },
  {
    id: "a-letter",
    number: "05",
    title: "A letter that works",
    slides: [
      {
        src: "/field-manual/carousels/s-33.webp",
        alt: "05 A letter that works. How to write to those appointed by the general public to serve in the best interest of the people. IN THIS CAROUSEL The addressee line that names the duty. One page. One ask. One decision. A template, a do/don't list, and follow-up. # SWIPE Full sources and notes in the companion booklet.",
        text: "05\nA letter that works.\nHow to write to those appointed by the general public to serve in the best interest of the people.\nIN THIS CAROUSEL\nThe addressee line that names the duty. One page. One ask. One decision. A template, a do/don't list, and follow-up.\n# SWIPE\nFull sources and notes in the companion booklet.",
      },
      {
        src: "/field-manual/carousels/s-34.webp",
        alt: "To those appointed by the general public to serve in the best interest of the people. The addressee line — respectful, precise, and hard to ignore. WHAT IT DOES NOT SAY This is not a partisan demand. It is a reminder of the duty that comes with public office.",
        text: "To those appointed by the general public to serve in the best interest of the people.\nThe addressee line — respectful, precise, and hard to ignore.\nWHAT IT DOES NOT SAY\nThis is not a partisan demand. It is a reminder of the duty that comes with public office.",
      },
      {
        src: "/field-manual/carousels/s-35.webp",
        alt: "01 One page If it is longer, it will be skimmed. Put the ask in the first paragraph and repeat it at the end. 02 One ask A specific vote, hearing, funding line, ILO process, or case. Not \"do more.\" 03 One decision Name the decision-maker and the date. Ask for a reply within 30 days.",
        text: "01 One page\nIf it is longer, it will be skimmed. Put the ask in the first paragraph and repeat it at the end.\n02 One ask\nA specific vote, hearing, funding line, ILO process, or case. Not \"do more.\"\n03 One decision\nName the decision-maker and the date. Ask for a reply within 30 days.",
      },
      {
        src: "/field-manual/carousels/s-36.webp",
        alt: "01 Who you are A constituent, a voter, a member of the public — and why this matters to you. 02 What is happening Two or three dated facts, with sources. No adjectives doing the work of evidence. 03 What you ask Three to five numbered asks, each tied to a decision the office can influence. 04 What you want back A specific position, a vote, or a meeting — and a reply within 30 days.",
        text: "01 Who you are\nA constituent, a voter, a member of the public — and why this matters to you.\n02 What is happening\nTwo or three dated facts, with sources. No adjectives doing the work of evidence.\n03 What you ask\nThree to five numbered asks, each tied to a decision the office can influence.\n04 What you want back\nA specific position, a vote, or a meeting — and a reply within 30 days.",
      },
      {
        src: "/field-manual/carousels/s-37.webp",
        alt: "THE LETTER — A TEMPLATE The opening that sets the tone. To those appointed by the general public to serve in the best interest of the people: I am a constituent in [district/ward]. I write to you not as a partisan, but as one of the people you are appointed to serve. I hold civilians on every side to the same standard, and I am asking for a specific decision, not a general statement. [Two or three dated facts with sources.] I ask you to: [three to five numbered asks]. I would be grateful for your specific position and the action you will take, and for a reply within 30 days. Yours sincerely, [Name] [Contact details] One page. One ask. One decision.",
        text: "THE LETTER — A TEMPLATE\nThe opening that sets the tone.\nTo those appointed by the general public to serve in the best interest of the people:\nI am a constituent in [district/ward]. I write to you not as a partisan, but as one of the people you are appointed to serve. I hold civilians on every side to the same standard, and I am asking for a specific decision, not a general statement.\n[Two or three dated facts with sources.]\nI ask you to: [three to five numbered asks].\nI would be grateful for your specific position and the action you will take, and for a reply within 30 days.\nYours sincerely, [Name] [Contact details]\nOne page. One ask. One decision.",
      },
      {
        src: "/field-manual/carousels/s-38.webp",
        alt: "01 Do Be brief, factual, and local. Cite the date and the source. Ask for a specific action. Thank the staff. 02 Don't Insult the office, question the person's faith or identity, forward unverified footage, or make a threat. 03 Do Say what you want them to do, not only what you oppose. A demand without a path is a slogan. 04 Don't Claim to speak for a whole community. Say \"I\" and name your connection.",
        text: "01 Do\nBe brief, factual, and local. Cite the date and the source. Ask for a specific action. Thank the staff.\n02 Don't\nInsult the office, question the person's faith or identity, forward unverified footage, or make a threat.\n03 Do\nSay what you want them to do, not only what you oppose. A demand without a path is a slogan.\n04 Don't\nClaim to speak for a whole community. Say \"I\" and name your connection.",
      },
      {
        src: "/field-manual/carousels/s-39.webp",
        alt: "01 Log it Date, office, staff name, ask, and reply. A record turns a gesture into a campaign. 02 Follow up once After 30 days, a short, polite reminder with the same ask. No abuse. 03 Make it public If the reply is substantive, share it. If it is silence, say so — with the date and the ask. 04 Bring a friend Two constituents are harder to ignore than one. Five are a meeting.",
        text: "01 Log it\nDate, office, staff name, ask, and reply. A record turns a gesture into a campaign.\n02 Follow up once\nAfter 30 days, a short, polite reminder with the same ask. No abuse.\n03 Make it public\nIf the reply is substantive, share it. If it is silence, say so — with the date and the ask.\n04 Bring a friend\nTwo constituents are harder to ignore than one. Five are a meeting.",
      },
      {
        src: "/field-manual/carousels/s-40.webp",
        alt: "1 Pick one decision A vote, a funding line, an ILO session, a court case, a contract. 2 Use the addressee line \"To those appointed by the general public to serve in the best interest of the people.\" 3 Ask for a reply Thirty days. Put it in the last paragraph.",
        text: "1 Pick one decision A vote, a funding line, an ILO session, a court case, a contract.\n2 Use the addressee line \"To those appointed by the general public to serve in the best interest of the people.\"\n3 Ask for a reply Thirty days. Put it in the last paragraph.",
      },
    ],
  },
  {
    id: "thirty-days",
    number: "06",
    title: "Thirty days",
    slides: [
      {
        src: "/field-manual/carousels/s-41.webp",
        alt: "06 Thirty days. A plan for patience, honesty, and generosity - one small action at a time. IN THIS CAROUSEL Patience · honesty · generosity · integration. One daily action, one text per week. A practice, not a performance. # SWIPE Full sources and notes in the companion booklet.",
        text: "06\nThirty days.\nA plan for patience, honesty, and generosity - one small action at a time.\nIN THIS CAROUSEL\nPatience · honesty · generosity · integration. One daily action, one text per week. A practice, not a performance.\n# SWIPE\nFull sources and notes in the companion booklet.",
      },
      {
        src: "/field-manual/carousels/s-42.webp",
        alt: "01 Daily action Before replying to a message that angers you, wait one hour. Write what you want to say, then what you actually need. 02 Weekly text Qur'an 2:153: \"O you who have believed, seek help through patience and prayer. Indeed, Allah is with the patient.\" 03 Hadith \"The strong is not the one who overcomes people by his strength, but the one who controls himself while in anger.\" — Sahih al-Bukhari 6114",
        text: "01 Daily action\nBefore replying to a message that angers you, wait one hour. Write what you want to say, then what you actually need.\n02 Weekly text\nQur'an 2:153: \"O you who have believed, seek help through patience and prayer. Indeed, Allah is with the patient.\"\n03 Hadith\n\"The strong is not the one who overcomes people by his strength, but the one who controls himself while in anger.\" — Sahih al-Bukhari 6114",
      },
      {
        src: "/field-manual/carousels/s-43.webp",
        alt: "01 Daily action Correct one small inaccuracy — in a message, a share, or a story you tell about yourself. Say \"I was wrong\" without a paragraph of justification. 02 Weekly text Qur'an 4:135: \"Stand firm for justice as witnesses for Allah even if it is against yourselves.\" 03 Hadith \"Truthfulness leads to righteousness, and righteousness leads to Paradise.\" — Sahih al-Bukhari 6094; Sahih Muslim 2607",
        text: "01 Daily action\nCorrect one small inaccuracy — in a message, a share, or a story you tell about yourself. Say \"I was wrong\" without a paragraph of justification.\n02 Weekly text\nQur'an 4:135: \"Stand firm for justice as witnesses for Allah even if it is against yourselves.\"\n03 Hadith\n\"Truthfulness leads to righteousness, and righteousness leads to Paradise.\" — Sahih al-Bukhari 6094; Sahih Muslim 2607",
      },
      {
        src: "/field-manual/carousels/s-44.webp",
        alt: "01 Daily action Give money, time, attention, or a skill. Give without announcing it. One day, give to someone who cannot reciprocate. 02 Weekly text Qur'an 2:261: \"The example of those who spend their wealth in the way of Allah is like a seed of grain that sprouts seven ears; in every ear there are a hundred grains.\" 03 Hadith \"Charity does not decrease wealth.\" — Sahih Muslim 2588",
        text: "01 Daily action\nGive money, time, attention, or a skill. Give without announcing it. One day, give to someone who cannot reciprocate.\n02 Weekly text\nQur'an 2:261: \"The example of those who spend their wealth in the way of Allah is like a seed of grain that sprouts seven ears; in every ear there are a hundred grains.\"\n03 Hadith\n\"Charity does not decrease wealth.\" — Sahih Muslim 2588",
      },
      {
        src: "/field-manual/carousels/s-45.webp",
        alt: "01 Daily action Teach one thing from this booklet to one person. Review your giving, letters, and conversations. 02 Weekly text Qur'an 49:13: \"...made you into peoples and tribes so that you may get to know one another.\" 03 Hadith \"The most beloved deeds to Allah are those done consistently, even if small.\" — Sahih al-Bukhari 6464; Sahih Muslim 783",
        text: "01 Daily action\nTeach one thing from this booklet to one person. Review your giving, letters, and conversations.\n02 Weekly text\nQur'an 49:13: \"...made you into peoples and tribes so that you may get to know one another.\"\n03 Hadith\n\"The most beloved deeds to Allah are those done consistently, even if small.\" — Sahih al-Bukhari 6464; Sahih Muslim 783",
      },
      {
        src: "/field-manual/carousels/s-46.webp",
        alt: "01 Day 1 Patience: pause before one angry reply. 02 Day 8 Honesty: correct one factual error you shared. 03 Day 15 Generosity: give to a verified organization. 04 Day 25 Integration: have one conversation across a divide. 05 Day 30 Integration: choose the one practice you will keep.",
        text: "01 Day 1 Patience: pause before one angry reply.\n02 Day 8 Honesty: correct one factual error you shared.\n03 Day 15 Generosity: give to a verified organization.\n04 Day 25 Integration: have one conversation across a divide.\n05 Day 30 Integration: choose the one practice you will keep.",
      },
      {
        src: "/field-manual/carousels/s-47.webp",
        alt: "01 No spiritual superiority The plan is for you, not a standard by which to judge others. 02 No secrecy that isolates If you cannot tell a trusted person what you are doing, examine why. 03 No burnout Ten minutes is enough. The work is a marathon, not a sprint. 04 No substitution Prayer and reflection do not replace the call, the donation, or the letter.",
        text: "01 No spiritual superiority\nThe plan is for you, not a standard by which to judge others.\n02 No secrecy that isolates\nIf you cannot tell a trusted person what you are doing, examine why.\n03 No burnout\nTen minutes is enough. The work is a marathon, not a sprint.\n04 No substitution\nPrayer and reflection do not replace the call, the donation, or the letter.",
      },
      {
        src: "/field-manual/carousels/s-48.webp",
        alt: "1 Choose one theme Patience, honesty, or generosity. Do not try all three at once. 2 Put it where you will see it A note, a phone reminder, a mark on the calendar. 3 Tell one person Accountability without performance.",
        text: "1 Choose one theme Patience, honesty, or generosity. Do not try all three at once.\n2 Put it where you will see it A note, a phone reminder, a mark on the calendar.\n3 Tell one person Accountability without performance.",
      },
    ],
  },
]

export const carouselPdfPath = '/field-manual/carousels/ARTIORE-Carousel-Series-2026-10-23.pdf'

export const carouselOgImage = {
  src: 'https://artiais.com/field-manual/carousels/s-01.webp',
  width: '792',
  height: '990',
}
