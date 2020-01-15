import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class TodayComponent extends Component {
    constructor() {
        super()
        this.state = {
            reminderOfTheDay: "."
        }
    }

    render() {
        return <View>
            <Text>{this.state.reminderOfTheDay}</Text>
        </View>
    }
}