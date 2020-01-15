import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Line from './Line';

export default function Separator() {
    return (
        <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
            <View style={style.separator} />
            <Text style={{ color: 'rgba(255, 255, 255 ,0.6)', bottom: 8, backgroundColor: 'black', fontWeight: 'bold' }}>        OR        </Text>
            <View style={style.separator} />
        </View>

    )
}

const style = StyleSheet.create({
    separator: {
        height: 1,
        backgroundColor: 'rgba(255, 255, 255 ,0.3)',
        alignSelf: 'stretch',
        width: '35%',
    }
})