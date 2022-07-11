# Muletrain Example App

## Installation

```
npm install --save muletrain 
```

## Configuration

Once the plugin is installed, set up all of the config values.
Muletrain depends on s3, follow the [aws docs](https://docs.aws.amazon.com/sdk-for-javascript/v2/developer-guide/setting-credentials-node.html) to set environment variables or a shared credentials file.
If you don't have environmental credentials set, the `muletrain init` command will ask for a path to a credentials .json file. 

```
npx muletrain init
```

Follow the prompts, this will create the file `muletrain.config.json` in the root of your project directory. 

```json
{
  "url": "https://bucket.s3.us-east-2.amazonaws.com",
  "aws": {
    "credentials": "./s3.json",
    "bucket": "bucket",
    "region": "us-east-2"
  }
}
```

The init command will also let you create a new manifest.json file and bucket directly from the command line.

You will also need to add some values to your `capacitor.config.json` file for the muletrain plugin.

```json
{
  "plugins": {
    "Muletrain": {
      "url": "https://bucket.s3.us-east-2.amazonaws.com/manifest.json",
      "enableInDev": false,
      "mode": "auto"
    }
  }
}

```

| Option | Description | 
| --- | --- |
| `url` | The full url of the manifest file | 
| `enableInDev ` | If the plugin should handle deploys in the dev environment, defaults to `false`. If this is set to `true`, it will overwrite your local changes with the most recent release. |
| `mode` | The strategy for checking for and installing updates. Options are `auto`, `background`, `manual` | 

**Mode Options**

* `auto` - the plugin will check with updates as soon as the app opens and will swap to the latest version as quickly as it can automatically.
* `background`* - the plugin will check for updates as soon as the app opens, and will swap to the latest version on next app open.
* `manual`* - the plugin will not do any checks or installations automatically, it will rely on the developer to call the necessary functions

_* not built yet, do not use_


## Deploying

The `muletrain deploy` command will attempt to deploy to the configured S3 bucket, but most options can be overwritten with flags

```
npx muletrain deploy
```


| Flag | Description | 
| --- | --- |
| `--id <string>` | Unique identifier for the **specific deploy**, defaults to the first 5 characters of the sha of the most recent git commit. | 
| `-c`, `--channel <string>` |  Release channel to deploy to, defaults to `production` |
| `--aws <string>` | Path to an aws json credentials file | 
| `--stage` | Deploy the files to the local machine rather than uploading them to S3. Used to support self-hosted flows |
| `--url` | Override the url that the manifest is located |
| `--dir` | Directory where the production web build is located, defaults to `./build` |
| `--ios-equivalent <string>` | Version of iOS binary that contains the same code as this deploy |
| `--ios-max <string>` | Version of the iOS binary that is the maximum which should install this web payload. Used to prevent older binaries from downloading incompatible web code. |
| `--ios-min <string>` | Version of the iOS binary that is the minimum which should install this web payload. Used to prevent newer binaries from downloading incompatible web code. |
| `--android-equivalent <string>` | Version of Android binary that contains the same code as this deploy |
| `--android-max <string>` | Version of the Android binary that is the maximum which should install this web payload. Used to prevent older binaries from downloading incompatible web code. |
| `--android-min <string>` | Version of the Android binary that is the minimum which should install this web payload. Used to prevent newer binaries from downloading incompatible web code. |

_(note: all flags are optional)_

It is recommeded that you handle builds and deploys of web payloads using github actions. See the `.github/actions` folder to see the various build options

