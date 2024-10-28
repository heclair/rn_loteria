import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { LoteriaProvider } from './src/contexts';
import ResultadosLoteria from './src/screen/ResultadoLoteria';

const App: React.FC = () => {
  return (
      <LoteriaProvider>
          <SafeAreaView style={{ flex: 1 }}>
              <ResultadosLoteria />
          </SafeAreaView>
      </LoteriaProvider>
  );
};

export default App;