---
title: "iPhone Zero-Click Spyware: What Is Proven, What Lockdown Mode Does"
slug: "iphone-zero-click-spyware"
meta_description: "iPhones are hard to hack, not immune. A documented look at zero-click exploit chains, Apple Threat Notifications, Lockdown Mode, and how to judge the evidence."
target_keyword: "iphone zero click spyware"
secondary_keywords: ["iphone spyware", "lockdown mode", "apple threat notification", "imessage exploit"]
category: "Mobile"
reading_time: "7 minutes"
last_updated: "2026-10-26"
internal_links: ["pegasus-predator-commercial-spyware", "whatsapp-encryption-limits", "android-accessibility-service-malware"]
---

# iPhone Zero-Click Spyware: What Is Proven, What Lockdown Mode Does

The sentence "iPhones cannot get spyware" is reassuring, widely repeated, and false. The accurate sentence is harder and more useful: **iPhones are among the hardest consumer devices to compromise, and they have been compromised repeatedly in targeted attacks.**

The difference matters, because the first sentence produces complacency and the second produces appropriate action.

## What "zero-click" means

Most compromises require you to do something: tap a link, install an app, enter a password. A **zero-click** exploit requires nothing. The device processes incoming data automatically — an image, a font, a message attachment, a link preview — and a memory-corruption bug in that processing path yields code execution before you see anything.

This is not science fiction. It is the documented mechanism of several of the most important iOS attacks on record.

## The documented chains

| CVE | Component | Year | What it was used for |
|---|---|---|---|
| CVE-2021-30860 | CoreGraphics (JBIG2) | 2021 | FORCEDENTRY: zero-click iMessage delivery of Pegasus |
| CVE-2023-41064 / -41061 | ImageIO / Wallet | 2023 | BLASTPASS: zero-click via a malicious image |
| CVE-2023-38606, -41990, -32434, -32435 | Kernel / FontParser / WebKit | 2023 | Operation Triangulation: four-zero-day chain |
| CVE-2025-43300 | ImageIO | 2025 | Used with WhatsApp CVE-2025-55177 in a zero-click chain |
| CVE-2026-86950 | CoreGraphics | 2026 | Patched in September; exploited against "specific targeted individuals" |

[Confirmed — Apple advisories, CVE records, CISA KEV, Citizen Lab, Kaspersky]

Two details deserve emphasis.

**FORCEDENTRY** used a malicious PDF-like image that iMessage processed automatically. The victim did not click. Apple introduced BlastDoor to harden message parsing; later chains still found paths around the architecture.

**Operation Triangulation** combined four zero-days, including an undocumented hardware feature that allowed the attackers to bypass a security mitigation. Kaspersky observed it from 2019 and disclosed it in 2023. [Confirmed]

## The 2026 case that shows how this is confirmed

In September 2026, Citizen Lab, working with the SHARE Foundation, confirmed that an iPhone belonging to a Serbian student activist had been infected with Pegasus through an iMessage zero-click exploit, with high-confidence indicators from December 2025 to January 2026. The exploit was subsequently patched by Apple in iOS 18.4.1. At least 14 people in the student movement and civil society had received Apple Threat Notifications. [Confirmed — Citizen Lab, Reuters]

This is what evidence looks like: a forensic examination, a named exploit path, a vendor patch, and a notification trail. It is very different from a battery that drains quickly.

## What Lockdown Mode does

Lockdown Mode is an optional, extreme hardening setting for people who may be targeted. It reduces attack surface by disabling or restricting features that are commonly exploited:

- most message attachment types;
- link previews;
- some web technologies and just-in-time compilation;
- incoming invitations and calls from unknown contacts;
- wired connections;
- some configuration profiles and device management.

The trade-off is real: attachments, some websites, and some accessories may not work. It is not necessary for most people. It is rational for journalists, activists, officials, executives, litigants, and anyone who has received a Threat Notification.

## Apple Threat Notifications

Apple sends notifications to users it believes have been targeted by mercenary spyware. They are deliberately sparse, to protect detection methods. Access Now and Citizen Lab treat them as a high-confidence indicator of targeting.

If you receive one:

1. Do not reset or "clean" the device.
2. Do not confront anyone using that device.
3. Contact a recognised digital-security helpline or a forensic provider.
4. Preserve the device and its logs.
5. Enable Lockdown Mode after consultation.
6. Inform people you communicate with, through a separate channel.

## What is not evidence of spyware

- battery drain (common, usually software);
- a phone that heats up (same);
- an unexplained call or missed call (network behaviour, spam);
- a strange notification (app bug, spam, marketing);
- a Bluetooth device in your list (public space);
- a log entry you do not understand (logs contain error strings).

Each of these can co-occur with spyware. None establishes it. The error runs in both directions — dismissing real infections and accusing innocent ones — and both are harmful.

## Who is actually targeted

The public record is consistent: journalists, human-rights defenders, lawyers, opposition politicians, officials, and people close to them. The cost of a full chain — millions of dollars, or a subscription to a spyware product — means deployment is selective.

That is not a reason for complacency. It is a reason to calibrate. If you are in a targeted group, patch within hours, use Lockdown Mode, and use hardware security keys. If you are not, patch promptly, use a strong passcode, and spend your attention on the risks that are actually common: phishing, account takeover, and fraud.

## Practical measures

1. **Update iOS immediately** when a security update appears.
2. **Use a strong alphanumeric passcode** — not six digits.
3. **Enable Lockdown Mode** if you are high-risk.
4. **Disable message previews** on the lock screen.
5. **Use hardware keys** for your Apple account and primary email.
6. **Review trusted devices and recovery contacts** twice a year.
7. **Do not install configuration profiles** you did not request.
8. **Keep the app count low.**

## FAQ

**Can an iPhone be hacked without clicking anything?**
Yes, with a zero-click exploit chain. It is rare, expensive, and targeted.

**Does Lockdown Mode make an iPhone unhackable?**
No. It substantially reduces attack surface. Nothing makes a device unhackable.

**How would I know if I were infected?**
Often you would not. Threat Notifications and forensic examination are the reliable routes.

**Is Android safer?**
Neither platform is immune. Both have been compromised by commercial spyware. Patch behaviour matters more than brand.

---

**Related:** [Pegasus, Predator and commercial spyware](pegasus-predator-commercial-spyware) · [WhatsApp encryption limits](whatsapp-encryption-limits) · [Android accessibility malware](android-accessibility-service-malware)

**Part of the ARTIore Global Digital Exposure Investigation.**
