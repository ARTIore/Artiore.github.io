---
title: "Hotel Keycard Locks: The Unsaflok Case and What It Means for Guests"
slug: "hotel-keycard-lock-security"
meta_description: "Three million hotel doors used a lock system with forgeable keycards. What the Unsaflok research proved, what it did not prove, and how hotel access systems fit the digital attack surface."
target_keyword: "hotel keycard lock security"
secondary_keywords: ["unsaflok", "saflok vulnerability", "hotel door lock hack", "electronic lock security"]
category: "Physical security"
reading_time: "5 minutes"
last_updated: "2026-10-26"
internal_links: ["hotel-wifi-security-guide", "password-protected-wifi-not-secure", "bluetooth-ble-tracking"]
---

# Hotel Keycard Locks: The Unsaflok Case and What It Means for Guests

A hotel room lock feels like the most physical security in the building. It is also a computer: a reader, a microcontroller, a credential format, and often a management system that issues and revokes keys.

In 2024, researchers showed that one widely deployed system could be opened with a forged card.

## What Unsaflok found

Security researchers Lennert Wouters, Ian Carroll, and colleagues disclosed a series of flaws in Dormakaba's Saflok electronic lock system. By combining weaknesses in the credential format and the lock's validation logic, they could create a pair of forged keycards that opened a room.

The scope was large: more than **3 million doors** at over **13,000 properties** in **131 countries**, across several Saflok generations. [Confirmed — researcher disclosure, vendor advisory, WIRED reporting]

**What exploitation required:**

- physical proximity to the target door;
- a valid keycard from the same property (any room);
- a device capable of reading and writing the card format;
- knowledge of the technique.

**What it did not require:** a network connection, a compromised hotel system, or insider access.

## What the case proves

1. **Physical access control is part of the digital attack surface.** "Offline" systems still parse untrusted input.
2. **Credential formats age.** Designs from an earlier era can persist for decades across thousands of sites.
3. **Remediation is hard.** Many locks required manual updates — an estimated two minutes per lock, across millions of doors — and property owners had to be persuaded to act.
4. **Disclosure works.** The researchers notified the vendor, which developed mitigations and began a multi-year rollout.

## What it does not prove

- That hotel rooms were being opened by criminals at scale.
- That any particular hotel was vulnerable — the flaw was in a product line, not every property.
- That hotel staff were involved. The technique required no insider.

The gap between "a vulnerability existed" and "a crime occurred" is where most public discussion goes wrong.

## The wider access-control picture

Electronic locks are one node in a chain that includes:

- **the front-desk system** that issues keys;
- **the encoder** that writes cards;
- **the property-management system** that decides who gets which room;
- **the audit log** that records openings;
- **the master-key hierarchy**;
- **the vendor's firmware and update process**.

Weaknesses anywhere in that chain matter. Documented failures have included weak master codes, shared vendor credentials, poorly segmented networks connecting locks to property systems, and mobile-key apps with flawed account recovery.

## Bluetooth and mobile keys

Many hotels now offer phone-based keys using BLE or NFC. That adds convenience and a new surface:

- pairing and provisioning;
- the app's account security;
- relay attacks against proximity assumptions;
- revocation when a guest checks out or a phone is lost.

The cryptography may be sound while the operational process is not. A key that remains valid after checkout is a policy failure, not a cryptographic one.

## Practical advice for guests

1. **Use the deadbolt** — it is mechanical and independent of the electronics.
2. **Do not leave keycards in the room** or discard them where they can be collected.
3. **Report a lost card immediately** so it can be revoked.
4. **Do not accept a room number announced aloud** in a crowded lobby.
5. **Check that the door closes fully** — a misaligned strike plate defeats better locks than the one on your door.
6. **For high-risk travel**, prefer properties with modern access control and ask about key revocation at checkout.
7. **Do not use a card found in the room** or left by a previous guest.

## What hotels should do

- Inventory lock firmware and plan upgrades, not just replacements at refurbishment.
- Separate lock networks from guest and corporate networks.
- Enforce revocation at checkout and on reported loss.
- Audit master-key issuance and encoder access.
- Contractually require vendors to disclose vulnerabilities and remediation timelines.

## FAQ

**Can someone open my hotel room with a phone?**
Only with a provisioned key or an exploit against the lock or app. The Unsaflok technique required a forged card, not a phone.

**Are all hotel locks vulnerable?**
No. The disclosed flaws affected specific Dormakaba Saflok systems. Other vendors have had their own issues.

**Should I worry about my room being broken into digitally?**
The realistic risk is low for most travellers. The deadbolt and basic habits address the common cases.

**Is a mobile key less safe than a card?**
It depends on the implementation. Both depend on revocation and account security.

---

**Related:** [Hotel Wi-Fi security guide](hotel-wifi-security-guide) · [Why Wi-Fi passwords do not make a network safe](password-protected-wifi-not-secure) · [Bluetooth and BLE tracking](bluetooth-ble-tracking)

**Part of the ARTIore Global Digital Exposure Investigation.**
