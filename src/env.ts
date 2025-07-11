import { z } from 'zod';

const envSchema = z.object({
  PORT: z.coerce.number().default(3333), // Default port is 3333
  DATABASE_URL: z.string().url().startsWith('postgresql://'),
  GEMINI_API_KEY: z.string(),
});

const env = envSchema.parse(process.env);
export { env };
