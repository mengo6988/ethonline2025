# Frontend - React Native with Privy

React Native Expo app with Privy authentication.

## Quick Start

```bash
npm install --legacy-peer-deps
npm start
```

Press `i` for iOS, `a` for Android, or scan QR code with Expo Go.

## Environment Setup

Create `.env` with your [Privy Dashboard](https://dashboard.privy.io) credentials:

```
EXPO_PUBLIC_PRIVY_APP_ID=your-privy-app-id
EXPO_PUBLIC_PRIVY_CLIENT_ID=your-privy-client-id
```

## Project Structure

```
frontend/
├── app/
│   ├── (tabs)/
│   │   ├── _layout.tsx       # Tab navigation
│   │   ├── home.tsx          # Home tab
│   │   ├── pay.tsx           # Pay tab
│   │   ├── earn.tsx          # Earn tab
│   │   └── credit.tsx        # Credit tab
│   ├── _layout.tsx           # Root layout with PrivyProvider
│   ├── index.tsx             # Splash/routing
│   ├── sign-in.tsx           # Auth screen
│   ├── pay-details.tsx       # Pay detail view
│   └── credit-details.tsx    # Credit detail view
├── components/
│   ├── Button.tsx
│   ├── Card.tsx
│   └── PageHeader.tsx
├── constants/
│   └── theme.ts              # Theme colors & styles
├── assets/                   # Images & icons
├── entrypoint.js
└── metro.config.js
```
