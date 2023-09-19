import axios from 'axios';

export const api = axios.create({
  baseURL: 'upload-ai-api-one.vercel.app',
});
