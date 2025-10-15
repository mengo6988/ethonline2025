import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { usePrivy } from '@privy-io/expo';
import { router } from 'expo-router';
import { MaterialIcons } from '@expo/vector-icons';
import Card from '../../components/Card';
import PageHeader from '../../components/PageHeader';
import { Colors, Typography, Spacing, BorderRadius, Shadows } from '../../constants/theme';

export default function HomeScreen() {
  const { user, logout } = usePrivy();

  const handleLogout = async () => {
    try {
      await logout();
      router.replace('/sign-in');
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        {/* Header */}
        <View style={styles.header}>
          <PageHeader
            title="Home"
            subtitle={(() => {
              const emailAccount = user?.linked_accounts?.find((acc) => acc.type === 'email');
              if (emailAccount && 'address' in emailAccount) return emailAccount.address;

              const walletAccount = user?.linked_accounts?.find((acc) => acc.type === 'wallet');
              if (walletAccount && 'address' in walletAccount) {
                return walletAccount.address.slice(0, 6) + '...';
              }

              return 'Welcome!';
            })()}
          />
          <TouchableOpacity
            style={styles.logoutButton}
            onPress={handleLogout}
          >
            <MaterialIcons name="logout" size={24} color={Colors.text.primary} />
          </TouchableOpacity>
        </View>

        {/* PYUSD Balance Card */}
        <Card variant="elevated" style={styles.balanceCard}>
          <Text style={styles.balanceLabel}>PayPal USD Balance</Text>
          <Text style={styles.balanceAmount}>0.00 PYUSD</Text>
          <Text style={styles.balanceSubtext}>≈ $0.00 USD</Text>
        </Card>

        {/* Credit Status */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Credit Status</Text>
          <Card variant="elevated">
            <View style={styles.creditRow}>
              <View style={styles.creditLeft}>
                <Text style={styles.creditLabel}>Credit Score</Text>
                <Text style={styles.creditScore}>--</Text>
              </View>
              <View style={styles.creditDivider} />
              <View style={styles.creditRight}>
                <Text style={styles.creditLabel}>Available Credit</Text>
                <Text style={styles.creditAvailable}>$0.00</Text>
              </View>
            </View>
          </Card>
        </View>

        {/* Assets */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Your Assets</Text>
          <Card variant="elevated">
            <View style={styles.assetRow}>
              <View style={styles.assetLeft}>
                <View style={[styles.assetIcon, { backgroundColor: '#0070E0' + '15' }]}>
                  <Text style={styles.assetSymbol}>PYUSD</Text>
                </View>
                <View>
                  <Text style={styles.assetName}>PayPal USD</Text>
                  <Text style={styles.assetAmount}>0.00 PYUSD</Text>
                </View>
              </View>
              <View style={styles.assetRight}>
                <Text style={styles.assetValue}>$0.00</Text>
                <Text style={styles.assetChange}>$1.00</Text>
              </View>
            </View>
          </Card>
        </View>

        {/* User Info Card */}
        <Card variant="elevated">
          <Text style={styles.infoTitle}>User Information</Text>

          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>User ID:</Text>
            <Text style={styles.infoValue}>{user?.id?.slice(0, 12) || 'N/A'}...</Text>
          </View>

          {user?.linked_accounts?.map((account, index) => {
            let label = '';
            let value = '';
            let isMono = false;

            if (account.type === 'email' && 'address' in account) {
              label = 'Email:';
              value = account.address;
            } else if (account.type === 'phone' && 'phoneNumber' in account) {
              label = 'Phone:';
              value = account.phoneNumber;
            } else if (account.type === 'wallet' && 'address' in account) {
              label = 'Wallet:';
              value = `${account.address.slice(0, 6)}...${account.address.slice(-4)}`;
              isMono = true;
            } else {
              label = `${account.type}:`;
              value = 'Connected';
            }

            return (
              <View key={index} style={styles.infoRow}>
                <Text style={styles.infoLabel}>{label}</Text>
                <Text style={[styles.infoValue, isMono && styles.monoText]}>
                  {value}
                </Text>
              </View>
            );
          })}

          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>Created:</Text>
            <Text style={styles.infoValue}>
              {user?.created_at ? new Date(user.created_at).toLocaleDateString() : 'N/A'}
            </Text>
          </View>
        </Card>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background.primary,
  },
  content: {
    padding: Spacing.xl,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: Spacing['2xl'],
  },
  logoutButton: {
    width: 48,
    height: 48,
    borderRadius: BorderRadius.full,
    backgroundColor: Colors.background.secondary,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: Colors.neutral.gray200,
  },
  balanceCard: {
    alignItems: 'center',
    paddingVertical: Spacing['4xl'],
    marginBottom: Spacing['2xl'],
  },
  balanceLabel: {
    fontSize: Typography.sizes.sm,
    fontFamily: Typography.weights.medium,
    color: Colors.text.secondary,
    marginBottom: Spacing.sm,
  },
  balanceAmount: {
    fontSize: Typography.sizes['5xl'],
    fontFamily: Typography.weights.semibold,
    color: Colors.text.primary,
    letterSpacing: -1,
    marginBottom: Spacing.xs,
  },
  balanceSubtext: {
    fontSize: Typography.sizes.sm,
    fontFamily: Typography.weights.regular,
    color: Colors.text.tertiary,
  },
  section: {
    marginBottom: Spacing['2xl'],
  },
  sectionTitle: {
    fontSize: Typography.sizes.base,
    fontFamily: Typography.weights.semibold,
    color: Colors.text.primary,
    marginBottom: Spacing.md,
  },
  assetRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  assetLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.md,
  },
  assetIcon: {
    width: 40,
    height: 40,
    borderRadius: BorderRadius.full,
    justifyContent: 'center',
    alignItems: 'center',
  },
  assetSymbol: {
    fontSize: Typography.sizes.xs,
    fontFamily: Typography.weights.semibold,
    color: Colors.primary.main,
  },
  assetName: {
    fontSize: Typography.sizes.base,
    fontFamily: Typography.weights.semibold,
    color: Colors.text.primary,
    marginBottom: Spacing.xs / 2,
  },
  assetAmount: {
    fontSize: Typography.sizes.sm,
    fontFamily: Typography.weights.regular,
    color: Colors.text.secondary,
  },
  assetRight: {
    alignItems: 'flex-end',
  },
  assetValue: {
    fontSize: Typography.sizes.base,
    fontFamily: Typography.weights.semibold,
    color: Colors.text.primary,
    marginBottom: Spacing.xs / 2,
  },
  assetChange: {
    fontSize: Typography.sizes.sm,
    fontFamily: Typography.weights.medium,
    color: Colors.text.tertiary,
  },
  creditRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  creditLeft: {
    flex: 1,
  },
  creditRight: {
    flex: 1,
  },
  creditDivider: {
    width: 1,
    height: 40,
    backgroundColor: Colors.neutral.gray200,
    marginHorizontal: Spacing.lg,
  },
  creditLabel: {
    fontSize: Typography.sizes.sm,
    fontFamily: Typography.weights.medium,
    color: Colors.text.secondary,
    marginBottom: Spacing.xs,
  },
  creditScore: {
    fontSize: Typography.sizes['2xl'],
    fontFamily: Typography.weights.semibold,
    color: Colors.text.primary,
  },
  creditAvailable: {
    fontSize: Typography.sizes['2xl'],
    fontFamily: Typography.weights.semibold,
    color: Colors.primary.main,
  },
  infoTitle: {
    fontSize: Typography.sizes.lg,
    fontFamily: Typography.weights.semibold,
    color: Colors.text.primary,
    marginBottom: Spacing.lg,
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: Spacing.md,
    borderBottomWidth: 1,
    borderBottomColor: Colors.neutral.gray100,
  },
  infoLabel: {
    fontSize: Typography.sizes.sm,
    fontFamily: Typography.weights.medium,
    color: Colors.text.secondary,
  },
  infoValue: {
    fontSize: Typography.sizes.sm,
    fontFamily: Typography.weights.regular,
    color: Colors.text.primary,
    maxWidth: '60%',
    textAlign: 'right',
  },
  monoText: {
    fontFamily: 'Courier',
  },
});
