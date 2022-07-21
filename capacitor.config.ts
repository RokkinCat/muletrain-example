import { CapacitorConfig } from '@capacitor/cli';

const muletrainConfig = require('./muletrain.config.json');

const config: CapacitorConfig = {
  appId: 'com.rokkincat.muletrain_example',
  appName: 'muletrain-example',
  webDir: 'build',
  bundledWebRuntime: false,
  plugins: {
    Muletrain: {
      url: muletrainConfig["url"],
      enableInDev: true,
      mode: "auto"
    }
  }
};

export default config;
