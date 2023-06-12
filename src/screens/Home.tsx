import { useNavigation, useRoute } from "@react-navigation/native"
import React from "react"
import { Text, SafeAreaView, StyleSheet, View, ImageBackground } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'

import colors from '../styles/colors'
import fonts from '../styles/fonts'
import api from '../services/api'

import headerImage from '../assets/header.png'
import { Button } from "../components/Button"

export function Home (){
    const navigation = useNavigation()
    const route = useRoute()

    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <ImageBackground source={headerImage} borderBottomLeftRadius={15} borderBottomRightRadius={15} style={styles.image} imageStyle={{ opacity: 0.8 }}>
                    <Text style={styles.title}>Início</Text>
                </ImageBackground>
            </View>
            <View style={styles.body}>
                <View style={styles.menu}>
                    <Button title='Alunos' icon={1} onPress={() => navigation.navigate('Students' as never)}/>
                </View>
                <View style={styles.menu}>
                    <Button title='Cursos' icon={1} onPress={() => navigation.navigate('Courses' as never)}/>
                </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        flex: 2,
        backgroundColor: colors.blue,
        borderBottomWidth: 3,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
    },
    body: {
        flex: 8,
        flexDirection: 'row',
    },
    title: {
        fontSize: 38,
        fontFamily: fonts.heading,
        color: '#000',
        textAlign: 'center',
        marginBottom: 10,
    },
    menu: {
        flex: 1,
        marginTop: 30,
    },
    image: {
        width: '100%',
        height: '100%',
        justifyContent: 'flex-end',
        alignItems: 'center',
    }
})