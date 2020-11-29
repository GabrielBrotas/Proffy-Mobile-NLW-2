import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack'

// pages
import Landing from '../pages/Landing'
import GiveClass from '../pages/GiveClasses';
import Login from '../pages/Login'
import StudyTabs from './StudyTabs';
import StepTwo from '../pages/RegisterContent/StepTwo'
import StepOne from '../pages/RegisterContent/StepOne'
import RegisterFinished from '../pages/RegisterContent/RegisterFinished'
import { useSelector } from 'react-redux';
import { StateProps } from '../redux/store';

const { Navigator, Screen} = createStackNavigator()

function AppStack() {

    const {authenticated} = useSelector( (state: StateProps) => state.users )

    console.log(authenticated)

    return (
        <NavigationContainer>
            <Navigator screenOptions={{headerShown: false}}>
                {!authenticated ? (
                    <>
                    <Screen name="Login" component={Login} />
                    <Screen name="StepOne" component={StepOne} />
                    <Screen name="StepTwo" component={StepTwo} />
                    <Screen name="RegisterFinished" component={RegisterFinished} />
                    </>
                ) : (
                    <>
                    <Screen name="Landing" component={Landing} />
                    <Screen name="GiveClasses" component={GiveClass} />
                    <Screen name="Study" component={StudyTabs} />    
                    </>
                )}
            </Navigator>
        </NavigationContainer>
    )
}

export default AppStack