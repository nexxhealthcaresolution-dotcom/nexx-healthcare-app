export type Service = {
  slug: string;
  title: string;
  shortDesc: string;
  overview: string;
  benefits: string[];
  process: string[];
};

export const services: Service[] = [
  {
    slug: "nabh-accreditation",
    title: "NABH Accreditation",
    shortDesc: "End-to-end guidance for National Accreditation Board for Hospitals standards.",
    overview:
      "NABH accreditation is one of the most recognised quality benchmarks for hospitals and healthcare facilities in India. Nexx Healthcare Solution guides your facility through every stage, from initial gap analysis to final assessment, ensuring your systems, documentation, and staff practices meet the required standards.",
    benefits: [
      "Improved patient safety and care standards",
      "Higher credibility with patients, insurers, and government bodies",
      "Eligibility for empanelments such as CGHS, ECHS, and PMJAY",
      "Structured, sustainable quality systems across departments",
    ],
    process: [
      "Initial gap analysis against NABH standards",
      "Documentation and SOP development",
      "Staff training and awareness sessions",
      "Mock audits and pre-assessment",
      "Final NABH assessment and certification support",
    ],
  },
  {
    slug: "nabl-accreditation",
    title: "NABL Accreditation",
    shortDesc: "Laboratory accreditation support for diagnostic and testing facilities.",
    overview:
      "NABL accreditation certifies that a diagnostic laboratory meets international quality and technical standards. Nexx Healthcare Solution helps labs prepare documentation, calibrate quality systems, and pass technical assessments with confidence.",
    benefits: [
      "Recognised technical competence for testing and calibration",
      "Increased trust from referring doctors and patients",
      "Eligibility for insurance and government empanelments",
      "Standardised, error-reducing lab processes",
    ],
    process: [
      "Gap analysis against ISO 15189 / NABL standards",
      "Quality manual and SOP development",
      "Internal audits and staff training",
      "Pre-assessment and corrective actions",
      "Final NABL assessment support",
    ],
  },
  {
    slug: "pmjay-empanelment",
    title: "PMJAY Empanelment",
    shortDesc: "Empanelment support under Ayushman Bharat PM-JAY scheme.",
    overview:
      "Empanelment under Ayushman Bharat PM-JAY allows hospitals to offer cashless treatment to eligible beneficiaries. Nexx Healthcare Solution manages the documentation, application, and approval follow-up so your facility can start serving PMJAY patients sooner.",
    benefits: [
      "Access to a large base of government-insured patients",
      "Additional revenue stream through scheme reimbursements",
      "Improved community reputation and reach",
      "Simplified compliance with scheme requirements",
    ],
    process: [
      "Eligibility review and documentation checklist",
      "Application preparation and submission",
      "Coordination with scheme authorities",
      "Empanelment approval follow-up",
      "Post-empanelment compliance support",
    ],
  },
  {
    slug: "cghs-echs-empanelment",
    title: "CGHS & ECHS Empanelment",
    shortDesc: "Documentation and approval process for government empanelments.",
    overview:
      "CGHS and ECHS empanelment enables hospitals to treat central government employees, pensioners, and ex-servicemen on a cashless basis. We handle the full documentation and coordination process to get your facility empanelled efficiently.",
    benefits: [
      "Access to government employee and veteran patient base",
      "Steady, reliable referral pipeline",
      "Enhanced institutional credibility",
      "Structured claims and reimbursement processes",
    ],
    process: [
      "Documentation and infrastructure review",
      "Application preparation as per CGHS/ECHS norms",
      "Submission and liaison with authorities",
      "Inspection support and query resolution",
      "Final empanelment and onboarding support",
    ],
  },
  {
    slug: "tpa-empanelment",
    title: "TPA Empanelment",
    shortDesc: "Third-party administrator empanelment for cashless insurance tie-ups.",
    overview:
      "TPA empanelment allows your hospital to offer cashless treatment to patients covered under various health insurance policies. We manage documentation, negotiations, and onboarding with major TPAs and insurers.",
    benefits: [
      "Wider patient access through cashless insurance tie-ups",
      "Faster claims processing and settlements",
      "Reduced administrative burden on hospital staff",
      "Stronger relationships with insurance networks",
    ],
    process: [
      "TPA and insurer shortlisting",
      "Documentation and tariff submission",
      "Application and negotiation support",
      "Empanelment approval",
      "Claims process training for staff",
    ],
  },
  {
    slug: "ayush-certification",
    title: "AYUSH Certification",
    shortDesc: "Accreditation support for AYUSH hospitals and wellness centres.",
    overview:
      "AYUSH certification validates the quality and safety of Ayurveda, Yoga, Unani, Siddha, and Homeopathy healthcare facilities. We help wellness centres and AYUSH hospitals build the documentation and systems needed for certification.",
    benefits: [
      "Formal recognition of AYUSH facility quality",
      "Increased patient trust in traditional medicine practices",
      "Eligibility for AYUSH-specific empanelments and schemes",
      "Improved operational and clinical documentation",
    ],
    process: [
      "Facility and practice gap analysis",
      "Documentation aligned with AYUSH standards",
      "Staff training on quality practices",
      "Pre-assessment review",
      "Final certification support",
    ],
  },
  {
    slug: "gipsa-gic-empanelment",
    title: "GIPSA & GIC Empanelment",
    shortDesc: "General insurance empanelment for hospitals and healthcare networks.",
    overview:
      "GIPSA (General Insurers' Public Sector Association) and GIC empanelment allows hospitals to offer cashless treatment to patients covered under public sector general insurance policies. Nexx Healthcare Solution manages documentation, tariff alignment, and the empanelment process with these insurers.",
    benefits: [
      "Access to patients covered under public sector insurance schemes",
      "Cashless treatment tie-ups that reduce billing friction",
      "Broader hospital network recognition",
      "Structured, transparent tariff and claims alignment",
    ],
    process: [
      "Eligibility review and documentation preparation",
      "Tariff submission aligned with GIPSA/GIC packages",
      "Application submission and liaison with insurers",
      "Inspection and query resolution support",
      "Final empanelment and claims process onboarding",
    ],
  },
];
