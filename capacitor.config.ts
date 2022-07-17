import { CapacitorConfig } from '@capacitor/cli';

const muletrainConfig = require('./muletrain.config.json');

const config: CapacitorConfig = {
  appId: 'com.rokkincat.muletrain-example',
  appName: 'muletrain-example',
  webDir: 'build',
  bundledWebRuntime: false,
  plugins: {
    Muletrain: {
      url: muletrainConfig["url"]
    }
  }
};

export default config;
