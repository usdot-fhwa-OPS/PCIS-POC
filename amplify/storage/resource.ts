import { defineStorage } from '@aws-amplify/backend';

export const storage = defineStorage({
  name: 'pcisStorage',
  access: (allow) => ({
    'stowPlans/*': [allow.authenticated.to(['write'])],
  })
});