import React, { useState } from 'react';
import {ScrollView, TextInput, View, Text} from 'react-native';
import { BorderlessButton, RectButton } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';
import api from '../../services/api';
import AsyncStorage from '@react-native-community/async-storage';

import { Teacher } from '../../components/TeacherItem';
import PageHeader from '../../components/PageHeader';
import TeacherItem from '../../components/TeacherItem';

import styles from './styles'
import { useFocusEffect } from '@react-navigation/native';


// todo, usar um select para escolher a materia, dia da semana, horario.

function TeacherList() {

    // informar que os favorites é um array numerico
    const [favorites, setFavorites] = useState<number[]>([])
    const [teachers, setTeachers] = useState([])
    const [isFiltersVisible, setIsFiltersVisible] = useState(false)
    
    const [subject, setSubject] = useState('')
    const [week_day, setWeekDay] = useState('')
    const [time, setTime] = useState('')


    function loadFavorites() {
        AsyncStorage.getItem("favorites").then( res => {
            // o res é recebido em texto, pois todos os dados salvos no asyncstorage são salvos assim
            if (res) {
                // converter a liste para um json
                const favoritedTeachers = JSON.parse(res)
                // pegar apenas o id dos professores
                const favoritedTeachersIds = favoritedTeachers.map( (teacher: Teacher) => {
                    return teacher.id
                })
                setFavorites(favoritedTeachersIds)
            }
        });
    }


    function handleToggleFilterVisible() {
        setIsFiltersVisible(!isFiltersVisible)
    }

    async function handleFiltersSubmit() {

        loadFavorites()

        const res = await api.get('classes', {
            params: {
                subject,
                week_day,
                time
            }
        })
        setTeachers(res.data)
        setIsFiltersVisible(false)
    }
    
    return (
        <View style={styles.container}>
            <PageHeader 
                title="Proffys disponíveis" 
                headerRight={
                    <BorderlessButton onPress={handleToggleFilterVisible}>
                        <Feather name="filter" size={20} color="#fff" />
                    </BorderlessButton>
                }
            >

            {isFiltersVisible && (
                <View style={styles.searchForm}>
                    <Text style={styles.label}>Matéria</Text>
                    <TextInput
                        style={styles.input}
                        value={subject}
                        onChangeText={ text => setSubject(text)}
                        placeholder="Qual a matéria?"
                        placeholderTextColor="#c1bccc"
                    />

                    <View style={styles.inputGroup}>
                        <View style={styles.inputBlock}>
                            <Text style={styles.label}>Dia da Semana</Text>
                            <TextInput
                                style={styles.input}
                                value={week_day}
                                onChangeText={ text => setWeekDay(text)}
                                placeholder="Qual o dia?"
                                placeholderTextColor="#c1bccc"
                            />
                        </View>
                        
                        <View style={styles.inputBlock}>
                            <Text style={styles.label}>Horário</Text>
                            <TextInput
                                style={styles.input}
                                value={time}
                                onChangeText={ text => setTime(text)}
                                placeholder="Qual o horário?"
                                placeholderTextColor="#c1bccc"
                            />
                        </View>
                    </View>

                    <RectButton style={styles.submitButton} onPress={handleFiltersSubmit}>
                        <Text style={styles.submitButtonText}>Filtrar</Text>
                    </RectButton>
                </View>
            )}
                
            </PageHeader>
            
            <ScrollView 
            style={styles.teacherList}
            contentContainerStyle={{
                paddingHorizontal: 16,
                paddingBottom: 16
            }}
            >
                
                { teachers.map( (teacher: Teacher) => (
                    <TeacherItem 
                        key={teacher.id} 
                        teacher={teacher}
                        favorited={favorites.includes(teacher.id)} 
                    />
                ))}
            
            </ScrollView>
            
        </View>
    )
}

export default TeacherList