import { View, Text, StyleSheet, ScrollView, TouchableOpacity, TextInput } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MaterialIcons, Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import Card from '../components/Card';
import { Colors, Typography, Spacing, BorderRadius, Shadows } from '../constants/theme';

export default function PayDetailsScreen() {
  return (
    <SafeAreaView style={styles.container}>
      {/* Custom Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color={Colors.text.primary} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Send PYUSD</Text>
        <View style={styles.headerRight} />
      </View>

      <ScrollView contentContainerStyle={styles.content}>
        {/* Amount Card */}
        <Card variant="elevated" style={styles.amountCard}>
          <Text style={styles.amountLabel}>Amount (PYUSD)</Text>
          <View style={styles.amountInputContainer}>
            <TextInput
              style={styles.amountInput}
              placeholder="0.00"
              keyboardType="numeric"
              placeholderTextColor={Colors.neutral.gray300}
            />
            <Text style={styles.currencyLabel}>PYUSD</Text>
          </View>
          <View style={styles.balanceInfo}>
            <Ionicons name="wallet" size={16} color={Colors.text.secondary} />
            <Text style={styles.balanceText}>Balance: 0.00 PYUSD</Text>
          </View>
        </Card>

        {/* Send To Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Send To</Text>

          {/* ENS / PayPal / Wallet */}
          <Card variant="outlined" style={styles.inputCard}>
            <TextInput
              style={styles.addressInput}
              placeholder="ENS name, PayPal email, or wallet address"
              placeholderTextColor={Colors.text.tertiary}
            />
          </Card>

          {/* Quick Options */}
          <View style={styles.quickOptions}>
            <TouchableOpacity style={styles.optionChip}>
              <MaterialIcons name="contacts" size={16} color={Colors.primary.main} />
              <Text style={styles.optionText}>Contacts</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.optionChip}>
              <MaterialIcons name="qr-code-scanner" size={16} color={Colors.primary.main} />
              <Text style={styles.optionText}>Scan QR</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Note Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Note (Optional)</Text>
          <Card variant="outlined">
            <TextInput
              style={styles.noteInput}
              placeholder="Add a message..."
              placeholderTextColor={Colors.text.tertiary}
            />
          </Card>
        </View>

        {/* Send Button */}
        <TouchableOpacity style={styles.sendButton}>
          <Text style={styles.sendButtonText}>Send PYUSD</Text>
          <Ionicons name="arrow-forward" size={20} color={Colors.neutral.white} />
        </TouchableOpacity>

        {/* Info */}
        <View style={styles.infoBox}>
          <Ionicons name="information-circle" size={20} color={Colors.info} />
          <Text style={styles.infoText}>No fees • Instant transfer • Secured by blockchain</Text>
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
  amountCard: {
    alignItems: 'center',
    paddingVertical: Spacing['3xl'],
    marginBottom: Spacing['2xl'],
  },
  amountLabel: {
    fontSize: Typography.sizes.sm,
    fontFamily: Typography.weights.medium,
    color: Colors.text.secondary,
    marginBottom: Spacing.md,
  },
  amountInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: Spacing.lg,
  },
  amountInput: {
    fontSize: Typography.sizes['4xl'],
    fontFamily: Typography.weights.semibold,
    color: Colors.text.primary,
    minWidth: 150,
    textAlign: 'center',
  },
  currencyLabel: {
    fontSize: Typography.sizes.xl,
    fontFamily: Typography.weights.medium,
    color: Colors.text.secondary,
    marginLeft: Spacing.sm,
  },
  balanceInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.xs,
  },
  balanceText: {
    fontSize: Typography.sizes.sm,
    fontFamily: Typography.weights.regular,
    color: Colors.text.secondary,
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
  inputCard: {
    marginBottom: Spacing.md,
  },
  addressInput: {
    fontSize: Typography.sizes.base,
    fontFamily: Typography.weights.regular,
    color: Colors.text.primary,
    padding: 0,
  },
  quickOptions: {
    flexDirection: 'row',
    gap: Spacing.md,
  },
  optionChip: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.xs,
    paddingHorizontal: Spacing.lg,
    paddingVertical: Spacing.sm,
    backgroundColor: Colors.background.subtle,
    borderRadius: BorderRadius.full,
    borderWidth: 1,
    borderColor: Colors.neutral.gray200,
  },
  optionText: {
    fontSize: Typography.sizes.sm,
    fontFamily: Typography.weights.medium,
    color: Colors.primary.main,
  },
  noteInput: {
    fontSize: Typography.sizes.base,
    fontFamily: Typography.weights.regular,
    color: Colors.text.primary,
    padding: 0,
  },
  sendButton: {
    backgroundColor: Colors.primary.main,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: Spacing.lg,
    borderRadius: BorderRadius.md,
    gap: Spacing.sm,
    marginBottom: Spacing['2xl'],
    ...Shadows.md,
  },
  sendButtonText: {
    fontSize: Typography.sizes.base,
    fontFamily: Typography.weights.semibold,
    color: Colors.neutral.white,
  },
  infoBox: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.sm,
    backgroundColor: Colors.background.subtle,
    padding: Spacing.lg,
    borderRadius: BorderRadius.md,
    marginTop: Spacing.lg,
  },
  infoText: {
    flex: 1,
    fontSize: Typography.sizes.sm,
    fontFamily: Typography.weights.regular,
    color: Colors.text.secondary,
  },
});
