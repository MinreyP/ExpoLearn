# ExpoLearn

A sandbox repository for exercise Expo/React Native development workflow.

## Prerequisites

-   Xcode (for iOS simulator)
-   Android Studio (for Android emulator)
-   An Expo account (https://expo.dev/signup)

## Strongly recommend you to install
-    Expo Orbit: a device management app by Expo for better developer experience (https://expo.dev/orbit)
<img src="https://expo.dev/static/orbit/orbit-screen.png" alt="drawing" width="600" />

## First Time Setup

1. **Clone & Install**

```bash
git clone
cd ExpoLearn
npm install
```

2. **Configure Your Project**

```bash
# Login with your Expo account
npx eas login

# Initialize your own project
npx eas init
```
By running `npx eas init,` you should have your own `app.json` file in the repo. This file serves as the app's configuration.

3. **Create Development Build**

```bash
# Create local development build (required for first time setup)
npm run build:local

# Start development server
npm run dev:all
```
then you can make some test changes to see if it reflects in your dev env.

## Commands

### Daily Development

```bash
npm run dev:all    # All platforms
npm run ios        # iOS only
npm run android    # Android only
npm run web        # Web only
```

### Building

```bash
# Local Development Builds
npm run build:local         # All platforms
npm run build:local:ios    # iOS only
npm run build:local:android # Android only

# Cloud Builds
npm run build:cloud        # Build for production using EAS
```

### Utility

```bash
npm run clean     # Clean build artifacts
```

## Important Notes

-   Use your own Expo account to play around with this repo
-   Your `app.json` is gitignored to prevent conflicts from other team members
-   Run Android emulator/iOS simulator before development
-   First-time setup requires creating development builds

## Troubleshooting

1. **No Development Build Found**

    - Run `npm run build:local` first
    - Then start development server

2. **Android/iOS Simulator Issues**
    - Start simulator before running dev commands
    - Use platform-specific commands if needed
