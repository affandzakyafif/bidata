import React from 'react'
import {createAppContainer} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'
import Home from '../component/home'
import Data from '../component/data'
import Datadetail from '../component/datadetail'
import Login from '../component/login'

const App = createStackNavigator({
    Login:{
      screen:Login,
        navigationOptions: () => ({
            header: null

        }),
    },
    Home:{
        screen:Home,
        navigationOptions: () => ({
            header:null

        }),
    },
  Data:{
      screen:Data,
      navigateOptions:() => ({
          header: null

      }),
    },
    Datadetail:{
        screen:Datadetail,
        navigateOptions:() => ({
            header:null
        }),
    }
})
export default createAppContainer(App)