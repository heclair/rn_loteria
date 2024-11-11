// screens/MegaSenaScreen.tsx
import React from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import { useLoteria } from '../../hooks/useLoteria';
import NumberCircle from '../../components/circule/NumberCircule';

import { theme,styles } from '../../theme';

const MegaSenaScreen: React.FC = () => {
  const { resultados, loading, error } = useLoteria();

  if (loading) {
    return <ActivityIndicator size="large" color={theme.colors.megaSena.background} />;
  }

  if (error) {
    <Text style={{fontSize: theme.fontSizes.text}}>Carregando...</Text>;
  }

  const numerosMegaSena = resultados.megasena?.dezenas || [];
  
  console.log("dados da api Megasena: ",  numerosMegaSena);


  return (
    <View style={styles.container}>
      <Text style={styles.title}>MEGA-SENA</Text>
      <View style={styles.circleContainer}>
        {numerosMegaSena.map((num, index) => (
          <NumberCircle key={index} number={num} backgroundColor={theme.colors.megaSena.background} text={theme.colors.megaSena.text} spacing={theme.spacing.medium} />
        ))}
      </View>
      <Text style={styles.subText}>
        {resultados.megasena?.dataPorExtenso || 'Data não disponível'}
      </Text>
    </View>
  );
};

export default MegaSenaScreen;
