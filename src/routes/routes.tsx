import { createDrawerNavigator } from "@react-navigation/drawer";
import { LoteriaProvider } from "../contexts";
import App from "../../App";
import MegaSenaScreen from "../screen/megasena/MegaSenaScreen";
import QuinaScreen from "../screen/quina/QuinaScreen";
import TimemaniaScreen from "../screen/timemania/TimemaniaScreen";




const Drawer = createDrawerNavigator();


const DrawerNavigator= () => {
  return (

        <Drawer.Navigator initialRouteName="MegaSena">
          <Drawer.Screen name="Mega-sena" component={MegaSenaScreen} />
          <Drawer.Screen name="Quina" component={QuinaScreen} />
          <Drawer.Screen name="Timemania" component={TimemaniaScreen} />
        </Drawer.Navigator>

  );
};

export default DrawerNavigator;