import { knowledgeBase } from "@/lib/rag/knowledge-base";
import { buildVocabulary, cosineSimilarity, vectorize } from "@/lib/rag/vectorize";

const idf = buildVocabulary(knowledgeBase.map((chunk) => chunk.text));
const chunkVectors = knowledgeBase.map((chunk) => ({
  chunk,
  vector: vectorize(chunk.text, idf),
}));

export function retrieveContext(query: string, k = 4) {
  const queryVector = vectorize(query, idf);

  const scored = chunkVectors
    .map(({ chunk, vector }) => ({ chunk, score: cosineSimilarity(queryVector, vector) }))
    .sort((a, b) => b.score - a.score)
    .slice(0, k);

  return scored.map(({ chunk }) => chunk.text).join("\n\n");
}
