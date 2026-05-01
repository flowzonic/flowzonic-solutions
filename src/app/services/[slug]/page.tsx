import { notFound } from "next/navigation";
import ServiceDetailClient from "@/components/ServiceDetailClient";
import { 
  Globe, Bot, Layers
} from "lucide-react";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const SERVICE_DATA: Record<string, any> = {
  web: {
    title: "Web Development",
    icon: <Globe className="text-primary" size={48} />,
    headline: "Websites that Outpace the Competition",
    subHeadline: "Stop losing leads to slow, outdated platforms. We build lightning-fast digital engines that convert visitors into loyal customers.",
    image: PlaceHolderImages[1].imageUrl,
    whyUs: [
      "Our engineering-first approach prioritizes core web vitals and speed above all else. In a world where milliseconds cost millions, we ensure your site is the fastest in its niche.",
      "We don't just 'build sites'; we architect digital ecosystems. Every line of code is optimized for SEO and scalability, ensuring your brand grows without technical friction.",
      "Security and reliability are non-negotiable. Using modern stacks like Next.js and Firebase, we provide enterprise-grade protection for your data and your users' privacy."
    ],
    process: [
      { title: "Discovery", desc: "We deep-dive into your business goals, user personas, and competitor landscape to define a technical roadmap." },
      { title: "Strategy", desc: "Architecting the sitemap, wireframes, and tech-stack choice to ensure the foundation is future-proof." },
      { title: "Execution", desc: "High-speed development phase where design meets code, utilizing modern frameworks for maximum performance." },
      { title: "QA & Testing", desc: "Rigorous stress tests across all devices and browsers to ensure a pixel-perfect, bug-free experience." },
      { title: "Launch & Support", desc: "Deploying your asset to the world and providing the ongoing maintenance needed to stay ahead." }
    ],
    tech: ["Next.js", "React", "Tailwind CSS", "TypeScript", "Firebase", "CloudOps"],
    roi: "Expect a significant reduction in bounce rates and a direct increase in user session duration. Our optimized performance leads to better SEO rankings, lower customer acquisition costs, and a premium brand perception that drives higher average order values.",
    faqs: [
      { q: "Will my website be mobile-responsive?", a: "Every site we build is mobile-first. It will look and function perfectly on smartphones, tablets, and desktops." },
      { q: "How long does a typical build take?", a: "Most enterprise-grade websites take between 4 to 8 weeks, depending on the complexity and integrations required." },
      { q: "Do you offer post-launch maintenance?", a: "Yes, we provide ongoing support packages to keep your site updated, secure, and performing at its peak." }
    ]
  },
  automation: {
    title: "Google Automation",
    icon: <Bot className="text-primary" size={48} />,
    headline: "Your Business on Autopilot",
    subHeadline: "Eliminate human error and manual bottlenecks with intelligent scripts that connect your favorite Google Workspace tools seamlessly.",
    image: PlaceHolderImages[3].imageUrl,
    whyUs: [
      "We specialize in the intersection of Google Apps Script and Generative AI. This allows us to build systems that don't just move data, but understand it.",
      "Our solutions are lightweight and reside directly within your Google Workspace. There's no expensive third-party software to subscribe to—you own the automation.",
      "We focus on 'Zero-Friction' workflows. If a task requires more than one click, we find a way to make it zero. Our goal is to make your backend operations invisible."
    ],
    process: [
      { title: "Audit", desc: "We map out your manual workflows and identify the highest-impact areas for immediate automation." },
      { title: "Architecture", desc: "Designing the data flow between Sheets, Docs, Gmail, and external APIs to ensure a seamless bridge." },
      { title: "Scripting", desc: "Development of custom Google Apps Script and AI integrations tailored specifically to your internal logic." },
      { title: "Testing", desc: "Edge-case testing and user acceptance phases to ensure the automation handles data with 100% accuracy." },
      { title: "Deployment", desc: "Integration into your active Workspace with comprehensive training for your team." }
    ],
    tech: ["Google Apps Script", "Gemini AI", "Sheets API", "Drive API", "Gmail API", "Firebase Functions"],
    roi: "Our clients save an average of 10-20 hours per week per department. By eliminating manual data entry, you remove the 3-5% error rate typical in human processes, leading to cleaner data and faster decision-making that directly impacts your bottom line.",
    faqs: [
      { q: "Is my data secure within the scripts?", a: "Yes. The scripts run within your own Google account or organization, meaning you retain full control over data access and permissions." },
      { q: "Can scripts connect to non-Google apps?", a: "Absolutely. We use APIs to connect your Google Workspace to tools like Slack, Shopify, Stripe, and more." },
      { q: "What if the automation breaks?", a: "Our code is built with robust error-logging. If a script fails, it automatically notifies us so we can resolve it instantly." }
    ]
  },
  design: {
    title: "Graphic Designing",
    icon: <Layers className="text-primary" size={48} />,
    headline: "Aesthetics That Drive Authority",
    subHeadline: "Generic design is invisible. We create premium visual identities that make your brand impossible to ignore and command higher trust.",
    image: PlaceHolderImages[2].imageUrl,
    whyUs: [
      "Our design philosophy is rooted in 'Glossy Minimalism'. We use negative space and premium textures to create a look that feels futuristic and expensive.",
      "We design for conversion, not just beauty. Every color choice, font weight, and layout structure is engineered to guide the user's eye toward your primary call to action.",
      "We provide a complete visual system. From your logo to your UI components, we ensure a consistent aesthetic that builds brand recognition across every touchpoint."
    ],
    process: [
      { title: "Branding Deep-Dive", desc: "We analyze your brand values and audience psychology to establish a visual tone of voice." },
      { title: "Conceptualization", desc: "Development of diverse design directions and moodboards to align on the futuristic vision." },
      { title: "Refinement", desc: "Iterative design phase where we polish the chosen concepts into high-fidelity assets." },
      { title: "Asset Production", desc: "Generating all final deliverables, from web-ready UI to high-resolution print and social assets." },
      { title: "Handoff", desc: "Delivery of a comprehensive brand style guide to ensure consistent application of your new look." }
    ],
    tech: ["Figma", "Adobe Creative Suite", "Framer", "Blender 3D", "After Effects"],
    roi: "Premium design allows you to command premium pricing. A professional, futuristic visual identity builds instant trust, reducing the 'skepticism barrier' for new customers and lowering your customer acquisition costs through better engagement.",
    faqs: [
      { q: "Do I get ownership of the source files?", a: "Yes. Once the project is complete, you receive all source files (Figma, AI, PSD) and full intellectual property rights." },
      { q: "How many revisions do we get?", a: "Our standard process includes 3 rounds of major revisions to ensure the final result is exactly what you envisioned." },
      { q: "Can you design for both web and print?", a: "Absolutely. We provide high-fidelity assets optimized for both digital displays and high-end physical printing." }
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
