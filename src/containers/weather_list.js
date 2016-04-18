import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';

class WeatherList extends Component {
  /**
  * Render a single city
  **/
  renderWeather(cityData) {
    const name = cityData.city.name;
    // temp converted in celsius from kelvin
    const temps = _.map(cityData.list.map(weather => weather.main.temp), (temp) => temp-273);
    const humiditys = cityData.list.map(weather => weather.main.humidity);
    const pressures = cityData.list.map(weather => weather.main.pressure);

    return (
      <tr key={name}>
        <td>{name}</td>
        <td><Chart data={temps} color="orange" units="℃" /></td>
        <td><Chart data={pressures} color="green" units="hPa" /></td>
        <td><Chart data={humiditys} color="blue" units="%" /></td>
      </tr>
    );
  }

  render() {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature</th>
            <th>Pressure</th>
            <th>Humidity</th>
          </tr>
        </thead>
        <tbody>
          {this.props.weather.map(this.renderWeather)}
        </tbody>
      </table>
    );
  }
}

function mapStateToProps({ weather }) { // same as: const weather = state.weather
  return { weather }; // same as: { weather: weather }
}

export default connect(mapStateToProps)(WeatherList);
