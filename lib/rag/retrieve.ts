import { knowledgeBase } from "@/lib/rag/knowledge-base";
import { buildVocabulary, cosineSimilarity, vectorize } from "@/lib/rag/vectorize";

const idf = buildVocabulary(knowledgeBase.map((chunk) => chunk.text));
const chunkVectors = knowledgeBase.map((chunk) => ({
  chunk,
  vector: vectorize(chunk.text, idf),
}));

export function retrieveContext(query: string, k = 4) {
  const queryVector = vectorize(query, idf);

  // Work experience is the most important topic, so always surface every role
  // rather than leaving it to similarity ranking, which can drop a company.
  const experienceChunks = chunkVectors.filter(({ chunk }) => chunk.id.startsWith("experience-"));
  const rest = chunkVectors.filter(({ chunk }) => !chunk.id.startsWith("experience-"));

  const scoredRest = rest
    .map(({ chunk, vector }) => ({ chunk, score: cosineSimilarity(queryVector, vector) }))
    .sort((a, b) => b.score - a.score)
    .slice(0, k);

  const ordered = [...experienceChunks.map(({ chunk }) => chunk), ...scoredRest.map(({ chunk }) => chunk)];

  return ordered.map((chunk) => chunk.text).join("\n\n");
}
