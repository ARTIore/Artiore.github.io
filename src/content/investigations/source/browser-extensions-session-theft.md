# Browser Extensions and Session Theft: Why MFA Is Not the Last Barrier

**ARTIore | Research edition: 25 October 2026.** Evidence labels apply to the findings identified below; scenarios and recommendations are defensive synthesis.

Multifactor authentication protects the login process. After login, a service often relies on a session credential to recognize the browser. If that credential is stolen and reusable, the attacker may gain access without repeating the same login challenge. The browser environment therefore deserves attention even when an account has strong authentication. [S54](https://www.csa.gov.sg/alerts-and-advisories/alerts/al-2024-147/) [S55](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/cookies)

## The permissions behind convenience

Extensions can provide useful features by interacting with websites. Access is governed by browser APIs and permissions. Mozilla's documentation, for example, requires both the cookies API permission and appropriate host permissions for extension cookie access. A narrow extension and one allowed to interact with many sites have different potential reach. [S55](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/cookies)

Malicious page interaction can also expose form content or displayed information where permissions allow it. A store listing is not a guarantee that every future update will remain trustworthy. Compromising a developer or distribution process can turn a previously legitimate tool into a delivery channel. [S54](https://www.csa.gov.sg/alerts-and-advisories/alerts/al-2024-147/)

## A documented extension campaign

On 30 December 2024, Singapore's Cyber Security Agency warned about compromised Chrome extensions containing malicious code capable of exfiltrating authenticated sessions and cookies. Cyberhaven was among the listed extensions. **Evidence: Confirmed advisory about compromised extensions and their capabilities.** [S54](https://www.csa.gov.sg/alerts-and-advisories/alerts/al-2024-147/)

The advisory supports the session-theft risk. It does not establish that every user lost data, that every listed tool could reach every website or that a stolen session always works. Service-side expiration, reauthentication and other controls can limit replay. [S54](https://www.csa.gov.sg/alerts-and-advisories/alerts/al-2024-147/) [S55](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/cookies)

## How far can an attacker go?

The answer depends on the extension's permissions, browser profile, accessible session and the service's checks. A compromised session may expose permitted documents or enable actions on the victim's behalf. It does not automatically compromise every other device, extract all passwords or defeat end-to-end encryption whose keys remain unavailable. [S52](https://support.apple.com/en-us/102651) [S54](https://www.csa.gov.sg/alerts-and-advisories/alerts/al-2024-147/) [S55](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/cookies)

This is why strong authentication and session security are complementary. A passkey makes impersonating the login destination much harder, but it does not sanitize an already compromised browser or guarantee that account recovery is safe. [S70](https://www.ncsc.gov.uk/blogs/passkeys-are-more-secure-than-traditional-ways-to-log-in)

## Useful signs and weak signals

Pay attention to verified vendor incident notices, unexpected requests for broader permissions, an extension you did not install and unfamiliar account activity. A slow browser alone is not enough to diagnose session theft. Session lists can also be imperfect evidence of replay; do not assume the absence of a clearly named attacker means there was no misuse. [S54](https://www.csa.gov.sg/alerts-and-advisories/alerts/al-2024-147/) [S55](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/cookies)

## Reduce the trusted surface

Keep only extensions you need. Review site access and separate sensitive account use from unnecessary browser tools where practical. Follow verified incident guidance to remove or update affected extensions. If compromise is credible, use a trusted environment to revoke sessions and app tokens and change credentials as appropriate. A password reset alone may not revoke every kind of token. [S54](https://www.csa.gov.sg/alerts-and-advisories/alerts/al-2024-147/) [S55](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/cookies)

Avoid installing a new cleanup tool from an unsolicited incident email. Reach the browser store, vendor and account provider independently. Recovery should reduce access relationships, not create another unknown one. [S54](https://www.csa.gov.sg/alerts-and-advisories/alerts/al-2024-147/) [S62](https://www.ic3.gov/psa/2024/psa241203)

## FAQ

**Does an extension need permission to read cookies?** Browser APIs impose permission requirements; exact behavior differs by browser and feature. [S55](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/cookies)

**Does MFA stop cookie replay?** It can be bypassed as a repeated login step when an already authenticated reusable session is stolen; other service controls may still block misuse. [S54](https://www.csa.gov.sg/alerts-and-advisories/alerts/al-2024-147/)

**Are all extensions unsafe?** No. Evaluate publisher, permissions, necessity and updates; the evidence concerns particular compromised tools. [S54](https://www.csa.gov.sg/alerts-and-advisories/alerts/al-2024-147/) [S55](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/cookies)

## Related reading

[Read the complete investigation](executive-investigation) · [Public safety checklist](public-safety-checklist)

- [Cloud Photo Security: Who Can Reach Your Private Files?](cloud-photo-account-takeover)
- [Crypto Wallet Drainers: Seeds, Signatures and Token Approvals](crypto-wallet-drainers)
- [Digital Security Warning Signs: What to Check Before You Panic](digital-security-warning-signs)


---

