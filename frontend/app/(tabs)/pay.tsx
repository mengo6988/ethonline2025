import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MaterialIcons, Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import PageHeader from '../../components/PageHeader';
import Card from '../../components/Card';
import { Colors, Typography, Spacing, BorderRadius, Shadows } from '../../constants/theme';

export default function PayScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <PageHeader
          title="Pay"
          subtitle="Send PYUSD payments"
        />

        {/* Main Pay Button */}
        <TouchableOpacity
          style={styles.payButton}
          onPress={() => router.push('/pay-details')}
        >
          <View style={styles.payButtonContent}>
            <View style={styles.payIconContainer}>
              <MaterialIcons name="send" size={32} color={Colors.neutral.white} />
            </View>
            <View style={styles.payTextContainer}>
              <Text style={styles.payButtonTitle}>Send Payment</Text>
              <Text style={styles.payButtonSubtitle}>Pay with PYUSD instantly</Text>
            </View>
            <Ionicons name="chevron-forward" size={24} color={Colors.neutral.white} />
          </View>
        </TouchableOpacity>

        {/* Recent Transactions */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Recent Transactions</Text>
          <Card variant="elevated">
            <View style={styles.emptyState}>
              <Ionicons name="receipt-outline" size={48} color={Colors.neutral.gray300} />
              <Text style={styles.emptyStateText}>No transactions yet</Text>
              <Text style={styles.emptyStateHint}>Your payment history will appear here</Text>
            </View>
          </Card>
        </View>
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
  payButton: {
    backgroundColor: Colors.primary.main,
    borderRadius: BorderRadius.lg,
    padding: Spacing.xl,
    marginBottom: Spacing['3xl'],
  },
  payButtonContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  payIconContainer: {
    width: 56,
    height: 56,
    borderRadius: BorderRadius.md,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: Spacing.lg,
  },
  payTextContainer: {
    flex: 1,
  },
  payButtonTitle: {
    fontSize: Typography.sizes.xl,
    fontFamily: Typography.weights.semibold,
    color: Colors.neutral.white,
    marginBottom: Spacing.xs / 2,
  },
  payButtonSubtitle: {
    fontSize: Typography.sizes.sm,
    fontFamily: Typography.weights.regular,
    color: 'rgba(255, 255, 255, 0.8)',
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
  emptyState: {
    alignItems: 'center',
    paddingVertical: Spacing['4xl'],
  },
  emptyStateText: {
    fontSize: Typography.sizes.base,
    fontFamily: Typography.weights.medium,
    color: Colors.text.secondary,
    marginTop: Spacing.md,
    marginBottom: Spacing.xs,
  },
  emptyStateHint: {
    fontSize: Typography.sizes.sm,
    fontFamily: Typography.weights.regular,
    color: Colors.text.tertiary,
  },
});
