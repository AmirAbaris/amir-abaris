import { ProjectItem } from "@/components/projects/project-item";
import { projects } from "@/lib/site-data";

export function ProjectsSection() {
  return (
    <section id="projects" className="scroll-mt-20 space-y-5">
      <h2 className="font-display text-[1.75rem] font-semibold tracking-[-0.02em] text-pretty">
        Independent Projects
      </h2>
      <div className="space-y-10">
        {projects.map((project) => (
          <ProjectItem key={project.title} {...project} />
        ))}
      </div>
    </section>
  );
}
