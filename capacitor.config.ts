import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.srikrishnasenthilkumar.carrotchase',
  appName: 'Carrot Chase',
  webDir: 'dist/public',
  server: {
    androidScheme: 'https'
  }
};

export default config;
