import React from 'react'
import {createAppContainer} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'
import Home from '../component/home'
import Data from '../component/data'
import Datadetail from '../component/datadetail'

const App = createStackNavigator({
    Home:{
        screen:Home,
        navigationOptions:{
            title:'Biodata'
        }
    },
    Data:{
        screen:Data,
        navigateOptions:{
            title:'data'
        }
    },
    Datadetail:{
        screen:Datadetail,
        navigateOptions:{
            title:'data detail'
        }
    }
})
export default createAppContainer(App)