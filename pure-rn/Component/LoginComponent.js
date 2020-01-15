import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity, TouchableHighlight, Button } from 'react-native';
import Line from './Line';
import Separator from './Separator';

export default class LoginComponent extends Component {
    render() {
        return <View style={loginStyles.container}>
            <View style={loginStyles.upperHalf}>
                <Image
                    style={loginStyles.logo}
                    source={{ uri: 'https://www.solutionanalysts.com/wp-content/themes/sa/images/logo.png' }}
                />

                {/* Auth View */}
                <View style={loginStyles.authContainer}>
                    <TextInput
                        placeholder='Phone number, username or email address'
                        placeholderTextColor='gray'
                        style={[loginStyles.input, loginStyles.emailInput]}>
                    </TextInput>

                    <TextInput
                        placeholder='Password'
                        placeholderTextColor='gray'
                        secureTextEntry={true}
                        style={[loginStyles.input, loginStyles.passwordInput]}>
                    </TextInput>

                    <TouchableOpacity>
                        <Text
                            style={[loginStyles.forgotPass, loginStyles.blueText]}>
                            Forgotten password?
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>

            <View style={loginStyles.lowerHalf}>
                <View>
                    <TouchableOpacity style={loginStyles.buttonContainer}>
                        <Text
                            style={[loginStyles.login, loginStyles.blueButton]}>
                            Log In
                        </Text>
                    </TouchableOpacity>
                </View>
                <View style={{ top: 30 }}>
                    <TouchableOpacity style={loginStyles.buttonContainer}>
                        <Text
                            style={[loginStyles.login, loginStyles.blueButton]}>
                            Continue as Zaid Khan
                        </Text>
                    </TouchableOpacity>
                </View>

                <View style={{ top: 80 }}>
                    <Separator></Separator>
                </View>

                <View style={{ top: 120 }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={loginStyles.dontHaveAccount}>Don't have an account?</Text>
                        <Text style={loginStyles.blueText}> Sign Up</Text>
                    </View>
                </View>
            </View>

            {/* Footer */}
            <View style={loginStyles.footer}>
                <Line></Line>
                <View style={{ top: 10, alignItems: 'center' }}>
                    <Text style={{ color: 'white' }}>from</Text>
                    <Text style={{ color: 'white', fontWeight: 'bold' }}>SOLUTION ANALYSTS</Text>
                </View>
            </View>
        </View>
    }
}

const loginStyles = StyleSheet.create({
    dontHaveAccount: {
        color: 'rgba(255, 255, 255 ,0.6)',
        fontSize: 15,
        fontWeight: '500'
    },
    container: {
        flex: 1,
        backgroundColor: 'black'
    },
    upperHalf: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-end',
        bottom: 30
    },
    lowerHalf: {
        flex: 1,
    },
    authContainer: {
        // backgroundColor: '#f00',
        width: '90%'
    },
    logo: {
        bottom: 70,
        width: 293,
        height: 64
    },
    input: {
        borderWidth: 1,
        borderColor: 'gray',
        padding: 12,
        borderRadius: 5,
        color: '#fff',
        fontWeight: 'bold'
        // width: '10%'
    },
    emailInput: {
        bottom: 33
    },
    passwordInput: {
        bottom: 20,

    },
    blueText: {
        color: 'rgba(8, 146, 243, 1)',
        fontSize: 14,
        fontWeight: 'bold'
    },
    forgotPass: {
        alignSelf: 'flex-end',
        bottom: 10,
        top: 1,
    },
    buttonContainer: {
        top: 5,
        height: 45,
        alignSelf: 'flex-end',
        fontWeight: 'bold',
        width: '90%',
        alignSelf: 'center',
        borderRadius: 10,
        overflow: 'hidden',
        backgroundColor: 'rgba(8, 146, 243, 1)',
        alignItems: 'center',
        justifyContent: 'center'
    },
    login: {
        color: 'white',
        fontSize: 16,
    },
    footer: {
        flex: 0.25,
        alignItems: 'center',
        // backgroundColor: 'white',
        // justifyContent: 'center'
    },
})