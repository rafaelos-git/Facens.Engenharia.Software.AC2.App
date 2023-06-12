import { useNavigation, useRoute } from "@react-navigation/native"
import React, { useState } from "react"
import { Text, SafeAreaView, StyleSheet, View, ImageBackground, KeyboardAvoidingView, Platform, TextInput, TouchableWithoutFeedback, Keyboard, TouchableOpacity } from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons'

import colors from '../../styles/colors'
import fonts from '../../styles/fonts'
import api from '../../services/api'

import { BackButton } from "../../components/BackButton"

import headerImage from '../../assets/header.png'

export function RegisterStudent (){
    const navigation = useNavigation()
    const route = useRoute()

    const [name, setName] = useState<string>()
    const [ra, setRa] = useState<string>()
    const [email, setEmail] = useState<string>()
    const [password, setPassword] = useState<string>()
    const [secure, setSecure] = useState(true)

    const validations = []
    validations.push(name && name.length >= 5)
    validations.push(password && password.length >= 5)
    validations.push(ra && ra.length == 6)
    validations.push(email && email.includes('@'))

    const validForm = validations.reduce((t, a) => t && a)

    const insert = () => {

    }

    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <ImageBackground source={headerImage} borderBottomLeftRadius={15} borderBottomRightRadius={15} style={styles.image} imageStyle={{ opacity: 0.8 }}>
                    <View style={styles.backButtonBar}>
                        <BackButton back={'Students'} color={'black'} />
                    </View>
                    <View style={styles.titleBar}>
                        <Text style={styles.title}>
                            Cadastrar{'\n'}
                            Aluno
                        </Text>
                    </View>
                </ImageBackground>
            </View>
            <View style={styles.body}>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
                    <KeyboardAvoidingView style={styles.wrapper} behavior={Platform.OS === "ios" ? "padding" : "height"} enabled>
                        <View style={styles.bar}>
                            <Text style={styles.textInput}>
                                Nome do aluno
                            </Text>
                            <TextInput 
                                style={styles.input}
                                value={name}
                                placeholder='Nome'
                                placeholderTextColor={'#9e9a9a'}
                                onChangeText={value => setName(value)}
                            />
                        </View>
                        <View style={styles.bar}>
                            <Text style={styles.textInput}>
                                RA
                            </Text>
                            <TextInput 
                                style={styles.input}
                                value={ra}
                                maxLength={6}
                                keyboardType="numeric"
                                placeholder='RA'
                                placeholderTextColor={'#9e9a9a'}
                                onChangeText={value => setRa(value)}
                            />
                        </View>
                        <View style={styles.bar}>
                            <Text style={styles.textInput}>
                                E-mail
                            </Text>
                            <TextInput 
                                style={styles.input}
                                value={email}
                                placeholder='E-mail'
                                placeholderTextColor={'#9e9a9a'}
                                onChangeText={value => setEmail(value)}
                            />
                        </View>
                        <View style={styles.bar}>
                            <Text style={styles.textInput}>
                                Senha
                            </Text>
                            <TextInput 
                                style={styles.input}
                                value={password}
                                placeholder='Senha'
                                placeholderTextColor={'#9e9a9a'}
                                onChangeText={value => setPassword(value)}
                                secureTextEntry={secure}
                            />
                            <TouchableOpacity
                                style={styles.securePassword}
                                onPress={() => setSecure(!secure)}
                            >
                                { secure &&
                                    <Ionicons name="eye" size={30} color="black" />
                                }
                                { !secure &&
                                    <Ionicons name="eye-off" size={30} color="black" />
                                }
                            </TouchableOpacity>
                        </View>
                        <View>
                            <TouchableOpacity 
                                style={[styles.button, validForm ? {} : { backgroundColor: '#AAA' }]} 
                                activeOpacity={0.7} 
                                onPress={insert}
                                disabled={!validForm}
                            >
                                <Text style={styles.buttonText}>
                                    Enviar
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </KeyboardAvoidingView>
                </TouchableWithoutFeedback>
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
    },
    title: {
        fontSize: 28,
        fontFamily: fonts.heading,
        color: '#000',
        textAlign: 'center',
        marginBottom: 10,
        marginLeft: '10%'
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
    },
    wrapper: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start', 
        // borderWidth: 1,
    },
    bar: {
        marginTop: "10%",
        borderWidth: 1,
        flexDirection: 'row',
        width: '80%',
        borderRadius: 12,
        alignItems: 'center',
        justifyContent: 'flex-start',
        height: "6%"
    },
    textInput: {
        fontFamily: fonts.text,
        fontSize: 12,
        textAlignVertical: 'center',
        marginLeft: "5%",
        marginRight: "12.5%",
        width: '30%',
        height: "100%",
        //borderWidth: 1,
    },
    securePassword: {
        width: '12%',
        height: "100%",
        justifyContent: 'center'
    },
    input: {
        color: '#000',
        width: '38%',
        fontSize: 12,
        padding: 5,
        alignItems: 'flex-end',
        height: "100%",
        // borderWidth: 1,
    },
    descriptionTitle: {
        marginTop: "5%",
        flexDirection: 'row',
        width: '80%',
        alignItems: 'center',
        justifyContent: 'flex-start',
        height: (Platform.OS === 'android') ? "2.5%" : "3.75%"
        //borderRadius: 12,
    },
    descriptionBar: {
        marginTop: "5%",
        borderWidth: 1,
        flexDirection: 'row',
        width: '80%',
        borderRadius: 12,
        justifyContent: 'flex-start',
        height: "15%",
        alignItems: 'flex-start'    
    },
    descriptionInput: {
        color: '#000',
        width: '100%',
        fontSize: 14,
        padding: 10,
        alignItems: 'flex-end',
        height: '100%',
    },
    selectImageBar: {
        width: '38%',
        padding: "1%",
        alignItems: 'flex-end',
        height: "100%",
    },
    selectImageText: {
        color: "#000",
        fontFamily: fonts.text,
        fontSize: 10,
        textAlign: 'center',
    },
    imagePreviewBar: {
        marginTop: "5%",
        borderWidth: 1,
        height: "10%",
        width: '20%',
        borderRadius: 15,
    },
    imagePreview: {
        width: '100%', 
        height: '100%',
    },
    button: {
        marginTop: "50%",
        marginBottom: "7%",
        backgroundColor: colors.blue_custom,
        justifyContent: 'center',
        borderRadius: 16,
        alignItems: 'center',
        height: 70,
        width: 150,
    },
    buttonText: {
        fontFamily:fonts.text,
        color: colors.white,
        fontSize: 24,
    },
})