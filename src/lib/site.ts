export const siteConfig = {
  name: "Nextvia",
  legalName: "Nextvia L.L.C.",
  tagline: "The next path through your network.",
  description:
    "Nextvia sits between systems, technology, and people — designing, deploying, and operating the networks and software companies depend on.",
  domain: "nextvia.io",
  url: "https://nextvia.io",
  githubRepo: "https://github.com/arjaos/nextvia",
  email: "hello@nextvia.io",
  city: "Pristina",
  country: "Kosovo",
  address: "Hajrullah Abdullahu 36, Pristina, Kosovo",
  foundedYear: 2026,
  nui: "812421395",
  managingDirector: "Arjanit Osmanaj",
} as const;

export const navItems = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;

export const connections = [
  { front: "Provider", back: "Client" },
  { front: "Hardware", back: "Software" },
  { front: "Security", back: "Connectivity" },
] as const;

export const services = [
  {
    slug: "enterprise-networks",
    title: "Enterprise networks",
    summary:
      "Campus, data-center, and multi-site networks designed for scale, redundancy, and clean operations.",
    points: [
      "Campus and branch routing with OSPF, BGP, and MPLS",
      "Switching, wireless, and high-availability topologies",
      "Vendor-fluent delivery on Cisco, MikroTik, Nokia, Ubiquiti, and HPE",
      "Documentation, handover, and runbooks your team can actually use",
    ],
  },
  {
    slug: "telecom-isp",
    title: "Telecom and ISP engineering",
    summary:
      "Backbone, access, and campus-mobile work for operators and institutions that carry real traffic.",
    points: [
      "ISP backbone design, peering, and hybrid access networks",
      "Campus 5G and private wireless deployments",
      "IP addressing, RIPE resources, and addressing hygiene",
      "Capacity planning that matches how the network actually grows",
    ],
  },
  {
    slug: "infrastructure-ops",
    title: "Infrastructure operations",
    summary:
      "The layer between a working network and a network you can sleep on.",
    points: [
      "Monitoring, alerting, and change discipline",
      "Virtualization and hybrid environments (VMware and adjacent stacks)",
      "Facilities, cabling, and equipment lifecycle",
      "Security posture for the edge, the core, and the people who operate them",
    ],
  },
  {
    slug: "software-platforms",
    title: "Software and platforms",
    summary:
      "Custom software, portals, and hosting when the network is not the whole problem.",
    points: [
      "Web platforms and internal tools tied to operations",
      "Hosting, data processing, and always-on service design",
      "Integrations that replace spreadsheet-and-email workflows",
      "Delivery you can maintain after the project ends",
    ],
  },
] as const;
