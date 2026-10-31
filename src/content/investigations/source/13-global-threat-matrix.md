---
title: "Global Threat Matrix"
series: "Global Digital Exposure Investigation"
version: "1.0"
date: "2026-10-26"
---

# Global Threat Matrix

A comparative view of the attack surfaces examined in this investigation. The matrix is designed for editors, policy teams, and security trainers who need to compare risks without collapsing them into a single "danger" score.

## How to read it

**Prerequisite** describes what the attacker must have. It is the most important column: it converts "possible" into "possible for whom".

**Evidence strength** uses the investigation's labels:

- **A — Confirmed:** primary source, documented incident, or vendor/court/regulator record.
- **B — Demonstrated in research:** reproducible in a lab or limited field test.
- **C — Plausible but unverified:** technically coherent, no public evidence of exploitation.
- **U — Unsupported:** widely claimed, no reliable evidence (listed where relevant to correct the record).

**Impact** is the worst credible outcome for an individual, not the average.

**Protection** names the single highest-leverage control, not a complete programme.

---

## A. Shared and public networks

| # | Surface | Prerequisite | Impact | Evidence | Primary protection |
|---|---|---|---|---|---|
| A1 | Evil-twin access point | Proximity; known SSID; auto-join | Credential theft; traffic redirection | A | Disable auto-join; never authenticate via portal |
| A2 | Malicious captive portal | User interacts with portal | Account takeover; card fraud | A | Use cellular data for sensitive logins |
| A3 | Certificate/profile installation | User consents | TLS interception; full traffic visibility | A | Never install profiles to "enable Wi-Fi" |
| A4 | Flat guest network | Misconfiguration | Lateral movement to property systems | A | Client isolation; network segmentation |
| A5 | Rogue DHCP | Local network access | Traffic interception | A | DHCP snooping; trusted networks only |
| A6 | Compromised router/AP | Default creds or firmware flaw | DNS manipulation; persistent redirection | A | Change credentials; patch firmware |
| A7 | Outdated AP firmware | Unpatched device | Known-exploit compromise | A | Firmware lifecycle management |
| A8 | Malicious proxy | Control of network path | Metadata exposure; selective blocking | A | HTTPS; VPN you control |
| A9 | Traffic analysis | Passive receiver | Profiling; patterns of life | A | Encrypted DNS; ECH; VPN |
| A10 | Service throttling/blocking | Network operator | Disruption; coercion | A | Alternative connectivity |

## B. DNS

| # | Surface | Prerequisite | Impact | Evidence | Primary protection |
|---|---|---|---|---|---|
| B1 | Registrar/zone hijack | Registrar or DNS account access | Domain takeover; traffic redirection | A | Registrar lock; MFA; CT monitoring |
| B2 | Resolver cache poisoning | Path position or race win | Redirection to attacker server | A | Randomised IDs/ports; DNSSEC |
| B3 | Malicious resolver setting | Router or device access | Durable redirection | A | Audit DNS settings; use trusted resolver |
| B4 | Rogue DHCP DNS | Local network access | Redirection | A | Trusted networks; DHCP controls |
| B5 | Domain impersonation | Registration fee | Credential phishing | A | Password manager; passkeys |
| B6 | DNS tunnelling | Compromised host + authoritative server | Covert exfiltration/C2 | A | DNS monitoring; egress control |
| B7 | DoH bypass of filtering | User or malware enables DoH | Policy circumvention | A | Managed browser policy |
| B8 | DNS outage/DNSSEC failure | Misconfiguration | Appears like attack; service loss | A | Monitoring; failover |
| B9 | KeyTrap-style DoS | Vulnerable validating resolver | Resolver outage at scale | A | Patch; rate limits |
| B10 | Sitting Ducks delegation | Lame delegation at provider | Domain hijack without registrar access | A | Audit delegations |

## C. Bluetooth and BLE

| # | Surface | Prerequisite | Impact | Evidence | Primary protection |
|---|---|---|---|---|---|
| C1 | Advertising observation | Receiver in range | Presence/location inference | A | Turn Bluetooth off when unused |
| C2 | Tracking tag misuse | Tag placed on person/property | Stalking; location history | A | Platform anti-stalking alerts; preserve tag |
| C3 | Radio fingerprinting | Specialised hardware | Tracking despite address rotation | B | Not consumer-defendable; limit exposure |
| C4 | HID injection (CVE-2023-45866) | Proximity; permissive host | Keystroke injection | A | Patch; disable discoverable mode |
| C5 | Impersonation (BIAS/BLUFFS) | Bonded device; vulnerable stack | Session hijack/decryption | A | Patch; remove unused bonds |
| C6 | Stack RCE (BlueBorne class) | Unpatched stack; proximity | Code execution | A | Patch; OS support lifecycle |
| C7 | Vulnerable peripheral | Malicious/weak device | Data theft; input injection | A | Buy reputable; audit pairings |
| C8 | BLE lock relay | Two radios; proximity | Unauthorised entry | B | Vendor mitigations; deadbolt |
| C9 | Braille/HID assistive device | Physical or pairing access | Input capture/injection | C | Vendor updates; unpair unused |

## D. Accessibility and device control

| # | Surface | Prerequisite | Impact | Evidence | Primary protection |
|---|---|---|---|---|---|
| D1 | Accessibility service abuse | User enables service | Screen read; transaction fraud | A | Audit accessibility list monthly |
| D2 | Notification access | User grants access | OTP and message interception | A | Restrict; review special access |
| D3 | Overlay/tapjacking | Overlay permission or old OS | Approval of unintended actions | A | Patch; block unknown overlays |
| D4 | Remote-support tool | User installs and grants | Full device control; fraud | A | Never install on request |
| D5 | Screen recording/sharing | User consents | Session and data capture | A | Share only specific windows |
| D6 | Device-admin abuse | User grants admin | Persistence; uninstall blocking | A | Audit device admins |
| D7 | Voice/switch input | Reachable assistant | Command execution | B | Lock-screen restrictions |

## E. Mobile platform exploitation

| # | Surface | Prerequisite | Impact | Evidence | Primary protection |
|---|---|---|---|---|---|
| E1 | Zero-click iMessage chain | Exploit + delivery | Full device access | A | Patch immediately; Lockdown Mode |
| E2 | WebKit exploit | Malicious page + exploit | Code execution | A | Patch; avoid untrusted links |
| E3 | Android kernel/driver flaw | Exploit + delivery | Privilege escalation | A | Patch; supported devices |
| E4 | Malicious APK/dropper | Sideloading or dropper | Banking fraud; spyware | A | No sideloading; Play Protect |
| E5 | Configuration profile/MDM | User enrols | Remote control; interception | A | Never enrol unrequested |
| E6 | Baseband/modem flaw | Network-level capability | Interception | B | Patch; trusted networks for high-risk use |
| E7 | Pre-installed malware | Supply-chain position | Data theft; ad fraud | A | Reputable vendors; verification |
| E8 | Account recovery abuse | Access to recovery channel | Account takeover | A | Hardware keys; recovery review |
| E9 | Keychain/backup exposure | Device or account access | Secret and data exposure | A | Strong passcode; ADP; E2EE backup |

## F. Messaging and accounts

| # | Surface | Prerequisite | Impact | Evidence | Primary protection |
|---|---|---|---|---|---|
| F1 | WhatsApp zero-click chain | Exploit + number | Device compromise | A | Patch; Lockdown Mode |
| F2 | SIM swap | Carrier social engineering | Account takeover | A | Passkeys/hardware keys; port PIN |
| F3 | Verification-code phishing | User discloses code | Account takeover | A | Never share codes |
| F4 | Linked-device abuse | Device access or deception | Real-time message access | A | Review linked devices |
| F5 | Unencrypted cloud backup | Default settings | Message exposure | A | Enable E2EE backup |
| F6 | Metadata exposure | Platform/carrier access | Social graph; patterns | A | Minimise; assume visible |
| F7 | Notification previews | Lock-screen settings | Content disclosure | A | Disable previews |

## G. Cloud, media and identity

| # | Surface | Prerequisite | Impact | Evidence | Primary protection |
|---|---|---|---|---|---|
| G1 | Credential phishing | User action | Full account access | A | Passkeys; password manager |
| G2 | Session token theft | Malware or extension | Account access without password | A | Revoke sessions; remove malware |
| G3 | Credential stuffing | Reused passwords | Account takeover | A | Unique passwords |
| G4 | Malicious extension | Install or supply-chain compromise | Cookie/document theft | A | Minimise; least privilege |
| G5 | Shared link exposure | Link forwarded/guessed | Content disclosure | A | Named recipients only |
| G6 | Metadata leakage | File shared without stripping | Location/identity exposure | A | Strip EXIF; check before sharing |
| G7 | Insecure backup | Unencrypted backup media | Full data exposure | A | Encrypted offline backups |
| G8 | Third-party breach | Vendor compromise | Identity/financial data exposure | A | Minimise data shared; monitor |
| G9 | AI tool upload | User uploads content | Retention/disclosure per policy | A | Treat as third party; check settings |

## H. Cryptocurrency

| # | Surface | Prerequisite | Impact | Evidence | Primary protection |
|---|---|---|---|---|---|
| H1 | Malicious approval | Signed transaction | Wallet drain | A | Verify; revoke approvals |
| H2 | Seed-phrase phishing | User discloses seed | Total loss | A | Never share seed; offline storage |
| H3 | Address poisoning | Copy from history | Misdirected transfer | A | Address book; verify on device |
| H4 | Clipboard hijack | Malware | Misdirected transfer | A | Verify on hardware screen |
| H5 | Fake wallet/extension | Install from untrusted source | Seed theft | A | Official sources only |
| H6 | Exchange compromise | Platform failure | Loss of custody | A | Self-custody for large holdings |
| H7 | SIM swap on exchange | SMS 2FA | Account takeover | A | Hardware-key 2FA |
| H8 | Smart-contract bug | Contract interaction | Loss of deposited funds | A | Avoid unaudited contracts |
| H9 | Bridge exploit | Bridge use | Loss of bridged assets | A | Minimise bridge exposure |
| H10 | Deepfake/social engineering | Access to employee or user | Authorised fraudulent transfer | A | Call-back verification; dual approval |
| H11 | Physical coercion | Knowledge of holdings | Forced transfer | A | Discretion; duress planning |

## I. Hospitality-specific

| # | Surface | Prerequisite | Impact | Evidence | Primary protection |
|---|---|---|---|---|---|
| I1 | Reservation-data phishing | Booking data + contact | Payment fraud; credential theft | A | Verify via official app only |
| I2 | Property POS compromise | Network or vendor access | Card data breach | A | Segmentation; P2PE; monitoring |
| I3 | Central reservation breach | Enterprise access | Mass guest-data exposure | A | Least privilege; detection |
| I4 | Electronic lock flaw | Physical access + card writer | Room entry | A | Deadbolt; firmware programme |
| I5 | Third-party IT access | Vendor credentials | Property-wide compromise | A | Vendor risk management; MFA |
| I6 | Insider misconduct | Employee access | Data/payment theft | A (case-specific) | Separation of duties; auditing |
| I7 | Help-desk social engineering | Identity verification failure | Enterprise intrusion | A | Strong verification; phishing-resistant auth |

## J. Claims we explicitly reject

| Claim | Status | Why |
|---|---|---|
| "Every hotel Wi-Fi is compromised" | U | No evidence; most incidents are opportunistic or unrelated |
| "Hotels are run by cybercrime rings" | U | No public evidence of general control |
| "Hotel IT staff routinely help attackers" | U | Case-specific at most; documented incidents involve impersonation or third-party compromise |
| "Bluetooth broadcasts prove surveillance" | U | Advertising is normal protocol behaviour |
| "iPhones cannot be hacked" | U | Multiple confirmed zero-click chains |
| "Encrypted messaging protects everything" | U | Endpoint, account, backup and metadata are outside the guarantee |
| "Anyone can be zero-clicked" | U | Capability is scarce and deployment is selective |
| "Blockchain security means wallets are safe" | U | Losses occur in wallets, apps, exchanges, bridges and decisions |
| "Accessibility features are malware" | U | The technology is legitimate; abuse requires deception and consent |

---

## Risk-adjusted priorities

If a reader can act on only five items, these have the highest expected value across regions and profiles:

1. **Phishing-resistant authentication** (passkeys or hardware keys) on email, cloud, password manager, banking, exchanges.
2. **Patch within days** on phones and computers — most confirmed exploits are fixed before they are used at scale.
3. **No sideloading and a monthly accessibility audit** on Android.
4. **Encrypted backups plus session review** for cloud accounts.
5. **A verification habit for money and identity** — call back on a known number, verify addresses on the device, never trust urgency.

The matrix is a map, not a scoreboard. Its purpose is to show that the same five controls recur across almost every row — which is why they are worth doing even for people who will never face the most sophisticated threats.
