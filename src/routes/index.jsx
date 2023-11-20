import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { FlipboardIcon } from "../screens/Pagina";
import Segunda from "../screens/Segunda";


const Stack = createNativeStackNavigator();

export const Rotas = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="FlipboardIcon"
          component={FlipboardIcon}
          options={{ headerShown: false }} />
        <Stack.Screen name="Segunda" component={Segunda} />

      </Stack.Navigator>
    </NavigationContainer>
  );
};
