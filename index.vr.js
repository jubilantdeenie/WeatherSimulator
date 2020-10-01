import React, { Component } from 'react';

import { View, Text, Pano, AppRegistry, asset } from 'react-vr';

const api_key = 'cf97c089528d6fe1a93adb4316bf49bb';

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

// Amsterdam photo credit: ruei_ke <a href="http://www.flickr.com/photos/7380590@N03/8517676763">Amsterdam</a> via <a href="http://photopin.com">photopin</a> <a href="https://creativecommons.org/licenses/by-nc-nd/2.0/">(license)</a>
