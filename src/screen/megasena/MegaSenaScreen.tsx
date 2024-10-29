// screens/MegaSenaScreen.tsx
import React from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import { useLoteria } from '../../hooks/useLoteria';
import NumberCircle from '../../components/circule/NumberCircule';
import styles from './styles';

const MegaSenaScreen: React.FC = () => {
  const { resultados, loading, error } = useLoteria();

  if (loading) {
    return <ActivityIndicator size="large" color="#209869" />;
  }

  if (error) {
    return <Text style={styles.errorText}>{error}</Text>;
  }

  const numerosMegaSena = resultados.megasena?.dezenas || [];
  
  console.log("dados da api Megasena: ",  numerosMegaSena);


  return (
    <View style={styles.container}>
      <Text style={styles.title}>MEGA-SENA</Text>
      <View style={styles.numbersContainer}>
        {numerosMegaSena.map((num, index) => (
          <NumberCircle key={index} number={num} backgroundColor="#209869" textColor="#fff" />
        ))}
      </View>
      <Text style={styles.date}>
        {resultados.megasena?.dataPorExtenso || 'Data não disponível'}
      </Text>
    </View>
  );
};

export default MegaSenaScreen;
