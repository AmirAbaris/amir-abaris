import { ProjectItem } from "@/components/projects/project-item";
import { projects } from "@/lib/site-data";

export function ProjectsSection() {
  return (
    <section id="projects" className="space-y-5">
      <div>
        <p className="font-mono text-[0.6875rem] uppercase tracking-[0.18em] text-muted-foreground">
          Projects
        </p>
        <h2 className="mt-2 font-display text-[1.75rem] font-semibold tracking-[-0.02em]">Things I&apos;ve Built</h2>
      </div>
      <div className="space-y-10">
        {projects.map((project) => (
          <ProjectItem key={project.title} {...project} />
        ))}
      </div>
    </section>
  );
}
