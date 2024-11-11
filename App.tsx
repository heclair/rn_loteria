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
import DrawerNavigator from "./src/routes/routes";
import { theme } from "./src/theme";

const Drawer = createDrawerNavigator();


const App: React.FC = () => {
  return (
    <LoteriaProvider>
      <NavigationContainer>
      <StatusBar style="dark" backgroundColor={theme.colors.background} />
        <DrawerNavigator />
      </NavigationContainer>
    </LoteriaProvider>
  );
};

export default App;
