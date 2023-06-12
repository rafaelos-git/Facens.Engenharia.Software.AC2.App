import React from 'react'
import { TouchableOpacity, Text, StyleSheet, TouchableOpacityProps, View, ImageBackground } from 'react-native'
import { AntDesign, Ionicons, FontAwesome5, MaterialCommunityIcons, Entypo, MaterialIcons, FontAwesome } from '@expo/vector-icons'

import colors from '../styles/colors'
import fonts from '../styles/fonts'

import buttonImage from '../assets/header.png'

interface ButtonProps extends TouchableOpacityProps {
    title: string,
    icon: number,
}

export function Button({ title, icon, ...rest }: ButtonProps ) {
    return(
        <TouchableOpacity style={styles.container} {...rest}>
            <ImageBackground source={buttonImage} borderBottomLeftRadius={13} borderBottomRightRadius={13} style={styles.image} imageStyle={{ opacity: 0.8 }}>
                {(icon === 1) &&
                    <MaterialIcons name="border-color" size={36} color="black" />
                }
                {(icon === 2) &&
                    <Entypo name="add-to-list" size={36} color="black" />
                }
                {(icon === 3) &&
                    <Entypo name="list" size={36} color="black" />
                }
                <View>
                    <Text style={styles.buttonText}>
                        {title}
                    </Text>
                </View>
            </ImageBackground>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        borderBottomWidth: 4,
        borderRightWidth: 0.2,
        borderLeftWidth: 0.2,
        borderColor: '#000',
        marginTop: 20,
        marginLeft: 10,
        marginRight: 10,
        width: '90%',
        height: 150,
        borderBottomRightRadius: 16,
        borderBottomLeftRadius: 16,
    },
    buttonText: {
        marginTop: 10,
        fontSize: 20,
        color: '#000',
        fontFamily: fonts.heading,
        textAlign: 'center',
    },
    image: {
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    }
})