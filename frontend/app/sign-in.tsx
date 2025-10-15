import { View, Text, StyleSheet, ImageBackground, ActivityIndicator } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { usePrivy, useLoginWithOAuth } from "@privy-io/expo";
import { useLogin } from "@privy-io/expo/ui";
import { router } from "expo-router";
import { useEffect } from "react";
import { AntDesign } from '@expo/vector-icons';
import Button from '../components/Button';
import { Colors } from '../constants/theme';

export default function SignInPage() {
  const { user, isReady } = usePrivy();
  const { login: loginWithOAuth } = useLoginWithOAuth();
  const { login } = useLogin();

  // Redirect to home if user is already logged in
  useEffect(() => {
    if (isReady && user) {
      router.replace('/(tabs)/home');
    }
  }, [isReady, user]);

  const handleEmailLogin = async () => {
    try {
      await login({ loginMethods: ['email', 'sms'] });
      router.replace('/(tabs)/home');
    } catch (error) {
      console.error('Email login failed:', error);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      await loginWithOAuth({ provider: 'google' });
      router.replace('/(tabs)/home');
    } catch (error) {
      console.error('Google login failed:', error);
    }
  };

  if (!isReady) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color={Colors.primary.main} />
        <Text style={styles.loadingText}>Loading...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../assets/bg.jpg')}
        style={styles.background}
        resizeMode="cover"
      >
        <SafeAreaView style={styles.safeArea}>
          <View style={styles.headerContainer}>
            <Text style={styles.logoText}>etholgrpproject</Text>
            <Text style={styles.logoSubtext}>Buy Now, Pay Later With No Collateral</Text>
          </View>

          <View style={styles.spacer} />

          <View style={styles.buttonContainer}>
            <Text style={styles.welcomeTitle}>Welcome Back</Text>
            <Text style={styles.welcomeSubtitle}>Sign in to manage your account</Text>

            <Button
              title="Continue with Email"
              onPress={handleEmailLogin}
              variant="primary"
              style={styles.emailButton}
            />

            <Button
              title="Continue with Google"
              onPress={handleGoogleLogin}
              variant="outline"
              style={styles.googleButton}
            />

            <Text style={styles.footer}>
              By continuing, you agree to our{'\n'}
              <Text style={styles.footerLink}>Terms of Service</Text> and <Text style={styles.footerLink}>Privacy Policy</Text>
            </Text>
          </View>
        </SafeAreaView>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    flex: 1,
  },
  safeArea: {
    flex: 1,
  },
  headerContainer: {
    paddingTop: 60,
    alignItems: 'center',
  },
  logoText: {
    fontSize: 48,
    fontFamily: 'Inter_700Bold',
    color: Colors.text.primary,
    marginBottom: 4,
  },
  logoSubtext: {
    fontSize: 18,
    fontFamily: 'Inter_500Medium',
    color: Colors.text.secondary,
  },
  spacer: {
    flex: 1,
  },
  buttonContainer: {
    paddingHorizontal: 24,
    paddingBottom: 48,
  },
  welcomeTitle: {
    fontSize: 32,
    fontFamily: 'Inter_600SemiBold',
    color: Colors.text.primary,

    textAlign: 'center',
  },
  welcomeSubtitle: {
    fontSize: 16,
    fontFamily: 'Inter_400Regular',
    color: Colors.text.secondary,
    marginBottom: 24,
    textAlign: 'center',
  },
  googleButton: {
    marginBottom: 8,
  },
  emailButton: {
    marginBottom: 16,
  },
  footer: {
    fontSize: 12,
    fontFamily: 'Inter_400Regular',
    color: Colors.text.tertiary,
    textAlign: 'center',
    lineHeight: 18,
  },
  footerLink: {
    color: Colors.text.secondary,
    fontFamily: 'Inter_500Medium',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.background.primary,
    gap: 12,
  },
  loadingText: {
    fontSize: 16,
    color: Colors.text.secondary,
    fontFamily: 'Inter_400Regular',
  },
});
