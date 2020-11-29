import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack'

// pages
import Landing from '../pages/Landing'
import GiveClass from '../pages/GiveClasses';
import Register from '../pages/Register'
import Login from '../pages/Login'
import StudyTabs from './StudyTabs';

const { Navigator, Screen} = createStackNavigator()

function AppStack() {
    return (
        <NavigationContainer>
            <Navigator screenOptions={{headerShown: false}}>
                <Screen name="Login" component={Login} />
                <Screen name="Register" component={Register} />
                <Screen name="Landing" component={Landing} />
                <Screen name="GiveClasses" component={GiveClass} />
                <Screen name="Study" component={StudyTabs} />
            </Navigator>
        </NavigationContainer>
    )
}

export default AppStack