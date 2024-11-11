// components/NumberCircle.tsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { styles } from '../../theme';

interface NumberCircleProps {
  number: string;
  backgroundColor: string;
  text: string;
  spacing: number;
}

const NumberCircle: React.FC<NumberCircleProps> = ({ number, backgroundColor, text, spacing }) => {
  return (
    <View style={[styles.circle, { backgroundColor: backgroundColor, margin: spacing }]}>
      <Text style={[styles.number, { color: text }]}>{number}</Text>
    </View>
  );
};



export default NumberCircle;
