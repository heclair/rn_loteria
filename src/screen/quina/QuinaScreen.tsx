// screens/QuinaScreen.tsx
import React from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';

import NumberCircle from '../../components/circule/NumberCircule';
import { useLoteria } from '../../hooks';
import { theme, styles } from '../../theme';

const QuinaScreen: React.FC = () => {
  
  const { resultados, loading, error } = useLoteria();

  if (loading) {
    return <ActivityIndicator size="large" color={theme.colors.quina.background} />;
  }

  if (error) {
    return <Text style={{fontSize: theme.fontSizes.text}}>{error}</Text>;
  }

  const numerosQuina = resultados.quina?.dezenas || [];
  
  console.log("dados da api Quina: ",  numerosQuina);


  return (
    <View style={styles.container}>
      <Text style={styles.title}>QUINA</Text>
      <View style={styles.circleContainer}>
        {numerosQuina.map((num, index) => (
          <NumberCircle key={index} number={num} backgroundColor={theme.colors.quina.background} text={theme.colors.quina.text} spacing={theme.spacing.medium} />
        ))}
      </View>
      <Text style={styles.subText}>{resultados.quina?.dataPorExtenso || 'Data não disponível'}</Text>
    </View>
  );
};



export default QuinaScreen;
