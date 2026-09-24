import { AnimatedProject } from "@/components/animated-project";
import { projects } from "@/lib/site-data";

async function getEndpointStars() {
  try {
    const response = await fetch("https://api.github.com/repos/Bytepute/endpointForge", {
      headers: { Accept: "application/vnd.github+json" },
      signal: AbortSignal.timeout(4000),
      next: { revalidate: 21600 },
    });
    if (!response.ok) return 20;
    const repository: { stargazers_count?: number } = await response.json();
    return repository.stargazers_count ?? 20;
  } catch {
    return 20;
  }
}

export async function ProjectsSection() {
  const endpointStars = await getEndpointStars();
  return (
    <section id="projects" aria-labelledby="projects-heading" className="portfolio-section">
      <div className="portfolio-section-heading">
        <h2 id="projects-heading">Projects</h2>
      </div>
      <div className="flex flex-col gap-1">
        {projects.map((project, index) => (
          <AnimatedProject
            key={project.title}
            project={project}
            index={index}
            stars={project.showGitHubStars ? endpointStars : null}
          />
        ))}
      </div>
    </section>
  );
}
