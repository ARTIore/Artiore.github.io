/** Section 11. Consumer checks. FTC is not the “what to do” guide. */

export const cafcReportHref = 'https://antifraudcentre-centreantifraude.ca/report-signalez-eng.htm'

export const deviceChecks = [
  {
    title: 'Off-brand streaming boxes, tablets, and projectors',
    body: 'The FBI’s 5 June 2025 BADBOX advisory and HUMAN Security’s research both point at off-brand devices that are not certified under Google Play Protect. Checking that certification before and after a purchase is the source-backed step. The longer Play Protect and permission checks already live on this site, so they are not repeated here.',
    links: [
      { href: '/academy/navigator/', label: 'Digital safety navigator' },
      { href: '/investigations/digital-exposure/public-safety-checklist/', label: 'Public safety checklist' },
      { href: '/academy/', label: 'Digital safety lab' },
    ],
  },
  {
    title: 'Garage door openers, locks, and similar hardware you already own',
    body: 'Check the manufacturer’s own support page for which third-party platforms are still officially supported, and whether that list has shrunk since you bought the device. A shrinking list is the documented MyQ pattern in section 9, not a one-off.',
    links: [],
  },
  {
    title: 'A medical device on a home or hospital network',
    body: 'For the Contec CMS8000 case, CISA and the FDA said to use the device’s local, offline monitoring function where one exists, or to disconnect it, if the firmware’s origin or update history is in doubt. That advice is for that monitor and its relabeled twin, not a general medical rule.',
    links: [],
  },
  {
    title: 'A smart TV',
    body: 'The Vizio settlement and the Texas filings both concern a setting usually called automatic content recognition, or a similar privacy control, found during setup or in a data-collection menu. It can generally be turned off. The menu path differs by brand, and this page did not verify a path for every named manufacturer. If money or identity was misused, people in Canada report that to the Canadian Anti-Fraud Centre and to local police. This page does not send you to a US fraud-reporting site for that step.',
    links: [{ href: cafcReportHref, label: 'Canadian Anti-Fraud Centre', external: true }],
  },
  {
    title: 'What a person cannot check',
    body: 'Nothing in the sources opened for this page describes a way for an owner to detect a hidden hardware component, or a kernel-level firmware backdoor, without professional forensic tools. Setting reviews do not substitute for that. In those cases the fix has to come from a regulator, a researcher, or the manufacturer.',
    links: [],
  },
] as const
