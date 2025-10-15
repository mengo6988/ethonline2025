# Frontend - React Native with Privy

A React Native Expo app with Privy authentication integration.

## Setup

### 1. Install Dependencies

Dependencies are already installed. If you need to reinstall:

```bash
npm install --legacy-peer-deps
```

### 2. Configure Environment Variables

Create a `.env` file in the root of the `frontend` directory:

```bash
cp .env.example .env
```

Then edit `.env` and add your Privy credentials:

```
EXPO_PUBLIC_PRIVY_APP_ID=your-privy-app-id
EXPO_PUBLIC_PRIVY_CLIENT_ID=your-privy-client-id
```

You can get these from the [Privy Dashboard](https://dashboard.privy.io):
1. Create a new app or use an existing one
2. Go to Settings → App Clients to create a client ID
3. Copy both the App ID and Client ID to your `.env` file

### 3. Run the App

```bash
npm start
```

Then press:
- `i` for iOS Simulator
- `a` for Android Emulator
- Scan QR code with Expo Go app on your physical device

## Project Structure

```
frontend/
├── app/
│   ├── (tabs)/
│   │   ├── _layout.tsx    # Tab navigation layout
│   │   ├── home.tsx       # Home screen (logged in)
│   │   ├── pay.tsx        # Pay screen
│   │   └── loan.tsx       # Loan screen
│   ├── _layout.tsx        # Root layout with PrivyProvider
│   ├── index.tsx          # Splash/router screen
│   └── sign-in.tsx        # Sign in screen
├── components/
│   ├── Button.tsx         # Reusable button component
│   ├── Card.tsx           # Reusable card component
│   └── PageHeader.tsx     # Reusable page header component
├── entrypoint.js          # Entry point with polyfills
├── metro.config.js        # Metro bundler configuration
├── tsconfig.json          # TypeScript configuration
└── package.json
```

## Features

- **Privy authentication** - Email and Google OAuth login
- **Expo Router** - File-based routing for navigation
- **TypeScript** - Full type safety
- **Tab navigation** - 3 tabs (Home, Pay, Loan)
- **Reusable components** - Button, Card, PageHeader
- **Auto-redirect** - Based on authentication state

## App Flow

### Authentication Flow
1. **Splash Screen** (`app/index.tsx`) - Checks if user is authenticated
2. **Sign In** (`app/sign-in.tsx`) - Login with Google or Email
3. **Tabs** - After login, user is redirected to tab navigation

### Tab Navigation
The app has 3 main tabs:
- **Home** (`app/(tabs)/home.tsx`) - User dashboard with account info
- **Pay** (`app/(tabs)/pay.tsx`) - Payment features (placeholder)
- **Loan** (`app/(tabs)/loan.tsx`) - Loan features (placeholder)

Each tab demonstrates:
- Use of reusable components (PageHeader, Card)
- Consistent styling with Inter fonts
- Empty state patterns for future features

## Key Dependencies

- `@privy-io/expo` - Privy React Native SDK
- `@privy-io/expo/ui` - Privy UI components
- `expo-router` - File-based routing
- `viem` - Ethereum utilities
- `@expo-google-fonts/inter` - Inter font family

## Notes

- Uses `--legacy-peer-deps` for installation due to peer dependency conflicts
- Requires proper metro configuration for package exports
- TypeScript moduleResolution is set to "Bundler" for proper imports
- Environment variables must use `EXPO_PUBLIC_` prefix to be accessible in app

## Troubleshooting

If you encounter module resolution errors:
```bash
npx expo start -c
```

If fonts don't load:
- Make sure `expo-font` and `@expo-google-fonts/inter` are installed
- Check that fonts are loaded in `app/_layout.tsx`
