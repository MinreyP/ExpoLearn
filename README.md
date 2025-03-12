# ExpoLearn

A sandbox repository for Expo/React Native development.

## Prerequisites

-   Node.js
-   Xcode (for iOS development)
-   Android Studio (for Android development)
-   An Expo account (https://expo.dev/signup)

## Setup

1. **Install Dependencies**

```bash
npm install
```

2. **Configure Your Environment**

```bash
# Login to your Expo account
npx eas login

# Create your app configuration
cp example.app.json app.json

# Initialize your Expo project
npx eas init
```

3. **Start Development**

```bash
# Make sure Android Emulator/iOS Simulator is running first
npm run dev:all
```

## Development Commands

### Local Development

```bash
npm run dev:all      # All platforms
npm run ios         # iOS only
npm run android     # Android only
npm run web         # Web only
```

### Building

```bash
# Local Development Builds
npm run build:local         # All platforms
npm run build:local:ios    # iOS only
npm run build:local:android # Android only

# Cloud Builds (EAS)
npm run build:cloud
```

### Utility Commands

```bash
npm run clean  # Clean build artifacts
```

## Development Workflow

This repository is set up to allow independent development:

-   Each developer uses their own Expo account
-   Individual project IDs and build histories
-   No shared credentials required
-   Builds can be tested without affecting others

### First Time Setup Flow

1. Create your Expo account at https://expo.dev/signup
2. Clone this repository
3. Follow the setup steps above
4. When running `eas init`:
    - A new project ID will be created for you
    - This ID is stored in your local `app.json`
    - Your `app.json` is gitignored to prevent conflicts

## Important Notes

-   Each developer should use their own Expo account
-   First time setup requires creating development builds
-   Run simulators/emulators before starting development
-   The `app.json` file is gitignored - use `example.app.json` as template

## Troubleshooting

1. **No Development Build Found**

    - Run `npm run build:local` first
    - Then start development server

2. **Android/iOS Simulator Issues**
    - Ensure simulator is running before starting dev server
    - Use platform-specific commands if needed
      Let me create a final, clean version of the README that focuses on your team's workflow with individual Expo accounts:

Proposed edit:
README.md
+69
-36
15
Apply

# ExpoLearn

A starter repository for Expo/React Native development. Each developer can work independently with their own Expo account.

## Prerequisites

-   Node.js
-   Xcode (for iOS development)
-   Android Studio (for Android development)
-   An Expo account (https://expo.dev/signup)

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

# Create your app configuration
cp example.app.json app.json

# Initialize your own project
npx eas init
```

3. **Create Development Build**

```bash
# Create local development build (required for first time setup)
npm run build:local

# Start development server
npm run dev:all
```

## Development Commands

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

-   Each developer uses their own Expo account
-   Your `app.json` is gitignored to prevent conflicts
-   Run Android emulator/iOS simulator before development
-   First-time setup requires creating development builds

## Troubleshooting

1. **No Development Build Found**

    - Run `npm run build:local` first
    - Then start development server

2. **Android/iOS Simulator Issues**
    - Start simulator before running dev commands
    - Use platform-specific commands if needed
