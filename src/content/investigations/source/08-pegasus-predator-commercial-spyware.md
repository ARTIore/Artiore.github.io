---
title: "Pegasus, Predator and Commercial Spyware: What Is Actually Proven"
slug: "pegasus-predator-commercial-spyware"
meta_description: "A forensic, evidence-led guide to mercenary spyware: what Pegasus and Predator can do, who has been targeted, what courts and regulators have found, and what remains unknown."
target_keyword: "pegasus spyware"
secondary_keywords: ["predator spyware", "commercial spyware", "nso group", "intellexa", "graphite spyware"]
category: "Surveillance"
reading_time: "8 minutes"
last_updated: "2026-10-26"
internal_links: ["iphone-zero-click-spyware", "whatsapp-encryption-limits", "hotel-wifi-security-guide"]
---

# Pegasus, Predator and Commercial Spyware: What Is Actually Proven

Mercenary spyware is the most consequential surveillance technology of the past decade, and the most poorly understood. Public discussion swings between "everyone is infected" and "I am not important enough to be targeted". Both are wrong.

This article separates what forensic investigations, courts, and regulators have established from what remains unknown.

## What the products are

**Pegasus** (NSO Group) is an iOS and Android implant providing access to messages, photos, microphone, camera, location, and app data. It can self-destruct and limit collection. It has been delivered through zero-click iMessage chains (FORCEDENTRY, CVE-2021-30860), WhatsApp call handling (CVE-2019-3568), and other vectors. [Confirmed]

**Predator** (Intellexa / Cytrox) is a comparable implant, documented in infections of journalists, politicians, and civil-society figures. At least one campaign used **network injection** — intercepting insecure HTTP traffic to redirect the target to an exploit server. [Confirmed — Citizen Lab]

**Graphite** (Paragon Solutions) is marketed to governments. In January 2025, WhatsApp disclosed it had disrupted a Graphite campaign targeting around 90 users, including journalists and civil-society figures. [Confirmed]

**Hermit** (RCS Lab) and **DevilsTongue** (Candiru) are further documented families, both delivered primarily through one-click lures.

## What the evidence establishes

1. **The products exist and work.** Forensic examinations have recovered implants and identified exploitation paths.
2. **They are sold to governments.** Vendors describe their customers as state bodies; sanctions and court records confirm the market.
3. **They have been used against civil society.** Journalists, activists, lawyers, and opposition politicians have been confirmed infected in multiple countries.
4. **Delivery is often zero-click.** The most sophisticated chains require no user action.
5. **The targets are selected, not random.** Cost and operational risk concentrate deployment.

## The Serbian case, 2026

In September 2026, Citizen Lab and the SHARE Foundation confirmed that an iPhone belonging to a Serbian student activist was infected with Pegasus through an iMessage zero-click exploit, with high-confidence indicators between December 2025 and January 2026. Apple patched the exploit in iOS 18.4.1. At least 14 people in the student movement and civil society had received Apple Threat Notifications. [Confirmed — Citizen Lab, Reuters]

This case illustrates the modern pattern: a political moment, a wave of targeting, notifications from a platform, and forensic confirmation for a subset.

## What is not established

- **The number of infections.** Known cases are those someone looked for.
- **The full customer list.** Vendors do not publish it; sanctions and reporting reveal fragments.
- **Attribution in specific cases.** A confirmed infection does not, by itself, identify who operated it.
- **Whether a given individual was targeted.** A single artefact is not proof.

Claims that a particular government runs a global programme, that a specific official ordered an attack, or that "millions" are infected without documentary evidence should be treated as unsupported.

## The market

Spyware firms buy exploit chains from brokers and independent researchers. Advertised prices for full iOS or Android chains with zero-click delivery have been in the millions of dollars; actual transactions are private. The economics explain the selectivity: only well-funded buyers can afford a subscription, and only high-value targets justify the operational risk. [Confirmed for the market's structure; specific prices are [Plausible but unverified]]

## Legal and regulatory response

- **WhatsApp v. NSO:** a U.S. court found NSO liable in December 2024; a jury awarded $444,719 in compensatory and $167.254 million in punitive damages in May 2025; in October 2025 the judge issued a permanent injunction and reduced punitive damages to just over $4 million. [Confirmed]
- **U.S. Treasury sanctions** on Intellexa and its founder (September 2023), and later on linked entities and individuals.
- **EU Parliament's PEGA committee** investigated spyware use and recommended reforms.
- **National inquiries** in several countries have examined procurement and oversight.
- **Apple Threat Notifications** give targets a signal they would otherwise lack.

## If you think you are targeted

1. **Do not reset the device.** Preserve it.
2. **Do not use the device to contact anyone about the suspicion.**
3. **Contact a recognised helpline** (for example, Access Now's Digital Security Helpline) or a forensic provider.
4. **Enable Lockdown Mode** after consultation.
5. **Inform close contacts** through a separate channel.
6. **Assume communications were read** until proven otherwise.

## If you are not a plausible target

The rational response is not to buy spyware detectors. It is to:

- patch within hours of updates;
- use a strong passcode and hardware keys;
- keep the app count low;
- avoid configuration profiles and sideloaded apps;
- spend attention on the far more common risks: phishing, account takeover, and fraud.

## FAQ

**Can Pegasus be detected?**
Sometimes, through forensic examination of logs and artefacts. Modern implants are designed to leave little trace.

**Does Lockdown Mode stop Pegasus?**
It substantially reduces attack surface and has blocked documented chains. It is not a guarantee.

**Is spyware only used against journalists?**
No. Documented targets also include politicians, officials, executives, lawyers, and family members of targets. But deployment is selective.

**Can I remove it myself?**
No. A confirmed infection requires expert handling; resetting may destroy evidence without guaranteeing removal.

---

**Related:** [iPhone zero-click spyware](iphone-zero-click-spyware) · [WhatsApp encryption limits](whatsapp-encryption-limits) · [Hotel Wi-Fi security](hotel-wifi-security-guide) · [Digital Security Warning Signs: What to Check Before You Panic](digital-security-warning-signs)

**Part of the ARTIore Global Digital Exposure Investigation.**
