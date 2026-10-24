import type { FieldManualContent } from './types'

export const pocketBooklet: FieldManualContent = {
  code: 'en',
  lang: 'en',
  dir: 'ltr',
  path: '/field-manual/pocket-booklet',
  headTitle: 'ARTIORE Pocket Booklet, 23 October 2026 | Artiais.com',
  description:
    'This is a pocket booklet for people who want to be useful without becoming propagandists. It is designed to be read in an hour and used for a month.',
  crumbName: 'Pocket Booklet',
  title: 'The Pocket Booklet',
  byline: 'ARTIORE',
  dateLabel: '23 October 2026',
  datePublished: '2026-10-23',
  tagline: 'Service to everyday people · a derivative, not the archive',
  disclaimers: [],
  toc: [
    { id: 'read-this-first', label: 'Read this first' },
    { id: 'the-moral-frame', label: 'The moral frame' },
    { id: 'seven-places', label: 'Seven places, one standard' },
    { id: 'what-actually-helps', label: 'What actually helps' },
    { id: 'letter', label: 'A letter to those appointed by the public' },
    { id: 'thirty-days', label: 'Thirty days' },
    { id: 'sources-and-notes', label: 'Sources and notes' },
    { id: 'closing', label: 'Closing' },
  ],
  blocks: [
    { type: 'p', text: 'Service to everyday people' },
    { type: 'p', text: 'in a broken world' },
    { type: 'p', text: 'PALESTINE · YEMEN · SYRIA · AFGHANISTAN' },
    { type: 'p', text: 'SAUDI ARABIA · SOMALIA · SOUTH SUDAN · CHAD · PAKISTAN' },
    { type: 'p', text: '« Allah nous suffit ; Il est notre meilleur garant. »' },
    { type: 'p', text: 'A companion to the carousel series.' },
    {
      type: 'p',
      callout: true,
      text: 'No money moved. No one contacted. Nothing published.',
    },
    { type: 'h2', id: 'contents', text: 'CONTENTS' },
    {
      type: 'ul',
      items: [
        '**Read this first** — what this booklet is, and what it is not · 3',
        '**The moral frame** — four verses, two sayings, and what they do not say · 4',
        '**Seven places, one standard** — the facts in nine countries · 6',
        '**What actually helps** — giving, volunteering, advocacy, buying, learning · 14',
        '**A letter to those appointed by the public** — the addressee line and template · 16',
        '**Thirty days** — patience, honesty, generosity, integration · 18',
        '**Sources and notes** — what I checked, and what I could not · 20',
        '**Closing** — three actions for this month · 22',
      ],
    },
    { type: 'h2', id: 'read-this-first', text: 'READ THIS FIRST' },
    {
      type: 'p',
      text: 'This is a pocket booklet for people who want to be useful without becoming propagandists. It is a derivative of eleven working files: operator directives, an agent framework, regional dossiers, and drafts of a longer manual. Those files overlap heavily — the same commands, regions, and source lists recur. I have consolidated them into one argument and one set of practices.',
    },
    {
      type: 'p',
      text: '**What it is.** A short guide to the moral frame, the current facts in nine countries, the practical work of giving and advocacy, and a 30-day practice. It is designed to be read in an hour and used for a month.',
    },
    {
      type: 'p',
      text: '**What it is not.** It is not a fatwa, a legal opinion, financial advice, or medical advice. For a specific religious ruling, consult a qualified scholar. For a legal, financial, or medical decision, consult a qualified professional. If you are in immediate danger, contact local emergency services.',
    },
    {
      type: 'p',
      text: '**What was done.** This booklet and the companion carousels were prepared on 23 October 2026. No one was contacted. Nothing was published. No money was moved. No commitment was made on your behalf. Every letter and post is a draft for your decision.',
    },
    {
      type: 'p',
      text: '**Truth labels.** I use four labels in the text. Cited Fact means a named source says it, with a date and a link in the sources section. Verified means I checked the primary page or filing. Reasoned Guidance means my judgment from the facts. Faith / Perspective means a theological or ethical reading, not an empirical claim. Where competent actors disagree, I say so.',
    },
    {
      type: 'p',
      text: '**A note on dates.** The research window is 22–24 October 2026. Figures move. A number from 2025 is labelled as older data. The date matters more than the number.',
    },
    {
      type: 'p',
      callout: true,
      text: '**The six carousels that accompany this booklet.** 01 The moral frame. 02 Seven places. 03 The gap is a choice. 04 Before you share. 05 A letter that works. 06 Thirty days. Each is a standalone deck of 7–9 slides; the booklet is the reading companion. [REASONED GUIDANCE]',
    },
    { type: 'h2', id: 'the-moral-frame', text: 'THE MORAL FRAME' },
    {
      type: 'p',
      text: 'The archive comes first. Before any argument about policy, the work stands under four Qur\'anic commands and two authenticated sayings. They do not tell us which appropriation line in a foreign ministry is right. They tell us what kind of person we are supposed to be while we argue about it. [FAITH / PERSPECTIVE]',
    },
    {
      type: 'p',
      text: '**The sanctity of one life.** Qur\'an 5:32: "That is why We ordained for the Children of Israel that whoever takes a life — unless as a punishment for murder or mischief in the land — it will be as if they killed all of humanity; and whoever saves a life, it will be as if they saved all of humanity." (Clear Quran translation.) [CITED FACT] The verse addresses the Children of Israel and recalls the law given to them. It does not say that any person or armed group may take a life on its own authority; the qualifier is a legal category, not a licence. Scholars differ on how it applies to non-Muslims and to armed conflict. What it establishes is the weight of a single life. [FAITH / PERSPECTIVE]',
    },
    {
      type: 'p',
      text: '**The purpose of difference.** Qur\'an 49:13: "O humanity! Indeed, We created you from a male and a female, and made you into peoples and tribes so that you may get to know one another. Surely the most noble of you in the sight of Allah is the most righteous among you." [CITED FACT] Difference is for mutual knowledge, not domination. The criterion of nobility is righteousness, not power, wealth, or tribe. [FAITH / PERSPECTIVE]',
    },
    {
      type: 'p',
      text: '**No compulsion.** Qur\'an 2:256: "Let there be no compulsion in religion, for the truth stands out clearly from falsehood." [CITED FACT] This forbids coercion, not persuasion. Any "witness" that relies on pressure, dependency, or fear has abandoned the verse. [FAITH / PERSPECTIVE]',
    },
    {
      type: 'p',
      text: '**Justice without exception.** Qur\'an 4:135: "O believers! Stand firm for justice as witnesses for Allah even if it is against yourselves, your parents, or close relatives. Be they rich or poor, Allah is best to ensure their interests. So do not let your desires cause you to deviate from justice." [CITED FACT] The command is to testify truthfully, including against your own side. It is the hardest command in this booklet, and the one most often broken by people who believe they are doing good. [FAITH / PERSPECTIVE]',
    },
    {
      type: 'p',
      text: '**The most beneficial people.** The Prophet (peace be upon him) is reported to have said: "The most beloved of people to Allah are those most beneficial to people." Al-Ṭabarānī records it in al-Muʿjam al-Awsaṭ and others, from Ibn ʿUmar. Al-Albānī graded it ṣaḥīḥ in Silsilat al-Aḥādīth al-Ṣaḥīḥah no. 906. Some scholars question parts of the chain. The hadith does not say that intention is enough; it says benefit, concretely, to people. [CITED FACT] [FAITH / PERSPECTIVE]',
    },
    {
      type: 'p',
      text: '**Truth before power.** "The best jihad is a word of truth before a tyrannical ruler." Abū Dāwūd 4344 records a version with "a word of justice"; al-Albānī graded it ṣaḥīḥ. Al-Tirmidhī 2174 records it as ḥasan gharīb, and the chain contains a narrator whose reliability is debated. The hadith concerns speech, not violence. It does not authorise arms, and it does not make insult a virtue. [CITED FACT] [FAITH / PERSPECTIVE]',
    },
    {
      type: 'p',
      text: '**What the texts do not do.** They do not identify which armed group is right, which state is more guilty, or which donation is most effective. They do not guarantee that our efforts please Allah; only Allah knows. They do not relieve us of the duty to check facts, count costs, and protect the vulnerable from our own zeal. [FAITH / PERSPECTIVE]',
    },
    {
      type: 'p',
      text: 'The work therefore separates three questions: What is happening? (evidence), What should be done? (prudential judgment), and How should I do it? (character and method). Confusing the three is how good impulses become harm. [REASONED GUIDANCE]',
    },
    {
      type: 'p',
      callout: true,
      text: '**How to read a hadith grading.** Ṣaḥīḥ means the chain is judged sound; ḥasan means it is good but below the highest grade; ḍaʿīf means weak. These are human scholarly judgments, not divine verdicts. A grading can differ between scholars, and a sound chain does not make a saying applicable to every situation. Name the collection, the number, and the grader; consult a qualified scholar for a ruling. [FAITH / PERSPECTIVE]',
    },
    { type: 'h2', id: 'seven-places', text: 'SEVEN PLACES, ONE STANDARD' },
    {
      type: 'p',
      text: 'The nine countries below are not a ranking of suffering. They are a set of tests: whether a person can eat, drink clean water, see a doctor, send a child to school, keep a wage, speak without being disappeared, and live without being bombed. The answers differ. The standard does not: civilians on every side count equally, and every powerful actor is held to the same rules of evidence. [REASONED GUIDANCE]',
    },
    {
      type: 'table',
      caption: 'Seven places, one standard',
      headers: ['Country', 'A dated anchor', 'One thing to do'],
      rows: [
        ['Palestine', '1.4m in IPC Phase 3+; 41% of the 2026 appeal funded', 'Fund verified food/health; write for access and phase two'],
        ['Yemen', '18.3m acutely food insecure; 12.7% funded by May 2026', 'Fund Yemeni-led health/food; support a payroll mechanism'],
        ['Syria', '15.6m need aid; 16% of the 2026 plan funded', 'Fund shelter and missing-persons work; protect HLP rights'],
        ['Afghanistan', '19.2m projected IPC 3+ this lean season; 26% funded', 'Fund nutrition and women-led health; girls\' learning'],
        ['Saudi Arabia', '356 executions in 2025; ILO complaint live', 'Support the ILO process; labour due diligence'],
        ['Africa', 'Somalia 5.1m and South Sudan 7.8m in IPC 3+; Chad hosts 914k Sudanese refugees', 'Fund famine response and refugee reception'],
        ['Pakistan', 'KP emergency 11 Oct 2026; inflation 10.3%; poverty 21.9%', 'Support due process, wages, farmers, and refugees'],
      ],
    },
    {
      type: 'p',
      text: '**Why these nine.** They are not the only crises, and they are not a league table. They are the places named in the source files, plus the three African countries that sit at the intersection of the lowest human development and the highest perceived corruption. A booklet that tried to cover every crisis would cover none well. [REASONED GUIDANCE]',
    },
    {
      type: 'p',
      text: '**What the table does not capture.** The table cannot show the texture of a life: the queue for water, the fear of a knock at the door, the cost of a school uniform. It also cannot show the local organizations that are already doing the work. Those are in the regional pages that follow. [REASONED GUIDANCE]',
    },
    { type: 'region', id: 'region-01-palestine', kicker: 'REGION 01', title: 'PALESTINE', subtitle: 'Gaza and the West Bank' },
    {
      type: 'p',
      text: '**What is happening.** A ceasefire has held since 10 October 2025, but it is not a peace. Israeli strikes, shelling, and gunfire continued through October 2026; 57 Palestinians were reported killed between 29 September and 12 October alone. The second phase — Hamas disarmament, Israeli withdrawal, and a stabilisation force — has not begun. Hamas accepted a 15-point roadmap on 30 July 2026; Israel rejected it. (OCHA, 15 Oct 2026; Security Council Report, 14 Oct 2026.) [CITED FACT]',
    },
    {
      type: 'p',
      text: 'About 1.4 million people are in IPC Phase 3 or worse, including 212,000 in Phase 4. Famine is not currently classified. WFP cut 500,000 people from its Gaza caseload in October 2026 and halved rations. Only 19 of 36 hospitals are even partly functional. UNICEF reported 351 children killed since the ceasefire. In the West Bank, OCHA documented 2,060 settler attacks between January and 12 October 2026 and 1,755 Palestinians displaced by demolitions in 2026. (OCHA; WFP, 19 Oct 2026; UNICEF, 20 Oct 2026.) [CITED FACT]',
    },
    {
      type: 'p',
      text: '**What is disputed.** The death toll: Gaza\'s Ministry of Health reported 74,498 killed since October 2023; OHCHR verified 1,076 conflict deaths between October 2025 and July 2026, a smaller figure for a shorter period. Famine: IPC says no current famine, while UNICEF calls the gains fragile. The cause of the commercial-import halt: Israel cites a merchants–Hamas tax dispute; the UN and NRC cite closures and "dual-use" designations. Detainee numbers come from a PA-affiliated commission and are disputed by Israel. [DISPUTED]',
    },
    {
      type: 'p',
      text: '**This week.** Fund a verified food or medical pipeline; write one letter for aid access and phase two; support a Palestinian-led documentation group; verify before sharing. [REASONED GUIDANCE]',
    },
    { type: 'p', text: 'Sources: OCHA, 15 Oct 2026; WFP, 19 Oct 2026; UNICEF, 20 Oct 2026; UN FTS, 24 Oct 2026.' },
    { type: 'region', id: 'region-02-yemen', kicker: 'REGION 02', title: 'YEMEN', subtitle: 'A war that never ended' },
    {
      type: 'p',
      text: '**What is happening.** The war re-ignited in August 2026. Government forces backed by the Saudi-led coalition launched "Operation Dawn of Yemen," retook the Red Sea coast and claimed Mocha on 5 October; the Houthis dispute the claim. Taiz, home to about 500,000 people, is encircled. The Health Cluster recorded 8,513 casualties (1,574 dead) by 19 October 2026. More than 200,000 people have been displaced since August. (OCHA/WHO, 20 Oct 2026; IOM, 19 Oct 2026.) [CITED FACT] [DISPUTED]',
    },
    {
      type: 'p',
      text: 'More than 22 million people need aid in 2026. 18.3 million are acutely food insecure; 2.2 million children under five are acutely malnourished, including 516,157 with severe acute malnutrition. Only 59.3 per cent of health facilities are fully functional. The 2026 plan asks $2.16 billion; only 12.7 per cent was secured by May. WFP suspended distributions in Houthi-controlled areas from September 2025 and cut its government-area caseload from 3.4 million to 1.7 million. (OCHA HNRP, 18 Mar 2026; OCHA, 14 May 2026.) [CITED FACT]',
    },
    {
      type: 'p',
      text: '**What is disputed.** Control of Mocha and the Bab al-Mandeb coast; displacement figures; the IPC\'s Phase 5 "catastrophe" is a projection, not a measured count. The Houthis\' attacks on Saudi civilian airports in October 2026 are documented by Saudi authorities and reported by wires; the coalition\'s strikes and their civilian toll are contested. [DISPUTED]',
    },
    {
      type: 'p',
      text: '**This week.** Fund a Yemeni-led health or food pipeline; support a UN-brokered payroll mechanism; write about Taiz access; fund mine action; demand the release of detained UN staff. [REASONED GUIDANCE]',
    },
    { type: 'p', text: 'Sources: OCHA HNRP, 18 Mar 2026; OCHA, 14 May 2026; Health Cluster/WHO, 20 Oct 2026; IOM, 19 Oct 2026.' },
    { type: 'region', id: 'region-03-syria', kicker: 'REGION 03', title: 'SYRIA', subtitle: 'A transition that has not yet become safety' },
    {
      type: 'p',
      text: '**What is happening.** The Assad government fell in December 2024. A transitional government under Ahmad al-Sharaa has seated a new People\'s Assembly; a constitution and elections are pending. 15.6 million people need aid; 8.6 million are targeted; the 2026 plan requires about $2.9 billion. Only 16 per cent was funded by May 2026. Reconstruction needs are estimated at $216 billion, including $108 billion in direct damage. (OCHA HNRP, 14 Apr 2026; World Bank, 21 Oct 2025; IRC, 11 May 2026.) [CITED FACT]',
    },
    {
      type: 'p',
      text: '1.67 million refugees and 1.92 million IDPs had returned by 31 May 2026. The ICRC has registered more than 38,000 missing Syrians; the true number is far higher. In the south, renewed Druze–HTS clashes occurred in Suweida in September 2026; Israeli forces advanced into northern Quneitra on 20 October. The February 2023 earthquake damage in Aleppo, Idlib, Latakia, and Hama remains largely unrepaired. (UNHCR, 20 Jul 2026; ICRC, 2026; Xinhua, 22 Oct 2026.) [CITED FACT] [DISPUTED]',
    },
    {
      type: 'p',
      text: '**This week.** Fund a verified Syrian-led organization; support missing-persons tracing; fund one-room shelter repair; advocate for targeted sanctions relief with safeguards; support local journalism. [REASONED GUIDANCE]',
    },
    { type: 'p', text: 'Sources: OCHA HNRP, 14 Apr 2026; UNHCR, 20 Jul 2026; World Bank, 21 Oct 2025; IRC, 11 May 2026.' },
    { type: 'region', id: 'region-04-afghanistan', kicker: 'REGION 04', title: 'AFGHANISTAN', subtitle: 'A hunger crisis on top of a rights crisis' },
    {
      type: 'p',
      text: '**What is happening.** 15.9 million people are in IPC Phase 3 or worse as of August–October 2026. From November 2026 to April 2027, 19.2 million are projected — 38 per cent of the population — including 5 million in Phase 4. 4.04 million children are projected to need malnutrition treatment in 2027. The 2026 appeal asks $1.71 billion for 17.5 million people; 26 per cent was funded by August. (IPC, 15 Oct 2026; OCHA, 11 Aug 2026.) [CITED FACT]',
    },
    {
      type: 'p',
      text: '2.4 million girls are excluded from secondary education. About 150 health facilities have closed since January 2026; maternal mortality is 638 per 100,000 live births. 1.2 million Afghans returned from Iran and Pakistan in 2026 to October; 5 million have returned in two years, about 10 per cent of the population. A returnee survey found 35 per cent food-secure and nine in ten in debt. (UNESCO, 14 Aug 2026; CARE, 14 Aug 2026; OCHA, 18 Feb 2026.) [CITED FACT]',
    },
    {
      type: 'p',
      text: '**What is disputed.** The Taliban deny the bans are permanent but enforce them; they say detained women were held briefly for "advice," while UNAMA documents beatings and no due process. They claim opium cultivation is "zero"; UNODC records 10,200 hectares. Pakistan calls its cross-border strikes precise and proportionate; UNAMA and Amnesty document civilian deaths. [DISPUTED]',
    },
    {
      type: 'p',
      text: '**This week.** Fund nutrition and women-led health; support community-based learning for girls; support returnee reception; write about the funding gap, not only the bans; verify before sharing. [REASONED GUIDANCE]',
    },
    { type: 'p', text: 'Sources: IPC, 15 Oct 2026; OCHA, 11 Aug 2026; UNESCO, 14 Aug 2026; CARE, 14 Aug 2026.' },
    { type: 'region', id: 'region-05-saudi-arabia', kicker: 'REGION 05', title: 'SAUDI ARABIA', subtitle: 'Reform, repression, and the workers who build the future' },
    {
      type: 'p',
      text: '**What is happening.** The 2021 Labour Reform Initiative allowed many private-sector migrant workers to change jobs and exit without employer consent. It did not abolish kafala. Residency is still tied to a sponsor; exit permits remain in a different form; workers need employer consent to change jobs in their first year; domestic workers remain outside the Labour Law and outside the 2021 mobility rights. (HRW, Jan 2026; Migrant-Rights.org, 3 Apr 2026.) [CITED FACT]',
    },
    {
      type: 'p',
      text: 'Saudi Arabia executed 356 people in 2025, a record since Amnesty began counting in 1990, including 243 for drug-related offences. By 23 June 2026, 100 had been executed, 65 for drug offences. An ILO Article 26 complaint alleging breaches of Conventions 29, 95, and 111 was admitted in November 2025 and deferred to the 358th Governing Body session in November 2026. (Amnesty/AFP, 23 Jun 2026; ILO, 2026.) [CITED FACT] [DISPUTED]',
    },
    {
      type: 'p',
      text: '**What is disputed.** Whether the 2021 reforms "ended" abusive sponsorship or left its core intact; whether executions follow fair trials; whether the ILO deferral is dialogue or delay. In October 2026, Houthi missile and drone attacks hit Saudi airports, including Jazan and Najran (three injured) and, according to reports, Riyadh; Dammam was also hit. Civilians on both sides of the border are paying. [DISPUTED]',
    },
    {
      type: 'p',
      text: '**This week.** Support the ILO complaint; ask employers and pension funds for labour due diligence; raise individual prisoners of expression; do not share the false claim that kafala was abolished. [REASONED GUIDANCE]',
    },
    { type: 'p', text: 'Sources: HRW, Jan 2026; Amnesty, 13 May 2025; ILO GB.356, 31 Mar 2026; Amnesty/AFP, 23 Jun 2026.' },
    { type: 'region', id: 'region-06-africa', kicker: 'REGION 06', title: 'AFRICA', subtitle: 'Somalia, South Sudan, Chad' },
    {
      type: 'p',
      text: '**What is happening.** The selection is transparent. The 2025 Human Development Index ranks South Sudan 193rd (0.388), Somalia 192nd (0.404), and Chad 190th (0.416). The 2025 Corruption Perceptions Index gives Somalia and South Sudan 9/100 (joint 181st) and Chad 22/100 (157th). Chad has the highest multidimensional poverty headcount in the 2026 MPI — 84.2 per cent. The MPI does not include Somalia or South Sudan; that is a data gap. [CITED FACT]',
    },
    {
      type: 'p',
      text: 'Somalia: 5.1 million people in IPC Phase 3+ between July and September 2026, 1.4 million in Phase 4, and about 26,000 displaced people in Baidoa in Phase 5; famine risk remains. South Sudan: 7.8 million in IPC Phase 3+ (56 per cent), 73,300 in Phase 5; famine risk in four counties. Chad: 2.5–3 million people need food assistance; it hosts 914,607 Sudanese refugees and 355,903 returnees; daily farm wages have halved. (IPC, Sep 2026; FAO/UNICEF/WFP, 28 Apr 2026; UNHCR/FEWS NET, 2026.) [CITED FACT]',
    },
    {
      type: 'p',
      text: '**This week.** Fund famine response with local partners; support Sudanese refugee reception in Chad; fund anti-corruption and budget-monitoring work; use procurement portals; advocate for debt relief and climate finance. [REASONED GUIDANCE]',
    },
    { type: 'p', text: 'Sources: UNDP HDR 2025; UNDP/OPHI MPI 2026; TI CPI 2025; IPC, Sep 2026; FAO/UNICEF/WFP, 28 Apr 2026; UNHCR/FEWS NET, 2026.' },
    { type: 'region', id: 'region-07-pakistan', kicker: 'REGION 07', title: 'PAKISTAN', subtitle: 'The price of stability' },
    {
      type: 'p',
      text: '**What is happening.** On 11 October 2026, the President, on the Prime Minister\'s advice, imposed emergency and Governor\'s Rule in Khyber Pakhtunkhwa under Articles 232 and 234. The provincial cabinet ceased to exist; powers passed to the Governor; an 11-member advisory council was appointed; the army was deployed under Article 245. The government cited a 196 per cent rise in terrorism incidents; the PTI calls the move unconstitutional political victimisation. [CITED FACT] [DISPUTED]',
    },
    {
      type: 'p',
      text: 'Imran Khan remains jailed. He was convicted in the Toshakhana II case (17 years) and separately in the £190 million case. The £190 million appeals were adjourned indefinitely on 5 October 2026 after 16 adjournments; his lawyers say there has been no lawyer–client meeting since December 2025. Three of his sisters were detained on 20 September; their orders lapsed on 19 October, but they remained in jail. Headline inflation was 10.3 per cent in September 2026; electricity rose 32.46 per cent, motor fuel 39.70 per cent, and wheat flour 34.31 per cent year-on-year. Poverty is 21.9 per cent. (The News, 6 Oct 2026; Dawn, 22 Oct 2026; PBS, 1 Oct 2026; IMF, 8 May 2026.) [CITED FACT]',
    },
    {
      type: 'p',
      text: '**What is disputed.** The government says the KP emergency is "purely constitutional" and prompted by the PTI\'s "unholy alliance" with terrorists; the PTI says it is an attempt to undo the province\'s electoral mandate. Jail authorities say Imran Khan is "fully healthy"; his family alleges denial of medical and lawyer access, and no independent medical report has been released. [DISPUTED]',
    },
    {
      type: 'p',
      text: '**This week.** Support due-process monitoring; write about a specific legal remedy; support wage and farmer organizations; protect Afghan refugees from mass deportation without individual review; pay for independent journalism. [REASONED GUIDANCE]',
    },
    { type: 'p', text: 'Sources: Radio Pakistan, 11 Oct 2026; The News, 6 Oct 2026; Dawn, 22 Oct 2026; PBS, 1 Oct 2026; IMF, 8 May 2026.' },
    { type: 'h2', id: 'what-actually-helps', text: 'WHAT ACTUALLY HELPS' },
    {
      type: 'p',
      text: 'The facts are bad, but they are not mysterious. In most of these places the binding constraint is money and access, not the absence of a plan. WFP cut 500,000 people from Gaza rations in October 2026. Yemen\'s 2026 plan was 12.7 per cent funded by May; Afghanistan\'s was 26 per cent by August; Syria\'s was 16 per cent by May; Chad\'s 2025 plan ended at 29.9 per cent. The world knows what to do. It is choosing not to pay for it. [CITED FACT] [REASONED GUIDANCE]',
    },
    { type: 'p', text: '**Five lanes of action.** You do not have to do everything. Choose one lane and do it consistently.' },
    {
      type: 'ol',
      items: [
        '**Give.** Recurring, unrestricted money to verified frontline and local organizations. It is the fastest lever and the most measurable.',
        '**Volunteer.** Tutor a newly resettled child, staff a legal clinic, join a refugee-sponsorship group, or help a local community organization. Time is scarcer than money for many people; give it where it compounds.',
        '**Advocate.** One representative, one institution, one specific ask. A letter that names a vote, a funding line, an ILO session, or a case is harder to ignore than a slogan.',
        '**Purchase.** Ask your employer, pension fund, bank, and football club what labour and human-rights due diligence they require. Buy from cooperatives and artisans where you can verify the supply chain.',
        '**Learn.** Read one primary source a week. Learn the map, the institutions, and the dispute. Understanding is a form of protection against propaganda.',
      ],
    },
    {
      type: 'p',
      text: '**Where the money goes.** A simple starting split: **60 per cent frontline food and health** (WFP, ICRC, PRCS, YFCA, national Red Cross/Red Crescent societies); **30 per cent local rights and documentation** (Al Mezan, HRCP, Elman Peace, ATPDH); **10 per cent mine action or missing-persons work**. Adjust to the context and your budget. The point is to fund both immediate survival and the record that accountability depends on. [REASONED GUIDANCE]',
    },
    { type: 'p', text: '**Vet in 60 seconds.** Before you give, check five things. If any one fails, wait.' },
    {
      type: 'ul',
      items: [
        '**Registration.** A charity/NGO number on the regulator\'s own database — UK Charity Commission, US IRS/ProPublica, EU national registers.',
        '**Audited accounts.** The last two years, published. A glossy annual report is not an audit.',
        '**Field presence.** A named country office and a UN cluster or established partner that can confirm delivery.',
        '**Sanctions.** Screen the organization and its principals against OFAC, UN, EU, and UK lists.',
        '**Complaints.** A published whistleblowing or beneficiary complaints channel. Ask for it.',
      ],
    },
    {
      type: 'p',
      text: '**Measure of benefit.** You will not be able to prove that your letter changed a vote or your donation saved a particular child. Measure your contribution, not a fantasy of total causation.',
    },
    {
      type: 'ul',
      items: [
        'Money moved: total, percentage to field, receipts, and a 90-day report requested.',
        'Advocacy: letters sent, replies received, and a specific commitment or vote.',
        'Public communication: items verified before sharing; corrections made; zero posts that identify individuals without consent.',
        'Learning: you can explain three facts and two disputes without notes.',
        'Harm avoidance: no names, locations, or identifying images of people inside published; no funding to an unvetted intermediary.',
      ],
    },
    {
      type: 'p',
      text: '**Risks.** Legal and financial: material-support and terrorist-financing laws can reach donors; transfers may be frozen. Fraud: fake appeals cluster around disasters; never give through a direct message or personal account. Misinformation: AI-generated and recycled imagery is pervasive. Safety: do not publish names or locations of people inside. Burnout: the work will outlast the news cycle; pace it.',
    },
    { type: 'h2', id: 'letter', text: 'A LETTER TO THOSE APPOINTED BY THE PUBLIC' },
    {
      type: 'p',
      text: 'The addressee line matters. It names the office and the duty at the same time, without flattery or insult:',
    },
    {
      type: 'quote',
      paragraphs: ['**To those appointed by the general public to serve in the best interest of the people:**'],
    },
    {
      type: 'p',
      text: 'Use it as the first line of the letter. Then write to the office, not the person\'s identity or party. The tone is respectful, factual, and specific. You are not asking for a favour; you are asking for a decision that the office has the power to make.',
    },
    {
      type: 'p',
      text: '**One page. One ask. One decision.** If the letter is longer than a page, it will be skimmed. Put the ask in the first paragraph and repeat it at the end. Name the decision-maker and the date. Ask for a reply within 30 days.',
    },
    { type: 'p', text: '**The structure.**' },
    {
      type: 'ol',
      items: [
        '**Who you are.** A constituent, a voter, a member of the public — and why this matters to you.',
        '**What is happening.** Two or three dated facts, with sources. No adjectives doing the work of evidence.',
        '**What you ask.** Three to five numbered asks, each tied to a decision the office can influence.',
        '**What you want back.** A specific position, a vote, or a meeting — and a reply within 30 days.',
      ],
    },
    { type: 'p', text: '**A template.**' },
    {
      type: 'quote',
      paragraphs: [
        'To those appointed by the general public to serve in the best interest of the people:',
        'I am a constituent in [district/ward]. I write to you not as a partisan, but as one of the people you are appointed to serve. I hold civilians on every side to the same standard, and I am asking for a specific decision, not a general statement.',
        '[Two or three dated facts with sources.]',
        'I ask you to:',
        '1. [Specific ask tied to a vote, funding line, hearing, or process.]',
        '2. [Specific ask.]',
        '3. [Specific ask.]',
        'I would be grateful for your specific position and the action you will take, and for a reply within 30 days.',
        'Yours sincerely,',
        '[Name]',
        '[Contact details]',
      ],
    },
    { type: 'p', text: '**Do.**' },
    {
      type: 'ul',
      items: [
        'Be brief, factual, and local. Cite the date and the source.',
        'Ask for a specific action, not "do more."',
        'Thank the staff. They read the mail.',
        'Keep a copy and log the date, office, and response.',
      ],
    },
    { type: 'p', text: '**Don\'t.**' },
    {
      type: 'ul',
      items: [
        'Insult the office, question the person\'s faith or identity, or make a threat.',
        'Forward unverified footage or a claim you have not checked.',
        'Claim to speak for a whole community. Say "I" and name your connection.',
        'Publish a private reply without consent.',
      ],
    },
    {
      type: 'p',
      text: '**Follow-up.** After 30 days, send a short, polite reminder with the same ask. If the reply is substantive, share it. If it is silence, say so — with the date and the ask. Two constituents are harder to ignore than one; five are a meeting.',
    },
    { type: 'h2', id: 'thirty-days', text: 'THIRTY DAYS' },
    {
      type: 'p',
      text: 'The work fails if the person doing it becomes cruel, careless, or exhausted. This is not a spiritual achievement contest. It is one small action a day, ten minutes of reflection, and one authenticated text each week. If you miss a day, continue; do not restart. [REASONED GUIDANCE]',
    },
    {
      type: 'table',
      caption: 'Thirty days',
      headers: ['Week', 'Theme', 'Daily action', 'Weekly text'],
      rows: [
        [
          '1',
          'Patience',
          'Before replying to a message that angers you, wait one hour. Write what you want to say, then what you actually need.',
          'Qur\'an 2:153: "O you who have believed, seek help through patience and prayer. Indeed, Allah is with the patient." Hadith: "The strong is not the one who overcomes people by his strength, but the one who controls himself while in anger." (Ṣaḥīḥ al-Bukhārī 6114)',
        ],
        [
          '2',
          'Honesty',
          'Correct one small inaccuracy a day — in a message, a share, a story you tell about yourself.',
          'Qur\'an 4:135: "Stand firm for justice as witnesses for Allah even if it is against yourselves." Hadith: "Truthfulness leads to righteousness, and righteousness leads to Paradise." (Ṣaḥīḥ al-Bukhārī 6094; Ṣaḥīḥ Muslim 2607)',
        ],
        [
          '3',
          'Generosity',
          'Give something daily: money, time, attention, or a skill. Give without announcing it. One day, give to someone who cannot reciprocate.',
          'Qur\'an 2:261: "The example of those who spend their wealth in the way of Allah is like a seed of grain that sprouts seven ears; in every ear there are a hundred grains." Hadith: "Charity does not decrease wealth." (Ṣaḥīḥ Muslim 2588)',
        ],
        [
          '4',
          'Integration',
          'Teach one thing from this booklet to one person. Review your giving, letters, and conversations. Choose one practice to keep.',
          'Qur\'an 49:13: "...made you into peoples and tribes so that you may get to know one another." Hadith: "The most beloved deeds to Allah are those done consistently, even if small." (Ṣaḥīḥ al-Bukhārī 6464; Ṣaḥīḥ Muslim 783)',
        ],
      ],
    },
    {
      type: 'p',
      text: '**Daily examples.** Day 1: pause before one angry reply. Day 8: correct one factual error you shared. Day 15: give to a verified organization. Day 25: have one conversation across a divide. Day 30: choose the one practice you will keep.',
    },
    { type: 'p', text: '**Guardrails.**' },
    {
      type: 'ul',
      items: [
        '**No spiritual superiority.** The plan is for you, not a standard by which to judge others.',
        '**No secrecy that isolates.** If you cannot tell a trusted person what you are doing, examine why.',
        '**No burnout.** Ten minutes is enough. The work is a marathon, not a sprint.',
        '**No substitution.** Prayer and reflection do not replace the call, the donation, or the letter.',
        '**No certainty about acceptance.** Only Allah knows what pleases Him. Do the work; do not claim the reward. [FAITH / PERSPECTIVE]',
      ],
    },
    { type: 'h2', id: 'sources-and-notes', text: 'SOURCES AND NOTES' },
    {
      type: 'p',
      text: '**Key sources by region.** All URLs were accessed between 22 and 24 October 2026 unless stated.',
    },
    {
      type: 'ul',
      items: [
        '**Palestine:** OCHA, Humanitarian Situation Report, 15 October 2026 (ochaopt.org); WFP, Funding cuts force WFP to drastically reduce lifesaving assistance in Gaza, 19 Oct 2026 (wfp.org); UNICEF statement, 20 Oct 2026 (unicef.org); IPC/FAO, Food security and child nutrition crises persist in Gaza, 23 Jul 2026 (fao.org); UN FTS oPt plan 1510.',
        '**Yemen:** OCHA, Yemen Humanitarian Needs and Response Plan 2026, 18 Mar 2026 (reliefweb.int); OCHA, Yemen Humanitarian Update, October 2026, 22 Oct 2026; Health Cluster/WHO, Conflict Escalation in Yemen — Situation Report #8, 20 Oct 2026; Oxfam, A Nation Paid in Delays, Apr 2026.',
        '**Syria:** OCHA, Syria Humanitarian Needs and Response Plan 2026, 14 Apr 2026 (humanitarianaction.info); UNHCR, Syria Operational Update — September 2026, 20 Oct 2026; World Bank, Syria\'s post-conflict reconstruction costs estimated at $216 billion, 21 Oct 2025; IRC, 11 May 2026.',
        '**Afghanistan:** IPC, Afghanistan: Acute Food Insecurity & Malnutrition Snapshot, Aug 2026–Sep 2027, 15 Oct 2026 (reliefweb.int); OCHA, Afghanistan Humanitarian Needs and Response Plan 2026, 30 Dec 2025; UNESCO, 14 Aug 2026; CARE, 14 Aug 2026; World Bank, 26 May 2026.',
        '**Saudi Arabia:** HRW, World Report 2026 — Saudi Arabia, Jan 2026 (hrw.org); Amnesty, Locked in, left out, 13 May 2025 (amnesty.org); ILO GB.355/INS/17/1 (27 Nov 2025) and GB.356/INS/15 (31 Mar 2026); Migrant-Rights.org, 3 Apr 2026; Amnesty/AFP executions tally, 23 Jun 2026.',
        '**Africa:** OCHA, Somalia Humanitarian Needs and Response Plan 2026, 27 Jan 2026; IPC Somalia, 23 Sep 2026; OCHA, South Sudan Humanitarian Needs and Response Plan 2026, 12 Feb 2026; FAO/UNICEF/WFP, South Sudan IPC, 28 Apr 2026; UN Chad, 2026 HRP launch, 5 Feb 2026; FEWS NET Chad, Feb 2026; UNDP HDR 2025; UNDP/OPHI MPI 2026; Transparency International CPI 2025.',
        '**Pakistan:** Radio Pakistan, President promulgates emergency, governor\'s rule in KP, 11 Oct 2026; The News, £190m appeals, 6 Oct 2026; Dawn, 22 Oct 2026; PBS via Dawn, 1 Oct 2026; IMF, 8 May 2026; Amnesty International, military courts, 7 May 2026; HRCP, 2026 releases.',
      ],
    },
    {
      type: 'p',
      text: '**What I verified.** I opened the primary pages for the figures used. I did not audit any organization\'s accounts. The organization ledger in the companion manual states, for each named group, what I checked and what I could not. Where a site blocked access (UNRWA, IPC direct, Transparency International), I used a corroborating institutional source and said so.',
    },
    {
      type: 'p',
      text: '**Corrections.** If a claim is wrong, correct it in the next version with the date and the source. Do not quietly delete it. The credibility of this work depends on being correctable.',
    },
    {
      type: 'p',
      text: '**What I did not do.** No contact. No publication. No donation. No commitment. The letters and posts are drafts for your decision.',
    },
    { type: 'h2', id: 'closing', text: 'CLOSING | Three actions for this month' },
    {
      type: 'ol',
      items: [
        '**Fund the gap that is binding.** A recurring, six-month gift to a verified frontline or local organization. Split it 60/30/10: food and health, local rights and documentation, mine action or missing persons. Ask for a 90-day report. This is first because it can keep a child fed or a clinic open this month.',
        '**Speak where a decision is made.** One letter to those appointed by the general public to serve in the best interest of the people, and one institution — a pension fund, a sponsor, a newspaper. One specific ask. Ask for a reply within 30 days. This is second because it is cheap and can change a policy, but it is slower and less certain than money.',
        '**Build one durable structure.** A six-session dialogue with a joint service project, a giving circle with a vetting protocol, or a workplace campaign. This is third because it has the highest long-term return but the slowest feedback, and it fails if the first two are neglected.',
      ],
    },
    {
      type: 'p',
      text: '**Control returns to you.** These are prepared actions, not taken ones. No money has moved, no one has been contacted, nothing has been published. The decision, the amount, the recipient, and the words are yours. May Allah accept what is done for the benefit of people, and forgive what is mistaken; only He knows what is pleasing to Him.',
    },
  ],
}
