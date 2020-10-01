import React, { Component } from 'react';

import { View, Text, Pano, AppRegistry, asset } from 'react-vr';

class WeatherSimulator extends Component {
  render() {
    return (
      <View>
        <Pano source={asset('amsterdam.jpg')}></Pano>
      </View>
    )
  }
};

AppRegistry.registerComponent('WeatherSimulator', () => WeatherSimulator);
