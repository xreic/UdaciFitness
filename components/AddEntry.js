// Dependencies
import React, { Component } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

// Helpers
import { getMetricMetaInfo, timeToString } from '../utils/helpers';

// React
import UdaciSlider from './UdaciSlider';
import UdaciSteppers from './UdaciSteppers';
import DateHeader from './DateHeader';
import TextButton from './TextButton';

function SubmitBtn({ onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text>Submit</Text>
    </TouchableOpacity>
  );
}

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

  submit = () => {
    const key = timeToString();
    const entry = this.state;

    // TODO Update Redux
    this.setState(() => ({
      run: 0,
      bike: 0,
      swim: 0,
      sleep: 0,
      eat: 0
    }));

    // TODO Navigate to Home
    // TODO Save to DB
    // TODO Clear local notification
  };

  reset = () => {
    const key = timeToString();

    // TODO Update Redux
    // TODO Route to Home
    // TODO Update DB
  };

  render() {
    const metaInfo = getMetricMetaInfo();

    if (this.props.alreadyLogged) {
      return (
        <View>
          <Ionicons name="md-happy" size={100} />
          <Text>You already logged your information for today.</Text>
          <TextButton onPress={this.reset}>Reset</TextButton>
        </View>
      );
    }

    return (
      <View>
        <DateHeader date={new Date().toLocaleDateString()} />
        {Object.keys(metaInfo).map((key) => {
          const { getIcon, type, ...rest } = metaInfo[key];
          const value = this.state[key];

          return (
            <View key={key}>
              {getIcon()}
              {type === 'slider' ? (
                <UdaciSlider
                  value={value}
                  onChange={(value) => this.slide(key, value)}
                  {...rest}
                />
              ) : (
                <UdaciSteppers
                  value={value}
                  onIncrement={() => this.increment(key)}
                  onDecrement={() => this.decrement(key)}
                  {...rest}
                />
              )}
            </View>
          );
        })}
        <SubmitBtn onPress={this.submit} />
      </View>
    );
  }
}

export default AddEntry;
