import { useNavigation } from "@react-navigation/native"
import { Button, View } from "react-native-web"

const Home = ({ navigation }) => {
  return (
    <View>
      <p>Home</p>
      <Button title='Ir para Main Page' onPress={() => navigation.navigate('MainPage')} />
    </View>
  )
}

export default Home