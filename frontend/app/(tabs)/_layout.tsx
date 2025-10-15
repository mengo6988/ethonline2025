import { Tabs } from 'expo-router';
import { usePrivy } from '@privy-io/expo';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import { Colors, Typography } from '../../constants/theme';

export default function TabLayout() {
  const { user, isReady } = usePrivy();

  // Don't render anything until Privy is ready
  if (!isReady) {
    return null;
  }

  // If no user, don't render (they should be redirected to login)
  if (!user) {
    return null;
  }

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors.primary.main,
        tabBarInactiveTintColor: Colors.neutral.gray400,
        headerShown: false,
        tabBarStyle: {
          backgroundColor: Colors.background.secondary,
          borderTopWidth: 0,
          paddingTop: 10,
          paddingBottom: 24,
          height: 92,
          shadowColor: '#000',
          shadowOffset: { width: 0, height: -2 },
          shadowOpacity: 0.05,
          shadowRadius: 8,
          elevation: 8,
        },
        tabBarLabelStyle: {
          fontFamily: Typography.weights.medium,
          fontSize: Typography.sizes.xs,
          marginTop: 4,
        },
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: 'Home',
          tabBarIcon: ({ focused, color }) => (
            <Ionicons
              name={focused ? "home" : "home-outline"}
              size={26}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="pay"
        options={{
          title: 'Pay',
          tabBarIcon: ({ focused, color }) => (
            <MaterialIcons
              name="payment"
              size={26}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="credit"
        options={{
          title: 'Credit',
          tabBarIcon: ({ focused, color }) => (
            <MaterialIcons
              name="credit-card"
              size={26}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="earn"
        options={{
          title: 'Earn',
          tabBarIcon: ({ focused, color }) => (
            <MaterialIcons
              name="account-balance-wallet"
              size={26}
              color={color}
            />
          ),
        }}
      />
    </Tabs>
  );
}
