import { ProjectItem } from "@/components/projects/project-item";
import { projects } from "@/lib/site-data";

export function ProjectsSection() {
  return (
    <section id="projects" className="space-y-5">
      <div>
        <p className="text-sm font-medium uppercase tracking-[0.18em] text-muted-foreground">
          Projects
        </p>
        <h2 className="mt-2 text-2xl font-semibold">Things I&apos;ve Built</h2>
      </div>
      <div className="space-y-7">
        {projects.map((project) => (
          <ProjectItem key={project.title} {...project} />
        ))}
      </div>
    </section>
  );
}
