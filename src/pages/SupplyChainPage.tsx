import { Breadcrumbs } from '../components/seo/Breadcrumbs'
import { SeoHead } from '../components/seo/SeoHead'
import { ExternalLink, SiteLink } from '../components/content/SiteLink'
import { RelatedReadingFor } from '../components/related/RelatedReading'
import {
  supplyChainAlternates,
  supplyChainDescription,
  supplyChainHeadTitle,
  supplyChainPath,
  supplyChainPublished,
  supplyChainTitle,
} from '../content/supply-chain/catalog'
import { deviceChecks } from '../content/supply-chain/checks'
import { claimLedger, sourceRegister } from '../content/supply-chain/register'

const linkClass =
  'text-gold-bright underline decoration-gold/40 underline-offset-4 hover:decoration-gold-bright'

function Label({ children }: { children: string }) {
  return <p className="mt-3 text-sm font-semibold text-gold">{children}</p>
}

export default function SupplyChainPage() {
  return (
    <>
      <SeoHead
        alternates={supplyChainAlternates}
        author="ARTIore Research Desk"
        authorOrganization="ARTIore"
        crumbName="Hidden features"
        dateModified={supplyChainPublished}
        datePublished={supplyChainPublished}
        description={supplyChainDescription}
        headline={supplyChainTitle}
        inLanguage="en"
        kind="article"
        locale="en_US"
        path={supplyChainPath}
        title={supplyChainHeadTitle}
      />
      <Breadcrumbs current="Hidden features" path={supplyChainPath} />
      <article className="mx-auto max-w-[68ch]" lang="en">
        <header>
          <p className="text-xs uppercase tracking-[0.22em] text-gold">Investigation</p>
          <h1 className="mt-3 font-serif text-4xl leading-tight text-cream sm:text-5xl">{supplyChainTitle}</h1>
          <p className="mt-4 text-sm text-muted">
            <time dateTime={supplyChainPublished}>9 November 2026</time> · English · Evidence labels in this article are
            Confirmed, Demonstrated in research, Reported, Disputed, and Allegation. Those words are not the record
            statuses Verified and Unverified.
          </p>
          <p className="mt-5 text-lg leading-relaxed text-cream/90">
            Every connected product passes through factories, firmware integrators, component brokers, and resellers
            before it reaches a shelf. At almost every handoff, something can be added, hidden, or changed without the
            brand on the box fully knowing. This page traces twelve documented cases, in seven categories, and says
            what a person can actually check.
          </p>
          <p className="mt-4 leading-relaxed text-cream/90">
            The Digital Exposure threat matrix already notes pre-installed malware as one surface. This page is the
            case account, not a second copy of that row.{' '}
            <SiteLink className={linkClass} href="/investigations/digital-exposure/global-threat-matrix/">
              Global threat matrix
            </SiteLink>
            .
          </p>
        </header>

        <section className="mt-10" id="limits-at-a-glance">
          <h2 className="font-serif text-3xl text-cream">What is known, disputed, and unchecked</h2>
          <p className="mt-4 leading-relaxed text-cream/90">
            Regulators and named researchers have confirmed, in writing, specific cases of an undisclosed microphone,
            undocumented firmware commands, pre-installed adware, malware built into firmware before sale, and data
            collection buried in setup. In most confirmed cases the brand on the box did not design the hidden element.
            It came from a factory, a firmware integrator, or a chip or software supplier.
          </p>
          <p className="mt-4 leading-relaxed text-cream/90">
            Whether an undocumented feature is malice, negligence, or an ordinary insecure design is often contested.
            Two cases here — a chip-level “backdoor” claim, and an alleged hardware implant on server motherboards —
            were walked back or denied, in whole or in part. They are here as warnings against overclaiming.
          </p>
          <p className="mt-4 leading-relaxed text-cream/90">
            A 2025 report of hidden cellular radios in Chinese-made solar equipment named no manufacturer and relied on
            two unnamed sources. It stays Reported, unverified. The current court status of Sony, Hisense, and TCL in
            the Texas smart-TV cases was not opened from a live docket.
          </p>
        </section>

        <section className="mt-10" id="how">
          <h2 className="font-serif text-3xl text-cream">1. How hidden capability gets into a product</h2>
          <p className="mt-4 leading-relaxed text-cream/90">
            A consumer device is rarely built end to end by the company whose logo is on it. A typical path runs
            through a chip designer, a fabricator, a firmware integrator, a contract manufacturer, a software supplier,
            and often a reseller who relabels the finished product. Each handoff can add something that never reaches
            the brand’s specification.
          </p>
          <p className="mt-4 leading-relaxed text-cream/90">
            The cases are grouped as undisclosed hardware (A), undocumented firmware (B), pre-installed software (C),
            compromised firmware (D), badly disclosed data collection (E), counterfeit parts (F), and post-sale changes
            (G). Allegations stay separate from confirmed fact.
          </p>
        </section>

        <section className="mt-10" id="hardware">
          <h2 className="font-serif text-3xl text-cream">2. Undisclosed hardware</h2>
          <h3 className="mt-6 font-serif text-2xl text-cream">Google Nest Guard’s hidden microphone</h3>
          <p className="mt-4 leading-relaxed text-cream/90">
            In February 2019, Google confirmed that its Nest Guard home-security hub, on sale since the fall of 2017,
            contained a microphone that was never listed in the published specifications. Google told reporters the
            omission was “an error,” and said the microphone had never been enabled and would only activate with a
            user’s opt-in. Nest Guard is a security hub, not a smart speaker.
          </p>
          <Label>Evidence label: Confirmed, on Google’s own statement to the press.</Label>
          <p className="mt-2 leading-relaxed text-cream/90">
            The claim that the omission was unintentional comes from Google explaining its own conduct.
          </p>
          <h3 className="mt-6 font-serif text-2xl text-cream">Alleged radios in solar equipment</h3>
          <p className="mt-4 leading-relaxed text-cream/90">
            Reuters reported on 14 May 2025, citing two unnamed sources, that US energy officials had found
            communication devices, including cellular radios, inside some Chinese-made solar inverters and batteries
            that were not in the product documentation. No manufacturer or product was named. The story stays a
            single-outlet account. It is not a claim about Chinese-made electronics as a category.
          </p>
          <Label>Evidence label: Reported, unverified.</Label>
        </section>

        <section className="mt-10" id="firmware">
          <h2 className="font-serif text-3xl text-cream">3. Undocumented firmware</h2>
          <h3 className="mt-6 font-serif text-2xl text-cream">ESP32 commands, and the word that was withdrawn</h3>
          <p className="mt-4 leading-relaxed text-cream/90">
            In March 2025, Tarlogic Security reported 29 undocumented vendor-specific Bluetooth commands in the
            original ESP32 chip, a part used in a wide range of consumer products. “Backdoor” appeared in early
            coverage and was withdrawn. Espressif said the commands are internal debug and testing functions, not
            reachable remotely, and that it would remove them.
          </p>
          <Label>Evidence label: Confirmed that the commands existed. Disputed as to severity and intent.</Label>
          <h3 className="mt-6 font-serif text-2xl text-cream">Unitree robots</h3>
          <p className="mt-4 leading-relaxed text-cream/90">
            Researchers reported a remote-access tunnel in Unitree’s Go1 robot, tracked as CVE-2025-2894, in March
            2025. The NVD page for that identifier did not return a usable description on 9 November 2026, so this page
            does not quote an NVD score or NVD wording. The existence of the identifier is Reported from secondary
            advisories. In September 2025, a separate Bluetooth pairing flaw nicknamed UniPwn was reported to allow
            root-level takeover on later models. A preprint additionally reported continuous telemetry from the G1
            humanoid to servers in China. No public Unitree reply to that telemetry claim was found.
          </p>
          <Label>Evidence label: Demonstrated in research for the access-tunnel and pairing reports. The telemetry claim is the preprint, kept separate.</Label>
        </section>

        <section className="mt-10" id="preinstalled">
          <h2 className="font-serif text-3xl text-cream">4. Pre-installed software</h2>
          <h3 className="mt-6 font-serif text-2xl text-cream">Lenovo and Superfish</h3>
          <p className="mt-4 leading-relaxed text-cream/90">
            Between 2014 and early 2015, Lenovo shipped some laptops with VisualDiscovery adware, built on Superfish,
            which injected advertising by installing its own security certificate and broke the encryption those owners
            relied on. The US Federal Trade Commission and a group of state attorneys general reached a settlement.
            Lenovo denied wrongdoing while agreeing to pay the states. That is US enforcement history, not advice on
            where a person in Canada should report a fraud.
          </p>
          <Label>Evidence label: Confirmed, from the FTC consent order and reported state terms.</Label>
          <h3 className="mt-6 font-serif text-2xl text-cream">Pre-installed Android apps at scale</h3>
          <p className="mt-4 leading-relaxed text-cream/90">
            A peer-reviewed study at the 2020 IEEE Symposium on Security and Privacy, led by Julien Gamba and
            colleagues, analyzed 82,501 pre-installed apps across 1,742 Android devices from 214 brands. A Spanish data
            protection authority note, with IMDEA, said more than 91 percent of the apps analyzed were never on
            Google’s Play Store. The sample is the period of the study.
          </p>
          <Label>Evidence label: Demonstrated in research.</Label>
        </section>

        <section className="mt-10" id="compromised">
          <h2 className="font-serif text-3xl text-cream">5. Compromised firmware</h2>
          <h3 className="mt-6 font-serif text-2xl text-cream">BADBOX 2.0</h3>
          <p className="mt-4 leading-relaxed text-cream/90">
            HUMAN Security’s Satori team reported infections on more than 1 million off-brand Android devices —
            streaming boxes, projectors, tablets, and car infotainment systems not certified under Play Protect —
            across 222 countries and territories, up from roughly 74,000 in an earlier campaign the firm tracked. The
            count is HUMAN’s telemetry, not an independently audited census. The FBI issued a public service
            announcement on 5 June 2025. The FBI’s “millions” is softer than HUMAN’s figure.
          </p>
          <Label>Evidence label: Confirmed for the advisory and for HUMAN’s published scale, as vendor research.</Label>
          <h3 className="mt-6 font-serif text-2xl text-cream">Keenadu</h3>
          <p className="mt-4 leading-relaxed text-cream/90">
            Kaspersky reported on 17 February 2026 that malware it named Keenadu was embedded in the firmware of
            several Android tablet brands before sale. The write-up uses an Alldocube firmware image as the example
            and records 13,715 user encounters. Kaspersky links the family to Triada, BADBOX, and Vo1d. A separate
            figure of about 50 models, from a news article citing Sophos, was not checked against a Sophos publication.
          </p>
          <Label>Evidence label: Demonstrated in research for the Securelist findings. The 50-model figure is Reported, unverified.</Label>
          <h3 className="mt-6 font-serif text-2xl text-cream">The Big Hack, as a warning</h3>
          <p className="mt-4 leading-relaxed text-cream/90">
            In October 2018, Bloomberg Businessweek alleged that tiny implanted chips had been added to server
            motherboards in supply chains serving Amazon and Apple. Apple, Amazon, and Supermicro denied the story.
            The US Department of Homeland Security said it had no reason to doubt those denials. A review commissioned
            by Supermicro reported no malicious hardware. Bloomberg stood by the reporting. No public hardware sample
            has settled it.
          </p>
          <Label>Evidence label: Disputed.</Label>
        </section>

        <section className="mt-10" id="acr">
          <h2 className="font-serif text-3xl text-cream">6. Data collection disclosed badly</h2>
          <p className="mt-4 leading-relaxed text-cream/90">
            In February 2017, the US Federal Trade Commission and the New Jersey Attorney General announced a $2.2
            million settlement with Vizio over second-by-second viewing data from roughly 11 million televisions,
            collected without informed consent. Vizio said the data was not paired with names or contact information.
            That paragraph is US enforcement history.
          </p>
          <p className="mt-4 leading-relaxed text-cream/90">
            On 15 December 2025, the Texas Attorney General sued Sony, Samsung, LG, Hisense, and TCL under the state’s
            deceptive trade practices law over similar automatic content recognition. The filing is an allegation.
            Later Attorney General press releases reported settlements with Samsung and LG. Sony, Hisense, and TCL were
            described as continuing, and a Hisense temporary restraining order was reported. This page did not open a
            live court docket, so Sony, Hisense, and TCL stay unresolved against the court record. The Samsung and LG
            settlements are reported from those press releases, not from a docket.
          </p>
          <Label>Evidence label: Confirmed for the Vizio settlement. Allegation for the Texas filing. Reported for the Samsung and LG settlements. Unverified against the docket for the other three.</Label>
        </section>

        <section className="mt-10" id="counterfeit">
          <h2 className="font-serif text-3xl text-cream">7. Counterfeit parts</h2>
          <p className="mt-4 leading-relaxed text-cream/90">
            A May 2012 US Senate Armed Services Committee investigation documented about 1,800 cases involving more
            than 1 million suspect counterfeit electronic parts in defense supply chains. China was the dominant
            traced origin. One supplier was linked to about 84,000 suspect parts. This is a military procurement case,
            included for the mechanism, not as a consumer-harm finding. A consumer-facing counterfeit-component case
            was not found. That gap is left open.
          </p>
          <Label>Evidence label: Confirmed, from the Committee’s published findings. Scope: military.</Label>
        </section>

        <section className="mt-10" id="contec">
          <h2 className="font-serif text-3xl text-cream">8. The Contec CMS8000, in detail</h2>
          <p className="mt-4 leading-relaxed text-cream/90">
            On 30 January 2025, CISA published a fact sheet on three firmware versions of the Contec CMS8000, a
            vital-signs monitor made by Contec Medical Systems, headquartered in Qinhuangdao, Hebei, China. In the
            default configuration the device transmitted plain-text patient data to a hard-coded public IP address
            whenever a patient was connected. CISA said the address belonged to a university, not to a device maker or
            a hospital. The firmware also contained a function CISA described as resembling “a reverse backdoor,” which
            could connect to that address, enable the network interface even after a user had disabled it, and download
            and run remote files without an integrity check. CISA flagged the Epsimed MN-120 as a relabeled version of
            the same device.
          </p>
          <p className="mt-4 leading-relaxed text-cream/90">
            CISA said the behavior was “very unlikely to be an alternative update mechanism,” because it lacked
            integrity checking and version tracking. On 25 February 2025, Update A added CVE-2025-1204. Claroty’s
            Team82, which reported that additional vulnerability, said the flaw is “most likely not a hidden backdoor,
            but instead an insecure/vulnerable design.” Both readings are kept. CISA’s language describes backdoor-like
            behavior and does not assert intent. Claroty’s researchers lean toward negligent design.
          </p>
          <p className="mt-4 leading-relaxed text-cream/90">
            CISA and the FDA recommended removing affected monitors from networks, or blocking the hard-coded addresses
            and limiting use to local, offline monitoring. The FDA said it was not aware of confirmed incidents or
            patient injuries at the time of its advisory. As of the 25 February 2025 update, disconnection or isolation
            was still the published mitigation. No firmware fix from Contec was found in the sources opened for this
            page.
          </p>
          <Label>Evidence label: Confirmed for the CISA and FDA findings. The design-versus-backdoor reading is Disputed between those named sources.</Label>
        </section>

        <section className="mt-10" id="myq">
          <h2 className="font-serif text-3xl text-cream">9. A capability switched off after sale</h2>
          <p className="mt-4 leading-relaxed text-cream/90">
            In late October and November 2023, Chamberlain Group, maker of Chamberlain and LiftMaster openers, blocked
            the API that community integrations, including Home Assistant, used to read garage-door status and send
            commands. The company attributes an installed base of more than 36 million homes to those brands.
            Chamberlain’s chief technology officer said the decision protected “10 million+ users” and authorized
            partners, and that unauthorized integrations were about 0.2 percent of the user base but had at times
            accounted for more than half of server traffic.
          </p>
          <p className="mt-4 leading-relaxed text-cream/90">
            Coverage described the company post as appearing in late October 2023 and updated about 7 November 2023. A
            28 November date was not confirmed from the company page, so it is not used. Home Assistant announced the
            removal on 6 November 2023. The integration came out of the software in the 6 December 2023 release, after
            Chamberlain did not agree an accommodation. In late 2025, Security+ 3.0 on newer openers blocks third-party
            controllers at the protocol, not only at the cloud API.
          </p>
          <Label>Evidence label: Confirmed for the block, the company’s stated reasons, the December removal, and the later protocol change.</Label>
          <p className="mt-3 leading-relaxed text-cream/90">
            Nothing here was a hidden component, and no vulnerability was exploited. A capability people had used was
            switched off after purchase. The company and the projects it cut off describe that decision differently.
            Both accounts are kept.
          </p>
        </section>

        <section className="mt-10" id="rules">
          <h2 className="font-serif text-3xl text-cream">10. What the rules cover, and what they do not</h2>
          <h3 className="mt-6 font-serif text-2xl text-cream">European Union</h3>
          <p className="mt-4 leading-relaxed text-cream/90">
            The Cyber Resilience Act entered into force on 10 December 2024. The duty to report actively exploited
            vulnerabilities and severe incidents began on 11 September 2026. Most remaining obligations, including
            security-by-design and conformity, apply from 11 December 2027. Penalties can reach €15 million or 2.5
            percent of worldwide annual turnover, whichever is higher. Those figures are from the European Commission
            summary opened on 9 November 2026, not from a law-firm recap.
          </p>
          <p className="mt-4 leading-relaxed text-cream/90">
            ETSI EN 303 645, a June 2020 baseline for IoT hygiene such as banning universal default passwords, informed
            later UK and EU rules. The EN text was not re-opened for this edition.
          </p>
          <Label>Evidence label: Confirmed for the Act’s dates and fines. Reported for the ETSI standard.</Label>
          <h3 className="mt-6 font-serif text-2xl text-cream">United Kingdom</h3>
          <p className="mt-4 leading-relaxed text-cream/90">
            The Product Security and Telecommunications Infrastructure regime — the 2022 Act and the 2023 Regulations —
            came fully into force on 29 April 2024. The Office for Product Safety and Standards enforces it. Penalties
            reach £10 million or 4 percent of worldwide revenue. It bans default or easily guessed passwords and
            requires a public vulnerability-disclosure policy. Used products are excluded, as are named categories
            including electric-vehicle charge points, smart meters, desktops, laptops, and tablets.
          </p>
          <p className="mt-4 leading-relaxed text-cream/90">
            Schedule 3 excepts products to which the Medical Devices Regulations 2002 apply. A dedicated monitor in the
            CMS8000 class falls in that exception as the schedule is drafted. Paragraph 3(2) does not except a
            connectable product merely because it runs software covered by those medical-device rules. This page does
            not say that every healthcare-adjacent gadget is outside the regime.
          </p>
          <Label>Evidence label: Confirmed for the in-force date and for that medical-device distinction.</Label>
          <h3 className="mt-6 font-serif text-2xl text-cream">United States</h3>
          <p className="mt-4 leading-relaxed text-cream/90">
            There is no single mandatory US law, across product categories, for hidden features in consumer
            electronics. Enforcement has been case by case: the Federal Trade Commission in the Vizio and Lenovo
            matters, CISA and FDA advisories in healthcare, and the FBI’s public advisory on BADBOX. Those are US
            agency roles, not a reporting desk for readers in Canada.
          </p>
          <p className="mt-4 leading-relaxed text-cream/90">
            The voluntary US Cyber Trust Mark was set up by the FCC in March 2024. UL Solutions, the first Lead
            Administrator, withdrew at the end of 2025 amid an inquiry into the company’s ties to China. The FCC named
            the ioXt Alliance as replacement on 13 April 2026. The 8 November 2026 draft said the program had not yet
            begun accepting product applications, so no device carried the mark. That “no product yet” sentence is
            Reported. It was not re-checked against the FCC filing window on 9 November 2026.
          </p>
          <h3 className="mt-6 font-serif text-2xl text-cream">Canada, the UAE, India, and China</h3>
          <p className="mt-4 leading-relaxed text-cream/90">
            This investigation did not find a dedicated, enforceable consumer-product supply-chain disclosure law in
            these four jurisdictions comparable to the EU Act or the UK regime. That is a declared gap, not a finding
            that no rule exists.
          </p>
          <Label>Evidence label: Gap, declared.</Label>
        </section>

        <section className="mt-10" id="checks">
          <h2 className="font-serif text-3xl text-cream">11. What you can check</h2>
          <p className="mt-4 leading-relaxed text-cream/90">
            These points follow the cases above. Longer device checks already published on this site are linked, not
            copied.
          </p>
          <ul className="mt-6 space-y-6">
            {deviceChecks.map((item) => (
              <li key={item.title}>
                <h3 className="font-serif text-2xl text-cream">{item.title}</h3>
                <p className="mt-2 leading-relaxed text-cream/90">{item.body}</p>
                {item.links.length > 0 ? (
                  <ul className="mt-2 space-y-1">
                    {item.links.map((link) => (
                      <li key={link.href}>
                        {'external' in link && link.external ? (
                          <ExternalLink className={linkClass} href={link.href}>
                            {link.label}
                          </ExternalLink>
                        ) : (
                          <SiteLink className={linkClass} href={link.href}>
                            {link.label}
                          </SiteLink>
                        )}
                      </li>
                    ))}
                  </ul>
                ) : null}
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-10" id="corrections">
          <h2 className="font-serif text-3xl text-cream">Corrections and limits</h2>
          <p className="mt-4 text-sm text-muted">
            <time dateTime="2026-11-09">9 November 2026</time>. Applied from the pre-publication review. Social drafts
            were not published.
          </p>
          <ul className="mt-4 list-disc space-y-3 pl-5 leading-relaxed text-cream/90">
            <li>No Contec firmware fix was found after the 25 February 2025 CISA update. Isolation remains the last published mitigation in the sources opened.</li>
            <li>Sony, Hisense, and TCL were not checked against a live Texas docket. Samsung and LG settlements are reported from Attorney General press releases only.</li>
            <li>No Unitree reply to the G1 telemetry preprint was found.</li>
            <li>The “about 50 Keenadu models” figure stays Reported, unverified. It is not in the headline.</li>
            <li>No consumer-facing counterfeit-component case was added beside the 2012 Senate report.</li>
            <li>Canada, the UAE, India, and China were not surveyed to the same standard as the EU, UK, and US sections.</li>
            <li>CISA’s “reverse backdoor” wording and Claroty’s “insecure design” wording are both kept.</li>
            <li>Bloomberg’s Supermicro account and the denials are both kept. Neither is this page’s conclusion.</li>
            <li>The Nest Guard meta line in the draft called the device a smart speaker. The body, and this page, call it a security hub.</li>
          </ul>
        </section>

        <section className="mt-10" id="sources">
          <h2 className="font-serif text-3xl text-cream">Source register</h2>
          <p className="mt-4 leading-relaxed text-cream/90">
            “Opened 9 November 2026” means the review retrieved that source. It is not the record status Verified. Rows
            marked not opened stay unverified. A URL is printed only when the review recorded one.
          </p>
          <ul className="mt-6 space-y-6">
            {sourceRegister.map((row) => (
              <li className="border-t border-gold/20 pt-4" key={row.id}>
                <p className="font-semibold text-cream">
                  {row.id}. {row.title}
                </p>
                <p className="text-sm text-muted">
                  {row.publisher} · {row.date}
                </p>
                <p className="mt-1 text-sm text-gold">{row.review}</p>
                <p className="mt-2 leading-relaxed text-cream/90">{row.note}</p>
                {row.url ? (
                  <ExternalLink className={`${linkClass} mt-2 inline-block break-all`} href={row.url}>
                    {row.publisher}: {row.title}
                  </ExternalLink>
                ) : null}
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-10" id="ledger">
          <h2 className="font-serif text-3xl text-cream">Claim ledger</h2>
          <ul className="mt-6 space-y-4">
            {claimLedger.map((row) => (
              <li key={row.n}>
                <p className="text-cream">
                  {row.n}. {row.claim}
                </p>
                <p className="text-sm text-muted">Sources: {row.sources}</p>
                <p className="text-sm text-gold">{row.label}</p>
              </li>
            ))}
          </ul>
        </section>

        <RelatedReadingFor sourcePath={supplyChainPath} />
      </article>
    </>
  )
}
