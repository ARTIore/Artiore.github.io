---
title: "Technical Glossary"
series: "Global Digital Exposure Investigation"
version: "1.0"
date: "2026-10-26"
terms: 86
---

# Technical Glossary

Eighty-six concepts used in this investigation, in plain language. Definitions describe how the term is used in this report; they are not exhaustive specifications.

## Core concepts

**Access point (AP)** — The radio device that lets Wi-Fi clients join a network. It is a small computer with firmware, an admin interface, and its own vulnerabilities.

**Attack surface** — The sum of ways an attacker can try to reach or influence a system. Reducing it (fewer apps, fewer open ports, fewer permissions) reduces risk.

**Botnet** — A network of compromised devices controlled remotely, often used for spam, fraud, or denial-of-service.

**CVE** — Common Vulnerabilities and Exposures: a public identifier for a specific security flaw, for example CVE-2021-30860. A CVE identifies a bug; it does not by itself tell you whether it was exploited.

**CVSS** — A scoring system (0–10) for the severity of a vulnerability. It estimates technical impact, not the likelihood that you personally will be attacked.

**Exploit** — Code or a technique that takes advantage of a vulnerability to achieve an effect, such as running code or reading data.

**Lateral movement** — Moving from one compromised device to another inside a network. Flat networks make this easy.

**Patch** — A software update that fixes a vulnerability. Most confirmed exploits in this report target flaws that were patched before mass exploitation.

**Persistence** — The mechanisms an attacker uses to survive reboots and removal: startup items, scheduled tasks, configuration profiles, device management enrolment.

**Privilege escalation** — Gaining more rights than you were given, for example moving from a normal app to system-level access.

**Sandbox** — An isolated environment that limits what a process can touch. Mobile apps run in sandboxes; exploits usually need a sandbox escape to be useful.

**Social engineering** — Manipulating a person into an action, rather than breaking a system. Most successful intrusions include it.

**Supply chain** — The vendors, libraries, and services a product depends on. A compromise upstream spreads to everyone downstream.

**Threat model** — A structured description of what you are protecting, from whom, under what conditions. Security decisions without a threat model are guesses.

**Vulnerability** — A weakness that can be exploited. A vulnerability is not an incident; most are never exploited.

**Zero-day** — A vulnerability unknown to the vendor, so no patch exists at the time of use.

## Identity and accounts

**Account takeover (ATO)** — An attacker gaining control of an account, usually through credentials, session theft, or recovery abuse.

**Authentication** — Proving who you are. **Authorization** — what you are allowed to do. Confusing them causes many security failures.

**Credential stuffing** — Trying username/password pairs leaked from one service against another, exploiting password reuse.

**FIDO2 / passkey** — A phishing-resistant authentication standard. The private key stays on your device; there is no code to steal or relay.

**MFA** — Multi-factor authentication: combining something you know, have, or are. Strength depends on the method; SMS is the weakest common form.

**OAuth** — A framework that lets an app access another service on your behalf. A malicious or over-broad grant can expose data long after you forget the app.

**OTP** — One-time password, often a six-digit code. It protects against password guessing but can be phished or intercepted.

**Recovery channel** — The email, phone number, or trusted device used to regain access. It is often weaker than the password and is a primary target.

**Session token** — A credential issued after login that keeps you signed in. It is a bearer credential: anyone who copies it can act as you until it expires or is revoked.

**SIM swap** — Convincing a carrier to transfer your number to an attacker's SIM, enabling interception of calls and SMS codes.

## Networks and DNS

**ARP spoofing** — Sending false address-resolution messages on a local network so traffic flows through the attacker.

**BGP** — The protocol that routes traffic between networks. A BGP hijack can redirect traffic at internet scale without touching the victim's device.

**Captive portal** — The login page shown on many public networks. It is frequently imitated for phishing.

**Certificate** — A signed statement binding a public key to a domain. It is what makes HTTPS trustworthy — if the certificate is valid for the domain you are actually visiting.

**Certificate Authority (CA)** — An entity that issues certificates. Compromise or mis-issuance by a CA can undermine HTTPS broadly.

**Certificate Transparency (CT)** — Public logs of issued certificates, used to detect mis-issuance.

**Client isolation** — A Wi-Fi setting that prevents clients on the same network from reaching each other. Essential on guest networks.

**DHCP** — The protocol that assigns IP addresses, gateways, and DNS servers. A rogue DHCP server can position an attacker in the path.

**DNS** — The Domain Name System: the lookup service that maps names to addresses. Whoever controls resolution controls where you connect.

**DNS over HTTPS / TLS (DoH/DoT)** — Encrypted DNS. It hides queries from the local network and moves trust to the resolver.

**DNSSEC** — Cryptographic signatures for DNS records. It provides authenticity, not confidentiality, and adds its own failure modes.

**Encrypted Client Hello (ECH)** — Encrypts the server name in a TLS handshake, hiding the destination from passive observers.

**Evil twin** — A rogue access point impersonating a legitimate network name.

**HSTS** — A policy that forces browsers to use HTTPS for a domain, reducing downgrade attacks.

**Man-in-the-middle (MITM)** — An attacker positioned between two parties, able to observe or alter traffic. Defeated by correct TLS validation; enabled by rogue certificates.

**Proxy** — An intermediary that forwards traffic. Malicious or misconfigured proxies can log, alter, or block.

**Resolver** — The server that answers DNS queries for your device.

**SSID** — A Wi-Fi network name. It is a label, not an identity, and is trivially copied.

**TLS** — The protocol that encrypts HTTPS and many other connections. It protects content when certificates are valid and the endpoint is not compromised.

**VPN** — An encrypted tunnel to a provider. It protects traffic from the local network and shifts trust to the provider.

## Wireless

**Advertising (BLE)** — Periodic broadcast packets that let nearby devices discover a peripheral. Advertising is normal protocol behaviour, not a sign of an attack.

**Bluetooth Classic** — The original Bluetooth mode, used for audio and continuous streams.

**Bluetooth Low Energy (BLE)** — A low-power mode for sensors, wearables, tags, and locks. Most BLE devices advertise rather than stay connected.

**BlueBorne** — A 2017 family of Bluetooth stack vulnerabilities allowing remote code execution or information disclosure, in some cases without pairing.

**Bonding** — Storing pairing keys so devices reconnect automatically. A bond is a durable trust relationship.

**HID (Human Interface Device)** — The device class that includes keyboards and mice. A Bluetooth HID device can send keystrokes, which is why HID impersonation matters.

**Identity Resolving Key (IRK)** — A secret shared with bonded devices that lets them recognise a device across address changes. If it leaks, address randomisation stops protecting you from that observer.

**Pairing** — The process of establishing keys between Bluetooth devices. "Just Works" pairing encrypts but does not authenticate, leaving room for relay attacks.

**Resolvable Private Address (RPA)** — A rotating Bluetooth address derived from the IRK, intended to prevent trivial tracking.

## Mobile platforms

**Accessibility Service (Android)** — A system API that lets an app read the screen and perform actions for the user. Essential for assistive technology; the most abused permission in Android fraud.

**APK** — The Android application package format. Installing APKs from outside a trusted store is the main delivery route for Android malware.

**Baseband** — The processor and firmware that handle cellular radio. It is reachable by the network and runs proprietary code.

**BlastDoor** — Apple's hardened sandbox for parsing iMessage content, introduced in iOS 14.

**Configuration profile** — A file that changes device settings, including Wi-Fi, VPN, certificates, and management enrolment. A common phishing target.

**Keychain** — Apple's credential store. iCloud Keychain is end-to-end encrypted, but it protects secrets at rest, not a compromised device.

**Lockdown Mode** — An optional extreme hardening mode on Apple devices that disables or restricts commonly exploited features.

**MDM (Mobile Device Management)** — Enterprise device management with broad control: app installation, location, wipe, policy enforcement. Abuse occurs through tricked enrolment or stolen credentials.

**Notification access** — A permission that lets an app read notifications from other apps, including one-time codes.

**Overlay** — A window drawn on top of another app. Used for tapjacking and for hiding fraudulent actions.

**Sideloading** — Installing apps outside the official store. Convenient for developers; the main malware vector on Android.

**Threat Notification (Apple)** — A warning sent to users Apple believes have been targeted by mercenary spyware. Treated by researchers as a high-confidence indicator of targeting.

**Zero-click** — An attack that requires no user interaction, exploiting automatic processing of incoming data.

## Messaging, cloud and media

**Advanced Data Protection (ADP)** — An Apple setting that extends end-to-end encryption to more iCloud categories, including backups. It removes Apple's ability to recover the data.

**Backup** — A copy of device or account data. Encrypted backups protect confidentiality; unencrypted or provider-keyed backups do not.

**End-to-end encryption (E2EE)** — Encryption where only the communicating endpoints hold the keys. It protects content in transit and at rest on the server, not the endpoint.

**EXIF** — Metadata embedded in images: GPS coordinates, timestamps, device model. Often more sensitive than the image.

**Metadata** — Data about communication rather than its content: who, when, where, how often. It survives encryption.

**Signal Protocol** — The double-ratchet design used by WhatsApp and Signal, providing forward secrecy and per-message keys.

## Spyware and financial fraud

**Address poisoning** — Sending a zero-value transaction from a look-alike address so the fake appears in the victim's history and is copied later.

**Approval (token allowance)** — Permission for a contract to spend your tokens. Unlimited approvals are a primary drainer mechanism.

**Bridge** — A service that moves assets between blockchains. Bridges hold large pools of value and have been repeatedly exploited.

**Cold wallet / hardware wallet** — A wallet whose keys are stored offline on a dedicated device, ideally with a screen to verify addresses.

**Drainer** — A criminal kit that persuades a victim to sign a transaction granting access to their funds.

**Exploit broker** — An intermediary that buys vulnerabilities or exploit chains and sells them, often to multiple buyers.

**Graphite** — A commercial spyware product from Paragon Solutions, documented in a 2025 WhatsApp campaign.

**Pegasus** — NSO Group's spyware, documented in forensic investigations and court records.

**Predator** — An implant associated with the Intellexa consortium, documented in infections of journalists and activists.

**Seed phrase** — The human-readable root of a wallet's keys. Anyone with it controls the funds; no legitimate service needs it.

**Spyware** — Software that covertly collects data from a device. Mercenary spyware is a distinct, high-cost category.

**Stalkerware** — Consumer-grade monitoring software, often installed with physical access, used in domestic abuse.

*See the Source Register for the evidence behind each definition.*
