import { profile } from "@/lib/profile-data";
import { experiences, projects } from "@/lib/site-data";
import { aiWorkflow, primarySkills, skillGroups } from "@/lib/skills-data";

export type KnowledgeChunk = {
  id: string;
  text: string;
};

function stripMarkers(text: string) {
  return text.replace(/\*\*/g, "");
}

const profileChunk: KnowledgeChunk = {
  id: "profile",
  text: [
    `${profile.name} is a ${profile.noun} based in ${profile.location}.`,
    `Stack: ${profile.stackLine}.`,
    profile.summary,
    profile.availability.open ? profile.availability.label + "." : "",
  ]
    .filter(Boolean)
    .join(" "),
};

const linksChunk: KnowledgeChunk = {
  id: "links",
  text: `Contact and links: email ${profile.email}, GitHub ${profile.links.github}, LinkedIn ${profile.links.linkedin}, resume ${profile.links.resume}.`,
};

const experienceChunks: KnowledgeChunk[] = experiences.map((exp, i) => ({
  id: `experience-${i}`,
  text: stripMarkers(
    `${exp.title} at ${exp.company} (${exp.location}), ${exp.duration}. ${exp.achievements.join(" ")}`,
  ),
}));

const projectChunks: KnowledgeChunk[] = projects.map((project, i) => ({
  id: `project-${i}`,
  text: stripMarkers(
    `Project "${project.title}" (${project.year}): ${project.tagline}. Role: ${project.role}. Stack: ${project.stack.join(", ")}. ${project.highlights.join(" ")} Source: ${project.repoUrl}.`,
  ),
}));

const skillsChunk: KnowledgeChunk = {
  id: "skills",
  text: [
    `Primary skills: ${primarySkills.join(", ")}.`,
    ...skillGroups.map((group) => `${group.label}: ${group.skills.join(", ")}.`),
  ].join(" "),
};

const aiWorkflowChunk: KnowledgeChunk = {
  id: "ai-workflow",
  text: [
    aiWorkflow.intro,
    ...aiWorkflow.groups.map((group) => `${group.label}: ${group.skills.join(", ")}.`),
  ].join(" "),
};

export const knowledgeBase: KnowledgeChunk[] = [
  profileChunk,
  linksChunk,
  ...experienceChunks,
  ...projectChunks,
  skillsChunk,
  aiWorkflowChunk,
];
