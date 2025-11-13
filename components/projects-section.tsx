import Link from "next/link";
import { Link as LinkIcon } from "lucide-react";

interface ProjectItemProps {
  title: string;
  url: string;
  techStack: string;
  description: string;
  highlights: string[];
}

function ProjectItem({
  title,
  url,
  techStack,
  description,
  highlights,
}: ProjectItemProps) {
  return (
    <div className="space-y-2">
      <Link
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="group"
      >
        <div className="flex gap-2 items-center hover:underline hover:text-primary transition-colors mb-2">
          <h3 className="text-foreground font-semibold text-base group-hover:text-primary transition-colors">
            {title}
          </h3>
          <LinkIcon className="h-4 w-4" />
        </div>
      </Link>
      <p className="text-sm italic">{techStack}</p>
      <p className="text-sm leading-relaxed">{description}</p>
      <ul className="text-sm space-y-1 mt-2">
        {highlights.map((highlight, index) => (
          <li key={index} className="flex gap-2">
            <span className="text-primary">•</span>
            <span>{highlight}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function ProjectsSection() {
  const projects: ProjectItemProps[] = [
    {
      title: "Connecty",
      url: "https://connect-black.vercel.app/",
      techStack: "Next.js 15, TypeScript, TailwindCSS, Vercel",
      description:
        "A real-time social vibe-sharing app for group settings. Set your mood status (social, solo, busy) so others know your availability without awkward guessing.",
      highlights: [
        "Built with Next.js 15 App Router and server actions",
        "Fully responsive design optimized for mobile-first experience",
        "Deployed on Vercel with continuous integration",
      ],
    },
  ];

  return (
    <div className="relative pl-8 md:pl-8 pb-16">
      <div className="absolute left-4 md:left-0 w-3 h-3 -translate-x-1/2 rounded-full bg-primary top-2" />
      <h2 className="text-xl font-semibold mb-4">Featured Project</h2>
      <div className="space-y-6 text-muted-foreground">
        {projects.map((project, index) => (
          <ProjectItem key={index} {...project} />
        ))}
      </div>
    </div>
  );
}

