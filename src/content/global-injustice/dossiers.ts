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
      'Courts, policing, borders and a quashing statute: what the opened records show, and which global error-rate claims stay unverified.',
    crumbName: 'L1 Systems',
    kicker: 'L1',
    finding: 'Patterned failure is in specific public records. A worldwide rate is not.',
    findingRung: 'DOCUMENTED IN PART',
    lead:
      'The desk report’s lead is that an ordinary person meets institutions at weak moments, and that those institutions are built to protect themselves from error and cost. This edition publishes only the encounters whose records were opened. It does not turn those cases into a worldwide percentage.',
    record: [
      {
        rung: 'ESTABLISHED',
        text:
          'The Post Office (Horizon System) Offences Act 2024, section 1, is titled “Quashing of convictions for relevant offences.” The Post Office Horizon IT Inquiry, a statutory inquiry, has published Volume 1 of its final report on the human impact of the Horizon scandal and on redress. On 9 January 2024, before that Act, BBC News reported that more than 700 sub-postmasters were prosecuted on information from the Horizon system, and that the justice secretary said legislation to quash convictions was under active consideration. This edition does not use a “more than 900 convictions” figure. The page cited for that count could not be opened, and the BBC page that was opened says more than 700 prosecutions, not 900 convictions.',
        sourceIds: ['po-act', 'po-inquiry', 'po-bbc'],
      },
      {
        rung: 'ESTABLISHED',
        text:
          'The U.S. Department of Justice Civil Rights Division’s Investigation of the Ferguson Police Department, dated 4 March 2015, found that Ferguson’s law enforcement practices were shaped by a focus on revenue rather than public safety, and that this focus had compromised the municipal court. The report says the court issued municipal arrest warrants as a routine response to missed court appearances and required fine payments.',
        sourceIds: ['ferguson'],
      },
      {
        rung: 'ESTABLISHED',
        text:
          'The Justice Department’s Office of the Inspector General reviewed the Department’s planning and implementation of its Zero Tolerance policy (report 21-028, January 2021, revised). The review found that the Attorney General’s expectations for how family separation would work underestimated its complexities. The policy concerned prosecution of illegal entry and the separation of children from adults apprehended at the border.',
        sourceIds: ['oig'],
      },
      {
        rung: 'ESTABLISHED',
        text:
          'In R (AAA) v Secretary of State for the Home Department, judgment dated 15 November 2023, neutral citation [2023] UKSC 42, the UK Supreme Court’s case page states that the Court, by a majority, allowed the claimants’ appeal. The stated ground was that deficiencies in Rwanda’s asylum system gave substantial reasons to believe there was a real risk of refoulement. The page says that, unless and until those deficiencies were corrected, removal of asylum seekers to Rwanda would be unlawful under section 6 of the Human Rights Act 1998 because it would breach article 3 of the European Convention on Human Rights. The later statute and the 2025 discontinuation described in the desk report were not opened here and are not findings.',
        sourceIds: ['uksc'],
      },
      {
        rung: 'ESTABLISHED',
        text:
          'TRAC’s Immigration Court Quick Facts page, opened on 3 November 2026, stated that at the end of September 2026 there were 3,037,800 active cases pending before the U.S. Immigration Court. That is a U.S. backlog figure from TRAC, not a global border census.',
        sourceIds: ['trac'],
      },
      {
        rung: 'DOCUMENTED IN PART',
        text:
          'The National Registry of Exonerations homepage, opened the same day, displayed 3,870 exonerations and more than 36,226 years lost since 1989. The count is the dashboard’s count on that day. The homepage did not state a share attributed to official misconduct, so that part of the desk report is not used.',
        sourceIds: ['nre'],
      },
    ],
    caseFor:
      'The opened cases share a structure the desk report names: the institution holds the record the person must use to challenge it, the error lands on the person, and the remedy comes late. The Horizon Act exists because ordinary appeals had not cleared the convictions. Ferguson’s court, on the Justice Department’s account, used warrants to collect fines. The Rwanda judgment and the Zero Tolerance review are public records of state action, not metaphors.',
    caseAgainst:
      '“Systemic” can mean a design flaw in a named system, which these records show, or a universal rate, which they do not. The same states also run appeal courts, an inspector general, a statutory inquiry, and a quashing statute. The worst cases are the ones that produce a public report. Without a denominator for institutional error, a sentence that “systems fail ordinary people worldwide” cannot be tested. This edition does not supply that sentence as a finding.',
    stillOpen: [
      'No cross-national dataset of wrongful-conviction or benefit-denial reversal rates was opened.',
      'Settlement terms that would show how often finance and employment cases repeat were not opened.',
      'The Registry’s misconduct breakdown was not on the homepage that was opened.',
    ],
    nextSources: [
      'The rest of the Horizon inquiry’s final report, when the inquiry publishes it.',
      'The Registry’s current misconduct tables, read on the day they are quoted.',
      'TRAC’s backlog table again, because the September 2026 figure will move.',
    ],
    falsifier:
      'The patterned-failure reading would weaken if a comparable cross-national set of reversal rates were low, stable, and unrelated to the person’s income. It would strengthen if those rates rose with poverty and were shown to be suppressed by the cost of bringing a case.',
    confidence:
      'HIGH that the named systems failed in the ways the opened documents describe. LOW that any single global prevalence figure can be stated from this record.',
    heldBack: [
      {
        deskClaim: 'More than 900 Horizon convictions are treated as unsafe.',
        disposition: 'could not access',
        detail:
          'The Computer Weekly URL in the desk register returned 403. The BBC article that did open says more than 700 prosecutions, and it predates the Act. The 900 figure is not a finding.',
      },
      {
        deskClaim: 'HSBC’s 2012 deferred prosecution agreement was $1.9 billion, and Wells Fargo’s 2020 settlement was $3 billion.',
        disposition: 'could not access',
        detail:
          'The Justice Department press pages returned empty responses. The figures are not published.',
      },
      {
        deskClaim: 'The UN’s introduction of cholera to Haiti, a death toll near 10,000, and a 2016 apology that accepted moral rather than legal responsibility.',
        disposition: 'could not access',
        detail:
          'The NPR page timed out and a UN press URL returned 406. A Voice of America page about unspent funds did not state the apology or the toll. The claim is not a finding.',
      },
      {
        deskClaim: 'Qatar’s World Cup labour regime and the 2021 Facebook Files, including a 2018 Meta human-rights assessment on Myanmar.',
        disposition: 'removed',
        detail: 'No source for these points was opened. They are not findings.',
      },
    ],
    sourceIds: ['po-act', 'po-inquiry', 'po-bbc', 'nre', 'ferguson', 'trac', 'oig', 'uksc'],
  }),
  page({
    id: 'L2',
    slug: 'l2-corruption',
    title: 'L2. Corruption, gatekeepers and capture',
    headTitle: 'L2: Corruption and Capture | ARTIore',
    description:
      'Wirecard, Danske Bank and the 2025 perceptions index: what those records show, and why proximity is not proof of capture.',
    crumbName: 'L2 Corruption',
    kicker: 'L2',
    finding: 'Named grand-corruption records are real. Capture as a general cause is not measured here.',
    findingRung: 'DOCUMENTED IN PART',
    lead:
      'The desk report’s lead is that corruption persists because the people paid to notice it depend on the people being noticed. The opened record supports specific failures of gatekeepers. It does not show that a given appointment bought a given decision.',
    record: [
      {
        rung: 'ESTABLISHED',
        text:
          'BBC News reported on 23 June 2020 that Wirecard’s former chief executive had been arrested after auditor EY refused to sign off the 2019 accounts over a missing €1.9 billion. The article says that sum was about a quarter of the balance sheet. This edition does not add a trial outcome or a claim that the cash “probably never existed.” Those sentences were not in the article that was opened.',
        sourceIds: ['wirecard'],
      },
      {
        rung: 'ESTABLISHED',
        text:
          'Danske Bank’s commissioned report on the non-resident portfolio at its Estonian branch, by Bruun & Hjejle and dated 19 September 2018, estimated the flow through that portfolio at approximately EUR 200 billion. The report says most of the customers examined were deemed suspicious and that anti-money-laundering procedures at the branch had been manifestly insufficient. The figure is the bank’s own investigation, stated as an approximation.',
        sourceIds: ['danske'],
      },
      {
        rung: 'DOCUMENTED IN PART',
        text:
          'The ICIJ FinCEN Files page describes an investigation into the role of global banks in industrial-scale money laundering. The page that was opened does not, by itself, show that banks filed suspicious-activity reports and then did little. That sharper sentence from the desk report is not used.',
        sourceIds: ['fincen'],
      },
      {
        rung: 'DOCUMENTED IN PART',
        text:
          'Transparency International’s Corruption Perceptions Index 2025 ranks 182 countries and territories. Its 10 February 2026 findings note says the global average dropped to 42, that 122 countries score below 50, and that the authors read the direction as worsening, tied to a decline in accountable leadership. The index aggregates perceptions. It is not a count of corrupt acts. Transparency International is an advocacy organisation as well as the publisher of the index. The rank is a signal, not a census.',
        sourceIds: ['cpi', 'cpi-news'],
      },
    ],
    caseFor:
      'Wirecard was large enough that a missing €1.9 billion was a quarter of the balance sheet, and the auditor’s refusal is what made the hole public. Danske’s own report describes a huge non-resident flow and failed controls inside the bank. Those are gatekeeper failures in the documents, not rumours.',
    caseAgainst:
      'The opened cases are failures that became public. They are not a prevalence rate. A perceptions index moves with reputation, press freedom and income, which its own authors’ method invites the reader to remember. People moving between a regulator and a firm is proximity. Proximity is not proof that a decision was bought. The Odebrecht and 1MDB court records the desk report relies on were not opened, so they are not part of this case.',
    stillOpen: [
      'Beneficial-ownership registers and their verification rates were not opened.',
      'Meeting-level revolving-door records were not opened.',
      'The Justice Department statements of facts for Odebrecht and 1MDB were not retrieved.',
    ],
    nextSources: [
      'Those Justice Department agreements, if a later edition can open them.',
      'OECD anti-bribery peer reviews.',
      'National audit reports on emergency procurement, read against the audits rather than against headlines.',
    ],
    falsifier:
      'The capture reading would weaken if, after accounting for market size and the ability to prosecute, places with strict revolving-door rules showed no difference in procurement results or in cases against senior figures.',
    confidence:
      'HIGH on the Wirecard and Danske documents that were opened. MEDIUM on capture as a general cause, because the documents that would show a bought decision were not opened. The perceptions index is a separate, labelled signal.',
    heldBack: [
      {
        deskClaim: 'Odebrecht’s 2016 resolution involved a bribery department and about $3.5 billion in penalties. A Goldman Sachs subsidiary pleaded guilty in the 1MDB case, with a settlement above $2.9 billion.',
        disposition: 'could not access',
        detail: 'The Justice Department pages returned empty responses. Neither figure is a finding.',
      },
      {
        deskClaim: 'Cum-Ex dividend stripping caused fiscal losses in the tens of billions of euros.',
        disposition: 'removed',
        detail: 'No source was opened. The estimate is not a finding.',
      },
    ],
    sourceIds: ['wirecard', 'danske', 'fincen', 'cpi', 'cpi-news'],
  }),
  page({
    id: 'L3',
    slug: 'l3-voices',
    title: 'L3. Suppression of voices',
    headTitle: 'L3: Suppression of Voices | ARTIore',
    description:
      'Russia’s 2026 press-freedom rank and the limits of a killings database. Death and prison totals in the desk report were not confirmed.',
    crumbName: 'L3 Voices',
    kicker: 'L3',
    finding: 'One country’s legal closure of the press is documented. A global toll is not.',
    findingRung: 'DOCUMENTED IN PART',
    lead:
      'The desk report describes a portfolio of ways to silence reporting: killing, jailing, lawsuits, raids, funding labels, and platform removal. This edition can support the legal-closure part for Russia from a source that was opened. It cannot support a 2025 death toll or a prison census from the pages that were opened.',
    record: [
      {
        rung: 'ESTABLISHED',
        text:
          'Reporters Without Borders’ Russia page for the 2026 World Press Freedom Index ranks Russia 172nd of 180, with a score of 23.15. The page says that since February 2022 almost all independent media have been banned, blocked, or declared “foreign agents” or “undesirable organisations,” and that the rest are subject to military censorship. RSF’s index is a composite of indicators, not a count of silenced people. RSF is an advocacy organisation as well as the publisher of the index.',
        sourceIds: ['rsf-russia', 'rsf-index'],
      },
      {
        rung: 'OPEN',
        text:
          'The Committee to Protect Journalists’ 2025 killed database, opened on 3 November 2026, explains that a case is “confirmed” as work-related only when CPJ is reasonably certain that a journalist was murdered in reprisal for the work, killed in crossfire, or killed in another defined circumstance. That view did not display a total of 130. A guessed prison-census URL returned 404. The desk report’s figures — 130 journalists and media workers killed in 2025, and more than 300 imprisoned for a fifth year — are not findings. CPJ’s word “confirmed” is its own coding label. It is not the record status Verified, and it is not the Digital Exposure grade Confirmed.',
        sourceIds: ['cpj-killed'],
      },
    ],
    caseFor:
      'The Russia record is not an anecdote about one newsroom. RSF describes a legal design — foreign-agent and undesirable-organisation labels — applied across independent media. That matches the desk report’s point that a lawful-looking instrument can close reporting. It is one country, documented by one publisher’s index page.',
    caseAgainst:
      'A composite rank is not a body count. CPJ’s own method, visible on the database page, separates work-related killings from other deaths, and it includes people killed in combat as well as people murdered for their work. Those are different causal chains. Country cases in the desk report — India, the Philippines, Mexico, China, and Gaza — were not opened, so they are not used to argue intent. “Good voices” is not a class this edition can define.',
    stillOpen: [
      'A CPJ page that actually states the 2025 killed total and the prison census.',
      'An impunity rate that can be compared across countries.',
      'Case-level records of platform suspensions of news accounts.',
    ],
    nextSources: [
      'CPJ’s annual killed and imprisoned tables, quoted only from a page that shows the number.',
      'RSF’s indicator-level data for 2026, if a later edition can open the “historic low” claim the index homepage did not state.',
      'UNESCO’s condemnation records.',
    ],
    falsifier:
      'The suppression reading would weaken if, after accounting for conflict and ordinary violent crime, killings and imprisonments of journalists were unrelated to critical coverage of the government in power.',
    confidence:
      'HIGH on the Russia index page that was opened. LOW on any global total of voices silenced. MEDIUM on intent in countries whose cases were not opened, which is another way of saying those cases are not in this edition.',
    heldBack: [
      {
        deskClaim: 'CPJ recorded 130 journalists and media workers killed in 2025, the worst year in a dataset back to 1992, and more than 300 imprisoned for a fifth consecutive year.',
        disposition: 'removed',
        detail:
          'The killed database page opened and did not show 130. A prison-census URL returned 404. Neither number is a finding.',
      },
      {
        deskClaim: 'The 2026 World Press Freedom Index is at its lowest level in 25 years.',
        disposition: 'removed',
        detail: 'The index pages that opened did not contain that sentence. It is not a finding.',
      },
      {
        deskClaim: 'Named cases involving Indian outlets, Rappler, Mexico, China, Gaza, and a 2024 U.S. plea agreement.',
        disposition: 'removed',
        detail: 'Those sources were not opened. People are not named from them.',
      },
    ],
    sourceIds: ['rsf-russia', 'rsf-index', 'cpj-killed'],
  }),
  page({
    id: 'L4',
    slug: 'l4-civic-space',
    title: 'L4. Silenced civic groups',
    headTitle: 'L4: Silenced Civic Groups | ARTIore',
    description:
      'Memorial’s liquidation, Russia’s foreign-agent rules, and a civic-space rating. The desk report’s larger crackdown list was not confirmed.',
    crumbName: 'L4 Civic groups',
    kicker: 'L4',
    finding: 'A replicated legal toolkit is documented in Russia. A global closure count is not.',
    findingRung: 'DOCUMENTED IN PART',
    lead:
      'The desk report’s lead is that civic space is closed less often by a ban than by conditions no independent group can meet: foreign-agent status, funding clearance, an “undesirable” list, and a bank account. Russia is the case this edition can document. A global mortality figure for NGOs is not.',
    record: [
      {
        rung: 'ESTABLISHED',
        text:
          'The Nobel Prize facts page for Memorial, a 2022 peace laureate, says the Russian authorities declared Memorial a foreign agent in 2016 and that in 2021 the Russian Supreme Court ruled that Memorial was to be liquidated. RSF’s 2026 Russia page, cited in L3, describes the same foreign-agent and undesirable-organisation instruments used against media.',
        sourceIds: ['memorial', 'rsf-russia'],
      },
      {
        rung: 'DOCUMENTED IN PART',
        text:
          'The CIVICUS Monitor global-findings page opened on 3 November 2026 said that more than two billion people, or 28 percent of the world’s population, live in countries the Monitor rates as closed. CIVICUS is an advocacy organisation, and the figure is a population living under an expert rating, not a count of organisations shut. The desk report’s figure of 3.2 billion people in countries rated closed or repressed was not on that page and is not used.',
        sourceIds: ['civicus'],
      },
    ],
    caseFor:
      'Memorial is a named organisation, liquidated by a named court, after a foreign-agent designation, and then recognised by the Nobel Peace Prize. That is the administrative path the desk report describes, in one state, on a primary biographical page and on RSF’s country page.',
    caseAgainst:
      'A rating called “closed” is a judgment, not an observation of each group. Some organisations close because of fraud, exhaustion, or the loss of a donor, and a state may be credited with a closure it did not cause. Foreign funding of political work is a real regulatory subject in democracies as well. The India, Nicaragua, Hungary, and banking-exclusion cases in the desk report were not opened. A 2025 funding shock attributed to the dismantling of a donor agency was not opened either, and it is not a finding.',
    stillOpen: [
      'No global register of NGO closures by cause was opened.',
      'Bank exit decisions are not public in the sources opened here.',
      'The Court of Justice judgment on Hungary’s 2017 transparency law was not retrieved.',
    ],
    nextSources: [
      'The CIVICUS country pages, read as ratings.',
      'The text of the foreign-agent statutes, not only the Nobel summary.',
      'Court judgments on those statutes, once a later edition can open them.',
    ],
    falsifier:
      'The suppression reading would weaken if groups closed under these laws were shown to be directed by foreign political actors, and if closures stopped once funding transparency was met.',
    confidence:
      'HIGH on the Memorial liquidation and the foreign-agent designation as the Nobel page states them. MEDIUM on any global population living under a civic-space rating. LOW on a 2025–26 death rate for organisations, which was not measured here.',
    heldBack: [
      {
        deskClaim: 'India’s foreign-contribution law was used to cancel thousands of NGOs, and Amnesty International India closed in 2020 after its accounts were frozen.',
        disposition: 'removed',
        detail: 'No source was opened. The claim is not a finding.',
      },
      {
        deskClaim: 'Nicaragua closed thousands of NGOs after a 2018 foreign-agents law. Hungary’s 2017 law was annulled by the Court of Justice in 2020.',
        disposition: 'could not access',
        detail: 'The Court of Justice document page that was tried did not return the judgment text. Neither claim is a finding.',
      },
      {
        deskClaim: 'CIVICUS rates civic space closed or repressed for 3.2 billion people.',
        disposition: 'replaced',
        detail:
          'The live global-findings page stated a different figure: more than two billion people, 28 percent, in countries rated closed. The 3.2 billion figure is not used.',
      },
      {
        deskClaim: 'The dismantling of a major donor agency in 2025 froze civil-society funding at the scale of a legal crackdown.',
        disposition: 'removed',
        detail: 'No source was opened. It is not a finding.',
      },
    ],
    sourceIds: ['memorial', 'rsf-russia', 'civicus'],
  }),
  page({
    id: 'L5',
    slug: 'l5-ngo-conduct',
    title: 'L5. When organisations protect themselves',
    headTitle: 'L5: NGO Conduct and Agendas | ARTIore',
    description:
      'The Charity Commission’s 2019 Oxfam GB inquiry, the case against treating one scandal as the sector, and the claims held back.',
    crumbName: 'L5 NGO conduct',
    kicker: 'L5',
    finding: 'One statutory inquiry documents institutional self-protection. A sector-wide rate does not.',
    findingRung: 'DOCUMENTED IN PART',
    lead:
      'The desk report’s lead is that when the people an organisation serves conflict with the organisation’s survival, survival wins. The opened record is one regulator’s inquiry into one charity. It is not a rate for the aid sector.',
    record: [
      {
        rung: 'ESTABLISHED',
        text:
          'The Charity Commission for England and Wales published its statutory inquiry into Oxfam GB on 11 June 2019. The summary findings say the inquiry examined allegations, made public in February 2018, about Oxfam staff in Haiti in 2010, including sexual misconduct. The report says there were warning signs from 2010, that the 2011 investigation’s concern was to remove people from Haiti, and that the risk to and impact on victims “appeared to take second place and was not taken seriously enough.” It says an allegation received in July 2011, that minors were being sexually abused by staff, was not reported to the Commission or to law enforcement at the time. It says the charity’s safeguarding governance repeatedly fell below the standard expected. The Commission issued an official warning under section 75A of the Charities Act 2011 for mismanagement in relation to Haiti and safeguarding governance before 2018. The chair’s foreword says no charity’s mission is so important that it can put its own reputation ahead of the dignity of the people it exists to protect. This is the regulator’s account. It is not a new allegation.',
        sourceIds: ['oxfam', 'oxfam-page'],
      },
    ],
    caseFor:
      'The inquiry describes an internal investigation that existed before the public story, a concern for reputation and for keeping programmes running, and a delayed report to the regulator. That is the mechanism the desk report names: the institution controlled the inquiry and the narrative. The Commission also says the lesson is not confined to one large charity.',
    caseAgainst:
      'One inquiry, however serious, is not a base rate. The aid sector also delivers vaccination, food and shelter, and this edition did not open a comparison with states or firms. Scandal cases are the ones that reach a public report. A criticism of charities is also used by governments to justify the closures described in L4. That use does not erase the Oxfam findings. It does mean a generalisation should stay narrower than the slogan. Localisation percentages, peacekeeping abuse totals, and a contested 2024 allegation against a UN agency were not opened and are not findings.',
    stillOpen: [
      'Beneficiary-feedback files and board minutes were not opened.',
      'Annual UN statistics on sexual exploitation and abuse allegations were not opened.',
      'A defensible single number for direct funding to local organisations was not opened. The desk report itself says definitions differ.',
    ],
    nextSources: [
      'The Commission’s full inquiry PDF, which this edition did open, read beside later Commission updates.',
      'The UN’s annual exploitation-and-abuse tables, once opened.',
      'Grand Bargain reviews, once a later edition can quote a range rather than a point.',
    ],
    falsifier:
      'The “own agenda” reading would weaken if, where the people served and the organisation’s interest diverged, the documented decision favoured the people served, and if direct local funding had moved toward the targets donors set.',
    confidence:
      'HIGH on the Commission’s findings about Oxfam GB. MEDIUM on any generalisation about incentives. LOW on a single localisation number, because none was opened.',
    heldBack: [
      {
        deskClaim: 'Aid workers paid earthquake survivors for sex, and the conduct was known internally before The Times reported it in 2018.',
        disposition: 'replaced',
        detail:
          'The Commission’s report describes allegations of sexual misconduct by staff in Haiti, including an unreported allegation involving minors, and a response that did not take victims seriously enough. This edition uses the Commission’s words, not a sharper paraphrase.',
      },
      {
        deskClaim: 'UN peacekeeping sexual exploitation has never fallen to zero, and the Haiti cholera death toll was about 10,000.',
        disposition: 'could not access',
        detail: 'The annual UN report and the cholera sources were not opened. Neither claim is a finding.',
      },
      {
        deskClaim: 'Direct funding to local responders remains in the low single digits against a 25 percent target. A 2024 allegation against a UN agency remains contested.',
        disposition: 'removed',
        detail:
          'No tracker or investigation summary was opened. The contested allegation is omitted rather than repeated without both records.',
      },
    ],
    sourceIds: ['oxfam', 'oxfam-page'],
  }),
  page({
    id: 'L6',
    slug: 'l6-household-costs',
    title: 'L6. Costs that land on households',
    headTitle: 'L6: Household Costs of Injustice | ARTIore',
    description:
      'A 2022 U.S. health-debt survey and a 2024 World Bank poverty release. Global eviction, hunger and forced-labour totals were not confirmed.',
    crumbName: 'L6 Household costs',
    kicker: 'L6',
    finding: 'Two rich-data sources show large household burdens. A uniform worldwide worsening was not shown.',
    findingRung: 'DOCUMENTED IN PART',
    lead:
      'The desk report’s lead is that injustice is felt in households, which have no limited liability: one eviction, one medical bill, one unpaid wage. This edition can publish two opened sources. It cannot publish the global totals in the desk report.',
    record: [
      {
        rung: 'DOCUMENTED IN PART',
        text:
          'KFF’s health-care debt survey, published 16 June 2022, reports a nationally representative survey of 2,375 adults, including 1,292 adults with current health-care debt. The same page links a 16 June 2022 project whose title states that 100 million people in America are saddled with health-care debt. The page also cites a Consumer Financial Protection Bureau estimate that $88 billion in medical debt appears on credit reports, and it says the total amount of medical debt is likely higher. A “$220 billion” figure in the desk report was not on this KFF page. A local news summary attributed “at least $220 billion” to a KFF analysis of another survey. That page is not used. The 100 million figure is the project title KFF links, and it is a U.S. figure dated 2022.',
        sourceIds: ['kff'],
      },
      {
        rung: 'DOCUMENTED IN PART',
        text:
          'A World Bank press release dated 15 October 2024 says almost 700 million people, 8.5 percent of the global population, live on less than $2.15 per person per day, and that the number of people under that line has barely changed since 1990 because of population growth. It says the goal of ending extreme poverty by 2030 is out of reach at that threshold. The desk report’s claim that the rate fell from about 38 percent in 1990 to single digits was not the sentence on this release. The release is a modelled poverty line, not a household panel of evictions or unpaid wages.',
        sourceIds: ['world-bank'],
      },
      {
        rung: 'CONTESTED',
        text:
          'Whether households are “crushed” more than before depends on which measure and which decade. The World Bank release describes setbacks after decades of progress and a headcount that has barely moved since 1990. That is not a finding that every ordinary person is worse off, and it is not a finding that poverty has vanished.',
        sourceIds: ['world-bank'],
      },
    ],
    caseFor:
      'Medical debt, on KFF’s account, is common enough that the publisher put “100 million” in a project title, and even the credit-report slice is $88 billion on the estimate the page cites. The point of the dossier is the mechanism: a bill arrives at the point of care, and the person, not a company, holds the balance. The World Bank figures show that a very large number of people remain under a bare poverty line.',
    caseAgainst:
      'Both sources are partial. The KFF survey is the United States in 2022. The World Bank line is an international poverty threshold, and the release itself says decades of progress preceded the setbacks it describes. Housing, wage-theft and hunger totals in the desk report were not opened. A global claim built from them would be an extrapolation this edition will not make.',
    stillOpen: [
      'No global eviction census was opened.',
      'Informal debt was not measured in any source opened here.',
      'Forced-labour and undernourishment totals in the desk report were not opened, and one of them conflicts with widely cited ILO categories. It is not corrected by guesswork.',
    ],
    nextSources: [
      'The KFF survey’s later updates, dated when quoted.',
      'The World Bank’s poverty platform, not only the press release.',
      'The ILO forced-labour report and the UN-Habitat World Cities Report, once the numbers on the page match the sentence.',
    ],
    falsifier:
      'The “crushing” reading would weaken if household panels showed eviction, medical bankruptcy and unpaid wages falling in line with poverty reduction.',
    confidence:
      'HIGH on the two sources as descriptions of what they measured. MEDIUM on any global aggregate. LOW on a claim of uniform worldwide deterioration.',
    heldBack: [
      {
        deskClaim: 'UN-Habitat’s 2026 report puts more than 1.2 billion people in informal settlements and about 318 million people homeless.',
        disposition: 'removed',
        detail: 'The World Cities Report page that opened did not contain those figures. They are not findings.',
      },
      {
        deskClaim: 'About 100 million U.S. adults carry medical debt totalling roughly $220 billion.',
        disposition: 'replaced',
        detail:
          'The KFF page supports the 100 million project title and an $88 billion credit-report estimate. It does not state $220 billion. That figure is not used.',
      },
      {
        deskClaim: 'About 3.3 billion people live in countries spending more on interest than on health or education. Forced labour is about 50 million people, with illegal profits of about $236 billion. Learning poverty is about 70 percent. Undernourishment is about 733 million.',
        disposition: 'could not access',
        detail: 'Those reports were not opened. None of the figures is a finding. The forced-labour headcount in particular is not repaired from memory.',
      },
    ],
    sourceIds: ['kff', 'world-bank'],
  }),
  page({
    id: 'L7',
    slug: 'l7-crime-trends',
    title: 'L7. Crime trends, not one rate',
    headTitle: 'L7: Crime Trends, Not One Rate | ARTIore',
    description:
      'FBI complaint losses rose in 2024 and 2025. A worldwide crime rate does not exist in the sources opened here. Canada’s fraud centre is linked for reports.',
    crumbName: 'L7 Crime trends',
    kicker: 'L7',
    finding: 'Reported cyber-fraud losses rose. A single global crime rate was not established.',
    findingRung: 'CONTESTED',
    lead:
      'The desk report’s lead is that violent crime and fraud are different charts, and that a falling body count is used to dismiss a rising money count. This edition opened the money count. It did not open the homicide study, so it does not confirm the other half.',
    record: [
      {
        rung: 'ESTABLISHED',
        text:
          'The FBI Internet Crime Complaint Center’s 2024 report says complaints totalled 859,532 and reported losses totalled $16.6 billion, a 33 percent increase in losses from 2023. The 2025 report says losses reported to IC3 surpassed $20 billion. Its highlights page states 1,008,597 complaints and $20.877 billion in losses, a 26 percent increase in losses from 2024. These are complaints and reported losses to one U.S. centre. They are not a validated measure of all crime, and the same person can report to more than one place. IC3 is cited here as the publisher of those statistics, not as a help line.',
        sourceIds: ['ic3-2024', 'ic3-2025'],
      },
      {
        rung: 'DOCUMENTED IN PART',
        text:
          'A UNODC press release of 21 July 2026 says South-East Asia’s criminal ecosystem has undergone a fundamental restructuring, and that combined annual losses from scam offences across East Asia, South-East Asia, Australia and New Zealand are estimated at between $88.3 billion and $114.1 billion for 2025. UNODC presents that span as an estimate. A separate U.S. estimate of losses to South-East Asian scam centres, in a Congressional Research Service report, was not opened.',
        sourceIds: ['unodc'],
      },
      {
        rung: 'CONTESTED',
        text:
          '“Crime is going up worldwide” is false as a single sentence if homicide, robbery and fraud move differently. This edition can say that reported losses to IC3 rose in 2024 and 2025. It cannot say that violent crime fell, because the UNODC homicide study was not opened. Until that study is opened, the contrast the desk report wants is only half checked, and the worldwide sentence stays contested.',
        sourceIds: ['ic3-2025'],
      },
      {
        rung: 'OPEN',
        text:
          'No single global crime rate was found in the sources opened here. Victimisation surveys for regions the desk report calls thin were not opened.',
        sourceIds: [],
      },
    ],
    caseFor:
      'Follow the complaint data that exists. In the jurisdictions that publish them, reported internet-crime losses set records in the two IC3 reports that were opened, and UNODC describes an industrial scam economy with an estimated loss range. Those are money-and-victim measures, not homicide measures.',
    caseAgainst:
      'IC3 is a complaint database. Awareness campaigns and mandatory reporting move the series. The 2024 report’s own pages separate complaints that state a loss from the larger complaint total. A rise in reports is not, by itself, a rise in offences per person. The violent-crime decline in the desk report is unchecked here and is not used to dismiss or to confirm anything.',
    stillOpen: [
      'The UNODC Global Study on Homicide, including the 2021 count and rate in the desk report.',
      'The September 2026 Congressional Research Service report on scam-centre losses.',
      'Victimisation surveys that separate incidence from willingness to report.',
    ],
    nextSources: [
      'The next IC3 annual report, quoted from the PDF rather than from a press summary.',
      'The UNODC homicide time series, once opened.',
      'The UNODC trafficking report, read with the warning that detection follows enforcement.',
    ],
    falsifier:
      'The “fraud is rising” reading would fail if victimisation surveys, not complaint files, showed stable or falling fraud per person after adjusting for the tendency to report.',
    confidence:
      'HIGH that losses reported to IC3 rose in the two reports opened here. LOW on any single global crime rate. The violent-crime half of the desk’s contrast is unchecked.',
    heldBack: [
      {
        deskClaim: 'UNODC recorded about 458,000 homicides in 2021, a rate of about 5.8 per 100,000, below the rate around 2000.',
        disposition: 'could not access',
        detail: 'The UN News story returned 406, and the UNODC release URL tried returned 404. The figures are not findings.',
      },
      {
        deskClaim: 'American losses to South-East Asian scam centres were $10.0 billion in 2024 and $18.2 billion in 2025.',
        disposition: 'could not access',
        detail: 'The Congressional Research Service page returned 403. The figures are not findings. The UNODC regional estimate above is a different geography and a different number.',
      },
    ],
    sourceIds: ['ic3-2024', 'ic3-2025', 'unodc', 'cafc'],
  }),
  page({
    id: 'L8',
    slug: 'l8-cyber-hygiene',
    title: 'L8. Cybersecurity hygiene',
    headTitle: 'L8: Cybersecurity Hygiene Gaps | ARTIore',
    description:
      'A CEO survey, a breach report, a faulty software update, and the NHS WannaCry audit. No global hygiene baseline was found.',
    crumbName: 'L8 Cyber hygiene',
    kicker: 'L8',
    finding: 'Basic failures are in named public records. A global median was not measured.',
    findingRung: 'DOCUMENTED IN PART',
    lead:
      'The desk report’s lead is that defence is optional and cheap to skip, so known weaknesses persist. This edition can show a survey, a long-running breach pattern described without a percentage, a non-attack outage, and one public-sector audit. It cannot show a world median.',
    record: [
      {
        rung: 'DOCUMENTED IN PART',
        text:
          'The World Economic Forum’s Global Cybersecurity Outlook 2026 says chief executives rate cyber-enabled fraud as their top concern, shifting focus from ransomware, and that 73 percent of survey respondents reported that they or someone in their network had been personally affected by cyber-enabled fraud over the course of 2025. That is a survey of perceptions, not a count of incidents.',
        sourceIds: ['wef'],
      },
      {
        rung: 'DOCUMENTED IN PART',
        text:
          'Verizon’s Data Breach Investigations Report page, opened on 3 November 2026, says the most frequent causes continue to involve the human element, including social engineering, phishing and stolen credentials, and also the exploitation of software vulnerabilities and ransomware. The page does not state a “roughly 60 percent” human-element share. That figure from the desk report is not used.',
        sourceIds: ['verizon'],
      },
      {
        rung: 'ESTABLISHED',
        text:
          'Microsoft’s blog of 20 July 2024 estimates that a CrowdStrike update affected 8.5 million Windows devices, or less than one percent of Windows machines. Microsoft describes an update failure, not an attack. The desk report uses the episode as correlated risk in a monoculture. That reading is consistent with the scale Microsoft states. It is not evidence of an intrusion.',
        sourceIds: ['microsoft'],
      },
      {
        rung: 'ESTABLISHED',
        text:
          'The UK National Audit Office’s investigation of the WannaCry attack on the NHS, published 27 October 2017, says infected organisations had unpatched or unsupported Windows systems. It says NHS Digital had issued critical alerts in March and April 2017, and that before 12 May 2017 the Department had no formal mechanism for assessing whether local organisations had complied. It says the attack disrupted at least 34 percent of trusts in England, and that the Department and NHS England do not know the full extent.',
        sourceIds: ['nao'],
      },
      {
        rung: 'OPEN',
        text:
          'No global incident census, and no audited median for multi-factor authentication or patch time, was found in the sources opened here. A statement that “cybersecurity is low worldwide” remains an inference.',
        sourceIds: [],
      },
    ],
    caseFor:
      'The economics in the desk report do not require a brilliant attacker. The NHS audit shows a warned, unpatched estate and a large outage. The Forum’s survey shows boards now ranking fraud first. Microsoft’s estimate shows how one bad update reaches millions of machines because many institutions share a platform.',
    caseAgainst:
      'Large organisations have added controls over the last decade, and the incidents people remember are memorable because they are rare against the volume of ordinary transactions. Breach counts also rise when disclosure laws widen, so a rising series can measure reporting. This edition did not open a study that measures that improvement, so the improvement is not a finding either. It is the reason a “low worldwide” sentence stays open.',
    stillOpen: [
      'Hospital and small-firm incident rates outside the countries in these sources.',
      'Ransom totals. The Colonial Pipeline, MOVEit and Change Healthcare figures in the desk report were not opened.',
      'A median hygiene audit across sectors.',
    ],
    nextSources: [
      'The Verizon report’s statistical annex, if a later edition needs a percentage and can show it on the page.',
      'The Forum’s methodology annex.',
      'The National Audit Office’s WannaCry pages already opened, plus later health-sector reviews.',
    ],
    falsifier:
      'The “low hygiene” reading would weaken if audited measures — multi-factor coverage, patch delay, and response time — showed the median organisation meeting a stated baseline.',
    confidence:
      'HIGH that the NHS audit and the Microsoft estimate describe the events they describe. MEDIUM that a global median is low, because that median was not measured.',
    heldBack: [
      {
        deskClaim: 'The human element is present in roughly 60 percent of breaches.',
        disposition: 'removed',
        detail: 'The Verizon page that opened did not state 60 percent. The percentage is not a finding.',
      },
      {
        deskClaim: 'Colonial Pipeline paid about $4.4 million. MOVEit affected thousands of organisations. Change Healthcare paid about $22 million and cost billions, after an account without multi-factor authentication.',
        disposition: 'could not access',
        detail:
          'The Justice Department Colonial page returned an empty response. A CISA MOVEit advisory returned 403. The UnitedHealth page that was tried did not contain the incident. None of those figures is a finding.',
      },
    ],
    sourceIds: ['wef', 'verizon', 'microsoft', 'nao'],
  }),
  page({
    id: 'L9',
    slug: 'l9-technology-gap',
    title: 'L9. Technology and the understanding gap',
    headTitle: 'L9: Technology and the Gap | ARTIore',
    description:
      'The desk report’s literacy and access figures were not on the pages opened. No global understanding number is published here.',
    crumbName: 'L9 Technology gap',
    kicker: 'L9',
    finding: 'No global literacy number was found. The desk report’s figures stay unverified.',
    findingRung: 'OPEN',
    lead:
      'The desk report’s lead is that people cannot inspect systems that decide credit, work, care and visibility, and that the opacity is useful to the firms that sell the systems. That is an argument about power. It is not, in this edition, a measured global gap.',
    record: [
      {
        rung: 'OPEN',
        text:
          'The ITU Facts and Figures 2023 page was opened. The static page did not display an offline population, including the desk report’s figure of roughly 2.6 billion people offline. The OECD papers cited for a comparison of language models with adult skills, and for a 2025 adoption divide, were not retrieved (the HTML returned 403; an earlier PDF download was incomplete). No standard cross-national “AI literacy” score was found. Pew and Eurobarometer attitude surveys were not opened. This edition does not invent the missing numbers.',
        sourceIds: ['itu'],
      },
    ],
    caseFor:
      'The desk report’s strongest structural point does not need a literacy score: a person subject to a decision cannot inspect a model whose weights and training data are withheld, and cannot cross-examine the vendor. That sentence is an argument about institutional design. It is not established here by a measurement.',
    caseAgainst:
      'Every general-purpose technology produced a gap that narrowed with use. People can use a system without explaining its internals. “Advanced technology” bundles tools that have nothing to do with each other, so one gap statistic would be meaningless even if it existed. The profit story — advertising, data, lock-in, and liability shifted onto the person — was not opened in a contract or a filing, so it is not a finding.',
    stillOpen: [
      'An ITU statistical annex that states an offline population on the page.',
      'The OECD AI-literacy consultation, which the desk report says exists because no measure does.',
      'Public contracts for automated decision systems.',
    ],
    nextSources: [
      'The ITU statistical tables, not only the report landing page.',
      'The OECD papers, once they can be opened in full.',
      'Published impact assessments, where a government has actually published one.',
    ],
    falsifier:
      'The “someone profits from the gap” reading would weaken if public contracts routinely included auditable access to the model and a published impact assessment.',
    confidence:
      'LOW on any global literacy or access number, because none was confirmed. The structural argument is noted as an argument, not as a measurement.',
    heldBack: [
      {
        deskClaim: 'About 2.6 billion people were offline in 2023. Large language models already beat the median adult on literacy and numeracy tests in several OECD countries.',
        disposition: 'could not access',
        detail: 'The ITU page did not show the figure. The OECD report was not retrieved. Neither number is a finding.',
      },
    ],
    sourceIds: ['itu'],
  }),
  page({
    id: 'L10',
    slug: 'l10-wealth-power',
    title: 'L10. Concentration of wealth',
    headTitle: 'L10: Wealth and Power | ARTIore',
    description:
      'One Oxfam page states a 2024 billionaire-wealth figure. The UBS stock figures and the “money buys votes” claim were not confirmed.',
    crumbName: 'L10 Wealth',
    kicker: 'L10',
    finding: 'One 2024 wealth-flow figure was opened. The causal “buys power” claim was not.',
    findingRung: 'DOCUMENTED IN PART',
    lead:
      'The desk report’s lead is that a small number of households and funds hold enough assets to shape prices, tax and rules, and that the open question is what that stock buys. This edition opened one advocacy page with one flow figure. It did not open the wealth-stock report or the election-spending data.',
    record: [
      {
        rung: 'DOCUMENTED IN PART',
        text:
          'An Oxfam Canada page about the 2026 Davos meeting says that, globally, billionaire wealth grew by $2.8 trillion in 2024 alone, which it equates to roughly $7.9 billion a day. Oxfam is an advocacy organisation. The page presents the figure as the organisation’s report. It does not show the desk report’s other claims: that the number of billionaires passed 3,000 in 2025, that collective billionaire wealth rose about 81 percent, or about $8.2 trillion, since 2020. Those claims are not used. Wealth figures depend on valuations and on what is listed. This one is a flow for a single year, from a single publisher.',
        sourceIds: ['oxfam-wealth'],
      },
      {
        rung: 'OPEN',
        text:
          'The UBS Global Wealth Report was not opened (the publisher’s site returned 403, and a news page returned a headline without the article body). Election-cycle totals were not opened. No source opened here shows that a given donation changed a given vote. Offshore-wealth estimates were not opened.',
        sourceIds: [],
      },
      {
        rung: 'CONTESTED',
        text:
          'The desk report’s own caution stands, and this edition did not re-measure it: between-country and within-country inequality can move in different directions, and the choice of consumption, income or wealth changes the answer. No Gini series was opened, so this edition does not pick a side with a number.',
        sourceIds: [],
      },
    ],
    caseFor:
      'A $2.8 trillion one-year increase in billionaire wealth, if Oxfam’s method holds, is large enough to matter to the question the dossier asks. The page also says that wealth and influence rise together. That is the organisation’s claim. It is not a demonstrated causal path.',
    caseAgainst:
      'List-based billionaire totals miss private and offshore wealth and swing with markets. A founder’s illiquid shares are not the same thing as a rent extracted from a household. The largest fall in absolute poverty sits in the same decades as rising top wealth, and this edition’s World Bank source in L6 describes both progress and a stall. Neither fact was turned into a moral verdict here. “Concentration buys power” needs a vote or a statute that moved because of the money. That record was not opened.',
    stillOpen: [
      'UBS distribution tables.',
      'A beneficial-ownership register with verification.',
      'Lobbying-meeting logs that would allow a real test of influence.',
    ],
    nextSources: [
      'The UBS Global Wealth Report 2026 tables, once opened.',
      'The World Inequality Database.',
      'Election-spending disclosures, once opened, kept separate from a causal claim.',
    ],
    falsifier:
      'The “concentration buys power” reading would weaken if, after accounting for preferences, spending and lobbying showed no measurable effect on legislative outcomes, or if the top share were an artefact of how assets are valued.',
    confidence:
      'MEDIUM on the single Oxfam figure as a claim by that publisher. LOW on precise top shares and on the causal step, which were not tested.',
    heldBack: [
      {
        deskClaim: 'Global personal wealth rose about 10.8 percent in 2025, and about one million people became dollar millionaires. About 60 million wealthy individuals held $226 trillion, 48.1 percent of wealth, and 2,891 billionaires held $15.6 trillion.',
        disposition: 'could not access',
        detail:
          'The UBS report was not opened. A news headline repeated the millionaire sentence, but the article body did not load. None of these figures is a finding.',
      },
      {
        deskClaim: 'U.S. federal election spending reached about $16 billion in the 2024 cycle.',
        disposition: 'could not access',
        detail: 'The spending page returned 403. The figure is not a finding.',
      },
    ],
    sourceIds: ['oxfam-wealth'],
  }),
  page({
    id: 'L11',
    slug: 'l11-commercial-spyware',
    title: 'L11. Commercial spyware on the public record',
    headTitle: 'L11: Commercial Spyware Record | ARTIore',
    description:
      'The 2021 U.S. Entity List entry and the Pegasus Project’s own description of a targeting list. The judgment PDF was not opened.',
    crumbName: 'L11 Spyware',
    kicker: 'L11',
    finding: 'A government listing and a 2021 investigation are on the record. Export enforcement is open.',
    findingRung: 'DOCUMENTED IN PART',
    lead:
      'The desk report’s lead is that a small set of companies sold an intrusion capability that states had kept inside their own services, and that journalists, lawyers and political opponents were among the people later named in public investigations. This dossier is descriptive. It is not a guide to how the tools work, and it is not a list of targets.',
    record: [
      {
        rung: 'ESTABLISHED',
        text:
          'A U.S. Federal Register rule, effective 4 November 2021, added NSO Group and Candiru to the Entity List. The notice says information showed that the Israeli companies NSO Group and Candiru developed and supplied spyware to foreign governments that used this tool to maliciously target government officials, journalists, businesspeople, activists, academics and embassy workers. That is an official determination. It is not a finding about every customer, and it is not a Treasury sanctions notice. A Treasury page that was tried was a different press release and is not used.',
        sourceIds: ['entity-list'],
      },
      {
        rung: 'ESTABLISHED',
        text:
          'Amnesty International’s press release of 19 July 2021 describes the Pegasus Project as an investigation of a leak of 50,000 phone numbers of potential surveillance targets, including heads of state, activists and journalists, and, in Amnesty’s words, Jamal Khashoggi’s family. The release says the project was a collaboration of more than 80 journalists from 17 media organisations, coordinated by Forbidden Stories, with forensic tests by Amnesty. The release calls the numbers potential targets. It does not say that 50,000 infections were confirmed. Amnesty’s secretary general is quoted calling the spyware a weapon of choice for repressive governments. That sentence is Amnesty’s characterisation, not a court finding.',
        sourceIds: ['amnesty'],
      },
      {
        rung: 'DOCUMENTED IN PART',
        text:
          'Two news reports describe a 2025 order of the U.S. District Court for the Northern District of California in the case brought over a 2019 intrusion into WhatsApp. The Record, dated 20 October 2025, and Digital Watch, dated 22 October 2025, both say the order bars NSO from targeting WhatsApp, cuts damages from $168 million to $4 million, and concerns about 1,400 users reached in 2019 through what both call a zero-click exploit. The dates on the two articles differ by two days. This edition does not average them and does not treat either date as the docket date, because the judgment PDF was not opened. The technical method is not described here.',
        sourceIds: ['record', 'digital-watch'],
      },
      {
        rung: 'OPEN',
        text:
          'No public export-licence file was opened showing which client bought which capability, or whether a licence was revoked when misuse was detected. Client lists and contract terms were not opened. Country-by-country infection claims in the desk report, beyond the Amnesty release and the Entity List notice, were not opened and are not repeated.',
        sourceIds: [],
      },
    ],
    caseFor:
      'Three kinds of record are partly in hand: a government listing that names the companies and the categories of people targeted, a news investigation that distinguishes a list of potential targets from a list of confirmed infections, and two independent news reports of a court order that describe the same damages cut and the same user count. The listing is the strongest of the three because the notice itself was opened.',
    caseAgainst:
      'The companies’ public position, as the desk report summarises it, is that they sell to vetted governments, do not operate the systems, forbid certain targets by contract, and have cut off clients. That position was not opened in a pleading here, so it is recorded as the desk’s account of the defence, not as a finding. Infection, where it is confirmed, shows a tool. It does not, by itself, show who ordered the intrusion or why. The Pegasus Project number is a list of potential targets. Reporting that turns it into 50,000 hacks is a misdescription, and this page does not do that. Sanctions and a lawsuit can constrain an industry. That constraint was not measured here.',
    stillOpen: [
      'The judgment and the pleadings in the Northern District of California case.',
      'Export-licence denials and post-sale audits.',
      'Whether any licence was revoked, as opposed to a contract quietly ended.',
      'Whether the same capability has moved to less visible sellers.',
    ],
    nextSources: [
      'The Federal Register notice already opened.',
      'The judgment PDF, once it can be opened, checked against the two news reports.',
      'Parliamentary reports that examine a named procurement, read for what they prove and what they leave contested.',
    ],
    falsifier:
      'The abuse finding would weaken if a verified audit of a licensed client showed no targeting outside the categories the licence declared, or if a forensic re-analysis attributed the confirmed cases to a different vendor.',
    confidence:
      'HIGH that the Entity List notice says what this page says it says. HIGH that Amnesty described 50,000 potential targets rather than 50,000 confirmed infections. MEDIUM on the 2025 court order, because the opinion was not opened. LOW on how the export-licensing system actually enforces the rules.',
    heldBack: [
      {
        deskClaim: 'The U.S. Treasury sanctioned NSO Group and Candiru on the same day as the Entity List.',
        disposition: 'removed',
        detail:
          'The Treasury URL that was tried was a ransomware announcement and did not mention these companies. The sanctions claim is not a finding.',
      },
      {
        deskClaim: 'A country-by-country list of infections, including named journalists and politicians, and an Indian technical committee that could not confirm infection on the petitioners’ phones.',
        disposition: 'could not access',
        detail:
          'Those forensic and court reports were not opened. Named private persons are not added from the desk report. The Khashoggi reference above is Amnesty’s own phrase in the release that was opened.',
      },
    ],
    sourceIds: ['entity-list', 'amnesty', 'record', 'digital-watch'],
  }),
  page({
    id: 'synthesis',
    slug: 'synthesis',
    title: 'Synthesis and limits',
    headTitle: 'Injustice Synthesis and Limits | ARTIore',
    description:
      'What the eleven dossiers can and cannot support. The record is thinnest where the documents are held, and that is a limit, not a verdict.',
    crumbName: 'Synthesis',
    kicker: 'Synthesis',
    finding: 'Thin records cluster where documents are held by the institutions under study. That is not proof of a plot.',
    findingRung: 'DOCUMENTED IN PART',
    lead:
      'The desk report’s cross-cutting claim is a measurement claim, not a conspiracy claim: the public record is thin exactly where power is concentrated. This edition’s own search is a small example of that pattern. Primary PDFs and statutes opened. Several justice-department pages, a wealth report, and a court opinion did not.',
    record: [
      {
        rung: 'DOCUMENTED IN PART',
        text:
          'Measurement. Harms in the opened sources are often surveys, perceptions, or complaint files: the Corruption Perceptions Index, the CIVICUS rating, the KFF survey, and the IC3 complaint totals. Each page says, or its method implies, that it is not a census of events. Harms organised through banks, vendors and settlement files were the ones this edition most often failed to open.',
        sourceIds: ['cpi-news', 'civicus', 'kff', 'ic3-2025'],
      },
      {
        rung: 'DOCUMENTED IN PART',
        text:
          'Legal form. Instruments that are lawful on their face appear in the opened record: the foreign-agent designation that preceded Memorial’s liquidation, the Entity List process, and the Horizon convictions that later required a statute to quash. “It was legal” and “it closed a voice or a livelihood” can both be true of the same file. This edition does not treat legality as a defence or as a conviction.',
        sourceIds: ['memorial', 'entity-list', 'po-act'],
      },
      {
        rung: 'OPEN',
        text:
          'Custody. Where a dossier is marked OPEN, the missing item is usually a document someone holds: export licences, the spyware judgment, beneficial ownership, the UBS tables, the homicide study. Absence from this page is not absence from the world.',
        sourceIds: [],
      },
    ],
    caseFor:
      'The same search, on the same day, could open a Federal Register notice and an IC3 statistical report, and could not open several of the documents that would test the strongest causal claims. That asymmetry showed up across the dossiers without any need to posit a hidden plan.',
    caseAgainst:
      'Thinness can be random. A blocked website is also a fact about this edition’s tools, not only about the institution. Some missing documents may be missing because the event did not happen. Treating every OPEN label as evidence of concealment would make the label unfalsifiable, which the desk report itself warns against.',
    stillOpen: [
      'A comparable set of institutional error rates.',
      'Beneficial-ownership and lobbying records that would test the causal claims in L2 and L10.',
      'Case-level spyware licensing records that would test L11.',
    ],
    nextSources: [
      'The judgment and the wealth tables named in L10 and L11.',
      'The homicide study named in L7.',
      'A corrections entry on this hub when any held-back figure is later opened and either published or withdrawn.',
    ],
    falsifier:
      'The cross-cutting claim would weaken if the missing documents were missing at random, unrelated to the power of the actor who holds them, or if they were missing because the underlying events did not occur.',
    confidence:
      'MEDIUM that this edition’s own gaps cluster on documents institutions hold. LOW on any ranking of “which injustice is biggest,” which no opened dataset supports.',
    heldBack: [],
    sourceIds: ['cpi-news', 'civicus', 'kff', 'ic3-2025', 'memorial', 'entity-list', 'po-act'],
  }),
]

export function injusticePage(id: string) {
  return injusticePages.find((entry) => entry.id === id)
}

export function injusticePageBySlug(slug: string) {
  return injusticePages.find((entry) => entry.slug === slug)
}
