---
title: "Crypto Wallet Drainers: Seed Phrases, Approvals and Address Poisoning"
slug: "crypto-wallet-drainers"
meta_description: "Blockchains are cryptographically secure; wallets are not. How drainer kits, malicious approvals, address poisoning and fake apps steal funds — and the verification habits that stop them."
target_keyword: "crypto wallet drainer"
secondary_keywords: ["wallet drainer scam", "address poisoning", "token approval scam", "seed phrase theft"]
category: "Finance"
reading_time: "7 minutes"
last_updated: "2026-10-26"
internal_links: ["sim-swap-account-takeover", "cloud-photo-account-takeover", "password-protected-wifi-not-secure"]
---

# Crypto Wallet Drainers: Seed Phrases, Approvals and Address Poisoning

The cryptography securing major blockchains has not been broken. Forging a signature is not a realistic attack. Yet billions of dollars are stolen every year.

The reason is simple: attackers do not attack the chain. They attack the wallet, the browser, the exchange, the bridge, and the person approving transactions.

## The scale

TRM Labs recorded approximately **$2.87 billion** stolen across nearly 150 incidents in 2025, with the Bybit breach alone accounting for about $1.46 billion — roughly 51 percent of the total. Chainalysis separately attributed about **$2 billion** to DPRK-linked actors in 2025, describing it as their most destructive year. [Confirmed — both firms' 2026 reports]

Those figures are dominated by a handful of enormous platform compromises. The long tail is individual users, drained one approval at a time.

## How drainers work

A **wallet drainer** is a kit sold to criminals. It provides a convincing interface and a set of contracts designed to extract value.

The typical sequence:

1. The victim is lured to a site — a fake airdrop, a mint, a "security check", a job offer.
2. They connect a wallet.
3. They sign a message or transaction that looks routine.
4. The signature grants an allowance or transfers assets.
5. The attacker drains later, often after the victim has closed the tab.

**The signature is the attack.** No malware is required. The user authorised it.

## The main techniques

**Malicious approvals.** Many token standards let a contract spend your tokens if you grant an allowance. An unlimited approval can be used at any time.

**Permit signatures.** Some tokens allow approval by signature alone, with no on-chain transaction and no gas — which makes the phishing step faster and less visible.

**Address poisoning.** The attacker sends a zero-value transaction from an address that matches the first and last characters of an address you have used. It appears in your history. Later, you copy the "familiar" address and send funds to the attacker.

**Clipboard hijacking.** Malware replaces a copied address with the attacker's. The victim pastes without checking the middle characters.

**Fake wallets and extensions.** Search ads, cloned store listings, and trojanised installers distribute wallets that leak seeds or generate keys the attacker knows.

**Seed-phrase phishing.** Fake support, fake wallet validation, fake migration. No legitimate service ever needs your seed phrase.

## Platform-level failures

Individual drainers are the small end. The large losses come from:

- **Exchange compromise** — hot-wallet keys, signing infrastructure, or insider access.
- **Bridge exploits** — validation logic holding assets on one chain and issuing representations on another.
- **Smart-contract bugs** — reentrancy, oracle manipulation, access control.

Documented examples: Ronin Bridge (March 2022, ~$624 million), Wormhole (February 2022, ~$326 million), Nomad (August 2022, ~$190 million), Poly Network (August 2021, ~$611 million, later returned), Bybit (February 2025, ~$1.46 billion). [Confirmed]

## Why crypto is different

1. **Irreversibility.** There is no chargeback.
2. **Composability.** One approval can expose an entire wallet; one bridge can expose a chain.
3. **Transparency.** Attackers can watch addresses and time further attacks.

These are properties of the technology, not bugs. They raise the stakes of every human decision — which is why the defences are procedural, not cryptographic.

## The twelve habits that matter

1. **Hardware wallet** for long-term holdings.
2. **Seed phrase offline**, on paper or metal, never photographed or typed into a computer except on the device during setup.
3. **Verify the full address on the hardware screen**, not on the computer.
4. **Separate wallets** — a "hot" wallet with limited funds for new protocols.
5. **Revoke approvals** regularly.
6. **Hardware-key 2FA** on exchange and email accounts; never SMS alone.
7. **Withdrawal allowlists** on exchanges.
8. **No unsolicited support.** No legitimate person DMs you first.
9. **Test transactions** before large transfers.
10. **Slow down.** Urgency is the attack.
11. **Do not announce holdings.** Physical coercion is a documented risk.
12. **An inheritance plan** that does not concentrate the seed in one place.

## What does not help

- "Checking" a wallet on a site that asks for the seed.
- Installing a "drainer checker" extension from an ad.
- Sending funds to "unlock" a withdrawal.
- Trusting a support agent who contacted you.
- Assuming a small test transaction proves an address is safe — poisoning attacks are designed for exactly that.

## FAQ

**Can a wallet be hacked without my approval?**
Only through a vulnerability in the wallet software or the device. Most losses involve a signature the user gave.

**Is a hardware wallet necessary?**
For meaningful holdings, yes. It keeps the key off the internet and lets you verify addresses on a trusted screen.

**What is address poisoning?**
A zero-value transfer from a look-alike address so that the fake address appears in your history and gets copied later.

**Are stablecoins safer?**
The token is not the risk. The approval, the platform, and the counterparty are.

---

**Related:** [SIM swap and account takeover](sim-swap-account-takeover) · [Cloud photo account takeover](cloud-photo-account-takeover) · [Why Wi-Fi passwords do not equal safety](password-protected-wifi-not-secure)

**Part of the ARTIore Global Digital Exposure Investigation.**
