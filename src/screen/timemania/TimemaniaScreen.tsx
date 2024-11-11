// screens/TimemaniaScreen.tsx
import React from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';


import NumberCircle from '../../components/circule/NumberCircule';
import { useLoteria } from '../../hooks';
import { theme, styles } from '../../theme';

const TimemaniaScreen: React.FC = () => {

  const { resultados, loading, error } = useLoteria();

  if (loading) {
    return <ActivityIndicator size="large" color={theme.colors.timemania.background} />;
  }

  if (error) {
    return <Text style={{fontSize: theme.fontSizes.text}}>{error}</Text>;
  }

  const numerosTimemania = resultados.timemania?.dezenas || [];
  
  console.log("dados da api Timemania: ",  numerosTimemania);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>TIMEMANIA</Text>
      <View style={styles.circleContainer}>
        {numerosTimemania.map((num, index) => (
          <NumberCircle key={index} number={num} backgroundColor={theme.colors.timemania.background} text={theme.colors.timemania.text} spacing={theme.spacing.medium} />
        ))}
      </View>
      <Text style={styles.subText}>{resultados.timemania?.dataPorExtenso || 'Data não disponível'}</Text>
    </View>
  );
};



export default TimemaniaScreen;
