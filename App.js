
import Index from './src/config/index' 
import React from 'react'
import {View,Text,ActivityIndicator,Image} from 'react-native'


class App extends React.Component{
  state = {
    role: true
  }
  render() {
    setTimeout(() => {
      this.setState({
        role: false
      })
    }, 3000)
    if (this.state.role) {
      return (
        <View style={{ alignItems: 'center', margin: 50, flex: 1,justifyContent:'center' }}>
          <Text style={{ fontSize: 34, color: '' }}>selamat datang</Text>
            <Image source={require('./sdr/assets/e7b44c2a-2db3-4515-b5e8-3d5e0e56f60f_200x200.png')} style={{height:300,width:300}}/>
           </View>

        
      )
    }
    return(
      <Index/>
    )
  }
} 
export default App
