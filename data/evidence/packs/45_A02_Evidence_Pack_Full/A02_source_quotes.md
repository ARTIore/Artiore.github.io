# A02 Source Quotes and Notes

**Article:** Hotel Wi-Fi: What It Can and Cannot See
**Status:** YELLOW; not publication-cleared.

## C062 — Cloudflare SNI / DNS

SNI/DNS observability is documented. Vendor/industry sources (hide.me, hellorecon.com, Performance Networks) document timestamps, volumes and URL logging where the provider logs/intercepts; primary technical documentation is pending. Timing/volume and URL logging are **provisional**, not confirmed. URL visibility is protocol/provider-dependent; HTTPS paths are encrypted without interception.

Source: https://www.cloudflare.com/learning/ssl/what-is-sni/

URL logging: Performance Networks via Ars Technica, 2016: https://arstechnica.com/information-technology/2016/08/public-wi-fi-forget-the-scare-stories-read-this/

## C006 / C061 — Action Fraud Booking.com alert

The alert reports 532 Booking.com account-takeover reports (June 2023–September 2024), with hotel partner accounts used to send in-app, email and WhatsApp payment/phishing messages to guests.

Source: https://northwestfraudforum.wildapricot.org/fraud-news/13449947

## C058 — MGM

CISA documents help-desk social engineering; National Law Review reports a $45M settlement. The ~$100M impact figure is attributed to MGM’s 8-K and was not in the fetched CISA/NLR sources.

Sources: https://www.cisa.gov/news-events/cybersecurity-advisories/aa23-320a ; https://natlawreview.com/article/mgm-inks-45m-class-action-settlement-2019-and-2023-data-breaches

## C186 / C129 — Starwood/Marriott counts

The corpus carries 383M (later disclosed), 339M (FTC 2024) and up to 500M (early estimate). They differ by date and scope; do not average.

## C174 — CaptiveCrunch

Microsoft attributed the CaptiveCrunch hotel-Wi-Fi campaign, which served a fake browser update delivering the CornFlake RAT, to Storm-2945.

## C176 — BWH Hotels

BWH identified an intrusion affecting a guest-reservation web application; no payment or bank details were involved.

## C005 — Unsaflok

The source requires a **pair** of forged keycards, not a single card. No known real-world exploitation at disclosure.

Source: https://unsaflok.com/

## C147 / C148 — WPA2

WPA2-Personal uses a shared passphrase and derives per-session keys; 802.11w management-frame protection is optional, not default. WPA3-SAE/MFP requires both ends.

## C060 — rejected

The “42 charges in January 2025” wording is rejected. Corrected facts: 42-year-old man, nine counts, 2025 plea/sentencing. The article does not use the rejected wording.

## C130 / OM-13

R36 cites S95, S107 and S120–S134 while its source list ends at S90. Suppression applies; none of those references is used in A02.
