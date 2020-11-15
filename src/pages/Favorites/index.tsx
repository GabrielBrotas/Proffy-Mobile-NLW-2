import AsyncStorage from '@react-native-community/async-storage'
import React, { useState } from 'react'
import {View} from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import {useFocusEffect} from '@react-navigation/native'
 
import PageHeader from '../../components/PageHeader'
import TeacherItem, { Teacher } from '../../components/TeacherItem'

import styles from './styles'

function Favorites() {

    const [favorites, setFavorites] = useState([])
    
    function loadFavorites() {
        AsyncStorage.getItem("favorites").then( res => {
            // o res é recebido em texto, pois todos os dados salvos no asyncstorage são salvos assim
            if (res) {
                // converter a liste para um json
                const favoritedTeachers = JSON.parse(res)
                setFavorites(favoritedTeachers)
            }
        });
    }

    // vai ser executado sempre que a tela entrar em foco
    useFocusEffect( () => {
        loadFavorites()
    })

    return (
        <View style={styles.container}>
            <PageHeader title="Meus Proffys favoritos"/>

            <ScrollView 
            style={styles.teacherList}
            contentContainerStyle={{
                paddingHorizontal: 16,
                paddingBottom: 16
            }}
            >
                {favorites.map( (teacher: Teacher)  => (
                    <TeacherItem 
                        key={teacher.id} 
                        teacher={teacher}
                        favorited
                    />
                ))}
            </ScrollView>
        </View>
    )
}


export default Favorites