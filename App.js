import 'react-native-gesture-handler'
import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"

import Home from "./src/screens/Home"
import Tabs from './navigation/Tabs'

const Stack = createStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="MainPage" component={Tabs} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
