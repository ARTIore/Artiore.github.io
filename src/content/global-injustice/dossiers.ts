import type { InjusticePage } from './types'

const base = '/investigations/global-injustice'

function page(entry: Omit<InjusticePage, 'path'> & { slug: string }): InjusticePage {
  return { ...entry, path: `${base}/${entry.slug}` }
}

export const injusticePages: InjusticePage[] = [
  page({
    id: 'L1',
    slug: 'l1-systems',
    title: 'L1. Systems and the ordinary person',
    headTitle: 'L1: Systems and Ordinary People | ARTIore',
    description:
      'A 2015 civil-rights case, a 2025 inquiry volume, and a 2018 assessment dated after 2017. No global error rate is stated.',
    crumbName: 'L1 Systems',
    kicker: 'L1',
    finding: 'Named institutions failed in the ways the opened records describe. No common global error rate was found.',
    findingRung: 'DOCUMENTED IN PART',
    seesCorrections: true,
    lead:
      'Institutional incentives can put the cost of error on people who lack the money, time, status, or documents to challenge a decision. This edition states that only for the records that opened.',
    record: [
      {
        rung: 'ESTABLISHED',
        text:
          'S1.1. The Justice Department’s case page for United States v. City of Ferguson says the Department announced on 4 March 2015 that Ferguson’s police and municipal-court practices systematically violate the First, Fourth, and Fourteenth Amendments. It says enforcement was unduly focused on revenue and that the practices reflect and exacerbate race bias, and discriminate against African Americans. That is what the Department found in Ferguson. It is one investigative source.',
        sourceIds: ['ferguson'],
      },
      {
        rung: 'ESTABLISHED',
        text:
          'S1.2. Volume 1 of the Post Office Horizon IT Inquiry’s final report was ordered to be printed on 8 July 2025. The inquiry’s reports page says that volume focuses on the human impact of the scandal and on redress. This edition does not treat prosecutions, convictions, quashed convictions, and compensation eligibility as the same count.',
        sourceIds: ['po-v1', 'po-index'],
      },
      {
        rung: 'DOCUMENTED IN PART',
        text:
          'S1.4. A World Bank explanation of Global Findex 2025 says that, despite growth in account ownership, 1.3 billion adults still lack financial accounts. The same page describes a rise in formal saving in low- and middle-income economies. Exclusion is documented. The share caused by unjust rules is not.',
        sourceIds: ['findex'],
      },
      {
        rung: 'DOCUMENTED IN PART',
        text:
          'S1.6 and S1.7. BSR’s 22 September 2022 assessment of Meta’s Arabic and Hebrew moderation during May 2021 says BSR did not identify intentional bias in the evidence it reviewed, and did identify unintentional bias, including greater over-enforcement of Arabic content than Hebrew content. Meta’s response the same day describes an unintentional impact on Palestinian and Arab communities. Neither document is a census of global moderation error.',
        sourceIds: ['bsr-2022', 'meta-2022'],
      },
    ],
    caseFor:
      'The opened cases show different mechanisms: revenue pressure in a municipal system, an organisation defending its own records, and unequal enforcement of content rules. They do not require one organiser.',
    caseAgainst:
      'These are visible failures. The same kinds of institutions also investigate and publish. Account access has grown on the Findex page that was opened. Nothing here is a rate of all institutional encounters, or proof that each practice continues unchanged.',
    stillOpen: [
      'Comparable error rates, time to a remedy, and compensation actually paid.',
      'Whether later reforms changed the practices the 2015 and 2022 documents describe.',
    ],
    nextSources: [
      'Ferguson monitoring reports.',
      'Post Office payment records, kept separate from the count of prosecutions.',
      'Platform appeal and reinstatement data by language.',
    ],
    falsifier:
      'A claim that these failures still dominate would weaken if representative audits showed low error rates, a real route to challenge, and remedies that last. That would not erase the historical findings.',
    confidence:
      'High for the Ferguson findings and for the existence of inquiry Volume 1. Moderate for a recurring mechanism. Low for any single global prevalence figure.',
    heldBack: [
      {
        deskClaim: 'A May–September 2018 human-rights assessment of Facebook in Myanmar is evidence of a warning issued before the 2017 atrocities.',
        disposition: 'replaced',
        detail:
          'The assessment says BSR did the work between May and September 2018. It cannot, by itself, be a document issued before 2017. The chronology is corrected on the hub.',
      },
      {
        deskClaim: 'The UK–Rwanda removals partnership was described as finished on 5 August 2024.',
        disposition: 'could not access',
        detail:
          'The parliamentary answer did not open. A Rwanda government PDF does show a notice of arbitration filed on 24 November 2025 under the migration treaty. Ending the policy and arguing about the treaty are not stated here as the same event.',
      },
      {
        deskClaim: 'A.R.E. v. Greece, 7 January 2025, found removal without examining protection risks, against systematic pushbacks, while G.R.J. failed on the individual proof.',
        disposition: 'could not access',
        detail: 'The cited European Court of Human Rights annual report did not yield readable text. Those cases are not findings.',
      },
      {
        deskClaim: 'The UN Secretary-General’s 1 December 2016 remarks are an official acknowledgment of the Haiti cholera failure.',
        disposition: 'could not access',
        detail: 'The statement URL did not return the text. The apology is not a finding in this edition.',
      },
    ],
    sourceIds: ['ferguson', 'po-v1', 'po-index', 'myanmar', 'rwanda', 'findex', 'bsr-2022', 'meta-2022'],
  }),
  page({
    id: 'L2',
    slug: 'l2-corruption',
    title: 'L2. Corruption, gatekeepers and capture',
    headTitle: 'L2: Corruption and Capture | ARTIore',
    description:
      'A pandemic procurement audit found missing records. The revised bribery resolutions and a 2026 lobbying chapter did not open.',
    crumbName: 'L2 Corruption',
    kicker: 'L2',
    finding: 'Procurement paperwork failed in a named audit. Admitted bribery resolutions in the revision were not retrieved.',
    findingRung: 'DOCUMENTED IN PART',
    lead:
      'Public and corporate authority can be turned toward private advantage. Access, a weak safeguard, and a bought decision are different claims. This edition keeps them apart.',
    record: [
      {
        rung: 'DOCUMENTED IN PART',
        text:
          'S2.4. The UK National Audit Office’s report on COVID-19 procurement says the work does not evaluate the value for money of the contracts awarded in the period. In a risk-based sample it found enough documentation for some procurements and, in specific others, insufficient documentation of key decisions or of how risks such as perceived or actual conflicts were handled. It also says some contracts were awarded retrospectively or published late. Missing paperwork is not a finding that every contract was corrupt.',
        sourceIds: ['nao-covid'],
      },
      {
        rung: 'OPEN',
        text:
          'The revised report’s bribery resolutions and the 2026 lobbying chapter were not retrieved. Without those pages, this edition does not say that a named company admitted an organised bribery department, and it does not state a capture rate.',
        sourceIds: [],
      },
    ],
    caseFor:
      'Missing procurement records are a real opportunity for influence to go unseen. They are not, by themselves, proof that a contract was bought.',
    caseAgainst:
      'An undocumented decision is not automatically a corrupt one. Emergency buying can require speed. Legal lobbying, agreement on policy, a conflict of interest, and a criminal purchase are different. Enforcement, where it exists, is evidence that oversight is not uniformly captured. Those bribery files were not opened here.',
    stillOpen: [
      'Which decisions changed because of a relationship.',
      'Whether penalties deter repetition after profits and the chance of enforcement are counted.',
    ],
    nextSources: [
      'The Justice Department resolutions named in the revision, once the pages return text.',
      'Tender scores, beneficial owners, meeting calendars, and job offers, compared with suppliers of similar capacity.',
    ],
    falsifier:
      'A capture claim about one decision weakens if the records show the decision came first, or followed criteria applied to connected and unconnected bidders alike.',
    confidence:
      'Moderate for the procurement-documentation gaps the audit describes. The admitted-bribery claims in the revision are unresolved here because the pages did not open.',
    heldBack: [
      {
        deskClaim: 'Odebrecht and Braskem pleaded guilty in December 2016, and a Goldman Sachs 1MDB resolution exceeded $2.9 billion, with a Federal Reserve action the same day.',
        disposition: 'could not access',
        detail:
          'The Justice Department archive pages returned a bot check instead of the announcements. The Federal Reserve page that did open fines Goldman Sachs $154 million for oversight and control failures related to 1MDB. That fine is not the $2.9 billion resolution, so the larger figure is not used.',
      },
      {
        deskClaim: 'A 2026 OECD integrity review finds gaps between lobbying safeguards and revolving-door controls.',
        disposition: 'could not access',
        detail: 'The chapter returned 403. It is not a finding.',
      },
    ],
    sourceIds: ['nao-covid', 'fed'],
  }),
  page({
    id: 'L3',
    slug: 'l3-voices',
    title: 'L3. Suppression of voices',
    headTitle: 'L3: Suppression of Voices | ARTIore',
    description:
      'CPJ reported 129 deaths in a 25 February 2026 release and 330 jailed on 1 December 2025. The database, it says, can change.',
    crumbName: 'L3 Voices',
    kicker: 'L3',
    finding: 'A dated prison census and a dated death report are on the record. They are not a count of every silenced person.',
    findingRung: 'DOCUMENTED IN PART',
    seesCorrections: true,
    lead:
      'Punishment, surveillance, and lawsuits can make public-interest work dangerous. Death, surveillance, and prosecution each need their own evidence. “Good voices” is not a category this page can measure.',
    record: [
      {
        rung: 'DOCUMENTED IN PART',
        text:
          'S3.1. CPJ’s 2025 prison census, in a report dated in January 2026, counted 330 journalists imprisoned in connection with their work as of 12:01 a.m. on 1 December 2025. The same report says the number was down from a record 384 in 2024, and that the count had not been under 200 for more than a decade. It is a census of people detained on that date, not the number arrested during the year. CPJ is an advocacy organisation and the publisher of the dataset.',
        sourceIds: ['cpj-prison'],
      },
      {
        rung: 'DOCUMENTED IN PART',
        text:
          'S3.2. CPJ’s release of 25 February 2026 is titled as a record of 129 press members killed in 2025. The release says the database changes when later evidence requires a change, and it defines a killing as work-related when CPJ has reasonable grounds to believe the person was killed in relation to the work, including accidental death in a conflict zone and deliberate targeting. The headline attributes two-thirds of the deaths to Israel. That attribution is CPJ’s. This page does not re-investigate it. The figure 130 from the earlier desk report is not used.',
        sourceIds: ['cpj-129'],
      },
      {
        rung: 'ESTABLISHED',
        text:
          'S11.2, cited here because L3 relies on it. Citizen Lab wrote on 18 July 2021 that it validated Amnesty’s method as correctly identifying Pegasus infections in four iTunes backups, and that the method was sound. Four backups are not every number on a leaked list. The ordering client and the motive are a further question. No indicator or method is repeated on this page.',
        sourceIds: ['citizen-lab'],
      },
    ],
    caseFor:
      'A prison census and a device review are different kinds of evidence. Both concern interference with reporting. People who spoke to a journalist can be exposed as well.',
    caseAgainst:
      'A journalist can face a case that is not retaliation. A death in a conflict is not, by itself, an order to silence reporting. CPJ’s own census fell from the 2024 record it states. A high level is not an increase every year. The moderation findings in L1 do not, by themselves, prove a political purpose.',
    stillOpen: [
      'Unreported threats, work never published, and retaliation against researchers who are not in a journalist census.',
      'Who ordered a given intrusion.',
    ],
    nextSources: [
      'Charge sheets and judgments.',
      'The CPJ database on the day a number is quoted, because the publisher says it changes.',
    ],
    falsifier:
      'A case allegation weakens when the records show a basis other than retaliation, or when the attribution fails. A broader claim weakens if careful research finds no link between public-interest work and adverse treatment after the relevant controls.',
    confidence:
      'High for the two CPJ publications as descriptions of their own censuses, and for the four backups Citizen Lab checked. Moderate for a wider chilling effect. The unnamed client and any universal strategy remain open.',
    heldBack: [
      {
        deskClaim: '130 journalists and media workers were killed in 2025.',
        disposition: 'replaced',
        detail:
          'The 25 February 2026 CPJ release reports 129 at publication and warns that the database changes. 130 is not used.',
      },
    ],
    sourceIds: ['cpj-prison', 'cpj-129', 'citizen-lab'],
  }),
  page({
    id: 'L4',
    slug: 'l4-civic-space',
    title: 'L4. Silenced civic groups',
    headTitle: 'L4: Silenced Civic Groups | ARTIore',
    description:
      'The EU court held Hungary’s foreign-funding law in breach of EU law. A 2025 civic-space rating is an assessment, not a closure count.',
    crumbName: 'L4 Civic groups',
    kicker: 'L4',
    finding: 'One funding law was held unlawful. A global rating is not a count of organisations silenced.',
    findingRung: 'DOCUMENTED IN PART',
    lead:
      'States and intermediaries can narrow civic work through funding rules and paperwork without banning the cause. A rating and a judgment are not the same kind of proof.',
    record: [
      {
        rung: 'ESTABLISHED',
        text:
          'S4.1. The Court of Justice press release of 18 June 2020, in Commission v Hungary (C-78/18), says Hungary’s restrictions on financing of civil organisations from outside the member state do not comply with EU law. It says the restrictions run contrary to free movement of capital and to Charter rights on private and family life, protection of personal data, and freedom of association. That is one judgment.',
        sourceIds: ['cjeu'],
      },
      {
        rung: 'DOCUMENTED IN PART',
        text:
          'S4.2. The CIVICUS Monitor’s 2025 findings page says civil society is under severe attack in 122 of 198 countries and territories, with 15 downgrades and 3 upgrades. CIVICUS is an advocacy organisation. The figures are ratings from its method, not a judicial count of unlawful closures. The earlier “3.2 billion” figure is not on this page and is not used.',
        sourceIds: ['civicus'],
      },
    ],
    caseFor:
      'A court can hold a funding rule unlawful, and a monitor can show restrictions across many countries. Closure, lost staff, and lost donations still have to be shown organisation by organisation.',
    caseAgainst:
      'Transparency and anti-fraud rules can be legitimate. A grant ending is not automatically retaliation. An organisation can commit real misconduct. The three upgrades on the CIVICUS page matter. They are part of the same release as the downgrades.',
    stillOpen: [
      'How much contraction comes from retaliation, donor choice, compliance failure, or the economy.',
      'Whether banks refuse work beyond what the law requires.',
    ],
    nextSources: [
      'Registration decisions, grant clauses, bank notices, and appeals.',
      'A dated chain from a rule to a decision to an operational harm.',
    ],
    falsifier:
      'A claim of selective suppression weakens if the rules are proportionate, applied consistently, open to appeal, and unrelated to criticism of the authorities.',
    confidence:
      'High for the June 2020 judgment as the press release states it. Moderate for the breadth of the ratings. Motive in a particular banking or funding decision remains open.',
    heldBack: [],
    sourceIds: ['cjeu', 'civicus'],
  }),
  page({
    id: 'L5',
    slug: 'l5-ngo-conduct',
    title: 'L5. When organisations protect themselves',
    headTitle: 'L5: NGO Conduct and Agendas | ARTIore',
    description:
      'The Charity Commission found Oxfam GB safeguarding mismanagement in 2019. Oxfam accepted the findings. A sector-wide rate was not measured.',
    crumbName: 'L5 NGO conduct',
    kicker: 'L5',
    finding: 'A regulator’s inquiry established safeguarding mismanagement in one charity. It did not measure the sector.',
    findingRung: 'ESTABLISHED',
    lead:
      'Reputation, donors, or institutional survival can displace the people an aid organisation exists to serve. That is shown here for one inquiry, not as a hidden agenda for every organisation.',
    record: [
      {
        rung: 'ESTABLISHED',
        text:
          'S5.1. The Charity Commission’s statutory inquiry into Oxfam GB, published 11 June 2019, found safeguarding mismanagement, including in Haiti, and issued an official warning. The summary says the impact on victims was not taken seriously enough. It does not establish that every allegation about the organisation was proved. No staff member is named on this page.',
        sourceIds: ['oxfam'],
      },
      {
        rung: 'DOCUMENTED IN PART',
        text:
          'S5.2. Oxfam GB’s response says it accepted the Commission’s findings, apologised, and describes a larger safeguarding investment, including a tripling of that spending. That is the organisation’s account. It is evidence against a claim of total denial. It does not, by itself, show that people who use the programmes are now safe.',
        sourceIds: ['oxfam-response'],
      },
    ],
    caseFor:
      'A humanitarian mission did not guarantee safe governance in the case the regulator examined. People who depend on an organisation can find a complaint costly.',
    caseAgainst:
      'One scandal does not show that organisations generally pursue a hidden agenda. The UN is not an NGO. A cholera file, even if it had opened, would not raise the NGO count. A parliamentary sector inquiry cited in the revision did not open.',
    stillOpen: [
      'What beneficiaries experienced after the reforms.',
      'Whether complaint channels work, and how common comparable failures are.',
    ],
    nextSources: [
      'Independent follow-up, complaint-to-remedy times, and accounts people agree to share.',
      'The 2018 parliamentary report, if a later check can open it.',
    ],
    falsifier:
      'A claim that the governance failure continues would weaken if independent evidence showed safe reporting, prompt investigation, and remedies the people affected recognise. Later reform does not erase the 2019 findings.',
    confidence:
      'High for the Commission’s findings about Oxfam GB. Low for a sector-wide hidden agenda.',
    heldBack: [
      {
        deskClaim: 'The House of Commons International Development Committee’s 31 July 2018 report independently replicates the Oxfam findings across the aid sector.',
        disposition: 'could not access',
        detail:
          'The parliamentary URL returned 403. It is not used, and the revision itself says that report should not be counted as a second proof of the same case.',
      },
    ],
    sourceIds: ['oxfam', 'oxfam-response'],
  }),
  page({
    id: 'L6',
    slug: 'l6-household-costs',
    title: 'L6. Costs that land on households',
    headTitle: 'L6: Household Costs of Injustice | ARTIore',
    description:
      'A US debt survey, private forced-labour profits, and a learning-poverty estimate. They use different definitions and are not one victim total.',
    crumbName: 'L6 Household costs',
    kicker: 'L6',
    finding: 'Three different measures document large burdens. They cannot be added into one worldwide victim count.',
    findingRung: 'DOCUMENTED IN PART',
    lead:
      'Housing, work, health, and schooling can leave a household paying for risks it cannot absorb. The opened sources use different years, places, and definitions.',
    record: [
      {
        rung: 'DOCUMENTED IN PART',
        text:
          'S6.1. KFF’s June 2022 survey says 41 percent of US adults currently have some debt caused by medical or dental bills, under a broad definition that includes family borrowing and credit-card balances. It is not a worldwide rate and not a count limited to unpaid hospital invoices.',
        sourceIds: ['kff'],
      },
      {
        rung: 'DOCUMENTED IN PART',
        text:
          'S6.3. An ILO news release says forced labour in the private economy generates US$236 billion in illegal profits a year, and that those illegal profits rose 37 percent, by US$64 billion, since 2014. That is the ILO’s estimate for the private economy. It is not an audited cash total and not all wage theft.',
        sourceIds: ['ilo'],
      },
      {
        rung: 'DOCUMENTED IN PART',
        text:
          'S6.4. A World Bank press release of 23 June 2022 says an estimated 70 percent of 10-year-olds in low- and middle-income countries cannot understand a simple written text. The release presents a joint estimate with partner agencies. It does not say those children were refused a school place, and it does not describe the whole world in 2026.',
        sourceIds: ['learning'],
      },
    ],
    caseFor:
      'The burdens are concrete and come from different publishers. Lost wages, debt, and a learning gap can stack. That stacking is a hypothesis, not a sum of the three figures.',
    caseAgainst:
      'Adding the figures would count some people twice and mix a survey with models. A learning gap is not the same as a decision to deny schooling. A safety relocation can be justified and still be carried out badly. Wage-recovery tables and a Kenya eviction report in the revision did not open.',
    stillOpen: [
      'Household paths over time, informal evictions, and unreported unpaid wages.',
      'What the remedies changed.',
    ],
    nextSources: [
      'Panel surveys, payroll audits, and direct learning assessments.',
      'Comparisons before and after a named policy.',
    ],
    falsifier:
      'A claim that a named policy caused the harm weakens if a fair comparison shows it did not, or shows another cause. A remedy tests whether the harm continues. It does not erase the earlier measurement.',
    confidence:
      'High that the three opened measures say what this page says they say. Moderate for a link between them. Low for one worldwide victim total.',
    heldBack: [
      {
        deskClaim: 'US Labor Department tables show back wages recovered for minimum-wage and overtime violations, which is not the same as total wage theft.',
        disposition: 'could not access',
        detail: 'The department chart page returned 403. No recovery total is stated.',
      },
      {
        deskClaim: 'May 2024 reporting in Kenya describes flood-related evictions and a government safety rationale.',
        disposition: 'could not access',
        detail: 'The news article returned 403. It is not a finding.',
      },
    ],
    sourceIds: ['kff', 'ilo', 'learning'],
  }),
  page({
    id: 'L7',
    slug: 'l7-crime-trends',
    title: 'L7. Crime trends, not one rate',
    headTitle: 'L7: Crime Trends, Not One Rate | ARTIore',
    description:
      'Reported complaint losses rose in 2025. The global homicide rate fell from 2015 to 2024. Those are different measures, not one crime rate.',
    crumbName: 'L7 Crime trends',
    kicker: 'L7',
    finding: 'Reported losses rose in one complaint system. The global homicide rate fell over the years the UN states. A blanket rise is not established.',
    findingRung: 'CONTESTED',
    seesCorrections: true,
    lead:
      'Some crime can become more damaging where a violence measure improves. A claim needs a category, a place, a denominator, and a period. An increase in reported dollars is not an increase in worldwide incidents.',
    record: [
      {
        rung: 'DOCUMENTED IN PART',
        text:
          'S7.1. The UN’s 2026 Goal 16 report says the global intentional-homicide rate fell from 5.9 victims per 100,000 people in 2015 to 5.1 in 2024, a 14 percent decline, with sharp regional differences. It says the female rate declined at only half the pace of the male rate. A global decline is not a decline in every country.',
        sourceIds: ['sdg-16'],
      },
      {
        rung: 'DOCUMENTED IN PART',
        text:
          'S7.2. The FBI IC3 2025 report says losses reported to IC3 were $20.877 billion, from 1,008,597 complaints, a 26 percent increase in losses from 2024. A narrower cyber-enabled fraud subtotal on the same report is 452,868 complaints and $17.697 billion, which the report says is 45 percent of 2025 complaints and 85 percent of 2025 losses. These are complaints and reported losses to one centre, not a worldwide incidence rate. The copy cited by the revision on the FBI file site did not open. This sentence uses the IC3 annual-report PDF.',
        sourceIds: ['ic3'],
      },
      {
        rung: 'DOCUMENTED IN PART',
        text:
          'S7.3 and S7.4. An OHCHR South-East Asia page presents a 20 February 2026 report on trafficking into cyber-scam operations. INTERPOL, on 7 June 2023, warned that people are trafficked to work in online scam centres. Neither page supplies a complete global victim count.',
        sourceIds: ['ohchr', 'interpol'],
      },
    ],
    caseFor:
      'Reported financial harm rose in a major complaint system, and two institutions describe a link between organised fraud and coerced labour. A person can be forced to commit fraud and be harmed by trafficking.',
    caseAgainst:
      'Reporting, prices, definitions, and better detection can move the totals. Dollars, complaints, victimisation rates, and market estimates are different. The homicide decline is contrary evidence to a story that every major category is rising everywhere.',
    stillOpen: [
      'How much of the loss growth is more victims, and how much is larger losses per victim.',
      'Crime that is never reported, and what happens after a crackdown moves.',
    ],
    nextSources: [
      'Victim surveys that keep the same questions.',
      'Notes on how the complaint system changed.',
    ],
    falsifier:
      'A rising-incidence claim weakens if comparable surveys are flat or falling and the administrative rise is explained by reporting. It would strengthen if several stable series agreed.',
    confidence:
      'High for the UN rates and the IC3 totals as administrative figures. Moderate for growth in the scam operations those two institutions describe. A single worldwide rise in all crime is not established.',
    heldBack: [],
    sourceIds: ['sdg-16', 'ic3', 'ohchr', 'interpol', 'cafc'],
  }),
  page({
    id: 'L8',
    slug: 'l8-cyber-hygiene',
    title: 'L8. Cybersecurity hygiene',
    headTitle: 'L8: Cybersecurity Hygiene Gaps | ARTIore',
    description:
      'The UK audit said WannaCry’s NHS impact could have been prevented by basic practice. A global security score was not measured.',
    crumbName: 'L8 Cyber hygiene',
    kicker: 'L8',
    finding: 'One official audit found a preventable control failure. That sample is not every organisation’s security.',
    findingRung: 'ESTABLISHED',
    lead:
      'A preventable failure in an essential service can reach people far beyond the organisation that chose the control. Underfunding is one possible cause. It is not the only one.',
    record: [
      {
        rung: 'ESTABLISHED',
        text:
          'S8.1. The National Audit Office’s press release on WannaCry and the NHS says the attack was not especially sophisticated and could have been prevented if the NHS had followed basic IT security practice. It also says NHS Digital had warned organisations to patch, and that before 12 May 2017 the Department had no formal way to check whether they had complied.',
        sourceIds: ['nao-wanna'],
      },
      {
        rung: 'DOCUMENTED IN PART',
        text:
          'A Microsoft blog of 20 July 2024 estimates that a CrowdStrike update affected 8.5 million Windows devices. Microsoft describes an update failure, not an intrusion. Widespread disruption is not, by itself, a malicious cyberattack. The revised report’s Senate testimony about a health-care portal was not opened, so that entry route is not stated here.',
        sourceIds: ['microsoft'],
      },
    ],
    caseFor:
      'A failure at a shared service can magnify harm because dependent institutions cannot easily switch. Security is about continuity as well as secrecy.',
    caseAgainst:
      'Published incidents are the failures. They say little about attacks that were stopped. A large budget does not prove the control was switched on. A sophisticated intrusion is not always negligence. The testimony that would describe one company’s missing multifactor check did not open.',
    stillOpen: [
      'Unsupported systems, unclosed audit findings, and whether the budget matched the risk.',
      'Whether the stated cause was money, governance, or a control that existed only on paper.',
    ],
    nextSources: [
      'Audit exceptions and the controls actually deployed before an incident.',
      'The May 2024 Senate testimony, if a later check can open it.',
    ],
    falsifier:
      'A negligence explanation weakens if independent evidence shows the right controls were in place and the breach depended on a failure reasonable defences could not have stopped.',
    confidence:
      'High for the NAO finding on WannaCry. Moderate for the risk of shared services. A global security score and a universal budget explanation remain open.',
    heldBack: [
      {
        deskClaim: 'A May 2024 Senate testimony says attackers entered a Change Healthcare portal that lacked multifactor authentication, using compromised credentials.',
        disposition: 'could not access',
        detail: 'The testimony file returned 403. The entry route is not a finding.',
      },
    ],
    sourceIds: ['nao-wanna', 'microsoft'],
  }),
  page({
    id: 'L9',
    slug: 'l9-technology-gap',
    title: 'L9. Technology and the understanding gap',
    headTitle: 'L9: Technology and the Gap | ARTIore',
    description:
      'An adult-skills survey and a 2019 shopping-site study are documented. A plan to keep the public ignorant was not shown here.',
    crumbName: 'L9 Technology gap',
    kicker: 'L9',
    finding: 'Skills differ, and one study found manipulative shopping interfaces. Deliberate public ignorance was not shown.',
    findingRung: 'DOCUMENTED IN PART',
    lead:
      'Unequal skills and opaque design can leave a person unable to understand a decision or to choose. A commercial mechanism is not the same as a plan to keep everyone ignorant.',
    record: [
      {
        rung: 'DOCUMENTED IN PART',
        text:
          'S9.1. The OECD’s Survey of Adult Skills 2023, in a 2024 insights paper, says the survey assesses how well adults can read and understand text, work with numbers, and solve complex problems. Those are foundations. They are not a direct measure of worldwide understanding of artificial intelligence or encryption.',
        sourceIds: ['piaac'],
      },
      {
        rung: 'DOCUMENTED IN PART',
        text:
          'S9.3. The abstract of Mathur and colleagues’ 2019 paper says the authors studied shopping websites and found 1,818 dark-pattern instances, in 15 types, across about 11,000 shopping sites and about 53,000 product pages. The abstract limits the study to shopping sites. It is not all software. This page does not describe how to build those interfaces.',
        sourceIds: ['mathur'],
      },
      {
        rung: 'OPEN',
        text:
          'A claim that powerful actors intentionally keep the public technologically ignorant was not established by the pages opened here. A regulator’s 2022 dark-patterns report cited in the revision returned 404 and is not used.',
        sourceIds: [],
      },
    ],
    caseFor:
      'A skills gap and a manipulative interface can interact. The party that designs the screen can anticipate a mistake the user does not see. That is a testable commercial claim, not a claim that technology is merely complicated.',
    caseAgainst:
      'Not understanding a specialist system is not itself proof of deprivation or of a trick. Clear tools can reduce the expertise a person needs. Complexity can come from a real requirement. Firms can benefit from customers who understand the product.',
    stillOpen: [
      'How much harm comes from skills, language, disability, deceptive design, or a missing alternative.',
      'Whether a disclosure changes the decision or only the legal file.',
    ],
    nextSources: [
      'Comprehension experiments and cancellation rates.',
      'The regulator report, if a stable copy can be opened.',
    ],
    falsifier:
      'An exploitation claim weakens if a clear design produces the same choices and the records do not show an attempt to cause misunderstanding. A population claim needs a representative measurement of that skill.',
    confidence:
      'High for the skills the OECD paper says it measures, and for the shopping-site counts in the abstract. Low for a plan to keep everyone ignorant.',
    heldBack: [
      {
        deskClaim: 'A September 2022 regulator staff report describes interfaces that obstruct cancellation, hide terms, or disguise advertising.',
        disposition: 'could not access',
        detail: 'The report URL returned 404. It is not a finding, and it is not a fraud-reporting link.',
      },
    ],
    sourceIds: ['piaac', 'mathur'],
  }),
  page({
    id: 'L10',
    slug: 'l10-wealth-power',
    title: 'L10. Concentration of wealth',
    headTitle: 'L10: Wealth and Power | ARTIore',
    description:
      'One 2026 inequality report estimates the top tenth holds about three-quarters of global wealth. That is not a measure of political command.',
    crumbName: 'L10 Wealth',
    kicker: 'L10',
    finding: 'Wealth concentration is in one distributional estimate. Conversion into political command was not measured.',
    findingRung: 'DOCUMENTED IN PART',
    lead:
      'Unequal ownership can mean unequal capacity to fund a dispute, hire expertise, and endure. Ownership is not the same thing as command of public policy.',
    record: [
      {
        rung: 'DOCUMENTED IN PART',
        text:
          'S10.1. The World Inequality Report 2026 executive summary says the top 10 percent own three-quarters of global wealth, while the bottom half holds only 2 percent. Those are the report’s constructed estimates, not an inventory of every asset.',
        sourceIds: ['wir'],
      },
      {
        rung: 'OPEN',
        text:
          'A second wealth report cited for a different financial-asset share, and for a claim that global concentration is easing, did not open. The bribery files that would show particular channels from money to a decision also did not open. This edition does not state a share of public policy controlled by wealthy actors.',
        sourceIds: [],
      },
    ],
    caseFor:
      'A large gap in ownership, if the estimate holds, is enough to matter to who can fund a long dispute. The causal step to a named policy still has to be traced.',
    caseAgainst:
      'Wealth is not cash, income, or a single political bloc. Wealthy actors can want opposite things. Concentration can sit beside rising living standards. The contrary figures in the revision’s second report were not retrieved, so they are not used either.',
    stillOpen: [
      'Undisclosed and offshore ownership.',
      'Whether spending changes a vote after preferences and the industry’s condition are accounted for.',
    ],
    nextSources: [
      'The second 2026 wealth report, once it opens.',
      'A pre-specified outcome and a comparison group. A donation is not a purchased vote.',
    ],
    falsifier:
      'A capture claim weakens if the same decision would have happened without the alleged influence, or if the records show the better-funded side did not get what it wanted.',
    confidence:
      'High for the World Inequality Report sentence that was opened. Low for a single global measure of political control.',
    heldBack: [
      {
        deskClaim: 'A 2026 financial-wealth report estimates the richest tenth holds 85.4 percent of net financial wealth, and says global concentration is easing.',
        disposition: 'could not access',
        detail: 'Both publisher pages returned 403. Neither figure is used.',
      },
    ],
    sourceIds: ['wir'],
  }),
  page({
    id: 'L11',
    slug: 'l11-commercial-spyware',
    title: 'L11. Commercial spyware on the public record',
    headTitle: 'L11: Commercial Spyware Record | ARTIore',
    description:
      'Four checked device backups, a 2021 export listing, a 2024 designation, and a 12 November 2025 judgment. The appeal was not opened.',
    crumbName: 'L11 Spyware',
    kicker: 'L11',
    finding: 'Examined infections and dated legal actions are on the record. Customer lists, licensing, and the appeal are not.',
    findingRung: 'DOCUMENTED IN PART',
    seesCorrections: true,
    lead:
      'Commercial vendors have sold intrusive monitoring that governments have used against journalists and civic actors. A licence file and a diplomatic bargain are separate claims. This page does not explain how the tools work.',
    record: [
      {
        rung: 'ESTABLISHED',
        text:
          'S11.2. Citizen Lab’s 18 July 2021 review says it validated that Amnesty’s forensic method correctly identified Pegasus infections in four iTunes backups. The review does not validate every person on a leaked list. S11.1, Amnesty’s 19 July 2021 release, described 50,000 phone numbers as potential surveillance targets, including, in Amnesty’s words, Jamal Khashoggi’s family. That list is not a count of confirmed infections.',
        sourceIds: ['citizen-lab', 'amnesty'],
      },
      {
        rung: 'DOCUMENTED IN PART',
        text:
          'S11.3. Citizen Lab’s 12 June 2025 report is presented by its publisher as a forensic confirmation involving Paragon’s iOS spyware and journalists’ devices. It is a separate vendor from the four-backup review. No person is named here, and no indicator is repeated.',
        sourceIds: ['paragon'],
      },
      {
        rung: 'ESTABLISHED',
        text:
          'S11.4. The court’s final judgment, document 810, filed 12 November 2025, in WhatsApp LLC and Meta Platforms, Inc. v. NSO Group Technologies Limited and Q Cyber Technologies Limited, enters judgment for the plaintiffs of $4,447,190. That sum is $444,719 in compensatory damages and $4,002,471 in punitive damages. The judgment says a jury on 6 May 2025 awarded $167,698,719, including $167,254,000 in punitive damages, and that on 17 October 2025 the court granted a permanent injunction and remitted the punitive award. Plaintiffs accepted the remittitur on 31 October 2025. The permanent injunction was entered on 12 November 2025. This is the judgment PDF. It is not a description of the exploit.',
        sourceIds: ['judgment'],
      },
      {
        rung: 'ESTABLISHED',
        text:
          'S11.6. A Commerce Department release of 4 November 2021 says NSO Group and Candiru were added to the Entity List because they developed and supplied spyware to foreign governments that used the tools to maliciously target people. S11.7. A Treasury release of 5 March 2024 says OFAC designated two individuals and five entities associated with the Intellexa Consortium. That is a later designation of a different set of names. It is not the November 2021 Entity List action, and it is not a conviction of every customer.',
        sourceIds: ['entity-list', 'treasury'],
      },
      {
        rung: 'OPEN',
        text:
          'The public appellate docket cited for 2026 briefing did not open, so this edition does not describe the appeal’s status or call the 12 November 2025 judgment a final appellate result. A Federal Register file cited for three removals on 30 December 2025 did not contain those names in the copy retrieved. The removals are not stated as a finding.',
        sourceIds: [],
      },
    ],
    caseFor:
      'A peer review of device infections, a later forensic report about another vendor, a judgment with a stated dollar amount, and two different government actions are on the record. They are not one state operation.',
    caseAgainst:
      'A security use and an abusive use have to be told apart. A tool can be identified more confidently than the client who ordered it. Authorities’ statements about one Paragon controversy were in a news article that did not open, so they are not summarised here. Different vendors and products are not one programme.',
    stillOpen: [
      'Full customer attribution, export licences, post-sale audits, and the appeal.',
      'Why any designation changed, and any document that would link a licence to a diplomatic concession.',
    ],
    nextSources: [
      'The appellate docket, once it opens.',
      'The removal notice, checked for the names and the date.',
      'Export records where they are public.',
    ],
    falsifier:
      'A device claim weakens if a reanalysis invalidates the indicators. A named-client claim weakens if the operational records exclude that client. A diplomatic bargain needs a document that links the sale to the concession. One clean audit does not erase a different client’s abuse.',
    confidence:
      'High for the four backups, the judgment’s figures, the Entity List release, and the March 2024 designation as those pages state them. Moderate for a wider market. Low for total scale, undisclosed customers, and an unproven diplomatic bargain.',
    heldBack: [
      {
        deskClaim: 'A public Ninth Circuit docket, case 26-874, records appellate briefing in 2026.',
        disposition: 'could not access',
        detail: 'The docket page returned 403. The appeal’s status is not stated.',
      },
      {
        deskClaim: 'On 30 December 2025, three named individuals were removed from the sanctions list. That did not remove every related restriction.',
        disposition: 'could not access',
        detail:
          'The daily Federal Register file that was retrieved did not contain the names or the cited page. The removal is not a finding. The names are not repeated.',
      },
      {
        deskClaim: 'Italian authorities described some surveillance as authorised and denied targeting a particular journalist.',
        disposition: 'could not access',
        detail: 'The news article returned 403. The official position is not summarised.',
      },
    ],
    sourceIds: ['citizen-lab', 'amnesty', 'paragon', 'judgment', 'entity-list', 'treasury'],
  }),
  page({
    id: 'synthesis',
    slug: 'synthesis',
    title: 'Synthesis and limits',
    headTitle: 'Injustice Synthesis and Limits | ARTIore',
    description:
      'The opened records support unequal protection and concentrated resources in specific settings. They do not establish one global cause.',
    crumbName: 'Synthesis',
    kicker: 'Synthesis',
    finding: 'Serious abuses are established in named settings. A universal failure, a uniform crime rise, and one coordinated cause are not.',
    findingRung: 'DOCUMENTED IN PART',
    seesCorrections: true,
    lead:
      'Public records establish serious institutional abuse, corruption, suppression, exploitation, and spyware misuse in specific settings. They also support unequal protection and concentrated resources where the sources opened. They do not establish universal institutional failure, a rise in every crime category, or a single coordinated cause.',
    record: [
      {
        rung: 'DOCUMENTED IN PART',
        text:
          'Three mechanisms recur as inferences, not as a measured worldwide share: harmful incentives, unequal access to a challenge, and weak implementation of safeguards. Courts, audits, technical reviews, and regulators also appear in the same record. Announcing a remedy is not the same as showing that the person received it.',
        sourceIds: ['ferguson', 'po-index', 'cjeu', 'nao-wanna', 'citizen-lab'],
      },
      {
        rung: 'OPEN',
        text:
          'Two earlier cross-dossier sentences are withdrawn. This review does not establish that missing records are usually held by powerful actors, or that hidden harm at the top exceeds hidden harm in households. Nonpublication, failure to collect, destruction, legal protection, an inaccessible archive, and a search that failed are different. Custody has to be shown case by case. Absence can be a reason to look further. It is not the answer.',
        sourceIds: [],
      },
    ],
    caseFor:
      'The same kinds of mechanism appear in records that were built separately: a revenue-driven court, a funding law held unlawful, a preventable outage, and checked device infections.',
    caseAgainst:
      'The sample is the cases that produce a public document. Accountability that works is also in the file. A thin search can be a fact about this desk, not only about the institution.',
    stillOpen: [
      'Whether remedies paid the people affected.',
      'Who ordered a given intrusion, and whether access became a preferential decision.',
      'Whether a rise in reported losses is more victims or larger losses.',
    ],
    nextSources: [
      'The priority list on the hub: compensation records, attribution files, ownership and tenders, comparable victim surveys, and comprehension tests.',
    ],
    falsifier:
      'The cross-cutting inference would weaken if the missing documents were missing at random, or were missing because the events did not occur. It is not saved by treating every gap as concealment.',
    confidence:
      'Moderate for the three mechanisms as a way to read the opened cases. Low for any ranking of which injustice is largest.',
    heldBack: [],
    sourceIds: ['ferguson', 'po-index', 'cjeu', 'nao-wanna', 'citizen-lab'],
  }),
]

export function injusticePage(id: string) {
  return injusticePages.find((entry) => entry.id === id)
}

export function injusticePageBySlug(slug: string) {
  return injusticePages.find((entry) => entry.slug === slug)
}
