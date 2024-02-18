import React, {Component} from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';

class Item extends Component {

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>{this.props.listItem.name}</Text>
        {/* <Text style={styles.text}>{this.props.song}</Text> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'blue',
    alignItems: 'center',
    height: 90,
    margin: 10,
    width: '90%'
  },
  text: {
      color: 'white',
      fontSize: 24,
  }
});

export default Item;