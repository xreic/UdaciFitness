import React from 'react';
import { View, Slider, Text, StyleSheet } from 'react-native';
import { gray } from '../utils/colors';

const UdaciSlider = ({ max, unit, step, value, onChange }) => (
  <View style={styles.row}>
    <Slider
      step={step}
      value={value}
      maximumValue={max}
      minimumValue={0}
      onValueChange={onChange}
      style={{ flex: 1 }}
    />
    <View style={styles.metricCounter}>
      <Text style={{ fontSize: 24, textAlign: 'center' }}>{value}</Text>
      <Text style={{ fontSize: 18, color: gray }}>{unit}</Text>
    </View>
  </View>
);

export default UdaciSlider;

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center'
  },
  metricCounter: {
    width: 85,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
