import { useEffect, React } from 'react';
import { View, Image } from 'react-native';



function SplashScreen({navigation}) {

 // After 2 seconds it will automatically route to the IntroVideoScreen
  useEffect(() => {

    setTimeout(() => {
      navigation.navigate('Home')
    }, 2500)

  },[]);
  
  return (

    // Splash Screen Background color blue with 1stchoice Logo
    <View style={{
        flex:1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center' 
        }}>

       <Image
          style={{ 
            width: 180, 
            height: 210}}
          source={require('../images/logo.png')}
        />

    </View>

  );
}

export default SplashScreen;

  