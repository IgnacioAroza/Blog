import { createClient } from 'next-sanity';

export const client = createClient({
  projectId: '7ys79jlt',
  dataset: 'production',
  apiVersion: '2024-01-01',
  useCdn: false,
});