import React, { Component } from 'react';
import { StyleSheet, Text, View, Slider } from 'react-native';

class App extends Component {
  state = { value: 0 };

  render() {
    return (
      <View style={styles.container}>
        <Slider
          minimumValue={-10}
          maximumValue={10}
          step={1}
          value={this.state.value}
          onValueChange={(value) => this.setState(() => ({ value }))}
        />
        <Text>Value: {this.state.value}</Text>
      </View>
    );
  }
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginLeft: 10,
    marginRight: 10,
    alignItems: 'stretch',
    justifyContent: 'center'
  }
});
