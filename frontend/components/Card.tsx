import { View, StyleSheet, ViewStyle } from 'react-native';
import { Colors, BorderRadius, Spacing, Shadows } from '../constants/theme';

interface CardProps {
  children: React.ReactNode;
  style?: ViewStyle;
  variant?: 'elevated' | 'flat' | 'outlined';
  padding?: 'none' | 'sm' | 'md' | 'lg';
}

export default function Card({ children, style, variant = 'elevated', padding = 'lg' }: CardProps) {
  const paddingStyles = {
    none: {},
    sm: { padding: Spacing.md },
    md: { padding: Spacing.lg },
    lg: { padding: Spacing.xl },
  };

  const variantStyles = {
    elevated: styles.elevated,
    flat: styles.flat,
    outlined: styles.outlined,
  };

  return (
    <View style={[styles.card, variantStyles[variant], paddingStyles[padding], style]}>
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: Colors.background.card,
    borderRadius: BorderRadius.lg,
  },
  elevated: {
    borderWidth: 1,
    borderColor: Colors.neutral.gray200,
  },
  flat: {
    backgroundColor: Colors.background.subtle,
  },
  outlined: {
    borderWidth: 1,
    borderColor: Colors.neutral.gray200,
  },
});
