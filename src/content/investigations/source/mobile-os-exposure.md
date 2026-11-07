---
title: "Mobile Exposure"
slug: "mobile-os-exposure"
meta_description: "Evidence-led guide to iPhone, Android, cloud and Bluetooth risks, with model-specific support checks, conditional exposure scenarios and safety-first advice."
last_updated: "2026-11-07"
---

# Mobile Exposure

*Evidence review: 7 November 2026.*

A phone can be up to date while its owner’s cloud account is exposed. An old operating-system version does not, by itself, prove a device has stopped receiving security fixes. A Bluetooth tracker can reveal someone’s movements without breaking into their phone at all.

These distinctions matter. Treating every threat as the same kind of “phone hack” produces misleading numbers and advice that may not address the actual problem. This investigation separates software vulnerabilities, account access, cloud encryption, malicious apps, targeted surveillance and unwanted tracking. It does not estimate how many people are compromised worldwide. It does show conditional exposure scenarios: how large a missing-fix population could be under explicit assumptions, without treating those assumptions as measured prevalence.

**If someone may be monitoring or abusing you, read the safety-planning section before changing settings, removing apps or disabling a tracker. Immediate physical safety comes first.**

## 1. iPhone: security updates and targeted spyware

### Check the supported update for your actual device

Apple’s security-release register lists updates for different software branches and device models. An older major version is therefore not automatically evidence of an abandoned phone. Conversely, an update being published does not establish that it has been installed on your device. Check Settings and the device eligibility in Apple’s [security-release register](https://support.apple.com/en-us/100100).

Keep the operating system and apps updated. Use a strong device passcode, protect the Apple Account, and review the availability of Stolen Device Protection. These are complementary precautions, not a promise that compromise is impossible. Apple includes them in its [general security guidance](https://support.apple.com/en-us/102174).

### Older iPhones need separate cohorts

The following is a **7 November 2026 snapshot** of Apple’s release register and current compatibility guide, not a prediction of future support. A release listed for a model does not prove every subsequently disclosed flaw has been backported to it. [Source 1](https://support.apple.com/en-us/100100) [Source 24](https://support.apple.com/guide/iphone/iphone-models-compatible-with-ios-27-iphe3fa5df43/ios)

| Model cohort | Verified software branch / current compatibility | Latest listed security release for that cohort in the register checked | What remains unknown |
| --- | --- | --- | --- |
| iPhone 8, 8 Plus and X | iOS 16 branch; absent from current iOS 27 compatibility list | iOS 16.7.16, 11 May 2026 | Future security-support end date and completeness of backports are not established here |
| iPhone XR, XS and XS Max | iOS 18 branch; absent from current iOS 27 list | iOS 18.7.11, 26 October 2026 | Future end date and complete fix parity with newer branches are not established |
| iPhone 11 family and listed later models | iOS 27 compatible | iOS 27.2, 26 October 2026 | Installation status and exposure on an individual device require inspection |
| iPhone SE, first generation | iOS 15 branch; absent from current iOS 27 list | iOS 15.8.8, 11 May 2026 | Future end date and completeness of backports are not established |
| iPhone SE, second and third generations | Explicitly listed as iOS 27.2 compatible | iOS 27.2, 26 October 2026, combining compatibility guide with release date | Installation status remains unknown |

A long interval since a listed release warrants checking for available updates and model-specific advice. It does not, alone, prove Apple has declared a fixed end date or that a particular exploit works. Nor do historic sales tell us how many of each generation remain active. The per-million scenarios below can be applied separately to each cohort when its actual population and fix status are known.

### Mercenary spyware is real; notifications are not an infection census

Apple describes mercenary spyware as exceptionally sophisticated, resource-intensive attacks directed at specific people, often because of who they are or what they do. Its guidance says: “The vast majority of users will never be targeted by such attacks.” That is context, not a reason to dismiss a credible warning.[Source 2](https://support.apple.com/en-us/102174)

Apple describes its threat notifications as high-confidence alerts of individual targeting. A notification is not, by itself, proof of successful infection, and notifications cannot be added up as a count of confirmed victims. Apple also says its investigations cannot achieve absolute certainty.[Source 2](https://support.apple.com/en-us/102174)

To check whether a warning is genuine, navigate independently to **account.apple.com** and sign in. Apple says its threat notifications never ask recipients to click links, open files, install apps or profiles, or supply a password or verification code by email or phone. A genuine notification is visible on the account page.[Source 2](https://support.apple.com/en-us/102174)

For people at elevated risk, **Lockdown Mode** reduces attack surface by limiting certain messages, web technologies, invitations and other features. It is optional, has usability tradeoffs, and is not a universal cure. Apple recommends expert help for notified users, including Access Now’s Digital Security Helpline.[Source 2](https://support.apple.com/en-us/102174) [Source 3](https://support.apple.com/en-us/105120)

## 2. iCloud: authentication and encryption solve different problems

A strong sign-in protects access to an account. End-to-end encryption determines who holds the keys to particular data. Neither should be described as a substitute for the other.

Under iCloud’s standard protection, data is encrypted in transit and at rest, but Apple holds keys for some categories, including ordinary iCloud backups. Other categories have end-to-end protection. **Advanced Data Protection (ADP)** extends end-to-end encryption to additional categories, including iCloud Backup, Photos and Notes, with keys available through trusted devices.[Source 4](https://support.apple.com/en-us/102651)

There are important boundaries:

- iCloud Mail, Contacts and Calendars do not gain end-to-end encryption through ADP.
- Some metadata remains under standard protection.
- Sharing and collaboration have exceptions; sharing with “anyone with the link,” for example, does not receive ADP’s end-to-end protection.
- Recovery becomes the user’s responsibility for protected data. Apple cannot supply missing encryption keys. Plan for a recovery contact or recovery key and understand the consequences before changing protection.[Source 4](https://support.apple.com/en-us/102651)

Availability is not universal. Apple’s UK notice says users there who have not already enabled ADP cannot enable it. The notice also describes a transition for existing users; it is not evidence that every existing account retains the feature indefinitely. Check Apple’s current regional guidance rather than relying on an old setup guide.[Source 5](https://support.apple.com/en-us/122234)

A leaked password is not proof that a cloud provider’s servers were breached. Account compromise, access through an unlocked trusted device, provider-held keys and lawful demands for data are different mechanisms. This investigation does not make a blanket claim that a service has “never been breached,” or offer a legal conclusion about government access.

## 3. Android: model support, installed fixes and app permissions

### There is no single update policy for every Android phone

Android security bulletins cover platform, upstream Linux kernel and system-on-chip fixes. Device-specific bulletins are separate. A published fix is not evidence that every affected handset has received it. [Source 6](https://source.android.com/docs/security/bulletin)

Check the exact model’s manufacturer policy, the security update level shown in Settings, and available system and app updates. A security patch level identifies a set of fixes; it is not simply the date the owner last downloaded an update. An old major Android version alone cannot establish patch support or compromise.

As one model-specific example, Google says Pixel 8 and later phones receive seven years of operating-system and security updates from their first US Google Store availability—not seven years from each buyer’s purchase. Google also notes that rollout timing depends on device and carrier. That policy must not be generalized to other manufacturers or every Pixel generation.[Source 7](https://support.google.com/pixelphone/answer/4457705)

### Samsung, Xiaomi and other manufacturers are not one cohort

Country of origin is not evidence that a phone is vulnerable. Neither a Pixel policy nor a flagship promise represents the whole Android installed base. Separate **brand → model → age → regional/carrier SKU → installed patch level** before calculating exposure.

| Manufacturer or family | What the primary sources checked establish | What must not be assumed |
| --- | --- | --- |
| Samsung Galaxy | Samsung lists monthly, quarterly and biannual schedules for selected devices, with support extended up to seven years for selected Galaxy devices. The checked list places S24-family models in the monthly group and S22-family models in the quarterly group. Timing varies by market, provider and model; some carriers may provide quarterly updates for models otherwise listed monthly.[Source 20](https://security.samsungmobile.com/workScope.smsb) | “Up to seven years” is not seven years for every Galaxy, nor proof of installation |
| Xiaomi / Redmi / POCO | Xiaomi’s center covers all three brands, maintains an EOL list and points to model-specific support information. Its general text says typically at least two years from first shipment, with longer periods for some models; the page checked bears a 9 September 2026 update date.[Source 21](https://trust.mi.com/misrc/updates/phone?tab=aerdata) | A generic minimum does not override a longer model-specific promise; regional EOL entries cannot be generalized worldwide |
| OnePlus | Its AER page says updates once in 90 days for listed models, with distinct end dates: OnePlus 12, February 2029; OnePlus 13, January 2031; Nord CE4 Lite 5G, July 2027.[Source 22](https://security.oneplus.com/en/mend) | This page explicitly limits itself to AER users; do not apply its schedule to every retail or regional variant |
| OPPO | Its security center publishes Android security patch-maintenance notices, including a November 2026 notice in the page checked.[Source 23](https://security.oppo.com/en/mend) | A monthly notice does not establish that every OPPO handset received an update or share a single support term |
| Google Pixel | Seven-year and five-year policy cohorts are defined above.[Source 7](https://support.google.com/pixelphone/answer/4457705) | Pixel policy is not an Android-wide policy |
| Realme; Vivo / iQOO; Motorola; Transsion’s Tecno / Infinix / itel | No model-specific primary support window verified in this review | Unknown here does not mean unsupported; obtain the exact model policy and delivered patch level |
| Huawei; Honor | No model-specific support window verified here; identify exact OS and regional variant first | Do not put a non-Android OS into an Android denominator merely because of branding or historical Android use |

A useful cohort worksheet records active units, exact model/SKU, release age, promised end date and cadence, latest offered patch, installed patch, applicable flaw and required attack conditions. A promise, an offered update and an installed update are three different observations.

For quantitative work, sum **N(cohort) × affected fraction(cohort) × unpatched fraction among affected devices(cohort) × prerequisite fraction among affected unpatched devices(cohort)** across **non-overlapping cohorts**. Report unknowns rather than assigning unsupported models or populations to an entire brand. Shipment market share is not active installed-base share. A sensitivity case can vary the unknown fractions, but must not disguise those assumptions as observed vendor failure rates.

### Malicious apps can exploit trust as well as software flaws

Google warns that harmful apps may arrive through unsolicited delivery or voicemail messages and persuade people to change sensitive settings. Accessibility access can let an app read screen content and interact with other apps. Those capabilities are valuable for legitimate assistive tools, but can be dangerous when granted to an untrusted app.[Source 8](https://support.google.com/android/answer/12623953)

The practical distinction is **who made the app, why it needs the capability, and whether the request makes sense**—not whether Accessibility itself is suspicious. Do not disable assistive technology simply because a security article mentions it.

Prefer trusted app sources. Do not install an unsolicited APK because an advertisement, caller or message claims it is needed to protect a bank account or receive a delivery. Do not override restricted-setting warnings merely because an unfamiliar app instructs you to do so.[Source 8](https://support.google.com/android/answer/12623953)

On devices that provide Google Play Protect, keep it enabled. Google says it checks Play Store apps and apps from other sources, periodically scans the device, and may warn about, disable or remove harmful apps. These are protective capabilities, not a guarantee that every harmful app will be caught. Nor is there evidence here for the claim that every banking trojan requires the same installation method or permissions.[Source 9](https://support.google.com/googleplay/answer/2812853)

### Account protection is another layer

Google’s **Advanced Protection Program** strengthens Google Account access using passkeys or security keys, restricts third-party data access, adds download protections and applies extra recovery checks. Understand compatibility restrictions and establish backup access before enrolling.[Source 10](https://support.google.com/accounts/answer/7519408)

This is an account-security program. It must not be described as blanket end-to-end encryption for everything stored in Google services, or confused with a similarly named device-level feature.

## 4. Bluetooth: separate research findings from unwanted tracking

### A demonstrated vulnerability needs a defined scope

Bluetooth security research is substantive. Bluetooth SIG lists notices for issues including key negotiation, impersonation and pairing confusion.[Source 11](https://www.bluetooth.com/learn-about-bluetooth/key-attributes/bluetooth-security/reporting-security/) Its BLUFFS notice describes conditions in which a nearby attacker could interfere with encryption establishment between vulnerable devices. The notice sets out preconditions and mitigations; it does not establish that every phone is currently exploitable or that every device has received a fix.[Source 12](https://www.bluetooth.com/learn-about-bluetooth/key-attributes/bluetooth-security/bluffs-vulnerability/)

For any vulnerability claim, ask:

1. Which specification, implementation and device were affected?
2. What software or accessory firmware was tested?
3. What proximity, connection state or other preconditions were required?
4. Is the evidence a research demonstration, a vendor advisory or documented exploitation in the wild?
5. Has a mitigation actually reached the device concerned?

CISA’s Known Exploited Vulnerabilities catalog is useful evidence for listed exploited vulnerabilities. It is not a complete inventory of every attack. A keyword search returning no “Bluetooth” entries would not prove that Bluetooth attacks do not occur, or certify a patched phone as immune.[Source 13](https://www.cisa.gov/known-exploited-vulnerabilities-catalog)

Keep phones and accessories updated when their manufacturers provide updates. Reject unexpected pairing requests and review accessories you recognize. Bluetooth range is not a universal fixed distance. A pairing popup, disconnection or nuisance notification is also not, by itself, proof of phone compromise.

On iPhone, the Bluetooth control in Control Center disconnects accessories while leaving Bluetooth available for some functions. Apple documents a separate Settings control to turn it off. Airplane Mode should not be assumed to disable every radio in every configuration.[Source 14](https://support.apple.com/en-us/102412)

### A tracker does not need to compromise your phone

An unwanted Bluetooth tag can use a finding network to report its location through nearby devices. That is a tracking problem, not necessarily a phone-infection problem.

Apple and Google document unwanted-tracker alerts for compatible devices. Android also provides a manual scan. Compatibility, settings, separation from the owner and movement conditions affect detection. An alert can concern a borrowed item; the absence of an alert does not establish that no tracking is occurring.[Source 15](https://support.apple.com/en-us/119874) [Source 16](https://support.google.com/android/answer/13658562)

**Turning off Bluetooth or location services on your own phone does not disable someone else’s tracker or prevent other nearby devices from reporting its location.** Apple and Google both make that distinction. Disabling the tracker itself requires device-specific instructions—but first consider whether doing so could increase danger.[Source 15](https://support.apple.com/en-us/119874) [Source 16](https://support.google.com/android/answer/13658562)

## 5. What the evidence can—and cannot—count

This investigation does not claim a measured global “unsupported phones” or annual spyware-victim total. Those estimates require compatible, dated population and support data that are not established here. Conditional scenarios below show scale without claiming those missing measurements exist.

| Measure | What it can establish | What it cannot establish alone |
| --- | --- | --- |
| OS-version share | Distribution in the measured sample and period | Worldwide unsupported devices or infected users |
| Vendor support policy | Promised support for a specified model and period | Whether an individual device installed its fixes |
| Security bulletin or CVE | A described vulnerability and affected scope | How many people were attacked |
| KEV entry | CISA’s inclusion of a vulnerability known to be exploited | Comparative platform safety or total victim counts |
| Threat notification | A provider’s warning of targeting | Confirmed infection or an annual victim census |
| Tracker alert | Detection meeting the alert system’s conditions | The owner’s intent or the absence of other tracking |

Multiplying a broad device population by an unrelated telemetry percentage creates precision without a reliable denominator. An older OS, an unsupported device, an exploitable device, a targeted person and a confirmed compromise are not interchangeable units.

### How many could be exposed? A conditional model

Undocumented attacks are a reason to model uncertainty—not a reason to count every phone as compromised. Define **potential technical exposure** here as a device missing a fix that applies to its component and configuration, with the preconditions for a specified attack present. That is different from an attacker choosing the device, executing the attack or successfully compromising it.

The model is:

**Potentially exposed devices = population × fraction affected by the specified flaw × fraction of those affected devices missing its fix × fraction of that unpatched group meeting attack preconditions.**

The fractions must be conditional on the preceding group. An old OS share is not a substitute for any of them.

**A dated scale anchor:** Google reported **more than 3 billion active Android devices on 10 May 2023**.[Source 19](https://blog.google/products-and-platforms/platforms/android/android-updates-io-2023/) That is an ecosystem-device figure, not a verified 2026 smartphone-only population. The scenarios use **exactly 3 billion as a historical reference scale**, not as a current count or a universal flaw’s affected population.

| Illustrative missing-applicable-fix fraction across that reference population | Arithmetic | Devices missing an applicable fix under the assumption |
| --- | --- | --- |
| Low sensitivity case: **1%** | 3,000,000,000 × 0.01 | **30 million** |
| Middle sensitivity case: **5%** | 3,000,000,000 × 0.05 | **150 million** |
| High sensitivity case: **10%** | 3,000,000,000 × 0.10 | **300 million** |

**Model assumption.** **The 1%, 5% and 10% fractions are illustrative assumptions—not measured patch gaps, assigned probabilities or confidence limits.** Here each assumed fraction combines flaw applicability and a missing fix. The cases are chosen to show sensitivity across a tenfold gap, not because we know which is most likely. Even the middle case is not a best estimate.

**Model assumption.** Missing a fix is broader than being reachable by a particular attack. If, additionally and purely hypothetically, **10% of each missing-fix group** met that attack’s preconditions, the corresponding potentially exposed counts would be **3 million, 15 million and 30 million**. If the prerequisites were different, the results would change proportionally. These are scenario outputs—not newly discovered vulnerable devices or victims.

For a phone-only population you can actually inventory, the same missing-fix assumptions yield **10,000, 50,000 or 100,000 per million phones**. With the additional assumed 10% prerequisite fraction, that becomes **1,000, 5,000 or 10,000 potentially exposed phones per million**. Those normalized calculations apply to either an Android or an iPhone fleet, but do not establish that the two fleets have the same gap or risk.

Keep the channels separate:

| Channel | What must define the denominator and relevant gap | Why a single global total would mislead |
| --- | --- | --- |
| Android software | Exact affected component/models, missing applicable fix, attack prerequisites | A broad Android device base includes devices outside a given flaw’s scope |
| iPhone software | Affected iPhone models/builds and installed fixes | A different major iOS branch can still receive fixes; no current phone-only denominator is established here |
| Cloud accounts | Accounts holding relevant data, their access controls, and the chosen exposure mechanism | Devices are not accounts; absence of ADP alone is not proof of account takeover |
| Bluetooth exploitation | Vulnerable implementations and accessories, plus required proximity and connection conditions | A radio being enabled is not sufficient to establish exploitability |
| Unwanted trackers | People/items actually encountering unwanted trackers and detection conditions | Tracker stalking does not require a software vulnerability on the person’s phone |

These populations can overlap. **Do not add the rows together**, label them unique people, or treat an observed attack count as a cap on undiscovered exposure. A meaningful empirical estimate would need model-specific inventories, installed-fix measurements and a defined threat, not simply a larger headline number.

### Numbers we can defend—and their limits

These are dated provider statements checked on **7 November 2026**, not estimates of compromised phones.

| Number | Source, date and unit | Denominator or scope | What it means—and does not mean |
| --- | --- | --- | --- |
| **15 → 25 data categories** | Apple iCloud overview, published 5 January 2026; categories with end-to-end encryption under standard protection versus ADP | Apple’s defined iCloud categories, subject to its metadata and sharing exceptions | ADP expands the category coverage. It is not a percentage of every file, every byte or every user’s data, and is subject to availability.[Source 4](https://support.apple.com/en-us/102651) |
| **Over 150 countries** | Apple threat-notification guidance, published 13 August 2026; countries containing notified users since 2021 | Cumulative geographic reach of Apple notifications | Targeting is international. This is not 150 victims, an annual count, or a count of confirmed infections.[Source 2](https://support.apple.com/en-us/102174) |
| **7 years** | Google Pixel policy, checked 7 November 2026; promised OS and security support | Pixel 8 and later, counted from first US Google Store availability | A defined model-policy window—not seven years remaining when a used phone is bought, or proof that all devices installed updates.[Source 7](https://support.google.com/pixelphone/answer/4457705) |
| **5 years** | Same Google policy, checked 7 November 2026; promised OS and security support | Listed Pixel 6/7 generation phones and Pixel Fold, counted from first US Google Store availability | Support varies even within one manufacturer. It does not describe every Android brand.[Source 7](https://support.google.com/pixelphone/answer/4457705) |
| **Android 6 and later** | Google unknown-tracker guidance, checked 7 November 2026; minimum OS generation for the documented feature | Eligible Android devices with the feature, compatible trackers and required settings | A feature-eligibility threshold, not an Android security-support promise or a detection-success rate.[Source 16](https://support.google.com/android/answer/13658562) |
| **13 of 17 vulnerabilities** | Google TAG/Mandiant review published 27 March 2024; zero-day vulnerabilities exploited in 2023 and attributed to commercial surveillance vendors | Known exploited zero-days targeting Google products and Android ecosystem devices in that review; not a phone-only sample | Confirmed within that historical scope: direct evidence of exploitation. It is not 13 victims, all mobile exploits, or a 2026 rate.[Source 18](https://blog.google/innovation-and-ai/technology/safety-security/a-review-of-zero-day-in-the-wild-exploits-in-2023/) |

Why not publish an empirical worldwide “at-risk” total? It would require a defined risk, a representative device population, model-specific support and installed-fix information, and a consistent measurement date. The available material does not establish those inputs. The numbers above remain useful without multiplying unrelated datasets or presenting exposure as confirmed compromise.

## 6. A practical threat matrix

*These are mechanisms and defensive priorities, not measured probabilities or a ranking of platforms.*

**Status labels.** **Confirmed** means documented exploitation or targeting in the wild, inside the scope named. **Demonstrated** means shown under stated research conditions, not proof of widespread use. **Documentation** means a vendor describes a feature or mechanism. It is not a confirmed attack. **Model assumption** means a calculation under stated fractions, not a measurement.

| Exposure | Status | Key distinction or precondition | Defensive priority |
| --- | --- | --- | --- |
| Software vulnerability | Documentation | Affected component and installed fix matter | Supported device; system, app and accessory updates |
| Targeted mercenary spyware | Confirmed for documented individual targeting. A notification is not confirmed infection | Individual targeting; notification does not equal infection | Verify warning; expert assistance; consider Lockdown Mode |
| Malicious app or abuse of permissions | Documentation | Installation, trust and granted capabilities matter | Trusted sources; Play Protect where available; review sensitive permissions |
| Account takeover | Documentation | Access to an account can expose data without OS exploitation | Unique credentials, appropriate MFA, recovery planning |
| Cloud-data exposure | Documentation | Encryption category, keys and sharing rules matter | Understand protection settings and recovery limits |
| Physical access or coercion | Documentation | Someone can access the handset or compel access | Strong lock; individualized physical and legal safety advice |
| Partner monitoring or stalkerware | Documentation | Shared access or monitoring software may be involved | Safety plan before cutting off access |
| Unwanted Bluetooth tracker | Documentation | Tracking can occur through other nearby devices | Alerts and safe assessment; device-specific response |
| Bluetooth vulnerability | Demonstrated | Defined implementation and attack conditions matter | Vendor guidance and updates; no universal immunity claim |

## 7. Checklists: start with the risk you actually face

### Everyday iPhone and cloud-account checks

- Install the latest supported updates offered for the device and apps.
- Use a strong passcode and Apple Account password; enable two-factor authentication and review trusted access.
- Review Stolen Device Protection and keep recovery arrangements usable.
- Assess ADP availability, sharing exceptions and recovery responsibilities before enabling it.
- Verify threat warnings through the account page rather than responding to requests for codes or credentials. [Source 1](https://support.apple.com/en-us/100100) [Source 2](https://support.apple.com/en-us/102174) [Source 3](https://support.apple.com/en-us/105120) [Source 4](https://support.apple.com/en-us/102651) [Source 5](https://support.apple.com/en-us/122234)

### Everyday Android checks

- Check model-specific support and the installed security update level, not just the major Android version.
- Update the operating system, browser and apps; check available system-component updates.
- Keep Play Protect enabled where provided. Treat prompts to disable protections or enable sensitive settings for an unsolicited app as warnings.
- Review powerful permissions in context, without removing legitimate accessibility support.
- Protect the Google Account and plan recovery; consider Advanced Protection if its restrictions fit your needs.
- Review unknown-tracker alert settings and learn the manual-scan option on your device. [Source 6](https://source.android.com/docs/security/bulletin) [Source 7](https://support.google.com/pixelphone/answer/4457705) [Source 8](https://support.google.com/android/answer/12623953) [Source 9](https://support.google.com/googleplay/answer/2812853) [Source 10](https://support.google.com/accounts/answer/7519408) [Source 16](https://support.google.com/android/answer/13658562)

### If you face unusually high targeted risk

Use a supported device, keep updates current and seek tailored help. For a genuine Apple threat notification, follow Apple’s guidance on expert support and consider Lockdown Mode’s tradeoffs. Do not assume a generic app scan can rule out sophisticated spyware. Seek expert advice before wiping a device that may contain relevant evidence; if you are in immediate danger, prioritize safety over preserving it. [Source 2](https://support.apple.com/en-us/102174) [Source 3](https://support.apple.com/en-us/105120) [Source 17](https://www.techsafety.org/spyware-and-stalkerware-phone-surveillance)

### If you suspect tracking or partner surveillance

**Plan → seek help → document if safe → secure when safe.** This is a safety-led sequence, not a requirement to delay escape or emergency help.

- Use an independent, safer device to seek support if the phone may be monitored.
- Consider contacting a specialist domestic-abuse advocate or trusted support person. If danger is immediate, seek emergency assistance appropriate to your location.
- Before changing passwords, removing linked access, uninstalling software or disabling a tracker, consider whether loss of access could alert an abusive person or escalate their behaviour.
- Preserve alerts, identifiers and other evidence only if safe. A reset or removal can destroy information, and restoring backups can reintroduce problems.
- Follow a personalized plan for securing the phone and accounts. Battery drain, heat or unfamiliar sounds alone do not diagnose stalkerware.[Source 15](https://support.apple.com/en-us/119874) [Source 16](https://support.google.com/android/answer/13658562) [Source 17](https://www.techsafety.org/spyware-and-stalkerware-phone-surveillance)

## 8. Myths to retire

**“An iPhone cannot be targeted.”** Apple’s threat-notification and Lockdown Mode guidance exists because targeted attacks are real. [Source 2](https://support.apple.com/en-us/102174) [Source 3](https://support.apple.com/en-us/105120)

**“An older OS means the device is unsupported.”** Check the model, software branch and security releases; the major number is not enough. [Source 1](https://support.apple.com/en-us/100100) [Source 6](https://source.android.com/docs/security/bulletin) [Source 7](https://support.google.com/pixelphone/answer/4457705)

**“Encrypted in the cloud means only I can decrypt it.”** At-rest encryption and end-to-end encryption have different key arrangements. Check categories and sharing exceptions.[Source 4](https://support.apple.com/en-us/102651)

**“No Bluetooth catalog entry means no Bluetooth risk.”** A catalog is not proof of the absence of unlisted attacks.[Source 11](https://www.bluetooth.com/learn-about-bluetooth/key-attributes/bluetooth-security/reporting-security/) [Source 12](https://www.bluetooth.com/learn-about-bluetooth/key-attributes/bluetooth-security/bluffs-vulnerability/) [Source 13](https://www.cisa.gov/known-exploited-vulnerabilities-catalog)

**“Turning off my phone’s Bluetooth stops a hidden tag.”** Other devices can still help locate the tag. [Source 15](https://support.apple.com/en-us/119874) [Source 16](https://support.google.com/android/answer/13658562)

**“No tracker alert or clean app scan proves I am safe.”** These checks have defined capabilities and conditions. They are not a comprehensive assessment. [Source 9](https://support.google.com/googleplay/answer/2812853) [Source 15](https://support.apple.com/en-us/119874) [Source 16](https://support.google.com/android/answer/13658562) [Source 17](https://www.techsafety.org/spyware-and-stalkerware-phone-surveillance)

## 9. Plain-language glossary

- **Zero-click:** An attack that does not require the target to click a link or open a file; the affected component and conditions still matter.
- **Zero-day / n-day:** A vulnerability used before a fix is available / an already disclosed vulnerability, often with an available fix.
- **Mercenary spyware:** Commercially developed surveillance tooling used for sophisticated individual targeting.
- **KEV:** CISA’s catalog of vulnerabilities known to have been exploited; not a victim database.
- **E2EE:** End-to-end encryption, in which protected content is decrypted through authorized endpoints rather than provider-held content keys.
- **ADP:** Apple’s Advanced Data Protection for selected iCloud data, subject to exceptions and availability.
- **Lockdown Mode:** Apple’s optional restrictive protection for elevated targeted risk.
- **AOSP:** Android Open Source Project; not a guarantee of update delivery to every handset.
- **Security patch level:** A software security-fix level, not a count of attacks or necessarily the installation date.
- **Sideloading:** Installing an app outside the device’s usual store distribution route; not synonymous with malware.
- **Accessibility / overlay:** Features enabling assistive interaction / content displayed over other apps; capabilities that require appropriate trust.
- **Passkey / security key:** Authentication methods that can provide phishing-resistant sign-in. Protect the devices and recovery arrangements too.
- **Credential stuffing / MFA fatigue:** Trying reused credentials across services / pressuring a person to accept repeated authentication requests.
- **SIM swap:** Transfer or takeover of a mobile number, potentially affecting SMS-based authentication.
- **RCE / privilege escalation / DoS:** Remote code execution / gaining greater permissions / disrupting availability. These are different outcomes.
- **BLE:** Bluetooth Low Energy; used by many accessories and item trackers.


## Related pages in this investigation

These pages go further on one channel. They do not replace the distinctions above.

- [iPhone zero-click spyware](/investigations/digital-exposure/iphone-zero-click-spyware/)
- [Android accessibility-service malware](/investigations/digital-exposure/android-accessibility-service-malware/)
- [Bluetooth and BLE tracking](/investigations/digital-exposure/bluetooth-ble-tracking/)
- [Stalkerware and safety planning](/investigations/digital-exposure/stalkerware-safety-planning/)
- [SIM swap and account takeover](/investigations/digital-exposure/sim-swap-account-takeover/)
- [Cloud photos and account takeover](/investigations/digital-exposure/cloud-photo-account-takeover/)

## Sources

The linked primary documentation supports the specific features and distinctions discussed above. Vendor documentation describes capabilities; it is not independent proof of effectiveness against every attack. Bluetooth notices establish reported vulnerabilities, not population-wide exploitation. This is a practical, evidence-led synthesis, not a forensic examination of any reader’s device.

1. [Apple security releases](https://support.apple.com/en-us/100100)
2. [Apple threat notifications and mercenary spyware](https://support.apple.com/en-us/102174)
3. [About Lockdown Mode](https://support.apple.com/en-us/105120)
4. [iCloud data security overview](https://support.apple.com/en-us/102651)
5. [Advanced Data Protection in the United Kingdom](https://support.apple.com/en-us/122234)
6. [Android Security and Update Bulletins](https://source.android.com/docs/security/bulletin)
7. [Pixel software-update policies](https://support.google.com/pixelphone/answer/4457705)
8. [Android restricted settings](https://support.google.com/android/answer/12623953)
9. [Google Play Protect](https://support.google.com/googleplay/answer/2812853)
10. [Google Account Advanced Protection Program](https://support.google.com/accounts/answer/7519408)
11. [Bluetooth SIG security notices](https://www.bluetooth.com/learn-about-bluetooth/key-attributes/bluetooth-security/reporting-security/)
12. [Bluetooth SIG BLUFFS notice](https://www.bluetooth.com/learn-about-bluetooth/key-attributes/bluetooth-security/bluffs-vulnerability/)
13. [CISA Known Exploited Vulnerabilities catalog](https://www.cisa.gov/known-exploited-vulnerabilities-catalog)
14. [Bluetooth and Wi-Fi in Control Center](https://support.apple.com/en-us/102412)
15. [Apple unwanted-tracking guidance](https://support.apple.com/en-us/119874)
16. [Android unknown-tracker guidance](https://support.google.com/android/answer/13658562)
17. [NNEDV Safety Net: phone surveillance](https://www.techsafety.org/spyware-and-stalkerware-phone-surveillance)
18. [Google TAG/Mandiant 2023 exploited-zero-day review](https://blog.google/innovation-and-ai/technology/safety-security/a-review-of-zero-day-in-the-wild-exploits-in-2023/)
19. [Google Android ecosystem, 10 May 2023](https://blog.google/products-and-platforms/platforms/android/android-updates-io-2023/)
20. [Samsung security-update scope](https://security.samsungmobile.com/workScope.smsb)
21. [Xiaomi Security Center](https://trust.mi.com/misrc/updates/phone?tab=aerdata)
22. [OnePlus AER security-update policy](https://security.oneplus.com/en/mend)
23. [OPPO security-maintenance notices](https://security.oppo.com/en/mend)
24. [Apple iOS 27 model compatibility](https://support.apple.com/guide/iphone/iphone-models-compatible-with-ios-27-iphe3fa5df43/ios)
