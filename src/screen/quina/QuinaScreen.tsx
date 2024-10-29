// screens/QuinaScreen.tsx
import React from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';

import styles from './styles';
import NumberCircle from '../../components/circule/NumberCircule';
import { useLoteria } from '../../hooks';

const QuinaScreen: React.FC = () => {
  
  const { resultados, loading, error } = useLoteria();

  if (loading) {
    return <ActivityIndicator size="large" color="#209869" />;
  }

  if (error) {
    return <Text style={styles.errorText}>{error}</Text>;
  }

  const numerosQuina = resultados.quina?.dezenas || [];
  
  console.log("dados da api Quina: ",  numerosQuina);


  return (
    <View style={styles.container}>
      <Text style={styles.title}>QUINA</Text>
      <View style={styles.numbersContainer}>
        {numerosQuina.map((num, index) => (
          <NumberCircle key={index} number={num} backgroundColor="#260085" textColor="#fff" />
        ))}
      </View>
      <Text style={styles.date}>{resultados.quina?.dataPorExtenso || 'Data não disponível'}</Text>
    </View>
  );
};



export default QuinaScreen;
