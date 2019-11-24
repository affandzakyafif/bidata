
import Index from './src/config/index' 
import React from 'react'
import {View,Text,ActivityIndicator} from 'react-native'


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
        <View style={{ alignItems: 'center', margin: 50, flex: 1 }}>
          <Text style={{ fontSize: 34, color: '' }}>selamat datang</Text>
          
            
            <ActivityIndicator size='large' />
            <Text>Mohon tunggu sebentar</Text>

          </View>

        
      )
    }
    return(
      <Index/>
    )
  }
} 
export default App
