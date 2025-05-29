import * as dotenv from 'dotenv';

dotenv.config();

export function getBaseUrl(): string {
  const url = process.env.BASE_URL;
  if (!url) {
    throw new Error('BASE_URL is not defined in .env file');
  }
  return url;
}
