---
title: "Hotel Wi-Fi Security: What Travellers Should Actually Do"
slug: "hotel-wifi-security-guide"
meta_description: "Hotels concentrate transients, shared networks and payment data. A practical, evidence-based guide to hotel Wi-Fi risks, captive portals, booking scams and room-lock security."
target_keyword: "hotel wifi security"
secondary_keywords: ["hotel wifi risks", "captive portal phishing", "booking.com scam", "hotel network security"]
category: "Travel"
reading_time: "7 minutes"
last_updated: "2026-10-26"
internal_links: ["password-protected-wifi-not-secure", "hotel-keycard-lock-security", "cloud-photo-account-takeover"]
---

# Hotel Wi-Fi Security: What Travellers Should Actually Do

Hotels are not uniquely dangerous. They are uniquely *concentrated*: many strangers, one shared network, payment systems, booking records, and physical access control, all in one building, often maintained by a third party you will never meet.

That concentration explains why hospitality appears repeatedly in breach statistics. It does not mean your hotel is watching you. It means the environment rewards caution and punishes assumptions.

## Why hotels attract attention

Six structural factors:

1. **Transient users** with laptops and corporate credentials, in a hurry.
2. **A shared network** guests must use and cannot inspect.
3. **Payment data** — cards, folios, booking records.
4. **Property-management systems** with access to guest data and room assignment.
5. **Electronic locks** and building systems that are increasingly networked.
6. **Third-party contractors** — network integrators, POS vendors, lock technicians.

A seventh matters just as much: guests are away from their normal environment and inclined to trust anything that looks like hotel infrastructure.

## The realistic threats, ranked

**1. Captive-portal phishing.** A page asks you to "sign in with Google" or re-enter your room number and surname. The first harvests credentials; the second harvests personal data for later fraud. This is the most common hotel-network attack because it requires no exploit. The finding that a fake portal can collect an email, Apple, Google, bank, or card password without breaking encryption rests on a single authoritative source class, not two independent sources.

**2. Evil-twin access points.** A rogue access point advertises the hotel's network name. Your device joins automatically. From there, the attacker can serve portals, redirect DNS, or observe metadata.

**3. Reservation-data scams.** Attackers who obtain booking details — through a platform breach or a compromised hotel account — send messages that reference the real property, real dates, and real amounts. In 2026, Booking.com confirmed suspicious activity affecting a number of reservations, with names, emails, phone numbers and booking details accessed; the company reset reservation PINs and warned customers, and researchers reported a subsequent wave of "reservation hijack" scams. [Confirmed — company statements, BBC reporting]

**4. Malicious or misconfigured DNS.** A portal that intercepts every request can keep intercepting after you "log in". Part III of the investigation covers this in detail.

**5. Flat networks.** If guest and management traffic share a network without segmentation, a compromised guest device can reach systems it should never see.

**6. Outdated access-point firmware.** An unpatched access point is a known vulnerability with a power cable.

**7. Physical access systems.** Electronic locks are part of the digital surface. The 2024 "Unsaflok" research found flaws in Dormakaba Saflok systems affecting more than 3 million doors in 131 countries. Opening a room in that research required a pair of forged keycards and a card writer, and no known real-world exploitation was reported when the research was disclosed. [Demonstrated in research]

## What the network can and cannot see

A hotel network can see a map of connections. It cannot, by itself, read the contents of a properly validated encrypted session.

**What it can see.** Destinations, DNS queries when DNS is not encrypted, and the server name sent in the clear at the start of many encrypted connections. Some providers go further: Performance Networks, a UK hotel Wi-Fi vendor, told Ars Technica that its software records “every click” and what guests have viewed, held for legislative purposes. That is one provider’s logging, not a property of every hotel network, and an encrypted path is not visible without interception.

**Provisional — SNI/DNS supported; timing/volume and URL logging documented by vendor/industry sources, primary verification pending.** → [C062](/investigations/digital-exposure/claims/#C062) A hotel cannot be assumed to analyse timing or volume just because it can see a connection. The capability and the practice are different questions. A sentence that says the hotel can see every address you visit is too broad unless the provider logs or intercepts them.

**What it cannot see.** The page body, the password field, and the message contents of a correctly validated encrypted session. “Correctly validated” excludes a device that has been taught to trust the wrong certificate, a browser that ignores certificate warnings, or an app that trusts every certificate. Reading those contents from the network requires a trusted rogue certificate or an installed configuration profile. That finding rests on a single authoritative source class, not two independent sources. Do not install a hotel “network profile” or “trust certificate” to get online. If the network requires it, use a different network or a cellular connection.

## Risks that are not Wi-Fi

The documented hotel incidents in this record often sit in accounts, booking systems, help desks, and physical access. The guest is not always on the hotel network when the harm happens.

**Booking-account phishing.** Criminals have taken over hotel partner accounts and used the platform’s own messaging to send guests payment requests. The message can arrive inside the booking app, from the hotel’s account, with real booking details, while the guest is on a train, in a taxi, or at home. Treat a payment request inside a booking thread as hostile until you verify it through a separate channel: the official app or site you open yourself, the front desk on a number you look up, or the platform’s own support path. Do not use the contact details in the message.

**Help-desk social engineering.** The 2023 MGM intrusion began with help-desk social engineering, not a Wi-Fi exploit. The public record supports that help-desk path and a $45 million settlement. A figure of about $100 million is MGM’s own attribution in its 8-K, not a figure verified in the fetched CISA or NLR sources, so it stays attributed to that filing.

**Reservation databases.** The Starwood guest-reservation breach, later associated with Marriott, was a reservation-system breach, not a guest-Wi-Fi breach. A later disclosure put the figure at 383 million records. Other published counts — 339 million in a 2024 FTC account, and an earlier estimate of up to 500 million — differ by date and scope. The lesson is that reservation databases concentrate names, contact details, passport numbers, and payment data across properties and third-party systems.

**Malware delivered over the network.** Microsoft attributed the CaptiveCrunch hotel-Wi-Fi campaign, which served a fake browser update delivering the CornFlake remote-access trojan, to Storm-2945. That is a device compromise delivered through a hotel network, not a passive observer reading encrypted pages. BWH Hotels identified an intrusion in a web application of guest reservation data, with no payment or bank details involved. Again: the reservation system, not the Wi-Fi password.

**Shared Wi-Fi passphrases.** WPA2-Personal uses a shared passphrase. Guests do not each get a unique master key; session keys are derived through the handshake. A weak shared passphrase can allow offline guessing if an attacker captures a handshake. Protection of management frames (802.11w) is optional, not the default. WPA3 with management-frame protection addresses parts of this only when both the access point and the device support it. Single-source. These are reasons to keep encrypted connections, avoid weak passphrases where you control them, and prefer WPA3 where both sides support it. They are not a reason to say that hotel Wi-Fi decrypts banking.

A documented incident shows that a pattern occurred. It does not show that every hotel is unsafe.

## What is not supported

There is no reliable public evidence that hotels are generally operated by cybercriminal rings, or that hotel IT staff routinely participate in attacks. Documented incidents involve external intrusion, third-party compromise, credential theft, and — rarely — specific insider misconduct. Claims about a particular property require evidence about that property.

## A practical routine

**Before you book:**

- Use the official app or website, not a link from a message.
- Turn on two-factor authentication for the booking account.
- Prefer properties that publish a privacy or security contact.

**On arrival:**

- Confirm the exact network name at the front desk. Do not trust a name that merely looks right.
- Disable auto-join for open networks before you travel.
- If a portal asks for an email password, social login, or a certificate — stop. Use cellular data instead.
- Check that the login page's domain matches the property or provider exactly.

**While connected:**

- Do sensitive work — banking, email recovery, password changes — on cellular data or a VPN you control.
- Keep HTTPS everywhere and never click through a certificate warning.
- Turn off file sharing and AirDrop to "Everyone".
- Use a password manager so a look-alike domain receives a wrong password rather than a reused one.

**At checkout:**

- Forget the network.
- Sign out of sessions on shared devices.
- Review active sessions on your main accounts if you logged in anywhere unusual.

## If something feels wrong

Signs worth acting on:

- A portal that reappears after you logged in.
- A certificate warning on a major site.
- A login that succeeds without your usual second factor.
- A message about your booking that asks you to "confirm payment" through a link.

**What to do:** disconnect, switch to cellular, change the password for the affected account from a different device, revoke sessions, and check for unfamiliar OAuth grants. If you entered card details, call the bank — not the number in the message.

## Room locks and physical access

Electronic locks deserve their own paragraph. They are computers with a credential reader. Documented flaws have allowed forged keycards; documented failures have also included weak master codes and poorly managed key encoders.

Basic habits: use the deadbolt, do not leave keycards behind, report lost cards immediately, and do not accept a room assignment announced aloud in a crowded lobby.

## FAQ

**Is hotel Wi-Fi safe for online banking?**
Treat it as untrusted. Use cellular data or a VPN you control, and verify the site's domain before entering credentials.

**Can the hotel see my traffic?**
They can see metadata: which sites you connect to, unencrypted DNS queries, and often the server name. The contents of a properly validated encrypted session are not readable from the network alone. Seeing those contents requires a further condition, such as an installed certificate or configuration profile, and that finding rests on a single authoritative source class. Provisional — SNI/DNS supported; timing/volume and URL logging documented by vendor/industry sources, primary verification pending. → [C062](/investigations/digital-exposure/claims/#C062)

**Should I use the hotel's "secure" network with a password?**
A password limits access; it does not establish trust. The precautions above still apply.

**Are booking messages from hotels always genuine?**
No. Reservation-data scams use real details. Verify through the official app, never through the link in the message.

---

**Related:** [Why a password-protected network is not secure](password-protected-wifi-not-secure) · [Hotel keycard lock security](hotel-keycard-lock-security) · [How cloud photo accounts get taken over](cloud-photo-account-takeover)

**Part of the ARTIore Global Digital Exposure Investigation.**
