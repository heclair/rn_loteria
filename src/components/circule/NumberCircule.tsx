// components/NumberCircle.tsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import styles from './styles';

interface NumberCircleProps {
  number: string;
  backgroundColor: string;
  textColor: string;
}

const NumberCircle: React.FC<NumberCircleProps> = ({ number, backgroundColor, textColor }) => {
  return (
    <View style={[styles.circle, { backgroundColor }]}>
      <Text style={[styles.text, { color: textColor }]}>{number}</Text>
    </View>
  );
};



export default NumberCircle;
