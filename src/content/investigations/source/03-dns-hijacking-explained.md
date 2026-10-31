---
title: "DNS Hijacking Explained: The Invisible Switch That Decides Where You Go"
slug: "dns-hijacking-explained"
meta_description: "DNS decides which server your device connects to. Learn how DNS hijacking, cache poisoning and rogue resolvers work, what HTTPS still protects, and how to check your own settings."
target_keyword: "dns hijacking"
secondary_keywords: ["dns spoofing", "dns cache poisoning", "what is dns", "dns security check"]
category: "Networks"
reading_time: "7 minutes"
last_updated: "2026-10-26"
internal_links: ["password-protected-wifi-not-secure", "hotel-wifi-security-guide", "android-accessibility-service-malware"]
---

# DNS Hijacking Explained: The Invisible Switch That Decides Where You Go

Every connection begins with a question: *where is this name?* The Domain Name System answers it. Whoever answers that question decides which server your device talks to — before any encryption, any login, any padlock.

That is why DNS is a control layer, not a plumbing detail.

## How DNS works in one paragraph

Your device asks a **resolver** for the IP address behind a name. The resolver walks a hierarchy — root servers, then the top-level domain, then the domain's authoritative servers — and returns the answer, caching it for the record's time-to-live. Your device usually learns which resolver to use from the local network via DHCP, from your mobile carrier, or from a setting you chose once and forgot. [Confirmed]

## Six things called "DNS attack"

**1. DNS hijacking.** Any unauthorised change to resolution: at the registrar (nameservers), at the authoritative zone (records), at the resolver (cache), at the router (settings), or on the device (malware).

**2. Spoofing and cache poisoning.** Forged responses injected into a resolver, hoping to win the race against the legitimate answer. Modern resolvers randomise transaction IDs and source ports, which raised the cost. Research such as SAD DNS (CVE-2020-25705) showed the class is not extinct under specific conditions. [Confirmed]

**3. Malicious resolver configuration.** The attacker does not poison a cache; they *are* the answer. This is the most durable form, because it survives reboots.

**4. Router-level manipulation.** Consumer routers expose a DNS setting. Default credentials, UPnP misconfiguration, or a firmware flaw gives an attacker that interface — and every device behind the router is redirected without being touched.

**5. Rogue DHCP.** A device on a shared network hands out its own gateway and resolver, positioning itself in the path.

**6. Domain impersonation.** Registering `examp1e.com` or using homoglyphs. No protocol is broken; reading is.

## What DNS control can and cannot do

This is the part most articles get wrong in both directions.

**If DNS is controlled but TLS is intact:**

- The attacker can send you to a different server.
- Your browser checks the certificate against the domain in the address bar.
- A look-alike domain gets a valid certificate *for the look-alike* — detectable by a careful reader.
- Content stays unreadable unless you accept an invalid certificate or install a rogue root certificate.

**If DNS is controlled and a valid certificate for the real domain is obtained** — through mis-issuance, domain-validation hijacking, or an installed root — then TLS no longer protects you. That is rare, documented, and serious.

So: DNS manipulation is primarily a **positioning** and **denial** capability. It is excellent for phishing, blocking, and mapping your destinations. It is not, by itself, decryption.

## Documented cases

- **DNSChanger (2007–2011):** altered DNS settings on millions of machines to redirect advertising and affiliate revenue; the FBI led a takedown in November 2011. [Confirmed]
- **Sea Turtle (2017–2019):** hijacked records at registrars and registries, affecting more than 40 organisations in at least 13 countries — without malware on victim devices. [Confirmed — Cisco Talos]
- **DNSpionage (2018–2019):** manipulated DNS records and certificates to intercept credentials in the Middle East. [Confirmed]
- **Roaming Mantis (from 2018):** compromised routers to change DNS, redirecting mobile users to phishing and Android malware; later used DNS-over-HTTPS to evade detection. [Confirmed]
- **MyEtherWallet BGP hijack (2018):** rerouted traffic for Amazon Route 53 DNS servers to a phishing site, stealing cryptocurrency from some users. [Confirmed]
- **Sitting Ducks (2024):** domains delegated to DNS providers that no longer served the zone could be claimed by attackers; used since at least 2019, with large numbers of vulnerable domains identified. [Confirmed — Infoblox, Eclypsium]
- **KeyTrap (CVE-2023-50387, 2024):** a DNSSEC validation complexity flaw allowed a single malicious zone to exhaust resolver CPU. Patched in early 2024. [Confirmed]

The pattern: DNS failures are often **configuration errors**, not exploits. That makes them cheap, durable, and invisible to the domain owner.

## Encrypted DNS: improvement, not absolution

DNS-over-HTTPS and DNS-over-TLS encrypt the query between your device and the resolver. A hotel network can no longer see which names you resolve.

The limits:

- **Trust moves.** The resolver now sees everything. Choosing one is choosing a trust relationship.
- **It can bypass filtering.** Enterprise and parental controls often rely on DNS.
- **It does not encrypt the destination.** The TLS connection still reveals the server name unless Encrypted Client Hello is used.
- **It does not help a compromised device.** Malware can ignore your settings entirely.

## How to check your own DNS

1. **Phone:** iOS Settings → Wi-Fi → (i) → Configure DNS; Android → network details → IP settings. Anything you did not set should be explainable.
2. **Router:** admin interface → WAN/DHCP → DNS servers. Compare with your ISP's published ranges or a resolver you recognise.
3. **Query comparison:** `nslookup example.com` versus `nslookup example.com 1.1.1.1`. Materially different answers suggest local interception.
4. **DNS leak test** while on a VPN.
5. **Certificate Transparency** monitoring if you own a domain.
6. **Behavioural signs:** unexpected redirects, login pages you did not expect, security software that cannot update, sites that load only over HTTP.

**The limit of all of this:** you need a baseline. Most people do not know what their DNS should be, which is exactly why manipulation lasts. If you cannot identify your resolver, replace it with one you trust and re-check in a week.

## What to do

- Set a reputable resolver deliberately on your devices.
- Enable DNSSEC validation where available (it authenticates, it does not encrypt).
- Change router admin credentials; disable remote management and UPnP unless needed.
- Never install a "DNS fix" app or profile.
- For domain owners: enable registrar locks, monitor Certificate Transparency, audit delegations, and fix lame delegations.

## FAQ

**Can DNS hijacking steal my password?**
Not directly. It can send you to a fake login page, which can. With valid HTTPS and a careful check of the domain, the risk drops sharply.

**Does HTTPS stop DNS attacks?**
It stops content interception. It does not stop redirection to a look-alike domain.

**Is encrypted DNS always better?**
For privacy from the local network, usually. It shifts visibility to the resolver, and can break network-level filtering.

**How would I know if my router's DNS was changed?**
Check the router's DNS fields against what you set. Unexpected IP addresses are the signal.

---

**Related:** [Why Wi-Fi passwords do not make a network safe](password-protected-wifi-not-secure) · [Hotel Wi-Fi: a traveller's guide](hotel-wifi-security-guide) · [Android accessibility malware](android-accessibility-service-malware)

**Part of the ARTIore Global Digital Exposure Investigation.**
