import { useNavigation, useRoute } from "@react-navigation/native"
import React from "react"
import { Text, SafeAreaView, StyleSheet, View, ImageBackground } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'

import colors from '../../styles/colors'
import fonts from '../../styles/fonts'
import api from '../../services/api'

import headerImage from '../../assets/header.png'
import { Button } from "../../components/Button"
import { BackButton } from "../../components/BackButton"

export function Students (){
    const navigation = useNavigation()
    const route = useRoute()

    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <ImageBackground source={headerImage} borderBottomLeftRadius={15} borderBottomRightRadius={15} style={styles.image} imageStyle={{ opacity: 0.8 }}>
                    <View style={styles.backButtonBar}>
                        <BackButton back={'Home'} color={'black'} />
                    </View>
                    <View style={styles.titleBar}>
                        <Text style={styles.title}>Alunos</Text>
                    </View>
                </ImageBackground>
            </View>
            <View style={styles.body}>
                <View style={styles.menu}>
                    <Button title='Cadastrar Aluno' icon={2} onPress={() => navigation.navigate('RegisterStudent' as never)}/>
                </View>
                <View style={styles.menu}>
                    <Button title='Lista de Alunos' icon={3} onPress={() => navigation.navigate('ListStudents' as never)}/>
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
        marginBottom: '5%',
        marginLeft: '15%'
    },
    menu: {
        flex: 1,
        marginTop: 30,
    },
    image: {
        width: '100%',
        height: '100%',
        flexDirection: 'row',
    },
    titleBar: {
        flex: 8,
        justifyContent: 'flex-end',
        alignItems: 'flex-start',
        width: '100%',
        height: '100%',
    },
    backButtonBar: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%',
    }
})