import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.freshersjobs.app',
  appName: 'FresherJobs',
  webDir: 'www/browser',
  server: {
    androidScheme: 'http',
    hostname: '10.0.0.12',
    cleartext: true
  }
};

export default config;