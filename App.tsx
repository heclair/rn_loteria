import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { LoteriaProvider } from "./src/contexts";
import ResultadosLoteria from "./src/screen/ResultadoLoteria";
import React from "react";
import MegaSenaScreen from "./src/screen/megasena/MegaSenaScreen";
import QuinaScreen from "./src/screen/quina/QuinaScreen";
import TimemaniaScreen from "./src/screen/timemania/TimemaniaScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";

const Drawer = createDrawerNavigator();


const App: React.FC = () => {
  return (
    <LoteriaProvider>
      <NavigationContainer>
        <Drawer.Navigator initialRouteName="MegaSena">
          <Drawer.Screen name="Mega-sena" component={MegaSenaScreen} />
          <Drawer.Screen name="Quina" component={QuinaScreen} />
          <Drawer.Screen name="Timemania" component={TimemaniaScreen} />
        </Drawer.Navigator>
      </NavigationContainer>
    </LoteriaProvider>
  );
};

export default App;
