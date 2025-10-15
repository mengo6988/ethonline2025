import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MaterialIcons, Ionicons } from '@expo/vector-icons';
import PageHeader from '../../components/PageHeader';
import Card from '../../components/Card';
import { Colors, Typography, Spacing, BorderRadius } from '../../constants/theme';

export default function EarnScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <PageHeader
          title="Earn"
          subtitle="Supply PYUSD and earn interest"
        />

        {/* Earning Summary */}
        <Card variant="elevated" style={styles.summaryCard}>
          <View style={styles.summaryHeader}>
            <Text style={styles.summaryLabel}>Total Supplied</Text>
            <View style={styles.aprBadge}>
              <Text style={styles.aprText}>5.2% APY</Text>
            </View>
          </View>
          <Text style={styles.summaryAmount}>0.00 PYUSD</Text>
          <View style={styles.earningsRow}>
            <Ionicons name="trending-up" size={16} color={Colors.success} />
            <Text style={styles.earningsText}>+$0.00 earned</Text>
          </View>
        </Card>

        {/* Supply Info Grid */}
        <View style={styles.infoGrid}>
          <Card variant="flat" style={styles.infoCard}>
            <Text style={styles.infoValue}>0.00</Text>
            <Text style={styles.infoLabel}>PYUSD Available</Text>
          </Card>
          <Card variant="flat" style={styles.infoCard}>
            <Text style={styles.infoValue}>0.00</Text>
            <Text style={styles.infoLabel}>PYUSD Supplied</Text>
          </Card>
        </View>

        {/* Supply Button */}
        <TouchableOpacity style={styles.supplyButton}>
          <View style={styles.buttonContent}>
            <View style={styles.buttonIconContainer}>
              <MaterialIcons name="account-balance-wallet" size={28} color={Colors.neutral.white} />
            </View>
            <View style={styles.buttonTextContainer}>
              <Text style={styles.buttonTitle}>Supply PYUSD</Text>
              <Text style={styles.buttonSubtitle}>Lend and earn interest automatically</Text>
            </View>
            <Ionicons name="chevron-forward" size={24} color={Colors.neutral.white} />
          </View>
        </TouchableOpacity>

        {/* How it Works */}
        <Card variant="elevated" style={styles.howItWorksCard}>
          <Text style={styles.howItWorksTitle}>How It Works</Text>

          <View style={styles.stepRow}>
            <View style={styles.stepNumber}>
              <Text style={styles.stepNumberText}>1</Text>
            </View>
            <View style={styles.stepContent}>
              <Text style={styles.stepTitle}>Supply PYUSD</Text>
              <Text style={styles.stepDescription}>
                Deposit your PYUSD to the lending pool
              </Text>
            </View>
          </View>

          <View style={styles.stepRow}>
            <View style={styles.stepNumber}>
              <Text style={styles.stepNumberText}>2</Text>
            </View>
            <View style={styles.stepContent}>
              <Text style={styles.stepTitle}>Earn Interest</Text>
              <Text style={styles.stepDescription}>
                Your funds are lent to borrowers who pay interest
              </Text>
            </View>
          </View>

          <View style={styles.stepRow}>
            <View style={styles.stepNumber}>
              <Text style={styles.stepNumberText}>3</Text>
            </View>
            <View style={styles.stepContent}>
              <Text style={styles.stepTitle}>Withdraw Anytime</Text>
              <Text style={styles.stepDescription}>
                Pull out your funds plus earnings whenever you want
              </Text>
            </View>
          </View>
        </Card>

        {/* Info Box */}
        <Card variant="flat" style={styles.infoBox}>
          <View style={styles.infoBoxContent}>
            <Ionicons name="shield-checkmark" size={24} color={Colors.success} />
            <Text style={styles.infoBoxText}>
              Your supplied PYUSD is secured and can be withdrawn at any time
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
  summaryCard: {
    marginBottom: Spacing.xl,
  },
  summaryHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: Spacing.md,
  },
  summaryLabel: {
    fontSize: Typography.sizes.sm,
    fontFamily: Typography.weights.medium,
    color: Colors.text.secondary,
  },
  aprBadge: {
    backgroundColor: Colors.success + '15',
    paddingHorizontal: Spacing.md,
    paddingVertical: Spacing.xs / 2,
    borderRadius: BorderRadius.full,
  },
  aprText: {
    fontSize: Typography.sizes.xs,
    fontFamily: Typography.weights.semibold,
    color: Colors.success,
  },
  summaryAmount: {
    fontSize: Typography.sizes['4xl'],
    fontFamily: Typography.weights.semibold,
    color: Colors.text.primary,
    marginBottom: Spacing.sm,
  },
  earningsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.xs,
  },
  earningsText: {
    fontSize: Typography.sizes.sm,
    fontFamily: Typography.weights.medium,
    color: Colors.success,
  },
  infoGrid: {
    flexDirection: 'row',
    gap: Spacing.md,
    marginBottom: Spacing['3xl'],
  },
  infoCard: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: Spacing.xl,
  },
  infoValue: {
    fontSize: Typography.sizes['2xl'],
    fontFamily: Typography.weights.semibold,
    color: Colors.text.primary,
    marginBottom: Spacing.xs,
  },
  infoLabel: {
    fontSize: Typography.sizes.xs,
    fontFamily: Typography.weights.medium,
    color: Colors.text.secondary,
    textAlign: 'center',
  },
  supplyButton: {
    backgroundColor: Colors.secondary.main,
    borderRadius: BorderRadius.lg,
    padding: Spacing.xl,
    marginBottom: Spacing['2xl'],
  },
  buttonContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  buttonIconContainer: {
    width: 56,
    height: 56,
    borderRadius: BorderRadius.md,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: Spacing.lg,
  },
  buttonTextContainer: {
    flex: 1,
  },
  buttonTitle: {
    fontSize: Typography.sizes.xl,
    fontFamily: Typography.weights.semibold,
    color: Colors.neutral.white,
    marginBottom: Spacing.xs / 2,
  },
  buttonSubtitle: {
    fontSize: Typography.sizes.sm,
    fontFamily: Typography.weights.regular,
    color: 'rgba(255, 255, 255, 0.8)',
  },
  howItWorksCard: {
    marginBottom: Spacing.xl,
  },
  howItWorksTitle: {
    fontSize: Typography.sizes.lg,
    fontFamily: Typography.weights.semibold,
    color: Colors.text.primary,
    marginBottom: Spacing.lg,
  },
  stepRow: {
    flexDirection: 'row',
    marginBottom: Spacing.lg,
  },
  stepNumber: {
    width: 32,
    height: 32,
    borderRadius: BorderRadius.full,
    backgroundColor: Colors.primary.main + '15',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: Spacing.md,
  },
  stepNumberText: {
    fontSize: Typography.sizes.sm,
    fontFamily: Typography.weights.semibold,
    color: Colors.primary.main,
  },
  stepContent: {
    flex: 1,
  },
  stepTitle: {
    fontSize: Typography.sizes.base,
    fontFamily: Typography.weights.semibold,
    color: Colors.text.primary,
    marginBottom: Spacing.xs / 2,
  },
  stepDescription: {
    fontSize: Typography.sizes.sm,
    fontFamily: Typography.weights.regular,
    color: Colors.text.secondary,
    lineHeight: Typography.sizes.sm * Typography.lineHeights.normal,
  },
  infoBox: {
    marginBottom: Spacing.xl,
  },
  infoBoxContent: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: Spacing.md,
  },
  infoBoxText: {
    flex: 1,
    fontSize: Typography.sizes.sm,
    fontFamily: Typography.weights.regular,
    color: Colors.text.secondary,
    lineHeight: Typography.sizes.sm * Typography.lineHeights.relaxed,
  },
});
