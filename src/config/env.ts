import { z } from 'zod';

const clientEnvSchema = z.object({
  VITE_GOOGLE_ANALYTICS_ID: z.string(),
});

// Validate client environment
export const clientEnv = clientEnvSchema.parse(import.meta.env);
