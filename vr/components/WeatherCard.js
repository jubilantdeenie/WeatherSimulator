import React, { Component } from 'react';

import { View, Text, Image, StyleSheet } from 'react-vr';

export default class WeatherCard extends Component {
  render() {
    return (
      <View>
        <Text>{this.props.weatherObject.name}</Text>
      </View>
    )
  }
}