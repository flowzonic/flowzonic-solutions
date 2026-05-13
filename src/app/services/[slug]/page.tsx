import { notFound } from "next/navigation";
import ServiceDetailClient from "@/components/ServiceDetailClient";
import { Globe, Bot, Layers } from "lucide-react";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const SERVICE_DATA: Record<string, any> = {
  web: {
    id: "web",
    title: "Web Development",
    icon: <Globe className="text-primary" size={48} />,
    headline: "Websites that Outpace the Competition",
    subHeadline: "Stop losing leads to slow, outdated platforms. We build lightning-fast digital engines that convert visitors into loyal customers.",
    image: PlaceHolderImages.find(img => img.id === "mockup-1")?.imageUrl,
    whyUs: [
      "Our engineering-first approach prioritizes core web vitals and speed above all else.",
      "We architect digital ecosystems optimized for SEO and scalability.",
      "Security and reliability are non-negotiable using modern stacks like Next.js and Firebase."
    ],
    process: [
      { title: "Discovery", desc: "We deep-dive into your business goals to define a technical roadmap." },
      { title: "Strategy", desc: "Architecting sitemaps and tech-stack choices for future-proof foundations." },
      { title: "Execution", desc: "High-speed development phase where design meets precision code." },
      { title: "QA & Testing", desc: "Rigorous stress tests across all devices to ensure a bug-free experience." },
      { title: "Launch", desc: "Deploying your asset and providing ongoing support." }
    ],
    tech: ["Next.js", "React", "Tailwind CSS", "TypeScript", "Firebase"],
    roi: "Expect a significant reduction in bounce rates and a direct increase in user session duration through elite performance engineering.",
    faqs: [
      { q: "Will my website be mobile-responsive?", a: "Every site we build is mobile-first and functions perfectly on all screen sizes." },
      { q: "How long does a typical build take?", a: "Most enterprise-grade websites take between 4 to 8 weeks." }
    ]
  },
  automation: {
    id: "automation",
    title: "Google Automation",
    icon: <Bot className="text-primary" size={48} />,
    headline: "Your Business on Autopilot",
    subHeadline: "Eliminate human error and manual bottlenecks with intelligent scripts that connect your Google Workspace seamlessly.",
    image: PlaceHolderImages.find(img => img.id === "mockup-3")?.imageUrl,
    whyUs: [
      "We specialize in the intersection of Google Apps Script and Generative AI.",
      "Our solutions are lightweight and reside directly within your Google Workspace.",
      "We focus on 'Zero-Friction' workflows to make backend operations invisible."
    ],
    process: [
      { title: "Audit", desc: "Mapping manual workflows to identify high-impact automation areas." },
      { title: "Architecture", desc: "Designing data flow between Sheets, Docs, and external APIs." },
      { title: "Scripting", desc: "Development of custom Apps Script and AI integrations." },
      { title: "Testing", desc: "Edge-case testing to ensure 100% data accuracy." },
      { title: "Deployment", desc: "Integration into your Workspace with team training." }
    ],
    tech: ["Apps Script", "Gemini AI", "Sheets API", "Gmail API", "Firebase Functions"],
    roi: "Clients save an average of 10-20 hours per week per department by eliminating manual data entry tasks.",
    faqs: [
      { q: "Is my data secure within the scripts?", a: "Yes, scripts run within your own Google account, retaining full control over access." },
      { q: "Can scripts connect to non-Google apps?", a: "Absolutely, we use APIs to connect to Slack, Shopify, Stripe, and more." }
    ]
  },
  design: {
    id: "design",
    title: "Graphic Designing",
    icon: <Layers className="text-primary" size={48} />,
    headline: "Portfolio Graphic Design Services",
    subHeadline: "This portfolio showcases our graphic design and branding work, including logos, brochures, social media creatives, marketing banners, packaging, and brand identity designs. Our design approach focuses on clarity, attractiveness, and brand recall. We help businesses create strong visual impressions that communicate their message effectively.",
    image: PlaceHolderImages.find(img => img.id === "mockup-2")?.imageUrl,
    isPortfolioStyle: true,
    categories: [
      {
        id: "logo",
        name: "Logo",
        items: [
          { src: "https://picsum.photos/seed/logo1/400/300", alt: "Brand Identity 1" },
          { src: "https://picsum.photos/seed/logo2/400/300", alt: "Brand Identity 2" },
          { src: "https://picsum.photos/seed/logo3/400/300", alt: "Brand Identity 3" },
          { src: "https://picsum.photos/seed/logo4/400/300", alt: "Brand Identity 4" },
        ]
      },
      {
        id: "social",
        name: "Social Media Creative",
        items: [
          { src: "https://picsum.photos/seed/social1/400/300", alt: "Insta Post Design" },
          { src: "https://picsum.photos/seed/social2/400/300", alt: "Ads Creative" },
          { src: "https://picsum.photos/seed/social3/400/300", alt: "Carousel Design" },
          { src: "https://picsum.photos/seed/social4/400/300", alt: "Story Branding" },
        ]
      },
      {
        id: "packaging",
        name: "Packaging Design",
        items: [
          { src: "https://picsum.photos/seed/pkg1/400/300", alt: "Box Mockup" },
          { src: "https://picsum.photos/seed/pkg2/400/300", alt: "Label Design" },
        ]
      },
      {
        id: "print",
        name: "Print Design",
        items: [
          { src: "https://picsum.photos/seed/print1/400/300", alt: "Brochure Design" },
          { src: "https://picsum.photos/seed/print2/400/300", alt: "Business Card" },
        ]
      },
      {
        id: "banner",
        name: "Web Banner",
        items: [
          { src: "https://picsum.photos/seed/web1/400/300", alt: "Hero Banner" },
          { src: "https://picsum.photos/seed/web2/400/300", alt: "Display Ad" },
        ]
      }
    ],
    whyUs: [
      "Our philosophy is rooted in 'Glossy Minimalism' and premium textures.",
      "We design for conversion, engineering layouts to guide users to your CTA.",
      "We provide a complete visual system for brand consistency across all touchpoints."
    ],
    process: [
      { title: "Deep-Dive", desc: "Analyzing brand values and audience psychology for a visual tone." },
      { title: "Conceptualization", desc: "Development of diverse design directions and moodboards." },
      { title: "Refinement", desc: "Iterative design phase polishing chosen concepts into final assets." },
      { title: "Production", desc: "Generating final deliverables from UI to high-res print assets." },
      { title: "Handoff", desc: "Delivery of a comprehensive brand style guide." }
    ],
    tech: ["Figma", "Adobe Suite", "Blender 3D", "After Effects"],
    roi: "Premium design allows you to command premium pricing and builds instant trust with high-value prospects.",
    faqs: [
      { q: "Do I get ownership of the source files?", a: "Yes, you receive all Figma, AI, and PSD source files upon completion." },
      { q: "How many revisions do we get?", a: "Our process includes 3 rounds of major revisions to ensure perfect alignment." }
    ]
  }
};

export async function generateStaticParams() {
  return [
    { slug: 'web' },
    { slug: 'automation' },
    { slug: 'design' },
  ];
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = SERVICE_DATA[slug];

  if (!service) return notFound();

  return <ServiceDetailClient service={service} />;
}
