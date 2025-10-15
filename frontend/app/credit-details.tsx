import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MaterialIcons, Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import Card from '../components/Card';
import { Colors, Typography, Spacing, BorderRadius } from '../constants/theme';

export default function CreditDetailsScreen() {
  return (
    <SafeAreaView style={styles.container}>
      {/* Custom Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color={Colors.text.primary} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Credit Score</Text>
        <View style={styles.headerRight} />
      </View>

      <ScrollView contentContainerStyle={styles.content}>
        {/* Credit Score Card */}
        <Card variant="elevated" style={styles.scoreCard}>
          <Text style={styles.scoreLabel}>Your Credit Score</Text>
          <View style={styles.scoreCircle}>
            <Text style={styles.scoreValue}>--</Text>
            <Text style={styles.scoreMaxValue}>/ 850</Text>
          </View>
          <Text style={styles.scoreStatus}>Not Scored Yet</Text>
        </Card>

        {/* Benefits */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>What You'll Get</Text>

          <Card variant="flat" style={styles.benefitCard}>
            <View style={styles.benefitIcon}>
              <MaterialIcons name="credit-card" size={24} color={Colors.primary.main} />
            </View>
            <View style={styles.benefitText}>
              <Text style={styles.benefitTitle}>Higher Credit Limits</Text>
              <Text style={styles.benefitDescription}>
                Better scores unlock more credit for purchases
              </Text>
            </View>
          </Card>

          <Card variant="flat" style={styles.benefitCard}>
            <View style={styles.benefitIcon}>
              <MaterialIcons name="trending-down" size={24} color={Colors.success} />
            </View>
            <View style={styles.benefitText}>
              <Text style={styles.benefitTitle}>Lower Interest Rates</Text>
              <Text style={styles.benefitDescription}>
                Pay less interest when borrowing with BNPL
              </Text>
            </View>
          </Card>

          <Card variant="flat" style={styles.benefitCard}>
            <View style={styles.benefitIcon}>
              <MaterialIcons name="flash-on" size={24} color={Colors.accent.orange} />
            </View>
            <View style={styles.benefitText}>
              <Text style={styles.benefitTitle}>Instant Approvals</Text>
              <Text style={styles.benefitDescription}>
                Get approved for purchases immediately
              </Text>
            </View>
          </Card>
        </View>

        {/* Get Scored Button */}
        <TouchableOpacity style={styles.getScoredButton}>
          <Text style={styles.getScoredButtonText}>Get Scored Now</Text>
          <Ionicons name="arrow-forward" size={20} color={Colors.neutral.white} />
        </TouchableOpacity>

        {/* How Scoring Works */}
        <Card variant="elevated" style={styles.howCard}>
          <Text style={styles.howTitle}>How Credit Scoring Works</Text>

          <View style={styles.factorRow}>
            <View style={styles.factorDot} />
            <View style={styles.factorContent}>
              <Text style={styles.factorTitle}>Payment History (35%)</Text>
              <Text style={styles.factorText}>On-time payments improve your score</Text>
            </View>
          </View>

          <View style={styles.factorRow}>
            <View style={styles.factorDot} />
            <View style={styles.factorContent}>
              <Text style={styles.factorTitle}>Credit Utilization (30%)</Text>
              <Text style={styles.factorText}>Keep balances low relative to limits</Text>
            </View>
          </View>

          <View style={styles.factorRow}>
            <View style={styles.factorDot} />
            <View style={styles.factorContent}>
              <Text style={styles.factorTitle}>Account History (15%)</Text>
              <Text style={styles.factorText}>Longer account history helps</Text>
            </View>
          </View>

          <View style={styles.factorRow}>
            <View style={styles.factorDot} />
            <View style={styles.factorContent}>
              <Text style={styles.factorTitle}>Recent Activity (20%)</Text>
              <Text style={styles.factorText}>Regular usage shows reliability</Text>
            </View>
          </View>
        </Card>

        {/* Info Box */}
        <Card variant="flat" style={styles.infoBox}>
          <View style={styles.infoContent}>
            <Ionicons name="shield-checkmark" size={24} color={Colors.info} />
            <Text style={styles.infoText}>
              Your credit score is calculated based on your payment behavior and usage patterns
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
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: Spacing.lg,
    paddingVertical: Spacing.md,
    backgroundColor: Colors.background.secondary,
    borderBottomWidth: 1,
    borderBottomColor: Colors.neutral.gray100,
  },
  backButton: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: Typography.sizes.lg,
    fontFamily: Typography.weights.semibold,
    color: Colors.text.primary,
  },
  headerRight: {
    width: 40,
  },
  content: {
    padding: Spacing.xl,
  },
  scoreCard: {
    alignItems: 'center',
    paddingVertical: Spacing['4xl'],
    marginBottom: Spacing['2xl'],
  },
  scoreLabel: {
    fontSize: Typography.sizes.sm,
    fontFamily: Typography.weights.medium,
    color: Colors.text.secondary,
    marginBottom: Spacing.lg,
  },
  scoreCircle: {
    width: 180,
    height: 180,
    borderRadius: BorderRadius.full,
    backgroundColor: Colors.neutral.gray100,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: Spacing.lg,
  },
  scoreValue: {
    fontSize: 64,
    fontFamily: Typography.weights.semibold,
    color: Colors.text.primary,
  },
  scoreMaxValue: {
    fontSize: Typography.sizes.xl,
    fontFamily: Typography.weights.medium,
    color: Colors.text.tertiary,
  },
  scoreStatus: {
    fontSize: Typography.sizes.base,
    fontFamily: Typography.weights.medium,
    color: Colors.text.secondary,
  },
  section: {
    marginBottom: Spacing['2xl'],
  },
  sectionTitle: {
    fontSize: Typography.sizes.lg,
    fontFamily: Typography.weights.semibold,
    color: Colors.text.primary,
    marginBottom: Spacing.lg,
  },
  benefitCard: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: Spacing.md,
    padding: Spacing.lg,
  },
  benefitIcon: {
    width: 48,
    height: 48,
    borderRadius: BorderRadius.full,
    backgroundColor: Colors.background.card,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: Spacing.md,
  },
  benefitText: {
    flex: 1,
  },
  benefitTitle: {
    fontSize: Typography.sizes.base,
    fontFamily: Typography.weights.semibold,
    color: Colors.text.primary,
    marginBottom: Spacing.xs / 2,
  },
  benefitDescription: {
    fontSize: Typography.sizes.sm,
    fontFamily: Typography.weights.regular,
    color: Colors.text.secondary,
    lineHeight: Typography.sizes.sm * Typography.lineHeights.normal,
  },
  getScoredButton: {
    backgroundColor: Colors.primary.main,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: Spacing.lg,
    borderRadius: BorderRadius.md,
    gap: Spacing.sm,
    marginBottom: Spacing['2xl'],
  },
  getScoredButtonText: {
    fontSize: Typography.sizes.base,
    fontFamily: Typography.weights.semibold,
    color: Colors.neutral.white,
  },
  howCard: {
    marginBottom: Spacing.xl,
  },
  howTitle: {
    fontSize: Typography.sizes.lg,
    fontFamily: Typography.weights.semibold,
    color: Colors.text.primary,
    marginBottom: Spacing.lg,
  },
  factorRow: {
    flexDirection: 'row',
    marginBottom: Spacing.lg,
  },
  factorDot: {
    width: 8,
    height: 8,
    borderRadius: BorderRadius.full,
    backgroundColor: Colors.primary.main,
    marginTop: 6,
    marginRight: Spacing.md,
  },
  factorContent: {
    flex: 1,
  },
  factorTitle: {
    fontSize: Typography.sizes.sm,
    fontFamily: Typography.weights.semibold,
    color: Colors.text.primary,
    marginBottom: Spacing.xs / 2,
  },
  factorText: {
    fontSize: Typography.sizes.sm,
    fontFamily: Typography.weights.regular,
    color: Colors.text.secondary,
    lineHeight: Typography.sizes.sm * Typography.lineHeights.normal,
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
