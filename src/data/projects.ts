export interface ProjectSection {
  heading?: string;
  content: string[];
  image?: string;
}

export interface ProjectData {
  slug: string;
  title: string;
  subtitle: string;
  heroImage: string;
  externalLink: string;
  intro: string;
  metadata: {
    role: string;
    status: string;
    timeline: string;
    type: string;
    tools: string;
  };
  overview: {
    problems: string;
    solution: string;
    results: string;
  };
  process: ProjectSection[];
}

const defaultPlaceholderContent = {
  intro: "This is a placeholder intro for the case study. The project involved designing a seamless experience from start to finish, keeping user needs at the forefront while balancing business goals.",
  metadata: {
    role: "Product Designer (solo)",
    status: "Shipped",
    timeline: "2025",
    type: "Web Application",
    tools: "Figma, React, Next.js",
  },
  overview: {
    problems: "Users were experiencing friction when trying to accomplish core tasks, leading to high drop-off rates and confusion.",
    solution: "We redesigned the core flow to be more intuitive, removing unnecessary steps and providing clear guidance.",
    results: "The new design reduced task completion time by 40% and significantly increased user satisfaction and conversion.",
  },
  process: [
    {
      heading: "Setting the scene",
      content: [
        "Before redesigning anything, we needed to understand the core issues users were facing. We conducted user interviews and analyzed existing usage data.",
        "The findings were clear: the interface was too cluttered and the main call to actions were getting lost."
      ]
    },
    {
      heading: "Design Challenge",
      content: [
        "The main challenge was simplifying the interface without removing any of the power-user features. We needed a progressive disclosure approach.",
        "How might we make the main task extremely fast without making it feel limited for advanced users?"
      ]
    },
    {
      heading: "Results & Learnings",
      content: [
        "The biggest improvement wasn't just reducing taps or redesigning screens. It was changing the model behind the experience.",
        "When the product logic matched how users actually thought about the task, many UX problems solved themselves."
      ]
    }
  ]
};

export const caseStudies: Record<string, ProjectData> = {
  "immortals": {
    slug: "immortals",
    title: "Immortals",
    subtitle: "Website",
    heroImage: "/assets/Portfolio/Image/Immortal Cyber Team.png",
    externalLink: "https://www.immortals.co/",
    ...defaultPlaceholderContent,
    metadata: { ...defaultPlaceholderContent.metadata, role: "Lead designer" }
  },
  "threat-intelligence": {
    slug: "threat-intelligence",
    title: "Threat Intelligence",
    subtitle: "Security Platform",
    heroImage: "/assets/Portfolio/Image/ThreatIntelligence.png",
    externalLink: "https://www.threatintelligence.com/",
    ...defaultPlaceholderContent,
    metadata: { ...defaultPlaceholderContent.metadata, type: "Security Platform", role: "Web designer and Growth designer" }
  },
  "eternal-cyber": {
    slug: "eternal-cyber",
    title: "Eternal Cyber",
    subtitle: "Website",
    heroImage: "/assets/Portfolio/Image/EternalCyber.png",
    externalLink: "https://www.eternalcyber.com.au/",
    ...defaultPlaceholderContent
  },
  "zoemed-ai": {
    slug: "zoemed-ai",
    title: "ZoeMed AI",
    subtitle: "AI Web App",
    heroImage: "/assets/Portfolio/Image/ZoeMD.png",
    externalLink: "https://zoemed-ai.vercel.app/",
    intro: "ZoeMD is a physician-built, evidence-based clinical decision support tool scanning over 39 million peer-reviewed sources to deliver answers to healthcare professionals in seconds. Despite an exceptionally high product market fit and a 98% physician satisfaction rate, the legacy marketing site was failing to capture market demand.",
    metadata: {
      role: "Web designer and Growth designer",
      status: "Shipped",
      timeline: "12 Weeks",
      type: "AI Medical Engine",
      tools: "Figma, Segment, HubSpot",
    },
    overview: {
      problems: "The core product was robust, but public-facing touchpoints suffered from severe friction: Low conversion for Free/Pro tiers, leakage in Enterprise lead gen, and a disconnected ecosystem with no CRM hooks.",
      solution: "We deployed a dual-funnel strategy focusing on a clear, clinical-authority brand evolution, a zero-friction 'simulated query' acquisition funnel, and an enterprise smart-form directly integrated into HubSpot.",
      results: "+42% increase in self-serve account creations, +185% surge in Enterprise pipeline generation, and 94% CRM data accuracy through automated behavioral event tracking.",
    },
    process: [
      {
        heading: "The Legacy Design (Before)",
        content: [
          "Before the redesign, the original ZoeMed interface suffered from severe friction, causing low conversion and failing to capture market demand. Below is a look at the previous version."
        ],
        image: "/assets/Portfolio/Image/Old%20website%20design/ZoeMD.png"
      },
      {
        heading: "The Strategy & Insight Phase",
        content: [
          "Physicians are the most time-poor, cynical users in tech. They have zero patience for generic AI marketing copy like 'Revolutionize your workflow.' Through user testing, we discovered that users didn't understand how ZoeMD got its answers or if they could trust them.",
          "The redesign had to shift the narrative from 'We are an AI tool' to 'We are a highly secure, peer-reviewed clinical citation engine.'",
          "To solve the dual challenge of user acquisition and enterprise lead gen, we mapped the redesign to three distinct growth playbooks: Value Optimization, Intent Optimization, and Data Optimization."
        ]
      },
      {
        heading: "Rebranding for Clinical Authority (After)",
        content: [
          "We shifted the visual aesthetic from a generic SaaS vibe to a premium, high-trust healthcare platform.",
          "Typography & Color: Deployed clean, high-legibility geometric type paired with deep clinical blues and high-contrast accents to imply precision and safety.",
          "Showing, Not Telling: Instead of abstract illustrations, we designed a high-fidelity rendering of the actual interface directly on the hero section."
        ],
        image: "/assets/Portfolio/Image/ZoeMD.png"
      },
      {
        heading: "Frictionless Acquisition Funnel",
        content: [
          "The legacy page hid the product interface behind text blocks. We brought the product forward with a 'Zero-Friction' Prompt Box in the hero zone. This instantly contextualized the platform’s utility before a user ever hit a sign-up wall.",
          "We also dedicated an entire visual section to the Citation Engine and Smart Differential Diagnosis interfaces, physically demonstrating that every insight is backed by PubMed and Cochrane databases."
        ]
      },
      {
        heading: "Growth Design & Lead Generation",
        content: [
          "To maximize conversions, the pricing and enterprise acquisition paths were entirely rebuilt.",
          "We redesigned the pricing matrix to handle two distinct buyers simultaneously: the individual clinician looking for immediate access (Self-Serve), and the hospital procurement officer looking for institutional deployment (Enterprise).",
          "Self-serve used direct OAuth and a PLG friction trap (account required after 3 anonymous searches). Enterprise used a high-intent, multi-step smart inquiry form tied to corporate domain verification."
        ]
      },
      {
        heading: "The CRM & Operations Backbone",
        content: [
          "A beautiful redesign means nothing if the marketing team cannot track user behavior. We engineered a data bridge between the marketing site, the product application, and the CRM.",
          "We mapped user actions directly to CRM lead scoring properties (e.g., triggering a 3-part email nurture sequence upon cart abandonment).",
          "For the B2B enterprise side, we discarded basic forms in favor of progressive profiling. The form asks for Specialty and Organization Size dynamically. Large leads are immediately routed to an account executive."
        ]
      },
      {
        heading: "Key Takeaways & Reflection",
        content: [
          "Product-Led Growth Wins: Bringing components of the core product experience to the surface of the marketing site was the single highest driver of self-serve conversions.",
          "Trust Over Hype: In healthcare, accuracy beats novelty. Emphasizing data compliance and direct source citation over 'AI speed' altered the caliber of leads entering the pipeline."
        ]
      }
    ]
  },
  "dorascribe": {
    slug: "dorascribe",
    title: "DoraScribe",
    subtitle: "AI Platform",
    heroImage: "/assets/Portfolio/Image/DoraScribe.png",
    externalLink: "https://dorascribe.ai/",
    ...defaultPlaceholderContent,
    metadata: { ...defaultPlaceholderContent.metadata, type: "AI Platform", role: "Web designer and Growth designer" },
    process: [
      {
        heading: "The Legacy Design (Before)",
        content: [
          "Before the redesign, DoraScribe's interface lacked the premium feel required to capture market trust. Below is a look at the previous version before our intervention."
        ],
        image: "/assets/Portfolio/Image/Old%20website%20design/DoraScribe%20Old%20design.png"
      },
      ...defaultPlaceholderContent.process,
      {
        heading: "The New Design (After)",
        content: [
          "We shifted the visual aesthetic to a premium, high-trust AI platform with a focus on simplicity and clarity."
        ],
        image: "/assets/Portfolio/Image/DoraScribe.png"
      }
    ]
  }
};

export const getProjectBySlug = (slug: string) => {
  return caseStudies[slug] || null;
};

export const getAllProjects = () => {
  return Object.values(caseStudies);
};
