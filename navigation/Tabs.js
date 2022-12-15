import { View, StyleSheet, Image, Text } from "react-native-web"
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Entypo } from '@expo/vector-icons' 
import Turnos from '../src/screens/Turnos'
import Mensagens from "../src/screens/Mensagens"
import Perfil from "../src/screens/Perfil"

const Tab = createBottomTabNavigator()

const Tabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="Schedule" 
      screenOptions={{ 
        headerShown: false,
        tabBarShowLabel: false,
        tabBarLabel: {
          color: 'white'
        },
        tabBarStyle: {
          position: 'absolute',
          bottom: 25,
          left: 20,
          right: 20,
          elevation: 0,
          backgroundColor: '#128FC8',
          borderRadius: 15,
          height: 90,
          ...styles.shadow
        }
      }}
    >
      <Tab.Screen name="Escala de atendimento" component={Turnos} options={{
        tabBarIcon: ({focused}) => (
          <View style={{ alignItems: 'center', justifyContent: 'center', top: 10, marginBottom: 15  }}>
            <Entypo name="calendar" size={24} color="white" style={{ opacity: focused ? 1 : 0.75, marginBottom: 2 }}/>
            <Text style={{color: 'white', opacity: focused ? 1 : 0.75 , fontSize: 12, fontFamily: 'Futura', fontWeight: 'bold' }}>TURNOS</Text>
          </View>
        )
      }}/>

      <Tab.Screen name="Mensagens" component={Mensagens} options={{
        tabBarIcon: ({focused}) => (
          <View style={{ alignItems: 'center', justifyContent: 'center', top: 10, marginBottom: 15 }}>
            <Entypo name="message" size={24} color="white" style={{ opacity: focused ? 1 : 0.75,marginBottom: 2  }}/>
            <Text style={{color: 'white', opacity: focused ? 1 : 0.75 , fontSize: 12, fontFamily: 'Futura', fontWeight: 'bold' }}>MENSAGENS</Text>
          </View>
        )
      }}/>

      <Tab.Screen name="Perfil" component={Perfil} options={{
        tabBarIcon: ({focused}) => (
          <View style={{ alignItems: 'center', justifyContent: 'center', top: 10, marginBottom: 15  }}>
            <Entypo name="user" size={24} color="white" style={{ opacity: focused ? 1 : 0.75, marginBottom: 2 }}/>
            <Text style={{color: 'white', opacity: focused ? 1 : 0.75 , fontSize: 12, fontFamily: 'Futura', fontWeight: '600' }}>PERFIL</Text>
          </View>
        )
      }}/>
    </Tab.Navigator>
  )
}

const styles = StyleSheet.create({
  shadow: {
    shadowColor: '#7F5DF0',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5
  }
})

export default Tabs