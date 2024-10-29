// screens/TimemaniaScreen.tsx
import React from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';

import styles from './styles';
import NumberCircle from '../../components/circule/NumberCircule';
import { useLoteria } from '../../hooks';

const TimemaniaScreen: React.FC = () => {

  const { resultados, loading, error } = useLoteria();

  if (loading) {
    return <ActivityIndicator size="large" color="#209869" />;
  }

  if (error) {
    return <Text style={styles.errorText}>{error}</Text>;
  }

  const numerosTimemania = resultados.timemania?.dezenas || [];
  
  console.log("dados da api Timemania: ",  numerosTimemania);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>TIMEMANIA</Text>
      <View style={styles.numbersContainer}>
        {numerosTimemania.map((num, index) => (
          <NumberCircle key={index} number={num} backgroundColor="#FFF600" textColor="#049645" />
        ))}
      </View>
      <Text style={styles.date}>{resultados.timemania?.dataPorExtenso || 'Data não disponível'}</Text>
    </View>
  );
};



export default TimemaniaScreen;
