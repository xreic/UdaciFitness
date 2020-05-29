// Dependencies
import React, { Component } from 'react';
import { View } from 'react-native';

// Helpers
import { getMetricMetaInfo } from '../utils/helpers';

// React
import UdaciSlider from './UdaciSlider';
import UdaciSteppers from './UdaciSteppers';

class AddEntry extends Component {
  state = {
    run: 0,
    bike: 0,
    swim: 0,
    sleep: 0,
    eat: 0
  };

  /**
   * @param metric
   * Receives a metric whose count needs to be incremented
   */
  increment = (metric) => {
    const { max, step } = getMetricMetaInfo(metric);

    this.setState((state) => {
      const count = state[metric] + step;

      return {
        ...state,
        [metric]: count > max ? max : count
      };
    });
  };

  /**
   * @param metric
   * Receives a metric whose count needs to be decremented
   */
  decrement = (metric) => {
    this.setState((state) => {
      const count = state[metric] - getMetricMetaInfo(metric).step;

      return {
        ...state,
        [metric]: count < 0 ? 0 : count
      };
    });
  };

  /**
   * @param metric
   * Receives a metric whose count will be adjusted to whatever the slider is set to
   * @param value
   * Value of the slider
   */
  slide = (metric, value) => {
    this.setState(() => ({
      [metric]: value
    }));
  };

  render() {
    return <View>{getMetricMetaInfo('bike').getIcon()}</View>;
  }
}

export default AddEntry;
