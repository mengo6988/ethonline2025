import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MaterialIcons, Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import PageHeader from '../../components/PageHeader';
import Card from '../../components/Card';
import { Colors, Typography, Spacing, BorderRadius, Shadows } from '../../constants/theme';

export default function CreditScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <PageHeader
          title="Credit"
          subtitle="Buy now, pay later with PYUSD"
        />

        {/* Credit Summary Card */}
        <Card variant="elevated" style={styles.summaryCard}>
          <View style={styles.summaryRow}>
            <View style={styles.summaryItem}>
              <Text style={styles.summaryLabel}>Credit Line</Text>
              <Text style={styles.summaryValue}>$0</Text>
            </View>
            <View style={styles.divider} />
            <View style={styles.summaryItem}>
              <Text style={styles.summaryLabel}>Amount Owed</Text>
              <Text style={[styles.summaryValue, styles.debtValue]}>$0</Text>
            </View>
          </View>
        </Card>

        {/* Interest Rate Card */}
        <Card variant="elevated" style={styles.rateCard}>
          <View style={styles.rateContent}>
            <View style={styles.rateIconBox}>
              <MaterialIcons name="trending-down" size={28} color={Colors.success} />
            </View>
            <View style={styles.rateTextContainer}>
              <Text style={styles.rateTitle}>Your Interest Rate</Text>
              <Text style={styles.ratePercentage}>0.0% APR</Text>
              <Text style={styles.rateDescription}>Variable rate based on credit score</Text>
            </View>
          </View>
        </Card>

        {/* Check Credit Score Button */}
        <TouchableOpacity
          style={styles.checkScoreButton}
          onPress={() => router.push('/credit-details')}
        >
          <View style={styles.buttonContent}>
            <View style={styles.buttonIconContainer}>
              <MaterialIcons name="verified" size={28} color={Colors.neutral.white} />
            </View>
            <View style={styles.buttonTextContainer}>
              <Text style={styles.buttonTitle}>Check Credit Score</Text>
              <Text style={styles.buttonSubtitle}>See your score and increase credit limit</Text>
            </View>
            <Ionicons name="chevron-forward" size={24} color={Colors.neutral.white} />
          </View>
        </TouchableOpacity>

        {/* Info Box */}
        <Card variant="flat" style={styles.infoBox}>
          <View style={styles.infoContent}>
            <Ionicons name="information-circle" size={24} color={Colors.info} />
            <Text style={styles.infoText}>
              Higher credit scores unlock lower interest rates and higher credit limits
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
  summaryRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  summaryItem: {
    flex: 1,
    alignItems: 'center',
  },
  divider: {
    width: 1,
    height: 50,
    backgroundColor: Colors.neutral.gray200,
  },
  summaryLabel: {
    fontSize: Typography.sizes.sm,
    fontFamily: Typography.weights.medium,
    color: Colors.text.secondary,
    marginBottom: Spacing.sm,
  },
  summaryValue: {
    fontSize: Typography.sizes['4xl'],
    fontFamily: Typography.weights.semibold,
    color: Colors.primary.main,
  },
  debtValue: {
    color: Colors.text.primary,
  },
  rateCard: {
    marginBottom: Spacing['3xl'],
  },
  rateContent: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.lg,
  },
  rateIconBox: {
    width: 64,
    height: 64,
    borderRadius: BorderRadius.full,
    backgroundColor: Colors.success + '15',
    justifyContent: 'center',
    alignItems: 'center',
  },
  rateTextContainer: {
    flex: 1,
  },
  rateTitle: {
    fontSize: Typography.sizes.sm,
    fontFamily: Typography.weights.medium,
    color: Colors.text.secondary,
    marginBottom: Spacing.xs / 2,
  },
  ratePercentage: {
    fontSize: Typography.sizes['3xl'],
    fontFamily: Typography.weights.semibold,
    color: Colors.success,
    marginBottom: Spacing.xs / 2,
  },
  rateDescription: {
    fontSize: Typography.sizes.xs,
    fontFamily: Typography.weights.regular,
    color: Colors.text.tertiary,
  },
  checkScoreButton: {
    backgroundColor: Colors.primary.main,
    borderRadius: BorderRadius.lg,
    padding: Spacing.xl,
    marginBottom: Spacing.xl,
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
  infoBox: {
    marginBottom: Spacing.xl,
  },
  infoContent: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: Spacing.md,
  },
  infoText: {
    flex: 1,
    fontSize: Typography.sizes.sm,
    fontFamily: Typography.weights.regular,
    color: Colors.text.secondary,
    lineHeight: Typography.sizes.sm * Typography.lineHeights.relaxed,
  },
});
