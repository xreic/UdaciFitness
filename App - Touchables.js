import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableHighlight,
  TouchableNativeFeedback,
  TouchableOpacity,
  TouchableWithoutFeedback
} from 'react-native';
import AddEntry from './components/AddEntry';

/**
 * TouchableNativeFeedback
 *  Android only
 *  Ripple effect
 *
 * TouchableOpactiy
 *  Changes the opacity when pressed
 *  Allows for the button to shine through
 *
 * TouchableWithoutFeedback
 *  Does not work with <Text> child, must be <View>
 *  Move CSS for into the <View> child
 */
class App extends Component {
  handlePress = () => {
    alert('Hello!');
  };

  render() {
    return (
      <View style={styles.container}>
        <TouchableNativeFeedback
          background={TouchableNativeFeedback.SelectableBackground()}
          onPress={this.handlePress}
        >
          <View style={styles.btn}>
            <Text style={styles.btnText}>Touchable Highlight</Text>
          </View>
        </TouchableNativeFeedback>
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
    alignItems: 'center',
    justifyContent: 'center'
  },
  btn: {
    backgroundColor: '#E53224',
    padding: 10,
    paddingLeft: 50,
    paddingRight: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5
  },
  btnText: {
    color: '#fff'
  }
});
