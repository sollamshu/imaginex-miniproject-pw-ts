import * as dotenv from 'dotenv';

dotenv.config();

export function getBaseApiUrl(): string {
  const url = process.env.BASE_API_URL;
  if (!url) {
    throw new Error('BASE_API_URL is not defined in .env file');
  }
  return url;
}

export function getApiKey(): string {
  const url = process.env.BASE_API_KEY;
  if (!url) {
    throw new Error('BASE_API_URL is not defined in .env file');
  }
  return url;
}
