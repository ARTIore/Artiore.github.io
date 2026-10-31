// Visible questions and answers from the published articles, for FAQPage schema.
export const investigationFaqs: Record<string, { question: string; answer: string }[]> = {
  "password-protected-wifi-not-secure": [
    { question: "Is WPA3 safer than WPA2?", answer: "Yes, materially: WPA3 fixes the offline-guessing weakness of WPA2-Personal and adds forward secrecy. It still does not tell you who operates the network." },
    { question: "Can someone on the same Wi-Fi see my passwords?", answer: "Not if the site uses HTTPS and the certificate is valid. They can see which sites you visit, and they can trick you with a fake login page." },
    { question: "Does a VPN make public Wi-Fi safe?", answer: "It protects traffic from the local network to the VPN server. It does not protect you from phishing, malicious downloads, or a compromised device." },
    { question: "Why do hotels still use passwords?", answer: "Because they are simple and familiar. The password's purpose is to limit access and satisfy guests, not to provide a threat model." },
  ],
  "hotel-wifi-security-guide": [
    { question: "Is hotel Wi-Fi safe for online banking?", answer: "Treat it as untrusted. Use cellular data or a VPN you control, and verify the site's domain before entering credentials." },
    { question: "Can the hotel see my traffic?", answer: "They can see metadata — which sites you connect to — and content only if it is unencrypted or if you installed a certificate that allows interception." },
    { question: "Should I use the hotel's \"secure\" network with a password?", answer: "A password limits access; it does not establish trust. The precautions above still apply." },
    { question: "Are booking messages from hotels always genuine?", answer: "No. Reservation-data scams use real details. Verify through the official app, never through the link in the message." },
  ],
  "dns-hijacking-explained": [
    { question: "Can DNS hijacking steal my password?", answer: "Not directly. It can send you to a fake login page, which can. With valid HTTPS and a careful check of the domain, the risk drops sharply." },
    { question: "Does HTTPS stop DNS attacks?", answer: "It stops content interception. It does not stop redirection to a look-alike domain." },
    { question: "Is encrypted DNS always better?", answer: "For privacy from the local network, usually. It shifts visibility to the resolver, and can break network-level filtering." },
    { question: "How would I know if my router's DNS was changed?", answer: "Check the router's DNS fields against what you set. Unexpected IP addresses are the signal." },
  ],
  "bluetooth-ble-tracking": [
    { question: "Can someone read my messages through Bluetooth?", answer: "Not through the radio alone. A compromised device or a malicious paired peripheral is a different problem." },
    { question: "Does turning off Bluetooth stop tracking?", answer: "It stops Bluetooth tracking. Wi-Fi and cellular still reveal a great deal." },
    { question: "Are AirTags the only tracking risk?", answer: "No. Any BLE tag or find-my-compatible device can be misused, and venue analytics track groups without tags." },
    { question: "Is a strange device in my Bluetooth list evidence of surveillance?", answer: "Usually not. Public spaces contain many devices. Evidence requires correlation, not a single entry." },
  ],
  "android-accessibility-service-malware": [
    { question: "Can accessibility malware steal my bank password?", answer: "Yes — by reading the screen and capturing what you type, and by intercepting the one-time code." },
    { question: "Does factory reset remove it?", answer: "Usually, if you do not restore the malicious app. A backup that includes it will bring it back." },
    { question: "Is a screen reader dangerous?", answer: "No. A screen reader is legitimate assistive software. The risk is an app that claims to be one and is not." },
    { question: "Can I use banking apps safely on Android?", answer: "Yes, with current patches, official apps, no sideloading, and an accessibility audit." },
  ],
  "iphone-zero-click-spyware": [
    { question: "Can an iPhone be hacked without clicking anything?", answer: "Yes, with a zero-click exploit chain. It is rare, expensive, and targeted." },
    { question: "Does Lockdown Mode make an iPhone unhackable?", answer: "No. It substantially reduces attack surface. Nothing makes a device unhackable." },
    { question: "How would I know if I were infected?", answer: "Often you would not. Threat Notifications and forensic examination are the reliable routes." },
    { question: "Is Android safer?", answer: "Neither platform is immune. Both have been compromised by commercial spyware. Patch behaviour matters more than brand." },
  ],
  "whatsapp-encryption-limits": [
    { question: "Can WhatsApp read my messages?", answer: "Not the content of end-to-end encrypted messages. It processes metadata and, if you use unencrypted backups, may hold backup data under provider terms." },
    { question: "Are WhatsApp backups encrypted?", answer: "Only if you enable end-to-end encrypted backup. Otherwise the cloud provider holds the keys." },
    { question: "Can someone read my WhatsApp without my phone?", answer: "Through a linked device, a stolen session, or a backup — not by breaking the encryption." },
    { question: "Does deleting a message remove it everywhere?", answer: "No. It removes it from your devices and, for \"delete for everyone\", from recipients' apps — but not from screenshots, backups already made, or a compromised endpoint." },
  ],
  "pegasus-predator-commercial-spyware": [
    { question: "Can Pegasus be detected?", answer: "Sometimes, through forensic examination of logs and artefacts. Modern implants are designed to leave little trace." },
    { question: "Does Lockdown Mode stop Pegasus?", answer: "It substantially reduces attack surface and has blocked documented chains. It is not a guarantee." },
    { question: "Is spyware only used against journalists?", answer: "No. Documented targets also include politicians, officials, executives, lawyers, and family members of targets. But deployment is selective." },
    { question: "Can I remove it myself?", answer: "No. A confirmed infection requires expert handling; resetting may destroy evidence without guaranteeing removal." },
  ],
  "cloud-photo-account-takeover": [
    { question: "Can Apple or Google see my photos?", answer: "Under standard settings, they hold the keys for much of the data and can access it under their policies and legal process. End-to-end encrypted modes change that." },
    { question: "Does two-factor authentication stop account takeover?", answer: "It stops most password-based attacks. It does not stop session theft or phishing that captures the code." },
    { question: "How do I know if someone accessed my account?", answer: "Check active sessions, recent security events, and linked apps. Providers vary in how much they show." },
    { question: "Is it safer to keep photos only on my phone?", answer: "Not necessarily. Phones are lost, stolen, and damaged. The safer pattern is encrypted backup plus strong account security." },
  ],
  "crypto-wallet-drainers": [
    { question: "Can a wallet be hacked without my approval?", answer: "Only through a vulnerability in the wallet software or the device. Most losses involve a signature the user gave." },
    { question: "Is a hardware wallet necessary?", answer: "For meaningful holdings, yes. It keeps the key off the internet and lets you verify addresses on a trusted screen." },
    { question: "What is address poisoning?", answer: "A zero-value transfer from a look-alike address so that the fake address appears in your history and gets copied later." },
    { question: "Are stablecoins safer?", answer: "The token is not the risk. The approval, the platform, and the counterparty are." },
  ],
  "sim-swap-account-takeover": [
    { question: "Can I prevent a SIM swap completely?", answer: "No. You can raise the cost with a port-out PIN, carrier locks, and strong authentication that does not depend on SMS." },
    { question: "Does eSIM help?", answer: "It removes physical SIM theft but not carrier social engineering. The number is still the target." },
    { question: "What is the safest second factor?", answer: "A passkey or a hardware security key. Both are phishing-resistant." },
    { question: "Why did my bank still use SMS?", answer: "Because it is universal and cheap. Regulators are pushing providers toward stronger methods, slowly." },
  ],
  "hotel-keycard-lock-security": [
    { question: "Can someone open my hotel room with a phone?", answer: "Only with a provisioned key or an exploit against the lock or app. The Unsaflok technique required a forged card, not a phone." },
    { question: "Are all hotel locks vulnerable?", answer: "No. The disclosed flaws affected specific Dormakaba Saflok systems. Other vendors have had their own issues." },
    { question: "Should I worry about my room being broken into digitally?", answer: "The realistic risk is low for most travellers. The deadbolt and basic habits address the common cases." },
    { question: "Is a mobile key less safe than a card?", answer: "It depends on the implementation. Both depend on revocation and account security." },
  ],
}
