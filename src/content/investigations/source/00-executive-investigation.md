---
title: "The Invisible Attack Surface"
subtitle: "How everyday technology can compromise privacy, identity and financial security"
publisher: "ARTIore — Intelligence in Service of Humanity"
series: "Global Digital Exposure Investigation"
version: "1.0"
publication_date: "2026-10-26"
authors: "ARTIore Research Desk"
classification: "Public"
reading_time: "approx. 105 minutes"
---

# The Invisible Attack Surface

## How everyday technology can compromise privacy, identity and financial security

**A global public-awareness investigation by ARTIore.**

---

## How to read this report

This is an investigation, not a scare document. Every section separates four things that are routinely conflated in public discussion:

1. **What is technically possible.** A capability demonstrated in a laboratory, a proof of concept, or a research paper.
2. **What has actually happened.** A documented incident, court record, vendor advisory, or forensic report.
3. **What conditions are required.** The access, proximity, money, patience, or human error an attacker needs.
4. **What remains unknown.** Gaps in public evidence that we refuse to fill with assumption.

Claims carry one of four labels:

| Label | Meaning |
|---|---|
| **[Confirmed]** | Established by a primary source: a vendor advisory, court record, regulator, official incident report, or a forensic investigation with published indicators. |
| **[Demonstrated in research]** | Reproduced by credible security researchers, often in a lab or limited field test, but not shown to be used at scale in the wild. |
| **[Plausible but unverified]** | Technically coherent and consistent with known behaviour, but lacking public evidence of actual exploitation. |
| **[Unsupported]** | Widely repeated, but no reliable evidence found. We say so explicitly. |

Two further conventions matter. First, **capability is not deployment**. The existence of an exploit technique does not mean it is being used against you, or against anyone. Second, **a security failure is not a single event**. Almost every serious compromise in this report is a chain: several small weaknesses, each survivable alone, combining into something catastrophic.

Where a figure comes from an industry estimate rather than an official record, we say so, because estimates have methodological limits — under-reporting, sampling bias, commercial incentive, and definitions that change between years.

---

## Executive summary

The modern person carries a networked computer that knows where they sleep, who they talk to, what they earn, and what they believe. Around that device sits a second layer of infrastructure the person never sees: Wi-Fi access points, DNS resolvers, Bluetooth advertisements, cloud sync engines, app permission systems, and payment rails. The security of that whole stack is usually judged by the visible part — a padlock icon, a password field, a brand name on a captive portal.

That judgement is wrong often enough to matter.

This investigation examines ten widespread assumptions about digital safety, then traces the technical layers beneath them: shared networks, the Domain Name System, Bluetooth and Bluetooth Low Energy, accessibility services, mobile operating system exploitation, encrypted messaging, commercial spyware, cloud storage, and cryptocurrency. It closes by showing how these layers combine, how the human cost of complexity is produced, and what readers can realistically do.

Six findings frame everything that follows.

**1. The perimeter has moved inside the device.** Firewalls and network security still matter, but the most consequential exposures now occur through identities, tokens, permissions, and synchronisation — inside systems that the user has already authenticated. A stolen browser cookie can defeat a password. A granted accessibility permission can read a banking screen. An authorised cloud session can expose a decade of photographs without any password ever being cracked. [Confirmed]

**2. Encryption protects a channel, not an endpoint.** End-to-end encryption is one of the most important privacy technologies ever deployed, and it does what it claims: it prevents the platform and the network from reading message contents in transit. It does not prevent a compromised phone from reading the screen, the notification, the backup, or the decrypted message after delivery. Confusing these two guarantees is the single most common error in public understanding of messaging security. [Confirmed]

**3. The most damaging attacks are targeted, not universal.** Zero-click exploit chains, commercial spyware, and full device takeover require scarce capabilities: exploit development, infrastructure, operational security, and money. They are used against specific people — journalists, activists, officials, executives, litigants — not against entire populations. Ordinary financially motivated malware is far more common, far cheaper, and far less sophisticated. Both categories matter, but they require different responses. [Confirmed]

**4. Everyday fraud is where the money actually goes.** The FBI's Internet Crime Complaint Center recorded 1,008,597 complaints and **$20.877 billion** in reported losses in 2025, a 26 percent increase on 2024. Investment fraud alone accounted for $8.65 billion; business email compromise $3.05 billion; tech-support fraud $2.13 billion. Ransomware, by contrast, accounted for $32.3 million in reported losses — not because ransomware is harmless, but because its costs land on organisations and are reported elsewhere. [Confirmed]

**5. Hospitality is a structural target, not a criminal franchise.** Hotels concentrate transients, shared networks, payment data, booking systems, physical access control, and third-party IT contractors in one building. That concentration has produced documented breaches, documented lock-system flaws, and documented reservation scams. It has not produced evidence that hotels are generally run by, or infiltrated by, cybercriminal organisations. The distinction between a vulnerable environment and a captured one is essential. **[Confirmed]** for specific incidents; **[Unsupported]** for blanket claims.

**6. Users are not failing because they are careless. They are failing because the system asks them to make security decisions they cannot evaluate.** Permission prompts describe capabilities, not consequences. Notifications describe symptoms, not causes. Vendors describe products as "secure" without defining the threat model. The result is not ignorance but a rational response to unreadable information — and, sometimes, harmful overreaction: destroying evidence, replacing devices unnecessarily, or abandoning useful services.

The purpose of this report is not to convince you that you are under attack. It is to make sure you never mistake unfamiliarity with safety.

---

## Methodology and limits

**Sources.** We prioritised primary material: vendor security advisories, CVE records, regulator and law-enforcement publications, court filings, and peer-reviewed or independently replicated research. Journalism and industry reports fill gaps and are identified as secondary. Each material claim maps to the Source Register (document 16).

**Currency.** Figures are current to October 2026. Where a statistic covers a calendar year, the year is stated. Rapidly changing items — exploited zero-days, breach counts, sanctions — carry dates because they will age.

**What we did not do.** We did not test any exploit against a live third-party system, did not acquire or analyse commercial spyware, and did not conduct original forensic examinations. This is a synthesis and analysis of public evidence, written by researchers reading the same record a careful reader could read.

**Attribution.** Where a government or vendor has publicly attributed an intrusion, we report the attribution and who made it. We do not convert attribution into proof, and we do not identify countries, services, or individuals as attackers without a primary source. Where attribution is contested or absent, we say so.

**Numbers.** Loss figures come from victim reporting and are therefore lower bounds. Breach counts change as investigations mature. Cryptocurrency theft figures differ between analytics firms because of methodology; we present more than one where the gap is material.

---

# PART I — THE ILLUSION OF DIGITAL SAFETY

Security is not a property of a product. It is a property of a relationship between a system, an adversary, and a set of conditions. Most public misunderstanding comes from collapsing that relationship into a single word — "secure" — and treating it as a permanent attribute, like colour.

Ten assumptions follow. Each is partly true, which is why it survives. Each fails in a specific, describable way.

## 1.1 "A password-protected Wi-Fi network must be secure"

**What is true.** Wi-Fi Protected Access (WPA2, and now WPA3) encrypts traffic between a device and an access point. Without the key, a passive eavesdropper on the radio channel cannot read the traffic. This is real protection and it matters. [Confirmed]

**Where it fails.** The password authenticates *access to the network*, not *the identity of the network*. An attacker can run an access point that broadcasts the same network name (SSID) as a legitimate one. Your device, which remembers that name, may connect automatically. You have then proved you know a password — possibly one the attacker already knows, because it is printed on a card in a hotel room or shared by thousands of guests — to a computer the attacker controls. This is an **evil twin** access point. Once you are on it, the attacker sits between you and the internet: they can serve you a fake login page, strip or redirect your DNS, and observe which services you connect to. [Confirmed]

The encryption also protects less than people assume. On a shared network with a pre-shared key, other clients on the same network are not necessarily isolated from each other. Guest-network segmentation is a configuration decision, not a law of physics. Where client isolation is off, one compromised laptop can scan and reach others. [Confirmed]

**Conditions.** Evil-twin success requires the attacker to be physically near you, to know or guess the network name, and for your device to prefer that network automatically. Public hotspots with generic names ("FreeWiFi", "Airport_WiFi") and captive portals make this easier, because users are already accustomed to connecting to unfamiliar networks and typing credentials into unfamiliar pages.

**Evidence.** Evil-twin and captive-portal phishing are long-documented, widely tooled techniques; commercial penetration devices and open-source frameworks automate them. The 2017 KRACK research demonstrated that the WPA2 handshake itself could be manipulated under specific conditions to reinstall keys and decrypt traffic (CVE-2017-13077 and related). The 2021 FragAttacks research found design and implementation flaws affecting Wi-Fi fragmentation and aggregation across many devices. Neither is a routine attack on a random traveller; both demonstrate that "WPA2" is not a guarantee. [Demonstrated in research; Confirmed for the CVEs]

**The distinction.** An eavesdropper passively collecting encrypted traffic is a common, low-capability threat. An attacker actively impersonating a network and defeating certificate warnings is more capable — but still within reach of a competent criminal, because the weakest link is usually the user's willingness to click "Continue" on a warning.

**What actually protects you.** Treat the network as untrusted and make the channel trustworthy independently: HTTPS with a valid certificate, a VPN you control, and never entering credentials on a page you reached through a captive portal redirect. Forget the network after use; disable auto-join for open networks.

## 1.2 "Bluetooth is harmless when no accessory appears connected"

**What is true.** Bluetooth devices only exchange data after pairing, and modern versions use encryption and address randomisation. A device that is not paired cannot simply read your messages. [Confirmed]

**Where it fails.** Three separate things are conflated here: *pairing*, *advertising*, and *implementation*. A Bluetooth Low Energy device can broadcast advertising packets continuously without being paired or "connected" to anything. Those packets may contain a device name, service identifiers, and a stable or semi-stable identifier. That is how find-my networks, beacons, wearables, and location-tracking ecosystems work. It is also how tracking tags work — including tags placed in someone's bag without their knowledge. [Confirmed]

Second, pairing is a security boundary only if the implementation is correct. Documented vulnerability classes include:

- **BlueBorne (2017)** — a set of vulnerabilities in Bluetooth stacks on Android, Linux, Windows and iOS allowing remote code execution or information disclosure without pairing (CVE-2017-1000251 and related).
- **KNOB (2019)** — key negotiation downgrade enabling brute-force of the encryption key (CVE-2019-9506).
- **BIAS (2020)** — impersonation of a paired device by exploiting role-switch behaviour (CVE-2020-10135).
- **SweynTooth (2020)** and **BrakTooth (2021)** — families of implementation flaws in SoCs and stacks causing crashes, deadlocks, or code execution.
- **BLUFFS (2023)** — session-key derivation flaws enabling impersonation and decryption across sessions (CVE-2023-24023).
- **CVE-2023-45866** — unauthenticated keystroke injection against Android, Linux and macOS hosts via emulated Bluetooth keyboards.

[Demonstrated in research; Confirmed for the CVEs]

Third, Bluetooth is a *radio* technology. Anything that transmits can be observed by equipment within range. Observing that a device is present, and correlating its presence over time and place, is a privacy problem that does not require breaking encryption at all. [Confirmed]

**Conditions.** Code-execution classes require vulnerable stacks, proximity, and often a specific protocol state. Tracking requires only that the device advertises and that observers exist. Keystroke injection requires the host to accept a new HID device without confirmation — a configuration choice on some platforms.

**What does not follow.** A nearby Bluetooth broadcast is not evidence of surveillance. A stored pairing record is not evidence of an intruder. A log line containing "Bluetooth" is not evidence of anything except that Bluetooth exists. Each of these is a normal artefact of a normal radio.

## 1.3 "A phone cannot be compromised without clicking a malicious link"

**What is true.** Most compromises do involve user action: installing an app, granting a permission, entering credentials on a phishing page, or opening a malicious attachment. [Confirmed]

**Where it fails.** "Most" is not "all". A category of exploits delivers code with no user interaction — **zero-click** — by exploiting the code that processes incoming data before the user sees it: an image parser, a font parser, a message attachment handler, a link-preview generator, a call setup routine. The device does the work automatically because receiving data requires parsing it.

Documented examples include:

- **FORCEDENTRY (CVE-2021-30860)**, a JBIG2 image-parsing flaw in Apple's CoreGraphics used to deliver Pegasus through iMessage. The payload was a malicious PDF-like image; the victim did not click. [Confirmed — Citizen Lab, Apple advisory]
- **BLASTPASS (CVE-2023-41064, CVE-2023-41061)**, a chain using a malicious image in a PassKit attachment to compromise iOS without interaction. [Confirmed — Citizen Lab, Apple, Toronto]
- **Operation Triangulation**, a four-zero-day iOS chain (including CVE-2023-41990 in font parsing and CVE-2023-38606, a hardware-level bypass) observed from 2019 and disclosed by Kaspersky in 2023. [Confirmed]
- **CVE-2025-55177 + CVE-2025-43300**, a WhatsApp/Apple ImageIO chain used in a targeted zero-click campaign disclosed in September 2025. [Confirmed — vendor advisories]
- **CVE-2026-86950**, a CoreGraphics out-of-bounds write patched in September 2026 and described by Apple as exploited "in an extremely sophisticated attack against specific targeted individuals". [Confirmed]

**Conditions.** Zero-click chains are expensive. They require one or more unpatched memory-corruption bugs, a reliable way to shape memory, a sandbox escape, a privilege-escalation step, and a delivery path. Prices for full iOS chains on exploit markets have historically run into millions of dollars. This is why they are used surgically, not broadly. [Confirmed for the economics; estimates vary]

**The distinction.** "You don't have to click" is true and important. "Anyone can be zero-clicked" is false. The capability exists; the deployment is selective.

## 1.4 "iPhones are inherently immune to spyware"

**What is true.** Apple's platform has strong structural defences: code signing, a mandatory sandbox, Pointer Authentication Codes, memory-safe language adoption in newer components, fast security updates, Lockdown Mode, and a bug-bounty programme. These raise the cost of attack substantially. [Confirmed]

**Where it fails.** Every one of the zero-click chains listed above targeted iOS. Commercial spyware vendors have built businesses on defeating Apple's protections, and forensic investigations have confirmed infections on fully updated devices at the time of infection. Apple itself now issues **Threat Notifications** to users it believes have been targeted by mercenary spyware — an implicit acknowledgement that targeting happens. [Confirmed]

**Conditions.** The documented cases are targeted: journalists, activists, opposition politicians, litigants, and people in proximity to them. Mass exploitation of iPhones is not what the public record shows. Apple's own language — "specific targeted individuals" — is precise and should be read literally.

**What follows.** "iPhones cannot be hacked" is unsupported. "iPhones are meaningfully harder to hack than most alternatives, and the residual risk is concentrated on high-value targets" is defensible. The correct response to the residual risk is patching and, for at-risk users, Lockdown Mode — not fatalism.

## 1.5 "Android permission controls prevent all malicious activity"

**What is true.** Android's permission model is granular and has improved materially: runtime permissions, scoped storage, background restrictions, restricted settings for sideloaded apps, Play Protect scanning, and per-app access controls. [Confirmed]

**Where it fails.** Permissions govern *access to data and capabilities*, not *intent*. An app that legitimately requests accessibility, notification access, or screen capture can do exactly what those APIs allow. Banking trojans have exploited this for years: the malware is installed by the user (often via a sideloaded APK or a dropper distributed through messaging), then asks for accessibility "to help you", then reads the screen, performs taps, and exfiltrates credentials or one-time codes. Documented families include Cerberus, Anubis, Alien, TeaBot, SharkBot, Xenomorph, Octo, and Anatsa. [Confirmed — vendor and law-enforcement reporting]

Permissions also do not protect against *vulnerabilities in the operating system itself*. Stagefright (2015), Janus (2017), StrandHogg (2019–2020), Dirty Pipe (CVE-2022-0847), and numerous vendor-specific privilege-escalation flaws bypassed the permission model entirely. [Confirmed]

**Conditions.** Sideloading, or a dropper that installs a payload, is the usual entry point. Social engineering is the usual delivery. The permission grant is the pivot. The fraud is the objective.

**The distinction.** A permission prompt is a description of capability, not a risk assessment. "Allow this app to view and control your screen" is not equivalent to "allow this app to see your photos", yet both appear as small dialogs with similar visual weight.

## 1.6 "Encrypted messaging protects every aspect of communication"

**What is true.** End-to-end encryption (E2EE) protects message content and, in well-designed systems, attachments and calls from interception by the platform, the network operator, and anyone in between. This is a genuine and substantial protection. [Confirmed]

**Where it fails.** E2EE protects data *in transit and at rest on the server*. It cannot protect what happens after decryption on the endpoint. If the device is compromised, the attacker reads the plaintext on screen, in memory, in notifications, or in backups. If the account is taken over via linked devices or a SIM swap, the attacker becomes a legitimate participant. If the user backs up to a cloud service without end-to-end encryption, the backup may be readable by the provider or by anyone who compromises the account. [Confirmed]

Metadata — who talked to whom, when, how often, from which network — is largely outside the encryption boundary, and is routinely available to platform operators and, through legal process or intrusion, to others. [Confirmed]

**Conditions.** Endpoint compromise (spyware, malicious app, unlocked device), account takeover (SIM swap, linked-device abuse, verification-code phishing), or an unencrypted backup. Without one of these, E2EE does what it says.

**The distinction.** "Encrypted" answers the question "can the network read this?" It does not answer "can the person holding my phone read this?" or "can someone who controls my account read this?"

## 1.7 "Hotel networks are professionally managed and therefore trustworthy"

**What is true.** Many hotels employ competent IT providers, segment guest networks, and monitor infrastructure. Brand standards often require it. [Confirmed for practice; varies widely]

**Where it fails.** The guest network is usually the lowest-priority, lowest-margin, least-monitored part of a property's technology stack. It is often built and maintained by a third-party integrator, shared across properties, and rarely updated between refurbishments. The credentials are shared with thousands of strangers. Captive portals are frequently outsourced. The property's own systems — booking, property management, point-of-sale, door locks — may run on the same physical infrastructure or the same flat network. [Confirmed in documented incidents; generalisation varies]

**Conditions for abuse.** Proximity (for rogue access points), a shared or guessable network name, an outdated access point firmware, a captive portal that accepts arbitrary input, or a compromised upstream provider. None of these require the hotel to be malicious; most require only that it be ordinary.

**What is not supported.** The claim that hotels are generally controlled by cybercriminal rings, or that hotel IT staff routinely participate in attacks, is unsupported by public evidence. Documented cases involve external intrusion, third-party compromise, credential theft, and — occasionally — insider misconduct at specific properties. Part II treats each separately.

## 1.8 "DNS problems are merely connectivity inconveniences"

**What is true.** Most DNS failures are operational: a misconfigured resolver, an expired domain, a broken DNSSEC chain, a captive portal intercepting queries. These produce error pages, not breaches. [Confirmed]

**Where it fails.** DNS is a control plane. Whoever answers your query decides which server your device connects to. That decision can be used to redirect you to a phishing site, to block security updates, to sinkhole a service, to serve a captive portal that harvests credentials, or to route traffic through an attacker's proxy. DNS manipulation is not a denial-of-service curiosity; it is a positioning attack. [Confirmed]

**Conditions.** Control of a router, a DHCP server, a local resolver, an authoritative zone, or a domain registration. Each is a different level of access with different evidence.

**The distinction.** Controlling DNS does not decrypt HTTPS. If a user is redirected to a look-alike domain, the browser will show a certificate for *that* domain; a careful user can notice. If the attacker can also issue a valid certificate for the real domain — through a compromised certificate authority, a mis-issued certificate, or domain-validation hijacking — the padlock becomes meaningless. That is rarer, and documented.

## 1.9 "Cloud-stored photographs and files cannot be accessed without the owner's knowledge"

**What is true.** Major cloud providers invest heavily in access control, encryption at rest, and intrusion detection. Breaking into a well-run cloud service directly is hard. [Confirmed]

**Where it fails.** Attackers rarely break the cloud. They obtain a *credential* or a *session*. Three routes dominate:

1. **Account takeover** — phishing, credential stuffing, infostealer malware, or recovery-channel abuse. Once inside, the attacker sees what the owner sees.
2. **Token theft** — browser cookies and OAuth refresh tokens are bearer credentials. Malware that copies them can replay a session without the password or the second factor. This is the mechanism behind a large share of "I was hacked but my password was fine" cases. [Confirmed]
3. **Delegated access** — a third-party app, a shared album link, a family-sharing group, or a sync client with broad permissions. The owner granted access, often years earlier, and forgot.

**Conditions.** Any of the above. Notably, none requires breaking encryption; they require obtaining an authorised path.

**The distinction.** "Encrypted at rest" protects against physical disk theft and some insider access. It does not protect against a valid session. "End-to-end encrypted" cloud content (for example, advanced protection modes in some providers) is materially stronger, but is not the default for most services and is often incompatible with web access and server-side search.

## 1.10 "Cryptocurrency wallets cannot be compromised because blockchains use cryptography"

**What is true.** The cryptography securing major blockchains has not been broken. Transactions are signed with private keys, and forging a signature is computationally infeasible. [Confirmed]

**Where it fails.** The blockchain is the ledger, not the wallet. The wallet is software on a device, or a hardware device, or a web application, or an exchange account. Attacks target the surrounding system:

- **Seed-phrase theft** — the human-readable root of all keys, often stored in photographs, notes, cloud documents, or entered into phishing sites.
- **Malicious approvals** — a signed transaction granting a smart contract permission to spend tokens; the user signs, the contract drains later.
- **Address poisoning** — an attacker sends a zero-value transaction from a look-alike address so that the real address appears in the victim's transaction history; the victim copies the wrong one.
- **Clipboard hijacking** — malware replaces a copied address with the attacker's.
- **Fake wallets and extensions** — trojanised applications distributed through search ads, app stores, or sideloading.
- **Exchange and bridge compromise** — theft of keys or exploitation of contract logic at the platform level.

**Conditions.** A signed transaction, a leaked secret, a compromised device, or a compromised counterparty. All of these are outside the cryptographic guarantee.

**The distinction.** "The chain is secure" and "your funds are secure" are different statements. The first is a property of a protocol. The second is a property of your operational security, your device, your counterparties, and your decisions.

---

## What Part I establishes

None of these ten assumptions is stupid. Each is a reasonable inference from a visible signal — a password, a padlock, a permission dialog, a brand name. The failure is systematic: **visible signals describe mechanism, not threat**. A password describes who may join a network. A padlock describes which domain a certificate was issued to. A permission describes what an API can do. None of them describes who is on the other side, what they want, or what happens after the signal is checked.

The rest of this report works downward through the layers, then back up through the chains that connect them.

---

# PART II — WI-FI, HOTSPOTS AND HOTEL NETWORKS

## 2.1 Why a shared network is a different security environment

A home network has one trust boundary: the router. Everyone inside it is assumed to be family. A hotel, airport, or conference network has no such assumption. It is a public space with a private-sounding name.

Three properties define the risk:

**Transience.** Users arrive with unpatched devices, connect to whatever appears in the list, and leave. There is no institutional memory of what was normal yesterday.

**Shared fate.** All clients use the same upstream link, the same DNS resolver, often the same access points and the same DHCP pool. A weakness anywhere in that shared infrastructure is inherited by everyone.

**Low observability.** Guests cannot see the network's topology, firmware version, or administrative history. The only visible signals are the network name and the captive portal — both of which are trivially imitated.

This is the structural reason why "the hotel would not allow that" is not a security argument. The hotel may not know.

## 2.2 The attack catalogue

### Evil-twin access points

An attacker broadcasts an SSID identical to the legitimate network. Because most devices remember networks by name and connect automatically, proximity plus a familiar name is often enough. The attacker then controls the first hop: they can serve a captive portal, redirect DNS, proxy traffic, or simply observe.

The sophisticated version does not break encryption at all. It harvests credentials through a plausible portal ("Re-enter your room number and surname to continue"), then forwards the user to the real network so nothing appears wrong.

**Conditions:** physical proximity; a guessable or published SSID; a device configured to auto-join. **Capability:** low to moderate; commercial and open-source tooling exists. **Evidence:** [Confirmed] as a technique; documented in penetration-testing literature and criminal cases.

### Rogue hotspots and deceptive captive portals

A captive portal is a web page that intercepts the first HTTP request and demands action before granting access. Legitimate portals ask for a room number or a click-through. Malicious ones ask for an email password, a card number, a social-media login, or a software download ("install this certificate to continue").

The certificate-installation variant is the most dangerous, because a user-installed root certificate allows the attacker to intercept TLS traffic — the padlock will show as trusted because the user explicitly trusted the interceptor. This is also how some corporate and parental monitoring products work, which is why the prompt looks familiar.

**Conditions:** user cooperation, however brief. **Evidence:** [Confirmed].

### Insecure guest-network segmentation

"Guest Wi-Fi" should be a separate VLAN, isolated from the property's management systems and, ideally, with client isolation between guests. In practice, segmentation is a configuration choice that is sometimes skipped, especially in small properties or after ad-hoc extensions.

When segmentation fails, a compromised guest laptop can reach point-of-sale terminals, printers, property-management systems, or door-lock controllers. This is not theoretical: flat networks are a recurring finding in hospitality penetration tests and post-incident reports. [Confirmed as a class; specific properties vary]

### Local-network reconnaissance and lateral movement

Once on a flat network, an attacker maps it: ARP scans, mDNS and SSDP discovery, SMB enumeration, printer and camera discovery, default-credential checks on management interfaces. Most of this is unauthenticated and unlogged at the property level.

The significance is not that reconnaissance is clever. It is that hospitality networks contain devices that were never designed to be on a shared network — televisions, minibars, thermostats, door controllers, back-office printers — and these devices often run unpatched firmware with default credentials.

### Man-in-the-middle conditions

A true MITM requires the attacker to be positioned between client and destination. On a shared network this can be achieved by ARP spoofing, rogue DHCP, rogue DNS, or a malicious access point. MITM becomes *useful* to an attacker when traffic is unencrypted, when the client accepts an invalid certificate, or when the attacker can install a trusted root certificate.

With modern HTTPS and correct certificate validation, a MITM cannot read content. They can still see destinations (via DNS and TLS SNI, unless encrypted client hello is used), timing, volume, and — on poorly configured networks — plaintext metadata. That is enough for profiling, targeting, and censorship, even without decryption. [Confirmed]

### Credential phishing and session theft

Most credential theft on shared networks is not cryptographic. It is a fake page. The more valuable modern variant is **session theft**: stealing a cookie or OAuth token so that the attacker does not need the password or the second factor at all. Infostealer malware, malicious browser extensions, and some network attacks that can reach browser storage all feed this market.

Session tokens are bearer credentials. If someone has yours, they are you, until the token expires or is revoked. This is why "change your password" is sometimes insufficient advice after an incident. [Confirmed]

### DNS manipulation and malicious redirects

Covered in depth in Part III. On hotel networks, the common variant is a portal that intercepts DNS to force a login page. The malicious variant does the same thing but never lets go.

### Compromised routers and management interfaces

Access points and routers are small computers with web interfaces, remote-management features, and firmware that is often years out of date. Documented vulnerability classes include command injection, authentication bypass, and hard-coded credentials. Once an access point is compromised, the attacker can change DNS settings, add a rogue SSID, capture management credentials, or use the device as a foothold.

**Conditions:** an internet-exposed management interface, default credentials, or an unpatched firmware flaw. **Evidence:** [Confirmed]; router and access-point vulnerabilities are a recurring category in national vulnerability databases and botnet reporting.

### Malicious or misconfigured proxy infrastructure

Some properties route guest traffic through a transparent proxy for content filtering or bandwidth management. A misconfigured proxy can leak headers, break TLS in ways that train users to click through warnings, or log credentials. A malicious proxy is a MITM with a business model.

### Traffic analysis and metadata exposure

Even without decryption, an observer learns a great deal: which services you use, when you sleep, whether you are alone, which airline you booked, whether you are contacting a lawyer or a doctor (from domain names), and which device models are present. This is **metadata**, and it is frequently more actionable than content.

### Throttling, selective blocking, and service disruption

Not all interference is espionage. Some is commercial: blocking video calls to protect bandwidth, throttling streaming, blocking VPNs. Some is coercive: a property or a network operator blocking messaging apps. Users should distinguish *degradation* from *attack* — but both are reminders that the network is not neutral infrastructure you control.

### Outdated access-point firmware

Firmware is the operating system of the access point. Vendors stop supporting models; properties defer upgrades because they require downtime and site visits. The result is a long tail of devices with known, published vulnerabilities. An attacker does not need a zero-day when a five-year-old CVE works.

### Shared infrastructure and third-party providers

Many properties do not run their own network. A managed service provider may operate thousands of sites with a common template, common credentials, and a common management plane. That is efficient — and it means one compromised management account can touch many properties. The 2023 MGM incident illustrated the same principle at the corporate level: a single social-engineered help-desk interaction led to enterprise-wide disruption.

## 2.3 Hotels as a high-value environment

Why hospitality specifically? Because it concentrates, in one physical place, six things that are normally separate:

1. **A large transient population** with laptops, phones, and corporate credentials.
2. **A shared network** the guests must use and cannot inspect.
3. **Payment data** — cards, booking records, folio details.
4. **Property-management and booking systems** with privileged access to guest data and room assignment.
5. **Physical access control** — electronic locks, keycard encoders, building management.
6. **Third-party contractors** — network integrators, POS vendors, lock-system technicians, booking-channel managers.

Add a seventh: **guests are away from their normal environment**, using unfamiliar networks, in a hurry, often with elevated trust ("I'm at a hotel, this must be the hotel's page").

That combination explains why hospitality appears repeatedly in breach statistics. It does not explain, and does not support, the claim that hotels are systematically operated by criminal groups. The distinction is between an *attractive environment* and a *captured one*.

## 2.4 Documented cases and what each actually proves

**Marriott / Starwood (disclosed November 2018).** Marriott disclosed that an unauthorised party had accessed the Starwood guest reservation database, affecting up to approximately **383 million** guest records, with a breach period dating back to 2014. Data included names, contact details, passport numbers, and, for some records, payment card numbers and expiration dates. [Confirmed — company statement, regulatory filings]

*What it proves:* that a large chain's reservation infrastructure can be compromised for years without detection. *What it does not prove:* anything about guest Wi-Fi, or about hotel staff involvement.

**InterContinental Hotels Group (2017).** IHG disclosed that malware had affected payment card processing at approximately **1,200** properties in the Americas over a period of months. [Confirmed — company statement]

*What it proves:* point-of-sale and payment-processing systems are a distinct attack surface from guest networks. *What it does not prove:* network-wide compromise of guest traffic.

**Hyatt (2015–2016) and Hilton (2014–2015).** Both chains disclosed payment-card breaches affecting property-level systems. Hilton subsequently entered a settlement with the U.S. Federal Trade Commission over its security practices. [Confirmed — company statements, FTC action]

*What they prove:* repeated, similar failures across the sector — a pattern consistent with shared vendor ecosystems and weak property-level controls.

**MGM Resorts (September 2023).** A criminal group used social engineering against a help desk to obtain credentials, then moved through the enterprise, disrupting reservations, slot machines, and hotel operations. MGM reported an approximately **$100 million** negative impact on third-quarter 2023 results. [Confirmed — SEC filing; criminal proceedings]

*What it proves:* the weakest link in a sophisticated intrusion was a human verification process, not a firewall. *What it does not prove:* that hotel IT staff were complicit; the documented mechanism was impersonation of an employee.

**Caesars Entertainment (2023).** Reported to have paid a ransom after a related intrusion. The payment figure is reported by media, not confirmed by the company in detail. [Reported; not fully confirmed]

**British Airways (2018).** A supply-chain script injection (Magecart-style) on the airline's website and app captured approximately **380,000** payment card records. [Confirmed — ICO findings, company statement]

*What it proves:* in travel, the booking channel — not the building — is often the softest target.

**Booking.com reservation-data incident (disclosed 2026).** Booking.com confirmed suspicious activity affecting a number of reservations; data accessed included names, email addresses, phone numbers, and booking details, while financial information was not accessed from its systems. The company reset reservation PINs and warned customers. Security researchers subsequently reported a wave of "reservation hijack" scams using genuine booking details. [Confirmed — company statements to BBC; secondary reporting]

*What it proves:* breach data does not need to include passwords to be dangerous. Real dates, real property names, and real contact details make a phishing message nearly indistinguishable from hotel correspondence.

**Unsaflok (2024).** Researchers disclosed a series of flaws in Dormakaba Saflok electronic lock systems that allowed forged keycards, affecting more than **3 million** doors at over **13,000** properties in **131 countries**. Exploitation required physical proximity, a valid keycard from the target property, and a card-writing device. [Confirmed — researcher disclosure, vendor advisory, WIRED reporting]

*What it proves:* physical access control is part of the digital attack surface, and "offline" systems are not automatically safe. *What it does not prove:* that locks were widely opened by criminals; the researchers demonstrated the technique and notified the vendor.

**"DarkHotel" (documented from 2007, reported 2014).** A long-running espionage campaign targeted business executives, in part by exploiting hotel Wi-Fi and delivering fake software updates. [Confirmed — vendor research; attribution limited]

*What it proves:* hotels have been used as a *hunting ground* by capable actors. *What it does not prove:* that the hotels themselves were complicit; the documented vector was the network environment and user behaviour.

## 2.5 Insider and third-party risk — precise claims only

There are three distinct insider scenarios, and they should never be merged:

**(a) A malicious insider.** An employee with legitimate access deliberately steals data or assists an intruder. Documented in many industries; in hospitality, public evidence is thinner and usually case-specific. Where it exists, it typically involves payment data or guest records, not network wiretapping. [Plausible but unverified in general; Confirmed in specific prosecutions]

**(b) A compromised insider.** An employee's credentials are phished, reused, or bought from infostealer logs. The employee is a victim, not a participant. This is far more common than deliberate betrayal and is the mechanism behind many "insider-looking" incidents. [Confirmed]

**(c) A compromised third party.** A network integrator, POS vendor, or booking-channel manager has remote access to many properties. Their compromise becomes the property's compromise. [Confirmed — recurring pattern across sectors]

The responsible conclusion is narrow: hospitality's structure creates *conditions* in which insider access, credential compromise, and third-party access can cause disproportionate harm. It does not establish that any particular hotel, chain, or IT department is compromised. Claims to that effect require evidence about that specific entity.

## 2.6 Observable indicators — and their limits

On a hotel or public network, the following are worth noticing:

- A captive portal that asks for a password to a service (email, social media, banking) rather than a room number or click-through.
- A certificate warning, or a portal that requires installing a certificate or "configuration profile".
- A network name that differs by a character or a word ("Hotel_Free_WiFi" next to "Hotel Free WiFi"), especially if both appear.
- Being disconnected repeatedly, or being redirected to a login page after you already logged in.
- Two devices reporting different DNS servers, or a DNS server outside the property's expected range.
- A sudden request for a second factor you did not initiate.

**Limits.** None of these is proof. Captive portals are often badly designed; certificate warnings appear for expired certificates; hotels do run multiple SSIDs. Indicators shift probability, they do not establish intent. The only reliable conclusion from a suspicious portal is: do not enter credentials on it.

## 2.7 Practical protections that actually work

1. **Assume the network is hostile.** This is the correct default, and it makes the rest simple.
2. **Use HTTPS everywhere, and never click through a certificate warning** on a network you do not control.
3. **Use a reputable VPN** when handling sensitive accounts on shared networks — or simply avoid sensitive work until you are on a trusted connection.
4. **Turn off auto-join** for open networks; forget hotel networks after checkout.
5. **Never install a certificate or configuration profile** to "enable Wi-Fi".
6. **Prefer cellular data or your own hotspot** for banking, email recovery, and administrative tasks.
7. **Use a password manager** so that a look-alike domain receives a wrong, unique password rather than a reused one — and so that autofill simply does not fire on the wrong domain.
8. **Use passkeys or security keys** where offered; they are resistant to portal phishing by design.
9. **Check the lock icon's details**, not just its presence: the domain must match exactly.
10. **Treat unsolicited booking messages as hostile** until verified through the official app, not through a link.

None of these requires technical skill. All of them assume the network is not trustworthy — which is the only assumption that survives contact with reality.

---

# PART III — DNS: THE HIDDEN CONTROL LAYER

## 3.1 What DNS actually does

Every time you open an app, the first network event is usually a question: *where is this service?* The Domain Name System answers it. A **resolver** takes a human-readable name (`example.com`) and returns an IP address (`192.0.2.10`), plus records that describe mail servers, security policy, and ownership.

The system is hierarchical and distributed:

- **Root servers** point to top-level domains (`.com`, `.org`, country codes).
- **Authoritative servers** hold the actual records for a domain.
- **Recursive resolvers** do the legwork: they ask the hierarchy, cache the answer for a period set by the record's **TTL**, and return it to your device.

Your device learns which resolver to use from **DHCP** on a local network, from the mobile carrier, or from a setting. That single parameter — often invisible, often default — determines who answers every "where is" question your device asks.

This is why DNS is a control plane. It does not carry your data; it decides where your data goes.

## 3.2 The attack family, separated properly

Public discussion uses "DNS attack" for at least six different things. They have different prerequisites and different evidence.

### DNS hijacking

Broadest term: any unauthorised change to resolution. It can occur at the registrar (changing nameservers), at the authoritative zone (altering records), at the resolver (poisoning cache), at the router (changing the DHCP-advertised resolver), or on the device (malware editing settings).

**What it achieves:** the victim's device connects to an attacker-chosen server for a chosen name. **What it does not achieve by itself:** decryption of HTTPS. **Evidence:** [Confirmed] across multiple documented campaigns.

### DNS spoofing and cache poisoning

A spoofer sends forged responses to a resolver, hoping to win the race against the legitimate answer. Classic cache poisoning (popularised by Dan Kaminsky's 2008 research) exploited predictable transaction identifiers and source ports; modern resolvers randomise both, which raised the cost substantially but did not eliminate the class.

**SAD DNS (CVE-2020-25705, 2020)** demonstrated a side-channel that could infer source-port selection and make poisoning practical again under specific conditions. It was fixed in major operating systems and resolvers. [Confirmed — research and vendor advisories]

**Key conditions:** control of the path to the resolver, or the ability to send many forged responses fast enough, plus a cache that will accept the answer.

### Malicious resolver configuration

If an attacker controls the resolver your device uses, they do not need to poison a cache. They *are* the answer. This is the most common and most durable form of DNS manipulation, because it survives reboots and requires no exploit.

**Where it comes from:** a compromised router, a rogue DHCP server, a malicious VPN or "accelerator" app, a configuration profile, or malware that edits network settings.

### Router-level DNS manipulation

Consumer and small-business routers expose a DNS setting in their admin interface. Default credentials, UPnP misconfiguration, or a known firmware vulnerability can give an attacker that interface. Changing the DNS server to an attacker-controlled address redirects every device behind the router — phones, laptops, televisions, cameras — without touching any of them.

**Documented pattern:** router-targeting malware families have done exactly this for years, often to inject ads, block security updates, or redirect banking traffic. [Confirmed]

### Rogue DHCP

DHCP assigns an IP address, a gateway, and a DNS server. A rogue DHCP server on a shared network can hand out its own gateway and resolver, positioning itself as both. This is a local attack requiring proximity, and it is one reason client isolation matters on guest networks.

### Domain impersonation

Not all deception requires breaking DNS. Registering `examp1e.com`, using homoglyphs (`аpple.com` with a Cyrillic `а`), or abusing a subdomain of a legitimate service (`login.example.com.attacker.net`) exploits human reading, not protocol weakness.

**Defence:** password managers that bind credentials to exact origins, passkeys, and a habit of reading the registrable domain from the right.

### DNS tunnelling

DNS queries and responses can carry arbitrary data in labels and records. Malware uses this to exfiltrate data or maintain command-and-control through networks that block most outbound traffic but must allow DNS. Detection requires inspecting query volume, entropy, and unusual record types — not merely blocking "bad domains".

**Conditions:** an authoritative server the attacker controls and a compromised host inside the network. **Evidence:** [Confirmed] in malware research; used by both criminal and espionage tooling.

### Encrypted DNS (DoH/DoT) and its limits

DNS-over-HTTPS and DNS-over-TLS encrypt the query between the device and the resolver. This is a genuine privacy improvement: a hotel network or ISP can no longer see which names you resolve.

The limits are equally real:

- **Trust moves, it does not disappear.** The resolver now sees every query. Choosing a resolver is choosing a trust relationship.
- **It can bypass local protections.** Enterprise and parental filtering often relies on DNS; DoH can route around it. Some malware has used DoH to evade network detection. [Confirmed]
- **It does not encrypt the destination.** The TLS connection that follows still reveals the server name unless Encrypted Client Hello (ECH) is in use.
- **It does not stop a compromised endpoint.** Malware on the device can ignore DoH entirely.

### DNS-based censorship and filtering

Governments and networks filter by returning NXDOMAIN, a sinkhole address, or a block page. This is not a vulnerability; it is a policy implementation. It becomes a security issue when users cannot distinguish a block from a failure, and when workarounds train them to install untrusted software or profiles.

### DNS failures that resemble interference

A surprising share of "someone is tampering with my DNS" reports are ordinary breakage: an expired domain, a broken DNSSEC chain, a resolver outage, a captive portal, a misconfigured CNAME, or a stale cache. Distinguishing failure from attack requires evidence, not intuition.

## 3.3 What DNS control can and cannot do against HTTPS

This is the most important technical distinction in the report, and it is routinely gotten wrong in both directions.

**If DNS is controlled but TLS is intact:**

- The attacker can send you to a different server.
- Your browser will check the certificate against the name in the address bar.
- A look-alike domain will present a valid certificate *for the look-alike*, which a careful user can detect.
- A redirect to the real domain's IP but a different service will fail certificate validation.
- Content remains unreadable unless the user accepts an invalid certificate or installs a rogue root.

**If DNS is controlled and a valid certificate for the real domain is obtained** (mis-issuance, domain-validation hijack, compromised CA, or a corporate/attacker-installed root), then TLS no longer protects you. This is rare, documented, and serious.

**Therefore:** DNS manipulation is primarily a *positioning* and *denial* capability. It is excellent for phishing, blocking, and surveillance of destinations. It is not, by itself, a decryption capability.

## 3.4 Documented cases

**DNSChanger (2007–2011).** A criminal operation (Rove Digital) altered DNS settings on infected machines — estimated in the millions — to redirect advertising and, later, to manipulate search and affiliate revenue. The U.S. FBI led a takedown in November 2011, and a temporary clean resolver was operated to keep victims online. [Confirmed — DOJ indictments, FBI statements]

*Why it matters:* it proved that DNS settings are a durable, monetisable control point, and that remediation requires reaching endpoints, not just servers.

**Sea Turtle (2017–2019, disclosed 2019).** Cisco Talos documented a campaign that hijacked DNS records at registrars and registries, affecting more than 40 organisations across at least 13 countries, including government and telecom entities. The technique targeted the *authoritative* layer, not endpoints. [Confirmed — Talos research]

*Why it matters:* DNS hijacking does not require malware on the victim's device. It can be done entirely in the registry.

**DNSpionage (2018–2019).** A campaign that manipulated DNS records and used malicious SSL certificates to intercept credentials, targeting entities in the Middle East. [Confirmed — vendor research; attribution limited]

**Roaming Mantis (from 2018).** A criminal campaign that compromised routers to change DNS settings, redirecting mobile users to phishing pages and Android malware. It evolved to use DNS-over-HTTPS in later stages to evade detection. [Confirmed — vendor research]

*Why it matters:* it combined router compromise, DNS manipulation, and mobile malware into a single chain — a preview of Part XI.

**MyEtherWallet BGP hijack (April 2018).** Attackers hijacked BGP routes for Amazon Route 53 DNS servers, redirecting some users of a cryptocurrency wallet service to a phishing site. Roughly $150,000 in cryptocurrency was reported stolen in a short window. [Confirmed — company statement, network analysis]

*Why it matters:* the attack was not against the wallet's cryptography or its servers. It was against the routing that delivered users to it.

**Sitting Ducks (disclosed 2024).** Researchers described a class of domain hijacking that requires no registrar compromise: domains whose authoritative DNS is delegated to a provider that no longer serves the zone ("lame delegation") can be claimed by an attacker who simply registers the zone at that provider. The technique has been used since at least 2019, and researchers identified large numbers of vulnerable domains and multiple criminal clusters exploiting them. [Confirmed — Infoblox and Eclypsium research]

*Why it matters:* DNS security failures can be pure configuration errors, invisible to the domain owner, and exploitable by low-capability actors.

**KeyTrap (CVE-2023-50387, 2024).** A DNSSEC validation algorithm complexity flaw allowed a single malicious signed zone to consume extreme CPU on validating resolvers, potentially denying service to large user populations. It affected multiple widely used resolver implementations and was patched in early 2024. [Confirmed — CVE record, vendor advisories, academic paper]

*Why it matters:* DNSSEC improves authenticity but adds attack surface. Security layers have their own failure modes.

## 3.5 Detecting suspicious DNS configuration

Practical checks, in order of accessibility:

1. **Inspect the device's DNS settings.** On iOS: Settings → Wi-Fi → (i) → Configure DNS. On Android: network details → IP settings. Anything you did not set should be explainable.
2. **Inspect the router.** Admin interface → WAN/DHCP settings → DNS servers. Look for unfamiliar IP addresses. Compare against your ISP's published ranges or a resolver you recognise.
3. **Query directly.** From a computer: `nslookup example.com` and `nslookup example.com 1.1.1.1` — if answers differ materially, something local is intercepting.
4. **Check DNSSEC validation** using a validator test service. A domain that fails validation when it should pass is a signal worth investigating.
5. **Use a DNS leak test** while on a VPN to confirm queries are going where you expect.
6. **Check Certificate Transparency logs** for unexpected certificates issued for your own domains (relevant if you run a website).
7. **Watch for behavioural symptoms:** unexpected login pages, redirects to unfamiliar domains, security software that cannot update, and sites that load only over HTTP.

**Limits.** All of these require a baseline. Most users do not know what their DNS server *should* be, which is precisely why the manipulation is durable. The practical baseline is: if you did not choose it, and you cannot identify it, replace it with a resolver you trust and re-check after a week.

## 3.6 Protections

- Use a reputable resolver with a clear privacy policy, and set it deliberately on your devices rather than inheriting it.
- Enable DNSSEC validation where available; understand that it authenticates, not encrypts.
- Use DoH/DoT where the trust trade-off makes sense for you, and understand that it shifts visibility to the resolver.
- Change router admin credentials; disable remote management and UPnP unless needed; keep firmware current.
- Prefer networks with client isolation; avoid captive portals that ask for credentials.
- For domain owners: monitor Certificate Transparency, enable registrar locks, audit DNS delegations, and fix lame delegations.
- Do not "fix" DNS problems by installing random profiles or apps. That is how many real compromises begin.

DNS is the layer where a small, boring configuration error becomes a nationwide redirection. It deserves the same attention as passwords — and almost never gets it.

---

# PART IV — BLUETOOTH AND BLE: THE UNSEEN WIRELESS ENVIRONMENT

## 4.1 Two technologies, one name

**Bluetooth Classic** carries continuous streams: audio for calls and headphones, some file transfer, older peripherals. It establishes a session, negotiates a link key, and maintains a connection.

**Bluetooth Low Energy (BLE)** carries small packets at low power. It is designed for sensors, wearables, tags, locks, medical devices, and location services. Most of the time, a BLE device is not "connected" to anything. It is *advertising*: broadcasting short packets so that something nearby can notice it.

That distinction explains most public confusion. A phone with Bluetooth on is not necessarily connected to anything, but it is almost certainly transmitting. Advertising is the normal state of the protocol, not a symptom.

## 4.2 Discovery, advertising, pairing, bonding

**Advertising** packets contain a device address, flags, and often a local name, service UUIDs, and manufacturer-specific data. Some of that data is designed to be readable by anyone in range — that is the point.

**Pairing** establishes keys. Modern pairing uses Secure Simple Pairing or LE Secure Connections, with numeric comparison, passkey entry, or "Just Works". Just Works provides encryption without authentication: it protects against passive eavesdropping but not against an active man-in-the-middle who relays the exchange.

**Bonding** stores the keys so the device reconnects without pairing again. A bond is a long-lived trust relationship, and it is why removing a device from your phone is not always enough — the peripheral may still hold the bond and attempt reconnection.

**Address randomisation.** To prevent trivial tracking, BLE devices rotate their addresses. A **Resolvable Private Address (RPA)** is derived from an **Identity Resolving Key (IRK)** shared with bonded devices. Anyone with the IRK can recognise the device across address changes; anyone without it cannot, in principle.

The IRK is therefore a privacy-critical secret. If it leaks — through a compromised device, a backup, a debug interface, or a poorly implemented peripheral — the address rotation stops providing protection for that observer.

## 4.3 Tracking: the realistic threat

Tracking is the most consequential everyday Bluetooth risk, and it requires no exploit.

**Commercial and civic infrastructure.** Retail beacons, transit systems, venue analytics, and "find my device" networks all rely on observing advertisements. Apple's Find My network and Google's Find My Device network crowd-source location from billions of devices. This is a designed feature with privacy controls, and it is also a tracking infrastructure that can be abused.

**Tracking tags.** A tag in a bag, a coat, or a car boot broadcasts to nearby phones, which relay its location. Apple and Google have implemented anti-stalking alerts; researchers have repeatedly shown that alerts can be evaded or delayed by modifying a tag's behaviour. [Confirmed — platform documentation, independent research]

**Physical-layer fingerprinting.** Peer-reviewed research has demonstrated that radio-level imperfections — carrier frequency offset, clock drift, and I/Q imbalance — can fingerprint a BLE device even when its address rotates, without pairing and without the vendor's keys. [Demonstrated in research] This is not a consumer-grade capability, but it shows that address randomisation is a privacy control, not anonymity.

**Cross-device correlation.** A phone, a watch, earbuds, and a laptop often advertise with identifiers that link them. Observing one can imply the presence of the others.

**What tracking does not require:** malware, pairing, or any interaction with the victim. **What it does require:** receivers in physical range, or participation in a crowd-sourced network.

## 4.4 Malicious or vulnerable peripherals

A peripheral is a computer with a radio. If an attacker can cause your host to trust it, they inherit the peripheral's capabilities.

**HID impersonation.** A Bluetooth keyboard is trusted to send keystrokes. CVE-2023-45866 allowed unauthenticated keystroke injection into Android, Linux, and macOS hosts by exploiting the way some stacks accept HID connections without confirmation. The practical effect: an attacker within radio range can type into a locked or unlocked device — opening a terminal, invoking voice assistant, or entering commands. Apple and Google addressed related issues in updates. [Confirmed — CVE record, researcher disclosure]

**Malicious peripherals.** A device that looks like a keyboard, charger, or speaker can contain a radio and a microcontroller. Once paired, it can log keystrokes, inject input, or act as a network bridge. This is a supply-chain and social-engineering threat more than a protocol flaw: the victim is given or sold the device.

**Vulnerable peripherals.** Cheap BLE devices frequently implement "Just Works" pairing, static PINs, or no authentication at all. A lock, a medical sensor, or a toy with weak pairing is not protected by the strength of the phone it connects to.

**Relay attacks against access systems.** BLE-based locks and vehicle entry systems can be attacked by relaying signals between a legitimate key and the lock. The cryptography may be sound; the distance assumption is not. Documented in vehicle research and demonstrated against consumer locks. [Demonstrated in research; varies by product]

## 4.5 Implementation vulnerability classes

The protocol is generally sound; implementations are not.

| Class | Examples | Effect | Prerequisite |
|---|---|---|---|
| Stack memory corruption | BlueBorne (CVE-2017-1000251 family) | Code execution or info leak, sometimes without pairing | Vulnerable stack, proximity |
| Key negotiation downgrade | KNOB (CVE-2019-9506) | Brute-force of link key | Vulnerable implementation, captured handshake |
| Impersonation | BIAS (CVE-2020-10135) | Impersonate a bonded device | Vulnerable stack, proximity |
| SoC/link-layer flaws | SweynTooth (2020), BrakTooth (2021) | Crash, deadlock, code execution | Vulnerable chipset, proximity |
| Session key derivation | BLUFFS (CVE-2023-24023) | Impersonation, decryption across sessions | Vulnerable stack, proximity |
| HID acceptance | CVE-2023-45866 | Keystroke injection | Host accepts HID without confirmation |

[Confirmed for the CVE identifiers and vendor advisories; exploitation in the wild varies by class]

None of these is a mass-market attack. Each requires a vulnerable target, proximity, and often a specific protocol state. Their significance is that they exist at all in a technology the public treats as inert.

## 4.6 Smart locks, access systems, and assistive hardware

**Bluetooth smart locks** combine a radio, a motor, and an access-control decision. The attack surface includes the pairing process, the mobile app, the cloud service that issues keys, and the physical fallback. Documented failures tend to be in the app or the cloud rather than the radio: shared keys, weak account recovery, or an API that trusts the client. [Confirmed in specific disclosures; varies]

**Bluetooth Braille displays and input devices** are, technically, HID peripherals. A Braille display presents text as a refreshable tactile line and often provides input keys; it pairs with a phone or computer as a keyboard-like device, sometimes with additional serial profiles. That means it inherits the trust of a keyboard: it can send keystrokes and, in some configurations, receive information about what is on screen.

This is not a criticism of assistive technology. It is an observation about a trust boundary that users and vendors rarely discuss. Specific attacks against Braille displays are not well documented in public research; the *class* — a paired HID device with broad input privileges — is well understood. [Plausible but unverified for specific products; Confirmed for the HID trust model]

**What would make it exploitable:** physical access to the device or its pairing, a malicious replacement device, a compromised firmware update, or an app with pairing privileges. **What would not:** the mere presence of a Braille display in a room.

## 4.7 What a Bluetooth log actually shows

Phone diagnostic logs are often cited as evidence of surveillance. They usually show:

- advertisements from nearby devices (expected in any public space);
- connection attempts that failed (expected when devices move out of range);
- pairing records for accessories the user owns;
- error codes from audio codec negotiation.

None of these establishes that a device connected, that data was exchanged, or that a person was targeted. Establishing unauthorised access requires correlation across time, device identifiers, and — ideally — the peripheral itself. Treating a log line as proof is a category error that has caused real harm: people have destroyed evidence, replaced devices, and accused family members on the basis of normal radio noise.

## 4.8 Prerequisites, plainly

| Attack | What the attacker needs |
|---|---|
| Passive advertisement observation | A receiver in range |
| Crowd-sourced tracking | A tag or device participating in a find-my network |
| Physical-layer fingerprinting | Specialised radio hardware and signal-processing skill |
| HID injection | Proximity, a vulnerable or permissive host, a radio interface |
| Impersonation (BIAS/BLUFFS) | A bonded device, proximity, a vulnerable stack |
| Code execution (BlueBorne class) | An unpatched stack, proximity, exploit code |
| Lock relay | Two radios, proximity to both key and lock |

## 4.9 Protections that match the threat

- **Turn Bluetooth off when you are not using it** — especially in hotels, conferences, and transport. This eliminates the entire class at the cost of convenience.
- **Disable "discoverable" / "pairing" modes** when not pairing.
- **Do not accept pairing requests you did not initiate.** A pairing request is an authentication event, not a notification.
- **Audit paired devices** periodically and remove unknown entries.
- **Keep devices updated**; most of the listed vulnerabilities are patched.
- **For high-risk users**, avoid untrusted peripherals and treat free accessories as untrusted computers.
- **For anti-stalking**, use platform detection features and, if a tag is found, preserve it rather than dismantling it — it may contain evidence.
- **For Braille and other assistive devices**, buy from reputable vendors, apply firmware updates, and remove the pairing when the device is not in use.

The correct mental model is not "Bluetooth is dangerous". It is "Bluetooth is a radio with a trust model, and the trust model has been broken before".

---

# PART V — ACCESSIBILITY FEATURES AND PRIVILEGED DEVICE INTERACTION

## 5.1 Why accessibility exists, and why it is powerful

Accessibility features exist so that people with disabilities can use devices that were not designed for them. A screen reader speaks the interface aloud. Switch Control lets a person operate a phone with one or two switches. Voice Control maps spoken commands to interface actions. Braille displays render text tactilely and accept input. These are not niche features; they are the difference between participation and exclusion for hundreds of millions of people.

To do that work, accessibility software needs capabilities that ordinary apps are deliberately denied:

- read the content of the screen, including text in other apps;
- know when windows, dialogs, and notifications appear;
- perform actions on behalf of the user (click, scroll, type, go back);
- observe text fields, including what is typed into them;
- sometimes capture the screen or inject gestures.

In Android, this is the **AccessibilityService** API: an app declares a service, the user enables it in Settings, and the service then receives an event stream describing the UI and can call `performAction` or dispatch gestures. In iOS, the equivalent power is largely reserved for the system: third-party apps cannot install a general-purpose UI automation service. VoiceOver, Switch Control, AssistiveTouch, and Guided Access are operating-system features; apps can support them but cannot use them to read other apps' screens.

That asymmetry matters: **the Android accessibility model is the main documented abuse surface**, and most of this section concerns it.

## 5.2 The legitimate-versus-deceptive distinction

There is no technical difference between a screen reader and a banking trojan at the API level. Both register an AccessibilityService; both receive events; both can act. The difference is intent, disclosure, and consent.

A legitimate app:

- explains why it needs the permission, in the language of the task ("read the screen to speak it aloud");
- requests it at the moment of need, not on first launch;
- does not ask for it alongside unrelated permissions;
- does not hide its icon, disable uninstall, or resist revocation;
- is distributed through a store with review, or is open source and auditable.

A deceptive app:

- presents the request as something else ("enable this to fix your battery", "allow to continue");
- uses an overlay or a fake system dialog to guide the user to the setting;
- asks for accessibility plus device-admin plus notification access;
- hides its launcher icon or uses a generic name;
- blocks back navigation, uninstall screens, or security prompts.

The permission is the same. The consent is not.

## 5.3 The attack patterns

### Screen reading and credential capture

Once enabled, a malicious AccessibilityService can read the text of a banking app, including balances, payee names, and one-time codes displayed on screen. It can also read the contents of notifications, which is why notification access is often requested together with accessibility.

**Effect:** the attacker does not need to break the bank's app. They read what the legitimate app displays after the user logs in.

### UI automation and gesture execution

`performAction` and gesture dispatch let the service tap buttons, fill fields, scroll, and navigate. Documented banking trojans use this to:

- grant themselves additional permissions;
- approve a transaction the user did not intend;
- dismiss security warnings;
- complete a transfer while the screen is covered by an overlay.

This is the mechanism behind a large share of Android banking fraud since roughly 2019. [Confirmed — vendor research on Cerberus, Anubis, Alien, TeaBot/Anatsa, SharkBot, Xenomorph, Octo and related families]

### Notification access

Notification access allows an app to read and dismiss notifications from other apps. For fraud, the valuable items are one-time passcodes, push-approval prompts, and bank alerts. For surveillance, the value is broader: message previews, calendar reminders, delivery notifications, and app activity patterns.

### Overlay attacks

An overlay draws a window on top of another app. A classic **tapjacking** attack shows a harmless-looking interface while the user's taps land on the underlying privileged screen — approving a payment, granting a permission, or confirming a password reset.

Android has progressively restricted overlays: apps cannot draw over certain system screens, obscured touches are blocked in sensitive contexts, and Android 12+ introduced stricter rules for untrusted windows. The attack class persists in modified forms, particularly on older devices and through accessibility-driven automation rather than pure overlays.

### Voice control and Switch Control

Voice assistants and Switch Control are input channels. If an attacker can reach the microphone or the switch interface — through a malicious app, a paired peripheral, or a nearby speaker — they can issue commands the system treats as user intent. The prerequisite is significant: the device must be unlocked or the assistant must be reachable from lock screen, and the command set must be able to do something useful.

### Braille displays and Bluetooth input

As noted in Part IV, a Braille display is a HID keyboard with extra semantics. It can type, and in some implementations it can request screen content for translation. A malicious or compromised display is therefore an input device with the trust of a keyboard. This is a structural risk, not a documented campaign; the mitigation is the same as for any peripheral — buy from reputable vendors, update firmware, unpair when not in use.

### Remote support applications

Legitimate remote-support tools (TeamViewer, AnyDesk, RustDesk, manufacturer support apps) allow a technician to see and control a device. They are also the backbone of **tech-support fraud**, which the FBI recorded as a **$2.13 billion** loss category in 2025. [Confirmed — IC3 2025]

The scam pattern is consistent: a pop-up claims a virus; a phone number is provided; the "technician" asks the victim to install a remote-support app; the attacker then moves money, installs malware, or sells "support" that does nothing.

### Screen recording and screen sharing

Screen recording permissions (Android MediaProjection, iOS ReplayKit) allow capture of what is displayed. Screen sharing in a call does the same with the user's cooperation. Both are legitimate features; both can be abused by a convincing pretext ("share your screen so I can help you").

## 5.4 Why operating systems cannot simply remove the capability

Accessibility APIs are, by design, a bypass of the normal app sandbox. Removing them would remove assistive technology. The platform therefore tries to manage the risk rather than eliminate it:

- **Explicit settings entry**, separated from normal permissions.
- **Warning dialogs** describing broad access.
- **Restricted settings** for apps installed from outside a store (Android 13+), requiring an extra confirmation path.
- **Play Protect** scanning and removal of known malicious apps.
- **Revocation controls** and, on newer Android versions, the ability to review which apps can read the screen.
- **Advanced Protection** modes that restrict sideloading and unverified accessibility services.
- **iOS**: no general third-party accessibility automation API; strong entitlement controls for screen capture; visible indicators when screen recording or microphone is active.

These are meaningful. They are also defeatable by a user who has been persuaded, which is why the attack is fundamentally social as well as technical.

## 5.5 Documented malware families, and what they actually did

| Family | Period | Mechanism | Notable capability |
|---|---|---|---|
| Cerberus | 2019–2020 | Sideloaded APK, accessibility | Overlay + keylogging, OTP theft |
| Anubis | 2019–2021 | Droppers, accessibility | Banking overlay, ransomware module |
| Alien | 2020–2021 | Droppers, accessibility | Credential theft, notification access |
| TeaBot / Anatsa | 2021–2025 | Droppers, store droppers | Screen streaming, remote action |
| SharkBot | 2021–2023 | Sideloaded APK | Automatic transfer via accessibility |
| Xenomorph | 2022–2024 | Droppers | OTP interception at scale |
| Octo | 2023–2025 | Droppers | Remote access, fraud |

[Confirmed — vendor research and law-enforcement reporting; capabilities vary by version]

The common thread is not sophistication. It is the combination of a user willing to install something, a permission that grants the screen, and a bank that cannot distinguish a legitimate tap from an automated one.

## 5.6 Indicators, and their limits

Possible signs of abusive accessibility use:

- An unfamiliar app in Settings → Accessibility, especially one with a generic name.
- Battery drain, heat, or data use that began after installing an app.
- A "screen reader" or "service" that turns itself back on after being disabled.
- Overlays you cannot dismiss, or a back button that does not work in one app.
- Notifications disappearing before you read them.
- A device-admin app you did not knowingly enable.

**Limits:** every one of these has legitimate causes. Screen readers do run constantly; some apps do use overlays; batteries do degrade. The decisive check is the accessibility list itself, not the symptom.

## 5.7 What to do

1. **Audit accessibility services** now: Android Settings → Accessibility → Downloaded/Installed services; iOS Settings → Accessibility (review what is enabled).
2. **Remove anything you cannot explain.** If a family member relies on a service, note it and keep it.
3. **Do not sideload APKs** from messages, forums, or "mod" sites. If you must, disable "install unknown apps" immediately afterwards.
4. **Never install a remote-support tool because someone asked you to** — banks, police, Microsoft, and Apple do not operate that way.
5. **Enable Google Play Protect** and keep it on; consider Advanced Protection for high-risk users.
6. **Use biometric confirmation** for payments where available; it raises the cost of automated taps.
7. **Check device-admin apps** and remove unknown ones.
8. **If you suspect fraud, contact the bank from a different device** — not from the phone you suspect.

Accessibility is one of the clearest examples of the report's central theme: a feature built to include people becomes a capability that can be turned against them, and the difference is consent that the interface does not make meaningful.

---

# PART VI — APPLE, ANDROID AND MOBILE EXPLOIT CHAINS

## 6.1 The chain, not the bug

A modern phone compromise is rarely one vulnerability. It is a sequence:

1. **Initial access** — a message, a web page, an app, a physical connection, or a malicious configuration.
2. **Code execution** — a memory-corruption bug in a parser or a scripting engine.
3. **Sandbox escape** — breaking out of the process that was compromised.
4. **Privilege escalation** — gaining kernel or system-level rights.
5. **Persistence** — surviving reboot, or re-infecting on demand.
6. **Collection and exfiltration** — reading messages, location, microphone, camera, keys.

Each step is a separate technical problem. A chain is valuable because it solves all of them. This is why "there is a vulnerability" and "your phone is compromised" are very different statements.

## 6.2 Apple ecosystem

### iOS and iPadOS vulnerabilities

Apple's security model is strong and layered: code signing, sandboxing, Pointer Authentication, a signed boot chain, and a fast update pipeline. It is also a very large attack surface: WebKit, image and media parsers, the messaging stack, the baseband, and thousands of system services.

The public record of exploited-in-the-wild iOS flaws is continuous. Apple's security notes and CISA's Known Exploited Vulnerabilities catalogue document them year by year. A representative set:

| CVE | Component | Year | Significance |
|---|---|---|---|
| CVE-2021-30860 | CoreGraphics (JBIG2) | 2021 | FORCEDENTRY; zero-click iMessage delivery of Pegasus |
| CVE-2023-41064 / -41061 | ImageIO / Wallet | 2023 | BLASTPASS; zero-click via malicious image |
| CVE-2023-38606, -41990, -32434, -32435 | Kernel / FontParser / WebKit | 2023 | Operation Triangulation chain |
| CVE-2025-43300 | ImageIO | 2025 | Used with CVE-2025-55177 in a WhatsApp zero-click chain |
| CVE-2026-86950 | CoreGraphics | 2026 | Out-of-bounds write, CVSS 8.8, exploited against "specific targeted individuals" |

[Confirmed — Apple advisories, CVE records, CISA KEV]

**Required access:** for zero-click chains, only the ability to send a message or cause content to be processed. **Prevalence:** extremely low relative to the installed base; concentrated on high-value targets. **Consequence:** full device access, including messages, location, microphone, camera, and credentials. **Mitigation:** patch immediately, enable Lockdown Mode if at risk, disable auto-download of message attachments where possible.

### WebKit and browser exploitation

WebKit renders web content in Safari and, on iOS, in every browser (all browsers use WebKit). A WebKit exploit therefore reaches users regardless of which browser icon they tap. WebKit has been a recurring target for both commercial spyware and criminal exploit kits.

**Conditions:** a malicious web page, often delivered by link, sometimes injected into a legitimate site. **Mitigation:** keep iOS updated; Lockdown Mode restricts just-in-time compilation and some web features, reducing exploitability at a usability cost.

### iMessage and message-processing surfaces

iMessage automatically processes attachments, link previews, and rich content. Apple introduced **BlastDoor** (iOS 14) to parse messages in a hardened sandbox, which raised the cost of attack but did not eliminate it: FORCEDENTRY and BLASTPASS both defeated the surrounding architecture.

**What this means practically:** a message can compromise a phone without being opened, in principle. In practice, such chains are scarce, expensive, and targeted. The correct response is not to abandon messaging but to patch promptly and to use Lockdown Mode if you are a plausible target.

### Apple account compromise

An Apple ID is the recovery root for much of a person's digital life. Compromise of the account — through phishing, credential reuse, or recovery abuse — can expose iCloud data, allow device removal, enable location tracking, and reset other passwords.

**Distinguish:** account compromise is not device compromise. An attacker inside your Apple account reads your backups and synced data; they do not automatically read end-to-end encrypted content or install spyware.

### Malicious configuration profiles

A configuration profile is an XML file that changes device settings: Wi-Fi, VPN, certificates, restrictions, mail accounts, web proxies. Installing one requires user approval, sometimes with a warning that the profile is unsigned.

Malicious profiles are used to:

- route traffic through an attacker's proxy;
- install a root certificate, enabling TLS interception;
- enrol the device in mobile device management (MDM), granting remote control;
- disable security features or prevent profile removal.

**Conditions:** the user must install the profile, usually through a convincing pretext ("install this to join the network", "this is required by your employer"). **Mitigation:** never install a profile you did not request; check Settings → General → VPN & Device Management; remove unknown profiles.

### MDM abuse

MDM is a legitimate enterprise tool with extensive power: install and remove apps, enforce passcodes, locate, lock, wipe, and inspect some device data. It becomes abuse when a victim is tricked into enrolling, or when an attacker obtains MDM credentials.

The 2024–2025 "NoviSpy" reporting is instructive: forensic tools and spyware were used together against journalists and activists, with device access obtained through physical or investigative means. [Confirmed — Amnesty Tech reporting; specific attribution limited]

### iCloud credential and recovery risks

Account recovery is a security boundary that is often weaker than the password. Documented risks include:

- **Recovery contact / trusted device abuse** — an attacker with access to a trusted device can approve a reset.
- **Security question guessing** — where legacy recovery is enabled.
- **SIM swap** — intercepting SMS-based recovery.
- **Support social engineering** — convincing a support agent to reset access.

Apple has shifted toward end-to-end encrypted recovery and hardware keys, which improves the situation for users who enable them.

### Keychain security and limits

iCloud Keychain syncs passwords and passkeys across devices with end-to-end encryption. It is a strong design. Its limits:

- It protects secrets *at rest and in sync*, not a compromised device — malware with sufficient privilege can read what the app can read.
- A weak device passcode undermines it; the passcode is part of the key hierarchy.
- Shared groups and family sharing broaden access by design.
- Recovery paths can bypass the encryption if the attacker controls the account.

### Commercial spyware

Covered in Part VIII. For the Apple section, the key point is that commercial spyware is the main customer for the most expensive iOS chains, and that Apple now notifies targeted users.

## 6.3 Android ecosystem

### Operating-system vulnerabilities and patch fragmentation

Android is a large, diverse ecosystem. The core is hardened and improving (scoped storage, permission auto-reset, memory tagging on newer hardware), but the tail of devices is long. Many devices receive security patches late, briefly, or never.

Documented exploited flaws include:

- **Stagefright (2015)** — media parsing flaws enabling remote code execution via MMS or media playback.
- **Janus (CVE-2017-13156)** — signature bypass allowing a malicious APK to be installed as an update to a legitimate app.
- **StrandHogg (2019) / StrandHogg 2.0 (CVE-2020-0096)** — task hijacking enabling phishing overlays.
- **BlueFrag (CVE-2020-0022)** — Bluetooth remote code execution on some Android versions.
- **Dirty Pipe (CVE-2022-0847)** — kernel flaw allowing file overwrite and privilege escalation.
- **Binder use-after-free (CVE-2019-2215)** — exploited in the wild by a commercial spyware vendor's Android implant.

[Confirmed — vendor advisories, Project Zero, CISA KEV]

### Malicious APK distribution

Android allows installation from outside the store. That is a feature for developers and a delivery channel for malware. Common lures: "modded" apps, cracked games, banking "security updates", delivery notifications, and fake government apps.

Since Android 13, "restricted settings" adds friction for sideloaded apps seeking accessibility or notification access, which has measurably slowed some malware. It has not stopped it: droppers distributed through messaging or malicious ads install a payload that then requests the permission from a trusted-looking context.

### Accessibility-service abuse

Covered in Part V. It remains the single most important Android fraud mechanism.

### Privilege escalation

Android's permission model is enforced by the kernel and by system services. Escalation flaws — in the kernel, in vendor drivers, in system apps — convert a limited app into a system-level compromise. Vendor-specific drivers are a recurring source because they are numerous and less scrutinised.

### Baseband and driver vulnerabilities

The baseband is the separate processor that handles cellular radio. It runs proprietary firmware, communicates with the application processor over a shared interface, and is a high-value target because it is reachable by the network itself.

Documented research includes Qualcomm modem and DSP flaws disclosed in 2021, and a long history of baseband parsing bugs across vendors. Exploitation requires either a malicious base station (IMSI catcher class) or a network-level attack, plus a vulnerable modem. [Confirmed for the vulnerability classes; exploitation in the wild against individuals is rare and hard to attribute]

### Device-management abuse

Android Enterprise and device-owner modes grant administrative control. Abuse follows the same pattern as Apple MDM: tricked enrolment, stolen credentials, or a malicious "security" app that requests device-admin rights.

### Credential-stealing malware and banking trojans

The dominant Android criminal ecosystem is financial. Families such as Cerberus, Anubis, Alien, TeaBot/Anatsa, SharkBot, Xenomorph, Octo, and Medusa combine:

- SMS and notification interception (for OTPs);
- overlay screens (for credentials);
- accessibility automation (for transactions);
- remote-access features (for live fraud);
- contact-list exfiltration (for propagation).

Distribution is often a "dropper" app that appears benign, then downloads the payload after installation — a technique that defeats store review.

### Supply-chain weaknesses

Pre-installed malware has been documented on low-cost devices and through third-party firmware. Advertising SDKs and "cleaner" apps have shipped intrusive behaviour. The common factor is a supply chain with weak review and strong financial incentives.

## 6.4 Required access, prevalence, consequence, mitigation

| Threat | Attacker needs | Known affected versions | Observed prevalence | Consequence | Mitigation |
|---|---|---|---|---|---|
| Zero-click iMessage chain | Ability to send a message; exploit | iOS before the patched release | Very low; targeted | Full device access | Patch; Lockdown Mode |
| WebKit exploit | Malicious page + exploit | iOS/Safari before patch | Low; targeted or watering-hole | Code execution, data theft | Patch; avoid unknown links |
| Malicious profile/MDM | User installs profile or enrols | Any | Low but rising in scams | Traffic interception, remote control | Never install unrequested profiles |
| Apple account takeover | Credentials or recovery access | Any | Moderate | Cloud data, account lockout | Strong unique password, hardware key, recovery review |
| Android banking trojan | User installs APK/dropper | Broad; older devices worse | High in some regions | Account drain, OTP theft | No sideloading; accessibility audit |
| Android kernel/driver exploit | Exploit + delivery | Unpatched devices | Low | Full compromise | Patch; buy supported devices |
| Baseband attack | Network-level capability | Specific modems | Very low | Interception | Patch; avoid untrusted networks for high-risk use |
| Pre-installed malware | Supply-chain position | Specific low-cost models | Episodic | Data theft, ad fraud | Buy from reputable vendors; verify |
| Credential stealer | Malicious app or phishing | Any | High | Account takeover | Password manager, passkeys, 2FA |

## 6.5 Account compromise versus device compromise

This distinction should be taught in every digital-literacy programme:

**Account compromise** means someone has your credentials or a valid session. They see what the account sees: email, files, backups, contacts, purchase history. They cannot read end-to-end encrypted messages that are decrypted only on your device, and they cannot turn on your microphone.

**Device compromise** means code is running on your phone with elevated privilege. The attacker sees what the device sees: notifications, screen content, keystrokes, location, microphone, camera, and the plaintext of messages after decryption.

The two can combine — a compromised device can steal account tokens — but they are different failures with different evidence and different responses. A password reset fixes the first. It does not fix the second.

## 6.6 What actually reduces risk

- **Patch within days, not months.** Both platforms ship fixes for exploited flaws; the gap between disclosure and exploitation is often measured in days.
- **Use Lockdown Mode** if you are a plausible target (journalist, activist, official, executive, litigant). It is not for everyone; it is for people whose threat model justifies the trade-offs.
- **Enable Advanced Data Protection / advanced account security** where available, and register hardware security keys.
- **Never install configuration profiles or MDM enrolment you did not initiate.**
- **Do not sideload apps.** If you must, remove the capability afterwards.
- **Audit accessibility and device-admin lists** monthly.
- **Keep the number of apps low.** Attack surface is a function of installed software.
- **Separate identities:** a recovery email that is not your daily driver, and a phone number that is not your only second factor.
- **Assume that a device you no longer control is compromised** — sell, wipe, and revoke sessions.

---

# PART VII — WHATSAPP, ZERO-CLICK ATTACKS AND ENCRYPTED MESSAGING

## 7.1 What end-to-end encryption guarantees

WhatsApp uses the Signal Protocol: a double-ratchet design that derives a fresh key for each message, provides forward secrecy, and authenticates participants through safety numbers and key changes. In a correctly implemented system, the server relays ciphertext it cannot read, and the network sees only encrypted blobs.

That guarantee is real and it is narrow. It covers:

- message content and attachments in transit;
- voice and video call media;
- group messages, with a sender-key design;
- message content at rest on the server (which holds ciphertext).

It does not cover:

- **metadata** — who you talk to, when, how often, from which IP, on which device;
- **your contact graph**, which the platform necessarily processes to route messages;
- **backups**, unless end-to-end encrypted backup is enabled;
- **notifications**, which render plaintext on your lock screen;
- **the endpoint** — the phone, its screen, its keyboard, its clipboard;
- **anything you tell a third-party app** — including "share to" integrations and cloud drives.

## 7.2 Documented WhatsApp vulnerabilities

**CVE-2019-3568 (May 2019).** A buffer overflow in the VOIP stack allowed a crafted call sequence to execute code. It was exploited to deliver Pegasus to approximately **1,400** users. WhatsApp patched it within days and sued the vendor. [Confirmed — WhatsApp advisory, court record]

**CVE-2025-55177 (patched September 2025).** A vulnerability in link-preview processing on iOS and macOS, exploited in combination with Apple's **CVE-2025-43300** (ImageIO) in a targeted zero-click campaign. WhatsApp notified affected users and published an advisory. [Confirmed — WhatsApp security advisory, Apple advisory]

**CVE-2024-? class advisories.** WhatsApp publishes a regular security advisory page listing memory-safety and logic flaws in media parsing, sticker handling, and call setup, most rated moderate to high and most without evidence of exploitation. [Confirmed — vendor advisories]

The pattern is consistent: the message-processing path — media, previews, calls — is the attack surface, because it must parse untrusted input before the user makes a decision.

## 7.3 Zero-click mechanics in messaging

A zero-click chain in a messaging app typically works like this:

1. The attacker sends a message with a specially crafted attachment, preview, or call setup packet.
2. The app's parser processes it automatically — to generate a thumbnail, decrypt media, or negotiate a call.
3. A memory-corruption bug yields code execution inside the app's sandbox.
4. A kernel or sandbox-escape bug yields system access.
5. The implant persists and begins collection.

Every step is hard. The result is that zero-click capability is concentrated among a small number of actors: commercial spyware vendors, a handful of state-linked teams, and exploit brokers who sell to both.

**What the public record supports:** such chains exist, have been used against journalists and civil-society figures, and are patched when discovered. **What it does not support:** that unusual calls, missed calls, or strange notifications are evidence of spyware. Most are network bugs, spam, or ordinary software failure.

## 7.4 Account takeover: the cheaper path

For every zero-click exploit in existence, there are thousands of account takeovers. The mechanisms:

**SMS interception / SIM swap.** The attacker convinces a carrier to port the victim's number to a SIM they control, then receives the verification code. SIM swap complaints to the FBI rose to **971** in 2025 with **$17.4 million** in reported losses — a small fraction of the real total, since most swaps are used to enable other fraud. [Confirmed — IC3 2025]

**Verification-code phishing.** A message claims to be from a friend or support agent and asks for the six-digit code. The code is the account.

**Linked-device abuse.** WhatsApp supports companion devices (web, desktop, tablet). An attacker with brief access to an unlocked phone, or with a phishing page that mimics the linking flow, can pair their own device and receive messages in real time. Some 2025 campaigns used social engineering to persuade users to "link" a device for support purposes.

**Support impersonation.** Fraudsters pose as WhatsApp support and ask for codes or screen sharing. WhatsApp does not initiate such requests.

**Number recycling.** A phone number that is reassigned to a new owner can be used to register the account if the original owner did not enable two-step verification and did not migrate.

## 7.5 Cloud backups: the quiet exception

By default, WhatsApp chats are backed up to iCloud or Google Drive. Unless the user enables **end-to-end encrypted backup** with a passphrase, the backup is protected by the cloud provider's encryption-at-rest and account security — not by the Signal Protocol.

That means:

- A compromised Apple or Google account may expose the backup.
- A lawful request to the cloud provider may obtain it.
- A backup restored to a new device decrypts everything.

This is the single largest gap between what users believe ("my WhatsApp is encrypted") and what is true ("my messages in transit are encrypted; my backup may not be"). [Confirmed — WhatsApp documentation]

## 7.6 Metadata: what the envelope reveals

Even with perfect content encryption, the platform knows:

- account identifiers and phone numbers;
- contact uploads (address book matching);
- message timestamps and frequency;
- group membership;
- IP addresses and approximate location;
- device type and app version;
- status/story views and call durations.

This is enough to map a social graph, infer work patterns, identify sources, and establish contact between people. Intelligence services value metadata precisely because it survives encryption. [Confirmed — platform privacy documentation, academic analysis]

## 7.7 Endpoint exposure

The most common way an encrypted message is read is on the endpoint:

- **Notification previews** on the lock screen.
- **Cloud sync of screenshots** and copied text.
- **Malicious apps with notification access** (Part V).
- **Screen recording or mirroring** during a support scam.
- **A compromised device** (Part VI).
- **A shared or borrowed device** with the account still logged in.

None of these requires breaking encryption. All of them are common.

## 7.8 Commercial spyware targeting messaging

WhatsApp has been a repeated delivery vector for commercial spyware because it is ubiquitous and processes rich content. Documented campaigns include:

- **2019** — Pegasus via CVE-2019-3568 (approximately 1,400 users).
- **2025 (January)** — WhatsApp disclosed that it had disrupted a Paragon Solutions "Graphite" campaign targeting around **90** users, including journalists and civil-society figures, and notified them. [Confirmed — WhatsApp statement, press reporting]
- **2025 (August–September)** — a zero-click chain using CVE-2025-55177 and CVE-2025-43300, attributed by WhatsApp with high confidence to NSO Group, targeting a small number of users. [Confirmed — vendor advisory; attribution by vendor]

The legal aftermath matters for public understanding: in December 2024 a U.S. court found NSO liable for the 2019 intrusion; in May 2025 a jury awarded $444,719 in compensatory and $167.254 million in punitive damages; in October 2025 the judge issued a permanent injunction barring NSO from targeting WhatsApp, while reducing punitive damages to just over $4 million. [Confirmed — court record, reporting]

## 7.9 What encryption does and does not protect

| Scenario | Protected? | Why |
|---|---|---|
| Network operator reads message content | Yes | E2EE |
| Platform reads message content | Yes (in transit/at rest) | E2EE |
| Platform sees who you message | No | Metadata |
| Attacker with your unlocked phone reads chats | No | Endpoint |
| Spyware on your phone reads chats | No | Endpoint |
| Cloud backup without E2EE passphrase | No | Provider-held keys |
| Attacker takes over your account | No | They are a participant |
| Notification preview on lock screen | No | Rendered plaintext |
| Message forwarded by recipient | No | Human action |

## 7.10 Practical protections

1. **Enable two-step verification** and set a PIN you do not reuse.
2. **Enable end-to-end encrypted backups** and store the passphrase safely — losing it loses the backup.
3. **Disable message previews** on the lock screen.
4. **Review linked devices** regularly and log out anything unfamiliar.
5. **Never share a verification code.** No legitimate support process needs it.
6. **Verify safety numbers** with high-value contacts, or use a platform with transparent key verification.
7. **Keep the app and OS updated.**
8. **Use disappearing messages** for sensitive conversations — while understanding they do not defeat a compromised endpoint.
9. **Treat "support" contact as fraud** unless you initiated it in-app.
10. **If you are a high-risk user**, assume metadata is public and choose channels accordingly.

The honest summary: WhatsApp's encryption is strong and worth using. It solves the interception problem. It does not solve the endpoint problem, the account problem, or the metadata problem — and those are where most real-world exposure occurs.

---

# PART VIII — TARGETED SPYWARE AND COMMERCIAL SURVEILLANCE

## 8.1 What "spyware" means here

This section concerns a specific product category: **mercenary or commercial spyware** — intrusion software sold to governments and, occasionally, to private clients, capable of full device takeover, sold with support and infrastructure, and priced in the millions.

It is not the same as:

- **stalkerware**, sold to consumers to monitor partners or children;
- **banking trojans**, which monetise credentials;
- **infostealers**, which sell logs;
- **adware**, which monetises attention.

The distinction matters because the capabilities, the customers, and the defences are different. Confusing them produces both panic ("spyware is everywhere") and complacency ("I am not important enough").

## 8.2 Pegasus (NSO Group)

**What is publicly established.** Pegasus is an iOS and Android implant developed by the Israeli company NSO Group. It provides access to messages, photos, microphone, camera, location, and app data; it can self-destruct and limit its own data collection. It has been delivered through zero-click iMessage chains (FORCEDENTRY, CVE-2021-30860), WhatsApp call handling (CVE-2019-3568), and other vectors. [Confirmed — Citizen Lab forensic reports, Apple and WhatsApp advisories, court records]

**Scale.** The Pegasus Project (2021), a consortium of journalism organisations working with Amnesty International's Security Lab and Forbidden Stories, analysed a leaked list of **more than 50,000** phone numbers selected as potential targets across more than 50 countries. Inclusion on the list was not proof of infection; the consortium's reporting combined the list with forensic confirmation for a subset. [Confirmed — consortium publication; the list itself is a selection, not an infection record]

**Documented targeting.** Journalists, human-rights defenders, lawyers, opposition politicians, and family members of targets have been forensically confirmed as infected in multiple countries. In September 2026, Citizen Lab confirmed a Pegasus infection of a Serbian student activist's iPhone, with high-confidence indicators in December 2025 – January 2026, delivered by an iMessage zero-click exploit subsequently patched in iOS 18.4.1; at least 14 people in the student movement and civil society had received Apple Threat Notifications. [Confirmed — Citizen Lab, SHARE Foundation, Reuters]

**Legal and commercial status.** In December 2024 a U.S. court found NSO liable for the 2019 WhatsApp intrusion; a jury awarded damages in May 2025; in October 2025 the court issued a permanent injunction and reduced punitive damages. NSO has denied responsibility for customer use and has changed ownership, with a group of American investors acquiring control. [Confirmed — court record, reporting]

## 8.3 Predator (Intellexa / Cytrox)

**What is publicly established.** Predator is an implant associated with the Intellexa consortium, originally developed by Cytrox. Citizen Lab and Access Now documented infections of journalists, politicians, and civil-society figures in several countries, often delivered by one-click links and, in at least one documented campaign, by **network injection** — intercepting insecure HTTP traffic on a network to redirect the target to an exploit server. [Confirmed — Citizen Lab research; vendor/consortium structure documented by reporting and sanctions]

**Sanctions.** The U.S. Treasury sanctioned Intellexa and its founder in September 2023, and later designated additional linked entities and individuals. The EU has considered similar measures. [Confirmed — Treasury statements]

**Why it matters for this report.** Predator is the clearest documented case of spyware delivery through *network conditions* rather than a messaging app alone. It demonstrates that a hostile Wi-Fi or ISP path can be part of a spyware chain — which is exactly the convergence described in Part XI.

## 8.4 Other documented families

**Graphite (Paragon Solutions).** A commercial product marketed to governments, capable of broad device access. In January 2025 WhatsApp disclosed that it had disrupted a Graphite campaign targeting around 90 users, including journalists and civil-society figures; Italy subsequently restricted the company's access to its market. [Confirmed — WhatsApp statement, press reporting, regulatory action]

**Hermit (RCS Lab).** Documented by Lookout and Google's Threat Analysis Group targeting iOS and Android devices in Kazakhstan and Italy, using SMS lures that installed a malicious app or profile. [Confirmed — vendor research]

**DevilsTongue (Candiru).** Documented by Citizen Lab and Microsoft targeting journalists, activists, and politicians, delivered through one-click links and, in some cases, compromised websites. [Confirmed — vendor research]

**NoviSpy.** Android spyware documented by Amnesty Tech in 2024, installed in some cases using forensic extraction tools against devices in police custody, then used to monitor the target after return. [Confirmed — Amnesty Tech; specific operational details limited]

**Stalkerware.** Consumer-grade monitoring apps, often installed with physical access to the device, marketed as parental or employee monitoring. They are a real and common harm, especially in domestic-abuse contexts, and are legally distinct from mercenary spyware.

## 8.5 Exploit brokers and the market

Commercial spyware firms do not find most of their bugs. They buy exploit chains from brokers, or from independent researchers, and integrate them into a product.

The market has a visible price structure:

- memory-corruption bugs with a sandbox escape are worth hundreds of thousands of dollars;
- full iOS or Android chains with zero-click delivery have been advertised at several million;
- "exclusive" or "no-report" deals cost more.

These are advertised figures; actual transactions are private. The direction is what matters: the cost of a full chain is high enough that only well-funded buyers can afford one, and low enough that a mid-sized government can. [Confirmed for the market's existence and general price range; specific figures are [Plausible but unverified]]

Brokers have also been documented selling to multiple customers, which is why the same vulnerability can appear in several campaigns.

## 8.5b Infrastructure

Spyware is a service, not a single file. Behind an infection sits a supply chain of infrastructure:

- **Delivery domains** — short-lived sites that serve exploits, often dressed as news or file-sharing pages.
- **Anonymised network access** — commercial proxy and VPN services, and compromised third-party servers, used to make the operator's origin hard to establish.
- **Command-and-control** — infrastructure that receives collected data and issues tasks, sometimes segmented by customer.
- **Operator consoles** — interfaces for selecting targets, retrieving data, and managing implants, documented in forensic reporting.
- **Kill switches and self-destruct** — features that remove the implant when exposure is suspected.

Citizen Lab, Amnesty's Security Lab, and Google's Threat Analysis Group have published mappings of infrastructure clusters associated with Pegasus and Predator. These mappings are inferences from network artefacts, not vendor disclosures, and they carry the usual limits of technical attribution. [Confirmed for the existence and general structure of the infrastructure; attribution to specific operators remains inferential]

The practical consequence for defenders is that blocking a single domain is nearly useless. Detection depends on behavioural signals — anomalous connections, process behaviour, forensic artefacts — rather than static blocklists.

## 8.6 Zero-click delivery mechanisms

| Vector | Requires | Examples |
|---|---|---|
| Messaging attachment/preview | Ability to send a message | FORCEDENTRY, BLASTPASS, CVE-2025-55177 |
| Call setup | Ability to place a call | CVE-2019-3568 |
| Web page | Target visits a link or a compromised site | WebKit chains, DevilsTongue |
| Network injection | Position on the network path, insecure HTTP | Predator campaign (Citizen Lab) |
| SMS/MMS | Phone number | Hermit lures (one-click) |
| Calendar/contact card | Ability to send an invite | Documented in research |
| Physical/forensic access | Device in custody or unlocked | NoviSpy |

Each requires a different defensive posture. Messaging vectors are mitigated by patching and Lockdown Mode. Network injection is mitigated by HTTPS everywhere and avoiding untrusted networks. Physical access is mitigated by device security and legal safeguards.

## 8.7 Forensic indicators — and their limits

Public forensic tools (Amnesty's Mobile Verification Toolkit, Kaspersky's iShutdown, Citizen Lab's methodologies) look for:

- abnormal shutdown logs (a common artefact of some iOS implants);
- suspicious processes and launch daemons;
- unusual network connections to known infrastructure;
- configuration profiles and MDM enrolments;
- anomalous data usage patterns;
- crash logs referencing exploit-prone components.

**Limits.** Modern implants are designed to leave little trace; absence of indicators is not proof of absence; indicators can produce false positives; and forensic examination requires expertise. This is why Apple Threat Notifications matter: they are a high-confidence signal from a party with visibility that the user lacks.

**What not to do.** Do not "clean" a suspected device by resetting it before seeking help. Do not install random "spyware detectors". Do not confront a suspected attacker using the compromised device.

## 8.8 Target selection and operational limits

Mercenary spyware is expensive, so customers select targets with political, legal, journalistic, or commercial value. Documented categories:

- journalists investigating corruption or security services;
- human-rights defenders and activists;
- lawyers and litigants;
- opposition politicians;
- government officials and diplomats;
- executives in sensitive sectors;
- family members and associates of the above (a documented pattern used to apply pressure).

**Operational limits** are real:

- the implant must be delivered, which requires a vulnerable version or a novel exploit;
- the infection must survive updates and reboots;
- the operator must maintain infrastructure and avoid detection;
- the political cost of discovery is high, which is why vendors claim plausible deniability.

## 8.9 What is established, and what is not

**Established:** the products exist; they have been forensically confirmed on devices; they have been sold to governments; they have been used against civil society; courts and regulators have acted; Apple and WhatsApp notify targets.

**Not established:** the precise number of infections; the full customer list; the identity of operators in specific cases without official attribution; whether any particular individual was targeted based on a single artefact.

**Unsupported:** claims that spyware is installed on "most phones", that a particular country runs a global surveillance programme without documentary evidence, or that an unexplained battery drain proves infection.

## 8.10 What a person can actually do

1. **Know whether you are a plausible target.** If you work on corruption, conflict, minority rights, or litigation against powerful actors, your threat model is different.
2. **Enable Lockdown Mode** on iPhone if you are in that category.
3. **Patch within hours** of an update, not weeks.
4. **Use hardware security keys** for your primary accounts.
5. **Reduce the attack surface:** fewer apps, fewer message previews, no untrusted profiles.
6. **If you receive an Apple Threat Notification, treat it as real** and contact a recognised digital-security helpline before doing anything else.
7. **Preserve the device** if you intend to seek forensic help.
8. **Assume metadata is exposed** and manage your associations accordingly.

The most important correction this section can make is to the two failure modes of public understanding: not "spyware is everywhere", and not "I am nobody". The evidence supports a narrow, specific, serious risk concentrated on identifiable groups — and a set of cheap, effective countermeasures for everyone else.

---

# PART IX — DIGITAL MEDIA, PERSONAL CONTENT AND CLOUD EXPOSURE

## 9.1 The shift from devices to identities

A decade ago, the unit of compromise was the device. Today it is the identity. Photographs, documents, and messages live in accounts that sync across devices, share with family, and authorise third-party apps. An attacker who obtains the identity does not need the device at all.

This is why "my phone was never stolen" is not a reassuring statement. Most media exposure happens through accounts, tokens, and sharing — not through physical possession.

## 9.2 Entry routes, in order of frequency

### Compromised cloud accounts

Credential phishing, credential stuffing with reused passwords, infostealer malware, and recovery-channel abuse. Once inside, the attacker sees the account as the owner does: photo libraries, documents, backups, contacts, and linked services.

Documented at scale: the 2014 iCloud photo leak, in which attackers used phishing and password guessing against celebrity accounts; the 2023 23andMe breach, driven by credential stuffing against reused passwords; the 2024 Snowflake-linked campaign, in which stolen credentials gave access to customer data at multiple large organisations. [Confirmed — company statements, regulatory filings, reporting]

**What the attacker gets:** whatever the account holds and whatever it can delegate. **What they do not get:** end-to-end encrypted content that requires a device-held key, unless they also control a trusted device.

### Stolen authentication tokens

Cookies and OAuth refresh tokens are bearer credentials. Malware that copies them — "infostealers" such as RedLine, Lumma, Vidar, and their successors — can replay a session without the password or the second factor.

This is the mechanism behind a large share of "I changed my password and they still got in" reports. The fix is not a password change; it is **session revocation** — signing out of all devices — plus removing the malware.

**Conditions:** malware on the device, or a malicious extension, or physical access to an unlocked browser. **Evidence:** [Confirmed — the infostealer ecosystem is extensively documented; stolen session cookies are a traded commodity]

### Malicious apps with media permissions

An app with photo-library access can read every image. An app with microphone or camera access can capture. Permissions are requested at install or first use, often with vague descriptions, and rarely revoked.

On iOS, the limited-photo picker (iOS 14+) reduced blanket library access; on Android, scoped storage and the photo picker do the same. These are meaningful improvements, but an app that legitimately needs "all photos" still gets them.

### Device theft and unlocked-device access

A stolen unlocked phone is a complete identity: email, banking, photos, messaging, and password manager. Even a locked phone can expose notifications, and some devices allow assistant access from the lock screen.

The realistic threat is not a sophisticated attacker. It is opportunistic theft, a borrowed phone, or a family member.

### Cloud synchronisation risks

Sync is a feature that makes compromise durable. Delete a photo locally, and it may persist in the cloud; delete it in the cloud, and it may persist on another device or in a backup. Conversely, a compromised account propagates to every signed-in device.

Sync also creates **accidental exposure**: a folder shared with a link, a family group, a work account syncing personal photos, or a backup that includes sensitive documents.

### Shared albums and accidental exposure

"Anyone with the link" sharing is convenient and dangerous. Links get forwarded, indexed, or guessed. Some services have had link structures that were enumerable. The content is not "hacked"; it is published.

### Metadata leakage

Photos carry EXIF data: GPS coordinates, timestamps, device model, sometimes software and edit history. Documents carry author names, revision history, and comments. Social platforms strip some metadata; email attachments and cloud links often do not.

**Impact:** location history, home address, workplace, patterns of life, and the identity of devices. This is often more sensitive than the image itself.

### Malicious browser extensions

Extensions run inside the browser with broad permissions: read and change data on all sites, access cookies, modify pages, and observe keystrokes. A malicious or compromised extension can steal sessions, inject phishing forms, and exfiltrate documents.

In December 2024, a widely used extension was compromised in a supply-chain attack and used to steal credentials from users. [Confirmed — vendor disclosure, reporting]

### Insecure backups

Unencrypted backups on external drives, on shared network storage, or in cloud accounts with weak passwords are a common exposure. Phone backups are especially sensitive: they can contain messages, call logs, app data, and saved passwords.

### Insider access and privileged administrative misuse

Cloud providers and SaaS vendors employ administrators with access to systems. Strong providers use access controls, logging, and separation of duties; none of that is absolute. Documented cases of insider misuse exist across industries, though they are far rarer than external compromise.

### Third-party breaches

Your data may be exposed by a service you barely remember: a fitness app, a hotel loyalty programme, a delivery service, a school portal. The 2023 MOVEit campaign affected thousands of organisations and hundreds of millions of individuals through a single file-transfer vulnerability. [Confirmed — vendor and regulator disclosures]

### AI tools

Uploading sensitive content to an AI assistant creates a new copy outside your control. Whether it is retained, reviewed, or used for training depends on the provider, the plan, and the settings. Consumer products often reserve broader rights than enterprise agreements.

**Practical rule:** treat an AI chat like email to a third party. Do not upload identity documents, medical records, contracts under NDA, or images of other people without consent.

## 9.3 What is accessible under each scenario

| Scenario | Local files | Cloud files | E2EE cloud | Backups | Messages |
|---|---|---|---|---|---|
| Stolen unlocked phone | Yes | Yes (signed in) | Yes (if unlocked) | Partial | Yes |
| Stolen locked phone | No (encrypted) | No | No | No | Notifications only |
| Cloud account takeover | No | Yes | No (key on device) | Yes (if in account) | Depends on backup E2EE |
| Session token theft | No | Yes (until revoked) | No | Yes | Depends |
| Malicious app with photo permission | Selected albums | Via sync | Via sync | No | No |
| Malicious extension | Downloads | Yes (browser session) | Web access limited | No | Web session |
| Third-party breach | No | Depends on data held | No | No | No |
| Insider at provider | No | Possible | No (keys) | Possible | Possible |

## 9.4 The iCloud and Google specifics

**iCloud.** Standard iCloud Backup is encrypted in transit and at rest, but Apple holds the keys for most categories unless **Advanced Data Protection** is enabled, which extends end-to-end encryption to backups, photos, and more. With ADP on, Apple cannot recover the data for you; losing your recovery methods means losing the account.

**Google.** Google encrypts data at rest and in transit; some categories are end-to-end encrypted (for example, some backup and messaging features). Account takeover exposes everything not end-to-end encrypted.

**The trade-off is real:** end-to-end encryption improves security and removes recovery. Users should make that choice deliberately, not by default.

## 9.5 Practical protections

1. **Use a password manager** with unique passwords; enable passkeys where possible.
2. **Turn on advanced account protection** (ADP, Advanced Protection Program) for high-value accounts.
3. **Review active sessions** monthly and revoke unfamiliar ones.
4. **Limit OAuth grants** — remove apps you no longer use.
5. **Reduce photo-library permissions** to selected items where the app allows it.
6. **Strip location metadata** before sharing images publicly; most platforms do it, email does not.
7. **Avoid "anyone with the link"** for sensitive albums; use named recipients.
8. **Encrypt local backups** and keep them offline.
9. **Audit browser extensions** and remove anything you cannot justify.
10. **Treat AI chats as third parties**, and check retention settings.
11. **Assume breach notifications are incomplete**; change credentials on your own schedule, not only after an incident.

The central insight of this section is simple: content is only as protected as the weakest path to it. A photograph may be encrypted at rest and still be exposed by a shared link, a synced folder, a backup, or an extension. Security is a property of the whole path, not of the storage medium.

---

# PART X — CRYPTOCURRENCY AND DIGITAL FINANCIAL EXPOSURE

## 10.1 What the cryptography does — and does not — protect

A blockchain is a ledger secured by cryptographic signatures and economic incentives. To move funds from an address, you must produce a valid signature with the corresponding private key. For major networks, forging that signature is not a realistic attack.

Everything else is software and people:

- the **wallet** that holds the key and constructs transactions;
- the **device** on which the wallet runs;
- the **browser extension** or website that asks for a signature;
- the **exchange** that custodies funds;
- the **bridge** that moves assets between chains;
- the **smart contract** that holds or routes value;
- the **person** who approves a transaction.

Almost every documented loss occurs in one of those layers, not in the cryptography.

## 10.2 The attack catalogue

### Wallet-draining approvals

Many token standards allow a contract to spend your tokens if you grant an allowance. A malicious site asks you to "connect wallet" and then to sign a transaction that looks like a login but is actually an approval — sometimes unlimited. The attacker can drain the approved asset later, without further interaction.

**Conditions:** a signed transaction. **Evidence:** [Confirmed — mass drainer kits have operated for years, marketed as a service to criminals]

**Defence:** read what you sign; use a wallet that simulates transactions; revoke unused approvals; use a separate "hot" wallet with limited funds.

### Seed-phrase theft

The seed phrase regenerates every key in the wallet. It is the single point of failure. It is stolen through:

- phishing sites asking for "wallet verification";
- fake support agents;
- screenshots and cloud notes;
- malware that scans for known wallet files;
- physical observation;
- "recovery" scams after a loss.

**Rule:** no legitimate service ever needs your seed phrase. Not support, not a wallet update, not an airdrop.

### Clipboard hijacking

Malware monitors the clipboard and replaces a copied cryptocurrency address with the attacker's. The victim pastes, sees a plausible address, and sends funds to the wrong place.

**Defence:** verify the full address on the hardware wallet screen, and check the first and last characters — the standard mitigation, though not sufficient against address-poisoning attacks designed to match those characters.

### Fake wallets and extensions

Search ads, cloned app-store listings, and trojanised installers distribute wallets that generate keys the attacker knows, or that exfiltrate the seed. This is a supply-chain attack on trust in search results and app stores.

**Evidence:** [Confirmed — repeatedly documented, including paid search ads impersonating major wallets]

### Address poisoning

The attacker sends a zero-value transaction from an address that resembles one the victim has used — matching the first and last characters. The address then appears in the victim's transaction history. Later, the victim copies the "familiar" address from history and sends funds to the attacker.

**Conditions:** a victim who copies addresses from history rather than from a verified source. **Evidence:** [Confirmed — documented at scale by blockchain analytics firms]

**Defence:** use address book entries; verify on the hardware device; send a small test transaction.

### Exchange account compromise

Exchanges custody keys. Their security determines your exposure. Documented failures include credential stuffing without 2FA, API key leakage, insider theft, and large-scale breaches.

**Defence:** hardware-key 2FA, withdrawal allowlists, separate email, minimal API permissions, and — for large holdings — self-custody with a hardware wallet.

### SIM swap–enabled takeover

If an exchange or email account uses SMS for recovery, a SIM swap can defeat it. The FBI recorded 971 SIM-swap complaints and $17.4 million in reported losses in 2025, with the caveat that most swaps enable other fraud that is counted elsewhere. [Confirmed — IC3 2025]

### Smart-contract vulnerabilities

Code bugs — reentrancy, oracle manipulation, access-control errors, arithmetic errors — can drain contracts. The DAO (2016) lost approximately $60 million through a reentrancy flaw, leading to a chain split. [Confirmed]

### Cross-chain bridge exploitation

Bridges hold assets on one chain and issue representations on another. Their validation logic is complex and high-value. Documented losses include:

- **Ronin Bridge (March 2022)** — approximately **$624 million**, attributed by the FBI to a state-linked group. [Confirmed]
- **Wormhole (February 2022)** — approximately **$326 million**. [Confirmed]
- **Nomad (August 2022)** — approximately **$190 million**, in a chaotic "free-for-all" exploit. [Confirmed]

### Social engineering and deepfake fraud

The Arup case (February 2024) is the clearest documented example: a finance employee in Hong Kong was tricked by a video conference of deepfaked colleagues into transferring approximately **$25 million** (HK$200 million). [Confirmed — police statements, company confirmation, reporting]

In crypto specifically, impersonation is routine: fake founders, fake exchange support, fake "security teams", and fake investment platforms showing fabricated returns.

### Physical coercion

A growing and under-discussed risk: attackers who know a holder has crypto may use violence or threats to force a transfer. Blockchain analytics firms reported an increase in such incidents timed to price peaks. [Confirmed — industry reporting; individual cases vary]

## 10.3 The largest documented losses

| Incident | Date | Approx. loss | Mechanism | Attribution |
|---|---|---|---|---|
| Mt. Gox | 2011–2014 | ~850,000 BTC | Exchange compromise, long-running theft | Criminal; unclear |
| Coincheck | Jan 2018 | ~$534M | Exchange hot-wallet compromise | Criminal |
| Poly Network | Aug 2021 | ~$611M (returned) | Smart-contract exploit | Attacker; most funds returned |
| Ronin Bridge | Mar 2022 | ~$624M | Validator key compromise | FBI attributed to DPRK-linked group |
| Wormhole | Feb 2022 | ~$326M | Signature verification flaw | Criminal |
| Nomad | Aug 2022 | ~$190M | Replay/proxy flaw | Multiple opportunistic actors |
| Euler | Mar 2023 | ~$197M (returned) | Contract exploit | Attacker; returned |
| DMM Bitcoin | May 2024 | ~$305M | Exchange compromise | Attributed to a DPRK-linked group by investigators |
| WazirX | Jul 2024 | ~$235M | Multisig/wallet compromise | Criminal; disputed details |
| Bybit | Feb 2025 | ~$1.46B | Cold-wallet signing compromise | FBI attributed to DPRK-linked group |

[Confirmed — company statements, FBI statements, court records, blockchain analytics]

**Aggregate 2025:** TRM Labs recorded approximately **$2.87 billion** stolen across nearly 150 incidents, with Bybit accounting for roughly 51 percent of the total. Chainalysis separately attributed approximately **$2 billion** to DPRK-linked actors in 2025, describing it as their most destructive year. [Confirmed — both firms' 2026 reports]

## 10.4 Methodological limits

Crypto loss figures are more precise than most crime statistics — transactions are public — but they are not exact:

- **Valuation timing** changes totals as prices move.
- **Attribution** relies on clustering heuristics, which can be wrong.
- **Recovered funds** are sometimes counted as losses.
- **DeFi exploits** may involve white-hat returns that are not immediately public.
- **Victim reporting** for individual scams is poor, so consumer losses are understated.

The direction is unambiguous even if the exact number is not: losses are in the billions per year, concentrated in a small number of very large incidents, with a long tail of individual thefts.

## 10.5 Why crypto is different from other fraud

Three structural features:

1. **Irreversibility.** A confirmed transaction cannot be charged back. Traditional card fraud has a dispute mechanism; crypto does not.
2. **Pseudonymity with transparency.** Addresses are public. This helps investigators but also helps attackers monitor victims and time further attacks.
3. **Composability.** A single approval can expose an entire wallet; a single bridge can expose an entire chain's assets.

These are properties of the technology, not bugs. They raise the stakes of every human decision.

## 10.6 What actually protects holdings

1. **Self-custody for long-term holdings**, with a hardware wallet.
2. **Seed phrase offline, on paper or metal**, never photographed, never typed into a computer except during initial setup on the device.
3. **Verify every address on the hardware screen**, not on the computer.
4. **Separate wallets** for interacting with new protocols; keep the main holdings away from the browser.
5. **Revoke approvals** regularly using a reputable tool.
6. **Hardware-key 2FA** on exchange and email accounts; never SMS alone.
7. **Withdrawal allowlists** on exchanges.
8. **No unsolicited support.** No one legitimate DMs you first.
9. **Test transactions** before large transfers.
10. **An inheritance and recovery plan** that does not require the seed phrase to be stored in one place held by one person.
11. **Operational security about holdings.** Publicly announcing large holdings increases physical risk.
12. **Slow down.** Most losses require a decision made under time pressure. Time pressure is the attack.

The distinction this section should leave with the reader: the chain is secure; the wallet, the app, the exchange, the bridge, and the person are the attack surface. Security in crypto is not a property of the protocol. It is a discipline of verification.

---

# PART XI — THE CONVERGENCE OF ATTACK SURFACES

## 11.1 Why chains matter more than components

Each layer in this report has been described separately because that is how engineers build and defend them. Attackers do not work that way. They look for the cheapest path *through* the layers, and they are willing to combine a technical weakness with a human one.

The economics are asymmetric. An attacker needs every step to work. A defender needs one step to fail. This is the most hopeful fact in the report — and the reason the scenarios below are written as chains with breakpoints, not as predictions.

None of these scenarios is automatic. None is common in the sense of "likely to happen to you this year". Each has occurred in some form, and each is worth understanding because the breakpoints are cheap.

---

## 11.2 Scenario A — Rogue hotel Wi-Fi → deceptive portal → credential theft → cloud compromise

**The chain.** A traveller connects to a network with the hotel's name. A captive portal appears, offering "sign in with Google" to get online. The page is a convincing OAuth consent screen. The traveller approves, and the attacker receives an authorisation token for the account. The portal then forwards to the real hotel page, so nothing seems wrong. Days later, the attacker uses the token to access cloud storage.

**Required conditions:**

- a rogue or compromised access point within range;
- a network name the device will join automatically, or a user who chooses it;
- a portal that mimics a familiar identity provider;
- a user who approves the consent without checking the domain;
- an account without hardware-key or passkey protection.

**Attacker capabilities:** moderate. A phishing kit, a portable access point, and an OAuth application registration. No exploit development required.

**Security barriers that break the chain:**

- passkeys or hardware security keys (phishing-resistant by design);
- checking the domain on the consent screen;
- never authenticating through a captive portal;
- VPN or cellular data for sensitive logins;
- OAuth grant review and token revocation;
- conditional access / device posture checks on enterprise accounts.

**Possible consequences:** access to email, documents, photos, and any service reachable through the identity provider; password resets on downstream accounts; persistent access until tokens are revoked.

**Warning indicators:** a portal that asks for an account password rather than a room number; a consent screen listing unusual permissions; a login that succeeds without a second factor when one is normally required; unfamiliar sessions in account settings.

**Protective actions:** treat portals as untrusted; authenticate only on the real domain; review connected apps quarterly; revoke sessions after travel.

**Evidence status.** [Confirmed] for each component (evil twin, OAuth consent phishing, token-based cloud access). [Plausible but unverified] as a single publicly documented end-to-end case in a hotel; the components are documented, the specific combination is a reconstruction.

---

## 11.3 Scenario B — Malicious Android app → accessibility abuse → screen interaction → financial fraud

**The chain.** A user installs an app from a message link — a "parcel tracking" or "bank security" app. The app asks for accessibility access "to help with setup". Once granted, it reads the screen, waits for the banking app to open, overlays a fake login, captures credentials and the one-time code, then automates a transfer.

**Required conditions:**

- installation from outside a trusted store, or a dropper that installs a payload;
- the user granting accessibility (often guided by an overlay);
- a banking app that does not detect accessibility automation;
- a transaction that can be completed without hardware confirmation.

**Attacker capabilities:** low to moderate. Banking trojan kits are sold and maintained; the technical work is done by others.

**Security barriers:** Play Protect and restricted settings; no sideloading; accessibility audit; biometric confirmation for payments; banking apps with root/accessibility detection; transaction limits and cooling-off periods; a separate device for banking.

**Possible consequences:** drained accounts, stolen identity documents, OTP compromise across services, the phone used as a relay for further fraud.

**Warning indicators:** an app that asks for accessibility without a clear assistive purpose; a launcher icon that disappears; back button failures; battery and data anomalies; a banking app warning about screen overlay or accessibility.

**Protective actions:** remove the app and revoke accessibility immediately; contact the bank from another device; change passwords from a clean device; check for device-admin apps; consider a factory reset if the device is confirmed compromised.

**Evidence status.** [Confirmed] — this is the dominant Android fraud pattern and has been documented in detail by multiple vendors and law-enforcement agencies.

---

## 11.4 Scenario C — Stolen unlocked phone → authenticated apps → recovery abuse → identity loss

**The chain.** A phone is stolen while unlocked — at a bar, in a taxi, at a market. The thief has minutes. They open the password manager, the email app, and the banking app. They change the password on the email account, then use it to reset other accounts. They remove the device from the account, disable location, and lock the owner out. The victim loses not only the device but the identity attached to it.

**Required conditions:**

- an unlocked device, or a weak passcode that is observed;
- apps with active sessions and no re-authentication;
- recovery flows that trust the email account or the phone number;
- a password manager that unlocks with the device biometric and does not require a master password for sensitive items.

**Attacker capabilities:** opportunistic. No technical skill required beyond using the device.

**Security barriers:** strong alphanumeric passcode; biometric plus passcode for password manager; re-authentication for sensitive apps; recovery keys stored offline; a second trusted device; carrier SIM lock; "stolen device protection" features that require biometrics for critical changes outside familiar locations.

**Possible consequences:** financial loss, account takeover, impersonation, loss of photos and documents, and a lengthy recovery process that may fail.

**Warning indicators:** none during the theft; afterwards, notifications about password changes, new devices, or removed sessions.

**Protective actions:** remote wipe and session revocation from another device; contact the carrier; notify banks; use account recovery contacts and hardware keys; report to police for the record.

**Evidence status.** [Confirmed] as a pattern; the specific sequence varies. This is the most common "identity loss" path in the report, and the least technical.

---

## 11.5 Scenario D — Compromised browser extension → session theft → unauthorised cloud access

**The chain.** A useful extension — a coupon finder, a PDF tool, a writing assistant — is sold to a new owner or compromised in a supply-chain attack. An update adds code that reads cookies and local storage for specific domains, then exfiltrates them. The attacker imports the cookies into their own browser and is inside the victim's cloud account without a password or a second factor. The victim's password is never wrong, so nothing looks suspicious.

**Required conditions:**

- an extension with broad host permissions;
- an auto-update that the user does not review;
- session cookies without binding to device or IP;
- no re-authentication for sensitive actions;
- no anomaly detection on the provider side.

**Attacker capabilities:** moderate; the supply-chain step requires either buying the extension or compromising a developer account.

**Security barriers:** extension allowlists; least-privilege permissions; browser profiles separated by purpose; session binding; re-authentication for sensitive operations; hardware-key-protected accounts; monitoring for impossible travel.

**Possible consequences:** access to email, documents, photos, and administrative consoles; data exfiltration; further compromise of contacts.

**Warning indicators:** a new permission prompt after an update; unexpected logins; a session that persists after a password change; account activity from unfamiliar locations.

**Protective actions:** remove unused extensions; review permissions after updates; sign out of all sessions; revoke OAuth tokens; enable hardware keys; use separate browsers for sensitive and general browsing.

**Evidence status.** [Confirmed] — extension supply-chain compromises and cookie/session theft are both documented; the combination is a standard criminal playbook.

---

## 11.6 Scenario E — Targeted messaging vulnerability → endpoint compromise → exposure of encrypted communications

**The chain.** A high-value target receives a message. The attachment or preview is processed automatically. A zero-click chain executes, escapes the sandbox, and installs an implant. The implant reads the messaging database after decryption, captures the microphone, and exfiltrates location. The messages remain encrypted in transit; they are simply read on the device that decrypts them.

**Required conditions:**

- an unpatched vulnerability in the messaging app or the OS;
- an exploit chain capable of sandbox escape and persistence;
- a delivery path to the target (phone number, account identifier);
- a target worth the cost.

**Attacker capabilities:** very high. This is the commercial spyware tier described in Part VIII.

**Security barriers:** prompt patching; Lockdown Mode; reduced attachment auto-processing; hardware keys; threat notifications; network-level protections; device integrity monitoring.

**Possible consequences:** full access to communications, location, microphone, camera, and credentials; exposure of contacts and sources; long-term surveillance.

**Warning indicators:** Apple Threat Notifications; unexplained shutdowns; battery or data anomalies; forensic artefacts. All are weak individually.

**Protective actions:** patch immediately; enable Lockdown Mode; seek expert forensic help; preserve the device; assume communications were read and inform affected contacts through a separate channel.

**Evidence status.** [Confirmed] — documented in FORCEDENTRY, BLASTPASS, Operation Triangulation, CVE-2025-55177/43300, and the 2026 Serbian case.

---

## 11.7 The general shape of a chain

Across all five scenarios, the structure is the same:

1. **A trust decision** — join a network, install an app, approve a consent, open a message.
2. **A capability transfer** — the attacker gains a token, a permission, a session, or code execution.
3. **A persistence step** — a linked device, a stored token, an implant, a changed recovery method.
4. **A monetisation or surveillance step** — transfer, exfiltration, access.

Defenders can intervene at any step. The cheapest interventions are at step 1 (habit), step 2 (phishing-resistant authentication, least privilege), and step 3 (session review, device audit).

## 11.8 What the convergence means for policy

- **Security education should teach chains, not products.** "Use a VPN" is less useful than "understand which trust decisions you are making".
- **Platforms should make the safe choice the default**: passkeys, scoped permissions, visible session lists, and meaningful consent screens.
- **Regulators should require breach notification that names the *type* of data and the *mechanism***, so that victims can assess their own exposure.
- **Journalists should stop writing "hacked" as a single event.** The interesting question is always: which link failed?

The convergence thesis is not that everything is connected and therefore hopeless. It is that the connections are visible, and each one can be broken.

---

# PART XII — GLOBAL PUBLIC-AWARENESS INVESTIGATION

## 12.1 Why regional comparison is difficult, and why it is still necessary

Cybercrime statistics are not collected the same way anywhere. Some countries run central reporting centres with mandatory breach notification; others rely on bank data; others have no reliable victim survey at all. Definitions differ: is a romance scam a fraud, a cybercrime, or an economic crime? Is a ransomware payment a loss, or a cost?

Three consequences follow:

1. **Cross-country comparisons of absolute numbers are misleading.** A country with better reporting looks worse.
2. **Comparisons of trend direction are more defensible** than comparisons of level.
3. **Absence of data is not absence of crime.** In several regions, the honest statement is that nobody knows.

This section therefore compares *patterns* — which threats dominate, which conditions enable them, and how mature the public response is — and flags where the evidence base is weak.

## 12.2 North America

**Dominant pattern: fraud at industrial scale, with ransomware against institutions.**

The FBI's IC3 received **1,008,597 complaints** and **$20.877 billion** in reported losses in 2025, a 26 percent increase over 2024. Investment fraud ($8.65 billion), business email compromise ($3.05 billion), and tech-support fraud ($2.13 billion) were the largest categories. Complainants aged 60 and over reported $7.7 billion in losses. [Confirmed — IC3 2025]

Ransomware is a smaller reported loss category ($32.3 million) because the costs fall on organisations: downtime, recovery, legal fees, and ransom payments that are often not reported to IC3. The healthcare sector has been repeatedly affected; the 2024 Change Healthcare incident alone affected approximately **190 million** individuals, according to the U.S. Department of Health and Human Services. [Confirmed — HHS OCR]

**Hospitality.** The Marriott/Starwood breach (up to 383 million records), the MGM intrusion ($100 million impact), and repeated payment-card breaches at major chains make North America the best-documented hospitality threat environment. The sector's exposure is structural: franchise models, third-party POS vendors, and centralised reservation systems.

**Mobile.** Both platforms are dominant; Android banking trojans are less prevalent than in Latin America or Europe, but iOS is a primary target for commercial spyware because high-value targets disproportionately use it.

**Spyware.** The United States has been both a market regulator (Entity List, sanctions) and a site of litigation (WhatsApp v. NSO). Domestic use of commercial spyware by U.S. agencies is documented in reporting but not comprehensively disclosed.

**Digital literacy.** High access, uneven competence. The IC3 data shows that well-educated, financially sophisticated people are frequently victims of investment fraud — a reminder that literacy is domain-specific.

## 12.3 Europe

**Dominant pattern: ransomware and data breaches, with a strong regulatory response.**

ENISA's Threat Landscape 2025 analysed **4,875 incidents**, with ransomware accounting for about **40 percent** of financially motivated events and data breaches about **31 percent**. [Confirmed — ENISA]

The EU's regulatory stack — GDPR, NIS2, DORA, the AI Act, and the Cyber Resilience Act — is the most developed globally. It improves transparency and creates accountability, but it also produces compliance-driven reporting that can obscure the underlying incident.

**Hospitality.** Europe combines dense tourism, fragmented ownership, and older building infrastructure. Small independent hotels often run consumer-grade networking equipment and outsource IT entirely. Documented incidents include payment-card breaches at chain properties and, more recently, reservation-data abuse through booking platforms.

**Mobile.** Android dominates by share, and banking trojans are a persistent problem in Southern and Eastern Europe. SMS-based fraud and "smishing" delivery networks are well documented.

**Spyware.** Europe has the most extensive public investigative record: the Pegasus Project, the Predator Files, national parliamentary inquiries, and the EU Parliament's PEGA committee. Several countries have restricted spyware vendors or opened investigations. The Serbian case documented in Part VIII is the most recent confirmed infection.

**Digital literacy.** Comparatively high, with strong public-service media and academic capacity — but also a growing gap between the technically literate and the rest, and a tendency to treat compliance as security.

## 12.4 Middle East

**Dominant pattern: targeted surveillance, business email compromise, and a rapidly digitising payments landscape.**

The region has the strongest documented record of commercial spyware use against civil society. Citizen Lab and Access Now have published forensic investigations of Pegasus and Predator infections affecting journalists, activists, and politicians in several countries. Attribution to specific customers is generally not publicly established, and vendors deny responsibility for customer use. [Confirmed for the infections; limited for attribution]

**Hospitality.** The Gulf states host enormous transient populations, major events, and high-value business travellers. Hotels are a documented espionage environment (the DarkHotel campaign targeted executives in the region). Smart-building and guest-experience technology adoption is high, which expands the attack surface faster than security maturity in some properties.

**Mobile.** High smartphone penetration, high iOS share among elites, and a large migrant workforce that depends on mobile payments. Phishing and "financial advice" scams are widespread.

**Data gaps.** Victim reporting is limited; government transparency varies; independent research can be constrained. Claims about state behaviour should be treated with particular care in both directions — neither assumed nor dismissed.

## 12.5 South Asia

**Dominant pattern: high-volume payment fraud, SIM-swap and OTP interception, and state-linked financial theft.**

India's real-time payment systems have produced a corresponding fraud ecosystem: fake payment requests, "digital arrest" scams, fake job offers, and investment fraud delivered through messaging apps. Bangladesh's central bank was the target of a documented 2016 theft of approximately **$81 million** via fraudulent SWIFT messages, attributed by investigators to a state-linked group. [Confirmed — court records, reporting]

**Hospitality.** A fast-growing domestic travel market with uneven security maturity. Franchise and budget segments often use shared network infrastructure with minimal segmentation.

**Mobile.** Android dominates overwhelmingly, and sideloaded APKs are common. Accessibility-abusing banking trojans are documented across the region.

**Spyware.** The Pegasus Project dataset included numbers in South Asia, and subsequent reporting documented infections of journalists and activists. Domestic surveillance technology procurement is a live policy debate.

**Digital literacy.** Rapidly improving through public digital-payment programmes, but training has focused on *using* services rather than *evaluating* them.

## 12.6 East and Southeast Asia

**Dominant pattern: industrialised scam operations, mobile malware, and cross-border fraud.**

Southeast Asia is the global centre of **scam-centre** operations: compounds, often in border regions, where trafficked workers run "pig-butchering" investment fraud and romance scams at industrial scale. The UN Office on Drugs and Crime has estimated annual revenues in the tens of billions of dollars and documented the trafficking dimension. [Confirmed — UNODC reporting; revenue estimates are approximations]

**Hospitality.** Tourism-dependent economies (Thailand, Vietnam, Indonesia, the Philippines) have large transient populations and highly competitive, cost-sensitive hotel sectors. Reservation-channel fraud and payment-card skimming are recurring.

**Mobile.** Android dominates; malicious APKs distributed through messaging and fake app stores are a major vector. Japan and South Korea have high iOS share among certain demographics and are targets for commercial spyware.

**Spyware.** Documented targeting of journalists and activists in the region exists, though public forensic confirmation is uneven. Japan has been a significant market for surveillance technology, according to reporting.

**Data gaps.** China publishes almost no comparable victim data; several jurisdictions restrict independent research; scam-centre estimates rely on law-enforcement and NGO reporting rather than statistical surveys.

## 12.7 Africa

**Dominant pattern: business email compromise, mobile-money fraud, and rapidly growing ransomware.**

Africa has the world's fastest-growing mobile-money ecosystem, which brings financial inclusion and a corresponding fraud surface: SIM swaps, agent fraud, and social engineering against users who may be new to formal financial services.

INTERPOL's African Cyberthreat Assessment documents BEC, ransomware, online scams, and "cybercrime-as-a-service" as the dominant threats, and notes persistent capacity gaps in law enforcement. A 2025 INTERPOL-coordinated operation in Africa resulted in **651 arrests** and the recovery of **USD 4.3 million**. [Confirmed — INTERPOL]

**Hospitality.** A growing tourism sector with significant investment in new properties, often with modern networking but limited ongoing security operations. Business travellers and NGOs are documented targets.

**Mobile.** Android dominates; low-cost devices with outdated firmware are common; sideloading is widespread.

**Data gaps.** This is the region with the weakest comparable data. Victim surveys are rare, reporting infrastructure is uneven, and many incidents are resolved informally. Any claim of a precise regional loss figure should be treated sceptically.

## 12.8 Latin America

**Dominant pattern: banking trojans, account takeover, and payment-system fraud.**

Brazil is the most documented environment: a mature instant-payment system (Pix), aggressive banking-trojan development, and a large population of mobile-first users. Grandoreiro, active since at least 2016, evolved from a Brazilian banking trojan into a platform used across dozens of countries. [Confirmed — ESET, IBM X-Force, law-enforcement reporting]

The region also produces sophisticated phishing and "social engineering as a service". Colombia and Ecuador have been targeted by long-running espionage campaigns documented by vendors.

**Hospitality.** Tourism growth in Mexico, Colombia, and Brazil, with seasonal peaks and a mix of international chains and independent properties. Card skimming and reservation fraud are common.

**Mobile.** Android dominates; banking trojans are the primary criminal threat; device theft is a significant physical risk in urban areas.

**Spyware.** Documented use of commercial spyware against journalists and activists in Mexico has been among the most extensively reported globally, including forensic confirmations by Citizen Lab and others. [Confirmed for infections; attribution limited]

## 12.9 Oceania

**Dominant pattern: large-scale data breaches, identity fraud, and a mature regulatory response.**

Australia has experienced some of the largest breaches per capita: Medibank (2022, approximately 9.7 million customers), Optus (2022, approximately 10 million), and Latitude Financial (2023, approximately 14 million). These drove major legislative reform and a national cyber strategy. [Confirmed — company statements, regulators]

**Hospitality.** A high-cost, high-occupancy market with strong brand standards but thin margins for independent operators. Reservation fraud and payment-card compromise recur.

**Mobile.** High iOS share; Android fraud is present but less dominant than in Latin America. Scam losses are significant and increasingly reported through central channels.

**Digital literacy.** High, with strong public awareness campaigns and a national anti-scam centre — one of the more effective public-response models.

## 12.10 Comparison

| Region | Dominant criminal pattern | Mobile threat level | Hospitality exposure | Spyware evidence | Data quality |
|---|---|---|---|---|---|
| North America | Investment/BEC/tech-support fraud; healthcare ransomware | Moderate | High (documented) | High (litigation, notifications) | Strong |
| Europe | Ransomware, data breaches, bank trojans | Moderate–high | High (fragmented sector) | Very high (investigations) | Strong |
| Middle East | Targeted surveillance, BEC, payment fraud | High | High (events, executives) | Very high (forensics) | Moderate |
| South Asia | Payment/OTP fraud, state-linked theft | Very high | Moderate–high | High | Moderate |
| East & SE Asia | Scam centres, APK malware, cross-border fraud | Very high | High | Moderate | Uneven |
| Africa | BEC, mobile-money fraud, ransomware | High | Moderate (growing) | Low–moderate | Weak |
| Latin America | Banking trojans, account takeover | Very high | High | High (Mexico) | Moderate |
| Oceania | Data breaches, identity fraud | Moderate | Moderate–high | Low | Strong |

## 12.11 Where the data is missing

- **Africa:** no comparable victim survey; most estimates are extrapolations.
- **Middle East:** limited transparency; independent research constrained.
- **China, Russia, Central Asia:** minimal public incident data; cross-border effects visible mainly through law-enforcement actions elsewhere.
- **Hospitality globally:** breach disclosure is inconsistent; many incidents are settled quietly or classified as vendor incidents.
- **Spyware:** infections are known only when someone looks. The absence of confirmed cases in a country is not evidence of absence.
- **Consumer IoT and hotel technology:** almost no systematic measurement.

Stating these gaps is not a weakness in the investigation. It is the difference between an assessment and a guess.

## 12.12 What the comparison shows

Three patterns hold across regions:

1. **Fraud scales with digital payment adoption.** The countries that moved fastest to instant payments saw fraud follow within a year or two.
2. **Mobile malware follows platform share and sideloading.** Where Android dominates and APK distribution is normal, banking trojans flourish.
3. **Spyware follows investigative capacity, not prevalence.** Countries with strong forensic NGOs and press freedom produce more confirmed cases — which tells us about visibility as much as about use.

The policy implication is that digital literacy and platform defaults matter more than any single national campaign. A population that understands *mechanism* — how a session works, what a permission grants, why a code is dangerous — is more resilient than one that has memorised a list of warnings.

---

# PART XIII — THE HUMAN COST OF DIGITAL COMPLEXITY

## 13.1 The competence trap

Modern digital security asks ordinary people to make decisions that trained engineers struggle with:

- Is this certificate warning a misconfiguration or an interception?
- Is this app's accessibility request necessary or abusive?
- Is this DNS server the ISP's or an attacker's?
- Is this profile required by the hotel or installed by malware?

These are not questions about intelligence. They are questions about *information asymmetry*. The system knows what a permission grants; the user sees a sentence. The system knows which domain issued a certificate; the user sees a padlock. The system knows a session token is valid; the user sees a login that "worked".

When people fail, the failure is usually in the interface, not the person.

## 13.2 Hidden technical dependencies

A single photo on a phone depends on: the camera firmware, the operating system's media pipeline, the app's upload code, the TLS stack, the cloud provider's storage layer, the account's authentication and recovery configuration, the sync client on every other device, the sharing permissions, and the backup regime. A weakness in any of these changes the exposure of that photo.

No user can hold that model in their head. The reasonable response is not to try, but to identify the few decisions that actually control exposure: who can authenticate as you, what can read your screen, what is synchronised where, and what is backed up in a form you cannot encrypt.

## 13.3 Unclear permission interfaces

Permission dialogs describe *capability*, not *consequence*. "Allow access to your photos" does not say "this app will upload them to a server we cannot audit". "Allow accessibility" does not say "this app can read your banking screen and tap buttons for you".

Three design failures recur:

1. **Granularity without meaning.** Users are asked to choose among options whose implications they cannot evaluate.
2. **Bundling.** A flashlight app requests contacts, location, and microphone.
3. **Consent fatigue.** After the twentieth prompt, "Allow" becomes a reflex.

The result is that consent is technically obtained and substantively absent. This is not a user failure; it is a design failure that regulators have only begun to address.

## 13.4 Confusing security notifications

Security warnings are written for liability, not comprehension.

- A certificate warning offers "Proceed anyway" in the same visual weight as "Go back".
- "Unusual activity" notifications rarely say what activity, from where, or what to do.
- "Your device may be at risk" pop-ups are indistinguishable from the scams that imitate them.
- Apple Threat Notifications are deliberately vague to protect investigative methods, which is understandable but leaves the recipient without a next step.

The consequence is **warning blindness**: users learn that warnings are noise, which is exactly the condition attackers exploit.

## 13.5 Limited access to forensic expertise

Determining whether a device is compromised requires skilled examination, appropriate tools, and a chain of custody. That capacity is concentrated in a few NGOs, universities, and commercial firms, mostly in wealthy countries. For most of the world's population, "is my phone compromised?" has no accessible answer.

This produces two harms:

- **Under-detection:** real compromises go unrecognised.
- **Over-interpretation:** ordinary glitches are treated as evidence, because there is no authority to adjudicate.

## 13.6 Poor public understanding of wireless technologies

Radio is invisible, which makes it uniquely prone to magical thinking in both directions.

- "Bluetooth is off, so nothing can see me" — false; Wi-Fi and cellular still transmit, and Bluetooth may be off but Wi-Fi scanning is on.
- "My phone is broadcasting to satellites" — usually false in the way imagined; the mechanisms are more mundane and more revealing.
- "A Bluetooth device appeared in my settings, so someone is watching me" — usually false; public spaces are full of devices.

The technical literacy gap here is not about physics. It is about the difference between *transmitting*, *connecting*, and *being identified* — three distinct events that the interface collapses into one icon.

## 13.7 Inadequate digital-security education

Most programmes teach **rules**, not **models**:

- "Don't click suspicious links" — until the link is in a message from a colleague whose account was compromised.
- "Use a strong password" — when the actual failure was a stolen session.
- "Don't use public Wi-Fi" — when the actual risk was a fake portal, which also exists on cellular.

Rules fail when conditions change. Models survive. A person who understands that a session token is a bearer credential behaves differently after a breach than one who has memorised "change your password".

Victim-blaming makes this worse. Shame suppresses reporting, which suppresses data, which produces worse policy.

## 13.8 Dependence on opaque cloud ecosystems

Cloud services are convenient and, for most people, more secure than the alternatives they replace. They also create dependencies that are difficult to reason about:

- **Account recovery** is a security boundary most users have never configured.
- **Sync** propagates both data and compromise.
- **Sharing** creates durable, invisible access paths.
- **Terms of service** determine what is encrypted and what is not.
- **Vendor decisions** — a discontinued product, a changed policy, a pricing change — can remove access to years of personal history.

The user is asked to trust an ecosystem whose internals they cannot inspect, while being told that "the cloud is secure". Both are true in part, and the gap between them is where harm occurs.

## 13.9 AI-generated misinformation and overconfident explanations

AI systems now mediate how people understand security. They can be genuinely useful — summarising advisories, explaining concepts, drafting incident checklists. They also produce confident, plausible, wrong answers:

- invented CVE numbers and fabricated incident details;
- outdated advice presented as current;
- reassurance ("iPhones cannot be hacked") that contradicts the public record;
- instructions that are technically real but dangerous in context.

The same technology powers **AI-generated fraud**: fluent phishing, cloned voices, deepfaked video, and personalised pretexting at a scale that was previously uneconomic. The Arup case showed that a video conference of familiar faces is no longer proof of identity.

The correct posture toward AI advice is the same as toward any other advice: ask for sources, check the primary record, and be suspicious of certainty.

## 13.10 When uncertainty causes harm

Uncertainty is not neutral. It produces predictable harms:

**Unnecessary device replacement.** A person convinced their phone is infected buys a new one, transfers the backup — including the malware's persistence — and remains compromised, having spent money they could not afford.

**Evidence destruction.** Resetting a device or deleting messages destroys the artefacts that a forensic examination would need. Well-meant "cleaning" makes investigation impossible.

**Avoidance of safe services.** People abandon online banking, messaging, or telehealth because they cannot distinguish real risk from noise, and return to riskier alternatives (cash, unencrypted channels, in-person only).

**Stigma and silence.** Victims of sextortion, romance fraud, and spyware often do not report, because the expected response is blame.

**Vigilantism and misdirected accusation.** A family member accused of installing spyware on the basis of a normal log entry; a partner's phone searched without cause. The social damage can exceed the technical one.

## 13.11 What better communication looks like

The standard this report tries to meet:

1. **Name the mechanism.** "A stolen cookie lets someone act as you" is teachable. "You were hacked" is not.
2. **State the conditions.** A threat without preconditions becomes either panic or complacency.
3. **Admit uncertainty.** "We do not know how many infections occurred" is more useful than a fabricated number.
4. **Give one action per risk.** A checklist of forty items is a way of saying "this is not your problem".
5. **Respect the reader.** People make trade-offs — cost, convenience, family needs, disability access — that a security professional does not see.
6. **Avoid the two failure modes.** Do not minimise ("nothing to worry about") and do not catastrophise ("everything is compromised").

## 13.12 The standard we are asking readers to adopt

You do not need to understand the whole stack. You need to understand four things:

1. **Who can act as you** — passwords, passkeys, sessions, recovery channels.
2. **What can see your screen** — accessibility services, remote support, screen sharing, malicious apps.
3. **What leaves your device** — sync, backups, sharing links, AI tools, extensions.
4. **What a message can do without a click** — and why patching matters more than vigilance.

Everything else in this report is detail supporting those four questions. A person who can answer them is not "good at cybersecurity". They are a capable decision-maker in an environment designed to obscure decisions — which is the most anyone can be.

---

# PART XIV — EDITORIAL STANDARD APPLIED

This part documents the rules the investigation followed, so that editors, fact-checkers, and readers can hold it to account.

## 14.1 Language

- **Plain first, technical second.** Every section opens with a description a non-specialist can follow, then supplies the mechanism for readers who want it.
- **No fear verbs.** We avoided "every phone", "all hotels", "always", "never" except where a technical property is genuinely absolute (for example, a signature cannot be forged by guessing).
- **No false reassurance.** "Unlikely" is stated as unlikely, not as impossible.
- **No euphemism.** "Stolen", "fraud", "surveillance", and "compromise" are used precisely.

## 14.2 Evidence

- Every material factual claim carries a label and maps to the Source Register (document 16).
- Numbers are attributed to the organisation that produced them, with the year.
- Where two credible sources differ (for example, cryptocurrency theft totals), both are presented with an explanation of the methodological gap.
- Where a claim is widely repeated but unsupported, it is named as unsupported rather than silently omitted — because readers have heard it and deserve an answer.

## 14.3 Attribution

- We report attributions made by courts, regulators, vendors, and governments, and we name the attributing party.
- We do not convert an attribution into a finding of fact.
- We do not identify countries, agencies, companies, or individuals as attackers without a primary source.
- We distinguish "a product was sold to a government" from "a government used it against a specific person".

## 14.4 What we deliberately did not do

- We did not claim that hotels are controlled by criminal organisations.
- We did not claim that IT staff are complicit without case-specific evidence.
- We did not claim that Bluetooth broadcasts, pairing records, or log entries prove surveillance.
- We did not portray accessibility technology as malicious.
- We did not claim that every unusual notification, call, or battery drain indicates spyware.
- We did not claim that attack chains occur automatically or commonly.
- We did not fabricate statistics, CVE identifiers, incidents, or quotes.

## 14.5 What we could not resolve

- The true prevalence of commercial spyware infections.
- The full customer base of any spyware vendor.
- The number of unreported hotel and hospitality breaches.
- Comparable victim-loss data for several regions.
- Whether specific 2025–2026 zero-days were used by criminal groups as well as targeted actors.

These gaps are stated in the relevant sections rather than smoothed over. An investigation that cannot say "we do not know" is not an investigation.

---

# CONCLUSION — WHAT THE EVIDENCE SUPPORTS

The digital environment is not a single system with a single lock. It is a stack of trust relationships: between a user and a network, a device and a server, an app and a permission, a person and an institution. Each relationship can fail independently, and most serious harms occur when two or three fail together.

The evidence supports six conclusions.

**1. Ordinary technology is enough to cause extraordinary harm.** None of the scenarios in Part XI requires a novel invention. A phishing page, a stolen cookie, an accessibility permission, and an unlocked phone are enough to lose an identity or a lifetime's savings.

**2. Sophistication is real but scarce.** Zero-click chains and commercial spyware exist, are documented, and are used against specific people. They are not the background condition of everyone's life, and treating them as such produces fatalism rather than protection.

**3. Encryption is necessary and insufficient.** It protects the channel. It does not protect the endpoint, the account, the backup, or the metadata. Understanding that boundary is the difference between a false sense of safety and a realistic one.

**4. Institutions are part of the attack surface.** Hotels, cloud providers, exchanges, carriers, and app stores concentrate risk. Their security failures become individual harms, and individual users cannot audit them. Policy that improves institutional defaults is therefore security policy, not just regulation.

**5. Complexity is a safety hazard.** Interfaces that hide consequences, notifications that cannot be interpreted, and advice that consists of rules rather than models produce predictable failures. The remedy is not more warnings but better defaults and better explanations.

**6. There is a great deal that an ordinary person can do.** Patch. Use passkeys. Audit accessibility. Turn off auto-join. Enable encrypted backups. Verify addresses on the device. Use hardware keys on the accounts that control everything else. None of this is exotic, and all of it is disproportionate to the effort.

The purpose of this investigation is not to convince you that you are being watched. It is to ensure that you never mistake unfamiliarity for safety — and to give you the four questions that matter: who can act as you, what can see your screen, what leaves your device, and what a message can do without a click.

---

# PART XV — DELIVERABLES

The investigation is published as a set of interlocking documents. Each is standalone; together they form a complete public-awareness package.

| # | Document | Purpose |
|---|---|---|
| 00 | **Executive investigation** (this document) | The full argument, Parts I–XIV |
| 01–12 | **Twelve educational articles** | Search-optimised standalone treatments of the highest-value threats |
| 13 | **Global threat matrix** | Comparative table: surface, prerequisites, impact, evidence strength, protection |
| 14 | **Public safety checklist** | Travellers, smartphone users, families, cryptocurrency holders |
| 15 | **Technical glossary** | 60+ concepts in plain language |
| 16 | **Source register** | Every material claim traced to a dated source |
| 17 | **Search visibility package** | Titles, meta descriptions, URLs, internal links, FAQs, structured data |
| 18 | **Public-awareness campaign** | 20 factually defensible headlines and messages |

---

## About ARTIore

ARTIore is an independent research and intelligence practice. This investigation was produced as a public-interest project: no sponsor, vendor, or government reviewed it before publication, and no commercial relationship influenced its findings.

**Corrections policy.** Factual errors will be corrected with a dated note. Readers who can document an error — particularly an incorrect CVE, date, or figure — are invited to contact the editorial desk. Claims that cannot be supported will be removed, not softened.

**Citation.** ARTIore Research Desk, *The Invisible Attack Surface: How Everyday Technology Can Compromise Privacy, Identity and Financial Security*, Global Digital Exposure Investigation, version 1.0, 26 October 2026.

*ARTIore — Intelligence in Service of Humanity.*
