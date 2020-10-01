import React, { Component } from 'react';

import { View, Text, Pano, AppRegistry, asset } from 'react-vr';

import WeatherCard from './vr/components/WeatherCard';

const api_key = 'cf97c089528d6fe1a93adb4316bf49bb';

class WeatherSimulator extends Component {
  constructor() {
    super();

    this.state = {
      weatherObject: {
        name: '',
        main: {
          temp: 0
        },
        weather: [
          {description: ''}
        ],
        wind: {
          deg: 1,
          speed: 1
        }
      }
    }
  }

  componentDidMount() {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=Amsterdam&appid=${api_key}`, {
      method: 'GET'
    })
      .then(response => response.json())
      .then(json => this.setState({weatherObject: json}));
  }

  render() {
    return (
      <View style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <Pano source={asset('amsterdam.jpg')}></Pano>
        <WeatherCard weatherObject={this.state.weatherObject}/>
      </View>
    )
  }
};

AppRegistry.registerComponent('WeatherSimulator', () => WeatherSimulator);

// Amsterdam photo credit: ruei_ke <a href="http://www.flickr.com/photos/7380590@N03/8517676763">Amsterdam</a> via <a href="http://photopin.com">photopin</a> <a href="https://creativecommons.org/licenses/by-nc-nd/2.0/">(license)</a>
