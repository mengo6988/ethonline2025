import { usePrivy } from '@privy-io/expo';
import { useEffect } from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import { router } from 'expo-router';

export default function Index() {
  const { user, isReady } = usePrivy();

  useEffect(() => {
    if (isReady) {
      if (user) {
        router.replace('/(tabs)/home');
      } else {
        router.replace('/sign-in');
      }
    }
  }, [isReady, user]);

  if (!isReady) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#000" />
        <Text style={styles.loadingText}>Loading...</Text>
      </View>
    );
  }

  return null;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  loadingText: {
    marginTop: 16,
    fontSize: 16,
    color: '#666',
    fontFamily: 'Inter_400Regular',
  },
});
