// src/screens/ResultadosLoteria.tsx

import React from 'react';
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native';
import { useLoteria } from '../hooks';


const ResultadosLoteria: React.FC = () => {
    const { resultados, loading, error } = useLoteria();

    if (loading) {
        return (
            <View style={styles.container}>
                <ActivityIndicator size="large" color="#0000ff" />
            </View>
        );
    }

    if (error) {
        return (
            <View style={styles.container}>
                <Text style={styles.error}>{error}</Text>
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Resultados da Loteria</Text>

            <View style={styles.result}>
                <Text style={styles.label}>Mega-Sena:</Text>
                <Text style={styles.resultText}>{resultados.megasena?.dezenas.join(', ') ?? 'N/A'}</Text>
            </View>

            <View style={styles.result}>
                <Text style={styles.label}>Quina:</Text>
                <Text style={styles.resultText}>{resultados.quina?.dezenas.join(', ') ?? 'N/A'}</Text>
            </View>

            <View style={styles.result}>
                <Text style={styles.label}>Timemania:</Text>
                <Text style={styles.resultText}>{resultados.timemania?.dezenas.join(', ') ?? 'N/A'}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    result: {
        marginBottom: 15,
    },
    label: {
        fontSize: 18,
        fontWeight: '600',
    },
    resultText: {
        fontSize: 18,
        color: 'green',
    },
    error: {
        color: 'red',
        fontSize: 18,
    },
});

export default ResultadosLoteria;
